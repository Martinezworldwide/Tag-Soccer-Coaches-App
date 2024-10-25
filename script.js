document.addEventListener("DOMContentLoaded", () => {
    updateCharCount();
    loadDarkMode();
    loadSavedUsernames();
    loadThemeSchedule();
    renderUsernameTable();
});

const usernames = [
    "@michel8sanchez",
    "@rubenbaraja",
    "@pezzolanodt",
    "@rafabenitezrb",
    "@jose.bordalas",
    "@garciapimienta7",
    "@xavi",
    "@marcelinogarciatoral",
    "@luisgarciaplaza",
    "@simeone",
    "@pepe__mel",
    "@mrancelotti",
    "@_luis_garcia_10",
    "@alonsodt"
];

// AI-powered username suggestion (mocked for now)
function suggestUsernames() {
    const suggestions = generateRandomUsernames();
    suggestions.forEach(username => usernames.push(username));
    renderUsernameTable();
}

// Mock AI suggestion generator
function generateRandomUsernames() {
    const prefixes = ["coach", "soccer", "pro"];
    const suffixes = ["2024", "legend", "official"];
    const randomUsernames = [];
    
    for (let i = 0; i < 5; i++) {
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        randomUsernames.push(`@${prefix}_${suffix}`);
    }

    return randomUsernames;
}

function openBatchActions() {
    const batchContainer = document.getElementById('batchActionContainer');
    batchContainer.style.display = batchContainer.style.display === 'none' ? 'block' : 'none';
}

function applyBatchActions() {
    const prefix = document.getElementById('batchPrefix').value;
    const suffix = document.getElementById('batchSuffix').value;
    usernames.forEach((username, index) => {
        usernames[index] = `${prefix}${username}${suffix}`;
    });
    renderUsernameTable();
}

// User Authentication (Mocked)
function login() {
    alert("Logging in (mock). In the real app, this would link to a backend.");
}

function register() {
    alert("Registering (mock). In the real app, this would link to a backend.");
}
