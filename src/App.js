import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
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
            <Route path='/' component={Reconciliation} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
