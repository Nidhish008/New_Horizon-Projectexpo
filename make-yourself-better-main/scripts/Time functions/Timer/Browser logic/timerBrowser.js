import {
  getTime,
  resetTimerBusiness,
  setTimerStartDate,
  saveSecondsOnStop,
  secondsToString,
} from "../Business logic/timerBusiness.js";

const time_display = document.querySelector(".timer");

const timer_start_btn = document.getElementById("timer-start-btn");
timer_start_btn.addEventListener("click", startTimerBrowser);

const timer_stop_btn = document.getElementById("timer-stop-btn");
timer_stop_btn.addEventListener("click", timerStopBrowser);

const timer_reset_btn = document.getElementById("timer-reset-btn");
timer_reset_btn.addEventListener("click", timerResetBrowser);

//Меняет значение таймера при запуске сайта
if (localStorage.getItem("localSecondsOnBrowserRestart") > 0) {
  time_display.innerText = secondsToString(
    localStorage.getItem("localSecondsOnBrowserRestart")
  );
} else {
  time_display.innerText = secondsToString(0);
}

let interval = null;
let isIntervalRunning = false;

function startTimerBrowser() {
  if (isIntervalRunning) {
    return;
  }
  isIntervalRunning = true;

  setTimerStartDate();

  interval = setInterval(changeTime, 1000);
}

function changeTime() {
  time_display.innerText = getTime();
}

function timerStopBrowser() {
  stopInterval();
  saveSecondsOnStop();
}

function timerResetBrowser() {
  stopInterval();
  resetTimerBusiness();
  time_display.innerText = secondsToString(0);
}

function stopInterval() {
  clearInterval(interval);
  isIntervalRunning = false;
}
