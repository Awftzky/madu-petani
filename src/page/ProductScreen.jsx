import { useEffect } from "react";
import ProductGrid from "../components/products/ProductGrid";
import { getProductsSortedByPrice } from "../data/products";

const ProductScreen = ({ products }) => {
  useEffect(() => {
    document.title = "Produk | MADU PETANI";
  }, []);

  const sortedProducts = getProductsSortedByPrice(products);

  return (
    <main className="mx-auto min-h-[70vh] max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <section className="mb-10 rounded-[2rem] bg-[#e8e2d2] px-6 py-9 sm:px-10 sm:py-12">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a9542e]">
          Katalog
        </p>
        <h1 className="m-0 font-serif text-4xl font-bold tracking-tight text-[#17382f] sm:text-5xl">
          Produk MADU PETANI
        </h1>
        <p className="mb-0 mt-4 max-w-2xl leading-7 text-[#555d53]">
          Temukan produk madu yang tersedia dari MADU PETANI.
        </p>
      </section>

      <section aria-labelledby="product-list-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2
            id="product-list-heading"
            className="m-0 font-serif text-2xl font-bold text-[#17382f] sm:text-3xl"
          >
            Daftar Produk
          </h2>
          <p className="m-0 text-sm text-[#686d63]">
            Informasi yang belum dikonfirmasi ditandai TBD.
          </p>
        </div>
        <ProductGrid products={sortedProducts} />
      </section>
    </main>
  );
};

export default ProductScreen;
