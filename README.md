The purpose of this project is to generate a PDF from a JSON object sent from One Neuro's report writer web app, built with love using React. The index.js file in the ./sever/documents/ folder contains the template which receives the JSON data and maps it to the template which is then output to a PDF and downloaded to the user's computer.

This project contains both the client-side and server-side scripts to generate a PDF. The client-side files contain placeholder data for the One Neuro report generating app **(located in the "/src/App.js" file).** This placeholder data can be used instead of accepting the JSON object from the report generating app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Server-side:
## Start the Express server to process the PDF
- Cd into /server/index.js
- Open a Terminal and type nodemon index.js


# Client-side:
## Start the React app to send the hard-coded data to the PDF generator
- Cd into /src/App.js
- Open a Terminal and type npm start


