const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.getElementById("title");

const superEventHandler = {
  mouseEnter: () => {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseLeave: () => {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  mouseDown: () => {
    title.innerText = "That was a mouse click!";
    title.style.color = colors[4];
  },
  windowResize: () => {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("contextmenu", superEventHandler.mouseDown);
window.addEventListener("resize", superEventHandler.windowResize);
