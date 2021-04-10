const body = document.querySelector('body');
const btn = document.querySelector('.backgroundBtn');
const greeting = document.getElementById("greeting");

const images = [];
const nightBase = 'img/Night/';
const morningBase = 'img/Morning/';
const afternoonBase = 'img/Afternoon/';
const eveningBase = 'img/Evening/';


function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

//fill array with random images
function getBackGroundImages() {
	let random;
	for (let i = 0; i < 24; i++) {
		random = getRandomInt(20);
		images.push(random + ".jpg");
	}
	console.log(images);
}

let currTime = new Date(),
	currHour = currTime.getHours();
let j = currHour - 1;

//change background every hour
function changeBackground() {
	let timeLeft = new Date(),
		hour = timeLeft.getHours(),
		min = timeLeft.getMinutes(),
		sec = timeLeft.getSeconds();
	const index = j % 24;
	let currBase;
	
	if (index < 6) {
		currBase = nightBase;
		greeting.textContent = "Good Night";
	}
	else if (index < 12) {
		currBase = morningBase;
		greeting.textContent = "Good Morning";
	}
	else if (index < 18) {
		currBase = afternoonBase;	
		greeting.textContent = "Good Afternoon";
	}
	else {
		currBase = eveningBase;	
		greeting.textContent = "Good Evening";
	}	
	const imageSrc = currBase + images[index];
	console.log(imageSrc);
	viewBackGroundImg(imageSrc);
	j++;
	setTimeout(changeBackground, (60 - sec) * 1000);
}


//change background with button
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

//set background image
function viewBackGroundImg(src) {
	const img = new Image();
	img.src = src;
	img.onload = () => {      
    	body.style.backgroundImage = `url(${src})`;
  	}; 
}


btn.addEventListener('click', getImage);

//Run
getBackGroundImages();
changeBackground();