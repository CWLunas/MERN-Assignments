const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/product_manager_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('You are now connected to Product Manager Database!'))
  .catch((err) => console.error('Something went wrong when connecting to the database!', err));

module.exports = mongoose;