/// <reference types="Cypress" />

context("3 seconds page test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5000");
    });

    it("Wait for Hello World", () => {
        cy
            .contains("3-seconds-page.html")
            .click();
        cy.get("[data-test-hello-world]").contains("Hello World", { timeout: 15000 });
    });
});
