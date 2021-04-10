const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const weatherDescription = document.querySelector('.weatherDescription');
const city = document.querySelector('.city');


//get weather info from API
async function getWeather() {
  	const url = `https://api.openweathermap.org/data/2.5/weather?	q=${city.textContent}&lang=en&appid=a22a0229c938f98549e173a33c5ee9cc&units=metric`;
  	fetch(url)
	.then(response => response.json())
	.then(data => {
		
		weatherIcon.className = 'weather-icon owf';
  		weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  		temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  		weatherDescription.textContent = data.weather[0].description;
		humidity.textContent = `${data.main.humidity}%`;
		windSpeed.textContent = `${data.wind.speed} m/s`;
	})
	.catch(error => {
		city.textContent = 'did not find such a city'; 
	})

}


//get city from local storage
function getCity() {
	if (localStorage.getItem('city') === null) {	
	}
	else {
		city.textContent = localStorage.getItem('city');
	}
	getWeather();
}


//set city
function setCity(event) {
	if (event.type = "keypress") {
		if (event.which == 13 || event.keyCode == 13) {
			if (city.textContent != '') { 
				getWeather();			
			}
			if (localStorage.getItem('city') === null) {
				localStorage.setItem('city', event.target.innerText);
				city.blur();
			}
			else if (city.textContent == '') {
				city.textContent = localStorage.getItem('city');
				city.blur();
			}
			else {
				localStorage.setItem('city', event.target.innerText);
				city.blur();
			}
  		}
	}
}

city.addEventListener('keypress', setCity);
document.addEventListener('DOMContentLoaded', getWeather);


//Run
getCity();