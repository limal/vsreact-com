import React from 'react';

export default class CartButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button
                className="btn btn-default btn-sm"
                onClick={this.props.handler}>
                {this.props.txt}
            </button>
        )
    }
}
