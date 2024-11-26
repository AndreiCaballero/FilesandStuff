document.getElementById('randomFactBtn').addEventListener('click', getRandomFact);

function getRandomFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fact').innerText = data.fact;
        })
        .catch(error => {
            console.error('Error fetching the cat fact:', error);
        });
}
