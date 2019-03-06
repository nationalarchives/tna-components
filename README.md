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

# TNA-Components
The National Archives React components

## 🚀 Quick start

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

## Test

**Jest - Unit/Itegration/Snapshot(s) testing**
* `npm test`
*  Optional: Watch all the tests => `"test": "jest"` to `"test": "jest --watchAll"` inside package.json
*  Optional: Watch all and check code coverage => `"test": "jest"` to `"test": "jest --watchAll --coverage"` inside package.json
*  Optional: Check code coverage => `"test": "jest"` to `"test": "jest --coverage"` inside package.json
*  !! Important: Rember to revert back to `"test": "jest"` before pushing anything to the repository or otherwise will cause a loop into Travis CI and fail the build

**Cypress E2E testing**
* `./node_modules/.bin/cypress open`

## 🧐 What's inside?

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

## :hatched_chick: Credits
**React**
Website URL https://reactjs.org

**Jest** 
Website URL https://jestjs.io

**Babel**
Website URL https://babeljs.io

**Webpack**
Website URL https://webpack.js.org

**Travis CI**
Website URL https://travis-ci.org/

**Express JS**
Website URL https://expressjs.com/

**Cypress.io**
Website URL https://cypress.io
