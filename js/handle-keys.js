import { triggerAction } from "./utils.js";
import { URL, HOME_URL, CHEAT_CODE } from './constants.js'

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
    triggerAction(URL, HOME_URL);
  }
};

document.addEventListener('keydown', keyHandler, false);
