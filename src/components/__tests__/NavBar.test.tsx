import React from 'react';
import NavBar from '../NavBar';
import {render, RenderResult} from '@testing-library/react';

describe('Navbar displays', () => {
  let context: RenderResult;

  beforeEach(() => {
    context = render(<NavBar />);
  });

  describe('when user is not authenticated', () => {
    test('landing page link', () => {
      const {getByText} = context;
      const link = getByText('DevBook');
      expect(link).toBeInTheDocument();
    });
    test('developers link', () => {
      const {getByText} = context;
      const link = getByText('Developers');
      expect(link).toBeInTheDocument();
    });
    test('register link', () => {
      const {getByText} = context;
      const link = getByText('Register');
      expect(link).toBeInTheDocument();
    });
    test('login page link', () => {
      const {getByText} = context;
      const link = getByText('Login');
      expect(link).toBeInTheDocument();
    });
  });

  describe('when user is authenticated', () => {
    test('logout page link', () => {
      const {getByText} = context;
      const link = getByText('Logout');
      expect(link).toBeInTheDocument();
    });
  });
});
