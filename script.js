const coaches = [
    "michel8sanchez\n\nMíchel",
    "rubenbaraja's profile picture\nrubenbaraja\n\nRubén Baraja",
    "pezzolanodt's profile picture\npezzolanodt\n\nPaulo Pezzolano",
    "rafabenitezrb's profile picture\nrafabenitezrb\n\nRafa Benitez",
    "jose.bordalas's profile picture\njose.bordalas\n\nJosé Bordalás",
    "garciapimienta7's profile picture\ngarciapimienta7\n\nFranc Garcia Pimienta",
    "xavi's profile picture\nxavi\n\nXavi Hernández",
    "marcelinogarciatoral's profile picture\nmarcelinogarciatoral\n\nMarcelino Garcia Toral",
    "luisgarciaplaza's profile picture\nluisgarciaplaza\n\nLuis Garcia Plaza",
    "simeone's profile picture\nsimeone\n\nDiego Pablo Simeone",
    "pepe__mel's profile picture\npepe__mel\n\nPepe Mel",
    "mrancelotti's profile picture\nmrancelotti\n\nCarlo Ancelotti",
    "_luis_garcia_10's profile picture\n_luis_garcia_10\n\nLuis Garcia Fernandez",
    "alonsodt's profile picture\nalonsodt\n\nDiego Alonso"
];

const coachList = document.getElementById('coachList');

coaches.forEach(coach => {
    const coachBlock = document.createElement('div');
    coachBlock.className = 'coach-block';
    
    const textArea = document.createElement('textarea');
    textArea.rows = 3;
    textArea.value = coach;
    textArea.readOnly = true;

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.onclick = () => copyToClipboard(textArea);

    coachBlock.appendChild(textArea);
    coachBlock.appendChild(copyButton);
    coachList.appendChild(coachBlock);
});

function copyToClipboard(textArea) {
    textArea.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}
