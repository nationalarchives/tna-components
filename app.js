/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * Express application for the React Components
 * Developer: Mihai Diaconita
 **/

const express = require('express'),
      app = express(),
      port = 3000,
      path = require('path'),
      chalk = require('chalk'),
      morgan = require('morgan'),
      debug = require('debug')('app'),
      feedbackRouter = require('./src/routes/feedbackRoutes'),
      homeRouter = require('./src/routes/homeRoutes');

// Set a templating engine for the app views
app.engine('ejs', require('ejs').__express);

// Set static folder
app.use(express.static(path.join(__dirname, 'dist')));
// Page response
app.use(morgan('tiny'));

// Set the views folder
app.set('views', './src/views');
// Set the view engine
app.set('view engine', 'ejs'); 


// Routes
app.use('/', homeRouter);
app.use('/help-with-your-research/research-guides', feedbackRouter);

// Set the port of the application and log the info
app.listen(port, () => debug(`TNA-Components app on ${ chalk.blue('localhost:' + port) }`))