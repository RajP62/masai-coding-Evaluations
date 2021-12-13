const express = require("express");

const app = express();
app.use(express.json());
const {register, login} = require("./controller/auth.controller");
const movieController = require("./controller/movie.controller");
const seatController = require("./controller/seat.controller");
const showController = require("./controller/show.controller");
const theatreController = require("./controller/theatre.controller");
const screenController = require("./controller/screen.controller");

app.use("/register",register);
app.use("/login", login);

app.use("/movies", movieController);
app.use("/screen", screenController);
app.use("/theatre", theatreController);
app.use("/seats", seatController);
app.use("/shows", showController);


module.exports = app;