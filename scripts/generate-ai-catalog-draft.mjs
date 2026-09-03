import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const entries = [];
const add = (ids, category, productType, colors, pattern, confidence, notes) => {
  entries.push({
    ids: ids.split(","),
    category,
    productType,
    colors,
    pattern,
    confidence,
    notes,
  });
};

const saree = (id, colors, pattern = "woven motif", confidence = "MEDIUM", notes = "Exact product type, fiber, and commercial details need owner review.") =>
  add(id, "sarees", "folded saree-like textile", colors, pattern, confidence, notes);
const bag = (id, colors, confidence = "HIGH", notes = "Bag structure and handles are visible; material and product details need owner review.") =>
  add(id, "handbags", "handbag", colors, "patterned textile or plain surface", confidence, notes);
const scarf = (id, colors, pattern = "woven motif", confidence = "HIGH", notes = "Narrow textile form and/or fringe are visible; material and dimensions need owner review.") =>
  add(id, "textiles", "scarf or stole", colors, pattern, confidence, notes);

saree("003", "green and teal", "small repeating motif", "MEDIUM");
saree("004", "red and maroon", "repeating diamond motif", "MEDIUM");
saree("005", "cream, black, and brown", "wide geometric border", "MEDIUM");
bag("006", "dark brown and black");
saree("007", "orange, red, and green", "small repeating motif", "MEDIUM");
bag("008", "gray and black", "MEDIUM");
scarf("009", "red, gray, and blue", "striped with fringe");
bag("010", "orange and black", "MEDIUM");
bag("011", "teal and black");
saree("012", "cream, red, and mustard", "color-blocked geometric pattern", "MEDIUM");
saree("013", "maroon and green", "bordered woven motif", "MEDIUM");
saree("014", "cream, gray, and brown", "zigzag geometric pattern", "MEDIUM");
bag("015", "gray and black", "MEDIUM");
add("016", "other", "assorted small textile pieces", "red, orange, gray, black, and cream", "mixed visible patterns", "HIGH", "The photograph shows several separate small pieces; it is not treated as one product.");

