const router = require('express').Router();
const { User, Event } = require('../models');

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

router.get('/event/:id', async (req, res) => {
    try {
      const eventData = await Event.findByPk(req.params.id, {
        include: [
          {
            model: Event,
            attributes: ['name'],
          },
        ],
      });
  
      const event = eventData.get({ plain: true });
  
      res.render('event', {
        ...event,
      
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;