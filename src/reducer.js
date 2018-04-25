import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';

const reducer = combineReducers({
  comments,
  users
});


// const initialState = {
//     comments: [],
//     users: []
// };

// function reducer(state = initialState, action) {
//     return state;
// }

export default reducer;