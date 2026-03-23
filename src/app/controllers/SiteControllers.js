const Course = require('../models/Course');

class SiteControllers {
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!!' });
        }

        // Course.find({}, (err, courses) => {
        //     if (!err) res.json(courses);
        //     res.status(400).json({ error: 'ERROR!@!@!' });
        // });

        // res.render('home');
    }

    // search(req, res) {
    //     res.render('search');
    // }
}

module.exports = new SiteControllers();
