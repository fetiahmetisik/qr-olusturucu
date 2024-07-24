var qrcode = new QRCode(document.querySelector(".qrcode"));
  qrcode.makeCode("github.com/fetiahmetisik");
function generateQr() {
  qrcode.makeCode(document.querySelector("input").value);
}
