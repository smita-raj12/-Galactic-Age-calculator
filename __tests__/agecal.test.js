import Person from '../src/js/agecal.js';

describe('Person', () => {

  let ageCalculator;

  beforeEach(() =>  {
    ageCalculator = new Person(35, 5, 60,"Vegetarian", 2, 80);
  });
  
  test('should create a constructor with propreties ', () => {
    expect(ageCalculator.earthAge).toEqual(35);
    expect(ageCalculator.height).toEqual(5);
    expect(ageCalculator.weight).toEqual(60);
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

  test('should correctly returns jupiter person age', () => {
    expect(ageCalculator.jupiterYears()).toEqual(2);
  });

  test('should return if height greater than 5  weight less than 55 and food deit is Vegetarian age 81', () => {
    ageCalculator = new Person(35, 6, 50,"Vegetarian", 2, 80)
    expect(ageCalculator.lifeExpectancy()).toEqual(77);
  });

  test('should return if height greater than 5  weight less than 55 and food deit is Vegetarian drink frequency more than 2 age should be  80', () => {
    ageCalculator = new Person(35, 6, 50,"Vegetarian", 3, 80)
    expect(ageCalculator.lifeExpectancy()).toEqual(74);
  });

  test('should return life expectency on earth ', () => {
    expect(ageCalculator.lifeExpectancy()).toEqual(81);
  });

  test('should return life left on earth ', () => {
    expect(ageCalculator.lifeLeftOnEarth()).toEqual(46);
  });
  
  test('should return no life left  if age is more than expectency ', () => {
    ageCalculator = new Person(85, 5, 60,"Vegetarian", 2, 80);
    expect(ageCalculator.lifeLeftOnEarth()).toEqual("no life left");
  });

  test('should return life left on mercury ', () => {
    expect(ageCalculator.lifeLeftOnMercury()).toEqual(192);
  });

  test('should return no life if the age is more than expectency ', () => {
    ageCalculator = new Person(85, 5, 60,"Vegetarian", 2, 80);
    expect(ageCalculator.lifeLeftOnMercury()).toEqual("no life left");
  });

  test('should return life left on venus ', () => {
    expect(ageCalculator.lifeLeftOnVenus()).toEqual(74);
  });

  test('should return no life if the age is more than expectency ', () => {
    ageCalculator = new Person(85, 5, 60,"Vegetarian", 2, 80);
    expect(ageCalculator.lifeLeftOnVenus()).toEqual("no life left");
  });
  
  test('should return life left on mars ', () => {
    expect(ageCalculator.lifeLeftOnMars()).toEqual(25);
  });

  test('should return no life if the age is more than expectency ', () => {
    ageCalculator = new Person(85, 5, 60,"Vegetarian", 2, 80);
    expect(ageCalculator.lifeLeftOnMars()).toEqual("no life left");
  });

  test('should return life left on jupiter ', () => {
    expect(ageCalculator.lifeLeftOnJupiter()).toEqual(4);
  });

  test('should return no life if the age is more than expectency ', () => {
    ageCalculator = new Person(85, 5, 60,"Vegetarian", 2, 80);
    expect(ageCalculator.lifeLeftOnJupiter()).toEqual("no life left");
  });
});  