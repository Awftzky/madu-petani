const products = [
  {
    id: "dorsata-kelapa-gorontalo",
    name: "Dorsata Kelapa Gorontalo",
    category: "Madu Hutan",
    size: "250 ml",
    price: 95000,
    // image: "assets/images/products/dorsata-kelapa-gorontalo.jpg",
    image: "assets/images/products/madu.jpg",
    imageAlt: "Produk madu Dorsata Kelapa Gorontalo ukuran 250 ml",
  },
  {
    id: "dorsata-kolaka",
    name: "Dorsata Kolaka",
    category: "Madu Hutan",
    size: "250 ml",
    price: 95000,
    image: "assets/images/products/dorsata-kolaka.jpg",
    imageAlt: "Produk madu Dorsata Kolaka ukuran 250 ml",
  },
  {
    id: "mellifera-kaliandra-sumatra",
    name: "Mellifera Kaliandra Sumatra",
    category: "Madu Ternak",
    size: "250 ml",
    price: 90000,
    // image: "assets/images/products/mellifera-kaliandra-sumatra.jpg",
    image: "assets/images/products/madu.jpg",
    imageAlt: "Produk madu Mellifera Kaliandra Sumatra ukuran 250 ml",
  },
  {
    id: "mellifera-karet-sumatra",
    name: "Mellifera Karet Sumatra",
    category: "Madu Ternak",
    size: "250 ml",
    price: 80000,
    // image: "assets/images/products/mellifera-karet-sumatra.jpg",
    image: "assets/images/products/madu.jpg",
    imageAlt: "Produk madu Mellifera Karet Sumatra ukuran 250 ml",
  },
  {
    id: "mellifera-akasia-sumatra",
    name: "Mellifera Akasia Sumatra",
    category: "Madu Ternak",
    size: "250 ml",
    price: 70000,
    // image: "assets/images/products/mellifera-akasia-sumatra.jpg",
    image: "assets/images/products/madu.jpg",
    imageAlt: "Produk madu Mellifera Akasia Sumatra ukuran 250 ml",
  },
];

function getProductsSortedByPrice(productList) {
  return [...productList].sort(
    (first, second) =>
      (first.price ?? Number.POSITIVE_INFINITY) -
      (second.price ?? Number.POSITIVE_INFINITY),
  );
}

function formatPrice(price) {
  return typeof price === "number"
    ? "Rp" + price.toLocaleString("id-ID")
    : "TBD";
}

function createProductCard(product, useDefinitionList) {
  const article = document.createElement("article");
  article.className =
    "flex h-full flex-col rounded-2xl border border-amber-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md";

  const heading = document.createElement("h3");
  heading.className = "mb-3 text-lg font-bold text-amber-950";
  heading.textContent = product.name;

  const image = document.createElement("img");
  image.className =
    "mb-4 aspect-[4/3] w-full rounded-xl bg-amber-100 object-cover";
  image.src = product.image;
  image.alt = product.imageAlt;

  const price = formatPrice(product.price);
  if (useDefinitionList) {
    const details = document.createElement("dl");
    details.className =
      "mb-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm";

    const productDetails = [
      ["Kategori", product.category],
      ["Ukuran", product.size],
      ["Harga", price],
    ];

    for (const [label, value] of productDetails) {
      const term = document.createElement("dt");
      term.className = "font-semibold text-stone-600";
      term.textContent = label;

      const description = document.createElement("dd");
      description.className = "m-0 text-stone-800";
      if (label === "Harga") {
        description.className = "m-0 font-semibold text-amber-900";
      }
      description.textContent = value;
      details.append(term, description);
    }

    article.append(heading, image, details);
  } else {
    const category = document.createElement("p");
    category.className = "mb-1 text-stone-700";
    category.textContent = "Kategori: " + product.category;

    const size = document.createElement("p");
    size.className = "mb-1 text-stone-700";
    size.textContent = "Ukuran: " + product.size;

    const priceText = document.createElement("p");
    priceText.className = "mb-5 font-semibold text-amber-900";
    priceText.textContent = "Harga: " + price;

    article.append(heading, image, category, size, priceText);
  }

  const link = document.createElement("a");
  link.className =
    "mt-auto font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950";
  link.href = "product-detail.html?product=" + encodeURIComponent(product.id);
  link.textContent = "Lihat detail " + product.name;

  article.append(link);
  return article;
}

