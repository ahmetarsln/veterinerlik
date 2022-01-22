import * as actionTypes from "../actions/actionTypes";

const initialState = {
  appointments: [],
  appointment: {},
  loading: false,
  errors: {},
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_APPOİNTMENT:
      return { ...state, currentRole: action.payload };
    case actionTypes.FETCH_APPOİNTMENTS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_APPOİNTMENTS_SUCCESS:
      return { ...state, appointments: action.payload };
    case actionTypes.FETCH_APPOİNTMENTS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_APPOİNTMENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_APPOİNTMENT_SUCCESS:
      return { ...state, appointment: action.payload };
    case actionTypes.FETCH_APPOİNTMENT_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_APPOİNTMENT:
      return { ...state, appointment: {} };
    case actionTypes.SAVE_APPOİNTMENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_APPOİNTMENT_SUCCESS:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_APPOİNTMENT_FAILED:
      return { ...state, errors: action.payload.data, loading: false };
    case actionTypes.UPDATE_APPOİNTMENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_APPOİNTMENT_SUCCESS: {
      const appointment =Object.assign({}, action.payload);
      return {
        ...state,
        appointments: state.appointments.map((item) =>
          item.id === appointment.id ? appointment : item
        ),
        errors: {},
        loading: false,
      };
    }
    case actionTypes.UPDATE_APPOİNTMENT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_APPOİNTMENT_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        appointments: state.appointments.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_APPOİNTMENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_APPOİNTMENT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default appointmentReducer;