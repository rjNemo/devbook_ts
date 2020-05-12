import React from 'react';
import NavBar from '../NavBar';
import {render} from '@testing-library/react';

describe('Navbar displays', () => {
  describe('when user is not authenticated', () => {
    test('landing page link', () => {
      const {getByText} = render(<NavBar />);
      const link = getByText('DevBook');
      expect(link).toBeInTheDocument();
    });
    test('developers link', () => {
      const {getByText} = render(<NavBar />);
      const link = getByText('Developers');
      expect(link).toBeInTheDocument();
    });
    test('register link', () => {
      const {getByText} = render(<NavBar />);
      const link = getByText('Register');
      expect(link).toBeInTheDocument();
    });
    test('login page link', () => {
      const {getByText} = render(<NavBar />);
      const link = getByText('Login');
      expect(link).toBeInTheDocument();
    });
  });
});
