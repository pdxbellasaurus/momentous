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
     logged_in: req.session.logged_in

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/event/:unique_id', async (req, res) => {
    try {
      const eventData = await Event.findOne({ where: { unique_id: req.params.unique_id }}
       );
  
      const event = eventData.get({ plain: true });

      // console.log(event)
  
      res.render('event', {
        event: event,
        logged_in: req.session.logged_in
      
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
      console.log(user)
  
      res.render('profile', {
        user: user,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/newevent', withAuth, async (req, res) => {
    try{

      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [ { model: Event } ],
      });

      const user = userData.get({ plain: true });

      res.render('newevent', {
        user: user,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  })

  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;