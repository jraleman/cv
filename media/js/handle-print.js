// handle-print.js

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
  // <hr />
  var delim = 'HR';
  // h1 === id
  hideSection("about", delim);
  hideSection("awards", delim);
  hideSection("languages", delim);
}

var returnToHome = function (e) {
  if (e && e.returnValue) {
    window.location.replace("http://www.jraleman.com");
  }
}

//for chrome
window.matchMedia('print').addListener(function(mql) {
  mql.matches ? handlePrint() : returnToHome();
});

window.onbeforeprint = handlePrint;
window.onafterprint = returnToHome;
