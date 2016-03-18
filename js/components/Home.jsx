import React from 'react';
import Cart from './Cart.jsx';
import Catalog from './Catalog.jsx';

export default class Home extends React.Component {
    render() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="naviation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        MENU
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <Cart />
                        <Catalog />
                    </div>
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
