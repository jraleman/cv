export function nextElement(e) {
  do {
    e = e.nextSibling;
  } while (e && e.nodeType !== 1);
  return e;
}

export function findUniqueElements(arr1, arr2) {
  return arr1.filter((element) => !arr2.includes(element));
}

export function hideSectionByTagName(tagName, delim, id) {
  const htmlCollection = document.getElementsByTagName(tagName);
  const elements = Array.from(htmlCollection);
  let filteredElement = elements.map((el) => el.id).filter((el) => el === id)[0];
  hideSectionById(filteredElement, delim)
}

export function hideSectionById(id, delim) {
  let element = document.getElementById(id);
  element.style.display = "none";
  while (true) {
    const e = nextElement(element);
    if (!e || !e.nodeName || e.nodeName === delim || e.nodeName === 'HR') {
      if (e && e.nodeName === delim) {
        e.style.display = "none";
      }
      break;
    }
    e.style.display = "none";
    element = e;
  }
}

export function renderRaw(raw, homeUrl) {
  const homePage = document.createElement("a");
  homePage.setAttribute("href", homeUrl);
  homePage.innerText = "<< Return to home page\n\n";
  const content = document.getElementById("content");
  content.style.display = "none";
  const rawContent = document.getElementById("raw");
  rawContent.innerHTML += raw;
  rawContent.insertBefore(homePage, rawContent.childNodes[0]);
}

export function triggerAction(url, homeUrl) {
  fetch(url).then(function (res) {
    res.text().then(function (raw) {
      renderRaw(raw, homeUrl);
      window.scrollTo(0, 0);
    });
  });
}
