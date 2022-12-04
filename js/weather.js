const APIKEY = "eb042bcffd81c55e12bc5a755e3f4850";

function ongeook(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`;

  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function ongeoerror() {
  alert("I can't fine your location");
}

navigator.geolocation.getCurrentPosition(ongeook, ongeoerror);
