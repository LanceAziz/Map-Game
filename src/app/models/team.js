export class Team {
    constructor(id, name, color, ranks = {}, countries = []) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.ranks = ranks;
        this.countries = countries;
    }

    addCountry(country) {
        if (!this.countries.includes(country)) {
            this.countries.push(country);
        }
        return this.countries;
    }

    removeCountry(country) {
        this.countries = this.countries.filter(i => i !== country);
        return this.countries;
    }
}
