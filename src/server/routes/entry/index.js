const
    express = require('express'),
    router  = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

module.exports = router;
