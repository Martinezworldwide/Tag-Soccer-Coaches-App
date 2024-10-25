function generateTags() {
    const tagList = document.getElementById('tagList').value;
    const usernames = tagList.split('\n').map(username => username.trim()).filter(username => username);
    const tagString = usernames.map(username => `@${username}`).join(' ');
    document.getElementById('output').value = tagString;
}

function copyToClipboard() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    alert('Tags copied to clipboard!');
}
