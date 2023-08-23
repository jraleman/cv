function nextElement(e) {
  do {
    e = e.nextSibling;
  } while (e && e.nodeType !== 1);
  return e;
}

function hideSection(id, delim) {
  var element = document.getElementById(id);
  element.style.display = 'none';
  while (true) {
    var e = nextElement(element);
    if (!e || !e.nodeName || e.nodeName === delim) {
      if (e && e.nodeName === delim) {
        e.style.display = 'none';
      }
      break;
    }
    e.style.display = 'none';
    element = e;
  }
}

var handlePrint = function (e) {
  window.alert('Remember to change email and phone values! :)')
  var delim = 'HR';
  hideSection("about", delim);
  hideSection("awards", delim);
  hideSection("skills-misc", delim);
  hideSection("languages", delim);
}

var reloadPage = function (e) {
  if (e && e.returnValue) {
    window.location.reload();
  }
}

window.onbeforeprint = handlePrint;
window.onafterprint = reloadPage;
