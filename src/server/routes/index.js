module.exports = initializeRoutes;

function initializeRoutes(app) {
    app.use('/', require('./entry'));
}
