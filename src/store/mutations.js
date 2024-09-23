import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM_QUANTITY
} from "./types";

export default {
    [ADD_TO_CART](state, payload) {
        const foundInCart = state.inCart.some(item => item.id === payload.id);

        if(foundInCart) {
            state.inCart.map(item => {
                if(item.id === payload.id) {
                    item.amount = item.amount + payload.amount;
                }
                return item;
            })
        } else {
            state.inCart.push(payload)
        }
    },
    [UPDATE_CART_ITEM_QUANTITY](state, { id, quantity }) {
        const product = state.inCart.find(item => item.id === id);
        if (product) {
          product.quantity = quantity;
        }
      },
    [REMOVE_FROM_CART](state, {id}) {
        const productIndex = state.inCart.findIndex(cartItem => cartItem.id === id);
        state.inCart.splice(productIndex, 1);
    }
}