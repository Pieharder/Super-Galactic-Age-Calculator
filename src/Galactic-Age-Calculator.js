export class PersonalAge {

  constructor(earthAge, earthLifeExpectency) {
    this.earthAge = earthAge;
    this.earthLifeExpectency = earthLifeExpectency;
  }

  ageOnMercury() {
    const mercuryDifferential = 0.24;
    let ageInYearsMercury = (Math.floor(this.earthAge / mercuryDifferential));
    
    return ageInYearsMercury;
  }

  remainingLifeOnMercury() {
    const mercuryDifferential = 0.24;
    let remainingYearsMercury = (Math.floor((this.earthLifeExpectency / mercuryDifferential) - (this.earthAge / mercuryDifferential)));

    return remainingYearsMercury;
  }

  ageOnVenus() {
    const venusDifferential = 0.62;
    let ageInYearsVenus = (Math.floor(this.earthAge / venusDifferential));
    
    return ageInYearsVenus;
  }
  
  remainingLifeOnVenus() {
    const venusDifferential = 0.62;
    let remainingYearsVenus = (Math.floor((this.earthLifeExpectency / venusDifferential) - (this.earthAge / venusDifferential)));

    return remainingYearsVenus;
  }
  
  ageOnMars() {
    const marsDifferential = 1.88; 
    let ageInYearsMars = (Math.floor(this.earthAge / marsDifferential));
    
    return ageInYearsMars;
  }
    
  remainingLifeOnMars() {
    const marsDifferential = 1.88; 
    let remainingYearsMars = (Math.floor((this.earthLifeExpectency / marsDifferential) - (this.earthAge / marsDifferential)));

    return remainingYearsMars;
  }
    
  ageOnJupiter() {
    const jupiterDifferential = 11.86;
    let ageInYearsJupiter = (Math.floor(this.earthAge / jupiterDifferential));
    
    return ageInYearsJupiter;
  }
      
  remainingLifeOnJupiter() {
    const jupiterDifferential = 11.86;
    let remainingYearsJupiter = (Math.floor((this.earthLifeExpectency / jupiterDifferential) - (this.earthAge / jupiterDifferential)));

    return remainingYearsJupiter;
  }
    
  extraLifeOnMercury() {
    const mercuryDifferential = 0.24;
    let extraYearsMercury = (Math.floor((this.earthAge / mercuryDifferential) - (this.earthLifeExpectency / mercuryDifferential)));

    return extraYearsMercury;
  }
    
  extraLifeOnVenus() {
    const venusDifferential = 0.62;
    let extraYearsVenus = (Math.floor((this.earthAge / venusDifferential) - (this.earthLifeExpectency / venusDifferential)));

    return extraYearsVenus;
  }
    
  extraLifeOnMars() {
    const marsDifferential = 1.88; 
    let extraYearsMars = (Math.floor((this.earthAge / marsDifferential) - (this.earthLifeExpectency / marsDifferential)));

    return extraYearsMars;
  }
    
  extraLifeOnJupiter() {
    const jupiterDifferential = 11.86;
    let extraYearsJupiter = (Math.floor((this.earthAge / jupiterDifferential) - (this.earthLifeExpectency / jupiterDifferential)));

    return extraYearsJupiter;
  }
}