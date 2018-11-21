export class Weather {

    constructor(city, contryCode) {
        this.apikey = "b39cdf69e29fefd590819d388effadac"
        this.city = city;
        this.contryCode = contryCode
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.contryCode}&appid=${this.apikey}&inits=metric`
        const res = await fetch(URI);
        const data = await res.json()
        return data
    }

    changeLocation(city, contryCode) {
        this.city = city;
        this.contryCode = contryCode;
    }
}