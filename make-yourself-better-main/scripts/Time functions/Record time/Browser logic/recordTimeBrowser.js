import {
  getRecordTime,
  recordTimeResetBusiness,
} from "../Business logic/recordTimeBusiness.js";
import { secondsToString } from "../../Timer/Business logic/timerBusiness.js";

const record_time_display = document.querySelector(".best-time");

const timer_stop_btn = document.getElementById("timer-stop-btn");
timer_stop_btn.addEventListener("click", recordTimeChangeDisplayValue);

const timer_reset_btn = document.getElementById("timer-reset-btn");
timer_reset_btn.addEventListener("click", recordTimeChangeDisplayValue);

const record_time_reset_btn = document.getElementById("record-time-reset-btn");
record_time_reset_btn.addEventListener("click", recordTimeResetBrowser);

//Меняет значение таймера при запуске сайта
if (localStorage.getItem("recodTimeLoacal") > 0) {
  record_time_display.innerText = secondsToString(
    localStorage.getItem("recodTimeLoacal")
  );
} else {
  record_time_display.innerText = secondsToString(0);
}

function recordTimeChangeDisplayValue() {
  record_time_display.innerText = getRecordTime();
}

function recordTimeResetBrowser() {
  recordTimeResetBusiness();
  record_time_display.innerText = secondsToString(0);
}
