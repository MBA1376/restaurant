const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const port = process.env.PORT || 5000;

/** load routes **/
const users = require('./routes/api/users');

const app = express();


/** load db uri **/
const db = require('./config/keys').mongoURI;
/** connect to mongodb **/
mongoose.connect(db , { useNewUrlParser: true })
    .then( () => console.log('mongodb connected :)'))
    .catch(err => console.log(err));

/**  parse application/x-www-form-urlencoded **/
app.use(bodyParser.urlencoded({ extended: false }));
/** parse application/json **/
app.use(bodyParser.json());

/** for test **/
app.get('/' , (req , res) => console.log('get request recieved :)'));

/** passport middleware */
app.use(passport.initialize());
/** passport config */
require('./config/passport')(passport);

/** use routes **/
app.use('/api/users' , users);

app.listen(port , () => console.log(`server running on port ${port}`));