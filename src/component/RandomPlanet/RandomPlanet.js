import React, { Component } from 'react';
import classes from './RandomPlanet.module.css';
import SwapiServices from '../../services/SwapiServices';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

class RandomPlanet extends Component {

    swapiServices = new SwapiServices();

    state = {
        planet: {},
        loading: true,
        error: false,
    }

    componentDidMount(){
        this.updatePlanet();
        this.timer = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    onLoadedData = (planet) =>{
        this.setState({
            planet,
            loading: false,
        })
    }

    onError = () =>{
        this.setState({
            error: true,
            loading: false,
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * (18 - 2 + 1)) + 2;
        this.swapiServices.getPlanet(id)
            .then(this.onLoadedData)
            .catch(this.onError)
    }

    render() {
        
        const { planet, loading, error } = this.state;

        const errorMassage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const planetView = !loading && !error ? <Planetview planet={planet}/> : null;
        
        return (
            <div className={classes.Random__planet}>
                {errorMassage}
                {spinner}
                {planetView}
            </div>
        )
    }
}

const Planetview = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter} = planet;

    return(
        <React.Fragment>
                <div className={classes.Img__block}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="RandomPlanet"/>
                </div>
                <div className={classes.Planet__info}>
                    <h4>{name}</h4>
                    <ul className={classes.List}>
                        <li className={classes.Item}>
                            <span className={classes.span}>Population </span>
                            <span className={classes.term}> {population}</span>
                        </li>
                        <li className={classes.Item}>
                            <span className={classes.span}>Rotation Period </span>
                            <span className={classes.term}> {rotationPeriod}</span>
                        </li>
                        <li className={classes.Item}>
                            <span className={classes.span}>Diameter </span>
                            <span className={classes.term}> {diameter}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
}

export default RandomPlanet;

