// DOM Elements
const time = document.getElementById("time"),
	  date = document.getElementById("date"),
	  name = document.getElementById("name"),
	  focus = document.getElementById("focus");


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

//Get Name from loacl storage
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


//Get Focus from loacl storage
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

//Run
showTime();
showDate();
getName();
getFocus();

