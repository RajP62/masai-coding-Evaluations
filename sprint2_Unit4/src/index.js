const express = require('express');
const app = express();
app.use(express.json());
const jobRouter = require("./controller/job.controller");
const companyRouter = require("./controller/company.controller");
const cityRouter = require("./controller/city.controller");
const noticePerRouter = require("./controller/noticeperiod.controller");
const ratingRouter = require("./controller/rating.controller");
const skillRouter = require("./controller/skill.controller");
// I am adding the data in each model using mongodbcompass as there is no time to make separate post requests for each model 

app.use("/jobs", jobRouter);
app.use("/company", companyRouter);
app.use("/city", cityRouter);
app.use("/noticePeriod",noticePerRouter);
app.use("/rating",ratingRouter);
app.use("/skill",skillRouter);


module.exports = app;