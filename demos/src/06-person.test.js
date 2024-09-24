const Person = require("./06-person");

//AAA
//Arrange / Given
//Act / When
//Assert / Then

describe("Test para la clase Person", () => {
  let person;
  //Arrange / Given
  beforeEach(() => {
    person = new Person("Nicolas", 45, 1.7);
  });

  test("should return down", () => {
    //Arrange / Given
    person.weight = 45;
    //Act / When
    const imc = person.calcIMC();
    //Assert / Then
    expect(imc).toBe("down");
  });

  test("should return normal", () => {
    person.weight = 59;
    const imc = person.calcIMC();

    expect(imc).toBe("normal");
  });
});
