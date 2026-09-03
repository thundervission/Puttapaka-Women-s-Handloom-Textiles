# PUTTAPAKA-WEBSITE-MASTER-SPEC.md

> **Project:** Puttapaka Women's Handloom Textiles  
> **Project type:** Custom, mobile-first, catalog-driven handloom commerce website  
> **Primary conversion:** Product page → WhatsApp conversation → seller confirms order  
> **Initial infrastructure target:** Zero recurring software/hosting cost  
> **Primary development tools:** Kiro + Antigravity + VS Code + GitHub  
> **Recommended hosting for a commercial zero-budget launch:** Cloudflare Pages  
> **Document purpose:** A complete beginner-to-production build handbook for one developer starting from a fresh machine.

---

## 0. READ THIS FIRST

This project is intentionally **not** a traditional ecommerce platform.

The first version is a **digital showroom and sales funnel**:

```text
Customer discovers the brand
        ↓
Visits website
        ↓
Browses products
        ↓
Opens product details
        ↓
Clicks "Order on WhatsApp"
        ↓
WhatsApp opens with a pre-filled product message
        ↓
Seller confirms availability
        ↓
Seller collects address/payment details
        ↓
Seller ships the product
```

This model is appropriate for a very small women-led handloom business because it minimizes software complexity and lets the owner continue using WhatsApp as the main sales and customer-support channel.

The first release should **not** contain unnecessary ecommerce features such as customer accounts, payment gateways, wishlists, complex carts, microservices, or a large custom admin panel.

The guiding engineering principle is:

> **Build the smallest production system that solves the real business problem, then add complexity only when real sales justify it.**

---

# 1. BUSINESS OVERVIEW

## 1.1 Business name

**Puttapaka Women's Handloom Textiles**

Short visual brand form where space is limited:

**PUTTAPAKA**

Supporting descriptor:

**Women's Handloom Textiles**

Possible short social label:

**Puttapaka Handlooms**

Do not change the official business name in legal or business information without confirmation from the owner.

---

## 1.2 Business model

The business sells handloom sarees and related clothing/textile products.

The initial online model is:

- Product discovery on the website.
- Customer sees price and product information.
- Customer clicks WhatsApp ordering CTA.
- A pre-filled WhatsApp message identifies the exact product.
- Seller manually confirms availability.
- Seller handles payment, address, delivery, and customer communication.

This is a **lead/conversation commerce model**, not a full automated checkout system.

---

## 1.3 Core business goals

### Goal A — Present products professionally

The website must make the products look authentic, desirable, and trustworthy.

### Goal B — Make ordering extremely easy

A customer should go from product discovery to WhatsApp in as few interactions as possible.

### Goal C — Establish trust

The website must explain who the business is, what it sells, what handloom means to the business, and how customers can contact the seller.

### Goal D — Stay inexpensive

The initial system should have no mandatory monthly hosting/database/payment-service bill.

### Goal E — Be maintainable

A future developer should understand the code quickly.

### Goal F — Be scalable without premature complexity

The architecture should make future database, payment, inventory, and order features possible without requiring a total rewrite.

---

# 2. WHAT SUCCESS LOOKS LIKE

The V1 website is successful when all of the following are true:

1. A visitor understands the business within 5–10 seconds.
2. A visitor can find a saree quickly on a mobile phone.
3. Product photography is clear and high quality.
4. Product price is visible.
5. Product information is understandable.
6. The WhatsApp CTA is obvious.
7. The WhatsApp message contains the correct product information.
8. The website loads quickly.
9. Every important page is usable on mobile.
10. Search engines can index the public product pages.
11. The business owner can update product availability with minimal developer work.
12. No fake claims, fake reviews, fake testimonials, or fabricated business history are included.

---

# 3. THE MOST IMPORTANT DESIGN RULE

## Do NOT make this look AI-generated.

The website must not look like:

- A generic Tailwind demo.
- A copied Shopify theme.
- A v0 landing page.
- A collection of oversized gradients.
- A random collection of rounded cards.
- A template with stock photos and placeholder copy.
- A generic "AI startup" aesthetic.

Avoid these common patterns:

```text
purple gradient hero
huge glowing text
excessive glassmorphism
floating blobs everywhere
cards with giant rounded corners
random animated counters
fake testimonials
unnecessary 3D effects
random icons beside every sentence
```

The visual direction is:

> **Contemporary Indian textile editorial + quiet commerce + authentic small-business personality.**

The website should look designed by a human with a point of view.

---

# 4. DESIGN PHILOSOPHY

Use the following hierarchy:

```text
Real photography
      ↓
Authentic brand story
      ↓
Excellent typography
      ↓
Clear product information
      ↓
Simple navigation
      ↓
WhatsApp conversion
      ↓
Subtle interaction
```

Not:

```text
Animation
      ↓
Effects
      ↓
Gradients
      ↓
Decorative shapes
      ↓
Product information
```

The products are the visual hero.

---

# 5. USER PERSONAS

## 5.1 Primary customer

A person discovering sarees through Instagram, WhatsApp, Google, family/community referrals, or word of mouth.

Likely characteristics:

- Mobile-first.
- Wants to see real product images.
- Wants the price quickly.
- May have questions about fabric, color, blouse piece, length, shipping, or availability.
- May prefer messaging a real person rather than completing a complicated checkout form.

## 5.2 Secondary customer

Someone searching Google for handloom/saree products and discovering a product page directly.

## 5.3 Returning customer

A person who already knows the seller and uses the website mainly as a product catalog.

---

# 6. CUSTOMER JOURNEY

## Discovery

```text
Instagram / Google / WhatsApp / Referral
                   ↓
                Website
```

## Consideration

```text
Homepage / Collection
          ↓
      Product card
          ↓
     Product page
```

## Conversion

```text
Product page
    ↓
Order on WhatsApp
    ↓
WhatsApp
```

## Sales fulfillment

```text
Seller confirms
    ↓
Payment
    ↓
Address
    ↓
Shipping
    ↓
Customer receives product
```

## Retention

```text
Customer experience
        ↓
Review / customer photo
        ↓
Instagram / website
        ↓
New discovery
```

---

# 7. V1 SCOPE

## 7.1 Must-have

- Responsive homepage.
- Product collection/shop page.
- Product detail pages.
- Categories.
- Search.
- Basic filtering.
- Product availability.
- WhatsApp ordering.
- About/brand story.
- Handloom/craft story.
- Contact page.
- Shipping information.
- Returns/exchange information.
- Privacy information.
- Footer.
- SEO metadata.
- Open Graph sharing metadata.
- Sitemap.
- Robots.txt.
- Accessibility basics.
- Performance optimization.
- Basic analytics, once accounts are available.

## 7.2 Deliberately excluded from V1

- User login.
- Customer accounts.
- Wishlist.
- Loyalty program.
- Online payment gateway.
- Automated order management.
- Automated invoice generation.
- Automated shipping API.
- Full cart system.
- Recommendation engine.
- AI chatbot.
- Complex CMS.
- Microservice architecture.
- Kubernetes.
- Redis.
- Search engine service.
- Large admin application.

---

# 8. FUTURE VERSION ROADMAP

## V1 — Catalog + WhatsApp

```text
Website
+
Product catalog
+
WhatsApp
+
Instagram
+
Google Business Profile
```

## V2 — Structured operations

```text
Supabase/PostgreSQL
+
Admin product management
+
Inventory status
+
Basic orders
+
Customer records
```

## V3 — Ecommerce

```text
Cart
+
Checkout
+
Payment gateway
+
Automated order status
+
Shipping integration
```

## V4 — Growth system

```text
CRM
+
Marketing automation
+
Customer segmentation
+
Advanced analytics
+
Abandoned cart
+
Email / WhatsApp campaigns
```

---

# 9. ZERO-COST STRATEGY

## 9.1 Principle

"Free" means the launch should not require a recurring software/hosting bill.

It does **not** mean that every possible business expense is free forever.

Possible future costs include:

- Domain registration.
- Paid AI usage.
- Professional email.
- Payment gateway transaction fees.
- Shipping costs/services.
- Paid advertising.
- Premium image services.

None of these should block V1.

---

## 9.2 Recommended tools

| Area | Recommended | Initial cost target |
|---|---|---:|
| Editor | VS Code | ₹0 |
| AI development | Kiro | Use available free tier/account options |
| AI development | Antigravity | Use available free tier/account options |
| Source control | Git + GitHub | ₹0 for basic use |
| Frontend | Next.js + TypeScript | ₹0 |
| Styling | Tailwind CSS | ₹0 |
| Hosting | Cloudflare Pages | ₹0 target for V1 |
| Product data | TypeScript/JSON | ₹0 |
| Orders | WhatsApp | ₹0 software target |
| Local discovery | Google Business Profile | ₹0 |
| Analytics | Google Analytics / Clarity | ₹0 basic usage |

Service limits and terms can change. Verify current provider terms before launch.

---

# 10. WHY CLOUDFLARE PAGES FOR THE INITIAL DEPLOYMENT

For a small commercial static/catalog site, Cloudflare Pages is a strong zero-budget hosting option.

Current Cloudflare documentation states that static asset requests on Pages are free and unlimited, and its Free plan has a Pages build allowance and other published limits. citeturn243263search2turn243263search6

Do not assume that every platform's free tier is suitable for commercial use. For example, Vercel's June 1, 2026 terms state that the Hobby plan is limited to personal, non-commercial use. citeturn243263search3

Therefore the initial deployment recommendation is:

```text
GitHub
   ↓
Cloudflare Pages
   ↓
Live website
```

---

# 11. DEVELOPMENT ENVIRONMENT FROM A FRESH MACHINE

This section assumes a developer who is starting from a fresh Ubuntu/Linux machine. Equivalent installers can be used on Windows or macOS.

## 11.1 Operating system baseline

Recommended:

- Ubuntu LTS or another currently supported Linux distribution.
- 8 GB RAM minimum.
- 16 GB preferred for comfortable AI-assisted development.
- Stable internet connection.
- Modern Chromium/Firefox browser.

---

## 11.2 Update the machine

Run:

```bash
sudo apt update
sudo apt upgrade -y
```

---

## 11.3 Install essential utilities

```bash
sudo apt install -y git curl unzip build-essential ca-certificates
```

Check:

```bash
git --version
curl --version
```

---

## 11.4 Install Node.js

Use a current LTS release supported by the versions of Next.js you choose.

A Node version manager is preferable to manually replacing system Node versions.

One common route is `nvm`.

Install `nvm` using the current official instructions, then install the Node LTS release:

```bash
nvm install --lts
nvm use --lts
```

Check:

```bash
node -v
npm -v
```

Do not blindly copy an obsolete Node version from an old tutorial. Check the current framework compatibility requirements before locking versions.

---

# 12. INSTALL YOUR DEVELOPMENT TOOLS

## 12.1 VS Code

Install Visual Studio Code from the official source appropriate to your operating system.

Suggested extensions:

- ESLint.
- Prettier.
- Tailwind CSS IntelliSense.
- GitLens if you find it useful.
- Error Lens if desired.
- EditorConfig support where relevant.

Avoid installing 50 extensions. More extensions do not make you a better developer.

---

## 12.2 Kiro

Kiro is particularly useful for this project because its current workflow supports structured specs, steering, hooks, and agentic coding. Kiro documents its workflow as requirements → design → tasks, and steering files persist project conventions in `.kiro/steering/`. citeturn243263search0turn243263search5turn243263search12

Use Kiro for:

```text
Business requirements
        ↓
Architecture
        ↓
Tasks
        ↓
Implementation planning
```

