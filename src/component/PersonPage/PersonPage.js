import React from 'react';
import classes from './PersonPage.module.css';
import { PersonList } from '../sw-pages/ItemLists';
import { PersonDetails } from '../sw-pages/ItemsDetails';

const PersonPage = ({history, match}) => {

  const { id } = match.params;
    return (
      <div className={classes.listPage}>
        <PersonList
          onSelectedItem={(id) => history.push(id)}
          renderLabel={(item) => `${item.name} ( ${item.birthYear} )`} />
        
        <PersonDetails itemId={id}/>
      </div>
    );
  }


export default PersonPage;