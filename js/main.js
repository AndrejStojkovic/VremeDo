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
	
	if(days % 10 == 1 && days != 11) document.getElementById("day-timer").innerHTML = days + " ден";
	else document.getElementById("day-timer").innerHTML = days + " дена";
	
	if(hours == 1 || hours == 21) document.getElementById("htimer").innerHTML = hours + " час";
	else document.getElementById("htimer").innerHTML; = hours + " часа";
	
	if(minutes % 10 == 1 && minutes != 11)  document.getElementById("mtimer").innerHTML = minutes + " минута";
	else document.getElementById("mtimer").innerHTML = minutes + " минути";

	if(seconds % 10 == 1 && seconds != 11) document.getElementById("stimer").innerHTML = seconds + " секунда";
	else document.getElementById("stimer").innerHTML = seconds + " секунди";

	if(month > 8 && month <= 12) raspust = "зимски";
	else if(month >= 0 && month <= 5) raspust = "летен";

	document.getElementById("vd").innerHTML = raspust + " распуст:";
}, 1000);
