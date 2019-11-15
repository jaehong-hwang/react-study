import { createStore } from 'redux';

enum ActionsTypes {
  INCREASE_COUNT = "INCREASE_COUNT",
  DECREASE_COUNT = "DECREASE_COUNT",
  RESET_COUNT = "RESET_COUNT",
};

export const ActionCreators = {
  increaseCount: () => { type: ActionsTypes.INCREASE_COUNT },
  decreaseCount: () => { type: ActionsTypes.DECREASE_COUNT },
  resetCount: () => { type: ActionsTypes.RESET_COUNT },
};

type Action = 
  | { type: "INCREASE_COUNT" }
  | { type: "DECREASE_COUNT" }
  | { type: "RESET_COUNT" };

function reducer(state: number = 0, action: Action) {
  switch (action.type) {
    case "INCREASE_COUNT": {
      return state + 1;
    }
    case "DECREASE_COUNT": {
      return state - 1;
    }
    case "RESET_COUNT": {
      return 0;
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;