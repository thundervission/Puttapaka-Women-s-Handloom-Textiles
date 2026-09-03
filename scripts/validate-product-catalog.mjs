import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const csvPath = getArgument("--csv");
const sourcePath = csvPath
  ? path.resolve(root, csvPath)
  : path.resolve(root, "data/products.ts");
const isAiDraft = Boolean(csvPath && path.basename(sourcePath) === "AI-PRODUCT-CATALOG-DRAFT.csv");
const categoriesPath = path.resolve(root, "data/categories.ts");
const products = csvPath
  ? readCsvProducts(sourcePath)
  : [
      ...readTypeScriptArray(sourcePath, "products"),
      ...readTypeScriptArray(path.resolve(root, "data/draft-products.ts"), "draftProducts"),
    ];
const categories = readTypeScriptArray(categoriesPath, "categories");
const errors = [];
const availabilityValues = new Set([
  "available",
  "low_stock",
  "sold_out",
  "pre_order",
  "hidden",
]);
const categorySlugs = new Set(categories.map((category) => category.slug));
const productIds = new Set();
const productSlugs = new Set();
const imageUsage = new Map();

products.forEach((product, index) => {
  const label = `${csvPath ? "row" : "product"} ${index + 1}`;
  const requiredFields = product.status === "draft" || product.provisional
    ? ["id", "slug", "name", "status", "images"]
    : [
        "id",
        "slug",
        "name",
        "description",
        "priceInr",
        "categorySlug",
        "availability",
        "status",
        "images",
      ];
  for (const field of requiredFields) {
    if (product[field] === undefined || product[field] === "") {
      errors.push(`${label}: missing required field ${field}`);
    }
  }

  if (product.id && !/^PWT-\d{3}$/.test(product.id)) {
    errors.push(`${label}: invalid product ID ${product.id}`);
  }
  if (product.id && productIds.has(product.id)) {
    errors.push(`${label}: duplicate product ID ${product.id}`);
  }
  if (product.id) productIds.add(product.id);

  if (product.slug && !/^[a-z0-9-]+$/.test(product.slug)) {
    errors.push(`${label}: invalid slug ${product.slug}`);
  }
  if (product.slug && productSlugs.has(product.slug)) {
    errors.push(`${label}: duplicate product slug ${product.slug}`);
  }
  if (product.slug) productSlugs.add(product.slug);

  if (!isAiDraft && product.status !== "draft" && !product.provisional && (!Number.isInteger(product.priceInr) || product.priceInr <= 0)) {
    errors.push(`${label}: priceInr must be a positive integer`);
  }
  if (product.availability && product.availability !== "NEEDS_REVIEW" && !availabilityValues.has(product.availability)) {
    errors.push(`${label}: invalid availability ${product.availability}`);
  }
  if (!isAiDraft && product.status !== "draft" && product.status !== "published") {
    errors.push(`${label}: invalid status ${product.status}`);
  }
  if (!isAiDraft && product.categorySlug && !categorySlugs.has(product.categorySlug)) {
    errors.push(`${label}: unknown category ${product.categorySlug}`);
  }

  if (!Array.isArray(product.images) || product.images.length === 0) {
    errors.push(`${label}: images must be a non-empty array`);
  } else {
    product.images.forEach((image, imageIndex) => {
      if (!image || typeof image.src !== "string" || typeof image.alt !== "string") {
        errors.push(`${label}: image ${imageIndex + 1} is malformed`);
        return;
      }
      if (!image.alt.trim() || /^(image|photo|product image)$/i.test(image.alt.trim())) {
        errors.push(`${label}: image ${imageIndex + 1} needs meaningful alt text`);
      }
      if (!image.src.startsWith("/products/") || !image.src.endsWith(".webp")) {
        errors.push(`${label}: invalid image path ${image.src}`);
        return;
      }
      const imagePath = path.resolve(root, "public", image.src.slice(1));
      if (!fs.existsSync(imagePath)) {
        errors.push(`${label}: missing image file ${image.src}`);
      }
      const users = imageUsage.get(image.src) ?? [];
      users.push(product.id ?? label);
      imageUsage.set(image.src, users);
    });
  }

  for (const field of ["blouseIncluded", "featured", "newArrival"]) {
    if (product[field] !== undefined && typeof product[field] !== "boolean") {
      errors.push(`${label}: ${field} must be true or false`);
    }
  }
});

if (csvPath) validateCsvFields(products, errors);

const duplicateImages = [...imageUsage.entries()]
  .filter(([, users]) => users.length > 1)
  .map(([image, users]) => `${image} (${users.join(", ")})`);

