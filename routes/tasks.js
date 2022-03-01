const express = require('express');
const router = express.Router();

//will import controllers latrer

router.route('/').get((req, res) => {
    res.send('all items');
})

module.exports = router;