

const cities = document.querySelector(".search input");
const search = document.querySelector(".search button");
const weatherImg = document.querySelector("#weather-img");
search.addEventListener("click",()=>{
	getWeater(cities.value);
})

const getWeater = async (city)=>{
	let promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34c51c98002a3fc56bce10307fc030bc`);
	if(promise.status == 404){
		document.querySelector(".error").style.display = 'block';
		document.querySelector(".img-weather-container").style.display = 'none';
		document.querySelector(".humidity-wind-container").style.display = 'none';
	}else{
		let data= await promise.json();
		//name
		document.querySelector("#city").innerText = data.name;
		//humidity
		document.querySelector("#humidity").innerText = `${data.main.humidity} %`;
		//wind
		document.querySelector("#wind").innerText = `${data.wind.speed} km/h`;
		console.log(data);
		document.querySelector("#degre").innerText = `${Math.round(data.main.temp - 273.15)}°c`;

		//weather img
		if(data.weather[0].main == 'Clouds'){
			weatherImg.src = "images/clouds.png";
		}else if(data.weather[0].main == 'Clear'){
			weatherImg.src = "images/clear.png";
		}else if(data.weather[0].main == 'Rain'){
			weatherImg.src = "images/rain.png";
		}else if(data.weather[0].main == 'Drizzle'){
			weatherImg.src = "images/drizzle.png";
		}else if(data.weather[0].main == 'Mist'){
			weatherImg.src = "images/mist.png";
		}
		document.querySelector(".img-weather-container").style.display = 'flex';
		document.querySelector(".humidity-wind-container").style.display = 'flex';
		document.querySelector(".error").style.display = 'none';
	}
	
}