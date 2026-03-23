const newsRoutes = require('./news');
const siteRoutes = require('./site');
const searchRoutes = require('./search') 

function route(app) {
    app.use('/news', newsRoutes);

    app.use('/search', searchRoutes);

    app.use('/', siteRoutes);
}

module.exports = route;