bag("018", "navy blue and black", "MEDIUM");
saree("019", "maroon and red", "small repeating motif", "MEDIUM");
scarf("020", "green, gray, and red", "striped with fringe");
saree("021", "navy blue and red", "small repeating motif", "MEDIUM");
saree("022", "purple, maroon, and red", "zigzag geometric pattern", "MEDIUM");
saree("023", "gray, black, and red", "repeating geometric motif", "MEDIUM");
bag("024", "black and gray", "MEDIUM");
add("025,040", "sarees", "saree-like textile, repeated views", "navy blue and purple", "small repeating motif with contrasting border", "HIGH", "The two photographs show the same apparent textile pattern and color arrangement; owner should confirm the grouping.");
bag("026", "orange, olive, and black", "MEDIUM");
scarf("027", "navy blue, cream, and black", "striped with fringe");
saree("028", "purple, gold, and tan", "zigzag geometric pattern with broad border", "MEDIUM");
saree("029", "green, black, and red", "repeating diamond motif", "MEDIUM");
saree("030", "maroon and red", "small repeating motif", "MEDIUM");
scarf("031", "navy blue and red", "striped with fringe");
saree("032", "purple and magenta", "small repeating motif", "MEDIUM");
bag("033", "brown and orange", "MEDIUM");
bag("034", "maroon and black", "MEDIUM");
bag("035", "teal and black", "MEDIUM");
bag("036", "olive and black", "MEDIUM");
add("037", "handbags", "assorted small handbags", "blue, black, and tan", "mixed patterned surfaces", "HIGH", "The photograph shows multiple separate bags; it is not treated as one product.");
add("038", "home-textiles", "small rectangular textile item", "green, red, and black", "bordered geometric pattern", "LOW", "The photograph does not make the intended product type or use certain.");
saree("039", "magenta and red", "small repeating motif", "MEDIUM");
add("041", "textiles", "scarf or stole", "red and gray", "striped with fringe", "HIGH", "Narrow textile form and fringe are visible; material and dimensions need owner review.");
bag("042", "navy blue and black", "MEDIUM");
bag("043", "black and brown", "MEDIUM");
add("044", "handbags", "assorted small handbags", "red, blue, black, and gray", "mixed patterned surfaces", "HIGH", "The photograph shows multiple separate bags; it is not treated as one product.");
saree("045", "cream, black, and brown", "wide geometric border", "MEDIUM");
saree("046", "green and blue", "bordered woven motif", "MEDIUM");
saree("047", "red and dark teal", "repeating motif with border", "MEDIUM");
add("048,049,058", "sarees", "saree-like textile, repeated views", "cream, blue, brown, and red", "geometric patterned border", "HIGH", "The three photographs show the same apparent textile colors, border, and folded arrangement; owner should confirm the grouping.");
saree("050", "dark green, black, and red", "small repeating motif", "MEDIUM");
saree("051", "mustard, black, and cream", "large geometric motif", "MEDIUM");
add("052", "other", "assorted textile pieces with small accessory", "navy blue, cream, gray, and brown", "mixed geometric patterns", "HIGH", "The photograph shows several separate textile pieces and an accessory; it is not treated as one product.");
saree("053", "gray, red, and black", "repeating geometric motif", "MEDIUM");
saree("054", "olive, black, and lime", "bordered geometric motif", "MEDIUM");
saree("055", "red and green", "bordered woven motif", "MEDIUM");
bag("056", "black and maroon", "MEDIUM");
scarf("057", "navy blue and cream", "small repeating motif with fringe");
bag("059", "orange and black", "MEDIUM");
saree("060", "cream, blue, and multicolor", "multicolor striped border", "MEDIUM");
bag("061", "maroon and black", "MEDIUM");
saree("062", "cream, navy blue, and mustard", "bordered repeating motif", "MEDIUM");
scarf("063", "black, red, and gray", "color-blocked with fringe");
add("064", "other", "stack of folded textile items", "pink, navy, teal, olive, and red", "plain/color-blocked folded surfaces", "HIGH", "Several separate folded items are visible; product grouping and intended use need owner review.");
bag("065", "brown and black", "MEDIUM");
saree("066", "cream, gray, brown, and black", "zigzag geometric pattern", "MEDIUM");
saree("067", "navy blue, purple, and red", "small repeating motif", "MEDIUM");
add("068,070", "sarees", "saree-like textile, repeated views", "lime green and mauve", "small repeating motif with contrasting border", "HIGH", "The two photographs show the same apparent textile and folded arrangement; owner should confirm the grouping.");
saree("069", "navy blue, purple, and red", "small repeating motif", "MEDIUM");
add("071", "home-textiles", "decorative rectangular textile", "teal, black, and cream", "bordered geometric pattern", "MEDIUM", "The rectangular format and decorative border are visible, but intended use needs review.");
saree("072", "maroon, brown, and pink", "repeating motif with border", "MEDIUM");
add("073", "textiles", "textile detail photograph", "cream, yellow, and brown", "close-up woven border/detail", "HIGH", "This appears to be a close-up/detail photograph rather than a clearly separate product; grouping needs owner review.");
saree("074", "dark green, black, and mustard", "small repeating motif", "MEDIUM");
saree("075", "cream, red, blue, and mustard", "multicolor striped border", "MEDIUM");
bag("076", "maroon and brown", "MEDIUM");
bag("077", "black and gray", "MEDIUM");
saree("078", "red and green", "bordered woven motif", "MEDIUM");
saree("079", "maroon, mustard, and orange", "repeating motif with border", "MEDIUM");
saree("080", "brown, black, and peach", "large geometric motif", "MEDIUM");
saree("081", "cream, blue, mustard, and brown", "bordered geometric motif", "MEDIUM");
scarf("082", "black and magenta", "small fringed textile", "HIGH");
saree("083", "peach, orange, and brown", "large geometric motif", "MEDIUM");
saree("084", "cream and navy blue", "large geometric motif with border", "MEDIUM");
saree("085", "purple and magenta", "bordered woven motif", "MEDIUM");
saree("086", "dark green", "small repeating motif", "MEDIUM");
saree("087", "navy blue and cream", "repeating geometric motif", "MEDIUM");
saree("088", "maroon and orange", "repeating geometric motif", "MEDIUM");
bag("089", "black and purple", "MEDIUM");
bag("090", "cream, green, and orange", "MEDIUM");
bag("091", "light blue and black", "MEDIUM");
add("092", "other", "stack of folded textile items", "brown, olive, red, and cream", "plain/color-blocked folded surfaces", "HIGH", "Several separate folded items are visible; product grouping and intended use need owner review.");
add("093", "other", "folded packaged textile", "dark green", "small repeating motif", "MEDIUM", "Packaging and the intended product type are not certain from the photograph.");
bag("094", "red", "MEDIUM");
scarf("095", "navy blue, cream, and multicolor", "striped with fringe");
add("096", "textiles", "folded fringed textile", "red, black, and cream", "color-blocked with fringe", "HIGH", "The textile form and fringe are visible; exact product type needs review.");
add("097", "other", "folded packaged textile", "brown and cream", "small repeating motif", "MEDIUM", "Packaging and the intended product type are not certain from the photograph.");
add("098", "textiles", "assorted folded textiles", "gray, mustard, navy, and multicolor", "mixed stripes and motifs", "HIGH", "The photograph shows multiple separate folded textiles; it is not treated as one product.");
add("099,100", "sarees", "saree-like textile, repeated views", "navy blue, gray, pink, and black", "small repeating motif with contrasting border", "HIGH", "The two photographs show the same apparent textile pattern and folded arrangement; owner should confirm the grouping.");
add("101", "other", "stack of packaged textile items", "red, blue, black, and green", "mixed folded surfaces", "HIGH", "Several separate packaged items are visible; product grouping and intended use need owner review.");
add("102", "other", "assorted textile items", "olive, teal, navy, pink, and red", "mixed folded surfaces", "HIGH", "Several separate items are visible; product grouping and intended use need owner review.");
saree("103", "dark teal and green", "small repeating motif", "MEDIUM");
add("104", "other", "stack of folded textile items", "gray, olive, navy, red, and cream", "mixed folded surfaces", "HIGH", "Several separate folded items are visible; product grouping and intended use need owner review.");
saree("105", "mustard and brown", "small repeating motif", "MEDIUM");
scarf("106", "maroon and cream", "small repeating motif", "HIGH", "Narrow rectangular textile form is visible; exact product type, material, and dimensions need review.");
saree("107", "maroon and cream", "small repeating motif", "MEDIUM");
saree("108", "maroon and cream", "small repeating motif", "MEDIUM");
saree("109", "navy blue and cream", "repeating geometric motif", "MEDIUM");
saree("110", "red and cream", "repeating geometric motif", "MEDIUM");
saree("111", "dark green and teal", "small repeating motif", "MEDIUM");

