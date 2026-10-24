import { useEffect } from "react";
import ProductGrid from "../components/products/ProductGrid";
import honeyProductsImage from "../assets/images/products/madu.jpg";

const HomeScreen = ({ products }) => {
  useEffect(() => {
    document.title = "Beranda | MADU PETANI";
  }, []);

  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-20">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#a9542e]">
            Madu dari Sulawesi
          </p>
          <h1 className="m-0 max-w-2xl font-serif text-5xl font-bold leading-[1.04] tracking-tight text-[#17382f] sm:text-6xl lg:text-7xl">
            Kenali pilihan madu <span className="text-[#a9542e]">MADU PETANI</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#555d53] sm:text-lg">
            MADU PETANI adalah UMKM Indonesia yang mempromosikan dan menjual
            produk madu yang bersumber atau dipasok dari Sulawesi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex rounded-full bg-[#a94725] px-6 py-3 font-bold text-white no-underline transition hover:bg-[#87391e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a94725]"
              href="/products"
            >
              Lihat semua produk
            </a>
            <a
              className="inline-flex rounded-full border border-[#1f4136]/40 px-6 py-3 font-bold text-[#1f4136] no-underline transition hover:bg-[#1f4136]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f4136]"
              href="/order"
            >
              Pesan / Kontak
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3" aria-label="Kategori produk">
            <span className="rounded-full bg-[#e8e2d2] px-4 py-2 text-sm font-semibold text-[#1f4136]">
              Madu Hutan
            </span>
            <span className="rounded-full bg-[#e8e2d2] px-4 py-2 text-sm font-semibold text-[#1f4136]">
              Madu Ternak
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-[#d8bd83]/45" />
          <img
            className="relative aspect-[4/3] w-full rounded-[1.6rem] object-cover shadow-[0_24px_60px_rgba(23,56,47,0.16)]"
            src={honeyProductsImage}
            alt="Materi produk MADU PETANI yang menampilkan beberapa varian madu"
          />
          <p className="absolute -bottom-5 left-5 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#1f4136] shadow-lg sm:left-8">
            Produk MADU PETANI
          </p>
        </div>
      </section>

      <section className="bg-[#17382f] text-[#f7f4eb]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 sm:px-8 sm:py-12">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f2c56d]">
              Tentang merek
            </p>
            <h2 className="m-0 font-serif text-3xl font-bold">Tentang MADU PETANI</h2>
          </div>
          <p className="m-0 max-w-xl self-end leading-7 text-[#d7dfd5]">
            Informasi mengenai cerita merek, nilai utama, dan profil lengkap MADU
            PETANI: TBD.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a9542e]">
              Pilihan produk
            </p>
            <h2 className="m-0 font-serif text-3xl font-bold text-[#17382f] sm:text-4xl">
              Produk MADU PETANI
            </h2>
          </div>
          <a
            className="font-semibold text-[#1f4136] underline decoration-[#d18a35] underline-offset-4 hover:text-[#a9542e]"
            href="/products"
          >
            Lihat katalog <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ProductGrid products={products.slice(0, 2)} columns="two" />
      </section>

      <section className="border-y border-[#1f4136]/10 bg-[#eee9dc]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a9542e]">
            Bacaan singkat
          </p>
          <h2 className="mb-7 mt-0 font-serif text-3xl font-bold text-[#17382f] sm:text-4xl">
            Artikel &amp; Informasi Terbaru
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-2xl bg-[#fdfcf8] p-6 sm:p-8">
              <h3 className="m-0 font-serif text-xl font-bold text-[#1f4136]">
                Mengenal Kategori Produk Madu
              </h3>
              <p className="mb-0 mt-3 leading-7 text-[#555d53]">
                Informasi lebih lanjut mengenai kategori Madu Hutan dan Madu
                Ternak: TBD.
              </p>
            </article>
            <article className="rounded-2xl bg-[#fdfcf8] p-6 sm:p-8">
              <h3 className="m-0 font-serif text-xl font-bold text-[#1f4136]">
                Informasi Terbaru MADU PETANI
              </h3>
              <p className="mb-0 mt-3 leading-7 text-[#555d53]">
                Artikel dan kabar terbaru dari MADU PETANI: TBD.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto my-14 flex max-w-6xl flex-col gap-5 bg-[#a94725] px-6 py-8 text-white sm:my-20 sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:px-10 sm:py-10">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f8db9c]">
            Informasi pemesanan
          </p>
          <h2 className="m-0 font-serif text-3xl font-bold">Pesan atau hubungi kami</h2>
          <p className="mb-0 mt-3 max-w-2xl leading-7 text-[#fff0e6]">
            Gunakan halaman Pesan / Kontak untuk mengirimkan pertanyaan atau
            permintaan pesanan.
          </p>
        </div>
        <a
          className="inline-flex w-fit shrink-0 rounded-full bg-[#f7f4eb] px-5 py-3 font-bold text-[#87391e] no-underline transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          href="/order"
        >
          Buka halaman kontak
        </a>
      </section>
    </main>
  );
};

export default HomeScreen;
