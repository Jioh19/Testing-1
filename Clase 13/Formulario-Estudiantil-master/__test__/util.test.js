const { generateText, validateInput } = require('../util');

describe('Pruebas de salida de datos', () => {
	test('Salida de Nombre, edad y nivel', () => {
		const newElement = generateText('Juan', 32, 'Doctorado');
		expect(newElement).toBe(`Registro OK de Juan en: Doctorado.`);
	});

	test('Edad inválida', () => {
		const newElement = generateText('Juan', 0, '');
		expect(newElement).toBe(
			`Edad ingresada no válida. Por favor intentá nuevamente.`
		);
	});

	test('Edad mayor a 65', () => {
		const newElement = generateText('Juan', 66, undefined);
		expect(newElement).toBe(
			`No pudimos registrar a: Juan. Por favor contactá a soporte@dh.com para más información.`
		);
	});

	test('Nombre inválido', () => {
		const newElement = validateInput('', 'any');
		expect(newElement).toBe(false);
	});

	test('Nombre válido', () => {
		const newElement = validateInput('Juan', 'any');
		expect(newElement).toBe(true);
	});

	test('Nombre inválido', () => {
		const newElement = validateInput(' ', true);
		expect(newElement).toBe(false);
	});
});
