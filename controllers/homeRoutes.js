const router = require('express').Router();
const { User, Event } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
    const eventData = await Event.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });

    const events = eventData.map((event) => event.get({ plain: true }));

    res.render('homepage', { 
      events, 
     
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/event/:unique_id', async (req, res) => {
    try {
      const eventData = await Event.findOne({ where: { id: req.body.id }}
       );
  
      const event = eventData.get({ plain: true });
  
      res.render('event', {
        ...event,
      
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/user/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
        include: [
          { model: User },
        ],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('user', {
        ...user,
      
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [ { model: Event } ],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/signup');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;