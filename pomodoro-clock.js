let workTime = 1500;
let breakTime = 300;
let time = workTime;
let workMode = true;
let active;
const displayTime = document.querySelector("#displayTime");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#backward");
const workSetButton = document.querySelector("#workSet");
const breakSetButton = document.querySelector("#breakSet");
const newWorkInterval = document.querySelector("#newWorkInterval")
const newBreakInterval = document.querySelector("#newBreakInterval")
const workInterval = document.querySelector("#workInterval")
const breakInterval = document.querySelector("#breakInterval")

function startWork() {
  active = setInterval(countdown, 1000);
}

function pauseWork() {
  clearInterval(active);
}

function reset() {
  time = workTime;
  workMode = true;
  display(time);
}

function stopWork() {
  clearInterval(active);
  time = workTime;
  workMode = true;
  display(time);
}

function setWorkTime(entry) {
  workTime = parseInt(entry) * 60;
  workInterval.value = workTime / 60;
}

function setBreakTime(entry) {
  breakTime = parseInt(entry) * 60;
  breakInterval.value = breakTime / 60;
}

function display(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.round(time % 60);

  let mString = stringify(minutes);
  let sString = stringify(seconds);

  displayTime.innerHTML = `${mString}:${sString}`
}

function stringify(number){
  let nString;
  if (number < 10) {
    nString = `0${number}`;
  } else {
    nString = `${number}`;
  }
  return nString;
}

function countdown() {
  time -= 1;
  display(time);
  console.log(display(time));
  if(time <= 0){
    swap();
  }
}

function swap() {
  if (workMode == true) {
    console.log("break time!")
    workMode = false;
    time = breakTime;
    display(time);
  } else {
    console.log("work time!")
    workMode = true;
    time = workTime;
    display(time);
  }
}

newWorkInterval.value = workTime / 60;
newBreakInterval.value = breakTime / 60;
workInterval.value = workTime / 60;
breakInterval.value = breakTime / 60;


display(time);

playButton.addEventListener("click", startWork);
pauseButton.addEventListener("click", pauseWork);
stopButton.addEventListener("click", stopWork);
resetButton.addEventListener("click", reset);
workSetButton.addEventListener("click", function(){
  let minutes = newWorkInterval.value;
  setWorkTime(minutes);
});
breakSetButton.addEventListener("click", function(){
  let minutes = newBreakInterval.value;
  setBreakTime(minutes);
});