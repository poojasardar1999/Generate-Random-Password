let passowrdBox = document.querySelector("#password");
let btn = document.querySelector("#btn");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#%^&*(){}[]><?/_-~+=";
const length = 12;
const allChars = upperCase + lowerCase + number + symbol;

btn.addEventListener("click", () => {
  let password = "";

  // password += Math.random() * upperCase;

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  console.log(password);

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  // password += allChars[Math.floor(Math.random() * allChars.length)];
  passowrdBox.value = password;
});
