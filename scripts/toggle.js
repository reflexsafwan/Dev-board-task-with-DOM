function changeBackgroundColor() {
  let hex = "#" + Math.random().toString(16).slice(2, 8).padEnd(6, "0");
  document.body.style.backgroundColor = hex;
}
