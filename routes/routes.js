var router = require('express').Router();

router.get('/', do_home_page);
router.post('/do_user', handle_form);

module.exports = router;

function do_home_page(req, res) {
    console.log('doing home page');
    res.render('index');
}

function handle_form(req, res) {
    console.log('handling form');
    res.render('thanks', req.body);
}