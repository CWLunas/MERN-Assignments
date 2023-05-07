const express = require('express');

const app = express();

const PORT = 8000;

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const jokesRoutes = require("./routes/jokes.routes");

jokesRoutes(app)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));