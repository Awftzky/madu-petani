import { useEffect, useState } from "react";
import { formatPrice } from "../data/products";

const OrderScreen = ({ products }) => {
  const requestedProductId = new URLSearchParams(window.location.search).get(
    "product",
  );
  const initialProduct = products.some(
    (product) => product.id === requestedProductId,
  )
    ? requestedProductId
    : "";

  const [formValues, setFormValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    product: initialProduct,
    quantity: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.title = "Pesan / Kontak | MADU PETANI";
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("Mohon lengkapi data wajib dan periksa kembali alamat email.");
      form.querySelector(":invalid")?.focus();
      return;
    }

    const selectedProduct = products.find(
      (product) => product.id === formValues.product,
    );
    setStatus(
      `Data pesanan ${selectedProduct.name} sebanyak ${formValues.quantity} produk sudah disiapkan. Pengiriman formulir belum aktif.`,
    );
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <section className="mb-9 rounded-[2rem] bg-[#e8e2d2] px-6 py-9 sm:px-10 sm:py-12">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a9542e]">
          MADU PETANI
        </p>
        <h1 className="m-0 font-serif text-4xl font-bold text-[#17382f] sm:text-5xl">
          Pesan / Kontak
        </h1>
        <p className="mb-0 mt-4 max-w-2xl leading-7 text-[#555d53]">
          Isi formulir berikut untuk menyampaikan pertanyaan atau permintaan
          pesanan.
        </p>
        <p
          aria-live="polite"
          role="status"
          className="mb-0 mt-3 text-sm text-[#686d63]"
        >
          {status || "Pengiriman formulir belum aktif: TBD."}
        </p>
      </section>

      <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.8fr)]">
        <section className="rounded-2xl border border-[#1f4136]/10 bg-white p-6 shadow-[0_10px_35px_rgba(23,56,47,0.06)] sm:p-8">
          <h2 className="mb-6 mt-0 font-serif text-2xl font-bold text-[#17382f]">
            Formulir Pesan / Kontak
          </h2>
          <form className="space-y-5" noValidate onSubmit={handleSubmit}>
            <p className="m-0">
              <label className="block font-semibold text-[#41483f]" htmlFor="full-name">
                Nama lengkap
              </label>
              <input
                className="mt-2 block w-full rounded-lg border border-[#bec4ba] bg-white px-3 py-2.5 text-[#242a24] outline-none focus:border-[#1f4136] focus:ring-2 focus:ring-[#1f4136]/15"
                type="text"
                id="full-name"
                name="fullName"
                autoComplete="name"
                value={formValues.fullName}
                onChange={handleChange}
                required
              />
            </p>

            <p className="m-0">
              <label className="block font-semibold text-[#41483f]" htmlFor="phone">
                Nomor WhatsApp / telepon
              </label>
              <input
                className="mt-2 block w-full rounded-lg border border-[#bec4ba] bg-white px-3 py-2.5 text-[#242a24] outline-none focus:border-[#1f4136] focus:ring-2 focus:ring-[#1f4136]/15"
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                value={formValues.phone}
                onChange={handleChange}
                required
              />
            </p>

            <p className="m-0">
              <label className="block font-semibold text-[#41483f]" htmlFor="email">
                Email
              </label>
              <input
                className="mt-2 block w-full rounded-lg border border-[#bec4ba] bg-white px-3 py-2.5 text-[#242a24] outline-none focus:border-[#1f4136] focus:ring-2 focus:ring-[#1f4136]/15"
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </p>

            <p className="m-0">
              <label className="block font-semibold text-[#41483f]" htmlFor="product">
                Pilih produk
              </label>
              <select
                className="mt-2 block w-full rounded-lg border border-[#bec4ba] bg-white px-3 py-2.5 text-[#242a24] outline-none focus:border-[#1f4136] focus:ring-2 focus:ring-[#1f4136]/15"
                id="product"
                name="product"
                value={formValues.product}
                onChange={handleChange}
                required
              >
                <option value="">-- Pilih produk --</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name} ({formatPrice(product.price)})
                  </option>
                ))}
              </select>
            </p>

            <p className="m-0">
              <label className="block font-semibold text-[#41483f]" htmlFor="quantity">
                Jumlah
              </label>
              <input
                className="mt-2 block w-full rounded-lg border border-[#bec4ba] bg-white px-3 py-2.5 text-[#242a24] outline-none focus:border-[#1f4136] focus:ring-2 focus:ring-[#1f4136]/15"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={formValues.quantity}
                onChange={handleChange}
                required
              />
            </p>

            <p className="m-0">
              <label className="block font-semibold text-[#41483f]" htmlFor="message">
                Pesan / catatan
              </label>
              <textarea
                className="mt-2 block w-full rounded-lg border border-[#bec4ba] bg-white px-3 py-2.5 text-[#242a24] outline-none focus:border-[#1f4136] focus:ring-2 focus:ring-[#1f4136]/15"
                id="message"
                name="message"
                rows="5"
                value={formValues.message}
                onChange={handleChange}
              />
            </p>

            <button
              className="inline-flex rounded-full bg-[#a94725] px-6 py-3 font-bold text-white transition hover:bg-[#87391e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a94725]"
              type="submit"
            >
              Kirim
            </button>
          </form>
        </section>

        <aside className="rounded-2xl border border-[#1f4136]/10 bg-white p-6 shadow-[0_10px_35px_rgba(23,56,47,0.06)] sm:p-8">
          <h2 className="mb-4 mt-0 font-serif text-2xl font-bold text-[#17382f]">
            Kontak MADU PETANI
          </h2>
          <p className="mb-5 leading-7 text-[#555d53]">
            Temukan informasi MADU PETANI melalui akun Instagram resmi.
          </p>
          <a
            className="font-semibold text-[#1f4136] underline decoration-[#d18a35] underline-offset-4 hover:text-[#a9542e]"
            href="https://www.instagram.com/madupetani_"
          >
            Kunjungi Instagram MADU PETANI
          </a>
          <div className="mt-7 border-t border-[#1f4136]/10 pt-5 text-sm leading-6 text-[#686d63]">
            <p className="mb-2">Nomor WhatsApp: TBD.</p>
            <p className="m-0">Informasi kontak bisnis lainnya: TBD.</p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default OrderScreen;
