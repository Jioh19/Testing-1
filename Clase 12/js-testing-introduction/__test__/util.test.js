const { generateText } = require('../util.js');

describe('Pruebas de salida de datos', () => {
	test('Salida de NOmbre y Edad', () => {
		const text = generateText('Daniel', 30);
		expect(text).toBe('Daniel (30 years old)');
		const text2 = generateText('Lucas', 25);
		expect(text2).toBe('Lucas (25 years old)');
	});

	it('Salida con datos vacios', () => {
		const text = generateText('', null);
		expect(text).toBe(' (null years old)');
	});

	test('Salida sin datos', () => {
		const text = generateText();
		expect(text).toBe('undefined (undefined years old)');
	});

	exports.generateText = (name, age) => {
		// Returns output text
		return `${name} (${age} years old)`;
	};

	exports.createElement = (type, text, className) => {
		// Creates a new HTML element and returns it
		const newElement = document.createElement(type);
		newElement.classList.add(className);
		newElement.textContent = text;
		return newElement;
	};

	exports.validateInput = (text, notEmpty, isNumber) => {
		// Validate user input with two pre-defined rules
		if (!text) {
			return false;
		}
		if (notEmpty && text.trim().length === 0) {
			return false;
		}
		if (isNumber && +text === NaN) {
			return false;
		}
		return true;
	};
});
