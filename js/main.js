// define local varabile
const searchBtn = document.getElementById('search-btn');
const apikey = `cdad2a1e462f4b79bcd192313222006`;
let fullData = []
let d = new Date;
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayName = days[d.getDay()];
let secondDayName = days[d.getDay() + 1];
let thirdDayName = days[d.getDay() + 2];

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let MonthName = monthNames[d.getMonth()];

document.getElementById('day-name').innerHTML = dayName;
document.getElementById('date-details').innerHTML = d.getDate() + ' ' + MonthName;

async function getData() {
    try {
        const searchInput = searchBtn.value ? searchBtn.value : "london";
        const apiUrl = ` http://api.weatherapi.com/v1/forecast.json?key=${apikey} &q=${searchInput}&&days=3`;

        const response = await fetch(apiUrl);
        fullData = await response.json();
        console.log(fullData)
            ;

    } catch (error) {

    }
}
async function displayData() {
    document.getElementById('name').innerHTML = fullData.location.name;
    document.getElementById('region').innerHTML = fullData.location.region;
    document.getElementById('temp').innerHTML = fullData.current.temp_c + "°C";
    document.getElementById('icon-1').innerHTML = ` <img  class=' w-50' src= "${fullData.current.condition.icon}" alt=""></img>`
    document.getElementById('condition-text').innerHTML = fullData.current.condition.text;
    document.getElementById('humdaity').innerHTML = fullData.current.humidity + ' %';
    document.getElementById('wind_kph').innerHTML = fullData.current.wind_kph + 'km/h'
    document.getElementById('wind_dir').innerHTML = fullData.current.wind_dir;

    /*==================//================*/
    document.getElementById('day-2-dayName').innerHTML = secondDayName;
    document.getElementById('icon-2').innerHTML = ` <img  class='text-center' src= "${fullData.forecast.forecastday[1].day.condition.icon}" alt=""></img>`
    document.getElementById('status').innerHTML = fullData.forecast.forecastday[1].day.condition.text ; 
    document.getElementById('temp2').innerHTML = fullData.forecast.forecastday[1].day.maxtemp_c +' °C '; 
    document.getElementById('avghumidity').innerHTML = fullData.forecast.forecastday[1].day.avghumidity+ '°'; 

    /*==================//================*/
    document.getElementById('day-3-dayName').innerHTML = thirdDayName;
    document.getElementById('icon-3').innerHTML = ` <img  class='text-center' src= "${fullData.forecast.forecastday[2].day.condition.icon}" alt=""></img>`
    document.getElementById('status2').innerHTML = fullData.forecast.forecastday[2].day.condition.text ; 
    document.getElementById('temp3').innerHTML = fullData.forecast.forecastday[2].day.maxtemp_c +' °C '; 
    document.getElementById('avghumidity2').innerHTML = fullData.forecast.forecastday[2].day.avghumidity+ '°'; 
}
async function All() {
    await getData();
    displayData();
}
All();



