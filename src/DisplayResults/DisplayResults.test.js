import React from 'react';
import ReactDOM from 'react-dom';
import DisplayResults from './DisplayResults';

describe('DisplayResults Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< DisplayResults />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
