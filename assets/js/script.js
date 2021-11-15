//console.log('Javascript code starts here.');

//===================================
// just playing around with moment()
//===================================
//display current time
// var currentMoment = moment();
// var currentHour = currentMoment.format("H");
//console.log("currentHour: ", currentHour);
// var currentMinute = currentMoment.format("m");
//console.log("currentMinute: ", currentMinute);

// var currentDay = currentMoment.format("dddd, MMM-DD-YYYY");

// var currentDayEl = document.getElementById("currentDay");
// currentDayEl.textContent = currentDay;

// document.querySelector('.time-block')
// document.querySelector('#hour-8').textContent('Updated text')
//====================================
// OK leaving playground now
//====================================

$("#currentDay").text(moment().format("dddd, MMM-DD-YYYY"));

function changeHourColors() {
    var currentHour = moment().hour();
    $(".time-block").each(function () {
        // parseInt.split returns an array - getting 2nd element from it
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
    // console.log("saveBtn clicked");
    // Get id and text 
    id = $(this).parent().attr("id");
    // console.log("id: ", id);
    description = $(this).siblings(".description").val();
    // console.log(description);

    // save them
    localStorage.setItem(id, description);
    // the id of the element that they clicked save on
    // textarea value
    // sent both to local storage
}

// console.log(localStorage.getItem('hour-13'));

//restoring from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

$(".saveBtn").on("click", saveText);
