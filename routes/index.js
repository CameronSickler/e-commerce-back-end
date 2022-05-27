const router = require('express').Router();
const productRoutes = require('./product-routes');
// const categoryRoutes = require('./category-routes');
// const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;