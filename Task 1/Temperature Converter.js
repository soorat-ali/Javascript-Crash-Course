function celsiusToFahrenheit(c) {
  const f = (c * 9) / 5 + 32;
  console.log(`${c}°C is ${f}°F`);
  return f;
}

function fahrenheitToCelsius(f) {
  const c = ((f - 32) * 5) / 9;
  console.log(`${f}°F is ${c}°C`);
  return c;
}

celsiusToFahrenheit(25);
fahrenheitToCelsius(77);
