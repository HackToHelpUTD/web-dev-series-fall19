<p align="center"><img src="https://raw.githubusercontent.com/HackToHelpUTD/web_dev_series_fall19/master/.github/WITBxH2H_dark.png" height="200"><p>
<h1 align="center">Web Development Series Workshop: Part III (JavaScript)</h1>

### Application Overview
The application that you are required to modify is a weather application that tells the user the current weather based on his/her location. The application gets the geolocation of the user and uses the [OpenWeatherMap](https://openweathermap.org/current) "Current Weather API" to get the current weather by sending over the user's geographical coordinates as parameters to the API call.

The response looks similar to below.

```
{"coord":{"lon":139,"lat":35},
"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
"wind":{"speed":7.31,"deg":187.002},
"rain":{"3h":0},
"clouds":{"all":92},
"dt":1369824698,
"id":1851632,
"name":"Shuzenji",
"cod":200}
```

Parts of this response are parsed and sent over to be displayed to the user. The code responsible for doing this can be found in `src/js/main.js`.

**The API has been shown to deliver painstakingly slow results...be patient with the application.**

#### Code & Assets
The code and assets follow the following file structure

```
/
---- index.html
---- /src
-------- css/
------------ style.css
-------- imgs/
------------ weather-icons/
---------------- (all weather images in svg)
-------- js/
------------ main.js
```

### Questions? Concerns?
Email us at [hacktohelputd@gmail.com](mailto:hacktohelputd@gmail.com).