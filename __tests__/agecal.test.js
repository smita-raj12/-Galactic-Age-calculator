import Person from '../src/js/agecal.js';

describe('Person', () => {

  let ageCalculator;

  beforeEach(() =>  {
    ageCalculator = new Person(35,5,60,"Vegetarian",2,80);
  });
  
  test('should create a constructor with propreties ', () => {
    expect(ageCalculator.earthAge).toEqual(35);
    expect(ageCalculator.heigth).toEqual(5);
    expect(ageCalculator.weigth).toEqual(60);
    expect(ageCalculator.foodDiet).toEqual("Vegetarian");
    expect(ageCalculator.drink).toEqual(2);
    expect(ageCalculator.expectancy).toEqual(80);
  });

  test('should correctly returns mercury personage', () => {
    expect(ageCalculator.mercuryYears()).toEqual(145);
  });

  test('should correctly returns venus person age', () => {
    expect(ageCalculator.venusYears()).toEqual(56);
  });

  test('should correctly returns mars person age', () => {
    expect(ageCalculator.marsYears()).toEqual(18);
  });

  test('should correctly returns mars person age', () => {
    expect(ageCalculator.jupiterYears()).toEqual(2);
  });

  test('should return life expectency on earth ', () => {
    expect(ageCalculator.lifeExpectancy()).toEqual(77);
  });

  test('should return life left on earth ', () => {
    expect(ageCalculator.lifeLeftOnEarth()).toEqual(42);
  });
  
  test('should return life left on mercury ', () => {
    expect(ageCalculator.lifeLeftOnMercury()).toEqual(175);
  });

  test('should return life left on venus ', () => {
    expect(ageCalculator.lifeLeftOnVenus()).toEqual(68);
  });
  
  test('should return life left on mars ', () => {
    expect(ageCalculator.lifeLeftOnMars()).toEqual(22);
  });

  test('should return life left on jupiter ', () => {
    expect(ageCalculator.lifeLeftOnJupiter()).toEqual(4);
  });
});  