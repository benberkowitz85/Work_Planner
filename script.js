$(document).ready(function () {

  // display current date and time
  var displayTime = document.querySelector("#currentDay");

  // Date display for day.js
  var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

  displayTime.textContent = currentTime;

  hourTracker();

  function hourTracker() {
    var currentHour = dayjs().hour();
    
  
    // time block loop
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      

      // color bar for past and current hours, as of typing this, maybe one day the future
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }


// receive and display data off the local storage
function displayText() {
  $(".time-block").each(function () {
    var blockHour = $(this).attr('id');
    $(this).children(".description").val(localStorage.getItem(blockHour));
  });
}
displayText();
});

// saves user input off the row id in l storeage
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // text remaining local storage
  localStorage.setItem(time, text);
});

//remove text - ideally one at a time
function DeleteItems() {
  localStorage.removeItem("hour-9");
  localStorage.removeItem("hour-10");
  localStorage.removeItem("hour-11");
  localStorage.removeItem("hour-12");
  localStorage.removeItem("hour-13");
  localStorage.removeItem("hour-14");
  localStorage.removeItem("hour-15");
  localStorage.removeItem("hour-16");
  localStorage.removeItem("hour-17");
  document.getElementById("item")
};

