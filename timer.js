"use strict";
const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let time = 0;
let startFlag = null;

startBtn.addEventListener("click", function () {
   if (startFlag) {
      return;
   }
   startFlag = setInterval(() => {
      time++;
      updateTimer();
   }, 1000);
   stopBtn.addEventListener("click", function () {
      clearInterval(startFlag);
      startFlag = null;
   });
});

resetBtn.addEventListener("click", function () {
   time = 0;
   updateTimer();
});

function updateTimer() {
   const h = Math.trunc((time / 3600) % 60)
      .toString()
      .padStart(2, "0");
   const m = Math.trunc((time / 60) % 60)
      .toString()
      .padStart(2, "0");
   const s = (time % 60).toString().padStart(2, "0");
   timer.innerHTML = `${h}<span>I</span>${m}<span>I</span><b>${s}</b>`;
}
