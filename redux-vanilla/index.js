const redux = require('redux');
const reduxLogger = require('redux-logger');
const axios = require('axios'); // Axios for network calls
const thunk = require('redux-thunk').default; // Thunk middleware for async operations

const logger = reduxLogger.logger;
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

// Initial States
const cakeState = {
  noOfCakes: 10,
};

const iceCreamState = {
  noOfIceCreams: 20,
};

const userState = {
  loading: false,
  data: [],
  error: '',
};

// Actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

// Actions Creators
const buyCake = () => ({
  type: BUY_CAKE,
});

const buyIceCream = () => ({
  type: BUY_ICE_CREAM,
});

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

// Async Action Creator. This action creator is belongs to thunk usually action creator return a action type
// But with the help of thunk its retuning a function to make the job simple
const fetchUsers = () => {
  // The below method is belongs to thunk which takes the dispatch as an argument
  return function (dispatch) {
    dispatch(fetchUser());
    axios
      .get('https://jsonplaceolder.typicode.com/users')
      .then((res) => {
        const user = res.data.map((x) => x.name);
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};

// Reducers
const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };

    default:
      return state;
  }
};

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

// Combining multiple reducers
const rootReducers = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  users: userReducer,
});

// Stores with middle ware as logger
const store = createStore(rootReducers, applyMiddleware(thunk));

// Adding Store Responsibility
// 1. Create Store
// 2. Get states from the store
// 3. Subscribe to the store
// 4. Dispatch action to manipulate the store
// 5. Unsubscribe store

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('Updated State', store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

store.dispatch(fetchUsers());
// unsubscribe();
