let workTime = 1500;
let breakTime = 300;
let time = workTime;
let workMode = false;
let breakMode = false;
let active;

function startWork() {
  breakMode = false;
  workMode = true;
  time = workTime;
  active = setInterval(countdown, 1000);
}

function resumeWork() {
  active = setInterval(countdown, 1000);
}

function pauseWork() {
  clearInterval(active);
}

function stopWork() {
  clearInterval(active);
  time = workTime;
  workMode = false;
  breakMode = false;
  display(time); //this will want to update the DOM
}

function setWorkTime(entry) {
  workTime = entry;
}

function setBreakTime(entry) {
  breakTime = entry;
}

// done
function display(time) {
  let minutes = Math.round(time / 60);
  let seconds = Math.round(time % 60);

  let mString = stringify(minutes);
  let sString = stringify(seconds);

  return `${mString}:${sString}`
}

// done
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
  display(time); // this will want to update the DOM
  console.log(display(time));
  if(time <= 0){
    swap();
  }
}

function swap() {
  if (workMode == true) {
    console.log("break time!")
    workMode = false;
    breakMode = true;
    time = breakTime;
    //start timer
  } else {
    console.log("work time!")
    breakMode = false;
    workMode = true;
    time = workTime;
    //start timer
  }
}


