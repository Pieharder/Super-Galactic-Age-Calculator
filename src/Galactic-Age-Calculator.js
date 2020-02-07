export class PersonalAge {
  

  constructor(age, lifeExpectency) {
    this.age = age
    this.lifeExpectency = lifeExpectency
  }

  ageOnMercury(age) {
    let ageInYearsMercury = (Math.floor(this.age / .24));
    
    return ageInYearsMercury
  }

}