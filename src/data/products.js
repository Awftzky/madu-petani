import honeyProductsImage from "../assets/images/products/madu.jpg";
import dorsataKolakaImage from "../assets/images/products/dorsata-kolaka.jpg";

export const products = [
  {
    id: "apis-dorsata-nektar-kelapa",
    name: "Apis Dorsata Nektar Kelapa",
    category: "Madu Hutan",
    size: "250 ml",
    price: 95000,
    image: honeyProductsImage,
    imageAlt: "Materi produk MADU PETANI yang menampilkan beberapa varian madu",
  },
  {
    id: "apis-mellifera-nektar-kaliandra",
    name: "Apis Mellifera Nektar Kaliandra",
    category: "Madu Ternak",
    size: "250 ml",
    price: 90000,
    image: honeyProductsImage,
    imageAlt: "Materi produk MADU PETANI yang menampilkan beberapa varian madu",
  },
  {
    id: "apis-mellifera-nektar-karet",
    name: "Apis Mellifera Nektar Karet",
    category: "Madu Ternak",
    size: "250 ml",
    price: 80000,
    image: honeyProductsImage,
    imageAlt: "Materi produk MADU PETANI yang menampilkan beberapa varian madu",
  },
  {
    id: "apis-mellifera-nektar-akasia",
    name: "Apis Mellifera Nektar Akasia",
    category: "Madu Ternak",
    size: "250 ml",
    price: 70000,
    image: honeyProductsImage,
    imageAlt: "Materi produk MADU PETANI yang menampilkan beberapa varian madu",
  },
  {
    id: "dorsata-kolaka",
    name: "Dorsata-Kolaka",
    category: "TBD",
    size: "TBD",
    price: null,
    image: dorsataKolakaImage,
    imageAlt: "Materi produk madu Dorsata-Kolaka",
  },
];

export function formatPrice(price) {
  return typeof price === "number"
    ? `Rp${new Intl.NumberFormat("id-ID").format(price)}`
    : "TBD";
}

export function getProductsSortedByPrice(productList) {
  return [...productList].sort(
    (first, second) =>
      (first.price ?? Number.POSITIVE_INFINITY) -
      (second.price ?? Number.POSITIVE_INFINITY),
  );
}
