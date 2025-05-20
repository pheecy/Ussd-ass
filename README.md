# USSD Application

## Overview
This project is a USSD application developed using Node.js and SQLite. It allows users to navigate through menus and perform various tasks via USSD codes. The application supports multiple languages and includes session management to enhance user experience.

## Project Structure
```
ussd-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── db
│   │   └── sqlite.js         # SQLite database connection management
│   ├── session
│   │   └── sessionManager.js  # Session management for users
│   ├── ussd
│   │   ├── handler.js        # USSD request and response handling
│   │   └── languages
│   │       ├── en.json       # English language translations
│   │       └── sw.json       # Swahili language translations
│   └── utils
│       └── index.js          # Utility functions
├── package.json               # NPM configuration file
├── render.yaml                # Deployment configuration for Render
└── README.md                  # Project documentation
```

## Setup Instructions
1. **Clone the Repository**: 
   Clone the repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Install Dependencies**: 
   Navigate to the project directory and install the required dependencies:
   ```
   cd ussd-app
   npm install
   ```

3. **Database Setup**: 
   Ensure that the SQLite database is set up correctly. The application will create the necessary tables on the first run.

4. **Run the Application**: 
   Start the application locally using:
   ```
   node src/app.js
   ```

## Usage
- The application will respond to USSD requests based on the defined menus and user inputs.
- Users can select their preferred language at the start of the session.

## Deployment on Render
1. **Create a Render Account**: Sign up for an account on Render if you haven't already.

2. **Prepare Your Application**:
   - Ensure your `package.json` includes all necessary dependencies (like express, sqlite3, etc.).
   - Make sure your `app.js` listens on the correct port (usually `process.env.PORT`).

3. **Set Up Render**:
   - Go to your Render dashboard and click on "New" and then "Web Service".
   - Connect your GitHub repository where your project is hosted.

4. **Configure Render**:
   - In the service settings, set the environment to Node.js.
   - Specify the build command (usually `npm install`) and the start command (usually `node src/app.js`).
   - If you have any environment variables (like database connection strings), add them in the environment settings.

5. **Deploy**:
   - Click on "Create Web Service" to start the deployment process.
   - Render will automatically build and deploy your application.

6. **Integrate with Africa's Talking**:
   - Once your application is deployed, you will receive a public URL.
   - Use this URL in your Africa's Talking account to set up the USSD application.
   - Follow Africa's Talking documentation to configure the webhook for USSD requests to point to your deployed application.

7. **Testing**:
   - Test your USSD application using the Africa's Talking sandbox or live environment to ensure everything is working as expected.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.