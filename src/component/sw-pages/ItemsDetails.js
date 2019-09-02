import React from 'react';
import SwapiServices from '../../services/SwapiServices';
import ItemDetails, { Record } from '../itemDetails/itemDetails';

const {
    getPerson,
    getImagePerson,
    getPlanet,
    getImagePlanet,
    getStarship,
    getImageStarship,
} = new SwapiServices();

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImage={getImagePerson}>

            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
}

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            getData={getPlanet}
            getImage={getImagePlanet}
            itemId={itemId}>

            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
}

const StarshipDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImage={getImageStarship}>

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    );
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
}