var express = require("express"),
    nano = require('nano')('http://localhost:5984'),
    app = express();

app.get("/", function (req, res) {
  res.send("yo mann!!");
});

app.listen(3000, function () {
  console.log('Express on port 3000');
});
