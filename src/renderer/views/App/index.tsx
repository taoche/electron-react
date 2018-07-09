import { Provider } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from '../../stores';

import Notes from '../../components/Notes';
import TopNavigation from '../../components/TopNavigation';
import NoteCount from '../NoteCount';

export default () => {
  return (
    <Provider {...store}>
      <Router>
        <div>
          <TopNavigation />
          <Route exact={true} path="/" component={Notes} />
          <Route path="/notecount" component={NoteCount} />
        </div>
      </Router>
    </Provider>
  );
};
