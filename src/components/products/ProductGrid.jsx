import ProductCard from "./ProductCard";

const ProductGrid = ({ products, columns = "three" }) => {
  const columnClasses =
    columns === "two"
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-5 sm:gap-6 ${columnClasses}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
