export default class Person{
  constructor(earthAge,heigth,weigth,foodDiet,drink,expectancy){
    this.earthAge = earthAge; 
    this.heigth = heigth;
    this.weigth = weigth;
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
    if(this.heigth >= 5 && this.weigth <= 55 && foodDiet ==="vegitairen"){
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
}