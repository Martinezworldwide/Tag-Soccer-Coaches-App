document.addEventListener("DOMContentLoaded", () => {
    updateCharCount();
    loadDarkMode();
    loadSavedUsernames();
});

function filterUsernames() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const textArea = document.getElementById('usernames');
    const usernames = textArea.value.split('\n');
    const filteredUsernames = usernames.filter(username => username.toLowerCase().includes(searchTerm));
    textArea.value = filteredUsernames.join('\n');
    updateCharCount();
}

function selectAllText() {
    const textArea = document.getElementById('usernames');
    textArea.select();
}

function copyToClipboard() {
    const textArea = document.getElementById('usernames');
    textArea.select();
    document.execCommand('copy');
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.textContent = 'Usernames copied!';
    setTimeout(() => copyMessage.textContent = '', 2000);
}

function updateCharCount() {
    const textArea = document.getElementById('usernames');
    const charCount = document.getElementById('charCount');
    charCount.textContent = textArea.value.length;
    updateProgressBar(textArea.value.length);
}

function updateProgressBar(charCount) {
    const maxLimit = 2200; // Max Instagram character limit
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${(charCount / maxLimit) * 100}%`;
}

function resetApp() {
    document.getElementById('usernames').value = originalUsernames;
    updateCharCount();
    document.getElementById('copyMessage').textContent = '';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    saveDarkMode();
}

function saveToFile() {
    const textArea = document.getElementById('usernames');
    const blob = new Blob([textArea.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'usernames.txt';
    link.click();
    URL.revokeObjectURL(url);
}

function loadFromFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById('usernames').value = e.target.result;
        updateCharCount();
    };
    reader.readAsText(file);
}

function saveDarkMode() {
    const darkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkMode);
}

function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

function loadSavedUsernames() {
    const savedUsernames = localStorage.getItem('usernames');
    if (savedUsernames) {
        document.getElementById('usernames').value = savedUsernames;
    }
}
