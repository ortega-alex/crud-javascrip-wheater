require('./index.css');

const { Ui } = require('./Ui');
const ui = new Ui();

const { Store } = require('./Store');
const store = new Store();
const { city, countryCode } = store.getLocationData()

const { Weather } = require('./Weather');
const weather = new Weather(city, countryCode);

async function fetcgWeather() {
    const data = await weather.getWeather()
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    //console.log(city , countryCode)
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetcgWeather();
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', fetcgWeather)