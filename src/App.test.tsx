import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {getAllByText} = render(<App />);
  const title = getAllByText('DevBook');
  expect(title.length).toEqual(2);
});
