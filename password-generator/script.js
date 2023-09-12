var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var pwField = document.querySelector(".pwField");
var pwLength = document.querySelector(".pwLength");
var pwLengthDisplay = document.querySelector(".pwLengthDisplay");
var pwButton = document.querySelector(".pwButton");
var pwLengthValue = parseInt((pwLength === null || pwLength === void 0 ? void 0 : pwLength.value) || "0", 10);
var lowerCaseArray = [];
var upperCaseArray = [];
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var charsArray = [
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
for (var i = 97; i < 123; i++) {
    var letter = String.fromCharCode(i);
    lowerCaseArray.push(letter);
    upperCaseArray.push(letter.toUpperCase());
}
if (pwLength) {
    pwLength.addEventListener("input", function (e) {
        var _a;
        pwLengthValue = parseInt((_a = e.target) === null || _a === void 0 ? void 0 : _a.value);
        if (pwLengthDisplay) {
            pwLengthDisplay.innerHTML = pwLengthValue.toString();
        }
    });
}
var generatePassWord = function () {
    var numbers = document.querySelector(".numbers").checked;
    var lowercase = document.querySelector(".lowercase").checked;
    var uppercase = document.querySelector(".uppercase").checked;
    var specialChars = document.querySelector(".specialChars").checked;
    var sourceArray = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], (lowercase ? lowerCaseArray : []), true), (uppercase ? upperCaseArray : []), true), (specialChars ? charsArray : []), true), (numbers ? numberArray : []), true);
    if (sourceArray.length === 0) {
        if (pwField) {
            pwField.value = "";
            return;
        }
    }
    var password = "";
    for (var i = 0; i < pwLengthValue; i++) {
        var randomIndex = Math.floor(Math.random() * sourceArray.length);
        // password = password + sourceArray[randomIndex];
        password += sourceArray[randomIndex];
    }
    if (pwField) {
        pwField.value = password;
    }
};
if (pwButton) {
    pwButton.addEventListener("click", function () { return generatePassWord(); });
}
