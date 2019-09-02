import React from 'react';
import classes from './Header.module.css';
import NavigationItems from '../NavigationItems';
import { NavLink } from 'react-router-dom';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Header = ({drawerToggle}) => {
    return (
        <React.Fragment>
            <div className={classes.Header}>
                <DrawerToggle clicked={drawerToggle}/>
                <h1 className={classes.Logo}><NavLink to="/">Star DB</NavLink></h1>
                <nav className={classes.Header__nav}>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>

    )
}

export default Header;
