let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h3.innerHTML = `${day} ${hours}:${minutes} `;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("h2").innerHTML = Math.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();
  let apiKey = "b5a060fd14db600c2025b09f195f5fa3";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5a060fd14db600c2025b09f195f5fa3&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
