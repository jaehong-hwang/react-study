import { createStore } from 'redux';

enum ActionsTypes {
  INCREASE_COUNT = "INCREASE_COUNT",
  DECREASE_COUNT = "DECREASE_COUNT",
  RESET_COUNT = "RESET_COUNT",
};

export const ActionCreators = {
  increaseCount: () => ({ type: ActionsTypes.INCREASE_COUNT }),
  decreaseCount: () => ({ type: ActionsTypes.DECREASE_COUNT }),
  resetCount: () => ({ type: ActionsTypes.RESET_COUNT }),
};

export interface IState {
  countValue: number;
}

type Action = 
  | { type: "INCREASE_COUNT" }
  | { type: "DECREASE_COUNT" }
  | { type: "RESET_COUNT" };

function reducer(state: IState = { countValue: 0 }, action: Action): IState {
  switch (action.type) {
    case "INCREASE_COUNT": {
      return {
        ...state,
        countValue: state.countValue + 1
      };
    }
    case "DECREASE_COUNT": {
      return {
        ...state,
        countValue: state.countValue - 1
      };
    }
    case "RESET_COUNT": {
      return {
        ...state,
        countValue: 0
      };
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;