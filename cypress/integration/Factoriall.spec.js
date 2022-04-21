///<reference types="cypress"/>
describe("Factoriall", () => {
  beforeEach(() => {
    cy.visit("http://qainterview.pythonanywhere.com/");
  });

  it("Debe calcular el factorial si el numero es valido", () => {
    cy.get("#number").type("5");
    cy.get("#getFactorial").click();
    cy.get("#resultDiv").should("contain", "The factorial of 5 is: 120");
  });

  it("Debe mostrar un error cuando se intenta calcular el factorial sin introducir un valor", () => {
    cy.get("#getFactorial").click();
    cy.get("#resultDiv").should("contain", "Please enter an integer");
  });
});
