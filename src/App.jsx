import { Routes, Route } from "react-router";
import { Layout } from "./Layout";
import { HomePage } from "./pages/HomePage";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { OffersPage } from "./pages/OffersPage";
import { ServicesPage } from "./pages/ServicesPage";
import { CartPage } from "./pages/CartPage";
import { LoginPage } from "./pages/LoginPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="smartphones" element={<Shop />} />
        <Route path="accessories" element={<Shop />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
