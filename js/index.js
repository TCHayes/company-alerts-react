import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import LoginPage from './components/login-page';
import WatchlistPage from './components/watchlist-page';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

function checkAuth() {
  const accessToken = Cookies.get('accessToken'); //What's the accessToken going to be?
  if (!accessToken){
    browserHistory.replace('/login');
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={WatchlistPage} onEnter={checkAuth} />
      <Route path='/login' component={LoginPage} />
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
