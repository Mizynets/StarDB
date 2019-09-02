import React, { Component } from 'react';
import classes from './itemDetails.module.css';
import SwapiServices from '../../services/SwapiServices';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

class ItemDetails extends Component {

    sawpiServices = new SwapiServices();

    state = {
        itemDetails: {},
        image: null,
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevsProps) {
        if (prevsProps.itemId !== this.props.itemId) {
            this.updateItem();
        }
    }

    updateItem = () => {

        const { itemId, getData, getImage } = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    itemDetails: item,
                    loading: false,
                    image: getImage(item),
                })
            })
            .catch(error => {
                this.setState({
                    error,
                    loading: false,
                })
            })
    }


    render() {

        const { itemDetails, loading, error, image } = this.state

        if(JSON.stringify(itemDetails) === "{}"){
            return <p>Select the item</p>
        }

        const spinner = loading ? <Spinner /> : null;
        const errorMassage = error ? <ErrorIndicator /> : null;
        const itemDetailsView = !loading && !error ? <ItemDetailsView
            itemDetails={itemDetails}
            image={image}
            children={this.props.children}/> : null;

        return (
            <div className={classes.ItemDetails}>
                {spinner}
                {errorMassage}
                {itemDetailsView}
            </div>
        )
    }
}

const ItemDetailsView = ({ image, itemDetails, children}) => {
    const { name } = itemDetails;
    return (
        <React.Fragment>
            <div className={classes.Img__block}>
                <img src={image} alt="Details" />
            </div>

            <div className={classes.ItemDetails__info}>
                <h4>{name}</h4>
                <ul className={classes.List}>
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, {itemDetails});
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    );
}

const Record = ({ itemDetails, field, label }) => {
    return (
        <li className={classes.Item}>
            <span className={classes.Term}>{label}</span>
            <span> - {itemDetails[field]}</span>
        </li>
    );
}

export{
    Record,
}

export default ItemDetails;