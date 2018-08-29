const router = require("express").Router();
const async = require("async");
const User = require("../models/user");

//HOME PAGE ROUTE
router.get('/dashboard', (req, res, next) =>{
	res.render('main/dashboard');
});

router.get('/housetest', (req, res, next) =>{
	res.render('main/test');
});


//PURCHASE ROUTE
router.get('/purchase', (req, res, next) =>{
	res.render('main/purchase');
})

//HOUSE TYPES
router.get('/threebedroom', (req, res, next) =>{
	res.render('house/3bedroom');
});

router.get('/twobedroom', (req, res, next) =>{
	res.render('house/2bedroom');
});

router.get('/onebedroom', (req, res, next) =>{
	res.render('house/1bedroom');
});

//SUPPORT ROUTE
router.get('/support', (req, res, next) =>{
	res.render('main/support');
});

//CONTACT ROUTE
router.get('/contact', (req, res, next) =>{
	res.render('main/contact');
});

//PROFILE ROUTE
router.get('/profile', (req, res, next) =>{
	res.render('main/profile');
});


module.exports = router;