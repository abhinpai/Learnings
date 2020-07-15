const redux = require('redux');
const reduxLogger = require('redux-logger');
const axios = require('axios'); // Axios for network calls
const thunk = require('redux-thunk').default; // Thunk middleware for async operations

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const userState = {
  loading: false,
  data: [],
  error: '',
};

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const fetchUser = () => ({
  type: FETCH_USER_REQUEST,
});

const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        data: action.payload,
        loading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  // The below method is belongs to thunk which takes the dispatch as an argument
  return function (dispatch) {
    dispatch(fetchUser());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        dispatch(fetchUserSuccess(res.map((x) => x.id)));
      })
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};

const store = createStore(userReducer, applyMiddleware(thunk));

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('Updated State', store.getState())
);


store.dispatch(fetchUsers());
unsubscribe();