const Author = require('../model/author.model');

exports.getAllAuthors = (req, res) => {
  Author.find()
    .then(authors => {
      res.json(authors);
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

exports.createAuthor = (req, res) => {
  const author = new Author(req.body);
  author.save()
    .then(savedAuthor => {
      res.json(savedAuthor);
    })
    .catch(error => {
      if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map(err => err.message);
        res.status(400).json({ error: errors });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    });
};

module.exports.updateAuthor = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;


  Author.findByIdAndUpdate(
    _id,
    { name },
    { new: true, runValidators: true }
  )
    .then((updatedAuthor) => {
      if (!updatedAuthor) {
        res.status(404).json({ error: 'Author not found' });
      } else {
        res.json(updatedAuthor);
      }
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map((err) => err.message);
        res.status(400).json({ error: errors });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    });
};

exports.deleteAuthor = (req, res) => {
  Author.findByIdAndDelete(req.params.id)
    .then(author => {
      if (!author) {
        res.status(404).json({ error: 'Author not found' });
      } else {
        res.json({ message: 'Author deleted successfully' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal server error' });
    });
};