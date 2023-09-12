let pwField: HTMLInputElement | null = document.querySelector(".pwField");
let pwLength: HTMLInputElement | null = document.querySelector(".pwLength");
let pwLengthDisplay: HTMLElement | null  = document.querySelector(".pwLengthDisplay");
let pwButton: HTMLButtonElement | null = document.querySelector(".pwButton");

let pwLengthValue: number = parseInt(pwLength?.value || "0", 10);

let lowerCaseArray: string[] = [];
let upperCaseArray: string[] = [];
let numberArray: number[] = [1,2,3,4,5,6,7,8,9,0];
let charsArray: string[] = [
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

if(pwLength){
  pwLength.addEventListener("input", (e) => {
    pwLengthValue = parseInt((e.target as HTMLInputElement)?.value);
    if(pwLengthDisplay){
      pwLengthDisplay.innerHTML = pwLengthValue.toString();
    }
  });
}

const generatePassWord = () => {
  let numbers = (document.querySelector(".numbers") as HTMLInputElement).checked  ;
  let lowercase = (document.querySelector(".lowercase") as HTMLInputElement).checked;
  let uppercase = (document.querySelector(".uppercase") as HTMLInputElement) .checked;
  let specialChars = (document.querySelector(".specialChars")as HTMLInputElement).checked;

  let sourceArray = [
    ...(lowercase ? lowerCaseArray : []),
    ...(uppercase ? upperCaseArray : []),
    ...(specialChars ? charsArray : []),
    ...(numbers ? numberArray : []),
  ];

  if(sourceArray.length === 0){
    if(pwField){
      pwField.value = ""
      return;
    } 

  }

  let password = "";

  for (let i = 0; i < pwLengthValue; i++) {
    let randomIndex = Math.floor(Math.random() * sourceArray.length);
    // password = password + sourceArray[randomIndex];
    password += sourceArray[randomIndex]
  }

  if(pwField){
    pwField.value = password;
  }
};

if(pwButton){
  pwButton.addEventListener("click",()=>generatePassWord())
}


