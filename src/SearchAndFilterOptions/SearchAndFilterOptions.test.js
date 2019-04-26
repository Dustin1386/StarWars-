import React from 'react';
import ReactDOM from 'react-dom';
import SearchAndFilterOptions from './SearchAndFilterOptions';

describe('SearchAndFilterOptions Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< SearchAndFilterOptions />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