const expectedIds = Array.from({ length: 109 }, (_, index) => String(index + 3).padStart(3, "0")).filter((id) => id !== "017");
const actualIds = entries.flatMap((entry) => entry.ids);
const duplicateIds = actualIds.filter((id, index) => actualIds.indexOf(id) !== index);
const missingIds = expectedIds.filter((id) => !actualIds.includes(id));
if (duplicateIds.length || missingIds.length || actualIds.length !== expectedIds.length) {
  throw new Error(`Image coverage error. Duplicates: ${duplicateIds.join(", ") || "none"}; missing: ${missingIds.join(", ") || "none"}`);
}

const products = entries.map((entry, index) => {
  const productId = `PWT-${String(index + 3).padStart(3, "0")}`;
  const imageIds = entry.ids.map((id) => `pwt-img-${id}.webp`);
  const suggestedName = `Unverified ${entry.colors} ${entry.productType}`;
  return {
    productId,
    imageIds,
    primaryImage: imageIds[0],
    category: entry.category,
    productType: entry.productType,
    suggestedName,
    description: `Photograph shows a ${entry.productType} with ${entry.colors} visible and a ${entry.pattern}.`,
    colors: entry.colors,
    pattern: entry.pattern,
    confidence: entry.confidence,
    notes: entry.notes,
  };
});

