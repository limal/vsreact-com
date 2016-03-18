import {dispatch, register} from '../dispatchers/AppDispatcher.jsx';
import AppConstants from '../constants/Constants.jsx';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

var _catalog = [];

for (let i = 1; i < 9; i++) {
    _catalog.push({
        id: 'Widget' + i,
        title: 'Widget #' + i,
        summary: 'Summary',
        description: 'Some description',
        cost: i
    });
}

var _cartItems = [];

const _removeItem = item => {
    _cartItems.splice(_cartItems.findIndex(i => i === item), 1);
};

const _findItem = item => {
    return _cartItems.find(cartItem => cartItem.id === item.id);
};

const _increaseItem = item => item.qty++;
const _decreaseItem = item => {
    item.qty--;
    if (item.qty === 0) {
        _removeItem(item);
    }
};

const _addItem = (item) => {
    const cartItem = _findItem(item);

    if (!cartItem) {
        item.qty = 1;
        _cartItems.push(item);
    } else {
        _increaseItem(item);
    }
}

const _cartTotals = (qty = 0, total = 0) => {
    _cartItems.forEach(cartItem => {
        qty += cartItem.qty;
        total += cartItem.qty * cartItem.cost;
    })

    return {qty, total};
}

const AppStore = Object.assign(EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.remove(CHANGE_EVENT, callback);
    },
    getCart() {
        return _cartItems;
    },
    getCartTotals() {
        return _cartTotals();
    },
    getCatalog() {
        return _catalog.map(item => {
            return Object.assign({}, item, _cartItems, _cartItems.find(cartItem => cartItem.id === item.id));
        })
    },
    dispatcherIndex: register(function(action) {
        switch (action.actionType) {
            case AppConstants.ADD_ITEM:
                _addItem(action.item);
                break;

            case AppConstants.REMOVE_ITEM:
                _removeItem(action.item);
                break;

            case AppConstants.INCREASE_ITEM:
                _increaseItem(action.item);
                break;

            case AppConstants.DECREASE_ITEM:
                _decreaseItem(action.item);
                break;
        }

        AppStore.emitChange();
    })
});

export default AppStore;
