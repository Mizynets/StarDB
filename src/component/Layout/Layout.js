import React, { Component } from 'react';
import Header from '../Header/Header';
import SideDrawer from '../SideDrawer';

class Layout extends Component {

    state = {
        drawerToggle: false,
    }

    backDropClosedHandler = () => {
        this.setState({
            drawerToggle: false,
        })
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                drawerToggle: !prevState.drawerToggle, 
            }
        })
     
    } 


    render() {

        const { drawerToggle } = this.state;

        return (
            <React.Fragment>
                <Header drawerToggle={this.drawerToggleHandler} />
                <SideDrawer isOpen={drawerToggle} showBackdrop={this.backDropClosedHandler}/>
            </React.Fragment>
        );
    }
}

export default Layout;