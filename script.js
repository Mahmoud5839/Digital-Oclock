

const clock = () => {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

// update clock
setInterval(clock, 1000);
clock();

// Change Mode
document.getElementById("toggleMode").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
})