import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import SearchModal from './components/SearchModal';
import ScrollToTop from "./components/ScrollToTop";

// Landing Page Sections
import Hero from './sections/Hero';
import ProductShowcase from './sections/ProductShowcase';
import Features from './sections/Features';
import ProductGrid from './sections/ProductGrid';
import ColorLab from './sections/ColorLab';

// Category Pages
import StorePage from './pages/category/StorePage';
import MacPage from './pages/category/MacPage';
import IPadPage from './pages/category/iPadPage';
import IPhonePage from './pages/category/iPhonePage';
import WatchPage from './pages/category/WatchPage';
import VisionPage from './pages/category/VisionPage';
import AirPodsPage from './pages/category/AirPodsPage';
import TVHomePage from './pages/category/TVHomePage';
import EntertainmentPage from './pages/category/EntertainmentPage';
import SupportPage from './pages/category/SupportPage';

// Product Detail Page
import ProductDetailPage from './pages/product/ProductDetailPage';

// Cart & Checkout
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

// Footer Pages - Shop and Learn
import AirTagPage from './pages/footer/AirTagPage';
import AccessoriesPage from './pages/footer/AccessoriesPage';
import GiftCardsPage from './pages/footer/GiftCardsPage';

// Footer Pages - Apple Wallet
import WalletPage from './pages/footer/WalletPage';
import AppleCardPage from './pages/footer/AppleCardPage';
import ApplePayPage from './pages/footer/ApplePayPage';
import AppleCashPage from './pages/footer/AppleCashPage';

// Footer Pages - Account
import ManageAppleIDPage from './pages/footer/ManageAppleIDPage';
import AppleStoreAccountPage from './pages/footer/AppleStoreAccountPage';
import ICloudPage from './pages/footer/iCloudPage';

// Footer Pages - Entertainment
import AppleOnePage from './pages/footer/AppleOnePage';
import AppleTVPlusPage from './pages/footer/AppleTVPlusPage';
import AppleMusicPage from './pages/footer/AppleMusicPage';

// Footer Pages - Apple Values
import AccessibilityPage from './pages/footer/AccessibilityPage';
import EducationPage from './pages/footer/EducationPage';
import EnvironmentPage from './pages/footer/EnvironmentPage';
import PrivacyPage from './pages/footer/PrivacyPage';

// Footer Pages - About Apple
import NewsroomPage from './pages/footer/NewsroomPage';
import LeadershipPage from './pages/footer/LeadershipPage';
import CareersPage from './pages/footer/CareersPage';
import ContactPage from './pages/footer/ContactPage';
import LegalPage from './pages/footer/LegalPage';

import './App.css';

// Landing Page Component
function LandingPage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Features />
      <ProductGrid />
      <ColorLab />
    </>
  );
}

function App() {
  return (
    
    <CartProvider>
      
      <SearchProvider>
        <Router>
          <ScrollToTop />
          <Navigation />
          <SearchModal />
          <main>
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<LandingPage />} />

              {/* Category Pages */}
              <Route path="/store" element={<StorePage />} />
              <Route path="/mac" element={<MacPage />} />
              <Route path="/ipad" element={<IPadPage />} />
              <Route path="/iphone" element={<IPhonePage />} />
              <Route path="/watch" element={<WatchPage />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/airpods" element={<AirPodsPage />} />
              <Route path="/tv-home" element={<TVHomePage />} />
              <Route path="/entertainment" element={<EntertainmentPage />} />
              <Route path="/support" element={<SupportPage />} />

              {/* Product Detail */}
              <Route path="/product/:id" element={<ProductDetailPage />} />

              {/* Cart & Checkout */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />

              {/* Footer Pages - Shop and Learn */}
              <Route path="/footer/airtag" element={<AirTagPage />} />
              <Route path="/footer/accessories" element={<AccessoriesPage />} />
              <Route path="/footer/gift-cards" element={<GiftCardsPage />} />

              {/* Footer Pages - Apple Wallet */}
              <Route path="/footer/wallet" element={<WalletPage />} />
              <Route path="/footer/apple-card" element={<AppleCardPage />} />
              <Route path="/footer/apple-pay" element={<ApplePayPage />} />
              <Route path="/footer/apple-cash" element={<AppleCashPage />} />

              {/* Footer Pages - Account */}
              <Route path="/footer/manage-apple-id" element={<ManageAppleIDPage />} />
              <Route path="/footer/apple-store-account" element={<AppleStoreAccountPage />} />
              <Route path="/footer/icloud" element={<ICloudPage />} />

              {/* Footer Pages - Entertainment */}
              <Route path="/footer/apple-one" element={<AppleOnePage />} />
              <Route path="/footer/apple-tv-plus" element={<AppleTVPlusPage />} />
              <Route path="/footer/apple-music" element={<AppleMusicPage />} />
              <Route path="/footer/apple-arcade" element={<AppleOnePage />} />
              <Route path="/footer/apple-fitness-plus" element={<AppleOnePage />} />
              <Route path="/footer/apple-news-plus" element={<AppleOnePage />} />
              <Route path="/footer/apple-podcasts" element={<AppleOnePage />} />
              <Route path="/footer/apple-books" element={<AppleOnePage />} />
              <Route path="/footer/app-store" element={<AppleOnePage />} />

              {/* Footer Pages - Apple Values */}
              <Route path="/footer/accessibility" element={<AccessibilityPage />} />
              <Route path="/footer/education" element={<EducationPage />} />
              <Route path="/footer/environment" element={<EnvironmentPage />} />
              <Route path="/footer/privacy" element={<PrivacyPage />} />
              <Route path="/footer/inclusion-diversity" element={<AccessibilityPage />} />
              <Route path="/footer/racial-equity" element={<AccessibilityPage />} />
              <Route path="/footer/supplier-responsibility" element={<AccessibilityPage />} />

              {/* Footer Pages - About Apple */}
              <Route path="/footer/newsroom" element={<NewsroomPage />} />
              <Route path="/footer/leadership" element={<LeadershipPage />} />
              <Route path="/footer/careers" element={<CareersPage />} />
              <Route path="/footer/investors" element={<NewsroomPage />} />
              <Route path="/footer/ethics-compliance" element={<LegalPage />} />
              <Route path="/footer/events" element={<NewsroomPage />} />
              <Route path="/footer/contact" element={<ContactPage />} />

              {/* Footer Legal Pages */}
              <Route path="/footer/privacy-policy" element={<PrivacyPage />} />
              <Route path="/footer/terms-of-use" element={<LegalPage />} />
              <Route path="/footer/sales-refunds" element={<LegalPage />} />
              <Route path="/footer/legal" element={<LegalPage />} />
              <Route path="/footer/site-map" element={<LegalPage />} />
              <Route path="/footer/country" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
