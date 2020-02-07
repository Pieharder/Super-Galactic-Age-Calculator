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
    expect(person.remainingLifeOnVenus()).toEqual(100)
  });
    
  test("should calculate age in years on Mars", () => {
    expect(person.ageOnMars()).toEqual(9)
  });

  test("should calculate years left to live on Mars assuming predefined age(18) and lifespan(80)", () => {
    expect(person.remainingLifeOnMars()).toEqual(32)
  });
    
  test("should calculate age in years on Jupiter", () => {
    expect(person.ageOnJupiter()).toEqual(1)
  });

  test("should calculate years left to live on Jupiter assuming predefined age(18) and lifespan(80)", () => {
    expect(person.remainingLifeOnJupiter()).toEqual(5)
  });
});

describe ('PersonalAge', () => {
  let oldPerson;

  beforeEach(() => {
    oldPerson = new PersonalAge(100, 80)
  });

  test("should calculate years lived passed average lifespan on Mercury assuming predefined age(100) and lifespan(80)", () => {
    expect(oldPerson.extraLifeOnMercury()).toEqual(83)
  });

  test("should calculate years lived passed average lifespan on Venus assuming predefined age(100) and lifespan(80)", () => {
    expect(oldPerson.extraLifeOnVenus()).toEqual(32)
  });



});