Do not use an AI coding agent as a substitute for architecture decisions.

---

## 12.3 Antigravity

Use Antigravity mainly as the implementation accelerator.

Good tasks for Antigravity:

- Generate a component from an explicit specification.
- Implement a reviewed task.
- Refactor repetitive code.
- Fix a known bug.
- Add tests.
- Review a page against acceptance criteria.

Bad task:

> "Build the entire website however you think is best."

That creates architecture drift and generic output.

---

# 13. GIT BASICS

Initialize Git once the project is created:

```bash
git init
git branch -M main
```

Create a GitHub repository with a matching or similar name:

```text
puttapaka-womens-handloom-textiles
```

First commit:

```bash
git add .
git commit -m "chore: initialize project"
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

Never commit:

```text
.env
.env.local
API keys
private tokens
service-role secrets
private customer data
```

Create `.env.example` for documentation.

---

# 14. INITIAL PROJECT CREATION

Recommended stack:

```text
Next.js
TypeScript
Tailwind CSS
ESLint
```

Create the project using the current official Next.js setup command and select the App Router.

Example form:

```bash
npx create-next-app@latest puttapaka-womens-handloom-textiles
cd puttapaka-womens-handloom-textiles
npm run dev
```

Follow the current installer prompts rather than forcing settings from outdated tutorials.

Open:

```text
http://localhost:3000
```

Confirm the base app works **before** asking an AI agent to modify it.

---

# 15. FIRST PROJECT RULE: FREEZE THE BASELINE

Before customization:

```bash
git add .
git commit -m "chore: baseline nextjs application"
```

This gives you a known-good recovery point.

AI agents are powerful but can make broad changes. Small commits give you escape routes.

---

# 16. REPOSITORY STRUCTURE

Recommended V1 structure:

```text
puttapaka-womens-handloom-textiles/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── shop/
│   │   └── page.tsx
│   │
│   ├── collections/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── story/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── shipping/
│   │   └── page.tsx
│   │
│   ├── returns/
│   │   └── page.tsx
│   │
│   ├── privacy/
│   │   └── page.tsx
│   │
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── layout/
│   ├── home/
│   ├── product/
│   ├── collection/
│   ├── whatsapp/
│   └── ui/
│
├── data/
│   ├── products.ts
│   ├── categories.ts
│   └── site.ts
│
├── lib/
│   ├── whatsapp.ts
│   ├── seo.ts
│   └── utils.ts
│
├── types/
│   └── product.ts
│
├── public/
│   ├── brand/
│   ├── products/
│   └── icons/
│
├── .kiro/
│   ├── steering/
│   └── specs/
│
├── .env.example
├── .gitignore
├── README.md
└── package.json
```

The exact structure may vary slightly as the implementation evolves.

The important rule is separation of responsibilities.

---

# 17. KIRO PROJECT CONTROL

Kiro should be treated as the structured planning layer.

Its current documentation supports steering files in `.kiro/steering/`, specs with requirements/design/tasks, and hooks for repeatable agent workflows. citeturn243263search5turn243263search11

Create at minimum:

```text
.kiro/steering/project.md
.kiro/steering/design.md
.kiro/steering/engineering.md
.kiro/steering/business-rules.md
```

---

# 18. KIRO STEERING FILE — PROJECT RULES

Suggested content:

```md
# Puttapaka Project Context

## Product
Puttapaka Women's Handloom Textiles is a small women-led handloom textile business.

## Website purpose
The site is a digital product catalog and WhatsApp commerce funnel.

## Primary conversion
Product detail page -> Order on WhatsApp.

## V1 constraints
- No payment gateway.
- No customer login.
- No complex cart.
- No unnecessary backend.
- Product catalog can be static.
- Prefer server-rendered/static content.
- Mobile-first.

## Brand principles
- Authentic.
- Human.
- Editorial.
- Minimal.
- Indian textile heritage without visual clichés.
- Product photography is the primary visual asset.

## Content rules
- Never invent business history.
- Never invent customer reviews.
- Never invent artisan claims.
- Never claim a fabric is handloom unless the business verifies it.
- Never create fake scarcity.
- Prices must come from product data.

## UX priority
1. Product discovery.
2. Product clarity.
3. Trust.
4. WhatsApp conversion.
5. Speed.
```

---

# 19. KIRO STEERING FILE — DESIGN RULES

```md
# Design System Rules

## Visual direction
Contemporary Indian textile editorial.

## Avoid
- AI-looking generic gradients.
- Excessive rounded cards.
- Glassmorphism.
- Decorative blobs.
- Excessive animation.
- Generic dashboard styling.
- Fake luxury language.

## Typography
Use one display serif and one highly readable sans-serif.
Use a limited scale and clear hierarchy.

## Color
Use warm neutrals and one strong brand accent.
Do not use a random multi-color palette.

## Layout
Prefer editorial composition, asymmetric whitespace where appropriate, and strong image hierarchy.
Do not make every section a centered card grid.

## Animation
Subtle only.
Use animation to support transitions, not to demonstrate AI capability.

## Responsive design
Design mobile-first.
Every component must be usable at narrow mobile widths.
```

---

# 20. KIRO STEERING FILE — ENGINEERING RULES

```md
# Engineering Rules

- TypeScript strict mode.
- Prefer server components where client state is not needed.
- Minimize client-side JavaScript.
- Use semantic HTML.
- Keep components small and purposeful.
- Avoid unnecessary abstraction.
- Avoid premature database work.
- No duplicated business logic.
- No hardcoded WhatsApp URLs in UI components.
- Centralize product data.
- Centralize site configuration.
- Use accessible buttons and links.
- Provide alt text for meaningful images.
- Test changes before declaring them complete.
- Run lint and build before release.
- Do not rewrite unrelated files.
- Do not add dependencies without justification.
```

---

# 21. KIRO STEERING FILE — BUSINESS RULES

```md
# Business Rules

## Product
Every product must have a stable product ID.

## Availability
Allowed values:
- available
- low_stock
- sold_out
- pre_order
- hidden

## WhatsApp
Every active product must generate a product-specific WhatsApp message.

## Pricing
Price is stored as an integer INR amount.
Never calculate price from display text.

## Ordering
The website does not claim an order is completed when the WhatsApp button is clicked.
It only starts an inquiry/order conversation.

## Trust
Never fabricate:
- reviews
- sales numbers
- artisan claims
- geographic claims
- certifications
- historical claims
```

---

# 22. DEVELOPMENT METHOD WITH KIRO

For each meaningful feature:

```text
Business problem
     ↓
Kiro requirement
     ↓
Kiro design
     ↓
Kiro tasks
     ↓
Review
     ↓
Antigravity implementation
     ↓
VS Code inspection
     ↓
Tests
     ↓
Commit
```

Kiro's current documented spec workflow explicitly uses requirements, design, and tasks. citeturn243263search5turn243263search9

Do not ask the agent to execute the whole project in one giant prompt.

---

# 23. MASTER KIRO PROMPT

Use this as the initial Kiro project briefing:

```text
You are the lead software architect for a production website called:
Puttapaka Women's Handloom Textiles.

Business:
A small women-led business selling sarees and related handloom textile/clothing products.

Business model:
The website is a digital catalog, not a full ecommerce checkout.
Customers browse products, open a product detail page, and click "Order on WhatsApp".
The WhatsApp chat must open with a pre-filled message identifying the product.
The seller then handles availability, payment, address, and shipping manually.

Technology constraints:
- Next.js
- TypeScript
- Tailwind CSS
- GitHub
- Cloudflare Pages as target hosting
- Static product data for V1
- No mandatory database for V1

Product requirements:
- Fast mobile-first website.
- Product catalog.
- Product detail pages.
- Categories.
- Search.
- Basic filtering.
- Product availability.
- SEO.
- Accessibility.
- WhatsApp CTA.

Design requirements:
- Must look custom and human-designed.
- Must not look like a generic AI template.
- No excessive gradients.
- No glassmorphism.
- No unnecessary giant rounded cards.
- No fake social proof.
- Use real product photography.
- Modern Indian textile editorial aesthetic.

Engineering requirements:
- Strong TypeScript.
- Clean component architecture.
- Minimal client-side JavaScript.
- Semantic HTML.
- Reusable but not over-abstracted components.
- Central product data model.
- Central WhatsApp link generator.
- No secrets in frontend source.

Before writing implementation code:
1. Produce requirements.
2. Produce architecture.
3. Produce task breakdown.
4. Identify risks.
5. Identify anything that requires a business decision.
6. Do not invent business facts.
```

---

# 24. ANTIGRAVITY IMPLEMENTATION RULE

Use Antigravity after the feature/task is explicit.

Use this prompt pattern:

```text
Implement only the task described below.

Task:
[PASTE ONE TASK]

Constraints:
- Follow the existing repository architecture.
- Do not rewrite unrelated components.
- Do not add dependencies unless necessary.
- Do not change branding decisions.
- Do not invent content.
- Keep the code accessible and mobile-first.
- Run tests/lint/build after implementation if practical.
- Show the files changed and why.
```

This is much safer than:

```text
build everything
```

---

# 25. BRAND CONTENT COLLECTION BEFORE UI BUILD

Do not begin by inventing homepage copy.

First collect actual business facts from the owners.

Ask them for:

### Business identity

- Official business name.
- Preferred short name.
- Business phone/WhatsApp number.
- Email, if available.
- Address or operating location if they want it public.
- Working hours.
- Social links.

### Products

- Product categories.
- Actual fabric names.
- Typical saree lengths.
- Blouse-piece rules.
- Price ranges.
- Colors.
- Product care instructions.
- Availability rules.

### Story

- Who started the business?
- Why did they start it?
- When did it start?
- Who runs it now?
- What makes the products special?
- What is personally meaningful about the business?

### Craft claims

- Which products are genuinely handloom?
- Where are they sourced/made?
- Which artisan/community claims can be verified?
- What certifications or tags genuinely exist?

### Policies

- Shipping area.
- Shipping charge.
- Approximate dispatch time.
- Exchange policy.
- Return policy.
- Damaged-product procedure.
- Cancellation procedure.

Only verified answers should enter production content.

---

# 26. INFORMATION ARCHITECTURE

Primary navigation:

```text
Home
Shop
Collections
Our Story
Contact
WhatsApp
```

Secondary/footer navigation:

```text
Shipping
Returns & Exchange
Privacy
Instagram
WhatsApp
Contact
```

Potential collections:

```text
All Sarees
Handloom Sarees
Cotton Sarees
Silk Sarees
Festive Collection
New Arrivals
```

Do not create categories the business does not actually sell.

---

# 27. HOMEPAGE SPECIFICATION

## 27.1 Header

Desktop:

```text
LOGO
Home
Shop
Collections
Our Story
Contact
                         WhatsApp
```

Mobile:

```text
Menu      Logo      WhatsApp
```

Header requirements:

- Sticky or intelligently persistent if it does not hurt mobile space.
- Clear contrast.
- Keyboard accessible.
- No giant header consuming the initial viewport.

---

## 27.2 Hero

Purpose:

Communicate identity and route the visitor to products.

Hero content:

```text
Headline
One concise supporting paragraph
Primary CTA: Explore Collection
Secondary CTA: Chat on WhatsApp
Authentic image
```

Example placeholder direction, not final copy:

```text
Woven in tradition.
Made for today.

Handloom sarees and textiles from Puttapaka Women's Handloom Textiles.

