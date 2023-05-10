const Product = require('../model/product.model');

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((error) => {
      console.error('Failed to add product to the database', error);
      res.status(500).json({ error: 'Failed to add product to the database' });
    });
};