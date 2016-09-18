import {  
  SWITCH_TAB,  
} from '../../constants/Statistics'

export function switchTab(tabId) {
  return (dispatch) => {        
    dispatch({
      type: SWITCH_TAB,
      payload: tabId      
    })    
  }
}