[ Explore Collection ] [ Chat on WhatsApp ]
```

Do not publish this copy automatically. Replace it with approved brand language.

---

# 28. FEATURED CATEGORIES

Use 4–6 meaningful categories maximum above the fold.

Each card should have:

- Actual category image.
- Category name.
- Short descriptor if useful.
- Link.

Avoid adding decorative descriptions that do not help customers.

---

# 29. FEATURED PRODUCTS

Show approximately 6–8 products on the homepage.

Recommended card content:

```text
Image
Product name
Fabric / short attribute
Price
Availability badge only when meaningful
View product
```

Product cards should not become mini dashboards.

---

# 30. BRAND STORY SECTION

This section should be human.

Suggested structure:

```text
Image / founder or real business context
        |
        +-- Heading
        +-- 1–3 paragraphs
        +-- Read our story
```

Use real photography.

Do not use an AI-generated founder image as a substitute for the real people behind the business.

---

# 31. HANDLOOM / CRAFT SECTION

Purpose:

Explain why the textile/product matters.

Possible structure:

```text
Craft
  ↓
Material
  ↓
Weaving
  ↓
Finishing
  ↓
Saree
```

This section must use only facts the business can support.

---

# 32. TRUST SECTION

Examples of factual trust signals:

```text
Authentic products
Direct WhatsApp ordering
Small women-led business
Real product photography
Customer support
```

Do not use made-up metrics such as:

```text
10,000+ happy customers
50+ years of tradition
99% satisfaction
```

unless the business provides evidence.

---

# 33. CUSTOMER STORIES

Use this only when real reviews exist.

Each review should be genuine and approved for publication.

Recommended format:

```text
Customer first name / approved identifier
Short review
Optional photo
```

Never ask an AI agent to invent testimonials for the website.

---

# 34. INSTAGRAM / SOCIAL SECTION

Use actual social content if practical.

The purpose is to show that:

```text
Business exists
+
Real products exist
+
People interact with it
```

A simple link to the Instagram profile is safer and lighter than embedding a heavy social widget.

---

# 35. FINAL HOMEPAGE CTA

End with a clear action:

```text
See a saree you love?
Talk to us on WhatsApp.

[ Chat with us ]
```

Again, use approved brand copy.

---

# 36. SHOP PAGE SPECIFICATION

The shop page must prioritize speed and discovery.

Structure:

```text
Page title
Short description
Search
Category filters
Price filter
Optional fabric/color filters
Sort
Product grid
```

Mobile filters should open in a sheet/drawer or another compact interaction.

Avoid a massive filter sidebar taking half the screen.

---

# 37. SEARCH

V1 search can be client-side if the catalog is small.

Search fields:

- Product name.
- Product ID.
- Fabric.
- Color.
- Category.

Normalize input for matching:

```text
trim
lowercase
```

Do not install a search engine service for 20–200 products.

---

# 38. PRODUCT DATA MODEL

Use a typed model.

Example:

```ts
export type ProductAvailability =
  | "available"
  | "low_stock"
  | "sold_out"
  | "pre_order"
  | "hidden";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceInr: number;
  categorySlug: string;
  fabric?: string;
  color?: string;
  dimensions?: string;
  blouseIncluded?: boolean;
  careInstructions?: string[];
  availability: ProductAvailability;
  featured?: boolean;
  newArrival?: boolean;
  images: ProductImage[];
  seo?: {
    title?: string;
    description?: string;
  };
}

export interface ProductImage {
  src: string;
  alt: string;
}
```

Use integer INR amounts:

```text
1850
2250
3990
```

not:

```text
"₹1,850"
```

Price formatting should happen at the display layer.

---

# 39. PRODUCT ID RULE

Every product needs a stable ID.

Example:

```text
PWT-001
PWT-002
PWT-003
```

Optional family/category coding:

```text
PWT-COT-001
PWT-IKAT-001
PWT-SILK-001
```

Do not continuously change IDs after publishing them.

The ID appears in WhatsApp messages and can be used by the seller to locate the product.

---

# 40. PRODUCT SLUG RULE

Use readable URLs:

```text
/product/puttapaka-handloom-cotton-saree
```

Not:

```text
/product/173928
```

Slugs should be stable and unique.

---

# 41. PRODUCT PAGE SPECIFICATION

Layout:

Desktop:

```text
┌───────────────────────────┬────────────────────────────┐
│                           │ Product name               │
│       Product gallery     │ Price                      │
│                           │ Product ID                 │
│                           │ Description                │
│                           │ Fabric                     │
│                           │ Color                      │
│                           │ Blouse info                │
│                           │ Availability               │
│                           │                            │
│                           │ ORDER ON WHATSAPP          │
└───────────────────────────┴────────────────────────────┘
```

Mobile:

```text
Image gallery
Product name
Price
Product ID
Key details
Description
WhatsApp CTA
Policies
```

A sticky WhatsApp CTA can be used on mobile if it does not cover content.

---

# 42. PRODUCT IMAGES

Ideal image set:

1. Full product image.
2. Model/usage image where available.
3. Fabric close-up.
4. Border/pallu/detail.
5. Blouse/packaging/details if relevant.

Image requirements:

- Real photography.
- Consistent aspect ratio where possible.
- Compress large originals.
- Use meaningful alt text.
- Avoid unnecessary decorative images in the accessibility tree.

---

# 43. PRODUCT DETAILS

Potential fields:

```text
Fabric
Color
Length
Blouse piece
Weave/technique
Occasion
Care
Availability
```

Only show fields for which the business has accurate information.

Do not fill empty fields with invented data.

---

# 44. WHATSAPP ORDER FLOW

WhatsApp click-to-chat supports a URL in the form `https://wa.me/<international-number>` and supports a URL-encoded pre-filled message using `?text=`. WhatsApp documents that the feature works on phones and WhatsApp Web. citeturn243263search1turn243263search10

The implementation should generate this URL centrally.

---

# 45. WHATSAPP MESSAGE CONTENT

Recommended message:

```text
Hello Puttapaka Women's Handloom Textiles,

I am interested in this product:

Product: {{productName}}
Product ID: {{productId}}
Price: ₹{{price}}

Product link:
{{url}}

Please confirm availability and ordering details.

Thank you.
```

Do not state:

```text
I have completed my order.
```

because clicking WhatsApp does not automatically complete a sale.

---

# 46. WHATSAPP UTILITY FUNCTION

Example:

```ts
export function createWhatsAppUrl({
  phoneNumber,
  message,
}: {
  phoneNumber: string;
  message: string;
}) {
  const normalizedPhone = phoneNumber.replace(/\D/g, "");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
```

For production, validate the expected international number format at the configuration level.

Do not scatter custom WhatsApp string concatenation throughout components.

---

# 47. PRODUCT-SPECIFIC WHATSAPP FUNCTION

Example architecture:

```ts
export function createProductWhatsAppMessage(product: Product, productUrl: string) {
  return [
    "Hello Puttapaka Women's Handloom Textiles,",
    "",
    "I am interested in this product:",
    "",
    `Product: ${product.name}`,
    `Product ID: ${product.id}`,
    `Price: ₹${product.priceInr}`,
    "",
    `Product link: ${productUrl}`,
    "",
    "Please confirm availability and ordering details.",
    "",
    "Thank you.",
  ].join("\n");
}
```

Then:

```ts
const message = createProductWhatsAppMessage(product, productUrl);
const href = createWhatsAppUrl({
  phoneNumber: siteConfig.whatsappNumber,
  message,
});
```

---

# 48. MOBILE WHATSAPP CTA

Recommended:

```text
┌──────────────────────────────────┐
│      Order on WhatsApp           │
└──────────────────────────────────┘
```

A floating global contact CTA may also exist.

Do not show five different WhatsApp buttons in one viewport.

---

# 49. AVAILABILITY BEHAVIOR

### Available

Show:

```text
Available
Order on WhatsApp
```

### Low stock

Show only if the seller actually uses a reliable low-stock rule.

### Sold out

```text
Sold out
```

Disable the order CTA or change it to:

```text
Ask about this product
```

### Pre-order

```text
Pre-order
```

The seller must provide a realistic fulfillment expectation.

### Hidden

Do not render publicly.

---

# 50. CONTACT PAGE

Include:

- Business name.
- WhatsApp/phone.
- Email if available.
- Social links.
- Location if the owner wants to publish it.
- Business hours.
- A clear contact CTA.

Avoid a complicated lead form in V1 unless there is a real business reason.

---

# 51. ABOUT PAGE

Suggested sections:

```text
Who we are
How it started
What we sell
Why handloom matters to us
Why customers choose us
Contact
```

This page should sound like the business, not like generic AI marketing language.

---

# 52. SHIPPING PAGE

State only actual policies.

Include:

- Areas served.
- Typical processing time.
- Shipping charge.
- Delivery estimate if known.
- What happens after WhatsApp confirmation.
- What customers should do if a parcel is delayed/damaged.

Avoid promising exact delivery dates unless the seller controls the shipping process.

---

# 53. RETURNS / EXCHANGE PAGE

Use the actual business policy.

Include:

- Eligible products.
- Time window.
- Condition requirements.
- Exclusions.
- Damage/defect process.
- Who pays return shipping, if applicable.
- How customers start a return/exchange request.

Do not invent a return policy simply because another ecommerce website has one.

---

# 54. PRIVACY PAGE

Explain what information the website collects.

If V1 is a static catalog without a customer form, collection may be limited.

If analytics is added, disclose it appropriately.

Do not copy another company's privacy policy word-for-word.

For legal compliance, use appropriate professional/legal review when necessary.

---

# 55. NAVIGATION RULES

Never make customers guess where products are.

At least one of the following should always be immediately available:

```text
Shop
Collections
View products
```

WhatsApp can remain a secondary persistent action.

---

# 56. FOOTER

Suggested layout:

```text
PUTTAPAKA
Women's Handloom Textiles

Shop
Collections
Our Story
Contact

Shipping
Returns
Privacy

Instagram
WhatsApp

© Puttapaka Women's Handloom Textiles
```

Do not stuff the footer with 30 unrelated links.

---

# 57. DESIGN TOKENS

Start with a small token system.

Example direction:

```css
:root {
  --background: #f7f3ec;
  --foreground: #171717;
  --primary: #29334a;
  --accent: #a65343;
  --muted: #756f67;
  --border: #ded7cc;
  --surface: #fffdf8;
}
```

These are design starting points, not final brand colors.

The final palette should be derived from actual brand photography, packaging, textiles, and owner preference.

---

# 58. TYPOGRAPHY

Recommended pairing:

- Editorial serif for major headings.
- Neutral sans-serif for body/UI.

Candidate examples:

```text
Cormorant Garamond + Inter
```

or another refined pairing.

Do not load five font families.

Limit typography to a controlled scale.

---

# 59. SPACING SYSTEM

Use a consistent spacing scale.

Example:

```text
4
8
12
16
24
32
48
64
80
96
```

Avoid every component inventing arbitrary margins.

---

# 60. BORDER RADIUS

Use restraint.

Not every element needs a 32px radius.

Consider:

```text
Buttons: 9999px or moderate radius depending on brand
Cards: small/moderate radius or square editorial treatment
Images: consistent treatment
```

Pick a system and apply it consistently.

---

# 61. ANIMATION

Allowed:

- image fade-in.
- subtle hover scale.
- navigation transition.
- filter transition.
- drawer animation.

Avoid:

- parallax everywhere.
- bouncing text.
- spinning icons.
- scroll-triggered animation on every section.
- animation that blocks interaction.

Animation should make the site feel polished, not artificial.

---

