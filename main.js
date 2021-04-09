// DOM Elements
const time = document.getElementById("time"),
	  greeting = document.getElementById("greeting"),
	  name = document.getElementById("name"),
	  focus = document.getElementById("focus");

//Show Time 
function showTime() {
//	let today = new Date(2021, 04, 07, 17, 33, 30),
	let today = new Date(),	
    	hour = today.getHours(),
		min = today.getMinutes(),
    	sec = today.getSeconds();
	
    
//Output
	time.innerHTML = `${hour}<span>:<span>${addZero(min)}<span>:<span>${addZero(sec)}`;
	
	setTimeout(showTime, 1000);
}

//add zero
function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set Background and Greeting 
function serBgGreet() {
	let today = new Date(),
		hour = today.getHours();
	if (hour < 6) {
		document.body.style.backgroundImage = "url('img/night.jpg')";
		greeting.textContent = "Good Night";
	}
	else if (hour < 12) {
		document.body.style.backgroundImage = "url('img/morning.jpg')";
	
		greeting.textContent = "Good Morning";
	}
	else if (hour < 18) {
		document.body.style.backgroundImage = "url('img/afternoon.jpg')";
		greeting.textContent = "Good Afternoon";
	}
	else {
		document.body.style.backgroundImage = "url('img/evening.jpg')";
		greeting.textContent = "Good Evening";
	}
	
	
}

//Get Name 
function getName() {
	if (localStorage.getItem('name') === null) {
		name.textContent = '[Enter Name]';
		
	}
	else {
		name.textContent = localStorage.getItem('name');
	}
}

//set Name
function setName(e) {
	if (e.type === 'keypress') {
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}
	}
	else {
		localStorage.setItem('name', e.target.innerText);
	}
}

//Get Focus
function getFocus() {
	if (localStorage.getItem('focus') === null) {
		focus.textContent = '[Enter Focus]';
		
	}
	else {
		focus.textContent = localStorage.getItem('focus');
	}
}

//Set Focus
function setFocus(e) {
	if (e.type === 'keypress') {
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}
	}
	else {
		localStorage.setItem('focus', e.target.innerText);
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
serBgGreet();
getName();
getFocus();