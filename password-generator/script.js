let pwField = document.querySelector(".pwField");
let pwLength = document.querySelector(".pwLength");
let pwLengthDisplay = document.querySelector(".pwLengthDisplay");
let pwButton = document.querySelector(".pwButton");

let pwLengthValue = pwLength.value;

let lowerCaseArray = [];
let upperCaseArray = [];
let numberArray = [1,2,3,4,5,6,7,8,9,0];
let charsArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "<",
  ">",
  "/",
  "?",
];

for (let i = 97; i < 123; i++) {
  let letter = String.fromCharCode(i);
  lowerCaseArray.push(letter);
  upperCaseArray.push(letter.toUpperCase());
}

pwLength.addEventListener("input", (e) => {
  pwLengthValue = e.target.value;
  pwLengthDisplay.innerHTML = pwLengthValue;
});

const generatePassWord = () => {
  let numbers = document.querySelector(".numbers").checked;
  let lowercase = document.querySelector(".lowercase").checked;
  let uppercase = document.querySelector(".uppercase").checked;
  let specialChars = document.querySelector(".specialChars").checked;

  let sourceArray = [
    ...(lowercase ? lowerCaseArray : []),
    ...(uppercase ? upperCaseArray : []),
    ...(specialChars ? charsArray : []),
    ...(numbers ? numberArray : []),
  ];

  if(sourceArray.length === 0){
    pwField.value = ""
    return;

  }

  let password = "";

  for (let i = 0; i < pwLengthValue; i++) {
    let randomIndex = Math.floor(Math.random() * sourceArray.length);
    // password = password + sourceArray[randomIndex];
    password += sourceArray[randomIndex]
  }


  pwField.value = password;
};

pwButton.addEventListener("click",()=>generatePassWord())