# 62. RESPONSIVE BREAKPOINT STRATEGY

Think in content breakpoints rather than device marketing labels.

Baseline targets:

```text
~360–430px: small/mobile
~640–768px: tablet/small desktop
~1024px: desktop
~1280–1440px: large desktop
```

The design must work between these widths too.

Never rely on exact device dimensions.

---

# 63. ACCESSIBILITY REQUIREMENTS

At minimum:

- Semantic headings.
- Correct button/link semantics.
- Keyboard access.
- Visible focus states.
- Sufficient color contrast.
- Alt text on meaningful product images.
- Accessible labels for icon buttons.
- No color-only status indicators.
- No hover-only essential information.
- Logical tab order.

---

# 64. IMAGE ACCESSIBILITY

Bad:

```text
alt="image"
```

Better:

```text
alt="Maroon Puttapaka handloom cotton saree with woven border"
```

Do not repeat irrelevant marketing copy in alt text.

---

# 65. SEO FOUNDATION

Each indexable product should have:

- unique title.
- unique description.
- canonical URL.
- meaningful headings.
- product image.
- structured product information when appropriate.
- internal links.

Create:

```text
/sitemap.xml
/robots.txt
```

Use Next.js metadata APIs where appropriate.

---

# 66. PRODUCT SEO TEMPLATE

Example:

```text
Title:
Puttapaka Handloom Cotton Saree – Maroon | Puttapaka Women's Handloom Textiles

Description:
Shop the Puttapaka Handloom Cotton Saree in maroon. View product details, fabric information and order directly through WhatsApp.
```

Do not keyword-stuff titles.

---

# 67. LOCAL SEO

If the business operates locally, create and maintain a Google Business Profile where eligible.

Google provides Business Profiles to help eligible businesses manage how they appear on Google Search and Maps, including business information, photos, hours and related details.

Important: The exact business category, address, service area and business details must reflect reality.

The website should use consistent:

```text
Business name
Phone/WhatsApp
Website
Address/service area
Business hours
```

across public profiles.

---

# 68. STRUCTURED DATA

For products, evaluate Product/Offer structured data based on the actual product information.

Do not emit structured data for:

- invented reviews.
- fake ratings.
- fake availability.
- prices that don't match the UI.

Structured data should represent visible, accurate product data.

---

# 69. PERFORMANCE TARGETS

Target a fast site rather than blindly chasing arbitrary scores.

Desired principles:

```text
small JS payload
optimized images
fast font loading
minimal third-party scripts
server/static rendering where possible
```

Aim for strong Core Web Vitals on real mobile devices.

---

# 70. IMAGE OPTIMIZATION

Use modern formats when appropriate:

```text
AVIF
WebP
```

Use responsive sizes.

Do not ship a 6 MB original photo to a 390px phone.

Product image strategy:

```text
Original photo
       ↓
Crop / resize
       ↓
Compress
       ↓
Responsive variants
       ↓
CDN/static serving
```

---

# 71. THIRD-PARTY SCRIPT RULE

Every external script costs performance or privacy complexity.

Before adding any service, ask:

1. What business decision does this enable?
2. Is it necessary in V1?
3. Can the same result be achieved with native code?
4. What data does it collect?
5. Does it create a new failure point?

---

# 72. ANALYTICS

The most important V1 event is:

```text
click_whatsapp
```

Other useful events:

```text
view_product
search_product
filter_category
view_collection
click_instagram
```

The funnel becomes:

```text
Visitors
  ↓
Product views
  ↓
WhatsApp clicks
  ↓
Confirmed orders (tracked manually at first)
```

---

# 73. EVENT NAMING

Use consistent names:

```text
view_product
click_whatsapp
search_product
select_category
click_instagram
```

Do not create different names for the same action on different pages.

---

# 74. BUSINESS ANALYTICS WITHOUT A DATABASE

You can still learn a lot.

Track manually once per week:

```text
Total inquiries
Orders
Top products
Sold-out products
Traffic source
```

A simple spreadsheet can be used by the owner.

Do not create a custom analytics dashboard before the business has meaningful data.

---

# 75. PRODUCT DATA MANAGEMENT — V1

Use a TypeScript data file:

```text
/data/products.ts
```

Example:

```ts
export const products: Product[] = [
  {
    id: "PWT-001",
    slug: "puttapaka-handloom-cotton-saree-maroon",
    name: "Puttapaka Handloom Cotton Saree",
    description: "Approved product description here.",
    priceInr: 1850,
    categorySlug: "handloom-sarees",
    fabric: "Cotton",
    color: "Maroon",
    blouseIncluded: true,
    availability: "available",
    featured: true,
    images: [
      {
        src: "/products/pwt-001-1.webp",
        alt: "Maroon Puttapaka handloom cotton saree"
      }
    ]
  }
];
```

---

# 76. WHEN TO MOVE TO SUPABASE

Introduce a database when the manual process begins causing actual pain.

Signs:

- 100s of products.
- Frequent updates by non-developers.
- Multiple inventory changes per day.
- Need for customer records.
- Need for order history.
- Multiple staff members.

Then architecture can become:

```text
Next.js
   ↓
Supabase
   ├── products
   ├── categories
   ├── images
   ├── orders
   └── customers
```

Do not add this because it sounds professional.

Add it because the business needs it.

---

# 77. FUTURE DATABASE SCHEMA

Possible future `products` table:

```text
id
sku
slug
name
description
price_inr
category_id
fabric
color
length
blouse_included
availability
featured
new_arrival
created_at
updated_at
```

`product_images`:

```text
id
product_id
url
alt_text
sort_order
```

`orders`:

```text
id
customer_name
phone
product_id
quantity
status
payment_status
shipping_status
created_at
```

This is a future design, not a V1 requirement.

---

# 78. SECURITY RULES

Never expose:

```text
secret API keys
service-role database keys
private credentials
```

Use environment variables where secrets are actually necessary.

For V1 static catalog, avoid secrets entirely where possible.

Do not store unnecessary customer personal data in Git.

---

# 79. ENVIRONMENT VARIABLES

Example `.env.example`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://example.pages.dev
```

For public configuration, `NEXT_PUBLIC_` is acceptable because the browser sees it.

Do not put private secrets under `NEXT_PUBLIC_`.

---

# 80. BUSINESS DATA VS CODE

Separate these concepts.

### Business data

```text
product name
price
fabric
color
availability
business phone
policies
```

### Application code

```text
routing
components
search
filtering
WhatsApp URL builder
SEO utilities
```

The goal is to make business changes possible without changing application logic.

---

# 81. CONTENT WRITING RULES

Use:

- Short paragraphs.
- Specific facts.
- Human language.
- Product-specific details.
- Honest claims.

Avoid:

```text
unparalleled
luxurious
exquisite craftsmanship
redefining elegance
celebration of timeless heritage
```

unless the brand's own voice genuinely uses this language.

AI-generated content often becomes obvious because it uses generic luxury words without concrete information.

---

# 82. HOW TO MAKE THE WEBSITE FEEL HUMAN

## Use real people

Real photographs of the women involved in the business, where they consent to publication.

## Use real environment

Shop, loom, packaging, workspace, product details.

## Use real details

Concrete facts are more credible than abstract adjectives.

## Use specific writing

Instead of:

> A timeless celebration of heritage.

Prefer something factually specific such as:

> Handloom cotton sarees selected through our local textile network.

Only use the stronger statement if it is accurate.

---

# 83. NO TEMPLATE-LOOK CHECKLIST

Before release, ask:

- Could someone identify this business from the homepage without seeing the logo?
- Are there authentic product photos?
- Does the layout have a unique visual rhythm?
- Is the typography deliberate?
- Are there fewer but stronger sections?
- Does the website use brand-specific copy?
- Are the product images visually consistent?
- Does it avoid generic AI design patterns?
- Does the website still look good with animations disabled?

If the answer to the last question is no, the design is too dependent on effects.

---

# 84. COMPONENT ARCHITECTURE

Recommended components:

```text
SiteHeader
MobileNavigation
SiteFooter
HeroSection
CategoryCard
CategoryGrid
ProductCard
ProductGrid
ProductGallery
ProductDetails
ProductAvailability
WhatsAppButton
WhatsAppFloatingButton
SearchBar
FilterPanel
Breadcrumbs
StorySection
TrustSection
PolicySection
```

Do not create a component for every `<div>`.

Create components around reusable behavior or meaningful UI concepts.

---

# 85. SERVER VS CLIENT COMPONENTS

Prefer server components by default.

Use client components only when browser-side state or interaction is genuinely required.

Likely client components:

```text
SearchBar with interactive state
Filter controls
Mobile menu
Image gallery interaction
```

Likely server components:

```text
Homepage sections
Product details
Product metadata
Footer
Story sections
```

---

# 86. DATA FLOW

V1:

```text
products.ts
   ↓
server component
   ↓
ProductCard
   ↓
Product page
   ↓
WhatsApp utility
```

Avoid:

```text
product page
 ↓
fetch API
 ↓
proxy
 ↓
server
 ↓
CMS
 ↓
database
```

when the product data is literally stored in your repository.

---

# 87. ROUTING

Recommended:

```text
/
/shop
/collections/[slug]
/product/[slug]
/about
/story
/contact
/shipping
/returns
/privacy
```

Product URLs should be stable and human-readable.

---

# 88. 404 PAGE

Create a useful 404 page.

Example:

```text
We couldn't find that page.

[ Browse Sarees ]
[ Return Home ]
```

Do not leave the framework default 404 page in production.

---

# 89. ERROR HANDLING

Even a static site should handle:

- missing product slug.
- invalid category.
- sold-out product.
- unavailable image.
- malformed configuration.

Don't show raw exceptions to customers.

---

# 90. TESTING STRATEGY

Use multiple layers.

### Static checks

```text
TypeScript
ESLint
```

### Build

```bash
npm run build
```

### Manual UI testing

- mobile.
- desktop.
- navigation.
- WhatsApp links.
- product pages.
- filters.
- search.

### Accessibility

- keyboard.
- focus.
- contrast.
- screen-reader semantics where applicable.

---

# 91. WHATSAPP TEST MATRIX

Test:

| Test | Expected |
|---|---|
| Mobile tap | WhatsApp opens |
| Desktop click | WhatsApp Web/app opens |
| Product message | Correct product |
| Product ID | Correct ID |
| Price | Correct price |
| URL | Correct live product URL |
| Sold-out item | Ordering behavior matches business rule |
| Special characters | Message remains readable |

WhatsApp's documented click-to-chat behavior supports both phones and WhatsApp Web. citeturn243263search1

---

# 92. SEO TEST MATRIX

Check:

```text
Homepage title
Homepage description
Product title
Product description
Canonical
Open Graph image
Twitter/social metadata
Sitemap
Robots
Heading hierarchy
Image alt text
Product URLs
```

---

# 93. MOBILE QA

Test at least:

```text
360px
375px
390px
414px
430px
```

Check:

- no horizontal scroll.
- buttons fit.
- images don't overflow.
- menus close properly.
- filters work.
- WhatsApp CTA stays visible where intended.
- text is readable.

---

# 94. DESKTOP QA

Test approximately:

```text
1024px
1280px
1440px
1920px
```

Check:

- maximum content width.
- whitespace.
- product grid.
- header alignment.
- hero proportions.
- footer.

Do not simply stretch mobile components to fill desktop.

---

# 95. BROWSER QA

At minimum:

```text
Chrome/Chromium
Firefox
Safari where available
Mobile Chrome
Mobile Safari where available
```

The site should remain functional even when minor visual differences occur.

---

# 96. ACCESSIBILITY QA

Use keyboard only:

```text
Tab
Shift+Tab
Enter
Space
Escape
```

Check:

- Can every interactive element be reached?
- Is focus visible?
- Can menus be closed?
- Are buttons understandable?
- Are icon-only buttons labeled?

---

# 97. PERFORMANCE QA

Measure on a real or throttled mobile environment.

Look for:

- oversized images.
- unoptimized fonts.
- excessive JavaScript.
- third-party script cost.
- layout shifts.
- long main-thread tasks.

Do not optimize a theoretical problem while ignoring a 5 MB hero image.

---

# 98. GIT WORKFLOW

Use small commits.

Examples:

```text
feat: add product catalog
feat: add whatsapp ordering
feat: add collection pages
feat: add product seo metadata
style: refine mobile navigation
perf: optimize product images
fix: correct whatsapp message encoding
```

Avoid:

```text
final-final-website-v4
```

---

# 99. BRANCH STRATEGY FOR SOLO DEVELOPMENT

Simple option:

```text
main
```

with short-lived feature branches when useful:

```text
feature/homepage
feature/product-pages
feature/whatsapp-ordering
fix/mobile-header
```

Merge only after the local build works.

---

# 100. RELEASE CHECKPOINTS

Do not deploy every random agent modification directly to production.

Use checkpoints:

```text
Checkpoint 1 — project boots
Checkpoint 2 — layout complete
Checkpoint 3 — products work
Checkpoint 4 — WhatsApp works
Checkpoint 5 — SEO works
Checkpoint 6 — QA complete
Checkpoint 7 — production deploy
```

---

# 101. CLOUDFLARE DEPLOYMENT

Recommended flow:

```text
Local project
    ↓
