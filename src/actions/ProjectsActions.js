import {  
  SWITCH_TAB
} from '../constants/Projects'

export function switchTab(tabId) {

  return (dispatch) => {
    dispatch({
      type: SWITCH_TAB,
      payload: tabId
    })    
  }
}