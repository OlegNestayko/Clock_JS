setInterval(setClock, 1000);

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const clock = document.querySelector(".clock");
const span = document.querySelectorAll("span");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

/* Generate a random background-color for second line */

setInterval(generateColor, 1000);

function generateColor() {
  let color = "#";
  const colors = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * 16)];
  }

  for (let i = 0; i < span.length; i += 1) {
    span[i].style.backgroundColor = color;
  }
}
