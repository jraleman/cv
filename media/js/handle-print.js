import { hideSection } from './utils.js';

var handlePrint = function (e) {
  window.alert('Remember to change email and phone values! :)')
  var delim = 'HR';
  hideSection("about", delim);
  hideSection("awards", delim);
  hideSection("skills_misc", delim);
  hideSection("languages", delim);
}

var reloadPage = function (e) {
  if (e && e.returnValue) {
    window.location.reload();
  }
}

window.onbeforeprint = handlePrint;
window.onafterprint = reloadPage;
