const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {

  // find all categories
  Category.findAll({

    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]

  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {

      console.log(err);
      res.status(500).json(err);

    });

});

router.get('/:id', (req, res) => {

  // find one category by its `id` value
  Category.findOne({

    where: {

      id: req.params.id

    },

    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]

  })

    .then(dbCategoryData => {

      if (!dbCategoryData) {
        res.status(404).json({ message: 'This id does not match a category' });
        return;
      }

      res.json(dbCategoryData);

    })

    .catch(err => {
      console.log(err);
      res.status(500).json(err);

    });

  // be sure to include its associated Products
});




router.post('/', (req, res) => {
  // create a new category
  //Category.create
  //response
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  //Category.update
  //grill req for id
  //response
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  //Category.destroy
  //grill req for id
  //response
});

module.exports = router;
