/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * Express application for the React Components
 * Developers: Mihai Diaconita, Punal Chotrani
 **/

const express = require('express'),
  app = express(),
  port = 3000,
  path = require('path'),
  chalk = require('chalk'),
  morgan = require('morgan'),
  debug = require('debug')('app'),
  guidanceFeedbackRouter = require('./src/routes/guidanceFeedbackRoutes'),
  homeRouter = require('./src/routes/homeRoutes'),
  recommendedLinksDiscovery = require('./src/routes/recommendedRoutes'),
  detailsFeedbackRoutes = require('./src/routes/detailsFeedbackRoutes'),
  whatToExpectGuideRoutes = require('./src/routes/whatToExpectGuideRoutes');
  globalSearchRoutes = require('./src/routes/globalSearchRoutes');
  enterYourDetailsTimer = require('./src/routes/enterYourDetailsTimer');

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
// Guidance Feedback
app.use('/help-with-your-research/research-guides', guidanceFeedbackRouter);
// Recommended Links Discovery
app.use('/results', recommendedLinksDiscovery);
// Details Feedback Widget
app.use('/details/r', detailsFeedbackRoutes);
//WTEG Feedback Widget
app.use('/what-to-expect-guide', whatToExpectGuideRoutes);
//Global Search
app.use('/global-search', globalSearchRoutes);
// Enter your details timer
app.use('/enter-your-details-timer', enterYourDetailsTimer);

// Set the port of the application and log the info
app.listen(port, () =>
  debug(`TNA-React-Components app on ${chalk.blue('http://localhost:' + port)}`)
);
