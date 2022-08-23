const body = document.querySelector("body");
const button = document.querySelector("button");

const colors = ["black", "yellow", "green", "gray", "blue", "red", "#7a9669"];

button.addEventListener("click", changeBackGround);

let sıra = 0;

function changeBackGround() {
  const sırayla = colors[sıra];
  body.style.backgroundColor = sırayla;
  sıra++;
  if (sıra == 7) {
    sıra = 0;
  }
  return backgroundColor;
}
