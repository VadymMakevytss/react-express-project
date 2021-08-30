const express = require('express');
const app = express();
const apiUsers = require('./backend/routes/apiUser');


app.use('/', apiUsers)

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
