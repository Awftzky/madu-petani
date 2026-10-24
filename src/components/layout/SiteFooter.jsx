const SiteFooter = () => (
  <footer className="bg-[#17382f] text-[#f7f4eb]">
    <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div>
        <p className="m-0 font-bold tracking-[0.12em]">MADU PETANI</p>
        <p className="mt-2 text-sm text-[#d7dfd5]">
          Produk madu dari Sulawesi.
        </p>
      </div>
      <a
        className="w-fit font-semibold text-[#f2c56d] underline decoration-[#f2c56d]/60 underline-offset-4 hover:text-white"
        href="https://www.instagram.com/madupetani_"
      >
        Instagram MADU PETANI
      </a>
    </div>
  </footer>
);

export default SiteFooter;