function renderProducts(container, productList, useDefinitionList) {
  if (!container) {
    return;
  }

  container.replaceChildren();
  for (const product of productList) {
    container.append(createProductCard(product, useDefinitionList));
  }
}

function findSectionByHeading(headingText) {
  return Array.from(document.querySelectorAll("main section")).find(
    (section) => {
      const heading = section.querySelector("h2");
      return heading && heading.textContent.trim() === headingText;
    },
  );
}

function renderProductLists() {
  const featuredSection = findSectionByHeading("Produk MADU PETANI");
  const featuredGrid =
    featuredSection && featuredSection.querySelector(".grid");
  renderProducts(featuredGrid, products.slice(0, 2), false);

  const catalogSection = findSectionByHeading("Daftar Produk");
  const catalogGrid = catalogSection && catalogSection.querySelector(".grid");
  renderProducts(catalogGrid, getProductsSortedByPrice(products), true);
}

function renderProductDetail() {
  const article = document.querySelector("main article");
  if (!article) {
    return;
  }

  const requestedId = new URLSearchParams(window.location.search).get(
    "product",
  );
  const selectedProduct =
    products.find((product) => product.id === requestedId) || products[0];

  const heading = article.querySelector("h1");
  const image = article.querySelector("img");
  const detailValues = article.querySelectorAll("dl dd");
  const orderLink = article.querySelector("a[href^='order.html']");

  heading.textContent = selectedProduct.name;
  image.src = selectedProduct.image;
  image.alt = selectedProduct.imageAlt;
  detailValues[0].textContent = selectedProduct.category;
  detailValues[1].textContent = selectedProduct.size;
  detailValues[2].textContent = formatPrice(selectedProduct.price);
  orderLink.href =
    "order.html?product=" + encodeURIComponent(selectedProduct.id);
  orderLink.textContent = "Pesan " + selectedProduct.name;
  document.title = selectedProduct.name + " | MADU PETANI";
}

function initializeOrderForm() {
  const form = document.querySelector("form");
  if (!form || !window.jQuery) {
    return;
  }

  const $ = window.jQuery;
  const $status = $("main p")
    .filter(function () {
      return $(this).text().trim().startsWith("Pengiriman formulir");
    })
    .first();

  if (!$status.length) {
    return;
  }

  $status.attr("role", "status").attr("aria-live", "polite").hide();

  const requestedProductId = new URLSearchParams(window.location.search).get(
    "product",
  );
  if (products.some((product) => product.id === requestedProductId)) {
    $("#product").val(requestedProductId);
  }

  let orderDraft = null;

  $(form)
    .attr("novalidate", "novalidate")
    .on("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        orderDraft = null;
        $status
          .text("Mohon lengkapi data wajib dan periksa kembali alamat email.")
          .stop(true, true)
          .slideDown();

        const firstInvalidField = form.querySelector(":invalid");
        if (firstInvalidField) {
          firstInvalidField.focus();
        }
        return;
      }

      orderDraft = {
        name: form.elements.namedItem("full-name").value.trim(),
        phone: form.elements.namedItem("phone").value.trim(),
        email: form.elements.namedItem("email").value.trim(),
        productId: form.elements.namedItem("product").value,
        quantity: Number(form.elements.namedItem("quantity").value),
        message: form.elements.namedItem("message").value.trim(),
      };

      const orderedProduct = products.find(
        (product) => product.id === orderDraft.productId,
      );
      $status
        .text(
          "Data pesanan " +
            orderedProduct.name +
            " sebanyak " +
            orderDraft.quantity +
            " produk sudah disiapkan. Pengiriman formulir belum aktif.",
        )
        .stop(true, true)
        .slideDown();
    })
    .on("input change", function () {
      if ($status.is(":visible")) {
        $status.stop(true, true).slideUp();
      }
    });
}

renderProductLists();
renderProductDetail();
initializeOrderForm();
