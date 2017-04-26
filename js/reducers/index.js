import * as actions from '../actions/index';
import update from 'immutability-helper';

const initialState = {
  username: '',
  allCompanies: [],
  userCompanies: [],
  error: null,
}

export default (state=initialState, action) => {
  return state;
};
