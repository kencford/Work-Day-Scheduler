console.log('Javascript code starts here.');

//display current time
var currentMoment = moment();
var currentDay = currentMoment.format("ddd MMM-DD-YYYY");
console.log("currentDay: ", currentDay);

var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = currentDay;