if (errors.length > 0) {
  console.error(`Catalog validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Catalog validation passed: ${products.length} product record(s).`);
}

console.log(`Mapped images: ${imageUsage.size}`);
if (duplicateImages.length > 0) {
  console.log(`Duplicate image usage: ${duplicateImages.join("; ")}`);
}

function getArgument(name) {
  const argumentIndex = process.argv.indexOf(name);
  return argumentIndex === -1 ? "" : process.argv[argumentIndex + 1] ?? "";
}

function readTypeScriptArray(filePath, variableName) {
  const source = fs.readFileSync(filePath, "utf8");
  const marker = `export const ${variableName}`;
  const assignment = source.indexOf("=", source.indexOf(marker));
  const start = source.indexOf("[", assignment);
  const end = findMatchingBracket(source, start);
  if (start === -1 || end === -1) {
    throw new Error(`Could not read ${variableName} from ${filePath}`);
  }
  const arraySource = source
    .slice(start, end + 1)
    .replace(/\.\.\.\w+,\s*/g, "");
  return vm.runInNewContext(`(${arraySource})`);
}

function findMatchingBracket(source, start) {
  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === quote) quote = "";
      continue;
    }
    if (character === "'" || character === '"' || character === "`") {
      quote = character;
    } else if (character === "[") {
      depth += 1;
    } else if (character === "]") {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  return -1;
}

function readCsvProducts(filePath) {
  const rows = parseCsv(fs.readFileSync(filePath, "utf8"));
  if (rows.length === 0) return [];
  const headers = rows[0];
  const requiredHeaders = isAiDraft
    ? ["product_id", "image_ids", "suggested_name", "description_draft", "category", "availability"]
    : [
        "product_id",
        "image_id",
        "name",
        "slug",
        "description",
        "price_inr",
        "category_slug",
        "availability",
      ];
  const missingHeaders = requiredHeaders.filter((header) => !headers.includes(header));
  if (missingHeaders.length > 0) {
    throw new Error(`CSV is missing required columns: ${missingHeaders.join(", ")}`);
  }
  return rows.slice(1).filter((row) => row.some(Boolean)).map((row) => {
    const record = Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""]));
    return {
      id: record.product_id,
      slug: record.slug || record.product_id.toLowerCase(),
      name: record.name || record.suggested_name,
      description: record.description || record.description_draft,
      priceInr: record.price_inr === "NEEDS_REVIEW" || record.price_inr === "" ? NaN : Number(record.price_inr),
      categorySlug: record.category_slug || record.category,
      availability: record.availability,
      images: (record.image_id || record.image_ids)
        .split(/[;,]/)
        .map((imageId) => imageId.trim())
        .filter(Boolean)
        .map((imageId) => ({
          src: `/products/${imageId.replace(/\.webp$/, "")}.webp`,
          alt: record.name || record.suggested_name,
        })),
      blouseIncluded: parseBoolean(record.blouse_included),
      featured: parseBoolean(record.featured),
      newArrival: parseBoolean(record.new_arrival),
    };
  });
}

function validateCsvFields(productsToValidate, validationErrors) {
  productsToValidate.forEach((product, index) => {
    const row = index + 2;
    if (isAiDraft) {
      const allowedCategories = new Set([
        "sarees",
        "bedsheets",
        "handbags",
        "fridge-top-covers",
        "textiles",
        "clothing",
        "home-textiles",
        "accessories",
        "other",
      ]);
      if (!allowedCategories.has(product.categorySlug)) {
        validationErrors.push(`row ${row}: invalid draft category ${product.categorySlug}`);
      }
      if (product.availability !== "NEEDS_REVIEW") {
        validationErrors.push(`row ${row}: draft availability must be NEEDS_REVIEW`);
      }
      return;
    }
    for (const field of ["blouseIncluded", "featured", "newArrival"]) {
      if (product[field] === "invalid") {
        validationErrors.push(`row ${row}: ${field} must be true or false`);
      }
    }
  });
}

function parseBoolean(value) {
  if (!value || value === "NEEDS_REVIEW") return undefined;
  if (value === "true") return true;
  if (value === "false") return false;
  return "invalid";
}

function parseCsv(source) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (quoted) {
      if (character === '"' && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
    } else if (character === '"') {
      quoted = true;
    } else if (character === ",") {
      row.push(field.trim());
      field = "";
    } else if (character === "\n") {
      row.push(field.trim().replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }
  if (field || row.length > 0) {
    row.push(field.trim());
    rows.push(row);
  }
  return rows.filter((currentRow) => currentRow.some(Boolean));
}
