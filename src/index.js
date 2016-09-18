import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import LoginContainer from './containers/Login'
import Statistics from './containers/Statistics'
import Settings from './containers/Settings'

import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore()

var currentContainer = <App />;
var location = window.location.pathname

if(location == '/login'){	
	currentContainer = <LoginContainer />
}
if(location == '/statistics'){	
	currentContainer = <Statistics />
}
if(location == '/settings'){	
	currentContainer = <Settings />
}

render(
  <Provider store={store}>  	
    <div className='app'> {/* обернули все в .app */}
      {currentContainer}
    </div>
  </Provider>,
  document.getElementById('root')
)