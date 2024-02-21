var express = require('express');
var cors = require('cors');
var app = express();

const {tableData , addOneRow} = require("./utils");

require('dotenv').config()
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get('/getTableData',  (req, res, next) => {
     res.send(tableData());
});

app.post('/addOneRow', ({body}, res, next) => {
   res.send(addOneRow(body?.tableRow || 0 + 1));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});