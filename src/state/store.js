import {
    createStore,
    compose,
    applyMiddleware
  } from 'redux';
  import thunk from 'redux-thunk';
  import reducer from './reducer';
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export default createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument('https://api.openweathermap.org/data/2.5/weather?q=')),
    )
  )