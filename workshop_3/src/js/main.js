function init() {
  if (navigator.geolocation != null) {
    navigator.geolocation.getCurrentPosition(getWeather);
  }
}

function getWeather(position) {
  var URL = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&" + "appid=115d8a247511801926c11f972fb5d5b0";

  var request = new XMLHttpRequest();
  request.open("POST", URL);

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj_res = JSON.parse(this.response);
      var f_units = k_to_f(obj_res.main.temp);
      f_units = Math.round(f_units);
      console.log(obj_res);
      show_weather(f_units, obj_res.weather[0].main, obj_res.name, obj_res.sys.country);
    }
  }

  request.send();
}

function k_to_f(k_unit) {
  var f_unit = (k_unit - 273.15) * 9/5 + 32;

  return f_unit;
}

function show_weather(temp, status, name, country) {
  var name_element = document.getElementById("name");
  var country_element = document.getElementById("country");
  var temp_element = document.getElementById("temp");
  var img_element = document.getElementById("weather-img");

  name_element.innerHTML = name;
  country_element.innerHTML = country;
  temp_element.innerHTML = temp;
  img_element.src = "./src/imgs/weather-icons/" + status.toLowerCase() + ".svg";
}

document.addEventListener('DOMContentLoaded', init);