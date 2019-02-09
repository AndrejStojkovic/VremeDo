var countDownDate = new Date("Jun 10, 2019 12:00:00").getTime();

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

	if(seconds == 1 || seconds == 21 || seconds == 31 || seconds == 41 || seconds == 51) {
		sekunda = " секунда ";
	} else {
		sekunda = " секунди ";
	}

	if(minutes == 1 || minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51) {
		minuta = " минута ";
	} else {
		minuta = " минути ";
	}

	if(hours == 1 || hours == 21 || hours == 31 || hours == 41 || hours == 51) {
		chas = " час ";
	} else {
		chas = " часа ";
	}

	if(days == 1 || days == 21 || days == 31 || days == 41 || days == 51) {
		den = " ден ";
	} else {
		den = " дена ";
	}

	if(month >= 8 && month < 0) {
		raspust = "зимски";
	} else if(month >= 0 && month <= 5) {
		raspust = "летен";
	}

	document.getElementById("day-timer").innerHTML = days + den;
	document.getElementById("hms-timer").innerHTML = hours + chas + minutes + minuta + seconds + sekunda;
	document.getElementById("vd").innerHTML = raspust + " распуст:";
}, 1000);