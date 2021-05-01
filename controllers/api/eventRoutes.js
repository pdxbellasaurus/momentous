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

// PUT route for event
router.put('/:id', async (req, res) => {
  try {
    const updatedEvent = await Event.update({
      // add what they can change/what can be updated
    })

  } catch (err) {
    res.status(400).json(err)
  }
})

//DELETE route for event
router.delete('/:id', async (req, res) => {
  try {
    
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;
