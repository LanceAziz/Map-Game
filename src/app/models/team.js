import { colorMapper } from "../utils/colors";
import { teams } from "../data/data";

export class Team {
    constructor(id, name, color, score = {}, countries = []) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.score = score;
        this.countries = countries;
    }

    isPurchaseValid(country) {
        if (
            this.score.gold >= country.price.gold &&
            this.score.silver >= country.price.silver &&
            this.score.bronze >= country.price.bronze
        ) {
            console.log("You have enough money to buy.");
            return true;
        } else {
            console.log("Not enough money.");
            return false;
        }
    }

    calculate(country, operator) {
        switch (operator) {
            case "+":
                this.score.gold += country.price.gold;
                this.score.silver += country.price.silver;
                this.score.bronze += country.price.bronze;
                break;
            case "-":
                this.score.gold -= country.price.gold;
                this.score.silver -= country.price.silver;
                this.score.bronze -= country.price.bronze;
                break;
            default:
                console.log("Error calculating: Operator not valid");
                return;
        }
        console.log(`Current Score => Gold: ${this.score.gold}, Silver: ${this.score.silver}, Bronze: ${this.score.bronze}`);
    }

    addCountry(country) {
        const alreadyExists = this.countries.some(cntry => cntry.id === country.id);

        // If not already assigned to this team and it's a valid purchase
        if (!alreadyExists && this.isPurchaseValid(country)) {
            // Check if the country is already assigned to another team
            if (country.assignedTeam && country.assignedTeam !== this.name) {
                // Find the old team and remove the country from its list
                const oldTeam = teams.find(team => team.name === country.assignedTeam);
                if (oldTeam) {
                    oldTeam.countries = oldTeam.countries.filter(cntry => cntry.id !== country.id);
                }
            }

            // Perform assignment to the new team
            this.calculate(country, "-");
            this.countries.push(country);
            console.log("Current Countries: ",JSON.stringify(this.countries));
            country.color = this.color;
            console.log("Country Color: ", country.color);  
            country.assignedTeam = this.name;
        } else if (alreadyExists) {
            console.log("Country already Exists.");
        }

        return this.score;
    }


    removeCountry(country) {
        const exists = this.countries.some(cntry => cntry.id === country.id);
        if (exists) {
            this.calculate(country, "+");
            this.countries = this.countries.filter(cntry => cntry.id !== country.id);
            country.color = null
            country.assignedTeam = null
        } else {
            console.log("Country not found in ypur Assets");
        }
        return this.score
    }
}
