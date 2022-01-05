import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from 'src/components/App';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