GitHub
    ↓
Cloudflare Pages
    ↓
Build
    ↓
Deployment
```

Before production:

```bash
git status
git pull
npm install
npm run lint
npm run build
```

Then push:

```bash
git add .
git commit -m "release: v1 launch candidate"
git push
```

Connect the GitHub repository through the current Cloudflare Pages setup interface.

Because platform UI and build settings can change, use current provider documentation at the time of deployment.

---

# 102. DEPLOYMENT BUILD SETTINGS

Typical Next.js settings should be based on the current supported Cloudflare deployment method for your selected Next.js setup.

Do not blindly copy a blog post from 2023.

Validate:

- current Next.js support.
- current Cloudflare adapter/setup if one is required.
- build command.
- output/deployment strategy.
- environment variables.

For a primarily static catalog, minimize server-only requirements.

---

# 103. DOMAIN STRATEGY

### Launch

Use the free deployment URL.

### Later

Buy a custom domain such as a suitable `.in` or `.com` domain if available and appropriate.

Benefits:

- easier to remember.
- stronger trust.
- better branding.
- easier social promotion.

Do not delay V1 solely because a domain has not been purchased.

---

# 104. GOOGLE BUSINESS PROFILE

Create the profile with the real business information.

Use:

- correct business name.
- correct category.
- accurate address/service area.
- correct hours.
- real photos.
- real website.
- real phone/WhatsApp contact where supported.

Keep information consistent with the website.

Do not create multiple fake profiles to manipulate search results.

---

# 105. INSTAGRAM STRATEGY

Every product post can route to the website.

Example flow:

```text
Instagram post
    ↓
"View the saree"
    ↓
Product URL
    ↓
Product details
    ↓
WhatsApp
```

This is stronger than putting only a generic WhatsApp number everywhere because the product context remains attached to the customer journey.

---

# 106. PRODUCT LINK STRATEGY

Every social post should ideally point to the exact product page.

Not:

```text
Homepage
```

when a specific product is being promoted.

Use:

```text
/product/puttapaka-handloom-cotton-saree-maroon
```

This removes steps.

---

# 107. ORDER WORKFLOW FOR THE SELLER

Recommended manual process:

```text
WhatsApp inquiry
      ↓
Check product availability
      ↓
Confirm price
      ↓
Collect customer details
      ↓
Confirm payment method
      ↓
Confirm payment
      ↓
Prepare package
      ↓
Ship
      ↓
Send tracking/update
```

Use a simple order-status vocabulary:

```text
Inquiry
Confirmed
Payment received
Packed
Shipped
Delivered
Cancelled
Returned
```

This can be managed in a spreadsheet initially.

---

# 108. PRODUCT INVENTORY WORKFLOW

A simple spreadsheet can contain:

```text
Product ID
Product name
Price
Availability
Date added
Date sold
Customer reference (optional)
```

The website can remain static while the seller uses the spreadsheet as the operational source.

---

# 109. WHEN TO BUILD AN ADMIN DASHBOARD

Build one only when the business owner says things like:

> "I have too many products to update manually."

or:

> "I need my staff to update stock without touching code."

That is the right trigger.

Not:

> "A professional website should have an admin dashboard."

---

# 110. FUTURE ADMIN DASHBOARD

V2 could include:

```text
Dashboard
Products
Categories
Inventory
Orders
Settings
```

Product edit:

```text
Name
Price
Images
Description
Category
Fabric
Color
Availability
Featured
```

Keep the admin panel private and authenticated.

---

# 111. FUTURE PAYMENT SYSTEM

Only after validated demand:

```text
Product
   ↓
Cart
   ↓
Checkout
   ↓
Payment gateway
   ↓
Order record
```

For India, evaluate appropriate providers such as Razorpay or another merchant solution based on current pricing, business eligibility, and compliance requirements.

Do not hard-code a provider before the business actually needs it.

---

# 112. FUTURE CART DESIGN

When the cart eventually arrives:

```text
Add to Bag
     ↓
Bag
     ↓
Customer details
     ↓
Payment
```

WhatsApp can still remain as a fallback support channel.

---

# 113. FUTURE ORDER DATABASE

When order records become important:

```text
Customer
Product
Order
Payment
Shipping
```

Suggested order states:

```text
pending
confirmed
paid
packed
shipped
delivered
cancelled
returned
refunded
```

Do not mix payment state with shipping state in a single ambiguous `status` field once the platform becomes more complex.

---

# 114. BRAND PHOTOGRAPHY REQUIREMENTS

Before development is considered complete, collect:

### Business/brand images

- storefront/workspace if appropriate.
- women involved in the business.
- packaging.
- textile close-up.
- handloom/workshop imagery where actually available.

### Product images

At least 3 useful images per important product.

Photography is one of the highest-impact investments for the site.

---

# 115. CONTENT FILE ORGANIZATION

Keep real content easy to replace.

Example:

```text
/content/
  brand.md
  story.md
  policies.md
```

or a typed configuration/data structure.

The point is to prevent copy from becoming scattered across 40 components.

---

# 116. SITE CONFIGURATION

Centralize:

```ts
export const siteConfig = {
  name: "Puttapaka Women's Handloom Textiles",
  shortName: "Puttapaka",
  description: "Approved business description.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  instagramUrl: "",
  email: "",
  location: "",
};
```

Do not hardcode the business phone in ten components.

---

# 117. CONTENT APPROVAL WORKFLOW

Before publication:

```text
Developer drafts structure
        ↓
Business owner checks product facts
        ↓
Business owner approves copy
        ↓
Developer publishes
```

This is especially important for:

- prices.
- fabric claims.
- product availability.
- shipping promises.
- returns.
- business history.

---

# 118. FREE INFRASTRUCTURE LIMITS

Zero-cost does not mean infinite.

Cloudflare Pages currently publishes Free-plan limits including build concurrency/count, maximum site file count, asset file size limits, and Workers/Functions quotas for dynamic requests. Static asset requests are documented as free and unlimited. citeturn243263search2turn243263search6

For V1, a small static catalog should fit comfortably if image assets are managed responsibly.

Monitor actual usage instead of worrying about theoretical enterprise scale.

---

# 119. DO NOT HOST HUGE RAW IMAGES IN GIT

Large images are one of the easiest ways to make a small free website messy.

Before adding images:

```text
Original camera photo
     ↓
Resize for web
     ↓
Compress
     ↓
WebP/AVIF
     ↓
public/products/
```

Keep originals outside the deployment repository if they are large archival assets.

---

# 120. BACKUP STRATEGY

Keep:

```text
GitHub repository
+
local working copy
+
original product photographs in a separate backup location
```

Do not assume GitHub is a photography archive.

---

# 121. AI CODING SAFETY CHECKLIST

Every time an AI agent changes the code, check:

```text
[ ] Does it satisfy the task?
[ ] Did it modify unrelated files?
[ ] Did it add unnecessary dependencies?
[ ] Did it invent content?
[ ] Did it introduce accessibility issues?
[ ] Did it break mobile layout?
[ ] Did it alter product data?
[ ] Did it change SEO metadata?
[ ] Did it expose secrets?
[ ] Did it run successfully?
```

Never merge AI-generated code merely because it looks impressive.

---

# 122. PROMPT FOR ANTI-TEMPLATE UI REVIEW

Use with Kiro or Antigravity:

```text
Review the current Puttapaka Women's Handloom Textiles website as a senior product designer.

The goal is to identify anything that makes the site look AI-generated, template-based, copied from a generic ecommerce starter, or visually generic.

Check:
- spacing rhythm
- typography hierarchy
- image composition
- section repetition
- card overuse
- border-radius overuse
- gradients
- animation
- button styling
- copy specificity
- layout originality
- mobile composition

Do not rewrite the project automatically.
First provide findings ranked by business impact.
For each finding, suggest one specific improvement.
```

---

# 123. PROMPT FOR SENIOR CODE REVIEW

```text
Act as a senior frontend engineer reviewing the Puttapaka Women's Handloom Textiles repository.

Do not make changes yet.

Review:
- architecture
- TypeScript quality
- component boundaries
- data flow
- accessibility
- SEO
- performance
- image handling
- WhatsApp integration
- responsive behavior
- maintainability
- accidental overengineering
- security

Specifically identify:
1. Bugs
2. High-risk issues
3. Maintainability issues
4. Performance issues
5. UX issues
6. Unnecessary complexity

Return findings with severity and file paths.
```

---

# 124. PROMPT FOR WHATSAPP TESTING

```text
Review the entire WhatsApp commerce flow.

Verify that:
- every public product has a valid product-specific CTA
- product name is correct
- product ID is correct
- price is correct
- product URL is correct
- messages are URL encoded
- the configured phone number is normalized correctly
- sold-out products follow the business availability rules
- desktop WhatsApp Web behavior is supported
- mobile behavior is supported

Do not change unrelated code.
```

---

# 125. PROMPT FOR MOBILE QA

```text
Act as a senior mobile web QA engineer.

Audit the Puttapaka website at widths around:
360px, 375px, 390px, 414px, and 430px.

Check:
- horizontal overflow
- text clipping
- image cropping
- menu behavior
- sticky CTA behavior
- button size
- filter usability
- search usability
- product gallery
- footer layout
- accessibility

Report issues before fixing them.
```

---

# 126. PROMPT FOR PERFORMANCE REVIEW

```text
Act as a web performance engineer.

Review the website for:
- image payload size
- unnecessary client-side JavaScript
- render-blocking resources
- font loading
- third-party scripts
- layout shifts
- unnecessary hydration
- repeated server/client work
- oversized components

Prioritize improvements by actual user impact.
Do not optimize for vanity metrics only.
```

---

# 127. PROMPT FOR SEO REVIEW

```text
Act as a technical SEO engineer.

