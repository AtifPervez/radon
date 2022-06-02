const express = require('express');
const externalModule = require('../logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('The constant in logger route has a value '+externalModule.endpoint)
    //console.log('The current batch is '+externalModule.batch)
    externalModule.welcome()
    res.send('hii')
});



module.exports = router;
// adding this comment for no reason