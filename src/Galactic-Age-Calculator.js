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
  
  remainingLifeOnVenus(ageLeft) {
    let remainingYearsVenus = (Math.floor((this.lifeExpectency / .62) - (this.age / .62)));

    return remainingYearsVenus
  }
  
  ageOnMars(age) {
    let ageInYearsMars = (Math.floor(this.age / 1.88));
    
    return ageInYearsMars
  }
    
  remainingLifeOnMars(ageLeft) {
    let remainingYearsMars = (Math.floor((this.lifeExpectency / 1.88) - (this.age / 1.88)));

    return remainingYearsMars
  }
    
  ageOnJupiter(age) {
    let ageInYearsJupiter = (Math.floor(this.age / 11.86));
    
    return ageInYearsJupiter
  }
      
  remainingLifeOnJupiter(ageLeft) {
    let remainingYearsJupiter = (Math.floor((this.lifeExpectency / 11.86) - (this.age / 11.86)));

    return remainingYearsJupiter
  }
    
  extraLifeOnMercury(ageLeft) {
    let remainingYearsMercury = (Math.floor((this.age / .24) - (this.lifeExpectency / .24)));

    return remainingYearsMercury
  }
    
  extraLifeOnVenus(ageLeft) {
    let remainingYearsVenus = (Math.floor((this.age / .62) - (this.lifeExpectency / .62)));

    return remainingYearsVenus
  }

}