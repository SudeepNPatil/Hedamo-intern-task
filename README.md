# Hedamo – Product Disclosure Platform (Frontend)

This project is a frontend implementation of a **Product Disclosure Platform** that allows users to browse producer-declared product information and view detailed disclosures for individual products.

The application focuses on clarity, transparency, and a neutral, regulatory-friendly user interface rather than marketing or promotional content.

---

## Tech Stack

- **React** – UI library for building the component-based frontend
- **Tailwind CSS** – Utility-first CSS framework for styling
- **React Router DOM** – Client-side routing for product list and product detail pages
- **Lucide React** – Icon library used for UI icons

---

## Setup Instructions

### requirements

Ensure you have the following installed:

- **Node.js** (v16 or above recommended)
- **npm** or **yarn**

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SudeepNPatil/Hedamo-intern-task.git
   cd Hedamo-intern-task
   npm install or yarn install
   npm run dev or yarn dev
   ```

### Project structure & Routing

- `/ ` - Product list page displaying all product disclosures.
- `/productdetails` - Product detail page showing full disclosure information for a selected product.

- routing is handled using the react-router-dom.

### Implementation Notes

- The UI is designed to reflect an informational disclosure platform, not a marketplace.

- All product data is treated as producer-declared information and is displayed without verification or
  endorsement.

- Status indicators (Draft, Submitted, Published) are visually differentiated.

- Version history is included to demonstrate transparency and traceability of product disclosures.

- Technical information is displayed in a structured and neutral format.

### Assumptions

- Data is currently static/mock data for demonstration purposes.

- Only one Product detail imformation is there in the Product detail page for all the product it will show that one information only, because it is static that why I keep it one for all the Product.
