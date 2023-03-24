const bodySelector = document.querySelector("body");
const h1 = document.createElement("h1");
h1.style.color = "white";
h1.innerText = "Hello!";
bodySelector.appendChild(h1);

function backgroundColorChange() {
  if (window.innerWidth > 700 && window.innerWidth < 900) {
    console.log(window.innerWidth);
    bodySelector.style.backgroundColor = "blue";
  } else if (window.innerWidth >= 900 && window.innerWidth < 1100) {
    console.log(window.innerWidth);
    bodySelector.style.backgroundColor = "purple";
  } else if (window.innerWidth >= 1100) {
    console.log(window.innerWidth);
    bodySelector.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", backgroundColorChange);
