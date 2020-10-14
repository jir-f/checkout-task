import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Reconciliation } from './pages';
import { GlobalStyle } from './styles';

function App() {
  return (
    <div className="checkout">
       <Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Redirect exact from='/' to='/reconciliation' />
            <Route exact path='/reconciliation' component={Reconciliation} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
