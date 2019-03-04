const express = require('express');

// create Route instance for Stories
const router = express.Router();

// Load Story model

import Story from '../models/Story';

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Story Works!' }));

module.exports = router;