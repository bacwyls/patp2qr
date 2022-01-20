$(document).ready ( function(){

function makeQR() {
  var patpin = document.getElementById("patp-in").value;

  if( patpin[0] != "~" ) patpin = "~" + patpin;

  var patp = document.getElementById("patp");
  patp.textContent = patpin;
  qrcode.clear();
  qrcode.makeCode(patpin);
}

button = document.getElementById('patp-submit');
button.addEventListener('click', makeQR);

var def_patp = "~zod";
var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: def_patp,
  width: 128,
  height: 128,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});
var patp = document.getElementById("patp");
patp.textContent = def_patp;
});

