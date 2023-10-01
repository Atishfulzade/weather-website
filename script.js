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
const demo = document.querySelector(".demo");
const greeting = document.querySelector(".greet");


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

      console.log(data);
    } catch (error) {
      error.innerHTML = `City not `;
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
    icons.innerHTML = `<img src="https://openweathermap.org/img/wn/${element.icon}.png" alt=""></img>`;
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
  console.log(position.coords.latitude);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api_key}}`
    );
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
  fetchLocationName(position.coords.latitude, position.coords.longitude);
}
getLocation();

const date = new Date();
const curerntDate = date.toDateString();
todayDate.innerHTML = `${curerntDate}`;

const fetchLocationName = async (lat, lng) => {
  const res = await fetch(
    "https://www.mapquestapi.com/geocoding/v1/reverse?key=5F99bl2hQIDcO1eiqwCpoCKAjbqY1Twu&location=" +
      lat +
      "%2C" +
      lng +
      "&outFormat=json&thumbMaps=false"
  );
  const point = await res.json();
  console.log(point);
};

// clock

  function clock(){
    let date=new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
  
    let session = "AM";
    let greet = "Good morning";
    if (h ==0) {
      h = 12
    }
    if (h > 12) {
      h = h - 12;
      session = "PM";
      greet = "Good afternoon";
    }
    h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;
    let currentClock =h+":"+m+":"+s+" "+session;
    times.innerHTML = currentClock;
    greeting.innerHTML=greet;

  }
  setInterval(() => {
    clock()
    
  }, 1000);



 
 



const url =
  "https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "6763980c17msh6204558b8766f1ep125f62jsn3332e24212a0",
    "X-RapidAPI-Host": "AccuWeatherstefan-skliarovV1.p.rapidapi.com",
  },
  body: new URLSearchParams({
    locationKey: "<REQUIRED>",
  }),
};
async function accurate() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
accurate();
