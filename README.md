# AI-Powered Job Application Tracker

This project is a web application designed to help users track and manage simulated job applications. It includes features such as storing resume data, providing feedback on resumes,job recommentaions based on enetred user skills using remotive REST API, managing job application statuses, and more. The application is split into two parts: a frontend built with Next.js and a backend built with Node.js and Express.  

## Live Demo
- **Frontend (Deployed on Vercel)**: [Job AI Tracker Frontend](https://job-ai-tracker-frontend.vercel.app)
- **Backend (Deployed on Render)**: [Job AI Application Tracker Backend](https://job-ai-application-tracker-backend.onrender.com)

## Local Development Setup

### Requirements
- **Node.js** (v14.x or later)
- **npm** (v6.x or later) or **yarn**
- **Knex** for database migrations
- **PostgreSQL** for the backend database

### Steps to Run the Project Locally

1. **Clone the repository:**
    ```bash
    git clone https://github.com/obinnadanil/Job_AI_Application_Tracker.git
    cd Job_AI_Application_Tracker
    ```

2. **Setup the Backend**
    - Navigate to the `job_AI_Application_tracker` directory and install dependencies:
      ```bash
      cd job_tracker_backend
      npm install
      ```

    - Make sure you have a `.env` file for your backend with the following environment variables:
      ```env
      DB_HOST=your-database-host
      DB_USER=your-database-user
      DB_PASSWORD=your-database-password
      DB_NAME=your-database-name
      ```
      For local development, you can set up a PostgreSQL database or connect to a cloud database like Render or freeDB.

    - Start the backend server:
      ```bash
      npm run dev
      ```
      The backend will run on `http://localhost:5000/api`.

3. **Setup the Frontend**
    - Navigate to the `job_AI_tracker_frontend` directory and install dependencies:
      ```bash
      cd job_tracker_frontend
      npm install
      ```

    - Create a `.env.local` file in the root of your `job_AI_tracker_frontend` folder with the following content:
      ```env
      NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api  # for local development
      ```

    - Start the frontend development server:
      ```bash
      npm run dev
      ```
      The frontend will be accessible at `http://localhost:3000`.

## How It Works

- **Frontend (Next.js)**: The frontend allows users to input and track job applications, as well as receive resume feedback. It communicates with the backend using the REST API.
  
- **Backend (Node.js with Express)**: The backend provides APIs for managing job application data, user authentication, and storing/retrieving feedback on resumes.
  
- **Database (PostgreSQL)**: The backend uses PostgreSQL to store user data, job applications, and resume feedback. Migrations are handled with Knex.

## Production URLs
- **Frontend (Vercel)**: [Job AI Tracker Frontend](https://job-ai-tracker-frontend.vercel.app)
- **Backend (Render)**: [Job AI Application Tracker Backend](https://job-ai-application-tracker-backend.onrender.com)

## Local URLs
- **Frontend (Local)**: `http://localhost:3000`
- **Backend (Local)**: `http://localhost:5000/api`

## Database Setup

1. **Knex Migrations**: Run migrations to set up the database schema.
    ```bash
    npm run setupd:database
    ```

2. **Database Configuration**: Configure your `.env` file with your database credentials (PostgreSQL). Update your knexfile to reflect the keys defined in your `.env` file.

## Additional Features
- **Resume Feedback**: The app provides suggestions on improving resumes based on analysis of the text (e.g., suggesting adding a summary section, use of action verbs, etc.).
- **Job Application Status Tracking**: Track job applications, including statuses like "Applied", "Interview Scheduled", "Offer Received", "Rejected".

## Technologies Used
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express, Knex, PostgreSQL
- **Deployment**: Vercel (Frontend), Render (Backend)
- **Authentication**: JWT
