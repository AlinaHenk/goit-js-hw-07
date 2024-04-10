const btn = document.querySelector("button");

btn.addEventListener("click", event => {
  const colorCode = getRandomHexColor();
  const body = document.querySelector("body");
  body.setAttribute("style", `background-color: ${colorCode}`);
  const color = document.querySelector(".color");
  color.setAttribute("style", `color: ${colorCode}`);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
