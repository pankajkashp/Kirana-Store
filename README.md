<div align="center">
  <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300&q=80" alt="Raju Kirana Store Banner" style="border-radius: 12px; margin-bottom: 20px;">

  # 🛒 Raju Kirana Store
  
  **A highly practical, realistic local grocery store e-commerce platform.**
  
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  </p>

  <p>
    Built as a portfolio project to demonstrate modern frontend development, state management, and a seamless <b>WhatsApp checkout integration</b> for local Indian businesses.
  </p>
</div>

---

## 📖 About the Project

Most e-commerce templates focus on flashy "SaaS-like" aesthetics with huge gradients and fake statistics. **Raju Kirana Store** takes the opposite approach. 

The goal of this project was to build an interface that feels like a **genuine, practical neighborhood Kirana shop** that recently started accepting online orders. It focuses on usability, clear pricing, realistic product catalogs (packaged essentials), and a frictionless checkout flow that local businesses actually use.

## ✨ Key Features

- **🛍️ Realistic Product Discovery**: Dynamic filtering by category and a responsive search bar to quickly find everyday staples.
- **🛒 Persistent Cart Management**: Add items, adjust quantities, and view a sliding cart drawer with live subtotal/delivery calculations.
- **📱 WhatsApp Order Integration**: Instead of a complex payment gateway, the checkout form captures customer details and automatically generates a perfectly formatted WhatsApp order message directly to the shop owner.
- **⚡ Authentic UI/UX**: Designed with practical borders, clean white/off-white backgrounds, highly legible typography, and no unnecessary decorative bloat.
- **📱 Fully Responsive**: Carefully optimized for mobile users, featuring horizontally scrolling categories and stacked product cards.

## 🛠️ Technology Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🚀 Getting Started

To run this project locally on your machine:

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pankajkashp/Kirana-Store.git
   cd Kirana-Store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` in your web browser.

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── Footer.tsx       # Store information and links
│   ├── Hero.tsx         # Practical header banner
│   ├── HomeSections.tsx # Delivery checker and 'How it works'
│   ├── Modals.tsx       # Cart drawer, Checkout, Product Detail, Success modals
│   ├── Navbar.tsx       # Responsive top navigation
│   ├── ProductCard.tsx  # Individual product display
│   └── ProductGrid.tsx  # Grid layout for product lists
├── data/
│   └── products.ts      # Structured realistic grocery catalog
├── types/
│   └── index.ts         # TypeScript interfaces (Product, CartItem)
├── App.tsx              # Main layout & Global State orchestration
├── index.css            # Base Tailwind styles & clean utility classes
└── main.tsx             # Application entry point
```

## 📱 The WhatsApp Flow

When a user completes their cart and fills in their delivery details, the application utilizes `encodeURIComponent` to construct a message. It automatically opens the native WhatsApp application (or Web) pre-filled with:

```text
Hello Raju Kirana Store,

I would like to place an order.

*Customer:*
John Doe
*Phone:*
9876543210
*Address:*
XYZ Apartments, Flat 101, 201001

*Order:*
2x Aashirvaad Atta (5 kg) — ₹570
1x Tata Salt (1 kg) — ₹24

Subtotal: ₹594
Delivery: ₹30
*Total: ₹624*

Please confirm.
```

---

<div align="center">
  <b>Designed & Developed by Pankaj Kashyap</b>
  <br />
  <i>Building practical web solutions for real people.</i>
</div>