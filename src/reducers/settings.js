import {  
  SWITCH_TAB,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_IMAGES
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
    reps: [{email:'rep1@vendor.test'},{email:'rep2@vendor.test'}],
    url: '',
    permits: [],
    associations: [],
    hours: {
      "monday":{
        "day":"Monday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "tuesday":{
        "day":"Tuesday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "wednesday":{
        "day":"Wednesday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "thursday":{
        "day":"Thursday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "friday":{
        "day":"Friday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "saturday":{
        "day":"Saturday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      },
      "sunday":{
        "day":"Sunday",
        "from_hours":"12",
        "from_minutes":"00",
        "to_hours":"12",
        "to_minutes":"00",
        "extra":""
      }
    }
  },
  images: []  
}


export default function settings(state = initialState, action) {
  switch (action.type) {        
    case SWITCH_TAB:
      return { ...state, currentTab: action.payload }    

    case UPDATE_PROFILE:
      return { ...state, profile: action.payload }

    case UPDATE_IMAGES:
      var data = []
      for(let i in action.payload['data']){                
        data.push({'path': "/data/extensions_data/haulers_images/"+action.payload['data'][i]['attributes']['HAULER_ID']+"/"+action.payload['data'][i]['attributes']['name']+"."+action.payload['data'][i]['attributes']['type'], id: action.payload['data'][i]['id']})
      } 
      return { ...state, images: data }        

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