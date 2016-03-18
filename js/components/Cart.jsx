import React from 'react';
import AppStore from '../stores/AppStore.jsx';
import CartItem from './CartItem.jsx';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: AppStore.getCart()};
        this._onChange = this._onChange.bind(this);
    }
    componentWillMount() {
        AppStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState({items: AppStore.getCart()});
    }

    render() {
        var total = 0;
        var items = this.state.items.map((item, i) => {
            let subtotal = item.cost * item.qty;
            total += subtotal;
            return (
                <CartItem
                    subtotal={subtotal}
                    key={i}
                    item={item} />
            )
        })

        return (
            <div>
                <h1>Cart</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th></th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" className="text-right">Total</td>
                            <td>${total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
