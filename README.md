The purpose of this project is to generate a PDF from a JSON object sent from One Neuro's report writer web app, built using React. The index.js file in the /sever/documents/ folder is a JavaScript literal HTML template that receives the JSON data from the React app and then generates a PDF which is downloaded to the user's computer.

This project contains both the client-side and server-side scripts to generate a PDF. The client-side files were used during development to simulate data from the React app **(located in the "/src/App.js" file).** This file contains hard-coded placeholder data that would be sent from the React app. 

**Note:** If you want to use the React app inside the client folder (instead of the report generator), rename the "index-placeholder-data.js" file in the 'server/documents/' folder to "index.js", and rename the current "index.js" file in that directory to something else.

# Set up
- Start by downloading or cloning the repository (green button).
- After unzipping and opening the folder in your editor, open a terminal and cd into the **"/src/"** directory
- type 'npm install' to install all necessary dependices for the client
- cd into the **"/server/"** folder
- type 'npm install' to install all necessary dependices for the server

# Server-side:
## Start the Express server to process the PDF
- Cd into /server/
- Open a Terminal and type 'nodemon index.js' (PCs might need to use 'npx nodemon' instead)


# Client-side:
## Start the React app to send the hard-coded data to the PDF generator
- Cd into /src/
- Open a Terminal and type 'npm start'