Audit:
- metadata
- canonical URLs
- sitemap
- robots.txt
- Open Graph
- product URLs
- heading hierarchy
- internal linking
- image alt text
- structured data
- crawlability
- duplicate metadata

Do not invent business claims or reviews.
```

---

# 128. PROMPT FOR CONTENT AUTHENTICITY REVIEW

```text
Review all public-facing copy for hallucinated or unsupported claims.

Flag:
- invented business history
- invented years of operation
- invented customer counts
- invented reviews
- invented certifications
- unsupported handloom claims
- unsupported artisan claims
- fake scarcity
- exaggerated shipping promises

Do not rewrite facts that have not been verified.
```

---

# 129. PROMPT FOR RELEASE GATE

```text
Do a production release review.

The release is allowed only if:
- npm run lint passes
- npm run build passes
- no obvious console errors exist
- homepage is responsive
- shop works
- product pages work
- WhatsApp links work
- sold-out logic works
- metadata exists
- sitemap exists
- robots exists
- no secrets are committed
- important images are optimized
- real business content has been approved

If any requirement fails, report the failure and stop.
```

---

# 130. KIRO HOOK IDEAS

Kiro currently supports agent hooks that can automate repetitive workflows. citeturn243263search11

Useful future hooks:

### Hook A — after product change

Run typecheck/lint or remind the agent to update related content.

### Hook B — after component change

Run appropriate checks.

### Hook C — after spec task completion

Run a targeted test suite.

Do not create hooks just because hooks exist.

Automation should reduce repetitive work.

---

# 131. AI MODEL DISCIPLINE

When an AI agent is uncertain, it must:

1. Inspect existing code.
2. Check project rules.
3. Reuse existing patterns.
4. Make the smallest reasonable change.
5. Explain assumptions.

It must not invent business information.

---

# 132. DEPENDENCY POLICY

Before installing a package, ask:

```text
Can native Next.js/React/TypeScript solve this?
Can a small local utility solve this?
Is this package maintained?
Do I actually need it?
```

A small project with 25 dependencies is easier to maintain than a project with 120.

---

# 133. CSS POLICY

Prefer:

- Tailwind utilities for most layout.
- component-level styles only when necessary.
- CSS variables for theme tokens.

Avoid:

- random inline styles.
- duplicate CSS classes with different meanings.
- giant global stylesheet containing every component rule.

---

# 134. ICON POLICY

Use a consistent icon system if icons are needed.

Do not mix:

```text
Lucide
Heroicons
random SVGs
emoji
font icons
```

unless there is a specific reason.

For accessibility, icon-only controls need labels.

---

# 135. BUTTON HIERARCHY

Primary:

```text
Order on WhatsApp
Explore Collection
```

Secondary:

```text
View Product
Learn More
```

Tertiary:

```text
Back
View all
```

Do not give every button equal visual weight.

---

# 136. PRODUCT GRID GUIDELINE

Desktop:

```text
3–4 columns depending on image aspect ratio and page width
```

Tablet:

```text
2–3 columns
```

Mobile:

```text
2 columns for browsing efficiency
```

or one column when product photography/details demand it.

The final decision should come from actual product image proportions.

---

# 137. PRODUCT CARD INFORMATION PRIORITY

Priority:

```text
Image
↓
Name
↓
Price
↓
Important attribute
↓
Availability
```

Do not overload the card with:

```text
material
SKU
full description
shipping
five badges
multiple buttons
```

Save details for the product page.

---

# 138. FILTER DESIGN

Start with only filters that can materially help customers:

- Category.
- Fabric.
- Color.
- Price range.

Remove filters that have too few values to be useful.

A filter with two meaningless choices does not improve UX.

---

# 139. SEARCH EMPTY STATE

Use a helpful message:

```text
No products found.

Try another search or browse all sarees.
```

Provide a recovery action.

---

# 140. SOLD-OUT UX

Sold out should not look like an error.

Show the product if it is useful for brand discovery, but make status clear.

Example:

```text
Sold Out

Ask us about similar sarees
```

This can route to a general WhatsApp inquiry when appropriate.

---

# 141. PRICE DISPLAY

Use Indian formatting.

Examples:

```text
₹1,850
₹2,250
₹3,990
```

Never display inconsistent representations such as:

```text
1850 INR
Rs 1850
1,850 rupees
₹ 1850.00
```

unless a specific design decision requires it.

---

# 142. NO FAKE DISCOUNTS

Do not show:

```text
₹3,999 → ₹1,499
```

unless the original/discount pricing is real and legally appropriate for the business.

For a small business, honest pricing builds more trust than artificial urgency.

---

# 143. NO FAKE COUNTDOWN TIMERS

Never add:

```text
Offer ends in 02:14:31
```

unless there is a real, business-controlled offer ending at that time.

---

# 144. NO FAKE STOCK PRESSURE

Never auto-generate:

```text
Only 2 left!
```

unless inventory data genuinely supports it.

---

# 145. CUSTOMER TRUST PRINCIPLE

The website should behave like a trustworthy shopkeeper:

```text
show the actual product
state the actual price
state the actual availability
explain how ordering works
provide a real human contact route
```

That is the experience to optimize.

---

# 146. HOME PAGE CONTENT ORDER

Recommended final order:

```text
1. Header
2. Hero
3. Categories
4. Featured products
5. Brand story
6. Craft/handloom story
7. Trust signals
8. Customer stories, if real
9. Social proof / Instagram
10. WhatsApp CTA
11. Footer
```

Reorder based on actual customer behavior after launch.

---

# 147. PRODUCT PAGE CONTENT ORDER

```text
1. Images
2. Product name
3. Price
4. Availability
5. Product ID
6. WhatsApp CTA
7. Short description
8. Product specifications
9. Care instructions
10. Shipping/returns
11. Related products
```

Conversion should not be buried below 2000 words.

---

# 148. RELATED PRODUCTS

V1 can use simple deterministic logic:

```text
same category
or
same fabric
```

Do not build AI recommendations.

---

# 149. HOME PAGE RELATED PRODUCT LOGIC

Featured selection can simply come from:

```ts
featured: true
```

New arrivals:

```ts
newArrival: true
```

This is sufficient for V1.

---

# 150. PRODUCT SORT LOGIC

Default:

```text
Featured
```

Then:

```text
Newest
Price: low to high
Price: high to low
```

Do not overcomplicate.

---

# 151. STATIC SITE BENEFITS

V1 static/catalog architecture provides:

- fewer failure points.
- fast CDN delivery.
- simpler security.
- simpler deployment.
- lower maintenance.
- easier debugging.
- cheaper infrastructure.

A static website is not "less professional."

For a catalog business, it can be the correct engineering choice.

---

# 152. WHEN NOT TO USE STATIC DATA

Do not continue with a TypeScript product file if:

- non-technical staff need daily product edits.
- stock changes constantly.
- product count becomes large.
- multiple warehouses exist.
- order state must be tracked automatically.

Then migrate the data layer.

---

# 153. MIGRATION PRINCIPLE

Keep V1 data structures clean enough to migrate.

For example, stable:

```text
Product ID
Slug
Price
Category
Availability
Image list
```

These can later map naturally to database columns.

---

# 154. BUILD ORDER — THE ACTUAL STEP-BY-STEP SEQUENCE

## Step 1
Collect business information.

## Step 2
Collect real photographs.

## Step 3
Create GitHub repository.

## Step 4
Install Node/Git/VS Code/Kiro/Antigravity.

## Step 5
Create Next.js application.

## Step 6
Commit clean baseline.

## Step 7
Create Kiro steering files.

## Step 8
Create business requirements spec.

## Step 9
Create design specification.

## Step 10
Create product data model.

## Step 11
Create global layout/header/footer.

## Step 12
Create homepage.

## Step 13
Create shop page.

## Step 14
Create category pages.

## Step 15
Create product pages.

## Step 16
Implement WhatsApp utility.

## Step 17
Connect product CTA.

## Step 18
Implement search/filtering.

## Step 19
Add SEO.

## Step 20
Add policies/contact/story.

## Step 21
Optimize images.

## Step 22
Run lint/build.

## Step 23
Run mobile QA.

## Step 24
Run desktop/browser QA.

## Step 25
Run accessibility review.

## Step 26
Run anti-template visual review.

## Step 27
Push to GitHub.

## Step 28
Deploy to Cloudflare.

## Step 29
Test the live website and every WhatsApp CTA.

## Step 30
Launch through Instagram/Google/WhatsApp.

---

# 155. DEVELOPMENT PHASES

## Phase A — Foundation

Deliverables:

```text
Repo
Next.js
Tailwind
Kiro steering
Git baseline
```

## Phase B — Design system

Deliverables:

```text
fonts
colors
spacing
typography
buttons
navigation
```

## Phase C — Commerce catalog

Deliverables:

```text
products
shop
categories
product page
```

## Phase D — Conversion

Deliverables:

```text
WhatsApp
CTA
availability states
```

## Phase E — Trust/content

Deliverables:

```text
story
policies
contact
reviews
```

## Phase F — Discoverability

Deliverables:

```text
SEO
sitemap
robots
Google Business Profile
Instagram links
```

## Phase G — Production

Deliverables:

```text
QA
performance
deployment
launch
```

---

# 156. DEFINITION OF DONE — HOMEPAGE

The homepage is done only when:

```text
[ ] Real hero image is used
[ ] Brand copy is approved
[ ] Main CTA works
[ ] Category links work
[ ] Featured products work
[ ] Story link works
[ ] WhatsApp link works
[ ] Mobile layout works
[ ] Desktop layout works
[ ] Keyboard navigation works
[ ] No horizontal overflow
[ ] Images are optimized
[ ] Metadata exists
```

---

# 157. DEFINITION OF DONE — PRODUCT PAGE

```text
[ ] Correct product data
[ ] Correct price
[ ] Correct product ID
[ ] Correct images
[ ] Useful alt text
[ ] Availability state
[ ] WhatsApp CTA
[ ] Correct WhatsApp message
[ ] SEO metadata
[ ] Related products, if implemented
[ ] Mobile QA
[ ] Desktop QA
```

---

# 158. DEFINITION OF DONE — WHATSAPP

```text
[ ] Correct phone number
[ ] International format
[ ] URL encoded
[ ] Correct product name
[ ] Correct product ID
[ ] Correct price
[ ] Correct product URL
[ ] Mobile tested
[ ] WhatsApp Web tested
[ ] Sold-out behavior tested
```

WhatsApp's current official documentation should be used as the source of truth for click-to-chat URL requirements. citeturn243263search1

---

# 159. DEFINITION OF DONE — SEO

```text
[ ] Unique title
[ ] Unique description
[ ] Canonical
[ ] Sitemap
[ ] Robots
[ ] Open Graph
[ ] Product structured data where appropriate
[ ] Internal links
[ ] Search-friendly URLs
```

---

# 160. DEFINITION OF DONE — PRODUCTION

```text
[ ] Build passes
[ ] Lint passes
[ ] No secrets in repository
[ ] Production deployment works
[ ] Home works
[ ] Shop works
[ ] Product pages work
[ ] WhatsApp works
[ ] Mobile works
[ ] Desktop works
[ ] 404 works
[ ] Policies published
[ ] Contact information correct
[ ] Social links correct
```

---

# 161. BUSINESS LAUNCH CHECKLIST

Before public launch:

```text
[ ] Business name confirmed
[ ] WhatsApp number confirmed
[ ] Product catalog confirmed
[ ] Prices confirmed
[ ] Product availability confirmed
[ ] Images approved
[ ] Story approved
[ ] Shipping policy approved
[ ] Returns policy approved
[ ] Contact details approved
[ ] Instagram link checked
[ ] Google Business Profile checked
```

---

# 162. POST-LAUNCH WEEK 1

Do not immediately redesign the website.

Observe:

```text
What products are viewed?
What products receive inquiries?
Where do visitors come from?
Which pages are ignored?
What questions do customers repeatedly ask on WhatsApp?
```

Repeated WhatsApp questions are evidence of missing website content.

For example, if customers repeatedly ask:

> Is blouse piece included?

Add it clearly to product pages.

If customers repeatedly ask:

> How long does shipping take?

Improve the shipping page and product-page shipping summary.

---

# 163. POST-LAUNCH MONTH 1

Review:

```text
Traffic
Product views
WhatsApp clicks
Inquiries
Orders
Best-selling products
Most asked questions
Sold-out demand
```

Then decide the next technical feature based on data.

---

# 164. PRODUCT ROADMAP BASED ON BUSINESS SIGNALS

If customers ask for:

### "Can I buy multiple products together?"

Consider cart.

### "Can I pay online?"

Consider payment gateway.

### "Can I track my previous order?"

Consider customer/order database.

### "Can you show more products?"

Improve catalog/content first.

### "I need to update products myself."

Build admin/CMS.

This is how engineering stays aligned with business value.

---

# 165. COST ESCALATION POLICY

Keep costs at zero until a paid feature is clearly justified.

### First paid investment

Usually a custom domain.

### Next likely investment

Professional business email or operational tooling.

### Next

Payment/shipping/automation costs tied to transaction volume.

### Much later

Advanced infrastructure.

Do not spend ₹10,000 on infrastructure for a business that has not yet validated the product catalog.

---

# 166. PROJECT DOCUMENTATION

README should include:

```text
Project overview
Local setup
Environment variables
Development commands
Product data editing
Deployment
WhatsApp configuration
Business content rules
Testing
```

A future developer should be able to run the site without contacting you.

---

# 167. README LOCAL SETUP

Recommended:

```md
# Puttapaka Women's Handloom Textiles

