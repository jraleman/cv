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

// =================

let count = 0;
const code = CHEAT_CODE;

const keyHandler = function(e) {
  if (code.indexOf(e.key) < 0 || e.key !== code[count]) {
    count = 0;
    return;
  }
  count += 1;
  if (code.length === count) {
    count = 0;
    window.alert('Now try this on my website :)')
  }
};

document.addEventListener('keydown', keyHandler, false);
