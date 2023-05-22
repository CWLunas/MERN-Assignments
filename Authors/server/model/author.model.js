const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Author name is required.'],
    minlength: [3, 'Author name must be at least 3 characters long.'],
  },
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;