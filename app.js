const express = require('express'),
      app = express(),
      port = 3000,
      path = require('path'),
      chalk = require('chalk'),
      morgan = require('morgan'),
      debug = require('debug')('app');

app.engine('ejs', require('ejs').__express);

// Set static folder
app.use(express.static(path.join(__dirname, 'dist')));
// Page response
app.use(morgan('tiny'));

// Set the views folder
app.set('views', './views');
// Set the view engine
app.set('view engine', 'ejs'); 

// Routing
app.get('/help-with-your-research/research-guides', function (req, res) {
    res.render('feedback-widget', { title: 'Guidance Feedback React Component' })
});

app.listen(port, () => debug(`TNA-Components app on ${ chalk.blue('localhost:' + port) }`))