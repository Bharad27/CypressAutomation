describe('Amazon Web Automation Using Cypress', function () {

    it('Launch Amazon and Search for TV', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type("Samsung TV")
        cy.get('#nav-search-submit-button').click()
        cy.wait(50)
        cy.get('[data-asin="B07CL4GLQW"]>:nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()
        cy.wait(50)
        cy.get('#productTitle').should('be.visible')
        cy.get('#add-to-cart-button').click()
        cy.wait(5000)
        cy.get('[class="a-form-label"]').should('be.visible')
        cy.wait(50)
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

})