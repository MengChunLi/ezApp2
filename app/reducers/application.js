'use strict'

import {APP} from '../constant'

/* First navigatore of each tab named [tab]Index */
const initialState = {
  tab: 'home',
  navigator: 'homeIndex'
}

export default function tab(state = initialState, action = {}) {
  switch (action.type) {
    case APP.TAB:
      return Object.assign({}, state, {
          tab: action.data,
          navigator: action.data + 'Index'
      });
    case APP.NAVIGATION:
      return Object.assign({}, state, {
        navigator: action.data
      });
    default:
      return state;
  }
}