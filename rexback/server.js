const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const profile = require("./routes/api/profile");
const property = require("./routes/api/property");
const user = require("./routes/api/user");
const agent = require("./routes/api/agent");
const attorney = require("./routes/api/attorney");
const loanofficer = require("./routes/api/loanofficer");
const buyer = require("./routes/api/buyer");
const seller = require("./routes/api/seller");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

//CONNECT TO MONGO
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/profile", profile);
app.use("/api/property", property);
app.use("/api/user", user);
app.use("/api/agent", agent);
app.use("/api/attorney", attorney);
app.use("/api/loanofficer", loanofficer);
app.use("/api/buyer", buyer);
app.use("/api/seller", seller);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
