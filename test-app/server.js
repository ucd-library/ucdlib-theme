const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.static(__dirname));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port: '+port);
});