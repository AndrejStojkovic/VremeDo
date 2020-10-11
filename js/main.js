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

	var rabotni_dena = days - 7; 

	if(seconds % 10 == 1 && seconds != 11) sekunda = "секунда";
	else sekunda = "секунди";

	if(minutes % 10 == 1 && minutes != 11) minuta = "минута";
	else minuta = "минути";

	if(hours == 1 || hours == 21) chas = "час";
	else chas = "часа";

	if(days % 10 == 1 && days != 11) den = "ден";
	else den = "дена";

	if(month >= 8 && month <= 12) raspust = "зимски";
	else if(month >= 0 && month <= 5) raspust = "летен";

	document.getElementById("day-timer").innerHTML = days + den;
	document.getElementById("hms-timer").innerHTML = hours + chas + minutes + minuta + seconds + sekunda;
	document.getElementById("vd").innerHTML = raspust + " распуст:";
}, 1000);
