import React from 'react';
import {render} from 'react-dom';
import App from './App';

require('./../assets/css/style.css');
require('./../assets/css/responsive.css');
require('./../assets/css/font-awesome.css');

render(
  <App />,
  document.getElementById('root')
);
