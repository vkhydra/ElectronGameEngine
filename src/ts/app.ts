const render = document.querySelector("#render");
const body = document.querySelector("body");

console.log(render);

function captureKey(): void {
  body.addEventListener("keydown", ({ key }) => {
    if (key == "ArrowUp" || key == "w") {
      console.log("cima");
    }
    if (key == "ArrowDown" || key == "s") {
      console.log("baixo");
    }
    if (key == "ArrowLeft" || key == "a") {
      console.log("esquerda");
    }
    if (key == "ArrowRight" || key == "d") {
      console.log("direita");
    }
  });
}
captureKey();
