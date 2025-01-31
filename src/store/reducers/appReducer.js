import { AppActions, successActionOf, failureActionOf } from "../actions"
var initialState = {
  searchglobalvalue: ""
};

export default function AppReducer(state = initialState, action) {

  switch (action.type) {

    case AppActions.SEARCH_GLOBAL:
      return { ...state, searchglobalvalue: action.payload }

    default:
      return state;
  }

}