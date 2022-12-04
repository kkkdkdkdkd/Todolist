const color = ["#74D36D", "#EED3F9", "#5CD1E5"];

const click = document.getElementById("changecolor");

function colorChange() {
  const random = color[Math.floor(Math.random() * color.length)];
  document.body.style.backgroundColor = random;
}

click.addEventListener("click", colorChange);
