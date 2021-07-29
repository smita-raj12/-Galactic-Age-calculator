import Age from '../src/js/agecal.js';

describe('Age', () => {

  test('should correctly returns mercury personage', () => {
    const ageAcalculator = new Age(25);
    expect(ageAcalculator.mercuryyears()).toEqual(104);
  });

  test('should correctly returns venus person age', () => {
    const ageAcalculator = new Age(25);
    expect(ageAcalculator.venusYears()).toEqual(40);
  });
});  