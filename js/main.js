var endDate = "10 Jun";
var endYear = "2021";
var countDownDate = new Date(endDate + ", " + endYear + " 12:00:00").getTime();

var x = setInterval(function() {
	var now = new Date().getTime();
	var month = new Date().getMonth();
	var raspust;

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	var sekunda, minuta, chas, den;
	var dayTimer = document.getElementById("day-timer").innerHTML;
	var hTimer = document.getElementById("htimer").innerHTML;
	var mTimer = document.getElementById("mtimer").innerHTML;
	var sTimer = document.getElementById("stimer").innerHTML;
	
	if(days % 10 == 1 && days != 11) dayTimer = days + " ден";
	else dayTimer = days + " дена";
	
	if(hours == 1 || hours == 21) hTimer = hours + " час";
	else hTimer = hours + " часа";
	
	if(minutes % 10 == 1 && minutes != 11)  mTimer = minutes + " минута";
	else mTimer = minutes + " минути";

	if(seconds % 10 == 1 && seconds != 11) sTimer = seconds + " секунда";
	else sTimer = seconds + " секунди";

	if(month > 8 && month <= 12) raspust = "зимски";
	else if(month >= 0 && month <= 5) raspust = "летен";

	document.getElementById("day-timer").innerHTML = days + den;
	document.getElementById("hms-timer").innerHTML = hours + chas + minutes + minuta + seconds + sekunda;
	document.getElementById("vd").innerHTML = raspust + " распуст:";
}, 1000);
