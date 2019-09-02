import React from 'react';
import classes from './ItemList.module.css';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const ItemList = (props) => {
   
    const createListItem = (arr) => {
      
        return arr.map((item) => {
            const { id } = item;
            const label = props.renderLabel(item);
            return (
                <li
                    className={classes.Item}
                    key={id}
                    onClick={() => props.onSelectedItem(id)}
                >{label}</li>
            );
        })
    }
            const spinner = props.loading ? <Spinner /> : null;
            const errorMassage = props.error ? <ErrorIndicator /> : null;
            const listItem = !props.loading && !props.error ? createListItem(props.itemList) : null;
           
        return(
            <div className={`${classes.Item_list} ${classes.Scroll}`}>
                <ul className={classes.List}>
                    {spinner}
                    {errorMassage}
                    {listItem}
                </ul>
            </div>
        );
}

export default ItemList;