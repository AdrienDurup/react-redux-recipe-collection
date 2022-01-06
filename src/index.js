import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/App';
import store from 'src/store';
import ScrollToTop from './components/ScrollToTop';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
