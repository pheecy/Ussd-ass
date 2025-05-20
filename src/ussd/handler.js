const express = require('express');
const bodyParser = require('body-parser');
const sqlite = require('../db/sqlite');
const sessionManager = require('../session/sessionManager');
const languages = require('./languages');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', async (req, res) => {
    const { phoneNumber, text } = req.body;

    try {
        await sqlite.connect();

        // Session management
        let session = await sessionManager.getSession(phoneNumber);
        if (!session) {
            session = await sessionManager.createSession(phoneNumber);
        }

        // Process user input
        const response = handleUssdRequest(session, text);
        sessionManager.updateSession(session.sessionID, text);

        res.send(response);
    } catch (error) {
        console.error('Error processing USSD request:', error);
        res.status(500).send('An error occurred');
    } finally {
        await sqlite.close();
    }
});

function handleUssdRequest(session, userInput) {
    const language = session.language || 'en';
    const messages = languages[language];

    if (userInput === '') {
        return messages.welcome;
    }

    // Menu navigation logic
    switch (session.state) {
        case 'MAIN_MENU':
            return handleMainMenu(userInput, messages);
        // Add more cases for sub-menus as needed
        default:
            return messages.invalidOption;
    }
}

function handleMainMenu(userInput, messages) {
    switch (userInput) {
        case '1':
            return messages.option1Response;
        case '2':
            return messages.option2Response;
        default:
            return messages.invalidOption;
    }
}

module.exports = app;