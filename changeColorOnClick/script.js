const changeBtn = document.getElementById("clickMe");

function colorFunc() {
  //RGB format
  changeBtn.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)})`;

  //hex format
  let alphabets = "abcdef1234567890";
  changeBtn.style.backgroundColor = `#${alphabets.charAt(
    Math.floor(Math.random() * alphabets.length)
  )}${alphabets.charAt(
    Math.floor(Math.random() * alphabets.length)
  )}${alphabets.charAt(
    Math.floor(Math.random() * alphabets.length)
  )}${alphabets.charAt(
    Math.floor(Math.random() * alphabets.length)
  )}${alphabets.charAt(
    Math.floor(Math.random() * alphabets.length)
  )}${alphabets.charAt(Math.floor(Math.random() * alphabets.length))}`;
}
