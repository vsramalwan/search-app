// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("should be able to search a company", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/");
  });

  it("should be able to do simple search without additional specialities check", () => {
    cy.findByTestId("searchbar-input").should("exist");
    cy.findByTestId("searchbar-input").type("Digitube");
    cy.findByText("Rognedino").should("be.visible");
    cy.findByText("Shangtian").should("be.visible");
    cy.findByText("Don Tan").should("be.visible");
  });

  it("should be able to do simple search with Bulldozer speciality", () => {
    cy.findByTestId("searchbar-input").should("exist");
    cy.findByTestId("searchbar-input").type("Digitube");
    cy.findByTestId("bulldozer").click();
    cy.findByText("Shangtian").should("be.visible");
  });

  it("should be able to do simple search with Compactor speciality", () => {
    cy.findByTestId("searchbar-input").should("exist");
    cy.findByTestId("searchbar-input").type("Digitube");
    cy.findByText("Rognedino").should("be.visible");
    cy.findByText("Don Tan").should("be.visible");
  });

  it("should not display any result for incorrect search", () => {
    cy.findByTestId("searchbar-input").should("exist");
    cy.findByTestId("searchbar-input").type("Ditigube");
    cy.findByText("Rognedino").should("not.exist");
    cy.findByText("Shangtian").should("not.exist");
    cy.findByText("Don Tan").should("not.exist");
  });
});
