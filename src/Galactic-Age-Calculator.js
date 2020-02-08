const mercuryDifferential = 0.24;
const venusDifferential = 0.62;
const marsDifferential = 1.88; 
const jupiterDifferential = 11.86;

export class PersonalAge {

  constructor(earthAge, earthLifeExpectency) {
    this.earthAge = earthAge
    this.earthLifeExpectency = earthLifeExpectency
  }

  ageOnMercury() {
    let ageInYearsMercury = (Math.floor(this.earthAge / mercuryDifferential));
    
    return ageInYearsMercury
  }

  remainingLifeOnMercury() {
    let remainingYearsMercury = (Math.floor((this.earthLifeExpectency / mercuryDifferential) - (this.earthAge / mercuryDifferential)));

    return remainingYearsMercury
  }

  ageOnVenus() {
    let ageInYearsVenus = (Math.floor(this.earthAge / venusDifferential));
    
    return ageInYearsVenus
  }
  
  remainingLifeOnVenus() {
    let remainingYearsVenus = (Math.floor((this.earthLifeExpectency / venusDifferential) - (this.earthAge / venusDifferential)));

    return remainingYearsVenus
  }
  
  ageOnMars() {
    let ageInYearsMars = (Math.floor(this.earthAge / marsDifferential));
    
    return ageInYearsMars
  }
    
  remainingLifeOnMars() {
    let remainingYearsMars = (Math.floor((this.earthLifeExpectency / marsDifferential) - (this.earthAge / marsDifferential)));

    return remainingYearsMars
  }
    
  ageOnJupiter() {
    let ageInYearsJupiter = (Math.floor(this.earthAge / jupiterDifferential));
    
    return ageInYearsJupiter
  }
      
  remainingLifeOnJupiter() {
    let remainingYearsJupiter = (Math.floor((this.earthLifeExpectency / jupiterDifferential) - (this.earthAge / jupiterDifferential)));

    return remainingYearsJupiter
  }
    
  extraLifeOnMercury() {
    let extraYearsMercury = (Math.floor((this.earthAge / mercuryDifferential) - (this.earthLifeExpectency / mercuryDifferential)));

    return extraYearsMercury
  }
    
  extraLifeOnVenus() {
    let extraYearsVenus = (Math.floor((this.earthAge / venusDifferential) - (this.earthLifeExpectency / venusDifferential)));

    return extraYearsVenus
  }
    
  extraLifeOnMars() {
    let extraYearsMars = (Math.floor((this.earthAge / marsDifferential) - (this.lifeExpectency / marsDifferential)));

    return extraYearsMars
    console.log(rema)
  }
    
  extraLifeOnJupiter() {
    let extraYearsJupiter = (Math.floor((this.earthAge / jupiterDifferential) - (this.earthLifeExpectency / jupiterDifferential)));

    return extraYearsJupiter
  }
}