function updateClock() {
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hrDeg = hr * 30 + min * 0.5;

  document.getElementById("second").style.transform =
    `translateX(-50%) rotate(${secDeg}deg)`;

  document.getElementById("minute").style.transform =
    `translateX(-50%) rotate(${minDeg}deg)`;

  document.getElementById("hour").style.transform =
    `translateX(-50%) rotate(${hrDeg}deg)`;

  document.getElementById("digitalClock").innerText =
    now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();