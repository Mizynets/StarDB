import React from 'react';
import classes from './SideDrawerNavigation.module.css';
import { NavLink } from 'react-router-dom';


const SideDrawerNavigation = () => {
    return (
        <ul className={classes.List}>
            <li className={classes.Item}>
                <NavLink className={classes.Item__link} to="/people/" >People</NavLink>
            </li>
            <li className={classes.Item}>
                <NavLink className={classes.Item__link} to="/planet/" >Planets</NavLink>
            </li>
            <li className={classes.Item}>
                <NavLink className={classes.Item__link} to="/starship/" >StarShips</NavLink>
            </li>
        </ul>
    );

}

export default SideDrawerNavigation;