function sendOrder() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const product = document.getElementById('product').value;

  const message = `سلام، بغيت نطلب:\n👟 المنتج: ${product}\n🧑 الاسم: ${name}\n📞 الهاتف: ${phone}\n📍 العنوان: ${address}`;

  const whatsappNumber = "212675924335"; // بدله برقمك
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
