const express = require('express');
const path = require('path');
const router = require("./routes/routes")
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.use(express.json());
app.use("/", router);
const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
