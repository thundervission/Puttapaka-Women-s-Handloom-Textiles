import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "docs", "AI-PRODUCT-CATALOG-DRAFT.csv");
const outputPath = path.join(root, "data", "draft-products.ts");
const rows = parseCsv(fs.readFileSync(sourcePath, "utf8"));
const headers = rows.shift();
const records = rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
const categoryMap = {
  sarees: "sarees",
  handbags: "handbags",
  textiles: "textiles",
  "home-textiles": "home-textiles",
  other: "other",
};

const products = records.map((record) => {
  const imageIds = record.image_ids.split(",").map((image) => image.trim()).filter(Boolean);
  const categorySlug = categoryMap[record.category];
  if (!categorySlug || imageIds.length === 0) {
    throw new Error(`Cannot import ${record.product_id}: category or image mapping is missing.`);
  }
  return {
    id: record.product_id,
    slug: `catalog-review-${record.product_id.toLowerCase()}`,
    name: record.suggested_name,
    description: record.description_draft,
    categorySlug,
    status: "published",
    provisional: true,
    images: imageIds.map((imageId) => ({
      src: `/products/${imageId}`,
      alt: `Catalog review image for ${record.suggested_name}`,
    })),
    review: {
      productType: record.product_type,
      detectedColors: record.detected_colors,
      detectedPattern: record.detected_pattern,
      confidence: record.ai_confidence,
      notes: record.review_notes,
    },
  };
});

const source = `import type { Product } from "@/types/product";\n\n/** AI-assisted draft records. Keep status as draft until human approval. */\nexport const draftProducts: Product[] = ${JSON.stringify(products, null, 2)};\n`;
fs.writeFileSync(outputPath, source);
console.log(`Imported ${products.length} draft products into ${path.relative(root, outputPath)}.`);

function parseCsv(sourceText) {
  const rowsResult = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < sourceText.length; index += 1) {
    const character = sourceText[index];
    if (quoted) {
      if (character === '"' && sourceText[index + 1] === '"') {
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
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field.replace(/\r$/, ""));
      rowsResult.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }
  if (field || row.length > 0) row.push(field);
  return rowsResult.filter((currentRow) => currentRow.some(Boolean));
}
