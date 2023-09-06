const api_key = "ff09ef5d7a5730952049fde2ada62440";
const inputData = document.querySelector("input");
const formData = document.querySelector("form");
const place = document.querySelector(".location");
const temprature = document.querySelector(".temprature");
const wind = document.querySelector(".wind");
const speed = document.querySelector("#speed");
const humid = document.querySelector(".humid");
const humid1 = document.querySelector(".humid1");
const feel = document.querySelector(".feel");
const description = document.querySelector(".description");
const degree = document.querySelector(".degree");
const todayDate = document.querySelector(".date");
const times = document.querySelector(".element2");
const error = document.querySelector(".error");
const icons = document.querySelector(".icons");
const greet="Good Morning"

formData.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputVal = inputData.value;
  async function getData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${api_key}&units=metric`
      );
      const data = await response.json();
      showData(data);

      console.log(data)
    } catch (error) {
      error.innerHTML=`City not `
    }
  }
  getData();
});
function showData(data) {
  const elem = data.main;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const air = data.wind.speed;
  const humidity = data.main.humidity;
  const desc = data.weather.forEach((element) => {
    description.innerHTML = `<p>${element.main}</p>`;
  });
  const png = data.weather.forEach((element) => {
    icons.innerHTML =`<img src="https://openweathermap.org/img/wn/${element.icon}.png" alt=""></img>`
  });
  temprature.innerHTML = `${temp}&deg;`;
  degree.innerHTML = `${temp}&deg;C`;
  wind.innerHTML = `<i class="ri-windy-line"></i>
<p>${air}m/s</p>`;
  speed.innerHTML = `<i class="ri-windy-line"></i>
<p>${air}m/s</p>`;
  humid.innerHTML = `<i class="ri-contrast-drop-line"></i>
<p>${humidity}%</p>`;
  humid1.innerHTML = `<i class="ri-contrast-drop-line"></i>
<p>${humidity}%</p>`;
  feel.innerHTML = `<p>Feels like ${feelsLike}&deg;</p>`;
  place.innerHTML = `${data.name},${data.sys.country}`;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

async function showPosition(position) {
 
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=74&lon=85&appid=${api_key}}`
    );
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
}
getLocation();

const date = new Date();
const curerntDate=date.toDateString()
todayDate.innerHTML=`${curerntDate}`


// clock
function clock(){


let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds()
let session="PM"
if(h==0){
  h=12
}
if(h>12){
  h=h-12;
  session="PM"
}``
h=(h<10)?+"0"+h:h;
m=(h<10)?+"0"+m:m;
s=(h<10)?+"0"+s:s;
let currentClock=`${h}:${m}:${s} ${session}`
times.innerHTML=`${currentClock}`
setTimeout(function(){
  clock()
},1000)
}
clock();
