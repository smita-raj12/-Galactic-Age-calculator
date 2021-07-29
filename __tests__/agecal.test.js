import Age from '../src/js/agecal.js';

describe('Age', () => {

  test('should correctly returns mercury personage', () => {
    const ageAcalculator = new Age(35);
    expect(ageAcalculator.mercuryyears()).toEqual(145);
  });

  test('should correctly returns venus person age', () => {
    const ageAcalculator = new Age(35);
    expect(ageAcalculator.venusYears()).toEqual(56);
  });

  test('should correctly returns mars person age', () => {
    const ageAcalculator = new Age(35);
    expect(ageAcalculator.marsyears()).toEqual(18);
  });
});  