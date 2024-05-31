if (!localStorage.getItem("localSecondsOnBrowserRestart")) {
  localStorage.setItem("localSecondsOnBrowserRestart", 0);
}

let secondsOnBrowserRestart = Number(
  localStorage.getItem("localSecondsOnBrowserRestart")
);

let timerStartDate;
let secondsSavedOnStop = 0;
let seconds = 0;

export function getTime() {
  let currentDate = Date.now();

  seconds =
    Math.floor((currentDate - timerStartDate) / 1000) +
    secondsSavedOnStop +
    secondsOnBrowserRestart;

  //Две строчки ниже нужны для избежания бага
  secondsSavedOnStop += secondsOnBrowserRestart;
  secondsOnBrowserRestart = 0;

  localStorage.setItem("localSecondsOnBrowserRestart", seconds);

  if (localStorage.getItem("recodTimeLoacal") < seconds) {
    localStorage.setItem("recodTimeLoacal", seconds);
  }

  return secondsToString(seconds);
}

export function secondsToString(seconds) {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;
  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  return `${hrs}:${mins}:${secs}`;
}

export function setTimerStartDate() {
  timerStartDate = Date.now();
}

export function saveSecondsOnStop() {
  secondsSavedOnStop = seconds;
}

export function resetTimerBusiness() {
  seconds = 0;
  secondsSavedOnStop = 0;
  localStorage.setItem("localSecondsOnBrowserRestart", 0);
}

// seconds =
//   Math.floor(currentDate - timerStartDate) +
//   secondsSavedOnStop +
//   secondsOnBrowserRestart;

// export function secondsToString(seconds) {
//   const date = new Date(seconds);

//   return `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
// }
