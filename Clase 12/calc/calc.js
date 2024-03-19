function suma(a, b) {
	if (typeof a === 'number' && typeof b === 'number') return a + b;
	return 0;
}

function resta(a, b) {
	if (typeof a === 'number' && typeof b === 'number') return a - b;
	return 0;
}

function multiplicacion(a, b) {
	if (typeof a === 'number' && typeof b === 'number') return a * b;
	return 0;
}

function division(a, b) {
	if (typeof a === 'number' && typeof b === 'number') return a / b;
	return 0;
}

module.exports = { suma, resta, multiplicacion, division };