const headers = [
  "product_id", "image_ids", "primary_image", "category", "product_type",
  "suggested_name", "description_draft", "detected_colors", "detected_pattern",
  "fabric", "dimensions", "blouse_included", "price_inr", "availability",
  "featured", "new_arrival", "ai_confidence", "manual_review_required", "review_notes",
];
const csvEscape = (value) => `"${String(value).replaceAll('"', '""')}"`;
const csvRows = products.map((product) => [
  product.productId,
  product.imageIds.join(","),
  product.primaryImage,
  product.category,
  product.productType,
  product.suggestedName,
  product.description,
  product.colors,
  product.pattern,
  "NEEDS_REVIEW",
  "NEEDS_REVIEW",
  "NEEDS_REVIEW",
  "NEEDS_REVIEW",
  "NEEDS_REVIEW",
  "false",
  "false",
  product.confidence,
  "YES",
  product.notes,
].map(csvEscape).join(","));

const docsDir = path.join(root, "docs");
fs.mkdirSync(docsDir, { recursive: true });
fs.writeFileSync(path.join(docsDir, "AI-PRODUCT-CATALOG-DRAFT.csv"), `${headers.join(",")}\n${csvRows.join("\n")}\n`);

const existingVerifiedMap = [
  "### Image: pwt-img-017.webp",
  "- AI classification: Existing verified product (not AI classified)",
  "- Assigned product: PWT-002",
  "- Grouping: PWT-002 image set currently contains pwt-img-017.webp",
  "- Confidence: VERIFIED EXISTING DATA",
  "- Manual review: NO",
  "- Reason: Preserved from the verified catalog and excluded from AI inference.",
  "",
].join("\n");
const imageMap = products.map((product) => [
  `### Image(s): ${product.imageIds.join(", ")}`,
  `- AI classification: ${product.category} / ${product.productType}`,
  `- Assigned product: ${product.productId}`,
  `- Grouping: ${product.imageIds.join(", ")}`,
  `- Confidence: ${product.confidence}`,
  `- Manual review: YES`,
  `- Reason: ${product.notes}`,
  "",
].join("\n")).join("\n");
const confidenceCounts = Object.fromEntries(["HIGH", "MEDIUM", "LOW"].map((value) => [value, products.filter((product) => product.confidence === value).length]));
const categoryCounts = Object.fromEntries([...new Set(products.map((product) => product.category))].map((value) => [value, products.filter((product) => product.category === value).length]));
fs.writeFileSync(path.join(docsDir, "AI-PRODUCT-IMAGE-MAP.md"), `# AI Product Image Map\n\nThis first-pass map is based on visual inspection of the prepared photographs. Every new assignment is a draft and requires manual review. The existing verified image is listed for coverage but was not AI-classified.\n\n${existingVerifiedMap}${imageMap}\n## Summary\n\n- TOTAL IMAGES: ${actualIds.length + 1}\n- TOTAL AI PRODUCT GROUPS: ${products.length}\n- TOTAL HIGH CONFIDENCE: ${confidenceCounts.HIGH}\n- TOTAL MEDIUM CONFIDENCE: ${confidenceCounts.MEDIUM}\n- TOTAL LOW CONFIDENCE: ${confidenceCounts.LOW}\n- TOTAL NEEDS REVIEW: ${products.filter((product) => product.notes).length}\n\nCategory counts for new AI groups: ${Object.entries(categoryCounts).map(([category, count]) => `${category} ${count}`).join(", ")}.\n`);

const review = products.map((product) => [
  `## ${product.productId}`,
  `Images: ${product.imageIds.map((image) => `\`${image}\``).join(", ")}`,
  `\nAI Category: ${product.category}`,
  `\nProduct Type: ${product.productType}`,
  `\nSuggested Name: ${product.suggestedName}`,
  `\nVisible Colors: ${product.colors}`,
  `\nDetected Pattern: ${product.pattern}`,
  `\nLikely Fabric: NEEDS_REVIEW` ,
  `\nPrice: NEEDS_REVIEW`,
  `\nAvailability: NEEDS_REVIEW`,
  `\nManual Review: YES`,
  `\nReason: ${product.notes}`,
].join("\n")).join("\n\n");
fs.writeFileSync(path.join(docsDir, "AI-CATALOG-REVIEW.md"), `# AI Catalog Review\n\nThis document is a visual first-pass draft only. It does not publish products or establish verified business information.\n\n${review}\n`);

console.log(`Generated ${products.length} draft product groups covering ${actualIds.length} images.`);
