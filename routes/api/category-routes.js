const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {

  const categoryData = Category.findAll({
    include: [{ model: Product }]
  });
  res.status(200).json(categoryData);
});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  const categoryData = Category.findByPk(req.params.id, {
    include: [{ model: Product }]
  });

  if (!categoryData) {
    res.status(404).json({ message: 'No category associated with that id.' });
    return;
  }

  res.status(200).json(categoryData);

});


// create a new category
router.post('/', (req, res) => {
  const categoryData = Category.create({
    category_name: req.body.category_name,
  });
  res.status(200).json(categoryData);
});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
});


// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  const categoryData = Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (!categoryData) {
    res.status(404).json({ message: 'No category found with that id.' });
    return;
  }

  res.status(200).json(categoryData);

});

module.exports = router;
