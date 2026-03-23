const express = require('express');
const router = express.Router();

const newsControllers = require('../app/controllers/NewsControllers');

// app.use('/', (req, res) => {
//     res.render('news')
// })

router.use('/:slug', newsControllers.show);
router.use('/', newsControllers.index);

module.exports = router;
