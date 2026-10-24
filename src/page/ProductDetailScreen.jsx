import { useEffect } from "react";
import { formatPrice } from "../data/products";

const ProductDetailScreen = ({ product }) => {
  useEffect(() => {
    document.title = `${product.name} | MADU PETANI`;
  }, [product.name]);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <article className="grid overflow-hidden rounded-[2rem] border border-[#1f4136]/10 bg-white shadow-[0_18px_55px_rgba(23,56,47,0.08)] md:grid-cols-2">
        <div className="bg-[#eee9dc] p-5 sm:p-8">
          <img
            className="aspect-[4/3] h-full w-full rounded-2xl object-cover"
            src={product.image}
            alt={product.imageAlt}
          />
        </div>
        <div className="flex flex-col p-6 sm:p-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#a9542e]">
            Detail produk
          </p>
          <h1 className="m-0 font-serif text-3xl font-bold leading-tight text-[#17382f] sm:text-4xl">
            {product.name}
          </h1>

          <section className="mt-8 border-y border-[#1f4136]/10 py-6">
            <h2 className="mb-4 mt-0 text-base font-bold text-[#17382f]">
              Informasi Produk
            </h2>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3">
              <dt className="text-[#686d63]">Kategori</dt>
              <dd className="m-0 font-medium">{product.category}</dd>
              <dt className="text-[#686d63]">Ukuran</dt>
              <dd className="m-0 font-medium">{product.size}</dd>
              <dt className="text-[#686d63]">Harga</dt>
              <dd className="m-0 font-semibold text-[#1f4136]">
                {formatPrice(product.price)}
              </dd>
            </dl>
          </section>

          <section className="mt-6">
            <h2 className="mb-2 mt-0 font-serif text-xl font-bold text-[#17382f]">
              Deskripsi
            </h2>
            <p className="m-0 leading-7 text-[#555d53]">Deskripsi produk: TBD.</p>
          </section>

          <section className="mt-auto pt-8">
            <h2 className="mb-2 mt-0 font-serif text-xl font-bold text-[#17382f]">
              Pesan Produk
            </h2>
            <p className="mb-5 mt-0 leading-7 text-[#555d53]">
              Untuk menanyakan atau memesan produk ini, lanjutkan ke halaman
              Pesan / Kontak.
            </p>
            <a
              className="inline-flex rounded-full bg-[#a94725] px-5 py-3 font-bold text-white no-underline transition hover:bg-[#87391e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a94725]"
              href={`/order?product=${encodeURIComponent(product.id)}`}
            >
              Pesan {product.name}
            </a>
          </section>
        </div>
      </article>
    </main>
  );
};

export default ProductDetailScreen;
