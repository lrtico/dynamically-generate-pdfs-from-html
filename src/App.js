import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";

class App extends Component {
  state = {
    diName: "George Mason",
    diAge: "8",
    diSchool: "Ty Cobb Elementary",
    diGrade: "3rd",
    diDateofbirth: "2011-06-07",
    diEvaluationlocation: "One Neuro",
    diGender: "Boy",
    diHandedness: "Right",
    diEvaluator: "Sissy Spacek",
    diDateoftesting: [
      {
        title: "Date1",
        date: "2019-03-12"
      },
      {
        title: "Date22",
        date: "2019-03-19"
      },
      {
        title: "Date3",
        date: "2019-03-19"
      }
    ],
    paqName: "Carey Grant",
    paqAddress: "32 Main Street, Sometown, CA 94553",
    paqHomePhone: "(342) 324-9482",
    paqCellPhone: "(342) 529-8411",
    paqWorkPhone: "(342) 922-4830",
    paqGuardian: "Father",
    reasonReferral1: "The brown fox",
    reasonReferral2: "jumps over the purple moon",
    reasonReferral3: "to reach the stars",
    recordsReviewed: [
      {
        title: "Record reviewed 1",
        date: "2018-4-8"
      },
      {
        title: "Record reviewed 2",
        date: "2018-12-3"
      }
    ],
    bhPrimaryCaregiverMother: true,
    bhMotherName: "Belinda Monroe",
    bhStepmother: "Yes",
    bhMotherCellPhone: "(432) 342-3443",
    bhMotherOccupation: "(323) 990-4899",
    bhMotherLengthEmployement: "3",
    bhMotherPrimaryLanguage: "English",
    bhMotherAge: "32",
    bhMotherHomePhone: "(313) 990-9343",
    bhMotherWorkPhone: "(490) 909-2394",
    bhMotherEmployer: "Spanx",
    bhMotherHighestGrade: "12th",
    bhMotherSecondaryLanguage: "na",
    bhPrimaryCaregiverFather: false,
    bhFatherName: "Ben Monroe",
    bhStepfather: "No",
    bhFatherCellPhone: "(432) 342-3443",
    bhFatherOccupation: "(323) 990-4899",
    bhFatherLengthEmployement: "23",
    bhFatherPrimaryLanguage: "English",
    bhFatherAge: "32",
    bhFatherHomePhone: "(313) 990-9343",
    bhFatherWorkPhone: "(490) 909-2394",
    bhFatherEmployer: "Chase",
    bhFatherHighestGrade: "12th",
    bhFatherSecondaryLanguage: "Spanish",
    bhPrimaryCaregiverName: "Jebadiah Deliliah",
    bhOtherParentStepparentAge: "45",
    bhOtherParentStepparentGuardian: "Foster parent",
    bhOtherParentStepparentHomePhone: "(895) 388-4292",
    bhOtherParentStepparentWorkPhone: "(310) 993-2310",
    bhOtherParentStepparentCellPhone: "(411) 499-2993",
    bhOtherParentStepparentAddress: "123 Main Street, Somecity, CA 90332",
    ccCaregiverGone: "Sherlock Holmes",
    ccHoursPerDay: "3",
    //ccDifferentPeople: None,
    fhCloseness: "Yes",
    fhParentalClosenessChoice: "Mother",
    fhExperienced: "No",
    fhLifeExperiencesDate: "March 14, 2010",
    fhLifeExperiencesAge: "4",
    fhLifeExperiencesDetails:
      "The mother and father had irreconsiable differences",
    fhCustodyMother: true,
    fhCustodyFather: false,
    fhCustodyBoth: false,
    fhVisitation: "Every other weekend",
    brothersSisters: [
      {
        age: "3",
        relationship: "Sister",
        home: "Yes"
      },
      {
        age: "4",
        relationship: "Brother",
        home: "Yes"
      }
    ],
    bsGetAlong: "They get along very well",
    crResidence: "Single-family home",
    crResidenceLength: "4",
    frMovies: true,
    frGames: false,
    frMeals: true,
    frSports: true,
    frConversations: false,
    frVisitsRelatives: true,
    frTelevision: true,
    frChurch: true,
    frOther: false,
    frSpokenLanguage: "English",
    frGrandparentFrequency: "Never",
    frEnjoy: "His smile",
    frDifficult: "His tantrums",
    frCareer: "Happy",
    frEducationLevel: "College",
    frDisciplinarian: "Other",
    frDisciplinarianOtherDesc: "Grandmother",
    frAgreeDiscipline: "Yes",
    frDisciplineTechniques: "Tough love"
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
