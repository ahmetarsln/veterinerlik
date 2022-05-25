import * as actionTypes from "../actions/actionTypes";

const initialState = {
  appointments: [],
  appointment: {},
  loading: false,
  errors: {},
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_APPOINTMENT:
      return { ...state, currentRole: action.payload };
    case actionTypes.FETCH_APPOINTMENTS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_APPOINTMENTS_SUCCESS:
      return { ...state, appointments: action.payload };
    case actionTypes.FETCH_APPOINTMENTS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_APPOINTMENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_APPOINTMENT_SUCCESS:
      return { ...state, appointment: action.payload };
    case actionTypes.FETCH_APPOINTMENT_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.NEW_APPOINTMENT:
      return { ...state, appointment: {} };
    case actionTypes.SAVE_APPOINTMENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
        errors: {},
        loading: false,
      };
    case actionTypes.SAVE_APPOINTMENT_FAILED:
      return { ...state, errors: action.payload.data, loading: false };
    case actionTypes.UPDATE_APPOINTMENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.UPDATE_APPOINTMENT_SUCCESS: {
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
    case actionTypes.UPDATE_APPOINTMENT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    case actionTypes.DELETE_APPOINTMENT_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        appointments: state.appointments.filter((item) => item.id !== id),
      };
    }
    case actionTypes.DELETE_APPOINTMENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.DELETE_APPOINTMENT_FAILED:
      return { ...state, errors: action.payload, loading: false };

    default:
      return state;
  }
};

export default appointmentReducer;