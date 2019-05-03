[![Build Status](https://travis-ci.org/nationalarchives/tna-components.svg?branch=feature%2Fclean_for_new_approach)](https://travis-ci.org/nationalarchives/tna-components)

<p align="center">
  <a href="https://www.nationalarchives.gov.uk">
    <img style="display:inline-block" alt="The National Archives"  src="https://is4-ssl.mzstatic.com/image/thumb/Music/v4/b7/03/65/b7036506-f489-3364-5661-871efd63b8b7/source/170x170bb.jpg" width="90" />
  </a>
  <img style="display:inline-block" alt="React"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png"
  width="120"
  />
  
</p>

# The National Archives React components

## Purpose

On 12 September 2018, front end developers at The National Archives met to discuss ways we might be able to work more effectively across the broad range of applications we support. Primary concerns were: 

* Ensuring consistency of changes across multiple teams, applications and platforms
* Establishing a 'single source of truth' for functionality, design, shared content and implementation across services
* Avoiding duplication of effort when implementing a change

This repository is the home for those components.

For more information about this see the (development guide)[https://github.com/nationalarchives/front-end-development-guide/blob/master/development-guide.md]

## 🚀 Quick start for existing components

**Download the repository.**

  Get the latest files from the repository

  ```sh
  # Download the project on your development machine on your preferred location
  git clone https://github.com/nationalarchives/tna-components.git
  ```

**Start developing.**

  Navigate into the project’s directory and start it up.

  ```sh
  cd tna-components
  npm install
  npm start
  ```
  
  Optional: Change the development mode to `development` inside webpack.config.js file and revert back to `production` when ready to deploy

**Open the source code and start editing!**

  Your site is now running at `http://localhost:3000`

### Testing

**Jest - Unit|Itegration|Snapshot(s) testing**
* `npm test`
*  Optional: Watch all the tests => `"test": "jest"` to `"test": "jest --watchAll"` inside package.json
*  Optional: Watch all and check code coverage => `"test": "jest"` to `"test": "jest --watchAll --coverage"` inside package.json
*  Optional: Check code coverage => `"test": "jest"` to `"test": "jest --coverage"` inside package.json
*  !! Important: Rember to revert back to `"test": "jest"` before pushing anything to the repository or otherwise will cause a loop into Travis CI and fail the build

**Cypress E2E testing**
* `./node_modules/.bin/cypress open`

## Steps to create a new component

Here's [an example commit](https://github.com/nationalarchives/tna-components/commit/048d8d65a9785f2cab2a4fb20b83d803feb7a33e) introducing the code that's needed to create a new component. At a high-level, the steps are: 

There are essentially two steps to adding a component: 

1. Preparing the server to serve the HTML into which the component will be mounted.
2. Creating the component
3. Preparing a runner that will mount the component when specific conditions are met. 

Here are the individual steps:

* Create a dedicated route in `/src/routes/` using Express
* Update `app.js` to `require()` and `use()` this route
* Update the `page` object within `/src/routes/homeRoutes.js` to include the new route
* Create a `.ejs` view within `/src/views/` for the component. Note: this will contain the HTML into which the component will be mounted
* Update `/src/views/home.ejs` to include a link to the newly created view.
* Create a directory for the component within `/components/` and place your component, tests and styles within.
* Create a runner for the component within `/src/runners`. Note: the runner's purpose is to determine _if_ and _where_ a component is to be mounted. 

### 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── _mocks_
    ├── .vscode
    ├── components
    ├── coverage
    ├── cypress
    ├── dist
    ├── node_modules
    ├── src
    ├── .babelrc
    ├── .gitignore.js
    ├── .travis.yml
    ├── app.js
    └── package-lock.json
    ├── package.json
    ├── README.md.js
    └── webconfig.config.js

### Core technologies

This repository uses a number of technologies, including: [React](https://reactjs.org), [Jest](https://jestjs.io), [Babel](https://babeljs.io), [Webpack](https://webpack.js.org),[Travis CI](https://travis-ci.org/), [Express JS](https://expressjs.com/), and [Cypress.io](https://cypress.io)
