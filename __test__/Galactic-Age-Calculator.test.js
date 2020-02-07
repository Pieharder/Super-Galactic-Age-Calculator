import { PersonalAge } from "./../src/Galactic-Age-Calculator";

describe ('PersonalAge', () => {
  let person;

  beforeEach(() => {
    person = new PersonalAge(18, 80)
  });

  test("should calculate age in years on Mercury", () => {
    expect(person.ageOnMercury()).toEqual(75)
  });

  test("should calculate years left to live on Mercury assuming predefined age and lifespan", () => {
    expect(80).toEqual(258)
  });

});