var handlePrint = function() {
  function nextElement(el) {
    do {
      el = el.nextSibling;
    } while (el && el.nodeType !== 1);
    return el;
  }
  
  function hideSection(id, delim) {
    var section = document.getElementById(id);
    section.style.display = 'none';
    while (true) {
      var el = nextElement(section);
      if (!el || !el.nodeName || el.nodeName === delim) {
        if (el.nodeName === delim) {
          el.style.display = 'none';
        }
        break;
      }
      el.style.display = 'none';
      section = el;
    }
  }
  
  var delim = 'HR';
  // h1 === id
  hideSection("about", delim);
  hideSection("awards", delim);
  hideSection("languages", delim);
}

var returnToHome = function () {
  window.location.replace("http://www.jraleman.com");
}

//for chrome
window.matchMedia('print').addListener(function(mql) {
    mql.matches ? handlePrint() : returnToHome();
});

window.onbeforeprint = handlePrint;
window.onafterprint = returnToHome;
