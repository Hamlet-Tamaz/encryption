import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './main.js';
require('../public/css/default.css');

import graphql from 'graphql';
import {schema} from '../../graphql/schema';



ReactDOM.render(
	<Main />,
  document.getElementById('root')
);

