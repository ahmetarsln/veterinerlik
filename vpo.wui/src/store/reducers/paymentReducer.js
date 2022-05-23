import * as actionTypes from "../actions/actionTypes";

const initialState = {
    payments: [],
    payment: {},
    loading: false,
    errors: {},
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_PAYMENT:
            return { ...state, currentPayment: action.payload };
        case actionTypes.FETCH_PAYMENTS_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_PAYMENTS_SUCCESS:
            return { ...state, payments: action.payload };
        case actionTypes.FETCH_PAYMENTS_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.FETCH_PAYMENT_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.FETCH_PAYMENT_SUCCESS:
            return { ...state, payment: action.payload };
        case actionTypes.FETCH_PAYMENT_FAILED:
            return { ...state, loading: false, errors: action.payload };
        case actionTypes.NEW_PAYMENT:
            return { ...state, payment: {} };
        case actionTypes.SAVE_PAYMENT_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.SAVE_PAYMENT_SUCCESS:
            return {
                ...state,
                payments: [...state.payments, action.payload],
                errors: {},
                loading: false,
            };
        case actionTypes.SAVE_PAYMENT_FAILED:
            return { ...state, errors: action.payload, loading: false };
        case actionTypes.UPDATE_PAYMENT_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.UPDATE_PAYMENT_SUCCESS: {
            const payment = Object.assign({}, action.payload);
            return {
                ...state,
                payments: state.payments.map((item) =>
                    item.id === payment.id ? payment : item
                ),
                errors: {},
                loading: false,
            };
        }
        case actionTypes.UPDATE_PAYMENT_FAILED:
            return { ...state, errors: action.payload, loading: false };

        case actionTypes.DELETE_PAYMENT_SUCCESS: {
            const id = action.payload;
            return {
                ...state,
                payments: state.payments.filter((item) => item.id !== id),
            };
        }
        case actionTypes.DELETE_PAYMENT_REQUESTED:
            return { ...state, loading: true };
        case actionTypes.DELETE_PAYMENT_FAILED:
            return { ...state, errors: action.payload, loading: false };

        default:
            return state;
    }
};

export default paymentReducer;