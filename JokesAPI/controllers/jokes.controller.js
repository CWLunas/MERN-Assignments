const Joke = require("../models/jokes.model");


module.exports.getAllJokes= (req, res) => {
      Joke.find()
        .then((jokes) => res.json(jokes))
        .catch((err) => res.status(400).json({ message: "Something went wrong", error: err }));
    },
  
    module.exports.getJokeById= (req, res) => {
      Joke.findById(req.params.id)
        .then((joke) => res.json(joke))
        .catch((err) => res.status(400).json({ message: "Something went wrong", error: err }));
    },
  
    module.exports.createJoke= (req, res) => {
      Joke.create(req.body)
        .then((newJoke) => res.json({ joke: newJoke }))
        .catch((err) => res.status(400).json({ message: "Something went wrong", error: err }));
    },
  
    module.exports.updateJoke=(req, res) => {
      Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedJoke) => res.json({ joke: updatedJoke }))
        .catch((err) => res.status(400).json({ message: "Something went wrong", error: err }));
    },
  
    module.exports.deleteJoke= (req, res) => {
      Joke.findByIdAndRemove(req.params.id)
        .then(() => res.json({ message: "Joke deleted successfully" }))
        .catch((err) => res.status(400).json({ message: "Something went wrong", error: err }));
    },
  
    module.exports.getRandomJoke= (req, res) => {
      Joke.aggregate([{ $sample: { size: 1 } }])
        .then((randomJoke) => res.json(randomJoke[0]))
        .catch((err) => res.status(400).json({ message: "Something went wrong", error: err }));
    }
    //module.exports = {
      //  getAllJokes, getJokeById, createJoke, updateJoke, deleteJoke, getRandomJoke
    