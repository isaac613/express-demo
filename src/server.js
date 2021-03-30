const express = require("express");
const app = express();

//app.listen(aPortNumber, aCallBackFunction);

app.listen(5000, () => {
  console.log("testing");
});
