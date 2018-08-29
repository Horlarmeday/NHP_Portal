const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const cookieParser = require("cookie-parser");
const fileUpload = require('express-fileupload');
const mainRoutes = require("./routes/main");
const userRoutes = require("./routes/user")
const config = require("./config/secret");

const app = express();
const sessionStore = new MongoStore({url: config.database, autoReconnect: true});


//Connection to the DB
mongoose.connect(config.database, function(err){
    if(err) console.log(err);
    console.log("Connected to the database");
});

// Various Library Use
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public")); 
app.use(fileUpload());
app.use(flash());

//saves the user session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret,
    store: sessionStore
}));

//Passport Config
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

//local function
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

//Using the routes
app.use(mainRoutes);
app.use(userRoutes);




//SERVER LISTENER
app.listen(3030, (err) => {
	if(err) console.log(err)
	console.log('Server running on port 3030');
});