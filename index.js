var endDate = '10 Jun';
var endYear = '2021';
var countDownDate = new Date(endDate + ', ' + endYear).getTime();

document.getElementsByClassName('currYear')[0].innerHTML = new Date().getFullYear();

var x = setInterval(function() {
	var now = new Date().getTime();
	var month = new Date().getMonth();
	
	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	if(days % 10 == 1 && days != 11) document.getElementById('day-timer').innerHTML = days + ' ден';
	else document.getElementById('day-timer').innerHTML = days + ' дена';
	
	if(hours == 1 || hours == 21) document.getElementsByClassName('hTimer')[0].innerHTML = hours + ' час';
	else document.getElementsByClassName('hTimer')[0].innerHTML = hours + ' часа';
	
	if(minutes % 10 == 1 && minutes != 11)  document.getElementsByClassName('mTimer')[0].innerHTML = minutes + ' минута';
	else document.getElementsByClassName('mTimer')[0].innerHTML = minutes + ' минути';

	if(seconds % 10 == 1 && seconds != 11) document.getElementsByClassName('sTimer')[0].innerHTML = seconds + ' секунда';
	else document.getElementsByClassName('sTimer')[0].innerHTML = seconds + ' секунди';

	if(month > 7 && month < 12) document.getElementById('vd').innerHTML = 'зимски распуст';
	else if(month > -1 && month < 5) document.getElementById('vd').innerHTML = 'летен распуст';
}, 500);
