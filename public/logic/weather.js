/* http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d7a3d11d2bbd5c820ec01744141c20e2 */


const app = document.getElementById('root');
const container = document.createElement('div')
container.setAttribute('class', 'container');
app.appendChild(container)

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', ' http://api.openweathermap.org/data/2.5/forecast?lat=42.1234&lon=-71.5000&APPID=d7a3d11d2bbd5c820ec01744141c20e2', true)


request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
/* console.log(data.weather);
console.log(data.list[0].main.temp); */

 const card = document.createElement('div')
      card.setAttribute('class', 'card');
const temp = data.list[0].main.temp;
let convertedTemp = ((temp - 273.15) * 0.5555) + 32;
let roundedTemp = convertedTemp.toFixed(0);
  const h1 = document.createElement('h1')
  h1.textContent = roundedTemp;
  container.appendChild(card);
  card.appendChild(h1);


let showUser = data.list[0].main.temp;
showUser;
console.log("Temperature: " + temp + "K");


// Temperature Conversion From K to Degrees F

// Feels Like Conversion From K to Degrees F
let feelsLike = data.list[0].main.feels_like;
let convertedFeelsLike = ((feelsLike - 273.15) * 0.5555) + 32;


showUser;
console.log(data);
console.log("City: " + data.city.name);
console.log("Temperature: " + convertedTemp + "  F");
console.log("Feels Like: " + convertedFeelsLike + " F");
console.log("Weather Description: " + data.list[0].weather[0].description);
console.log("Humidity: " + data.list[0].main.humidity);
console.log("Clouds: " + data.list[0].clouds.all);
console.log("Sunset: " + data.city.sunset);
console.log("Sunrise: " + data.city.sunrise);
console.log("Current Elevation Above Sea Level: " + data.list[0].main.sea_level + "ft");
console.log("City Population: " + data.city.population);
console.log(data.list[0]);
}
// Begin accessing JSON data here

// Send request
request.send()

// Showing Data to Users


