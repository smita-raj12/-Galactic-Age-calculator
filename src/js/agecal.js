export default class Person{
  constructor(earthAge,height,weight,foodDiet,drink,expectancy){
    this.earthAge = earthAge; 
    this.height = height;
    this.weight = weight;
    this.foodDiet = foodDiet;
    this.drink = drink;
    this.expectancy = expectancy; 
  }

  mercuryYears(){
    this.earthAge = Math.trunc(this.earthAge/ 0.24);
    return this.earthAge;
  }
  
  venusYears(){
    this.earthAge = Math.trunc(this.earthAge/ 0.62);
    return this.earthAge;
  }

  marsYears(){
    this.earthAge = Math.trunc(this.earthAge/ 1.88);
    return this.earthAge;
  }

  jupiterYears(){
    this.earthAge = Math.trunc(this.earthAge/ 11.86);
    return this.earthAge;
  }

  lifeExpectancy(){
    if(this.height >= 5 && this.weight <= 55 && this.foodDiet === "Vegetarian"){
      this.expectancy = this.expectancy + 2;    
    } else{
      this.expectancy = this.expectancy - 2;
    }
    if(this.drink <=2){
      this.expectancy = this.expectancy - 1;
    }else{
      this.expectancy = this.expectancy - 2;
    }
    return this.expectancy;
  }

  lifeLeftOnEarth(){
    this.lifeExpectancy();
    if(this.expectancy >= this.earthAge){
      return this.expectancy-this.earthAge;
    }
  }

  mercuryLifeExpectancy(){
    return Math.trunc(this.expectancy / .24);
  }

  lifeLeftOnMercury(){
    this.lifeExpectancy();
    if(this.expectancy >= this.earthAge){
      const lifeLeftMercury = this.mercuryLifeExpectancy();
      const mercuryAge= this.mercuryYears();
      return lifeLeftMercury-mercuryAge;
    }
  }

  venusLifeExpectancy(){
    return Math.trunc(this.expectancy / 0.62);
  }

  lifeLeftOnVenus(){
    this.lifeExpectancy();
    if(this.expectancy >= this.earthAge){
      const lifeLeftVenus = this.venusLifeExpectancy();
      const venusAge= this.venusYears();
      return lifeLeftVenus-venusAge;
    }
  }

  marsLifeExpectancy(){
    return Math.trunc(this.expectancy / 1.88);
  }

  lifeLeftOnMars(){
    this.lifeExpectancy();
    if(this.expectancy >= this.earthAge){
      const lifeLeftMars = this.marsLifeExpectancy();
      const marsAge= this.marsYears();
      return lifeLeftMars-marsAge;
    }
  }

  jupiterLifeExpectancy(){
    return Math.trunc(this.expectancy / 11.86);
  }

  lifeLeftOnJupiter(){
    this.lifeExpectancy();
    if(this.expectancy >= this.earthAge){
      const lifeLeftJupiter = this.jupiterLifeExpectancy();
      const jupiterAge= this.jupiterYears();
      return lifeLeftJupiter-jupiterAge;
    }
  }
}