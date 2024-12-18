const key = "61d9fe05facb1ac4aaffc9defcafad09";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbar = document.querySelector(".search-bar input");
const searchbutton = document.querySelector(".search-bar .icon");
const weathericon = document.querySelector(".weather-ico");
const text = document.querySelector(".text-weather");

async function weather(city) {
  const response = await fetch(url + city + `&appid=${key}`);
  var data = await response.json();

  const temp = document.querySelector(".temp");
  const city2 = document.querySelector(".city");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");

  city2.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "<sup>o</sup>c";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "./cloud.png";
    text.innerHTML = "it's cloudy";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "./clear-sky.png";
    text.innerHTML = "it's clear sky!!!!!!";
  } else if (data.weather[0].main == "Mist") {
    weathericon.src = "./mist.png";
    text.innerHTML = "it's mist Weather!!";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "./rain.png";
    text.innerHTML = "it's rainy day you have to bring umbrella or raincoat!!!";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "./drizzle.png";
    text.innerHTML = "it's a drizzle day!!";
  }
}

searchbutton.addEventListener("click", () => {
  weather(searchbar.value);
  console.log(weather(searchbar.value));
});
