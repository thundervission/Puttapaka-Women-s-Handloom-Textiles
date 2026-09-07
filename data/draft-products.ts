import type { Product } from "@/types/product";

/** AI-assisted draft records. Keep status as draft until human approval. */
export const draftProducts: Product[] = [
  {
    "id": "PWT-003",
    "slug": "product-pwt-003",
    "name": "green and teal folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with green and teal visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-003.webp",
        "alt": "Product image: green and teal folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "green and teal",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-004",
    "slug": "product-pwt-004",
    "name": "red and maroon folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with red and maroon visible and a repeating diamond motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-004.webp",
        "alt": "Product image: red and maroon folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "red and maroon",
      "detectedPattern": "repeating diamond motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-005",
    "slug": "product-pwt-005",
    "name": "cream, black, and brown folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream, black, and brown visible and a wide geometric border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-005.webp",
        "alt": "Product image: cream, black, and brown folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream, black, and brown",
      "detectedPattern": "wide geometric border",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-006",
    "slug": "product-pwt-006",
    "name": "dark brown and black handbag",
    "description": "Photograph shows a handbag with dark brown and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-006.webp",
        "alt": "Product image: dark brown and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "dark brown and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "HIGH",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-007",
    "slug": "product-pwt-007",
    "name": "orange, red, and green folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with orange, red, and green visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-007.webp",
        "alt": "Product image: orange, red, and green folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "orange, red, and green",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-008",
    "slug": "product-pwt-008",
    "name": "gray and black handbag",
    "description": "Photograph shows a handbag with gray and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-008.webp",
        "alt": "Product image: gray and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "gray and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-009",
    "slug": "product-pwt-009",
    "name": "red, gray, and blue scarf or stole",
    "description": "Photograph shows a scarf or stole with red, gray, and blue visible and a striped with fringe.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-009.webp",
        "alt": "Product image: red, gray, and blue scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "red, gray, and blue",
      "detectedPattern": "striped with fringe",
      "confidence": "HIGH",
      "notes": "Narrow textile form and/or fringe are visible; material and dimensions need owner review."
    }
  },
  {
    "id": "PWT-010",
    "slug": "product-pwt-010",
    "name": "orange and black handbag",
    "description": "Photograph shows a handbag with orange and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-010.webp",
        "alt": "Product image: orange and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "orange and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-011",
    "slug": "product-pwt-011",
    "name": "teal and black handbag",
    "description": "Photograph shows a handbag with teal and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-011.webp",
        "alt": "Product image: teal and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "teal and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "HIGH",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-012",
    "slug": "product-pwt-012",
    "name": "cream, red, and mustard folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream, red, and mustard visible and a color-blocked geometric pattern.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-012.webp",
        "alt": "Product image: cream, red, and mustard folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream, red, and mustard",
      "detectedPattern": "color-blocked geometric pattern",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-013",
    "slug": "product-pwt-013",
    "name": "maroon and green folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with maroon and green visible and a bordered woven motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-013.webp",
        "alt": "Product image: maroon and green folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "maroon and green",
      "detectedPattern": "bordered woven motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-014",
    "slug": "product-pwt-014",
    "name": "cream, gray, and brown folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream, gray, and brown visible and a zigzag geometric pattern.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-014.webp",
        "alt": "Product image: cream, gray, and brown folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream, gray, and brown",
      "detectedPattern": "zigzag geometric pattern",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-015",
    "slug": "product-pwt-015",
    "name": "gray and black handbag",
    "description": "Photograph shows a handbag with gray and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-015.webp",
        "alt": "Product image: gray and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "gray and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-016",
    "slug": "product-pwt-016",
    "name": "red, orange, gray, black, and cream assorted small textile pieces",
    "description": "Photograph shows a assorted small textile pieces with red, orange, gray, black, and cream visible and a mixed visible patterns.",
    "categorySlug": "other",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-016.webp",
        "alt": "Product image: red, orange, gray, black, and cream assorted small textile pieces"
      }
    ],
    "review": {
      "productType": "assorted small textile pieces",
      "detectedColors": "red, orange, gray, black, and cream",
      "detectedPattern": "mixed visible patterns",
      "confidence": "HIGH",
      "notes": "The photograph shows several separate small pieces; it is not treated as one product."
    }
  },
  {
    "id": "PWT-017",
    "slug": "product-pwt-017",
    "name": "navy blue and black handbag",
    "description": "Photograph shows a handbag with navy blue and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-018.webp",
        "alt": "Product image: navy blue and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "navy blue and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-018",
    "slug": "product-pwt-018",
    "name": "maroon and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with maroon and red visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-019.webp",
        "alt": "Product image: maroon and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "maroon and red",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-019",
    "slug": "product-pwt-019",
    "name": "green, gray, and red scarf or stole",
    "description": "Photograph shows a scarf or stole with green, gray, and red visible and a striped with fringe.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-020.webp",
        "alt": "Product image: green, gray, and red scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "green, gray, and red",
      "detectedPattern": "striped with fringe",
      "confidence": "HIGH",
      "notes": "Narrow textile form and/or fringe are visible; material and dimensions need owner review."
    }
  },
  {
    "id": "PWT-020",
    "slug": "product-pwt-020",
    "name": "navy blue and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with navy blue and red visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-021.webp",
        "alt": "Product image: navy blue and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "navy blue and red",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-021",
    "slug": "product-pwt-021",
    "name": "purple, maroon, and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with purple, maroon, and red visible and a zigzag geometric pattern.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-022.webp",
        "alt": "Product image: purple, maroon, and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "purple, maroon, and red",
      "detectedPattern": "zigzag geometric pattern",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-022",
    "slug": "product-pwt-022",
    "name": "gray, black, and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with gray, black, and red visible and a repeating geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-023.webp",
        "alt": "Product image: gray, black, and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "gray, black, and red",
      "detectedPattern": "repeating geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-023",
    "slug": "product-pwt-023",
    "name": "black and gray handbag",
    "description": "Photograph shows a handbag with black and gray visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-024.webp",
        "alt": "Product image: black and gray handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "black and gray",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-024",
    "slug": "product-pwt-024",
    "name": "navy blue and purple saree-like textile, repeated views",
    "description": "Photograph shows a saree-like textile, repeated views with navy blue and purple visible and a small repeating motif with contrasting border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-025.webp",
        "alt": "Product image: navy blue and purple saree-like textile, repeated views"
      },
      {
        "src": "/products/pwt-img-040.webp",
        "alt": "Product image: navy blue and purple saree-like textile, repeated views"
      }
    ],
    "review": {
      "productType": "saree-like textile, repeated views",
      "detectedColors": "navy blue and purple",
      "detectedPattern": "small repeating motif with contrasting border",
      "confidence": "HIGH",
      "notes": "The two photographs show the same apparent textile pattern and color arrangement; owner should confirm the grouping."
    }
  },
  {
    "id": "PWT-025",
    "slug": "product-pwt-025",
    "name": "orange, olive, and black handbag",
    "description": "Photograph shows a handbag with orange, olive, and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-026.webp",
        "alt": "Product image: orange, olive, and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "orange, olive, and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-026",
    "slug": "product-pwt-026",
    "name": "navy blue, cream, and black scarf or stole",
    "description": "Photograph shows a scarf or stole with navy blue, cream, and black visible and a striped with fringe.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-027.webp",
        "alt": "Product image: navy blue, cream, and black scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "navy blue, cream, and black",
      "detectedPattern": "striped with fringe",
      "confidence": "HIGH",
      "notes": "Narrow textile form and/or fringe are visible; material and dimensions need owner review."
    }
  },
  {
    "id": "PWT-027",
    "slug": "product-pwt-027",
    "name": "purple, gold, and tan folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with purple, gold, and tan visible and a zigzag geometric pattern with broad border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-028.webp",
        "alt": "Product image: purple, gold, and tan folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "purple, gold, and tan",
      "detectedPattern": "zigzag geometric pattern with broad border",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-028",
    "slug": "product-pwt-028",
    "name": "green, black, and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with green, black, and red visible and a repeating diamond motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-029.webp",
        "alt": "Product image: green, black, and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "green, black, and red",
      "detectedPattern": "repeating diamond motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-029",
    "slug": "product-pwt-029",
    "name": "maroon and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with maroon and red visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-030.webp",
        "alt": "Product image: maroon and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "maroon and red",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-030",
    "slug": "product-pwt-030",
    "name": "navy blue and red scarf or stole",
    "description": "Photograph shows a scarf or stole with navy blue and red visible and a striped with fringe.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-031.webp",
        "alt": "Product image: navy blue and red scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "navy blue and red",
      "detectedPattern": "striped with fringe",
      "confidence": "HIGH",
      "notes": "Narrow textile form and/or fringe are visible; material and dimensions need owner review."
    }
  },
  {
    "id": "PWT-031",
    "slug": "product-pwt-031",
    "name": "purple and magenta folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with purple and magenta visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-032.webp",
        "alt": "Product image: purple and magenta folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "purple and magenta",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-032",
    "slug": "product-pwt-032",
    "name": "brown and orange handbag",
    "description": "Photograph shows a handbag with brown and orange visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-033.webp",
        "alt": "Product image: brown and orange handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "brown and orange",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-033",
    "slug": "product-pwt-033",
    "name": "maroon and black handbag",
    "description": "Photograph shows a handbag with maroon and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-034.webp",
        "alt": "Product image: maroon and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "maroon and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-034",
    "slug": "product-pwt-034",
    "name": "teal and black handbag",
    "description": "Photograph shows a handbag with teal and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-035.webp",
        "alt": "Product image: teal and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "teal and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-035",
    "slug": "product-pwt-035",
    "name": "olive and black handbag",
    "description": "Photograph shows a handbag with olive and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-036.webp",
        "alt": "Product image: olive and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "olive and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-036",
    "slug": "product-pwt-036",
    "name": "blue, black, and tan assorted small handbags",
    "description": "Photograph shows a assorted small handbags with blue, black, and tan visible and a mixed patterned surfaces.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-037.webp",
        "alt": "Product image: blue, black, and tan assorted small handbags"
      }
    ],
    "review": {
      "productType": "assorted small handbags",
      "detectedColors": "blue, black, and tan",
      "detectedPattern": "mixed patterned surfaces",
      "confidence": "HIGH",
      "notes": "The photograph shows multiple separate bags; it is not treated as one product."
    }
  },
  {
    "id": "PWT-037",
    "slug": "product-pwt-037",
    "name": "green, red, and black small rectangular textile item",
    "description": "Photograph shows a small rectangular textile item with green, red, and black visible and a bordered geometric pattern.",
    "categorySlug": "home-textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-038.webp",
        "alt": "Product image: green, red, and black small rectangular textile item"
      }
    ],
    "review": {
      "productType": "small rectangular textile item",
      "detectedColors": "green, red, and black",
      "detectedPattern": "bordered geometric pattern",
      "confidence": "LOW",
      "notes": "The photograph does not make the intended product type or use certain."
    }
  },
  {
    "id": "PWT-038",
    "slug": "product-pwt-038",
    "name": "magenta and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with magenta and red visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-039.webp",
        "alt": "Product image: magenta and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "magenta and red",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-039",
    "slug": "product-pwt-039",
    "name": "red and gray scarf or stole",
    "description": "Photograph shows a scarf or stole with red and gray visible and a striped with fringe.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-041.webp",
        "alt": "Product image: red and gray scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "red and gray",
      "detectedPattern": "striped with fringe",
      "confidence": "HIGH",
      "notes": "Narrow textile form and fringe are visible; material and dimensions need owner review."
    }
  },
  {
    "id": "PWT-040",
    "slug": "product-pwt-040",
    "name": "navy blue and black handbag",
    "description": "Photograph shows a handbag with navy blue and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-042.webp",
        "alt": "Product image: navy blue and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "navy blue and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-041",
    "slug": "product-pwt-041",
    "name": "black and brown handbag",
    "description": "Photograph shows a handbag with black and brown visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-043.webp",
        "alt": "Product image: black and brown handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "black and brown",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-042",
    "slug": "product-pwt-042",
    "name": "red, blue, black, and gray assorted small handbags",
    "description": "Photograph shows a assorted small handbags with red, blue, black, and gray visible and a mixed patterned surfaces.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-044.webp",
        "alt": "Product image: red, blue, black, and gray assorted small handbags"
      }
    ],
    "review": {
      "productType": "assorted small handbags",
      "detectedColors": "red, blue, black, and gray",
      "detectedPattern": "mixed patterned surfaces",
      "confidence": "HIGH",
      "notes": "The photograph shows multiple separate bags; it is not treated as one product."
    }
  },
  {
    "id": "PWT-043",
    "slug": "product-pwt-043",
    "name": "cream, black, and brown folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream, black, and brown visible and a wide geometric border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-045.webp",
        "alt": "Product image: cream, black, and brown folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream, black, and brown",
      "detectedPattern": "wide geometric border",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-044",
    "slug": "product-pwt-044",
    "name": "green and blue folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with green and blue visible and a bordered woven motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-046.webp",
        "alt": "Product image: green and blue folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "green and blue",
      "detectedPattern": "bordered woven motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-045",
    "slug": "product-pwt-045",
    "name": "red and dark teal folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with red and dark teal visible and a repeating motif with border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-047.webp",
        "alt": "Product image: red and dark teal folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "red and dark teal",
      "detectedPattern": "repeating motif with border",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-046",
    "slug": "product-pwt-046",
    "name": "cream, blue, brown, and red saree-like textile, repeated views",
    "description": "Photograph shows a saree-like textile, repeated views with cream, blue, brown, and red visible and a geometric patterned border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-048.webp",
        "alt": "Product image: cream, blue, brown, and red saree-like textile, repeated views"
      },
      {
        "src": "/products/pwt-img-049.webp",
        "alt": "Product image: cream, blue, brown, and red saree-like textile, repeated views"
      },
      {
        "src": "/products/pwt-img-058.webp",
        "alt": "Product image: cream, blue, brown, and red saree-like textile, repeated views"
      }
    ],
    "review": {
      "productType": "saree-like textile, repeated views",
      "detectedColors": "cream, blue, brown, and red",
      "detectedPattern": "geometric patterned border",
      "confidence": "HIGH",
      "notes": "The three photographs show the same apparent textile colors, border, and folded arrangement; owner should confirm the grouping."
    }
  },
  {
    "id": "PWT-047",
    "slug": "product-pwt-047",
    "name": "dark green, black, and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with dark green, black, and red visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-050.webp",
        "alt": "Product image: dark green, black, and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "dark green, black, and red",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-048",
    "slug": "product-pwt-048",
    "name": "mustard, black, and cream folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with mustard, black, and cream visible and a large geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-051.webp",
        "alt": "Product image: mustard, black, and cream folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "mustard, black, and cream",
      "detectedPattern": "large geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-049",
    "slug": "product-pwt-049",
    "name": "navy blue, cream, gray, and brown assorted textile pieces with small accessory",
    "description": "Photograph shows a assorted textile pieces with small accessory with navy blue, cream, gray, and brown visible and a mixed geometric patterns.",
    "categorySlug": "other",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-052.webp",
        "alt": "Product image: navy blue, cream, gray, and brown assorted textile pieces with small accessory"
      }
    ],
    "review": {
      "productType": "assorted textile pieces with small accessory",
      "detectedColors": "navy blue, cream, gray, and brown",
      "detectedPattern": "mixed geometric patterns",
      "confidence": "HIGH",
      "notes": "The photograph shows several separate textile pieces and an accessory; it is not treated as one product."
    }
  },
  {
    "id": "PWT-050",
    "slug": "product-pwt-050",
    "name": "gray, red, and black folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with gray, red, and black visible and a repeating geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-053.webp",
        "alt": "Product image: gray, red, and black folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "gray, red, and black",
      "detectedPattern": "repeating geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-051",
    "slug": "product-pwt-051",
    "name": "olive, black, and lime folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with olive, black, and lime visible and a bordered geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-054.webp",
        "alt": "Product image: olive, black, and lime folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "olive, black, and lime",
      "detectedPattern": "bordered geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-052",
    "slug": "product-pwt-052",
    "name": "red and green folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with red and green visible and a bordered woven motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-055.webp",
        "alt": "Product image: red and green folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "red and green",
      "detectedPattern": "bordered woven motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-053",
    "slug": "product-pwt-053",
    "name": "black and maroon handbag",
    "description": "Photograph shows a handbag with black and maroon visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-056.webp",
        "alt": "Product image: black and maroon handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "black and maroon",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-054",
    "slug": "product-pwt-054",
    "name": "navy blue and cream scarf or stole",
    "description": "Photograph shows a scarf or stole with navy blue and cream visible and a small repeating motif with fringe.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-057.webp",
        "alt": "Product image: navy blue and cream scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "navy blue and cream",
      "detectedPattern": "small repeating motif with fringe",
      "confidence": "HIGH",
      "notes": "Narrow textile form and/or fringe are visible; material and dimensions need owner review."
    }
  },
  {
    "id": "PWT-055",
    "slug": "product-pwt-055",
    "name": "orange and black handbag",
    "description": "Photograph shows a handbag with orange and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-059.webp",
        "alt": "Product image: orange and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "orange and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-056",
    "slug": "product-pwt-056",
    "name": "cream, blue, and multicolor folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream, blue, and multicolor visible and a multicolor striped border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-060.webp",
        "alt": "Product image: cream, blue, and multicolor folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream, blue, and multicolor",
      "detectedPattern": "multicolor striped border",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-057",
    "slug": "product-pwt-057",
    "name": "maroon and black handbag",
    "description": "Photograph shows a handbag with maroon and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-061.webp",
        "alt": "Product image: maroon and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "maroon and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-058",
    "slug": "product-pwt-058",
    "name": "cream, navy blue, and mustard folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream, navy blue, and mustard visible and a bordered repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-062.webp",
        "alt": "Product image: cream, navy blue, and mustard folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream, navy blue, and mustard",
      "detectedPattern": "bordered repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-059",
    "slug": "product-pwt-059",
    "name": "black, red, and gray scarf or stole",
    "description": "Photograph shows a scarf or stole with black, red, and gray visible and a color-blocked with fringe.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-063.webp",
        "alt": "Product image: black, red, and gray scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "black, red, and gray",
      "detectedPattern": "color-blocked with fringe",
      "confidence": "HIGH",
      "notes": "Narrow textile form and/or fringe are visible; material and dimensions need owner review."
    }
  },
  {
    "id": "PWT-060",
    "slug": "product-pwt-060",
    "name": "pink, navy, teal, olive, and red stack of folded textile items",
    "description": "Photograph shows a stack of folded textile items with pink, navy, teal, olive, and red visible and a plain/color-blocked folded surfaces.",
    "categorySlug": "other",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-064.webp",
        "alt": "Product image: pink, navy, teal, olive, and red stack of folded textile items"
      }
    ],
    "review": {
      "productType": "stack of folded textile items",
      "detectedColors": "pink, navy, teal, olive, and red",
      "detectedPattern": "plain/color-blocked folded surfaces",
      "confidence": "HIGH",
      "notes": "Several separate folded items are visible; product grouping and intended use need owner review."
    }
  },
  {
    "id": "PWT-061",
    "slug": "product-pwt-061",
    "name": "brown and black handbag",
    "description": "Photograph shows a handbag with brown and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-065.webp",
        "alt": "Product image: brown and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "brown and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-062",
    "slug": "product-pwt-062",
    "name": "cream, gray, brown, and black folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream, gray, brown, and black visible and a zigzag geometric pattern.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-066.webp",
        "alt": "Product image: cream, gray, brown, and black folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream, gray, brown, and black",
      "detectedPattern": "zigzag geometric pattern",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-063",
    "slug": "product-pwt-063",
    "name": "navy blue, purple, and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with navy blue, purple, and red visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-067.webp",
        "alt": "Product image: navy blue, purple, and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "navy blue, purple, and red",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-064",
    "slug": "product-pwt-064",
    "name": "lime green and mauve saree-like textile, repeated views",
    "description": "Photograph shows a saree-like textile, repeated views with lime green and mauve visible and a small repeating motif with contrasting border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-068.webp",
        "alt": "Product image: lime green and mauve saree-like textile, repeated views"
      },
      {
        "src": "/products/pwt-img-070.webp",
        "alt": "Product image: lime green and mauve saree-like textile, repeated views"
      }
    ],
    "review": {
      "productType": "saree-like textile, repeated views",
      "detectedColors": "lime green and mauve",
      "detectedPattern": "small repeating motif with contrasting border",
      "confidence": "HIGH",
      "notes": "The two photographs show the same apparent textile and folded arrangement; owner should confirm the grouping."
    }
  },
  {
    "id": "PWT-065",
    "slug": "product-pwt-065",
    "name": "navy blue, purple, and red folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with navy blue, purple, and red visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-069.webp",
        "alt": "Product image: navy blue, purple, and red folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "navy blue, purple, and red",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-066",
    "slug": "product-pwt-066",
    "name": "teal, black, and cream decorative rectangular textile",
    "description": "Photograph shows a decorative rectangular textile with teal, black, and cream visible and a bordered geometric pattern.",
    "categorySlug": "home-textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-071.webp",
        "alt": "Product image: teal, black, and cream decorative rectangular textile"
      }
    ],
    "review": {
      "productType": "decorative rectangular textile",
      "detectedColors": "teal, black, and cream",
      "detectedPattern": "bordered geometric pattern",
      "confidence": "MEDIUM",
      "notes": "The rectangular format and decorative border are visible, but intended use needs review."
    }
  },
  {
    "id": "PWT-067",
    "slug": "product-pwt-067",
    "name": "maroon, brown, and pink folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with maroon, brown, and pink visible and a repeating motif with border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-072.webp",
        "alt": "Product image: maroon, brown, and pink folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "maroon, brown, and pink",
      "detectedPattern": "repeating motif with border",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-069",
    "slug": "product-pwt-069",
    "name": "dark green, black, and mustard folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with dark green, black, and mustard visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-074.webp",
        "alt": "Product image: dark green, black, and mustard folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "dark green, black, and mustard",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-070",
    "slug": "product-pwt-070",
    "name": "cream, red, blue, and mustard folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream, red, blue, and mustard visible and a multicolor striped border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-075.webp",
        "alt": "Product image: cream, red, blue, and mustard folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream, red, blue, and mustard",
      "detectedPattern": "multicolor striped border",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-071",
    "slug": "product-pwt-071",
    "name": "maroon and brown handbag",
    "description": "Photograph shows a handbag with maroon and brown visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-076.webp",
        "alt": "Product image: maroon and brown handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "maroon and brown",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-072",
    "slug": "product-pwt-072",
    "name": "black and gray handbag",
    "description": "Photograph shows a handbag with black and gray visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-077.webp",
        "alt": "Product image: black and gray handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "black and gray",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-073",
    "slug": "product-pwt-073",
    "name": "red and green folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with red and green visible and a bordered woven motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-078.webp",
        "alt": "Product image: red and green folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "red and green",
      "detectedPattern": "bordered woven motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-074",
    "slug": "product-pwt-074",
    "name": "maroon, mustard, and orange folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with maroon, mustard, and orange visible and a repeating motif with border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-079.webp",
        "alt": "Product image: maroon, mustard, and orange folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "maroon, mustard, and orange",
      "detectedPattern": "repeating motif with border",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-075",
    "slug": "product-pwt-075",
    "name": "brown, black, and peach folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with brown, black, and peach visible and a large geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-080.webp",
        "alt": "Product image: brown, black, and peach folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "brown, black, and peach",
      "detectedPattern": "large geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-076",
    "slug": "product-pwt-076",
    "name": "cream, blue, mustard, and brown folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream, blue, mustard, and brown visible and a bordered geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-081.webp",
        "alt": "Product image: cream, blue, mustard, and brown folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream, blue, mustard, and brown",
      "detectedPattern": "bordered geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-077",
    "slug": "product-pwt-077",
    "name": "black and magenta scarf or stole",
    "description": "Photograph shows a scarf or stole with black and magenta visible and a small fringed textile.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-082.webp",
        "alt": "Product image: black and magenta scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "black and magenta",
      "detectedPattern": "small fringed textile",
      "confidence": "HIGH",
      "notes": "Narrow textile form and/or fringe are visible; material and dimensions need owner review."
    }
  },
  {
    "id": "PWT-078",
    "slug": "product-pwt-078",
    "name": "peach, orange, and brown folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with peach, orange, and brown visible and a large geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-083.webp",
        "alt": "Product image: peach, orange, and brown folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "peach, orange, and brown",
      "detectedPattern": "large geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-079",
    "slug": "product-pwt-079",
    "name": "cream and navy blue folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with cream and navy blue visible and a large geometric motif with border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-084.webp",
        "alt": "Product image: cream and navy blue folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "cream and navy blue",
      "detectedPattern": "large geometric motif with border",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-080",
    "slug": "product-pwt-080",
    "name": "purple and magenta folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with purple and magenta visible and a bordered woven motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-085.webp",
        "alt": "Product image: purple and magenta folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "purple and magenta",
      "detectedPattern": "bordered woven motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-081",
    "slug": "product-pwt-081",
    "name": "dark green folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with dark green visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-086.webp",
        "alt": "Product image: dark green folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "dark green",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-082",
    "slug": "product-pwt-082",
    "name": "navy blue and cream folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with navy blue and cream visible and a repeating geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-087.webp",
        "alt": "Product image: navy blue and cream folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "navy blue and cream",
      "detectedPattern": "repeating geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-083",
    "slug": "product-pwt-083",
    "name": "maroon and orange folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with maroon and orange visible and a repeating geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-088.webp",
        "alt": "Product image: maroon and orange folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "maroon and orange",
      "detectedPattern": "repeating geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-084",
    "slug": "product-pwt-084",
    "name": "black and purple handbag",
    "description": "Photograph shows a handbag with black and purple visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-089.webp",
        "alt": "Product image: black and purple handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "black and purple",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-085",
    "slug": "product-pwt-085",
    "name": "cream, green, and orange handbag",
    "description": "Photograph shows a handbag with cream, green, and orange visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-090.webp",
        "alt": "Product image: cream, green, and orange handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "cream, green, and orange",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-086",
    "slug": "product-pwt-086",
    "name": "light blue and black handbag",
    "description": "Photograph shows a handbag with light blue and black visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-091.webp",
        "alt": "Product image: light blue and black handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "light blue and black",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-087",
    "slug": "product-pwt-087",
    "name": "brown, olive, red, and cream stack of folded textile items",
    "description": "Photograph shows a stack of folded textile items with brown, olive, red, and cream visible and a plain/color-blocked folded surfaces.",
    "categorySlug": "other",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-092.webp",
        "alt": "Product image: brown, olive, red, and cream stack of folded textile items"
      }
    ],
    "review": {
      "productType": "stack of folded textile items",
      "detectedColors": "brown, olive, red, and cream",
      "detectedPattern": "plain/color-blocked folded surfaces",
      "confidence": "HIGH",
      "notes": "Several separate folded items are visible; product grouping and intended use need owner review."
    }
  },
  {
    "id": "PWT-088",
    "slug": "product-pwt-088",
    "name": "dark green folded packaged textile",
    "description": "Photograph shows a folded packaged textile with dark green visible and a small repeating motif.",
    "categorySlug": "other",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-093.webp",
        "alt": "Product image: dark green folded packaged textile"
      }
    ],
    "review": {
      "productType": "folded packaged textile",
      "detectedColors": "dark green",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Packaging and the intended product type are not certain from the photograph."
    }
  },
  {
    "id": "PWT-089",
    "slug": "product-pwt-089",
    "name": "red handbag",
    "description": "Photograph shows a handbag with red visible and a patterned textile or plain surface.",
    "categorySlug": "handbags",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-094.webp",
        "alt": "Product image: red handbag"
      }
    ],
    "review": {
      "productType": "handbag",
      "detectedColors": "red",
      "detectedPattern": "patterned textile or plain surface",
      "confidence": "MEDIUM",
      "notes": "Bag structure and handles are visible; material and product details need owner review."
    }
  },
  {
    "id": "PWT-090",
    "slug": "product-pwt-090",
    "name": "navy blue, cream, and multicolor scarf or stole",
    "description": "Photograph shows a scarf or stole with navy blue, cream, and multicolor visible and a striped with fringe.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-095.webp",
        "alt": "Product image: navy blue, cream, and multicolor scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "navy blue, cream, and multicolor",
      "detectedPattern": "striped with fringe",
      "confidence": "HIGH",
      "notes": "Narrow textile form and/or fringe are visible; material and dimensions need owner review."
    }
  },
  {
    "id": "PWT-091",
    "slug": "product-pwt-091",
    "name": "red, black, and cream folded fringed textile",
    "description": "Photograph shows a folded fringed textile with red, black, and cream visible and a color-blocked with fringe.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-096.webp",
        "alt": "Product image: red, black, and cream folded fringed textile"
      }
    ],
    "review": {
      "productType": "folded fringed textile",
      "detectedColors": "red, black, and cream",
      "detectedPattern": "color-blocked with fringe",
      "confidence": "HIGH",
      "notes": "The textile form and fringe are visible; exact product type needs review."
    }
  },
  {
    "id": "PWT-092",
    "slug": "product-pwt-092",
    "name": "brown and cream folded packaged textile",
    "description": "Photograph shows a folded packaged textile with brown and cream visible and a small repeating motif.",
    "categorySlug": "other",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-097.webp",
        "alt": "Product image: brown and cream folded packaged textile"
      }
    ],
    "review": {
      "productType": "folded packaged textile",
      "detectedColors": "brown and cream",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Packaging and the intended product type are not certain from the photograph."
    }
  },
  {
    "id": "PWT-093",
    "slug": "product-pwt-093",
    "name": "gray, mustard, navy, and multicolor assorted folded textiles",
    "description": "Photograph shows a assorted folded textiles with gray, mustard, navy, and multicolor visible and a mixed stripes and motifs.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-098.webp",
        "alt": "Product image: gray, mustard, navy, and multicolor assorted folded textiles"
      }
    ],
    "review": {
      "productType": "assorted folded textiles",
      "detectedColors": "gray, mustard, navy, and multicolor",
      "detectedPattern": "mixed stripes and motifs",
      "confidence": "HIGH",
      "notes": "The photograph shows multiple separate folded textiles; it is not treated as one product."
    }
  },
  {
    "id": "PWT-094",
    "slug": "product-pwt-094",
    "name": "navy blue, gray, pink, and black saree-like textile, repeated views",
    "description": "Photograph shows a saree-like textile, repeated views with navy blue, gray, pink, and black visible and a small repeating motif with contrasting border.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-099.webp",
        "alt": "Product image: navy blue, gray, pink, and black saree-like textile, repeated views"
      },
      {
        "src": "/products/pwt-img-100.webp",
        "alt": "Product image: navy blue, gray, pink, and black saree-like textile, repeated views"
      }
    ],
    "review": {
      "productType": "saree-like textile, repeated views",
      "detectedColors": "navy blue, gray, pink, and black",
      "detectedPattern": "small repeating motif with contrasting border",
      "confidence": "HIGH",
      "notes": "The two photographs show the same apparent textile pattern and folded arrangement; owner should confirm the grouping."
    }
  },
  {
    "id": "PWT-095",
    "slug": "product-pwt-095",
    "name": "red, blue, black, and green stack of packaged textile items",
    "description": "Photograph shows a stack of packaged textile items with red, blue, black, and green visible and a mixed folded surfaces.",
    "categorySlug": "other",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-101.webp",
        "alt": "Product image: red, blue, black, and green stack of packaged textile items"
      }
    ],
    "review": {
      "productType": "stack of packaged textile items",
      "detectedColors": "red, blue, black, and green",
      "detectedPattern": "mixed folded surfaces",
      "confidence": "HIGH",
      "notes": "Several separate packaged items are visible; product grouping and intended use need owner review."
    }
  },
  {
    "id": "PWT-096",
    "slug": "product-pwt-096",
    "name": "olive, teal, navy, pink, and red assorted textile items",
    "description": "Photograph shows a assorted textile items with olive, teal, navy, pink, and red visible and a mixed folded surfaces.",
    "categorySlug": "other",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-102.webp",
        "alt": "Product image: olive, teal, navy, pink, and red assorted textile items"
      }
    ],
    "review": {
      "productType": "assorted textile items",
      "detectedColors": "olive, teal, navy, pink, and red",
      "detectedPattern": "mixed folded surfaces",
      "confidence": "HIGH",
      "notes": "Several separate items are visible; product grouping and intended use need owner review."
    }
  },
  {
    "id": "PWT-097",
    "slug": "product-pwt-097",
    "name": "dark teal and green folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with dark teal and green visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-103.webp",
        "alt": "Product image: dark teal and green folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "dark teal and green",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-098",
    "slug": "product-pwt-098",
    "name": "gray, olive, navy, red, and cream stack of folded textile items",
    "description": "Photograph shows a stack of folded textile items with gray, olive, navy, red, and cream visible and a mixed folded surfaces.",
    "categorySlug": "other",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-104.webp",
        "alt": "Product image: gray, olive, navy, red, and cream stack of folded textile items"
      }
    ],
    "review": {
      "productType": "stack of folded textile items",
      "detectedColors": "gray, olive, navy, red, and cream",
      "detectedPattern": "mixed folded surfaces",
      "confidence": "HIGH",
      "notes": "Several separate folded items are visible; product grouping and intended use need owner review."
    }
  },
  {
    "id": "PWT-099",
    "slug": "product-pwt-099",
    "name": "mustard and brown folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with mustard and brown visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-105.webp",
        "alt": "Product image: mustard and brown folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "mustard and brown",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-100",
    "slug": "product-pwt-100",
    "name": "maroon and cream scarf or stole",
    "description": "Photograph shows a scarf or stole with maroon and cream visible and a small repeating motif.",
    "categorySlug": "textiles",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-106.webp",
        "alt": "Product image: maroon and cream scarf or stole"
      }
    ],
    "review": {
      "productType": "scarf or stole",
      "detectedColors": "maroon and cream",
      "detectedPattern": "small repeating motif",
      "confidence": "HIGH",
      "notes": "Narrow rectangular textile form is visible; exact product type, material, and dimensions need review."
    }
  },
  {
    "id": "PWT-101",
    "slug": "product-pwt-101",
    "name": "maroon and cream folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with maroon and cream visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-107.webp",
        "alt": "Product image: maroon and cream folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "maroon and cream",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-102",
    "slug": "product-pwt-102",
    "name": "maroon and cream folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with maroon and cream visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-108.webp",
        "alt": "Product image: maroon and cream folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "maroon and cream",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-103",
    "slug": "product-pwt-103",
    "name": "navy blue and cream folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with navy blue and cream visible and a repeating geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-109.webp",
        "alt": "Product image: navy blue and cream folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "navy blue and cream",
      "detectedPattern": "repeating geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-104",
    "slug": "product-pwt-104",
    "name": "red and cream folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with red and cream visible and a repeating geometric motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-110.webp",
        "alt": "Product image: red and cream folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "red and cream",
      "detectedPattern": "repeating geometric motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  },
  {
    "id": "PWT-105",
    "slug": "product-pwt-105",
    "name": "dark green and teal folded saree-like textile",
    "description": "Photograph shows a folded saree-like textile with dark green and teal visible and a small repeating motif.",
    "categorySlug": "sarees",
    "status": "published",
    "provisional": true,
    "images": [
      {
        "src": "/products/pwt-img-111.webp",
        "alt": "Product image: dark green and teal folded saree-like textile"
      }
    ],
    "review": {
      "productType": "folded saree-like textile",
      "detectedColors": "dark green and teal",
      "detectedPattern": "small repeating motif",
      "confidence": "MEDIUM",
      "notes": "Exact product type, fiber, and commercial details need owner review."
    }
  }
];