## Requirements
- Node.js LTS
- Git

## Setup
npm install
npm run dev

## Environment
Copy .env.example to .env.local

## Build
npm run build

## Lint
npm run lint

## Product data
Edit data/products.ts

## WhatsApp
Set NEXT_PUBLIC_WHATSAPP_NUMBER
```

---

# 168. PRODUCT ADDITION PROCEDURE

A new product should follow:

```text
1. Assign Product ID
2. Choose category
3. Create slug
4. Photograph product
5. Optimize images
6. Write approved description
7. Add price
8. Add availability
9. Add product data
10. Run dev server
11. Check product page
12. Check WhatsApp message
13. Commit
14. Push
15. Deploy
```

---

# 169. PRODUCT REMOVAL PROCEDURE

Do not delete historical data casually.

If sold out:

```text
availability = "sold_out"
```

If permanently discontinued and should not be indexed:

Remove from public catalog according to routing/SEO strategy.

For long-term SEO, consider redirects for established URLs when appropriate.

---

# 170. PRODUCT IMAGE NAMING

Use predictable names:

```text
pwt-001-1.webp
pwt-001-2.webp
pwt-001-3.webp
```

Not:

```text
IMG_938271.jpg
WhatsApp Image 2026-08-17 at 7.12.32 PM.jpeg
```

Rename before adding to the repository.

---

# 171. ALT TEXT NAMING

Use useful descriptions, not filenames.

Good:

```text
Maroon handloom cotton saree with woven contrast border
```

Bad:

```text
pwt-001-1
```

---

# 172. DESIGN REVIEW WITH REAL CONTENT

Never approve the UI using placeholder:

```text
Lorem ipsum
Product Name
₹999
```

Real content changes:

- line length.
- card height.
- heading balance.
- image proportions.
- whitespace.

The final design must be tested with actual content.

---

# 173. DESIGN REVIEW WITH REAL IMAGES

Real product images can change the whole composition.

The correct workflow is:

```text
placeholder layout
      ↓
real photos
      ↓
adjust crop/aspect ratio
      ↓
adjust typography
      ↓
adjust spacing
      ↓
final layout
```

Do not lock the visual system before seeing the real product photography.

---

# 174. NO NEED FOR FIGMA

For this project, Figma is optional.

Because the developer is already using Antigravity + Kiro + VS Code, a practical workflow is:

```text
Kiro
requirements/specification
      ↓
Antigravity
implementation
      ↓
Browser
visual review
      ↓
VS Code
refinement
```

A design tool can still be useful later, but it is not a prerequisite for building this product.

---

# 175. HOW TO DESIGN WITHOUT FIGMA

Use a written design specification.

Record:

```text
Colors
Typography
Spacing
Container width
Grid rules
Button variants
Image ratios
Breakpoints
Navigation behavior
Animation rules
```

Then implement directly and iterate in the browser.

This can be highly effective for a solo developer.

---

# 176. AI VS HUMAN RESPONSIBILITIES

## Human decides

- business model.
- branding.
- product truth.
- prices.
- policies.
- target customer.
- design direction.
- deployment account ownership.

## AI assists

- coding.
- refactoring.
- test generation.
- debugging.
- architecture drafts.
- SEO templates.
- repetitive transformations.

Do not outsource business truth to AI.

---

# 177. SENIOR DEVELOPER RULE

When choosing between:

```text
A simple system that works
```

and:

```text
A sophisticated system that looks impressive
```

choose the simple system when it satisfies the business requirements.

For this project:

```text
Static product data + WhatsApp
```

is an excellent V1 architecture.

---

# 178. ARCHITECTURE DIAGRAM — V1

```text
                         CUSTOMER
                            │
                            ▼
                    ┌───────────────┐
                    │   Next.js     │
                    │   Website     │
                    └───────┬───────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
      Homepage           Catalog          Product Page
                                              │
                                              ▼
                                       WhatsApp CTA
                                              │
                                              ▼
                                        WhatsApp Chat
                                              │
                                              ▼
                                           SELLER
```

Static data:

```text
/data/products.ts
```

Deployment:

```text
GitHub → Cloudflare Pages
```

---

# 179. ARCHITECTURE DIAGRAM — FUTURE

```text
Customer
   ↓
Next.js
   ↓
Supabase
 ┌─┴─────────┬────────────┐
Products   Orders      Customers
   │          │             │
   └──────────┼─────────────┘
              ↓
          Admin Dashboard
              ↓
Payment / Shipping / CRM
```

This future architecture should not contaminate V1 with unnecessary infrastructure.

---

# 180. FINAL TECHNOLOGY DECISION

## V1

```text
Next.js
TypeScript
Tailwind CSS
GitHub
Cloudflare Pages
WhatsApp
Static data
```

## Development

```text
Kiro
Antigravity
VS Code
```

## Future

```text
Supabase
Payment gateway
Shipping integration
Admin
```

---

# 181. WHY NOT BUILD THE WHOLE THING IN A WEBSITE GENERATOR?

A generator can produce a first visual draft quickly.

But the objective is a custom production website with:

- real data model.
- stable URLs.
- deliberate architecture.
- maintainable source.
- transparent business logic.
- correct WhatsApp integration.
- controlled SEO.
- long-term ownership.

Using AI is fine.

Allowing AI to dictate architecture by accident is not.

---

# 182. AI TOOL RESPONSIBILITY MATRIX

| Tool | Primary job |
|---|---|
| Kiro | Requirements, specs, architecture, structured tasks |
| Antigravity | Fast implementation and iteration |
| VS Code | Code inspection, debugging, source control |
| GitHub | Version control and collaboration |
| Browser DevTools | Real visual/performance debugging |
| Cloudflare | Deployment/hosting |

Kiro's current tooling includes specs, steering, hooks, MCP support, and multiple development surfaces. citeturn243263search0turn243263search8

---

# 183. THE BEST WAY TO USE KIRO

Do not ask:

> Build an ecommerce site.

Ask:

> Define the requirements for a product catalog where clicking the WhatsApp CTA creates a product-specific pre-filled WhatsApp message.

Then:

```text
requirements
↓
design
↓
tasks
```

Then implement one task at a time.

Kiro's current docs specifically position specs as a structured requirements/design/tasks workflow. citeturn243263search5

---

# 184. THE BEST WAY TO USE ANTIGRAVITY

Give it context plus constraints.

Example:

```text
You are implementing the product card from the existing project specification.

Do not change the page architecture.
Do not introduce a dependency.
Use the existing design tokens.
Use the Product type.
Support mobile widths.
Keep the card accessible.
Use the existing availability enum.
Return the files changed.
```

This reduces random AI decisions.

---

# 185. BROWSER IS PART OF YOUR DESIGN TOOLCHAIN

You do not need Figma to visually inspect a live UI.

Use:

```text
Browser
DevTools
Responsive mode
Accessibility tree
Network tab
Performance tab
```

Take screenshots for yourself when comparing iterations.

The browser is the final rendering environment, so evaluate the actual product there.

---

# 186. VISUAL ITERATION LOOP

```text
Implement
   ↓
Open browser
   ↓
Inspect mobile
   ↓
Inspect desktop
   ↓
Compare with real products
   ↓
Adjust
   ↓
Repeat
```

Do not trust the AI agent's description that a page is "beautiful".

Look at it.

---

# 187. PRODUCT-DRIVEN DESIGN RULE

Before styling any page, decide:

```text
What does the customer need to see?
What must they understand?
What action should they take?
```

For product page:

```text
See product
↓
Understand product
↓
Know price
↓
Trust seller
↓
Order on WhatsApp
```

Everything else is secondary.

---

# 188. ACCESSIBILITY + CONVERSION ARE NOT OPPOSITES

A clear, large, well-labeled WhatsApp button is better for:

- accessibility.
- mobile users.
- older customers.
- first-time visitors.
- conversion.

Good UX often improves both accessibility and sales.

---

# 189. MOBILE-FIRST COMMERCE RULE

Assume that a visitor came from a social post on their phone.

They should be able to:

```text
Open link
   ↓
See product image
   ↓
See price
   ↓
See key details
   ↓
Tap WhatsApp
```

without zooming, scrolling through a wall of text, or opening multiple menus.

---

# 190. REAL BUSINESS OPERATING MODEL

The website is not the whole business.

The real system is:

```text
PRODUCT
  ↓
PHOTOGRAPHY
  ↓
WEBSITE
  ↓
SOCIAL DISCOVERY
  ↓
WHATSAPP
  ↓
HUMAN CONVERSATION
  ↓
PAYMENT
  ↓
FULFILLMENT
  ↓
CUSTOMER EXPERIENCE
```

The website should strengthen every stage, not attempt to replace the human part prematurely.

---

# 191. CUSTOMER QUESTIONS SHOULD BECOME WEBSITE FEATURES

After launch, collect the top WhatsApp questions.

Example:

```text
Question: Is blouse included?
→ Add product-field display.

Question: Is this cotton?
→ Add fabric above the fold.

Question: How long for delivery?
→ Improve shipping summary.

