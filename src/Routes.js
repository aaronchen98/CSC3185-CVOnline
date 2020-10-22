import React from 'react';
import { Route, Switch } from 'react-router-dom';

import OverviewPage from './pages/OverviewPage'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={OverviewPage} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    )
  }
}

export default Routes;
