import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

import Layout from './components/Layout';

const element = document.createElement('div');
element.setAttribute('class', 'container');

const app = document.body.appendChild(element);
ReactDOM.render(<Layout/>, app);