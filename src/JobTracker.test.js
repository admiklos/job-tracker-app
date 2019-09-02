import React from 'react';
import ReactDOM from 'react-dom';
import JobTracker from './components/JobTracker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobTracker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
