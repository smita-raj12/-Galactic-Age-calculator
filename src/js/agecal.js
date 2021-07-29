export default class Age{
  constructor(age){
    this.age = age; 
  }

  mercuryyears(){
    this.age = Math.trunc(this.age/ 0.24);
    return this.age;
  }
  
  venusYears(){
    this.age = Math.trunc(this.age/ 0.62);
    return this.age;
  }

  marsyears(){
    this.age = Math.trunc(this.age/ 1.88);
    return this.age;
  }

  jupiteryears(){
    this.age = Math.trunc(this.age/ 11.86);
    return this.age;
  }

}