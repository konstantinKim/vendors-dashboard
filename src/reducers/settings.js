import {  
  SWITCH_TAB,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS
} from '../constants/Settings'

const initialState = {  
  currentTab: 'settingsProfile',
  profile: {
    name: 'testname',
    contact: 'testcontact',
    street: 'street',
    zipcode: 'zipcode',
    debrisbox: 'false',
    hauling: 'false',
    selfhaul: 'false',
    phone_1: '',
    phone_2: '',
    phone_3: '',
    phone_4: '',
    email: '',
    url: ''
  }  
}


export default function settings(state = initialState, action) {
  switch (action.type) {        
    case SWITCH_TAB:
      return { ...state, currentTab: action.payload }    

    case UPDATE_PROFILE:
      return { ...state, profile: action.payload }      

    case UPDATE_PROFILE_SUCCESS:
      window.doMessage('Profile Updated', 'Success')
      if("true" == localStorage.getItem('isFirstLogin')){        
        localStorage.setItem('isFirstLogin', 'false');
        window.location = '/'
        return { ...state, profile: action.payload }
        

      }
      return { ...state, profile: action.payload }
              

    default:
      return state;
  }
}