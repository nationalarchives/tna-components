<p align="center">
  <a href="https://www.nationalarchives.gov.uk">
    <img style="display:inline-block;" alt="The National Archives"  src="https://user-images.githubusercontent.com/5245264/63532708-28b47680-c503-11e9-92fa-b2a87ce8ba56.png" width="90" />
  </a>
  <img style="display:inline-block" alt="React"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png"
  width="120"
  />
  
</p>

# The National Archives React components

Jump to: 

* [Getting started: development machine configuration](#development-machine-configuration)
* [Steps to create a new component](#steps-to-create-a-new-component)
* [Testing](#testing)

## Automatic deployment to CDN

These components are available on our CDN, for example, at: 

* https://cdn.nationalarchives.gov.uk/react-components/dist/discovery-1.0.0.js
* https://cdn.nationalarchives.gov.uk/react-components/dist/website-1.0.0.js

Note these **important things**: 

- it is the `master` branch that is being watched for deployment to the CDN
- the deployed script name will reflect that which is in `webpack.config.js`
- it can take up to 24 hours for a _change_ to be replicated to all edge locations on CloudFront, but new files will typically be available much  faster

## Appendices

### Background

In September 2018, front end developers at The National Archives met to identify a mechanism to address two significant factors impacting developer morale: 

* The duplication of work and interface 'drift' as several developers implement and maintain UI elements across our digital services
* The considerable effort required to implement those changes that need to cascade across all digital services. 

The agreed approach was to create a 'single source of truth' for UI components which could then be imported as isolated units of functionality into target services as required. This repository is the implementation of that approach.

For more information about this see the:
 
* relevant section of the [front-end development guide](https://github.com/nationalarchives/front-end-development-guide/blob/master/development-guide.md)
* associated [pull request](https://github.com/nationalarchives/front-end-development-guide/pull/21)

### This is progressive enhancement

Since these are JavaScript components it is vitally important developers recognise this _builds upon but does not replace_ our progressive enhancement approach. **The basic functionality required to achieve user goals must always be provided by the HTML of target applications**.

### An example

We'll use The National Archives' 'global search' as an example to demonstrate this because it is present across many digital services. Since it's original implementation (in around 2014) it has been further developed and we have found that, since each implementation resides within the target application, some of the work has not found its way to all those places where it is implemented. Here is how we'd address this using a shared component. 

#### The basic HTML

Each target environment has HTML introduced that will allow the user to achieve their goal. In this example, that is two links: one to the Discovery homepage and one to our website search homepage. 

```html
<div id="global-search">
    <nav>
        <ul>
            <li><a href="http://www.nationalarchives.gov.uk/search/">Search our website</a></li>
            <li><a href="http://discovery.nationalarchives.gov.uk">Search Discovery, our catalogue</a></li>
        </ul>
    </nav>
</div>
```

Since the destinations for these provide the user with the full range of search functionality we can improve the user experience through progressive enhancement.

#### Component that can be used across environments

We then develop a JavaScript component that enables the search to be submitted from the source page. This is added to the `tna-components` library.

#### A runner for each environment

So as to ensure target applications include only those components they need, we configure an [entry point for each target environment](https://webpack.js.org/concepts/entry-points/#object-syntax) in Webpack. These entry points: 

* include only those components necessary for the target application
* include a 'runner' with logic to determine where and when the component is mounted. 

In this way we are able to develop and maintain components centrally while allowing each target environments to have control the deployment of scripts to staging environments.

### Development machine configuration

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

#### Testing

**Jest - Unit|Itegration|Snapshot(s) testing**
* `npm test`
*  Optional: Watch all the tests => `"test": "jest"` to `"test": "jest --watchAll"` inside package.json
*  Optional: Watch all and check code coverage => `"test": "jest"` to `"test": "jest --watchAll --coverage"` inside package.json
*  Optional: Check code coverage => `"test": "jest"` to `"test": "jest --coverage"` inside package.json

**Cypress E2E testing**
* `./node_modules/.bin/cypress open` or `npx cypress open`

### Steps to create a new component

Here's [an example commit](https://github.com/nationalarchives/tna-components/commit/048d8d65a9785f2cab2a4fb20b83d803feb7a33e) introducing the code that's needed to create a new component. At a high-level, the steps are:  

1. Preparing the local development server to serve the HTML into which the component will be mounted.
2. Creating the component
3. Bumping the relevant version number(s) in `webpack.config.js` (using [Semantic Versioning](https://semver.org/))
3. Preparing a runner that will mount the component when specific conditions are met. 

Here are the individual steps:

* Create a dedicated route in `/src/routes/` using Express
* Update `app.js` to `require()` and `use()` this route
* Update the `page` object within `/src/routes/homeRoutes.js` to include the new route
* Create a `.ejs` view within `/src/views/` for the component. Note: this will contain the HTML into which the component will be mounted
* Update `/src/views/home.ejs` to include a link to the newly created view.
* Create a directory for the component within `/components/` and place your component, tests and styles within.
* Create a runner for the component within `/src/runners`. Note: the runner's purpose is to determine _if_ and _where_ a component is to be mounted. 

#### Core technologies

This repository uses a number of technologies, including: 
* [React](https://reactjs.org)
* [Jest](https://jestjs.io)
* [Babel](https://babeljs.io) 
* [Webpack](https://webpack.js.org)
* [Express JS](https://expressjs.com/)
* [Cypress.io](https://cypress.io)

