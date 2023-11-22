$(document).ready(function () {

  // Create a variable and use query selector to display current date and time
  var displayTime = document.querySelector("#currentDay");

  // Use dayjs to display current date and time in given format
  var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

  displayTime.textContent = currentTime;

  // Set up a click listener for the saveBtn, capture the user input's row id, and store it in the local storage
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  });

  // keep track of time for past, present, and future
  function hourTracker() {
    var currentHour = dayjs().hour();
  
    // should block the boxes by tume
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
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
  hourTracker();

// allows time blocks loop to display the local storage data
function displayText() {
  $(".time-block").each(function () {
    var blockHour = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(blockHour));
  });
}
displayText();
});

//deletes empty storage 
 $("#clearFieldsBtn").click(function(event) {
    event.preventDefault;
    $("textArea").val("");
    localStorage.clear();
});
