import * as actions from '../actions/index';
import update from 'immutability-helper';

const initialState = {
  username: '',
  allCompanies: [
    {name:"Alphabet", toggled: false}, {name:"Amazon", toggled: false},
    {name:"Apple", toggled: false}, {name:"Facebook", toggled: false},
    {name:"IBM", toggled: false}, {name:"Intel", toggled: false},
    {name:"Microsoft", toggled: false}, {name:"Netflix", toggled: false},
    {name:"NVIDIA", toggled: false}, {name:"Tesla", toggled: false}
  ],
  userCompanies: [],
  error: null,
}

export default (state=initialState, action) => {
  if (action.type === actions.TOGGLE_COMPANY) {
    return update(state, {
      allCompanies: {
        [action.target]: {
          toggled: {$set: !state.allCompanies[action.target].toggled}
        }
      }
    });
  }
  return state;
};
