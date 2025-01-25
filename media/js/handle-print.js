// import { hideSectionById } from './utils.js';

const handlePrint = function (e) {
  window.alert('Remember to change email and phone values! :)')
  const delim = 'HR';
  // hideSectionById("about", delim);
  // hideSectionById("awards", delim);
  // hideSectionById("skills_misc", delim);
  // hideSectionById("languages", delim);
}

const reloadPage = function (e) {
  if (e && e.returnValue) {
    window.location.reload();
  }
}

window.onbeforeprint = handlePrint;
window.onafterprint = reloadPage;
