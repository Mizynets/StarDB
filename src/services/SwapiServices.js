
class SwapiServices {

    _apiBase = "https://swapi.co/api";
    _imgBase = "https://starwars-visualguide.com/assets/img";

    async getResource(url){
        const response = await fetch(`${this._apiBase}${url}` );
        if(!response.ok){
            throw new Error(`Could not fetch ${this._apiBase} recived ${response.status}` );
        }
        return response.json();
    }

    getImagePerson = ({id}) => {
        return `${this._imgBase}/characters/${id}.jpg`
    }

    getImagePlanet = ({id}) => {
        return `${this._imgBase}/planets/${id}.jpg`
    }

    getImageStarship = ({id}) => {
        return `${this._imgBase}/starships/${id}.jpg`
    }

    getAllPeople = async () => {
        const data = await this.getResource(`/people/`);
        return data.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const data = await this.getResource(`/planets/`);
        return data.results.map(this._transformPlanet);
    }
 
    getPlanet  = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const data = await this.getResource(`/starships/`);
        return data.results.map(this._transformStarship);
    }
 
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _extractId = (item) => {
        const isRegExp = /\/([0-9]*)\/$/;
        return item.url.match(isRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    }

}

export default SwapiServices;
