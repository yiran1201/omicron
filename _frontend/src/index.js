import * as serviceWorker from './serviceWorker';

import AppComponent from './components/app/App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root')
);

serviceWorker.unregister();
