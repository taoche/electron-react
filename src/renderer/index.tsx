import { configure } from 'mobx';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootContainer from './views/App';

configure({ enforceActions: true });

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(RootContainer);

// Webpack Hot Module Replacement API
if ((module as any).hot) {
  (module as any).hot.accept('./views/App', () => {
    render(RootContainer);
  });
}
