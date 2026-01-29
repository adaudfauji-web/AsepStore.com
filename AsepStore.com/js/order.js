function orderWA(productName) {
  const phone = "6281234567890"; // ganti nomor WA kamu
  const message = `Halo AsepStore, saya mau order ${productName}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
