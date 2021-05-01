const router = require('express').Router();
const { Event } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newEvent = await Event.create({
        ...req.body,
       
      });
  
      res.status(200).json(newEvent);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
