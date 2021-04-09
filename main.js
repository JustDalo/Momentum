// DOM Elements
const time = document.getElementById("time"),
	  date = document.getElementById("date"),
	  greeting = document.getElementById("greeting"),
	  name = document.getElementById("name"),
	  focus = document.getElementById("focus");

const body = document.querySelector('body');
const btn = document.querySelector('.backgroundBtn');

//Show Time 
function showTime() {
//	let today = new Date(2021, 04, 07, 17, 33, 30),
	let today = new Date(),	
    	hour = today.getHours(),
		min = today.getMinutes(),
    	sec = today.getSeconds();
	  
	time.innerHTML = `${hour}<span>:<span>${addZero(min)}<span>:<span>${addZero(sec)}`;
	setTimeout(showTime, 1000);
}

//showDate
function showDate() {
	let monthdate = new Date(),
		dayOfWeek = monthdate.getDay(),
		day = monthdate.getDate(),
		month = monthdate.getMonth();
	
	let weekDay = new Array(7);
	weekDay[0] = "Sunday";
	weekDay[1] = "Monday";
	weekDay[2] = "Tuesday";
	weekDay[3] = "Wednesday";
	weekDay[4] = "Thursday";
	weekDay[5] = "Friday";
	weekDay[6] = "Saturday";
	let currWeekDay = weekDay[dayOfWeek];
	
	let Monthes = new Array(12);
	Monthes[0] = "January";
	Monthes[1] = "February";
	Monthes[2] = "March";
	Monthes[3] = "April";
	Monthes[4] = "May";
	Monthes[5] = "June";
	Monthes[6] = "July";
	Monthes[7] = "August";
	Monthes[8] = "September";
	Monthes[9] = "October";
	Monthes[10] = "November";
	Monthes[11] = "December";
	let currMonth = Monthes[month];
	
	date.innerHTML = `<span>Today <span>${currWeekDay}<span>, <span>${day}<span> <span>${currMonth}`;
}

//add zero
function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set Background and Greeting 
function setBgGreet() {
	let today = new Date(),
		hour = today.getHours();
	if (hour < 6) {
		document.body.style.backgroundImage = "url('img/Night/01.jpg')";
		greeting.textContent = "Good Night";
	}
	else if (hour < 12) {
		document.body.style.backgroundImage = "url('img/Morning/01.jpg')";
		greeting.textContent = "Good Morning";
	}
	else if (hour < 18) {
		document.body.style.backgroundImage = "url('img/Afternoon/03.jpg')";
		greeting.textContent = "Good Afternoon";
	}
	else {
		document.body.style.backgroundImage = "url('img/Evening/17.jpg')";
		greeting.textContent = "Good Evening";
	}	
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

const images = [];

function getBackGroundImages() {
	let random;
	for (let i = 0; i < 24; i++) {
		random = getRandomInt(20);
		images.push(random + ".jpg");
	}
	console.log(images);
}

const nightBase = 'img/Night/';
const morningBase = 'img/Morning/';
const afternoonBase = 'img/Afternoon/';
const eveningBase = 'img/Evening/';
let currTime = new Date(),
	currHour = currTime.getHours();
let j = currHour - 1;
function changeBackground() {
	let timeLeft = new Date(),
		hour = timeLeft.getHours(),
		min = timeLeft.getMinutes(),
		sec = timeLeft.getSeconds();
	const index = j % 24;
	let currBase;
	
	if (index < 6) {
		currBase = nightBase;
	}
	else if (index < 12) {
		currBase = morningBase;
	}
	else if (index < 18) {
		currBase = afternoonBase;	
	}
	else {
		currBase = eveningBase;	
	}	
	const imageSrc = currBase + images[index];
	console.log(imageSrc);
	viewBackGroundImg(imageSrc);
	j++;
	setTimeout(changeBackground, (60 - sec) * 1000);
}

let i = currHour;
function getImage() {
	const index1 = i % images.length;
	let currBase;
	
	if (index1 < 6) {
		currBase = nightBase;
	}
	else if (index1 < 12) {
		currBase = morningBase;
	}
	else if (index1 < 18) {
		currBase = afternoonBase;	
	}
	else {
		currBase = eveningBase;	
	}	
  	const imageSrc1 = currBase + images[index1];
  	viewBackGroundImg(imageSrc1);
  	i++;
  	btn.disabled = true;
  	setTimeout(function() { btn.disabled = false }, 1000);
} 

function viewBackGroundImg(src) {
	const img = new Image();
	img.src = src;
	console.log(src);
	img.onload = () => {      
    	body.style.backgroundImage = `url(${src})`;
  	}; 
}

//Get Name 
function getName() {
	if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
		name.textContent = '[Enter Name]';	
		localStorage.setItem('name', '[Enter Name]');
	}
	else {
		name.textContent = localStorage.getItem('name');
	}
}

//Set Name
function setName(e) {
	if (e.type === 'keypress') {
		if ((e.which == 13 || e.keyCode == 13) && name.textContent != '') {
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}
		else if ((e.which == 13 || e.keyCode == 13) && name.textContent == '') {
			name.textContent = localStorage.getItem('name');
			name.blur();
		}
	}
	else {
		if (name.textContent != '') {
			localStorage.setItem('name', e.target.innerText);
		}
		else {
			name.textContent = localStorage.getItem('name');
		}
	}
}


//Get Focus
function getFocus() {
	if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
		focus.textContent = '[Enter Focus]';
		localStorage.setItem('focus', '[Enter Focus]');
	}
	else {
		focus.textContent = localStorage.getItem('focus');
	}
}

//Set Focus
function setFocus(e) {
	if (e.type === 'keypress') {
		if ((e.which == 13 || e.keyCode == 13) && focus.textContent != '') {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}
		else if ((e.which == 13 || e.keyCode == 13) && focus.textContent == '') {
			focus.textContent = localStorage.getItem('focus');
			focus.blur();
		}
	}
	else {
		if (focus.textContent != '') {
			localStorage.setItem('focus', e.target.innerText);
		}
		else {
			focus.textContent = localStorage.getItem('focus');
		}
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

btn.addEventListener('click', getImage);

//Run
setBgGreet();
getBackGroundImages();
changeBackground();
showTime();
showDate();
getName();
getFocus();

