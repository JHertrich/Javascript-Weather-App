var field = document.querySelector('.search-field');
var search = document.querySelector('.searchBtn');


var displayWrapper = document.querySelector('.display-wrapper');
var icon = document.querySelector('.weather-icon');
var temp = document.querySelector('.temperature-display');
var desc = document.querySelector('.weather-description');
var loc = document.querySelector('.location');

var appId = '9fc7ead5e50083b5c65a68809ff555fe';

var icons = [
    "images/01d@2x.png",
    "images/02d@2x.png",
    "images/09d@2x.png",
    "images/10d@2x.png",
    "images/11d@2x.png",
    "images/13d@2x.png",
    "images/50d@2x.png"
];
    
    

var icon = document.createElement('img');
icon.classList.add('icon');
displayWrapper.appendChild(icon);



search.addEventListener('click', getWeather);

function getWeather(ev) {
    console.log(field.value);
    var xhr = new XMLHttpRequest;

    xhr.open('GET',
        `http://api.openweathermap.org/data/2.5/weather?q=${field.value}&APPID=${appId}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            displayResults(response);
            showIcon(response);
        } 
        else{
            console.log('Something wrong');
        }
    }
    xhr.send();
    ev.preventDefault();
}

function displayResults(response) {
    tempCelsius = parseFloat(response.main.temp) - 273.15;;
    temp.innerHTML = '<h2>' + Math.round(tempCelsius) + '°C</h2>';
    desc.innerHTML = response.weather[0].main;
    loc.innerHTML = response.name;
}

function showIcon(response){
   
   if(response.weather[0].main === 'Clear'){
       icon.src = icons[0];
       document.body.style.backgroundImage = "url('images/Clear.jpg')";
       
   }
   if(response.weather[0].main === 'Clouds'){
       icon.src = icons[1];
       document.body.style.backgroundImage = "url('images/Clouds.jpg')";
   }
   if(response.weather[0].main === 'Rain'){
       icon.src = icons[2];
       document.body.style.backgroundImage = "url('images/Rain.jpg')";
   }
   if(response.weather[0].main === 'Drizzle'){
       icon.src = icons[3];
       document.body.style.backgroundImage = "url('images/Drizzle.jpg')";
   }
       
   if(response.weather[0].main === 'Thunderstorm'){
       icon.src = icons[4];
       document.body.style.backgroundImage = "url('images/Thunder.jpg')";
   }
   if(response.weather[0].main === 'Snow'){
       icon.src = icons[5];
       document.body.style.backgroundImage = "url('images/Snow.jpg')";
   }
}
   
    
   
 
   

   
   



   
   
   
    
    



















