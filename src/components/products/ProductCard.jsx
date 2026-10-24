import { formatPrice } from "../../data/products";

const ProductCard = ({ product }) => (
  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#1f4136]/10 bg-white shadow-[0_10px_35px_rgba(23,56,47,0.06)]">
    <a
      className="block overflow-hidden bg-[#eee9dc]"
      href={`/product-detail?product=${encodeURIComponent(product.id)}`}
      aria-label={`Lihat detail ${product.name}`}
    >
      <img
        className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-[1.02]"
        src={product.image}
        alt={product.imageAlt}
      />
    </a>
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a9542e]">
        {product.category}
      </p>
      <h3 className="m-0 font-serif text-xl font-bold leading-snug text-[#1f4136]">
        {product.name}
      </h3>
      <dl className="mb-6 mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
        <dt className="text-[#686d63]">Ukuran</dt>
        <dd className="m-0 font-medium">{product.size}</dd>
        <dt className="text-[#686d63]">Harga</dt>
        <dd className="m-0 font-semibold text-[#1f4136]">
          {formatPrice(product.price)}
        </dd>
      </dl>
      <a
        className="mt-auto inline-flex w-fit items-center gap-2 font-semibold text-[#1f4136] underline decoration-[#d18a35] underline-offset-4 hover:text-[#a9542e]"
        href={`/product-detail?product=${encodeURIComponent(product.id)}`}
      >
        Lihat detail <span aria-hidden="true">↗</span>
      </a>
    </div>
  </article>
);

export default ProductCard;
