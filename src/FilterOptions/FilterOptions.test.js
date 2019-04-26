import React from 'react';
import ReactDOM from 'react-dom';
import FilterOptions from './FilterOptions';

describe('FilterOptions Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< FilterOptions />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
