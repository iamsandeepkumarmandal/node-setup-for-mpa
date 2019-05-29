var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    {
      page:'Home',
      menuId:'home',
      meta: {
        title: 'This is home page title',
        description: 'Home Page Description',
        keywords: 'HTML,CSS,XML,JavaScript',
      },
      headStyles: ['./css/style.css'],
      bodystyles: ['./css/index.css'],
      scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', './scripts/compressed/menu.js'],
    });
});

router.get('/about', function(req, res, next) {
  res.render('about', 
  {
    page:'About Us',
    menuId:'about',
    meta: {
      title: 'About Us',
      description: 'About Us Page Description',
      keywords: 'HTML,CSS,XML,JavaScript',
    },
    headStyles: ['./css/style.css'],
    bodystyles: ['./css/index.css'],
    scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', './scripts/compressed/menu.js'],
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', 
  {
    page:'Contact Us',
    menuId:'contact',
    meta: {
      title: 'This is Contact Us page',
      description: 'Contact Us Page Description',
      keywords: 'HTML,CSS,XML,JavaScript',
    },
    headStyles: ['./css/style.css'],
    bodystyles: ['./css/index.css'],
    scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', './scripts/compressed/menu.js'],
  });
});

module.exports = router;
