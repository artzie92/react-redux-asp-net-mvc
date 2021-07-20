import Axios from 'axios';

const SET_PRODUCTS = 'Products.SET_PRODUCTS';
const SET_PRODUCT_DETAILS = 'Products.SET_PRODUCT_DETAILS';

const InitialState = {
    items: [],
    productDetails: {
        id: 0,
        name: '',
        picture: '',
        price: 0,
        category: '',
    },
};

const reducer = (state = InitialState, action) => {
    const { type, data } = action;

    switch (type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                items: data,
            };
        }
        case SET_PRODUCT_DETAILS: {
            return {
                ...state,
                productDetails: {
                    ...data,
                },
            };
        }
    }

    return state;
};

export default reducer;

export const ProductActions = {
    GetProducts: () => {
        return async (dispatch, getState) => {
            const response = await Axios.get(`/api/products/`);
            dispatch({
                type: SET_PRODUCTS,
                data: response.data,
            });
        };
    },
    GetProductDetails: (id) => {
        return async (dispatch, getState) => {
            const response = await Axios.get(`/api/products/${id}`);
            dispatch({
                type: SET_PRODUCT_DETAILS,
                data: response.data,
            });
        };
    },
};
