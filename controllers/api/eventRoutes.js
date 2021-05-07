const router = require('express').Router();
const { nanoid } = require('nanoid');
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  const unique_id = nanoid(10);
  console.log(unique_id);
    try {
      const newEvent = await Event.create({
        ...req.body,
        unique_id: unique_id,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newEvent);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// // PUT route for event
// router.put('/:unique_id', async (req, res) => {
//   try {
//     const updatedEvent = await Event.update({
//       // add what they can change/what can be updated
//     })

//   } catch (err) {
//     res.status(400).json(err)
//   }
// })

// //DELETE route for event
// router.delete('/:unique_id', async (req, res) => {
//   try {
//     const deleteEvent = await Event.destroy({
//       //FINISH ME
//     })
//   } catch (err) {
//     res.status(400).json(err)
//   }
// })

module.exports = router;
