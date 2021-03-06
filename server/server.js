const createError = require('http-errors');
const express = require('express');
const next = require('next');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const logger = require('morgan');

const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');
const teamRouter = require('./routes/team');
const styleRouter = require('./routes/style');
const compareRouter = require('./routes/compare');
const statisticRouter = require('./routes/statistic');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {  
  const server = express();
  server.use(express.static(path.join(__dirname, 'public')));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));
  
  server.get('/p/:id', (req, res) => {
    const actualPage = '/style';
    const queryParmas = { title: req.params.id};
    app.render(req, res, actualPage, queryPage);
  })

  server.use('/', indexRouter);
  server.use('/', searchRouter);
  server.use('/', teamRouter);
  server.use('/', styleRouter);
  server.use('/', compareRouter);
  server.use('/', statisticRouter);

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  })
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
})
/*
// view engine setup
app.set('pages', path.join(__dirname, 'pages'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/
