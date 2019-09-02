import React from 'react';
import  './SideDrawer.css';
import SideDrawerNavigation from './SideDrawerNavigation/SideDrawerNavigation'
import Backdrop from '../Backdrop/Backdrop';

const SideDrawer = ({isOpen, showBackdrop}) => {

    let addToClass = ["SideDrawer", "Close"];
    
    if(isOpen){
         addToClass = ["SideDrawer", "Open"];
    }

    return (
        <React.Fragment>
            <Backdrop show={isOpen} clicked={showBackdrop}/>
                <div className={addToClass.join(" ")}>
                    <SideDrawerNavigation />
                </div>
        </React.Fragment>

    );
}

export default SideDrawer;