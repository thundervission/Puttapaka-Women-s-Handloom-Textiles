import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const draftPath = path.join(root, "docs", "AI-PRODUCT-CATALOG-DRAFT.csv");
const draft = parseCsv(fs.readFileSync(draftPath, "utf8"));
const headers = draft.shift();
const rows = draft.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
const outputDir = path.join(root, "docs");

const reviewHeaders = [
  "product_id", "image_ids", "primary_image", "current_ai_category", "current_ai_product_type",
  "current_ai_name", "current_ai_description", "current_ai_colors", "current_ai_pattern",
  "current_ai_confidence", "human_decision", "final_category", "final_product_type", "final_name",
  "final_description", "final_color", "final_fabric", "final_dimensions", "final_blouse_included",
  "final_price_inr", "final_availability", "final_featured", "final_new_arrival", "final_notes",
];
const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`;
const reviewRows = rows.map((row) => [
  row.product_id,
  row.image_ids,
  row.primary_image,
  row.category,
  row.product_type,
  row.suggested_name,
  row.description_draft,
  row.detected_colors,
  row.detected_pattern,
  row.ai_confidence,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
].map(escapeCsv).join(","));
fs.writeFileSync(path.join(outputDir, "PRODUCT-CATALOG-HUMAN-REVIEW.csv"), `${reviewHeaders.join(",")}\n${reviewRows.join("\n")}\n`);

const renderImages = (imageIds) => imageIds.split(",").map((image) => `- ${image}`).join("\n");
const renderReview = rows.map((row) => [
  `## ${row.product_id}`,
  `Images:\n${renderImages(row.image_ids)}`,
  `AI category: ${row.category}`,
  `AI product type: ${row.product_type}`,
  `AI suggested name: ${row.suggested_name}`,
  `AI confidence: ${row.ai_confidence}`,
  `Current AI reasoning: ${row.review_notes}`,
  `Human decision:`,
  `Final category:`,
  `Final name:`,
  `Final price:`,
  `Final fabric:`,
  `Final availability:`,
  `Human notes:`,
].join("\n")).join("\n\n");

const multiImageRows = rows.filter((row) => row.image_ids.includes(","));
const renderGrouping = multiImageRows.map((row) => [
  `## Group: ${row.product_id}`,
  `Images:\n${renderImages(row.image_ids)}`,
  `AI grouping reason: ${row.review_notes}`,
  `Suggested action: UNSURE`,
].join("\n")).join("\n\n");

const isHighRisk = (row) => row.ai_confidence === "LOW"
  || row.image_ids.includes(",")
  || /assorted|stack|multiple|separate|uncertain|not treated|does not make|close-up|detail|packaged/i.test(`${row.product_type} ${row.review_notes}`);
const highRiskRows = rows.filter(isHighRisk);
const riskList = highRiskRows.map((row) => `- ${row.product_id}: ${row.image_ids}; ${row.product_type}; ${row.review_notes}`).join("\n");
const confidenceCounts = Object.fromEntries(["HIGH", "MEDIUM", "LOW"].map((value) => [value, rows.filter((row) => row.ai_confidence === value).length]));
fs.writeFileSync(path.join(outputDir, "PRODUCT-CATALOG-HUMAN-REVIEW.md"), `# Product Catalog Human Review\n\nThis is a preparation document for human review of the AI-generated draft. Blank decision and final fields are intentional. Nothing here is live catalog data.\n\n${renderReview}\n\n# GROUPING REVIEW\n\nThe following groups contain more than one image. The AI grouping is not automatically approved.\n\n${renderGrouping}\n\n# HIGH-RISK ITEMS\n\nPrioritize these groups because they contain low-confidence classifications, assorted/stacked images, multiple visible products, uncertain product types, detail photographs, or grouping uncertainty.\n\n${riskList}\n\n## Review decisions\n\nUse one of these values in the review CSV: APPROVE, EDIT, SPLIT, MERGE, REJECT, NEEDS_MORE_INFO. Keep final values blank until the human/business review is complete.\n`);

const normalization = [
  ["sarees", "folded saree-like textile", "sarees", "Long folded textile form and visible borders/motifs support a saree-like draft, but the exact product identity needs approval."],
  ["handbags", "handbag", "handbags", "Handles and bag structures are visible in the photographs."],
  ["textiles", "scarf or stole", "scarves-stoles", "Narrow forms and/or fringe support a scarf/stole proposal; exact product type needs approval."],
  ["textiles", "scarf or stole", "scarves-stoles", "Narrow textile forms with fringe support a scarf/stole proposal; exact product type needs approval."],
  ["textiles", "textile detail photograph", "textiles", "The image appears to show a textile detail, but its parent product is not established."],
  ["textiles", "folded fringed textile", "scarves-stoles", "A narrow fringed textile is visible, but the final product type needs approval."],
  ["textiles", "assorted folded textiles", "textiles", "Multiple folded textiles are visible; keeping the normalized category broad avoids forcing a product identity."],
  ["other", "assorted small textile pieces", "other", "The photograph contains multiple separate pieces rather than one clearly identified product."],
  ["other", "assorted textile pieces with small accessory", "other", "The photograph contains separate textile pieces and an accessory; intended product grouping is not established."],
  ["other", "stack of folded textile items", "other", "A stack of separate items is visible, but product identities and grouping are unknown."],
  ["other", "stack of packaged textile items", "other", "Several packaged items are visible, but intended products are not established."],
  ["other", "folded packaged textile", "other", "Packaging is visible, but the intended product type is uncertain."],
  ["other", "assorted textile items", "other", "Several separate items are visible, so no narrower normalized category is proposed."],
  ["home-textiles", "small rectangular textile item", "home-textiles", "The rectangular format is visible, but intended household use needs approval."],
  ["home-textiles", "decorative rectangular textile", "home-textiles", "A decorative rectangular textile is visible; intended use needs approval."],
];
const normalizationRows = [...new Map(normalization.map((item) => [`${item[0]}|${item[1]}`, item])).values()];
const normalizationTable = normalizationRows.map(([current, type, proposed, reason]) => `| ${current} | ${type} | ${proposed} | ${reason} | Human approval required |`).join("\n");
fs.writeFileSync(path.join(outputDir, "CATEGORY-NORMALIZATION-REVIEW.md"), `# Category Normalization Review\n\nThis is a proposal for human review only. The current AI draft values are preserved in the review CSV and are not silently changed. No category is being written to the live catalog.\n\nProposed vocabulary is limited to categories supported by visible evidence: sarees, bedsheets, handbags, fridge-top-covers, scarves-stoles, home-textiles, clothing, textiles, accessories, and other. Categories such as bedsheets, fridge-top-covers, clothing, and accessories are not assigned below where the photographs do not provide enough evidence.\n\n| Current category | Current AI product type | Proposed normalized category | Reasoning | Approval |\n| --- | --- | --- | --- | --- |\n${normalizationTable}\n`);

console.log(`Generated human review artifacts for ${rows.length} AI groups and ${multiImageRows.length} multi-image groups.`);
console.log(`Confidence: HIGH ${confidenceCounts.HIGH}, MEDIUM ${confidenceCounts.MEDIUM}, LOW ${confidenceCounts.LOW}.`);
console.log(`High-risk groups: ${highRiskRows.length}.`);

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
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }
  if (field || row.length > 0) row.push(field);
  return rows.filter((currentRow) => currentRow.some(Boolean));
}
