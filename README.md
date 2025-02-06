# CreditSea Fullstack Application

## Description

A MERN stack application for processing XML files containing soft credit pull data from Experian. It includes a backend API for file upload and data extraction, a MongoDB storage system, and a React frontend for displaying processed reports.

## Features

- XML file upload and validation
- Data extraction and persistence in MongoDB
- RESTful API endpoints
- User-friendly React frontend displaying:
  - Basic Details
  - Report Summary
  - Credit Accounts Information
- Robust error handling and logging

## Requirements

**Backend:**

*   Node.js
*   Express.js
*   MongoDB
*   Multer (for file upload)
*   xml2js (for XML parsing)
*   dotenv (for environment variable management)

**Frontend:**

*   React.js
*   Axios (for API requests)
*   Tailwind CSS (for styling)

## Screenshots

<img width="900" height="500" alt="image" src="https://github.com/user-attachments/assets/cf24c173-5766-4850-9f99-ac091cd511cc" />

<img width="900" height="500" alt="image" src="https://github.com/user-attachments/assets/c577aedc-f2f2-41e4-8fb8-b259cf128c95" />

## Setup **`.env`** file

 - Create a **`.env`** file in the backend root and add:

     ```bash
     PORT=5000
     MONGO_URI=your_mongodb_connection_string


## Installation Steps

### Backend

1. **Clone the repository:**

    ```bash
    git clone https://github.com/akash-dewangan03/CreditSea-FullStack.git

2. **Navigate to the backend folder:**

    ```bash
    cd backend

3. **Install dependencies:**

   ```bash
   npm install

4. **Start the server:**

   ```bash
   node server.js

### Frontend

1. **Navigate to the frontend folder:**

    ```bash
    cd frontend

2. **Install dependencies:**

   ```bash
   npm install
   npm install axios

3. **Start the frontend:**

   ```bash
   npm run dev
  - App Running on http://localhost:5173/


## API Endpoints

* **`POST /api/upload`**: Uploads an XML file.
* **`GET /api/reports`**: Retrieves the latest credit report.

## Deployment & Assumptions

* **Deployment:** The application can be deployed using services like Render, Heroku, Vercel, or AWS.
* **Database:** MongoDB Atlas can be used for cloud database storage.
* **Frontend Hosting:** The frontend should be served using a static file server like Netlify or Vercel.
* **XML Format:** It is assumed that the XML file follows a predefined format for successful parsing.  _Please refer to the documentation or contact the developers for the specific XML schema._

