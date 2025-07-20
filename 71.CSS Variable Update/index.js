let sliders = document.querySelectorAll('input[type="range"]');
let colors = document.querySelectorAll('input[type="color"]');


sliders.forEach((slider) => {
  slider.addEventListener("input", createBox);
});

colors.forEach((color) => {
  color.addEventListener("change", createBox);
});

function createBox() {
  let spacing = sliders[0].value;
  let blur = sliders[1].value;

  let bgColor = colors[0].value;

  let padding = `${spacing}px`;
  let filter = `blur(${blur}px)`;
  let backgoundColor = `${bgColor}`;

  document.getElementById(
    "content"
  ).style.cssText = `
    padding: ${padding};
  background-color: ${backgoundColor};
  filter: ${filter};
  `;
}

createBox();