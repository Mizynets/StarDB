import React from 'react';
import  classes from './StarshipPage.module.css';
import { StarshipList } from '../sw-pages/ItemLists';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({history}) => {

    const onSelectedItemClick = (id) => history.push(id);
    
        return(
            <div className={classes.listPage}>
                <StarshipList
                onSelectedItem={onSelectedItemClick}
                renderLabel={(item)=>`${item.name} ( ${item.crew} )`} 
                />            
            </div>
        );
    }

export default withRouter(StarshipPage);