//export a function that returns all the necessary HTML and generates the PDF

module.exports = ({
  diName,
  diAge,
  diDateofbirth,
  diDateoftesting,
  diEvaluationlocation,
  diEvaluator,
  diGender,
  diGrade,
  diHandedness,
  diSchool,
  paqAddress,
  paqCellPhone,
  paqGuardian,
  paqHomePhone,
  paqName,
  paqWorkPhone,
  reasonReferral1,
  reasonReferral2,
  reasonReferral3,
  recordsReviewed,
  bhPrimaryCaregiverMother,
  bhMotherName,
  bhStepmother,
  bhMotherCellPhone,
  bhMotherOccupation,
  bhMotherLengthEmployement,
  bhMotherPrimaryLanguage,
  bhMotherAge,
  bhMotherHomePhone,
  bhMotherWorkPhone,
  bhMotherEmployer,
  bhMotherHighestGrade,
  bhMotherSecondaryLanguage,
  bhPrimaryCaregiverFather,
  bhFatherName,
  bhStepfather,
  bhFatherCellPhone,
  bhFatherOccupation,
  bhFatherLengthEmployement,
  bhFatherPrimaryLanguage,
  bhFatherAge,
  bhFatherHomePhone,
  bhFatherWorkPhone,
  bhFatherEmployer,
  bhFatherHighestGrade,
  bhFatherSecondaryLanguage,
  bhPrimaryCaregiverName,
  bhOtherParentStepparentAge,
  bhOtherParentStepparentGuardian,
  bhOtherParentStepparentHomePhone,
  bhOtherParentStepparentWorkPhone,
  bhOtherParentStepparentCellPhone,
  bhOtherParentStepparentAddress,
  ccCaregiverGone,
  ccHoursPerDay,
  ccDifferentPeople,
  fhCloseness,
  fhParentalClosenessChoice,
  fhExperienced,
  fhLifeExperiencesDate,
  fhLifeExperiencesAge,
  fhLifeExperiencesDetails,
  fhCustodyMother,
  fhCustodyFather,
  fhCustodyBoth,
  fhVisitation,
  brothersSisters,
  bsGetAlong,
  crResidence,
  crResidenceLength,
  frMovies,
  frGames,
  frMeals,
  frSports,
  frConversations,
  frVisitsRelatives,
  frTelevision,
  frChurch,
  frOther,
  frSpokenLanguage,
  frGrandparentFrequency,
  frEnjoy,
  frDifficult,
  frCareer,
  frEducationLevel,
  frDisciplinarian,
  frDisciplinarianOtherDesc,
  frAgreeDiscipline,
  frDisciplineTechniques,
  mdhPlannedPregnancy,
  mdhDrCare,
  mdhTotalPregnancies,
  mdhPregnancyDifficultConception,
  mdhPregnancyToxemia,
  mdhPregnancyWeightGain,
  mdhPregnancyVomiting,
  mdhPregnancyGermanMeasels,
  mdhPregnancySwelling,
  mdhPregnancyEmotional,
  mdhPregnancyVaginalBleeding,
  mdhPregnancyFlu,
  mdhPregnancyAnemia,
  mdhPregnancyBloodPressure,
  mdhPregnancyInjury,
  mdhOtherComplication,
  mdhOtherComplicationDescription,
  mdhMothersAge,
  mdhFathersAge,
  mdhMothersAgeFirstChild,
  mdhHospitalBirth,
  mdhBirthLocation,
  mdhPregnancyLength,
  mdhBirthWeight,
  mdhLaborLength,
  mdhApgarScore,
  mdhBirthConditionChild,
  mdhBirthConditionMother,
  mdhForceps,
  mdhBreech,
  mdhInduced,
  mdhCeasarean,
  mdhDeliveryComplications,
  mdhIncubator,
  mdhJaundiced,
  mdhBreathingProblems,
  mdhSupplementalOxygen,
  mdhAnesthesia,
  mdhMotherLengthHospital,
  mdhChildLengthHospital,
  mdhTurnOverMonths,
  mdhTurnOverYear,
  mdhWalkDownStairsMonths,
  mdhWalkDownStairsYear,
  mdhSitAloneMonths,
  mdhSitAloneYear,
  mdhAttractedSoundMonths,
  mdhAttractedSoundYear,
  mdhCrawlMonths,
  mdhCrawlYear,
  mdhUnderstandWordsMonths,
  mdhUnderstandWordsYear,
  mdhStandAloneMonths,
  mdhStandAloneYear,
  mdhSpeakFirstWordsMonths,
  mdhSpeakFirstWordsYear,
  mdhWalkAloneMonths,
  mdhWalkAloneYear,
  mdhSpeakSentencesMonths,
  mdhSpeakSentencesYear,
  mdhWalkUpStairsMonths,
  mdhWalkUpStairsYear,
  mdhBreastFed,
  mdhBreastFedWeaned,
  mdhBottleFed,
  mdhBottleFedWeaned,
  mdhToiletTrainedDay,
  mdhToiletTrainedNight,
  mdhBedWetting,
  mdhBedWettingStop,
  mdhBedSoiling,
  mdhBedSoilingStop,
  mdhBedWettingMedicalReasons,
  mdhBedWettingMedicalReasonsDescription,
  mdhWalkingDifficulty,
  mdhWalkingDifficultyDescription,
  mdhUnclearSpeech,
  mdhUnclearSpeechDescription,
  mdhFeedingProblem,
  mdhFeedingProblemDescription,
  mdhUnderweightProblem,
  mdhUnderweightProblemDescription,
  mdhOverweightProblem,
  mdhOverweightProblemDescription,
  mdhColic,
  mdhColicDescription,
  mdhSleepProblem,
  mdhSleepProblemDescription,
  mdhEatingProblem,
  mdhEatingProblemDescription,
  mdhLearningRideBike,
  mdhLearningRideBikeDescription,
  mdhLearningSkip,
  mdhLearningSkipDescription,
  mdhLearningThrowCatch,
  mdhLearningThrowCatchDescription,
  mdhMotorSkillsFirstFour,
  mdhMotorSkillsFirstFourDescription,
  mdhTemperTantrum,
  mdhTemperTantrumDescription,
  mdhNoThriveFirstFour,
  mdhNoThriveFirstFourDescription,
  mdhSeparationAnxiety,
  mdhSeparationAnxietyDescription,
  mdhExcessiveCrying,
  mdhExcessiveCryingDescription,
  mdhChangeWritingHand
}) => {
  return `
    <!doctype html>
      <html>
         <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <style>
              html {
                font-size: 62.5%;
              }
              html {
                  font-family: "Lato", sans-serif;
                  line-height: 1.15;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
              }
              body {
                background-color: white;
                font-size: 12pt;
                font-family: "Lato", sans-serif;
                margin: 0.25in 0.125in;
              }
              article,
              aside,
              footer,
              header,
              nav,
              section {
                display: block;
              }
              .pdf-t {
                background-color: white;
                font-size: 10pt;
                font-family: "Lato", sans-serif;
                margin: 0.25in 0.125in;
              }
              .pdf-t p {
                flex: 1 1 100%;
                font-size: 10pt;
                line-height: 11pt;
                margin: 0 0 0.0625in 0;
              }
              .pdf-t main {
                margin: 0 0.5in;
              }
              .pdf-t main h1 {
                font-size: 18pt;
                font-weight: 700;
                margin: 0.25in 0;
              }
              .pdf-t main section {
                // display: flex;
                // flex-flow: wrap;
                display: table;
              }
              .pdf-t main section h2 {
                flex: 1 1 100%;
                font-size: 16pt;
                font-weight: 700;
                margin: 0.25in 0 0.125in;
              }
              .pdf-t main section h3 {
                color: #666;
                flex: 1 1 100%;
                font-weight: 700;
                font-size: 14pt;
                margin: 0.25in 0 0.125in;
                text-transform: uppercase;
              }
              .pdf-t main section p em {
                color: #007cb3;
              }
              .pdf-t main section > table {
                width: 100%;
                line-height: inherit;
                text-align: left;
                }
              .pdf-t main section > table td {
                width: 4in;
                vertical-align: top;
              }
              .pdf-t main section > table div {
                //display: inline-table;
                //margin-right: 0.5in;
                //width: 3.75in;
              }
              .pdf-t main section > table div p {
                color: #007cb3;
                font-style: italic;
              }
              .pdf-t main section > table div p span {
                color: black;
                font-style: normal;
              }
              .pdf-t main section > table div .bell-curve {
                margin-top: 45px;
                max-width: 100%;
              }
              .pdf-t main section ul {
                flex: 1 1 100%;
                margin: 0;
                list-style: none;
                padding: 0 0 0 12px;
                width: 100%;
              }
              .pdf-t main section ul li {
                font-size: 10pt;
                font-weight: 700;
                line-height: 12pt;
                margin-bottom: 6pt;
                margin-left: 0.125in;
                margin-right: 0;
                position: relative;
                width: 100%;
              }
              .pdf-t main section ul li p {
                font-size: 10pt;
                margin-left: 0;
                margin-right: 0;
              }
              .pdf-t main section ul li em {
                font-weight: 400;
              }
              .pdf-t main section ul li a {
                font-size: 10pt;
              }
              .pdf-t main section ul li ul li {
                font-weight: 500;
                margin-top: 9px;
              }
              .pdf-t main section ul li ul li > ul > li:before {
                content: "";
                border-color: #d4ce15;
                position: absolute;
                top: 3px;
                left: -0.25in;
              }
              .pdf-t main section ul li ul li:before {
                content: "";
                border: 6px solid hotpink;
                border-radius: 50%;
                position: absolute;
                top: 3px;
                left: -0.25in;
              }
              .pdf-t main section ul li:before {
                content: "";
                border: 6px solid #39a4d4;
                border-radius: 50%;
                position: absolute;
                top: 3px;
                left: -0.25in;
              }
              .pdf-t main section .test-table {
                font-family: "Lato", sans-serif;
              }
              .pdf-t main section .test-table .table__row.table__header {
                border-bottom: 1px solid #a3a3a3;
                font-size: 12pt;
                color: #39a4d4;
                padding: 9px 0;
              }
              .pdf-t main section .test-table .table__row {
                border-bottom: 1px solid #a3a3a3;
                color: #474747;
                display: -ms-flexbox;
                display: flex;
                font-size: 12pt;
                margin: 18px 0 0;
                padding-bottom: 18px;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(1) {
                flex: 0 0 220px;
                margin-right: 18px;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(2) {
                flex: 1 1 100px;
                margin-right: 18px;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(3) {
                flex: 1 1 100px;
                margin-right: 18px;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(4) {
                flex: 1 1 100px;
                margin-right: 18px;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(5) {
                flex: 1 1 100px;
              }
              .pdf-t main section .test-table .table__row ul {
                margin-top: 9px;
              }
              .pdf-t main section .test-table .table__row ul li {
                font-size: 12pt;
                font-weight: normal;
              }
              .pdf-t main section .test-table.test-table-cols4-equal .table__row > div {
                flex: 1 1 25%;
              }
              .pdf-t main section .test-table.test-table-cols4-equal.test-table-cols4--4th-col-narrow .table__row > div:nth-child(4) {
                flex: 1 1 50px;
              }
              .pdf-t main section .test-table.test-table--col3-scores .table__row > div:nth-child(1) {
                flex: 1 0 220px;
              }
              .pdf-t main section .test-table.test-table--col3-scores .table__row > div:nth-child(2) {
                flex: 1 0 100px;
              }
              .pdf-t main section .test-table.test-table--col3-scores .table__row > div:nth-child(2) {
                flex: 1 0 100px;
              }
              .pdf-t main section .test-table.test-table--appendix .table__row > div:nth-child(1) {
                flex: none;
                width: 3in;
                flex-grow: 1;
              }
              .pdf-t main section .test-table.test-table--appendix .table__row > div:nth-child(2) {
                flex: none;
                margin-right: 0.25in;
                width: 1.5in;
              }
              .pdf-t main section .test-table.test-table--appendix .table__row > div:nth-child(3) {
                flex: none;
                margin-right: 0.25in;
                width: 1.25in;
              }
              .pdf-t main section .test-table.test-table--appendix .table__row > div:nth-child(4) {
                flex: none;
                margin-right: 0.25in;
                width: 1.25in;
              }
              .pdf-t main section .test-table.test-table--appendix .table__row--last {
                border-bottom: 1px solid #a3a3a3;
                margin-bottom: 36px;
              }
              .pdf-t main section .domain__test {
                flex: 1 1 100%;
              }
              .pdf-t main section .domain__test h3 {
                color: #39a4d4;
                font-size: 24pt;
                font-weight: normal;
                margin-bottom: 36px;
              }
              .pdf-t main section .domain__test h3 .h3--sib-h4 {
                margin-bottom: 18px;
              }
              .pdf-t main section .domain__test h3 + .flex > h4, .pdf-t main section .domain__test h3 + .flex--space-between > h4, .pdf-t main section .domain__test h3 + .flex--center > h4, .pdf-t main section .domain__test h3 + .flex--stretch > h4, .pdf-t main section .domain__test h3 + .flex--center-vertical > h4, .pdf-t main section .domain__test h3 + .flex--wrap > h4, .pdf-t main section .domain__test h3 + .flex--flex-end > h4, .pdf-t main section .domain__test h3 + .flex--col > h4, .pdf-t main section .domain__test h3 + .flex--align-items-end > h4 {
                margin-bottom: 72px;
              }
              .pdf-t main section .domain__test h4 {
                color: #464646;
                display: inline-block;
                font-family: "Lato", "Montserrat", sans-serif;
                font-size: 18pt;
                margin-bottom: 0.125in !important;
                text-transform: capitalize;
              }
              .pdf-t main section .domain__test h5 {
                color: #777;
                font-family: "Montserrat", sans-serif;
                font-size: 16pt;
                margin: 36px 0 9px;
                text-transform: uppercase;
              }
              .pdf-t main section .domain__test h5 .lowercase {
                text-transform: none;
              }
              .pdf-t main section .domain__test h6 ~ h5 {
                margin: 9px 0;
              }
              .pdf-t main section .domain__test h6 {
                color: #39a4d4;
                font-family: "Lato", "Merriweather", "Georgia", serif;
                font-size: 18pt;
                font-style: italic;
                font-weight: normal;
                margin: 0px;
                text-transform: capitalize;
              }
              .pdf-t main section .domain__test h5 ~ h6 {
                margin-top: 36px;
              }
              .pdf-t main section .domain__test p {
                color: black;
                font-family: "Lato", "Merriweather", "Georgia", serif;
                font-size: 12pt;
                font-style: normal;
                line-height: 14pt;
              }
              .pdf-t main section .domain__test hr {
                margin: 36px auto;
                width: 3in;
              }
              .pdf-t main section .primary-caregiver {
                display: flex;
                flex: 1 1 100%;
                align-items: center;
              }
              .pdf-t main section .primary-caregiver h3 {
                flex: 0 1 auto;
              }
              .pdf-t main section .primary-caregiver > span {
                background-color: #00a6d8;
                border-radius: 0.0375in;
                color: white;
                display: none;
                font-weight: 700;
                opacity: 0;
                margin-top: 0.125in;
                margin-left: 0.25in;
                padding: 0.0625in 0.125in;
                transition: all 250ms ease-in-out;
              }
              .pdf-t main section .primary-caregiver--active {
                display: block;
              }
              .pdf-t main section .primary-caregiver--active h3 {
                display: inline-block;
              }
              .pdf-t main section .primary-caregiver--active > span {
                border-radius: 0.0375in;
                background-color: #00a6d8;
                color: white;
                display: inline-block;
                font-weight: 700;
                margin-top: 0.125in;
                margin-left: 0.25in;
                opacity: 1;
                padding: 0.0625in 0.125in;
              }
              .pdf-t main section.li-not-bold li {
                font-weight: 400;
              }
              .pdf-t main section.no-flex {
                display: block;
                flex-flow: unset;
              }
              
              .pdf-t main section.recommendations {
                display: block;
              }
              .flex, .flex--space-between, .flex--center, .flex--stretch, .flex--center-vertical, .flex--wrap, .flex--flex-end, .flex--col, .flex--align-items-end,
              .flex--space-between,
              .flex--center,
              .flex--stretch,
              .flex--center-vertical,
              .flex--wrap,
              .flex--flex-end,
              .flex--col,
              .flex--align-items-end {
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
                -webkit-flex-wrap: nowrap;
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
                -webkit-justify-content: flex-start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -webkit-align-content: stretch;
                -ms-flex-line-pack: stretch;
                align-content: stretch;
                -webkit-align-items: flex-start;
                -ms-flex-align: start;
                align-items: flex-start;
              }

              .flex--center-vertical {
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
              }

              .appendices .appendix {
                margin: 0.5in 0;
              }
              .appendices .appendix h2 {
                flex: 0 1 auto;
                font-size: 18pt;
                margin: 0;
              }
              .appendices .appendix h5 {
                color: #777;
                font-family: "Montserrat", sans-serif;
                font-size: 16pt;
                margin: 0.5in 0 0.25in;
                text-transform: uppercase;
              }
              .appendices .appendix h5:first-of-type {
                margin: 0.25in 0;
              }
              .appendices .appendix .test-table--appendix {
                border-bottom: 1px solid #a3a3a3;
              }
              .appendices .appendix .test-table--appendix h3 {
                color: #666;
                font-size: 16pt;
                text-transform: capitalize;
              }
              .appendices .appendix .test-table--appendix h3 > span {
                color: black;
              }
              .appendices .appendix .test-table--appendix h6 {
                color: #666;
                font-size: 15pt;
                font-weight: normal;
                margin: 0 0 0.125in;
              }
              .appendices .appendix .test-table--appendix .table__row.table__header {
                border-top: none;
                border-bottom: none;
                font-size: 12pt;
                padding: 0;
              }
              .appendices .appendix .test-table--appendix .table__row {
                border-bottom: none;
                font-size: 12pt;
              }
              
              #footer {
                align-items: center;
                font-family: "Lato", Helvetica, Arial, sans-serif;
                font-size: 9pt;
                font-weight: 300;
                width: 550px;
                margin-top: 40px;
              }
              #footer p {
                float: left;
                font-size: 9pt;
                font-weight: 300;
                margin-left: 60px;
                margin-top: 20px;
              }
              #footer p span {
                text-transform: capitalize;
              }
              #footer .footer__page-num {
                font-size: 10pt;
                float: right;
                background-color: #39a4d4;
                border-radius: 50%;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 30px;
                width: 35px;
              }
              .header-footer__slash {
                color: #39a4d4;
                font-weight: 700;
              }
              
              #header {
                margin-left: 0.125in;
              }
              #header > div {
                margin-left: 0.3in;
              }
              #header div {
                font-family: "Lato", Helvetica, Arial, sans-serif;
                font-size: 7.5pt;
                line-height:8.5pt;
                font-weight: 400;
              }
              #header .header__logo {
                vertical-align: middle;
                width: 150px;
                margin-left: 0px;
              }
              #header .header__text {
                vertical-align: middle;
                margin-top: 7px;
                margin-right: 50px;
              }
              @media print {
                // html {
                //   margin-top: 6.35mm !important;
                //   margin-bottom: 6.35mm !important;
                //   margin-left: 3.175mm !important;
                //   margin-right: 3.175mm !important;
                // }
                .pdf-t main section h2 {
                  page-break-after: avoid !important;
                }
                .pdf-t main section > h2 + p {
                  page-break-after: avoid !important;
                  orphans: 2;
                }
              }
            </style>
         </head>
         <body id="html-pdf-template" class="pdf-t">
          <header id="header" class="flex flex--center-vertical">
            <img class="header__logo" src="http://www.lrtico.com/on/img/logo.png" alt="logo">
            <div class="header__text" style="margin-left:.3in;">
              <div>
                <span>Phone +1 (310) 207-1720</span>
                <span class="header-footer__slash">/</span>
                <span>Fax +1 (310) 207-1638</span>
              </div>
              <div>
                <span>11633 San Vincente Blvd. #106</span>
                <span class="header-footer__slash">/</span>
                <span>hello@oneneuro.com</span>
                <span>www.oneneuro.com</span>
              </div>
            </div>
          </header>
          <main>
            <h1>Confidential Neuropsychological Evaluation</h1>
            <section>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        diName !== null
                          ? `<p>Name: <span>${diName}</span></p>`
                          : null
                      }
                      <p>Date of Birth: <span>${diDateofbirth}</span></p>
                      <p>Age: <span>${diAge}</span></p>
                      <p>Gender: <span>${diGender}</span></p>
                      <p>Handedness: <span>${diHandedness}</span></p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>Place of Evaluation: <span>${diEvaluationlocation}</span></p>
                      <p>Date(s) of Evaluation: 
                        <ul>
                          ${
                            diDateoftesting.length > 0
                              ? diDateoftesting
                                  .map(
                                    date =>
                                      `<li>${date.title}, ${date.date}</li>`
                                  )
                                  .join("")
                              : null
                          }
                        </ul>
                      </p>
                      <p>Evaluator's Name: <span>${diEvaluator}</span></p>
                      <p>School: <span>${diSchool}</span></p>
                      <p>Grade: <span>${diGrade}</span></p>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Person Answering Questions</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        paqName !== null
                          ? `<p>Name: <span>${paqName}</span></p>`
                          : null
                      }
                      <p>Relationship to the child: <span>${paqGuardian}</span></p>
                      <p>Cell phone: <span>${paqCellPhone}</span></p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>Address: <span>${paqAddress}</span></p>
                      <p>Home phone: <span>${paqHomePhone}</span></p>
                      <p>Work phone: <span>${paqWorkPhone}</span></p>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Reason for Referral</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <ul>
                        ${
                          reasonReferral1 !== null
                            ? `<li>${reasonReferral1}</li>`
                            : null
                        }
                        ${
                          reasonReferral2 !== null
                            ? `<li>${reasonReferral2}</li>`
                            : null
                        }
                        ${
                          reasonReferral3 !== null
                            ? `<li>${reasonReferral3}</li>`
                            : null
                        }
                      </ul>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Records Reviewed</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <ul>
                        ${
                          recordsReviewed.length > 0
                            ? recordsReviewed
                                .map(
                                  record =>
                                    `<li>${record.title}, Report dated: ${
                                      record.date
                                    }</li>`
                                )
                                .join("")
                            : null
                        }
                      </ul>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Background Information</h2>
              <p><em>The following background information was obtained from a clinical interview with ${diEvaluator}.</em></p>
              ${
                bhPrimaryCaregiverMother !== null &&
                bhPrimaryCaregiverMother == true
                  ? `<div class="primary-caregiver--active"><h3>Mother</h3><span>Primary caregiver</span></div>`
                  : `<h3>Mother</h3>`
              }
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        bhMotherName !== null
                          ? `<p>Name: <span>${bhMotherName}</span></p>`
                          : null
                      }
                      ${
                        bhStepmother === "Yes"
                          ? `<p>Relationship: <span>Stepmother</span></p>`
                          : `<p>Relationship: <span>Mother</span></p>`
                      }
                      <p>Cell phone: <span>${bhMotherCellPhone}</span></p>
                      <p>Occupation: <span>${bhMotherOccupation}</span></p>
                      <p>Years: <span>${bhMotherLengthEmployement}</span></p>
                      <p>Primarylanguage: <span>${bhMotherPrimaryLanguage}</span></p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>Age: <span>${bhMotherAge}</span></p>
                      <p>Home phone: <span>${bhMotherHomePhone}</span></p>
                      <p>Work phone: <span>${bhMotherWorkPhone}</span></p>
                      <p>Employer: <span>${bhMotherEmployer}</span></p>
                      <p>Highest grade: <span>${bhMotherHighestGrade}</span></p>
                      <p>Secondary language: <span>${bhMotherSecondaryLanguage}</span></p>
                    </div>
                  </td>
                </tr>
              </table>

              ${
                bhPrimaryCaregiverFather !== null &&
                bhPrimaryCaregiverFather == true
                  ? `<div class="primary-caregiver--active"><h3>Father</h3><span>Primary caregiver</span></div>`
                  : `<h3>Father</h3>`
              }
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        bhFatherName !== null
                          ? `<p>Name: <span>${bhFatherName}</span></p>`
                          : null
                      }
                      ${
                        bhStepfather === "Yes"
                          ? `<p>Relationship: <span>Stepfather</span></p>`
                          : `<p>Relationship: <span>Father</span></p>`
                      }
                      <p>Cell phone: <span>${bhFatherCellPhone}</span></p>
                      <p>Occupation: <span>${bhFatherOccupation}</span></p>
                      <p>Years: <span>${bhFatherLengthEmployement}</span></p>
                      <p>Primarylanguage: <span>${bhFatherPrimaryLanguage}</span></p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>Age: <span>${bhFatherAge}</span></p>
                      <p>Home phone: <span>${bhFatherHomePhone}</span></p>
                      <p>Work phone: <span>${bhFatherWorkPhone}</span></p>
                      <p>Employer: <span>${bhFatherEmployer}</span></p>
                      <p>Highest grade: <span>${bhFatherHighestGrade}</span></p>
                      <p>Secondary language: <span>${bhFatherSecondaryLanguage}</span></p>
                    </div>
                  </td>
                </tr>
              </table>

              <h3>Primary Caregiver Not Mother or Father</h3>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        bhPrimaryCaregiverName !== null
                          ? `<p>Name: <span>${bhPrimaryCaregiverName}</span></p>`
                          : null
                      }
                      <p>Age: <span>${bhOtherParentStepparentAge}</span></p>
                      <p>Relationship: <span>${bhOtherParentStepparentGuardian}</span></p>
                      <p>Home phone: <span>${bhOtherParentStepparentHomePhone}</span></p>
                      <p>Work phone: <span>${bhOtherParentStepparentWorkPhone}</span></p>
                      <p>Cell phone: <span>${bhOtherParentStepparentCellPhone}</span></p>
                      <p>Address: <span>${bhOtherParentStepparentAddress}</span></p>
                    </div>
                  </td>
                </tr> 
              </table>
            </section>

            <section>
              <h2>Childcare Information</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        ccCaregiverGone !== null
                          ? `<p>Who takes care of this child if the caregivers are gone? <span>${ccCaregiverGone}</span></p>`
                          : null
                      }
                      <p>How many hours per day is this child in a childcare setting? <span>${ccHoursPerDay}</span></p>
                      ${
                        ccDifferentPeople !== undefined
                          ? `<p>Who are the different individuals that care for this child? <span>${ccDifferentPeople}</span></p>`
                          : ""
                      }
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Family History</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        fhCloseness !== undefined
                          ? `<p>Is this child closer to one parent than the other? <span>${fhCloseness}</span></p>`
                          : ""
                      }
                      ${
                        fhCloseness === "Yes"
                          ? `<p>If yes, which one? <span>${fhParentalClosenessChoice}</span></p>`
                          : ""
                      }
                      <p>Has this child ever experienced any parental separations, divorces, or deaths? <span>${fhExperienced}</span></p>
                      ${
                        fhExperienced === "Yes"
                          ? `
                              <p>If yes, when? <span>${fhLifeExperiencesDate}</span></p>
                              <p>Child's age at the time? <span>${fhLifeExperiencesAge}</span></p>
                              <p>Please describe the circumstances.  <span>${fhLifeExperiencesDetails}</span></p>
                            `
                          : ""
                      }
                      ${
                        fhCustodyMother === true ||
                        fhCustodyFather === true ||
                        fhCustodyBoth === true
                          ? `<p>Who has custody of this child? <span>${
                              fhCustodyMother === true ? "Mother" : ""
                            }${fhCustodyFather === true ? "Father" : ""}${
                              fhCustodyBoth === true ? "Both" : ""
                            }</span></p>`
                          : ""
                      }
                      ${
                        fhVisitation !== undefined
                          ? `<p>How often does one parent see this child? <span>${fhVisitation}</span></p>`
                          : ""
                      }
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Siblings</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <ul>
                        ${
                          brothersSisters.length > 0
                            ? brothersSisters
                                .map(
                                  sib =>
                                    `<li>
                                    <p>
                                      <span>
                                          ${sib.relationship},
                                      </span>
                                          <span>${sib.age} years old, </span>
                                      <span>
                                          ${
                                            sib.home === "Yes"
                                              ? `lives at home`
                                              : `does not live at home`
                                          }
                                      </span>
                                  </p>
                              </li>`
                                )
                                .join("")
                            : null
                        }
                      </ul>
                      <div>
                        <p>How does this child get along with brother(s) and/or sister(s)? <span>${bsGetAlong}</span></p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            ${
              crResidence !== undefined && crResidenceLength !== undefined
                ? `
                    <section>
                      <h2>Child’s Residence</h2>
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <div>
                              ${
                                crResidence !== undefined
                                  ? `<p>Where does this child live? <span>${crResidence}</span></p>`
                                  : ""
                              }
                              ${
                                crResidenceLength !== undefined
                                  ? `<p>How many years living at the current address? <span>${crResidenceLength}</span></p>`
                                  : ""
                              }
                            </div>
                          </td>
                        </tr>
                      </table>
                    </section>
                  `
                : ""
            }

            <section>
              <h2>Family Residence</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>All the activities in which this child often participates with the family is:</p>
                      <ul>
                        ${frMovies === true ? `<li>Movies</li>` : ""}
                        ${frGames === true ? `<li>Games</li>` : ""}
                        ${frMeals === true ? `<li>Meals</li>` : ""}
                        ${frSports === true ? `<li>Sports</li>` : ""}
                        ${
                          frConversations === true
                            ? `<li>Conversations</li>`
                            : ""
                        }
                        ${
                          frVisitsRelatives === true
                            ? `<li>Visits with relatives</li>`
                            : ""
                        }
                        ${frTelevision === true ? `<li>Television</li>` : ""}
                        ${frChurch === true ? `<li>Church</li>` : ""}
                        ${frOther === true ? `<li>Other</li>` : ""}
                      </ul>
                      <p>What is the language spoken at home? <span>${frSpokenLanguage}</span></p>
                      <p>How frequently does this child see grandparents? <span>${frGrandparentFrequency}</span></p>
                      <p>What do you most enjoy about this child? <span>${frEnjoy}</span></p>
                      <p>What do you find most difficult about raising this child? <span>${frDifficult}</span></p>
                      <p>What would you like this child to be when he grows up? <span>${frCareer}</span></p>
                      <p>What level of education do you hope this child will complete? <span>${frEducationLevel}</span></p>
                      <p>Who is mainly in charge of discipline in the home? <span>${frDisciplinarian}</span></p>
                      <p>Do all caregivers agree on discipline? <span>${frAgreeDiscipline}</span></p>
                      <p>Please describe discipline techniques? <span>${frDisciplineTechniques}</span></p>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Medical & Development History</h2>
              <h3>Pregnancy</h3>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>Was this child a planned pregnancy? <span>${mdhPlannedPregnancy}</span></p>
                      <p>Was the mother under doctor’s care? <span>${mdhDrCare}</span></p>
                      <p>The number of previous pregnancies/miscarriages? <span>${mdhTotalPregnancies}</span></p>
                      <p>Complications that occurred during pregnancy:</p>
                      <ul>
                        ${
                          mdhPregnancyDifficultConception === true
                            ? `<li>Difficulty in conception</li>`
                            : ""
                        }
                        ${
                          mdhPregnancyToxemia === true ? `<li>Toxemia</li>` : ""
                        }
                        ${
                          mdhPregnancyWeightGain === true
                            ? `<li>Abnormal weight gain</li>`
                            : ""
                        }
                        ${
                          mdhPregnancyVomiting === true
                            ? `<li>Excessive vomiting</li>`
                            : ""
                        }
                        ${
                          mdhPregnancyGermanMeasels === true
                            ? `<li>German measels</li>`
                            : ""
                        }
                        ${
                          mdhPregnancySwelling === true
                            ? `<li>Excessive swelling</li>`
                            : ""
                        }
                        ${
                          mdhPregnancyEmotional === true
                            ? `<li>Emotional problems</li>`
                            : ""
                        }
                        ${
                          mdhPregnancyVaginalBleeding === true
                            ? `<li>Vaginal bleeding</li>`
                            : ""
                        }
                        ${mdhPregnancyFlu === true ? `<li>Flu</li>` : ""}
                        ${mdhPregnancyAnemia === true ? `<li>Anemia</li>` : ""}
                        ${
                          mdhPregnancyBloodPressure === true
                            ? `<li>High blood pressure</li>`
                            : ""
                        }
                        ${
                          mdhPregnancyInjury === true
                            ? `<li>Maternal injury</li>`
                            : ""
                        }
                        ${
                          mdhOtherComplication === true
                            ? `<li>${mdhOtherComplicationDescription}</li>`
                            : ""
                        }
                      </ul>
                      
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h3>Birth</h3>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>At this child’s birth, what was the mother’s age? <span>${mdhMothersAge}</span></p>
                      <p>Father’s? <span>${mdhFathersAge}</span></p>
                      <p>Mother’s age at birth of first child: <span>${mdhMothersAgeFirstChild}</span></p>
                      <p>Was this child born in a hospital? <span>${mdhHospitalBirth}</span></p>
                      ${
                        mdhHospitalBirth === "No"
                          ? `<p>Was this child born in a hospital? <span>${mdhBirthLocation}</span></p>`
                          : ""
                      }
                      <p>Length of pregnancy: <span>${mdhPregnancyLength}</span></p>
                      <p>Birth weight: <span>${mdhBirthWeight}</span></p>
                      <p>Length of labor: <span>${mdhLaborLength}</span></p>
                      <p>Apgar score: <span>${mdhApgarScore}</span></p>
                      <p>Child’s condition at birth: <span>${mdhBirthConditionChild}</span></p>  
                      <p>Mother’s condition at birth: <span>${mdhBirthConditionMother}</span></p>  
                      <p>Complications that occurred during birth:</p>
                      <ul>
                        ${mdhForceps === true ? `<li>Forceps</li>` : ""}
                        ${mdhBreech === true ? `<li>Breech</li>` : ""}
                        ${mdhInduced === true ? `<li>Induced</li>` : ""}
                        ${mdhCeasarean === true ? `<li>Ceasarean</li>` : ""}
                      </ul>
                      <p>Other deliver complications: <span>${mdhDeliveryComplications}</span></p>  
                      <p>Incubator: <span>${mdhIncubator}</span></p>  
                      <p>Jaundiced: <span>${mdhJaundiced}</span></p>  
                      <p>Breathing problems right after birth? <span>${mdhBreathingProblems}</span></p>  
                      <p>Supplemental oxygen? <span>${mdhSupplementalOxygen}</span></p>  
                      <p>Was anesthesia used during delivery? If so, what kind? <span>${mdhAnesthesia}</span></p>  
                      <p>Mother's length of hospital stay? <span>${mdhMotherLengthHospital}</span></p>  
                      <p>Child's length of hospital stay? <span>${mdhChildLengthHospital}</span></p>  
                    </div>
                    
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Development</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>At what age did this child first do the following?</p>  
                      <ul>
                        ${
                          mdhTurnOverMonths !== null || mdhTurnOverYear !== null
                            ? `<li><p>Turn over:<em> ${
                                mdhTurnOverMonths !== null
                                  ? `<span>${mdhTurnOverMonths} ${
                                      mdhTurnOverMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhTurnOverYear !== null
                                  ? ` <span>${mdhTurnOverYear} ${
                                      mdhTurnOverYear === "1" ? `year` : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhWalkDownStairsMonths !== null ||
                          mdhWalkDownStairsYear !== null
                            ? `<li><p>Walk down stairs:<em> ${
                                mdhWalkDownStairsMonths !== null
                                  ? `<span>${mdhWalkDownStairsMonths} ${
                                      mdhWalkDownStairsMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhWalkDownStairsYear !== null
                                  ? ` <span>${mdhWalkDownStairsYear} ${
                                      mdhWalkDownStairsYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhSitAloneMonths !== null || mdhSitAloneYear !== null
                            ? `<li><p>Sit alone:<em> ${
                                mdhSitAloneMonths !== null
                                  ? `<span>${mdhSitAloneMonths} ${
                                      mdhSitAloneMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhSitAloneYear !== null
                                  ? ` <span>${mdhSitAloneYear} ${
                                      mdhSitAloneYear === "1" ? `year` : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhAttractedSoundMonths !== null ||
                          mdhAttractedSoundYear !== null
                            ? `<li><p>Show interest in or attraction to sound:<em> ${
                                mdhAttractedSoundMonths !== null
                                  ? `<span>${mdhAttractedSoundMonths} ${
                                      mdhAttractedSoundMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhAttractedSoundYear !== null
                                  ? ` <span>${mdhAttractedSoundYear} ${
                                      mdhAttractedSoundYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhCrawlMonths !== null || mdhCrawlYear !== null
                            ? `<li><p>Crawl:<em> ${
                                mdhCrawlMonths !== null
                                  ? `<span>${mdhCrawlMonths} ${
                                      mdhCrawlMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhCrawlYear !== null
                                  ? ` <span>${mdhCrawlYear} ${
                                      mdhCrawlYear === "1" ? `year` : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhUnderstandWordsMonths !== null ||
                          mdhUnderstandWordsYear !== null
                            ? `<li><p>Understand first words:<em> ${
                                mdhUnderstandWordsMonths !== null
                                  ? `<span>${mdhUnderstandWordsMonths} ${
                                      mdhUnderstandWordsMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhUnderstandWordsYear !== null
                                  ? ` <span>${mdhUnderstandWordsYear} ${
                                      mdhUnderstandWordsYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhStandAloneMonths !== null ||
                          mdhStandAloneYear !== null
                            ? `<li><p>Stand alone:<em> ${
                                mdhStandAloneMonths !== null
                                  ? `<span>${mdhStandAloneMonths} ${
                                      mdhStandAloneMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhStandAloneYear !== null
                                  ? ` <span>${mdhStandAloneYear} ${
                                      mdhStandAloneYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhSpeakFirstWordsMonths !== null ||
                          mdhSpeakFirstWordsYear !== null
                            ? `<li><p>Speak first words:<em> ${
                                mdhSpeakFirstWordsMonths !== null
                                  ? `<span>${mdhSpeakFirstWordsMonths} ${
                                      mdhSpeakFirstWordsMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhSpeakFirstWordsYear !== null
                                  ? ` <span>${mdhSpeakFirstWordsYear} ${
                                      mdhSpeakFirstWordsYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhWalkAloneMonths !== null ||
                          mdhWalkAloneYear !== null
                            ? `<li><p>Walk alone:<em> ${
                                mdhWalkAloneMonths !== null
                                  ? `<span>${mdhWalkAloneMonths} ${
                                      mdhWalkAloneMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhWalkAloneYear !== null
                                  ? ` <span>${mdhWalkAloneYear} ${
                                      mdhWalkAloneYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhSpeakSentencesMonths !== null ||
                          mdhSpeakSentencesYear !== null
                            ? `<li><p>Speak in sentences:<em> ${
                                mdhSpeakSentencesMonths !== null
                                  ? `<span>${mdhSpeakSentencesMonths} ${
                                      mdhSpeakSentencesMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhSpeakSentencesYear !== null
                                  ? ` <span>${mdhSpeakSentencesYear} ${
                                      mdhSpeakSentencesYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                        ${
                          mdhWalkUpStairsMonths !== null ||
                          mdhWalkUpStairsYear !== null
                            ? `<li><p>Walk up stairs:<em> ${
                                mdhWalkUpStairsMonths !== null
                                  ? `<span>${mdhWalkUpStairsMonths} ${
                                      mdhWalkUpStairsMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhWalkUpStairsYear !== null
                                  ? ` <span>${mdhWalkUpStairsYear} ${
                                      mdhWalkUpStairsYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</em></p></li>`
                            : ""
                        }
                      </ul>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h3>Early Years</h3>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>Was this child breast-fed? <span>${mdhBreastFed}</span></p>
                      <p>When weaned? <span>${mdhBreastFedWeaned}</span></p>
                      <p>Was this child bottle-fed? <span>${mdhBottleFed}</span></p>
                      <p>When weaned? <span>${mdhBottleFedWeaned}</span></p>
                      <p>When was this child toilet trained?</p>
                      <ul>
                      ${
                        mdhToiletTrainedDay !== null
                          ? `<li><p>Days: <span>${mdhToiletTrainedDay}</span></p></li>`
                          : ""
                      }
                      ${
                        mdhToiletTrainedNight !== null
                          ? `<li><p>Nights: <span>${mdhToiletTrainedNight}</span></p></li>`
                          : ""
                      }
                      </ul>
                      <p>Did bed-wetting occur after toilet training? <span>${mdhBedWetting}</span></p>  
                      ${
                        mdhBedWetting === "Yes"
                          ? `
                              <p>If yes, until what age? <span>${mdhBedWettingStop}</span></p>
                            `
                          : ""
                      }
                      <p>Did bed-soiling occur? <span>${mdhBedSoiling}</span></p>  
                      ${
                        mdhBedSoiling === "Yes"
                          ? `
                              <p>If yes, until what age? <span>${mdhBedSoilingStop}</span></p>
                            `
                          : ""
                      }
                      <p>Were there medical reasons for bed-wetting or bed-soiling? <span>${mdhBedWettingMedicalReasons}</span></p>  
                      ${
                        mdhBedWettingMedicalReasons === "Yes"
                          ? `
                              <p>If yes, please describe: <span>${mdhBedWettingMedicalReasonsDescription}</span></p>
                            `
                          : ""
                      }
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            ${
              mdhWalkingDifficulty === true
                ? `<section>
                  <h3>Developmental</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <p>${diName} experienced the following problems:</p>  
                          <ul>
                            ${
                              mdhWalkingDifficulty === true
                                ? `<li><p>Walking difficulty${
                                    mdhWalkingDifficultyDescription !== null
                                      ? `: <span>${mdhWalkingDifficultyDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhUnclearSpeech === true
                                ? `<li><p>Unclear speech${
                                    mdhUnclearSpeechDescription !== null
                                      ? `: <span>${mdhUnclearSpeechDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhFeedingProblem === true
                                ? `<li><p>Feeding problem${
                                    mdhFeedingProblemDescription !== null
                                      ? `: <span>${mdhFeedingProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhUnderweightProblem === true
                                ? `<li><p>Underweight problem${
                                    mdhUnderweightProblemDescription !== null
                                      ? `: <span>${mdhUnderweightProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhOverweightProblem === true
                                ? `<li><p>Overweight problem${
                                    mdhOverweightProblemDescription !== null
                                      ? `: <span>${mdhOverweightProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhColic === true
                                ? `<li><p>Colic${
                                    mdhColicDescription !== null
                                      ? `: <span>${mdhColicDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhSleepProblem === true
                                ? `<li><p>Sleep problem${
                                    mdhSleepProblemDescription !== null
                                      ? `: <span>${mdhSleepProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhEatingProblem === true
                                ? `<li><p>Eating problem${
                                    mdhEatingProblemDescription !== null
                                      ? `: <span>${mdhEatingProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhLearningRideBike === true
                                ? `<li><p>Difficulty learning to ride a bike${
                                    mdhLearningRideBikeDescription !== null
                                      ? `: <span>${mdhLearningRideBikeDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhLearningSkip === true
                                ? `<li><p>Difficulty learning how to skip${
                                    mdhLearningSkipDescription !== null
                                      ? `: <span>${mdhLearningSkipDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhLearningThrowCatch === true
                                ? `<li><p>Difficulty learning to throw or catch${
                                    mdhLearningThrowCatchDescription !== null
                                      ? `: <span>${mdhLearningThrowCatchDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhMotorSkillsFirstFour === true
                                ? `<li><p>Motor skills${
                                    mdhMotorSkillsFirstFourDescription !== null
                                      ? `: <span>${mdhMotorSkillsFirstFourDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhTemperTantrum === true
                                ? `<li><p>Temper tantrums${
                                    mdhTemperTantrumDescription !== null
                                      ? `: <span>${mdhTemperTantrumDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhNoThriveFirstFour === true
                                ? `<li><p>Failure to thrive${
                                    mdhNoThriveFirstFourDescription !== null
                                      ? `: <span>${mdhNoThriveFirstFourDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhSeparationAnxiety === true
                                ? `<li><p>Separating from parents${
                                    mdhSeparationAnxietyDescription !== null
                                      ? `: <span>${mdhSeparationAnxietyDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhExcessiveCrying === true
                                ? `<li><p>Excessive crying${
                                    mdhExcessiveCryingDescription !== null
                                      ? `: <span>${mdhExcessiveCryingDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                          </ul>
                          ${
                            mdhChangeWritingHand !== null
                              ? `<p>Has this child ever been forced to change writing hand? <span>${mdhChangeWritingHand}</span></p>`
                              : ""
                          }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }
            

          </main>
         </body>
      </html>
    `;
};
