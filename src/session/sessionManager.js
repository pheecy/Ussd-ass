const sessionStore = {};

function createSession(phoneNumber, language) {
    const sessionID = generateSessionID();
    sessionStore[sessionID] = {
        phoneNumber,
        language,
        userInput: [],
    };
    return sessionID;
}

function getSession(sessionID) {
    return sessionStore[sessionID];
}

function updateSession(sessionID, userInput) {
    if (sessionStore[sessionID]) {
        sessionStore[sessionID].userInput.push(userInput);
    }
}

function deleteSession(sessionID) {
    delete sessionStore[sessionID];
}

function generateSessionID() {
    return Math.random().toString(36).substr(2, 9);
}

module.exports = {
    createSession,
    getSession,
    updateSession,
    deleteSession,
};