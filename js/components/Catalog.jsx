import React from 'react';
import AppStore from '../stores/AppStore.jsx';
import CatalogItem from './CatalogItem.jsx';

export default class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: AppStore.getCatalog()}
    }

    render() {
        let items = this.state.items.map(item => {
            return <CatalogItem key={item.id} item={item} />
        })

        return (
            <div className="row">
                {items}
            </div>
        )
    }
}
