import axios from 'axios';

const GET_DATA = 'HELLO_RAILS_REACT/redux/GET_DATA';
const initialState = [];

export const fetchData = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3000/api/v1/greetings');
  return dispatch({ type: GET_DATA, payload: res.data.greeting });
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
