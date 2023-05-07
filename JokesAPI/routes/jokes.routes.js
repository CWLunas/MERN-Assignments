
const jokesController = require("../controllers/jokes.controller");
module.exports=app=>{
    app.get("/api/jokes", jokesController.getAllJokes);

    app.get("/api/jokes/:id", jokesController.getJokeById);

    app.post("/api/jokes", jokesController.createJoke);

    app.patch("/api/jokes/:id", jokesController.updateJoke);

    app.delete("/api/jokes/:id", jokesController.deleteJoke);

    app.get("/api/jokes/arandomjoke/random", jokesController.getRandomJoke);

   }   
