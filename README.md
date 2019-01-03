[![Build Status](https://travis-ci.org/nationalarchives/tna-components.svg?branch=feature%2Fclean_for_new_approach)](https://travis-ci.org/nationalarchives/tna-components)

# TNA Components

## Development machine setup

* `npm install` or `sudo npm install`
* Optional: Change the development mode to `development` inside webpack.config.js file and revert back to `production` when ready to deploy

## Start the application

* `npm start`
* View the results by navigating to the http://localhost:3000

## Testing

* `npm test`
*  Optional: Watch all the tests => `"test": "jest"` to `"test": "jest --watchAll"` inside package.json
*  Optional: Watch all and check code coverage => `"test": "jest"` to `"test": "jest --watchAll --coverage"` inside package.json
*  Optional: Check code coverage => `"test": "jest"` to `"test": "jest --coverage"` inside package.json
*  !! Important: Rember to revert back to `"test": "jest"` before pushing anything to the repository or otherwise will cause a loop into Travis CI and fail the build
