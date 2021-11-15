//console.log('Javascript code starts here.');

//display current time
var currentMoment = moment();
var currentHour = currentMoment.format("H");
//console.log("currentHour: ", currentHour);
var currentMinute = currentMoment.format("m");
//console.log("currentMinute: ", currentMinute);

// var currentDay = currentMoment.format("dddd, MMM-DD-YYYY");

// var currentDayEl = document.getElementById("currentDay");
// currentDayEl.textContent = currentDay;

// document.querySelector('.time-block')
// document.querySelector('#hour-8').textContent('Updated text')

$("#currentDay").text(moment().format("dddd, MMM-DD-YYYY"));

// for (i = 9; i < 18; i++) (
//     moment('')
// )

function changeHourColors() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
        var hourValue = parseInt($(this).attr("id").split("-")[1]);
       // console.log("current hour", currentHour);
       // console.log("hour value", hourValue);

        if (hourValue < currentHour) {
            // past
            $(this).addClass("past");
        } else if (hourValue === currentHour) {
            //present
            $(this).removeClass('past');
            $(this).addClass("present");
        } else {
            //future$(this).removeClass('past');
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass("future");
        }

    })
}

// $("#aa").on("paste", pasteHandler);

changeHourColors();



function saveText() {
    // Get two values
    // the id of the element that they clicked save on
    // textarea value
    // set both to local storage

//localStorage.setItem('Ken', "lives in NJ")
//localStorage.getItem()
}



console.log(localStorage.getItem('Ken'))

$(".saveBtn").on("click", saveText);

