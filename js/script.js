function convertCelsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = celsiusToFahrenheit(celsius);
    var formula = "(" + celsius + " °C × 9/5) + 32 = " + fahrenheit.toFixed(2) + " °F";
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('formula').innerHTML = "Formula: " + formula;
  }
  
  function convertFahrenheitToCelsius() {
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    var celsius = fahrenheitToCelsius(fahrenheit);
    var formula = "(" + fahrenheit + " °F - 32) × 5/9 = " + celsius.toFixed(2) + " °C";
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('formula').innerHTML = "Formula: " + formula;
  }
  function reset() {
    document.getElementById('celsius').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById('formula').innerHTML = "";
  }
  
  function refresh() {
    location.reload();
  }
  
  // Celsius ke F
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Fahrenheit ke C
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
