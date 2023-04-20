var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
 const mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});
console.log("it is connected")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var imagesRouter = require('./routes/images');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');


var images = require("./models/images");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/images', imagesRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


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
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await images.deleteMany();
let instance1 = new images({images_name:"image1", size:"large",cost:1000});
instance1.save().then(doc=> {
//if(err) return console.error(err);
console.log("First object saved")}
).catch(err=>{
  console.error(err)
});

let instance2 = new
images({images_name:"image2", size:"medium",cost:700});
instance2.save().then(doc=> {
//if(err) return console.error(err);
console.log("Second object saved")}
).catch(err=>{
  console.error(err)
});
let instance3 = new
images({images_name:"image3", size:"small",cost:800});
instance3.save().then(doc=> {
//if(err) return console.error(err);
console.log("Third object saved")}
).catch(err=>{
  console.error(err)
});
}
let reseed = false;
if (reseed) { recreateDB();}

module.exports = app;