// PROCESS

function Encryption() {
  let myString = document.getElementById("plaintext").value;
  let myPassword = document.getElementById("secretkey").value;
  var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
  document.getElementById("ciphertext").innerHTML = encrypted;
}
function Decryption() {
  let encrypted = document.getElementById("ciphertext").value;
  let myPassword = document.getElementById("secretkey").value;
  var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
  document.getElementById("plaintext").innerHTML = decrypted.toString(
    CryptoJS.enc.Utf8
  );
}

document.getElementById("cp").onclick = function () {
  document.getElementById("plaintext").select();
  document.execCommand("copy");
};

document.getElementById("cc").onclick = function () {
  document.getElementById("ciphertext").select();
  document.execCommand("copy");
};
