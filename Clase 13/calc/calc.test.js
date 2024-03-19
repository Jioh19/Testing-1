const { suma, resta, multiplicacion, division } = require('./calc');

describe('Pruebas de salida de datos', () => {
	test('Salida con números', () => {
		const sum = suma(10, 20);
		expect(sum).toBe(30);
		const sum2 = suma(20, 2);
		expect(sum2).toBe(40);
		const rest = resta(30, 20);
		expect(rest).toBe(10);
		const rest2 = resta(40, 20);
		expect(rest2).toBe(20);
		const mult = multiplicacion(3, 20);
		expect(mult).toBe(60);
		const mult2 = multiplicacion(4, 20);
		expect(mult2).toBe(80);
		const div = division(20, 2);
		expect(div).toBe(10);
		const div2 = division(6, 2);
		expect(div2).toBe(3);
	});

	it('Salida sin números', () => {
		const sum = suma('A', 'B');
		expect(sum).toBe(0);
		const rest = resta('A', 'B');
		expect(rest).toBe(0);
		const mult = multiplicacion('A', 'B');
		expect(mult).toBe(0);
		const div = division('A', 'B');
		expect(div).toBe(0);
	});
});
