describe("Disney characters homepage", () => {
  it("can select a character and show info", () => {
    cy.visit("127.0.0.1:5500/index.html");
    cy.wait(3000, { force: true });
    cy.get(".results").click(50, 0);
    cy.wait(3000);
    cy.go("back");
  });
});
