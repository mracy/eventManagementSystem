Event Management Web App using MEAN
Table of Contents
Introduction
Features
Prerequisites
Installation
Backend
Frontend
Usage
Technology Stack
Project Structure
Database Schema
API Endpoints
Future Improvements
Contributing
License
Introduction
The Event Management Web App is a feature-rich application built using the MEAN stack (MongoDB, ExpressJS, Angular, and NodeJS). This app allows users to create, read, update, and delete events, as well as set reminders for upcoming events.

Features
Create new events with title, location, date, and reminder settings
View a list of all upcoming events
Edit existing events
Delete events
Receive notifications for upcoming events
Prerequisites
To run this project, you'll need the following installed on your system:

Node.js (version 14 or higher)
MongoDB (version 4.4 or higher)
Angular CLI (version 17 or higher)
Installation
Backend Installation
Clone the repository:
bash
Copy
git clone https://github.com/your-username/event-management-app.git
Navigate to the backend directory:
bash
Copy
cd event-management-app/backend
Install the dependencies:
Copy
npm install
Set up the MongoDB connection by providing your MongoDB URI in the server.js file.
Start the backend server:
Copy
node server.js
Frontend Installation
Navigate to the frontend directory:
bash
Copy
cd event-management-app/frontend
Install the dependencies:
Copy
npm install
Start the Angular development server:
Copy
ng serve
Open your web browser and navigate to http://localhost:4200 to access the application.
Usage
Upon launching the application, you'll see a form to create a new event.
Fill in the event details (title, location, date, and reminder) and click the "Add" button.
The newly created event will be displayed in the list of upcoming events.
You can edit an existing event by clicking the "Edit" button next to the event.
To delete an event, click the "Delete" button next to the event.
Technology Stack
Backend:
Express.js - Web application framework for Node.js
MongoDB - NoSQL database for storing event data
Mongoose - Object Data Modeling (ODM) library for MongoDB and Node.js
body-parser - Node.js body parsing middleware
cors - Node.js CORS middleware
Frontend:
Angular - TypeScript-based web application framework
Tailwind CSS - Utility-first CSS framework for styling
ngx-toastr - Angular toast notification library
Project Structure
lua
Copy
event-management-app/
├── backend/
│   ├── models/
│   │   └── Event.js
│   ├── routes/
│   │   └── eventRoutes.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── api.service.ts
    │   │   └── app.component.ts
    │   ├── styles.scss
    │   └── app.config.ts
    ├── tailwind.config.js
    └── package.json
Database Schema
The Event model in the backend uses the following schema:

javascript
Copy
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  remind: { type: Boolean, default: false },
});
API Endpoints
The backend provides the following API endpoints:

GET /api/getAll: Retrieve all events
GET /api/get/:id: Retrieve a specific event by ID
POST /api/add: Create a new event
PUT /api/update/:id: Update an existing event by ID
DELETE /api/delete/:id: Delete an event by ID
Future Improvements
Implement user authentication and authorization
Add the ability to upload event images
Provide integration with calendar services (e.g., Google Calendar, Apple Calendar)
Enhance the UI/UX with more advanced design features
Contributing
Contributions to this project are welcome. To contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push your changes to your forked repository.
Submit a pull request to the main repository.
License
This project is licensed under the HIT License.
