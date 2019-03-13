const express = require('express');

// create Route instance for Authors
const router = express.Router();

// Load Author model

import Author from '../models/Author';

router.get('/test', (req, res) => res.json({ msg: 'Author Works!' }));

router.get('/', (req, res) => {
  Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.status(404).json({
      noauthorsfound: 'No authors found'
    }));
});

router.get('/:id', (req, res) => {
  Author.findById(req.params.id)
    .then(author => res.json(author))
    .catch(err =>
      res.status(404).json({
        noauthorfound: 'No author found with that ID'
      })
    );
});

router.post('/create', (req, res) => {
  const newAuthor = new Author({
    name: req.body.name,
    gender: req.body.gender ? req.body.gender : 'Not Specified',
    birthdate: req.body.birthdate ? req.body.birthdate : Date.now(),
    description: req.body.description ? req.body.description : 'Vague',
    avatar: req.body.avatar ? req.body.avatar : 'http://asapct.org/wp-content/uploads/2016/02/blank-avatar.jpg',
  });

  newAuthor.save()
    .then(author => res.json(author))
    .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
  Author.findById(req.params.id)
    .then(author => {
      author.remove().then(() => res.json({
        success: true
      }));
      res.json({
        msg: `${author.name} is deleted`
      });
    })
    .catch(err =>
      res.status(404).json({
        noauthorfound: 'No author found with that ID'
      })
    );
});

router.put('/update', (req, res) => {
  Author.findByIdAndUpdate(req.body._id, req.body, function (err, user) {
    if (err) throw err;

    res.json({
      msg: `${req.body.name} is updated`
    });
  })

});

module.exports = router;