Question: Is this available?
→ Improve availability status.
```

This creates a data-driven content improvement loop.

---

# 192. WEEKLY BUSINESS + TECH REVIEW

Once a week, review:

```text
Top visited products
Top WhatsApp inquiries
Sold-out products
New products
Customer questions
Broken links
Deployment status
```

Then decide what to improve.

One focused improvement per week is better than constant redesign.

---

# 193. MONTHLY TECH MAINTENANCE

Once per month or as needed:

```text
Update dependencies carefully
Run audit
Review build
Review image sizes
Review analytics
Check broken links
Check contact information
Check policies
Check expired products/offers
```

Never blindly upgrade every package simultaneously on a production business site.

---

# 194. BACKWARD-COMPATIBILITY THINKING

Once customers start using URLs, treat published product URLs as public contracts.

Avoid changing:

```text
/product/product-name
```

to another slug without a migration/redirect strategy.

---

# 195. FAILURE MODES TO AVOID

## Failure 1
Beautiful homepage but no products.

Solution: prioritize catalog.

## Failure 2
Products look bad because images are weak.

Solution: improve photography.

## Failure 3
WhatsApp link is generic.

Solution: use product-specific pre-filled messages.

## Failure 4
Seller cannot tell which saree customer wants.

Solution: stable product ID + product URL in message.

## Failure 5
AI invents business facts.

Solution: content approval workflow.

## Failure 6
Overbuilt backend.

Solution: static V1.

## Failure 7
Website looks like an AI template.

Solution: real photography + custom typography + deliberate layout + fewer generic UI patterns.

## Failure 8
Free hosting terms don't match commercial use.

Solution: verify current terms and use an appropriate free commercial-friendly option.

---

# 196. THE "NO AI LOOK" FINAL AUDIT

Ask 10 people internally/externally:

> Does this look like a template made by an AI website generator?

If several say yes, inspect:

- generic hero.
- generic copy.
- predictable section ordering.
- excessive cards.
- excessive rounded corners.
- identical image treatment.
- stock photography.
- generic color palette.
- too many animations.

Then remove, replace, or simplify.

---

# 197. BRAND DIFFERENTIATION

The website should have at least three things that competitors cannot copy merely by changing colors:

1. Authentic business story.
2. Real product photography and product detail.
3. Distinctive editorial presentation.

Technology is rarely the differentiator.

Trust and presentation are.

---

# 198. THE FIRST VERSION SHOULD FEEL SMALL — ON PURPOSE

A small business website should not pretend to be an enterprise marketplace.

It is okay to say:

```text
Order directly on WhatsApp.
```

That can actually feel more personal and appropriate for the business.

---

# 199. FREE PLATFORM STRATEGY — FINAL

### Launch cost target

```text
₹0 recurring software/hosting
```

### Architecture

```text
Static Next.js catalog
+
Cloudflare Pages
+
GitHub
+
WhatsApp
```

### Business acquisition

```text
Instagram
+
Google Search/Maps
+
WhatsApp referrals
```

### Upgrade only when needed

```text
Domain
→ Supabase
→ Admin
→ Payment
→ Shipping
→ CRM
```

---

# 200. FINAL PROJECT BLUEPRINT

```text
                     PUTTAPAKA
              WOMEN'S HANDLOOM TEXTILES
                           │
                           ▼
                  ┌─────────────────┐
                  │    WEBSITE      │
                  │     Next.js     │
                  └───────┬─────────┘
                          │
          ┌───────────────┼────────────────┐
          │               │                │
          ▼               ▼                ▼
       Discover         Browse           Trust
          │               │                │
          └───────────────┼────────────────┘
                          ▼
                    PRODUCT PAGE
                          │
                          ▼
                ORDER ON WHATSAPP
                          │
                          ▼
                       SELLER
                          │
                 ┌────────┴────────┐
                 ▼                 ▼
              Payment           Shipping
```

Infrastructure:

```text
Developer
   ↓
Kiro
   ↓
Antigravity
   ↓
VS Code
   ↓
Git
   ↓
GitHub
   ↓
Cloudflare Pages
   ↓
Customer
```

---

# 201. MASTER LAUNCH CHECKLIST

## Machine

```text
[ ] OS updated
[ ] Git installed
[ ] Node LTS installed
[ ] VS Code installed
[ ] Kiro installed
[ ] Antigravity installed
[ ] Browser installed
```

## Project

```text
[ ] Next.js project created
[ ] TypeScript configured
[ ] Tailwind configured
[ ] Git initialized
[ ] GitHub connected
```

## Kiro

```text
[ ] project steering file
[ ] design steering file
[ ] engineering steering file
[ ] business rules steering file
[ ] requirements spec
[ ] design spec
[ ] tasks
```

## Design

```text
[ ] typography selected
[ ] color palette approved
[ ] navigation approved
[ ] real photos selected
[ ] product card approved
[ ] product page approved
```

## Content

```text
[ ] real business story
[ ] real product descriptions
[ ] real prices
[ ] real availability
[ ] shipping policy
[ ] returns policy
[ ] contact information
```

## Development

```text
[ ] homepage
[ ] shop
[ ] collections
[ ] product page
[ ] search
[ ] filters
[ ] WhatsApp integration
[ ] contact
[ ] policies
```

## Technical

```text
[ ] lint
[ ] build
[ ] image optimization
[ ] metadata
[ ] sitemap
[ ] robots
[ ] accessibility
[ ] responsive QA
```

## Launch

```text
[ ] GitHub push
[ ] Cloudflare Pages deployment
[ ] production test
[ ] WhatsApp test on mobile
[ ] WhatsApp Web test
[ ] Google Business Profile
[ ] Instagram links
```

---

# 202. DO NOT SHIP UNTIL THESE 12 QUESTIONS HAVE ANSWERS

1. What exactly does Puttapaka Women's Handloom Textiles sell?
2. Which products are actually available right now?
3. What is the real WhatsApp number?
4. What is the actual business story?
5. Which handloom/craft claims are verified?
6. What are the actual prices?
7. What are the actual shipping rules?
8. What are the actual return/exchange rules?
9. Which product photographs are approved?
10. Which social links are correct?
11. Who owns the deployment and GitHub account?
12. Who is responsible for updating products after launch?

---

# 203. OWNER/SELLER HANDOFF DOCUMENT

At handoff, provide the business owner with a one-page procedure:

```text
NEW PRODUCT
→ Send photos + product information
→ Assign Product ID
→ Developer adds product
→ Product page published

PRODUCT SOLD
→ Tell developer / update inventory sheet
→ Website status changed to sold out

CUSTOMER MESSAGE
→ Check product ID
→ Confirm availability
→ Complete order manually
```

This makes the technology sustainable for a small business.

---

# 204. MOST IMPORTANT PRINCIPLES — MEMORIZE THESE

## Principle 1
**The website is a sales tool, not a software demonstration.**

## Principle 2
**WhatsApp is the V1 checkout/conversation channel.**

## Principle 3
**Real product photography beats visual effects.**

## Principle 4
**Never allow AI to invent business facts.**

## Principle 5
**Start static; add a database when necessary.**

## Principle 6
**Use Kiro for structure and Antigravity for implementation.**

## Principle 7
**Keep the codebase smaller than your ego.**

## Principle 8
**Do not build a feature because other ecommerce sites have it.**

## Principle 9
**Optimize the WhatsApp conversion path.**

## Principle 10
**Real customer behavior decides V2.**

---

# 205. RECOMMENDED FIRST 10 KIRO SPECS

Create these as separate specs instead of one giant implementation task.

```text
SPEC 01 — Project foundation and architecture
SPEC 02 — Design system and global layout
SPEC 03 — Homepage
SPEC 04 — Product data model and catalog
SPEC 05 — Shop/search/filter experience
SPEC 06 — Product detail page
SPEC 07 — WhatsApp commerce integration
SPEC 08 — SEO/accessibility/performance foundation
SPEC 09 — Content/policy/contact pages
SPEC 10 — Production QA and deployment
```

This is the cleanest way to control AI-assisted development.

---

# 206. FIRST BUILD DAY

Use this exact order:

```text
1. Install tools.
2. Create repository.
3. Create Next.js app.
4. Start dev server.
5. Verify browser works.
6. Commit baseline.
7. Add Kiro steering.
8. Write project specification.
9. Define Product type.
10. Create 3–5 real test products.
11. Build global layout.
12. Build one excellent product card.
13. Build one excellent product page.
14. Implement WhatsApp.
15. Test the full journey.
```

Do not build 30 pages before proving the core journey works.

---

# 207. FIRST PRODUCT TEST

Before adding the whole catalog, create three test products:

```text
PWT-001
PWT-002
PWT-003
```

Test:

```text
Home
 ↓
Shop
 ↓
Product
 ↓
WhatsApp
```

If this path is correct, scaling the catalog becomes much easier.

---

# 208. FIRST LIVE USER TEST

Ask 3–5 people who were not involved in the development to do this task:

> Find a saree you like and tell the seller you want to order it.

Do not explain how.

Observe:

- Do they find the shop?
- Do they understand the product page?
- Do they notice the price?
- Do they understand how to order?
- Do they click WhatsApp?
- Does the pre-filled message make sense?

Their confusion is more valuable than your assumptions.

---

# 209. FINAL ARCHITECTURE DECISION LOG

Record major decisions in a file such as:

```text
/docs/architecture-decisions.md
```

Examples:

```text
ADR-001: Use static product data for V1.
ADR-002: Use WhatsApp as primary order flow.
ADR-003: Use Cloudflare Pages for launch hosting.
ADR-004: Do not implement payment in V1.
ADR-005: Use stable product IDs.
```

This prevents future AI agents from "helpfully" rebuilding the architecture.

---

# 210. FINAL SENIOR DEVELOPER RECOMMENDATION

Build the project as a **small, elegant, production-grade catalog system**, not as a fake enterprise ecommerce platform.

The ideal V1 is:

```text
Beautiful
Fast
Human
Authentic
Mobile-first
Searchable
SEO-friendly
Easy to maintain
Zero-cost to operate at small scale
Directly connected to WhatsApp
```

The engineering stack is intentionally boring:

```text
Next.js
TypeScript
Tailwind
GitHub
Cloudflare Pages
WhatsApp
```

The design should be the interesting part.

The business story should be the authentic part.

The WhatsApp conversion path should be the efficient part.

---

# 211. REFERENCE NOTES FOR CURRENT TOOL/PLATFORM FACTS

The following current platform details were verified while preparing this document:

1. **WhatsApp click-to-chat:** WhatsApp documents `https://wa.me/<number>` using an international-format number and supports a URL-encoded pre-filled message via `?text=`. It works on phones and WhatsApp Web. citeturn243263search1turn243263search10

2. **Kiro:** Current Kiro documentation describes the IDE as an agentic development environment with Specs, Steering, Hooks, MCP, and related capabilities. Its first-project workflow documents steering files under `.kiro/steering/` and specs as requirements → design → tasks. citeturn243263search0turn243263search5turn243263search8turn243263search11turn243263search12

3. **Cloudflare Pages:** Current documentation states that static asset requests are free and unlimited on Pages, while the Free plan has published build, file-count, file-size and function-related limits. citeturn243263search2turn243263search6

4. **Vercel Hobby:** Vercel's current Terms of Service state that the Hobby plan is for personal and non-commercial use. Therefore the V1 commercial hosting recommendation in this document avoids relying on the Vercel Hobby tier. citeturn243263search3

---

# 212. PROJECT NORTH STAR

Whenever you are uncertain about what to build next, ask:

> **Will this make it easier for a real customer to discover a Puttapaka product, trust the business, and start an order conversation on WhatsApp?**

If yes, prioritize it.

If not, it probably belongs in a later version.

---

# END OF MASTER SPEC

**Project:** Puttapaka Women's Handloom Textiles  
**Architecture:** Custom Next.js catalog + WhatsApp commerce  
**V1 infrastructure target:** Zero recurring software/hosting cost  
**Primary development workflow:** Kiro → Antigravity → VS Code → GitHub → Cloudflare Pages
