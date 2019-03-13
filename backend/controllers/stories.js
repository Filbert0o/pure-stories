const express = require('express');

// create Route instance for Stories
const router = express.Router();

// Load Story model

import Story from '../models/Story';

router.get('/test', (req, res) => res.json({ msg: 'Story Works!' }));

router.get('/', (req, res) => {
  Story.find()
    .then(stories => res.json(stories))
    .catch(err => res.status(404).json({ nostoriesfound: 'No stories found' }));
});

router.get('/:id', (req, res) => {
  Story.findById(req.params.id)
    .then(story => res.json(story))
    .catch(err =>
      res.status(404).json({
        nostoryfound: 'No story found with that ID'
      })
    );
});

router.post('/create', (req, res) => {
  const newStory = new Story({
    category: req.body.category ? req.body.category : 'no tag',
    author: req.body.author,
    title: req.body.title,
    bodyText: req.body.bodyText,
    favorite: req.body.favorite ? req.body.favorite : false,
    thumbnail: req.body.thumbnail ? req.body.thumbnail : 'https://www.readlightnovel.org/assets/images/noimage.jpg',
    rating: req.body.rating ? req.body.rating : 5,
    datepost: req.body.datepost ? req.body.datepost : Date.now()
  });

  newStory.save()
    .then(story => res.json(story))
    .catch(err => console.log(err));
});

router.delete('/:id', (req, res) => {
  Story.findById(req.params.id)
    .then(story => {
      story.remove().then(() => res.json({ success: true }));
      res.json({
        msg: `${story.title} is deleted`
      });
    })
    .catch(err =>
      res.status(404).json({
        nostoryfound: 'No story found with that ID'
      })
    );
});

router.put('/:id',(req, res) => {
  Story.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) throw err;

    res.json({
      msg: `${req.body.title} is updated`
    });
  })
  
});

module.exports = router;