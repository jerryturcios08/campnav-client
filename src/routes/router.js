import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Result from '../components/Result';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/result" component={Result} />
    </Switch>
  );
};

export default App;
