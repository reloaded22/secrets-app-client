console.log("***The JS public file is Working***");

function showSecret(elem) {
  elem.childNodes[1].classList.remove("contract");
}
function hideSecret(elem) {
  elem.childNodes[1].classList.add("contract");
}