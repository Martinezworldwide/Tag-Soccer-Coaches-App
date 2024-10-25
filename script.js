function copyToClipboard() {
    const textArea = document.getElementById('usernames');
    textArea.select();
    document.execCommand('copy');
    alert('Usernames copied to clipboard!');
}
