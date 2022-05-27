const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// find all tags
router.get('/', (req, res) => {

  Tag.findAll({

    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }
    ]

  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {

      console.log(err);
      res.status(500).json(err);

    });

});



// find a single tag by its `id`
router.get('/:id', (req, res) => {

  Tag.findOne({

    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }
    ]

  })
    .then(dbTagData => {

      if (!dbTagData) {

        res.status(404).json({ message: 'This id does not have a matching tag' });
        return;

      }

      res.json(dbTagData);

    })
    .catch(err => {

      console.log(err);
      res.status(500).json(err);

    });

});



// create a new tag
router.post('/', (req, res) => {
  //Tag.create
  //grill for name
  //response
});



// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  //Tag.update
  //grill req for id
  //response
});



// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  //Tag.destroy
  //grill req for id
  //response
});

module.exports = router;
