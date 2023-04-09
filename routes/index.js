const router = require('express').Router();
const apiRoutes = require('./api');



router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send(`<h1>404</h1>`);

});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/'));
});


module.exports = router;
