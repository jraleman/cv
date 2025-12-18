const CHEAT_CODE = [
  // konami code
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const REDIRECT_URL = "https://github.com/jraleman/";

// =================

let count = 0;
const code = CHEAT_CODE;
const url = REDIRECT_URL;

const keyHandler = function(e) {
  if (code.indexOf(e.key) < 0 || e.key !== code[count]) {
    count = 0;
    return;
  }
  count += 1;
  if (code.length === count) {
    count = 0;
    window.open(URL)
  }
};

document.addEventListener('keydown', keyHandler, false);
