import { secondsToString } from "../../Timer/Business logic/timerBusiness.js";

if (!localStorage.getItem("recodTimeLoacal")) {
  localStorage.setItem("recodTimeLoacal", 0);
}

export function getRecordTime() {
  return secondsToString(localStorage.getItem("recodTimeLoacal"));
}

export function recordTimeResetBusiness() {
  localStorage.setItem("recodTimeLoacal", 0);
}
