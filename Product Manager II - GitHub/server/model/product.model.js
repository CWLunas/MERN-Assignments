const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [50, "Title must be no more than 50 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      minlength: [3, "Price must be at least 3 digits long and an amount no less than $1.00"],
      maxlength: [8, "Price must be no greater than 8 digits long and an amount no greater than $999999.99"],
    },
    description: {
      type: String, 
      required: [true, "Description is required"],
      minlength: [5, "Title must be at least 5 characters long"],
      maxlength: [255, "Title must be no more than 255 characters long"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;