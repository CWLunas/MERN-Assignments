const Product = require('../model/product.model');

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((error) => {
      console.error('Failed to add product to the database', error);
      res.status(500).json({ error: 'Failed to add product to the database' });
    });
};
module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => {
      console.error('Failed to retrieve products from the database', err);
      res.status(500).json({ error: 'Failed to retrieve products from the database' });
    });
};

module.exports.getProductById = (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then((product) => res.json(product))
    .catch((err) => {
      console.error(`Failed to retrieve product with ID ${id} from the database`, err);
      res.status(500).json({ error: `Failed to retrieve product with ID ${id} from the database` });
    });
};