// fetch("https://timetable-lookup.p.rapidapi.com/codes/entertainment/").then((data)=>{
//     // console.log(data);
//     return data.json();
// }).then((objData)=>{
//     console.log(objData);
// })

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a7ceb66bd0msh8d1b87629a6655ap1ac00bjsnebe75a9f02a4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityName.innerHTML = city;
      // cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp + " °C";
      feels_like.innerHTML = response.feels_like + " °C";
      humidity.innerHTML = response.humidity + " %";
      humidity2.innerHTML = response.humidity + " %";
      min_temp.innerHTML = response.min_temp + " °C";
      max_temp.innerHTML = response.max_temp + " °C";
      wind_speed.innerHTML = response.wind_speed + " km/h";
      wind_speed2.innerHTML = response.wind_speed + " km/h";

      wind_degrees.innerHTML = response.wind_degrees;
      // sunrise.innerHTML = response.sunrise;
      // sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Kolkata");