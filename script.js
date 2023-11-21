//Month, Date, Day will be displayed
$(document).ready(function(){
  var day_names= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var date = new Date();
  $("#currentDay").text("Today is: " + day_names[date.getDay()]);
  var month_names = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var date = new Date();
  $("#dateFormat").text(date.getDate() + " " + month_names[date.getMonth()] + ", " + date.getFullYear());
  var date = new Date();
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
  $("#12HFormat").text(time);
});

// data storage pm ;ocal server//
const id = document.querySelector("input");
const placeholder = document.querySelector("true")

place.innerHTML = localStorage.getItem("true")

input.addEventListener("keyup" , display)
localStorage.setItem("KeyName" , input.value)

function display() {
  localStorage.setItem(value , input.value);
  aria.innerHTML = localStorage.getItem("true")
}

//script for box highlighting//
