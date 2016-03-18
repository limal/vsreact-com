import React from 'react';
import AppActions from '../actions/AppActions.jsx';
import CartButton from './CartButton.jsx';

export default class CatalogItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-3">
                <h4>{this.props.item.title}</h4>
                <img src="http://placehold.it/250x250" width="100%" className="img-responsive" />
                <p>{this.props.item.summary}</p>
                <p>{this.props.item.description}</p>
                <CartButton
                    handler={AppActions.addItem.bind(null, this.props.item)}
                    txt="Add to cart" />
            </div>
        )
    }
}
