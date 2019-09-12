import React, { Component } from 'react';
import classes from './PlanetPage.module.css';
import SwapiServices from '../../services/SwapiServices';
import { PlanetList } from '../../component/sw-pages/ItemLists';
import { PlanetDetails } from '../../component/sw-pages/ItemsDetails';

class PlanetPage extends Component {

    swapiServices = new SwapiServices();

    state = {
        selectedItem: null,
    }

    onItemSelected = (id) => {
        this.setState({
          selectedItem: id,
        })
      }

    render(){
        return(
            <div className={classes.listPage}>
                <PlanetList
                onSelectedItem={this.onItemSelected}
                renderLabel={(item)=>`${item.name} ( ${item.diameter} )`} 
                />

                <PlanetDetails itemId={this.state.selectedItem} />            
            </div>
        );
    }
}

export default PlanetPage;
