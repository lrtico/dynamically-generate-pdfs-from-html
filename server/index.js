//require necessary dependices using vanilla javascript
const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

//Pass the data on to the HTML template
const pdfTemplate = require("./documents");

//initialize the app and set up the port
const app = express();
const port = process.env.PORT || 5000;

//set up middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//POST request - PDF generation and fetching of data
//post method requires a route and callback function which has request and response parameters passed to it
app.post("/create-pdf", (req, res) => {
  //call the PDF const then use the html-pdf method toFile to create a PDF and err handling response
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", err => {
    if (err) {
      res.send(Promise.reject());
    }
    res.send(Promise.resolve());
  });
});

//GET request - Send the generated PDF to the client
//fetch the generated PDF and send it down to the client
app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
