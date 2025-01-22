function convertToCelsius() {
    const fahrenheit = document.getElementById('temperature').value;
    if (fahrenheit === '') {
        document.getElementById('result').innerText = "Please enter a temperature.";
        return;
    }
    const celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById('result').innerText = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
}