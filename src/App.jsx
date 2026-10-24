import HomeScreen from "./page/HomeScreen";
import OrderScreen from "./page/OrderScreen";
import ProductDetailScreen from "./page/ProductDetailScreen";
import ProductScreen from "./page/ProductScreen";
import Navbar from "./components/layout/Navbar";
import SiteFooter from "./components/layout/SiteFooter";
import { products } from "./data/products";

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const page = pathname.replace(/\.html$/, "");

  let currentPage = "home";
  let screen = <HomeScreen products={products} />;

  if (page === "/products") {
    currentPage = "products";
    screen = <ProductScreen products={products} />;
  } else if (page === "/product-detail") {
    currentPage = "product-detail";
    const requestedId = new URLSearchParams(window.location.search).get(
      "product",
    );
    const selectedProduct =
      products.find((product) => product.id === requestedId) ?? products[0];
    screen = <ProductDetailScreen product={selectedProduct} />;
  } else if (page === "/order") {
    currentPage = "order";
    screen = <OrderScreen products={products} />;
  }

  return (
    <div className="min-h-screen bg-[#f7f4eb] text-[#242a24]">
      <Navbar currentPage={currentPage} />
      {screen}
      <SiteFooter />
    </div>
  );
}

export default App;
