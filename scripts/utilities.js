function getInnerText(id) {
  const element = document.getElementById(id).innerText;
  return element;
}
function setInnerText(id, text) {
  const element = document.getElementById(id);
  element.innerText = text;
}
