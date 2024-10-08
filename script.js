document.getElementById('fresnel-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);
    const frequency = parseFloat(document.getElementById('frequency').value);

    if (distance > 0 && frequency > 0) {
        const fresnelZone = 8.656 * Math.sqrt(distance / frequency);

        const truncatedFresnelZone = Math.floor(fresnelZone * 100000) / 100000;

        document.getElementById('fresnel-value').textContent = truncatedFresnelZone.toFixed(5);
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').classList.add('show');
    } else {
        document.getElementById('result').style.display = 'block';
        document.getElementById('result').classList.add('show');
        document.getElementById('fresnel-value').textContent = 'Por favor, introduce valores válidos.';
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('distance').value = '';
    document.getElementById('frequency').value = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('result').classList.remove('show');
});

const toggleButton = document.getElementById('toggleInstructions');
const instructions = document.getElementById('instructions');

toggleButton.addEventListener('click', function() {
    if (instructions.style.display === 'none' || instructions.style.display === '') {
        instructions.style.display = 'block';
        toggleButton.textContent = 'Cerrar Instrucciones';
    } else {
        instructions.style.display = 'none';
        toggleButton.textContent = 'Abrir Instrucciones';
    }
});
