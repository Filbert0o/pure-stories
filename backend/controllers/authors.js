const express = require('express');

// create Route instance for Authors
const router = express.Router();

// Load Author model

import Author from '../models/Author';

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Author Works!' }));

module.exports = router;