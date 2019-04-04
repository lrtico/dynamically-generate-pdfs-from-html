import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0,
    dates: [
      {
        title: "Neuropsychology evaluation",
        date: "2019-03-12"
      },
      {
        title: "School evaluation",
        date: "2019-03-19"
      },
      {
        title: "Behavior evaluation",
        date: "2019-03-19"
      }
    ]
  };

  //Whenever the input changes, update the destructured state parameter matching the input's name
  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPDF = () => {
    //use axios' post method to the create-pdf route passing the data from state
    //blobs are immutable objects the represent raw data, like our PDF
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPDF.pdf");
      });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Receipt ID"
          name="receiptId"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 1"
          name="price1"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 2"
          name="price2"
          onChange={this.handleChange}
        />
        <button onClick={this.createAndDownloadPDF}>Download PDF</button>
      </div>
    );
  }
}

export default App;
