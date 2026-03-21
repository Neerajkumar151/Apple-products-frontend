# 🍎 Apple Website Experience

> A pixel-perfect, high-fidelity reimagining of the Apple digital experience. 
> Built with modern web technologies to demonstrate precision engineering, complex state management, and cinematic user interfaces.

![Project Banner](public/preview.webp)
*(Note: Place a high-quality screenshot of the Hero section in `public/preview.webp`)*

## � Introduction

This project is a detailed reconstruction of the Apple ecosystem's web interface. It goes beyond a simple visual copy by implementing core functional logic found in enterprise e-commerce platforms. From a global shopping cart system to complex routing and timeline-based animations, this application showcases the power of **React 19** and the **Vite** ecosystem.

## ✨ Core Features & Highlights

### 🛍️ Full E-Commerce Functionality
*   **Persistent Shopping Cart**: A robust `CartContext` system that persists via `localStorage`. Users can add items across different sessions without losing data.
*   **Smart Calculations**: Automatically calculates subtotal, variable tax rates (8.75%), and shipping thresholds dynamically.
*   **Product Variants**: Supports complex product variations (Colors, Storage sizes) with unique ID generation for cart items.

### 🎨 Cinematic UI/UX
*   **Performance Animations**: Utilizes **GSAP (GreenSock)** for high-performance, GPU-accelerated scroll animations and entrance effects.
*   **Glassmorphism**: extensive use of `backdrop-blur` and transparency effects to mimic the native Apple OS feel.
*   **Responsive Design System**: A fluid layout that adapts perfectly from large 4K displays down to mobile devices.

### 🧭 Deep Routing Architecture
*   **Comprehensive Sitemap**: Using **React Router v7**, the app covers the entire site map including:
    *   **Category Pages**: Mac, iPhone, iPad, Watch, Vision, TV & Home.
    *   **Support & Footer**: Dedicated pages for seamless navigation throughout the app.

---

## 🛠️ Technology Stack

| Architecture | Styling & UI | Logic & State |
| :--- | :--- | :--- |
| ![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB) | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radix-ui&logoColor=white) | ![Context API](https://img.shields.io/badge/Context_API-grey?style=flat-square) |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white) | ![Zod](https://img.shields.io/badge/Zod-3068b7?style=flat-square&logo=zod&logoColor=white) |

---

## 📂 System Architecture

The codebase is structured to be scalable and modular.

```bash
src/
├── 📁 components/     # Atomic Design Components
│   ├── SearchModal.tsx    # Global Command-K style search
│   └── ScrollToTop.tsx    # UX utility for route changes
│
├── 📁 context/        # Global State Management
│   ├── CartContext.tsx    # Complex cart logic (CRUD, Totals, Persistence)
│   └── SearchContext.tsx  # Visibility state for search overlay
│
├── 📁 pages/          # Page-Level Views
│   ├── 📁 category/       # (MacPage, IPhonePage, etc.)
│   ├── 📁 product/        # Dynamic product details
│   ├── CartPage.tsx       # Shopping bag view
│   └── CheckoutPage.tsx   # Final purchase flow
│
├── 📁 sections/       # Layout Compositions
│   ├── Navigation.tsx     # Responsive navbar with scroll logic
│   ├── Hero.tsx           # Main landing page visual
│   └── Footer.tsx         # Comprehensive site map footer
│
├── App.tsx            # Main Router configuration
└── main.tsx           # Entry point
```

## 🧠 How It Works

### The Cart Logic (`CartContext.tsx`)
The cart is the brain of the e-commerce features. It uses a custom hook `useCart()` to expose methods like `addToCart`, `removeFromCart`, and `updateQuantity`.
*   **Duplicate Detection**: When adding an item, it checks if a product with the exact same ID *and* variant (e.g., "iPhone 15 Pro - Blue - 256GB") already exists. If it does, it increments the quantity instead of creating a new entry.
*   **Financial Math**: `subtotal`, `tax`, and `orderTotal` are memoized values that recalculate instantly whenever the `items` array changes.

### The Navigation System
The `Navigation.tsx` component is more than just links.
1.  **Scroll Awareness**: It attaches a passive scroll listener to the window.
2.  **Visual Transformation**: As you scroll down (`scrollY > 50`), the navbar smoothly transitions its background opacity and blur using Tailwind utility classes controlled by React state.
3.  **Mobile Adaptive**: On mobile, it transforms into a hamburger menu with a slide-down animation.

## 📱 Product Categories Implemented

The application includes dedicated routes and layouts for the major product lines:
*   💻 **Mac**: MacBook Air, MacBook Pro, iMac
*   📱 **iPhone**: iPhone 16 Pro, iPhone 16
*   🖊️ **iPad**: iPad Pro, iPad Air
*   ⌚ **Watch**: Apple Watch Series 10, Ultra 2
*   🕶️ **Vision**: Apple Vision Pro
*   🎧 **AirPods**: AirPods Pro, Max

---

## ⚡ Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/your-username/apple-website-experience.git
cd apple-website-experience
npm install
```

### 2. Development
Run the local server with hot module replacement:
```bash
npm run dev
```

### 3. Production Build
Create an optimized build for deployment:
```bash
npm run build
```

---

## 🤝 Contributing

This project is open source and we welcome contributions!
1. Fork the repo.
2. Create standard feature branches (`git checkout -b feature/NewAnimation`).
3. Commit usage of conventional commits.
4. Open a PR.

---

<p align="center">
  <br>
  Built with passion by <b>[Your Name]</b>
  <br>
  <i>This project is for educational purposes and is inspired by Apple Inc.</i>
</p>
