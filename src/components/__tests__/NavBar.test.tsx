import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from '../NavBar';
import {render, RenderResult} from '@testing-library/react';

interface IProps {
  isAuthenticated: boolean;
  loading: boolean;
}
describe('Navbar displays', () => {
  let context: RenderResult;
  let navProps: IProps;

  describe('before loading', () => {
    navProps = {
      isAuthenticated: false,
      loading: true,
    };

    beforeEach(() => {
      context = render(
        <BrowserRouter>
          <NavBar {...navProps} />
        </BrowserRouter>,
      );
    });

    test('landing page link', () => {
      const {getAllByTestId} = context;
      const link = getAllByTestId('homeLink');
      expect(link[0]).toBeTruthy();
    });

    it('no links while loading', () => {
      const {queryByTestId} = context;
      const links = queryByTestId('privateLinks');
      expect(links).toBeNull();
    });
  });

  describe('when loaded', () => {
    describe('when user is not authenticated', () => {
      navProps = {
        isAuthenticated: false,
        loading: false,
      };

      beforeEach(() => {
        context = render(
          <BrowserRouter>
            <NavBar {...navProps} />
          </BrowserRouter>,
        );
      });

      test('developers link', () => {
        const {getAllByTestId} = context;
        const link = getAllByTestId('devsLink');
        expect(link[0]).toBeTruthy();
      });

      test('register link', () => {
        const {getAllByTestId} = context;
        const link = getAllByTestId('signupLink');
        expect(link[0]).toBeTruthy();
      });

      test('login page link', () => {
        const {getAllByTestId} = context;
        const link = getAllByTestId('loginLink');
        expect(link[0]).toBeTruthy();
      });
    });

    // describe('when user is authenticated', () => {
    //   navProps = {
    //     isAuthenticated: true,
    //     loading: false,
    //   };
    //   beforeEach(() => {
    //     context = render(
    //       <BrowserRouter>
    //         <NavBar {...navProps} />
    //       </BrowserRouter>,
    //     );
    //   });
    //   test('developers link', () => {
    //     const {getAllByTestId} = context;
    //     const link = getAllByTestId('devsLink');
    //     expect(link[0]).toBeTruthy();
    //   });
    //   //   test('posts page link', () => {
    //   //     const {getAllByTestId} = context;
    //   //     const link = getAllByTestId('postsLink');
    //   //     expect(link[0]).toBeTruthy();
    //   //   });
    //   //   test('dashboard page link', () => {
    //   //     const {getAllByTestId} = context;
    //   //     const link = getAllByTestId('dashboardLink');
    //   //     expect(link[0]).toBeTruthy();
    //   //   });
    //   //   test('logout page link', () => {
    //   //     const {getAllByTestId} = context;
    //   //     const link = getAllByTestId('logoutLink');
    //   //     expect(link[0]).toBeTruthy();
    //   //   });
    //   // });
    // });
  });
});
