const express = require('express');
const bodyParser = require('body-parser');
const sqlite = require('./db/sqlite');
const sessionManager = require('./session/sessionManager');
const ussdHandler = require('./ussd/handler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to the database
// sqlite.connect()
//     .then(() => {
//         console.log('Connected to the database');
//     })
//     .catch(err => {
//         console.error('Database connection error:', err);
//     });

// USSD endpoint
app.post('/ussd', (req, res) => {
    const { phoneNumber, text } = req.body;
    sessionManager.handleSession(phoneNumber, text)
        .then(response => {
            res.send(response);
        })
        .catch(err => {
            console.error('Error handling USSD request:', err);
            res.status(500).send('Internal Server Error');
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    sqlite.close()
        .then(() => {
            console.log('Database connection closed');
            process.exit(0);
        })
        .catch(err => {
            console.error('Error closing database connection:', err);
            process.exit(1);
        });
});