import Age from '../src/js/agecal.js';

describe('Age', () => {

  test('should correctly mercury age', () => {
    const ageAcalculator = new Age(25);
    expect(ageAcalculator.mercuryyears()).toEqual(104);
  });
});  