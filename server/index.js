var express = require('express');
var cors = require('cors');
var app = express();

const {tableData} = require("./utils");

require('dotenv').config()
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get('/getTableData', function (req, res, next) {
    const status = {
        "Status": "Running",
     };
     res.send(tableData());
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});