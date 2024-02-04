const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile("budgetData.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error reading data");
          return;
        }
        const budgetData = JSON.parse(data);
        res.json(budgetData);
      });
});

app.get("/example", (req, res) => {
    fs.readFile("example.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error reading data");
        return;
      }
      const exampleData = JSON.parse(data);
      res.json(exampleData);
    });
  });
  
app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});