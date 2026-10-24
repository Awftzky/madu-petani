import logo from "../../assets/images/profile/logo.jpg";

const links = [
  { id: "home", label: "Beranda", href: "/" },
  { id: "products", label: "Produk", href: "/products" },
  { id: "product-detail", label: "Detail Produk", href: "/product-detail" },
  { id: "order", label: "Pesan / Kontak", href: "/order" },
];

const Navbar = ({ currentPage }) => {
  return (
    <header className="border-b border-[#1f4136]/15 bg-[#f7f4eb]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-4 sm:flex-row sm:px-8">
        <a className="flex items-center gap-3 text-[#1f4136] no-underline" href="/">
          <img className="h-11 w-11 rounded-full object-cover" src={logo} alt="" />
          <span className="text-lg font-extrabold tracking-[0.12em]">
            MADU PETANI
          </span>
        </a>

        <nav aria-label="Navigasi utama">
          <ul className="m-0 flex list-none flex-wrap justify-center gap-1 p-0 sm:gap-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  className={`inline-flex rounded-full px-3 py-2 text-sm font-semibold no-underline transition sm:px-4 ${
                    currentPage === link.id
                      ? "bg-[#1f4136] text-white"
                      : "text-[#41483f] hover:bg-[#1f4136]/10 hover:text-[#1f4136]"
                  }`}
                  href={link.href}
                  aria-current={currentPage === link.id ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
