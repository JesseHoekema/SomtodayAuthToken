const params = new URLSearchParams(window.location.search);
const token = params.get('tokenInfo');

const tokenDiv = document.getElementById('token');
const copyBtn = document.getElementById('copyBtn');
const doneBtn = document.getElementById('doneBtn');

if(token){
    tokenDiv.textContent = token;
} else {
    tokenDiv.textContent = 'No access token found';
    copyBtn.disabled = true;
    doneBtn.disabled = true;
}

copyBtn.addEventListener('click', () => {
    if(token){
        navigator.clipboard.writeText(token).then(() => {
            alert('Token copied to clipboard!');
        }).catch(() => {
            alert('Failed to copy token.');
        });
    }
});

doneBtn.addEventListener('click', () => {
    window.location.href = 'https://leerling.somtoday.nl/rooster';
});
