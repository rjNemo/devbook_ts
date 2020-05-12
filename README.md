# DevBook

![Deploy](https://github.com/rjNemo/devbook_ts/workflows/Deploy/badge.svg?branch=master)

Social App for connecting with developers & tech enthusiasts.
🕸 [Check it out](https://devbook.onrender.com/)

## Tests

### End-to-end

- [Cypress](https://www.cypress.io) - JavaScript End to End Testing Framework

Open test runner with:

```sh
yarn cypress
```

and edit your E2E test cases in `cypress/integration/` folder.

## Deployment

We use Github Actions to check push and pull requests.

The application is deployed on [Render](https://render.com) cloud platform.
It watches git `master` branch and automatic deploy if the diff passes the tests.

## Built With

- [ReactJs](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - A predictable statea container for JavaScript apps
- [Firebase](https://firebase.google.com/) - Firebase helps mobile and web app teams succeed

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Ruidy Nemausat** - _Initial work_ - [rjNemo](https://github.com/rjNemo/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Inspiration](https://github.com/bradtraversy/devconnector_2.0)
