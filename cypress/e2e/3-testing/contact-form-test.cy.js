describe("contact form send", () => {
  it("can send a request through a form", () => {
    cy.visit("127.0.0.1:5500/contact.html");
    cy.get("input#name").type("John Doe");
    cy.get("input#subject").type("Subject is not important");
    cy.get("input#email").type("John@Doe.no");
    cy.get("input#address").type(
      "Johns Road 1, 3000 Hollywood dreams, United states of America"
    );
    cy.get("button").click();
    cy.get(".message").contains("Submission success");
  });
});
