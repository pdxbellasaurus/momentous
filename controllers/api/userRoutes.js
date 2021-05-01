const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT route for user
router.put('/:id', async (req, res) => {
  try {
    const newUser = await User.update({
      // add what they can change/what can be updated
    })

  } catch (err) {
    res.status(400).json(err)
  }
})



module.exports = router;