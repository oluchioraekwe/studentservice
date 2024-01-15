import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import dbconnect from './database/dbconnect';

var app = express();
dbconnect().then(()=>{
  console.log("Database Connected Succesfully")
}).catch((error)=>{
  console.log("Error Connecting to Database: ",error.message)
})
// view engine setup
app.set('views', path.join(__dirname,".." ,'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,".." ,'public')));

app.use('/home', indexRouter);
app.use('/', usersRouter);

// catch 404 and forward to error handler
app.use(function(req:express.Request, res:express.Response, next:express.NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(
  err:createError.HttpError, 
  req:express.Request, 
  res:express.Response, 
  next:express.NextFunction):any {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
