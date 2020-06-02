# DevBook

![Deploy](https://github.com/rjNemo/devbook_ts/workflows/Deploy/badge.svg?branch=master)

Social App for connecting with developers & tech enthusiasts.

🕸 [Check it out!](https://devbook.onrender.com/)

## Getting Started

Clone this repo on your local machine

```sh
https://github.com/rjNemo/devbook_ts.git
```

and start the development server using:

```sh
yarn start
```

For use in production, don't forget to build the project:

```sh
yarn build
```

### Prerequisites

You will need to have Nodejs installed. You can obtain the LTS version [here](https://nodejs.org/en/download/) or using a package manager such as homebrew:

```
brew install node
```

## Tests

### End-to-end

- [Cypress](https://www.cypress.io) - JavaScript End to End Testing Framework

Open test runner with:

```sh
yarn cypress
```

and edit your E2E test cases in `cypress/integration/` folder.

### Unit

Open test runner with:

```sh
yarn test
```

## Deployment

We use Github Actions to check push and pull requests.

The application is deployed on [Render](https://render.com) cloud platform.
It watches git `master` branch and automatic deploy if the diff passes the tests.

## Built With

- [ReactJs](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - A predictable statea container for JavaScript apps
- [Firebase](https://firebase.google.com/) - Firebase helps mobile and web app teams succeed

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/rjNemo/devbook_ts/tags).

## Authors

- **Ruidy Nemausat** - _Initial work_ - [rjNemo](https://github.com/rjNemo/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
