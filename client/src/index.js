import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.js';
require('../public/css/default.css');

// import {encrypt} from '../../definitions/helpers.js'


// import graphql from 'graphql';
// import {schema} from '../../graphql/schema';

// console.log("schema: ", schema)

ReactDOM.render(
	<Main />,
  document.getElementById('root')
);

