export class PersonalAge {
  

  constructor(age, lifeExpectency) {
    this.age = age
    this.lifeExpectency = lifeExpectency
  }

  ageOnMercury(age) {
    let ageInYearsMercury = (Math.floor(this.age / .24));
    
    return ageInYearsMercury
  }

  remainingLifeOnMercury(ageLeft) {
    let remainingYearsMercury = (Math.floor((this.lifeExpectency / .24) - (this.age / .24)));

    return remainingYearsMercury
  }

  ageOnVenus(age) {
    let ageInYearsVenus = (Math.floor(this.age / .62));
    
    return ageInYearsVenus
  }
}