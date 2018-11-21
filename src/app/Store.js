export class Store {
    constructor() {
        this.city;
        this.countrycode;
        this.defaultCity = 'London';
        this.defaultCountry = 'uk';
    }

    setLocationData(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }

    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }
}