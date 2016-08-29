import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import LoginContainer from './containers/Login'
import './styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore()

var currentContainer = <App />;
if(window.location.pathname == '/login'){	
	currentContainer = <LoginContainer />
}

render(
  <Provider store={store}>  	
    <div className='app'> {/* обернули все в .app */}
      {currentContainer}
    </div>
  </Provider>,
  document.getElementById('root')
)