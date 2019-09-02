
import WithData from '../hoc/WithData';
import ItemList from '../ItemList/ItemList';
import SwapiService from '../../services/SwapiServices';

const { 
        getAllPeople,
        getAllPlanets,
        getAllStarships,
     } = new SwapiService();

const PersonList = WithData(ItemList, getAllPeople);
const PlanetList = WithData(ItemList, getAllPlanets);
const StarshipList = WithData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList,
};