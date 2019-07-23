The purpose of this project is to generate a PDF from a JSON object sent from One Neuro's report writer web app, built using React. The index.js file in the /sever/documents/ folder is a JavaScript literal HTML template that receives the JSON data from the React app and then generates a PDF which is downloaded to the user's computer.

This project contains both the client-side and server-side scripts to generate a PDF. The client-side files were used during development to simulate data from the React app **(located in the "/src/App.js" file).** This file contains hard-coded placeholder data that would be sent from the React app.


# Server-side:
## Start the Express server to process the PDF
- Cd into /server/index.js
- Open a Terminal and type nodemon index.js


# Client-side:
## Start the React app to send the hard-coded data to the PDF generator
- Cd into /src/
- Open a Terminal and type npm start


