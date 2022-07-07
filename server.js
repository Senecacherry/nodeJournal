const createError = require('http-errors');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const cors = require('cors');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(cors());
app.use('/', indexRouter);
app.use('/users', userRouter);

// catch 404 and send to error handler
app.use((req, res, next) => {
    next(createError(404));
})

app.listen(port, () => {
    console.log(`Journal app listening on port ${port}`);
})

module.exports = app;

