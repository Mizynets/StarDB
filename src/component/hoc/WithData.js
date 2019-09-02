import React, { Component } from 'react';

const WithData = (View, getData) => {

    return class extends Component {

        state = {
            itemList: null,
            error: false,
            loading: true,
        }

        componentDidMount() {
            this.updateItems();
        }

        updateItems = () => {
            getData()
                .then((items) => {
                    this.setState({
                        itemList: items,
                        loading: false,
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
            const { itemList, error, loading } = this.state;

            return <View {... this.props} itemList={itemList} error={error} loading={loading} />
        }
    }
}

export default WithData;