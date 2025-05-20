// filepath: /ussd-app/ussd-app/src/utils/index.js
function validateInput(input) {
    return typeof input === 'string' && input.trim() !== '';
}

function formatResponse(response) {
    return response.trim();
}

module.exports = {
    validateInput,
    formatResponse,
};