const input = document.querySelector('input');
const outputCelsius = document.getElementById('celsius');
const outputFahrenheit = document.getElementById('fahrenheit');

input.addEventListener('input', updateValue);

function updateValue(t) {
    outputCelsius.textContent = t.srcElement.value;
}