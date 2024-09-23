import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM_QUANTITY
} from "./types";

export default {
    [ADD_TO_CART]({commit}, data) {
        return commit(ADD_TO_CART, data);
    },
    [REMOVE_FROM_CART]({commit}, {id, size}) {
        return commit(REMOVE_FROM_CART, {id, size});
    },
    [UPDATE_CART_ITEM_QUANTITY]({ commit }, payload) {
        commit(UPDATE_CART_ITEM_QUANTITY, payload);
    }
}