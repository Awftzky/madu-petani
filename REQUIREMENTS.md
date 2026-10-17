# Project Overview

MADU PETANI is an Indonesian UMKM that promotes and sells honey products sourced or supplied from Sulawesi. This project will provide a simple product branding website and will be developed progressively throughout a Web Development college class.

# Project Goals

- Build a clear online presence for the MADU PETANI brand.
- Introduce the business and communicate relevant product information.
- Present a simple product catalog and individual product details.
- Provide simple articles and updates related to honey, products, and the MADU PETANI brand.
- Give visitors clear ways to contact the business or begin an order.
- Keep the project understandable, maintainable, and suitable for future course phases.

# Target Users

- People interested in learning about MADU PETANI.
- Potential customers looking for honey product information.
- Potential customers who want to contact the business or place an order.

# Scope

## In Scope

- Brand introduction.
- Product catalog.
- Product information and product detail.
- Product images with descriptive alternative text.
- Product prices when confirmed and available.
- Simple article and information previews.
- Confirmed business and contact information.
- A simple order/contact form.
- A WhatsApp ordering call to action.
- A link to the MADU PETANI Instagram account.
- Semantic and accessible HTML structure.

## Out of Scope

- Authentication and user accounts.
- Shopping cart and checkout.
- Payment gateway.
- Admin dashboard.
- Inventory management.
- Backend, database, or API.
- Complex JavaScript functionality.

# Pages

1. **Home** — Introduces the MADU PETANI brand, featured products, article/information previews, and provides navigation to products and ordering/contact options.
2. **Products** — Displays the available honey products as a simple catalog.
3. **Product Detail** — Presents the confirmed information for a selected honey product.
4. **Order / Contact** — Provides a simple contact/order form, WhatsApp call to action, Instagram link, and confirmed business contact details.

# Confirmed Products

1. **Apis Dorsata Nektar Kelapa**
   - Category: Madu Hutan
   - Size: 250 ml
   - Price: Rp95.000

2. **Apis Mellifera Nektar Kaliandra**
   - Category: Madu Ternak
   - Size: 250 ml
   - Price: Rp90.000

3. **Apis Mellifera Nektar Karet**
   - Category: Madu Ternak
   - Size: 250 ml
   - Price: Rp80.000

4. **Apis Mellifera Nektar Akasia**
   - Category: Madu Ternak
   - Size: 250 ml
   - Price: Rp70.000

5. **Dorsata-Kolaka**
   - Category: TBD
   - Size: TBD
   - Price: TBD
   - Image: assets/images/products/dorsata-kolaka.jpg

# Functional Requirements

- **FR-01:** The website must provide navigation between all pages.
- **FR-02:** The Home page must introduce MADU PETANI without using unconfirmed business claims.
- **FR-03:** The Home page must include simple article or information previews related to honey, products, or the MADU PETANI brand.
- **FR-04:** The Products page must present available products with a name, image, and other confirmed information.
- **FR-05:** At least one product must provide a way to reach the Product Detail page.
- **FR-06:** The Product Detail page must present the selected product's confirmed description, image, price when available, and ordering call to action.
- **FR-07:** The Order / Contact page must contain a simple form for order or contact enquiries.
- **FR-08:** Every form control must have an associated label using matching `for` and `id` attributes where applicable.
- **FR-09:** The website must provide a WhatsApp ordering call to action once the correct destination is confirmed.
- **FR-10:** The website must link to the official MADU PETANI Instagram account at <https://www.instagram.com/madupetani_>.
- **FR-11:** Product and business information that has not been confirmed must be marked as TBD rather than invented.

# Non-Functional Requirements

- **NFR-01:** Pages must use appropriate semantic HTML5 elements, including `header`, `nav`, `main`, `article` where relevant, and `footer`.
- **NFR-02:** Images must have descriptive `alt` attributes appropriate to their purpose.
- **NFR-03:** Page structure and link text must be clear and understandable without visual styling.
- **NFR-04:** Naming and file organization must remain simple and consistent.
- **NFR-05:** The project must avoid unnecessary abstraction and follow YAGNI, KISS, and Good Enough Software principles.
- **NFR-06:** The implementation must remain maintainable for later course phases.

# Current Technical Constraints

- Use semantic HTML and Tailwind CSS for page styling.
- Provide at least three HTML pages; the current implementation includes four.
- Keep one external stylesheet, `style.css`, shared by all pages for base styles.
- Use Tailwind utility classes for consistent styling and responsive layouts.
- Load Tailwind through its Play CDN; a network connection is required, and this setup is for development.
- Do not add custom application JavaScript, React, Bootstrap, a backend, database, API, package manager, or local build tools.
- Use basic HTML elements and semantic HTML5 where relevant.
- Apply basic accessibility practices, especially descriptive image alternatives and correct form label associations.

# Acceptance Criteria

- At least three separate, valid HTML pages exist; the planned implementation targets Home, Products, Product Detail, and Order / Contact.
- Every page has a clear document title and uses semantic `header`, `nav`, `main`, and `footer` structure.
- `article` is used where the content is independently meaningful, such as a product entry or article preview.
- Navigation links allow visitors to move between the implemented pages.
- The website includes a brand introduction, product catalog, product detail, article/information previews, and contact/ordering entry point.
- All meaningful images have descriptive `alt` text; decorative images use an empty `alt` attribute.
- Every applicable form label is correctly associated with its control through matching `for` and `id` values.
- The Instagram link uses the provided official account URL.
- The WhatsApp call to action uses a confirmed destination or is clearly marked TBD.
- All pages link to the shared stylesheet and use Tailwind classes for consistent styling with narrow-screen responsive behavior.
- Tailwind is the selected framework; no custom application JavaScript, backend, database, API, package manager, local build tool, or unrelated feature is introduced.
- Unknown business information is marked TBD and is not fabricated.

# TBD / Open Questions

- Confirmed brand story, value proposition, and approved marketing copy.
- Approved product images and image descriptions.
- WhatsApp number and preferred prefilled ordering message.
- Business contact details and operating hours, if they should be published.
- Exact fields required in the order/contact form.
- Whether form submission should remain demonstrative during the current Tailwind CSS phase.
