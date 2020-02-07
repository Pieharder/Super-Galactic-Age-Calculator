import { PersonalAge } from "./../src/Galactic-Age-Calculator";

describe ('PersonalAge', () => {
  let person;

  beforeEach(() => {
    person = new PersonalAge(18, 80)
  });

  test("should calculate age in years on Mercury", () => {
    expect(person.ageOnMercury()).toEqual(75)
  });

  test("should calculate years left to live on Mercury assuming predefined age(18) and lifespan(80)", () => {
    expect(person.remainingLifeOnMercury()).toEqual(258)
  });
  
  test("should calculate age in years on Venus", () => {
    expect(person.ageOnVenus()).toEqual(29)
  });

  test("should calculate years left to live on Venus assuming predefined age(18) and lifespan(80)", () => {
    expect(person.remainingLifeOnVenus()).toEqual(101)
  });

});