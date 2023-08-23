var code = [
    // konami code
    'ArrowUp', 
    'ArrowUp', 
    'ArrowDown', 
    'ArrowDown', 
    'ArrowLeft', 
    'ArrowRight', 
    'ArrowLeft', 
    'ArrowRight', 
    'b', 
    'a'
];
var count = 0;
var url = 'https://raw.githubusercontent.com/jraleman/cv/master/index.md';
var homeUrl = 'https://jraleman.com';

function renderRaw(raw) {
  var homePage = document.createElement('a');
  homePage.setAttribute('href', homeUrl);
  homePage.innerText = '<< Return to home page\n\n';
  var content = document.getElementById('content');
  content.style.display = 'none';
  var rawContent = document.getElementById("raw");
  rawContent.innerHTML += raw;
  rawContent.insertBefore(homePage, rawContent.childNodes[0])
}

function triggerAction() {
  fetch(url).then(function(res) {
    res.text().then(function(raw) {
      renderRaw(raw);
      window.scrollTo(0, 0);
    });
  });
}

var keyHandler = function(e) {
  if (code.indexOf(e.key) < 0 || e.key !== code[count]) {
    count = 0;
    return;
  }
  count += 1;
  if (code.length === count) {
    count = 0;
    triggerAction();
  }
};

document.addEventListener('keydown', keyHandler, false);
