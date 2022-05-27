const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  //Tag.findAll
  //need include and attributes
  //response
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  //Tag.findOne
  //grill for req id
  //include attributes
  //response
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  //Tag.create
  //grill for name
  //response
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  //Tag.update
  //grill req for id
  //response
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  //Tag.destroy
  //grill req for id
  //response
});

module.exports = router;
