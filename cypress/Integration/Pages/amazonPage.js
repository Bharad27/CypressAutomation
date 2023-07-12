class Amazon {
    launchURL() {
        return cy.visit('https://www.amazon.com/')
    }
    homepageAmazonIcon() {
        return cy.get('#nav-global-location-slot > #nav-global-location-data-modal-action > #nav-global-location-popover-link > #glow-ingress-block > #glow-ingress-line2')
    }

    homepageAllSideMenu() {
        return cy.get('#nav-hamburger-menu')
    }

    homepageSignIn() {
        return cy.get('#nav-link-accountList-nav-line-1')
    }

    searchBox() {
        return cy.get('#nav-search > #nav-search-bar-form > .nav-fill > .nav-search-field > #twotabsearchtextbox')
    }

    searchButton() {
        return cy.get('#nav-search-submit-button')
    }

    resultReturned() {
        return cy.get('.a-color-state')
    }

    verifyTvReturned() {
        return cy.get('[data-asin="B07CL4GLQW"]>:nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')
    }


    selectTvReturned() {
        return cy.get('[data-asin="B07CL4GLQW"]>:nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium')
    }

    selectedProductTitle() {
        return cy.get('#productTitle')
    }

    productRating() {
        return cy.get('#averageCustomerReviews > [data-action="acrStarsLink-click-metrics"] > #acrPopover > span.a-declarative > .a-popover-trigger > .a-icon-star')
    }

    productImage() {
        return cy.get('#landingImage')
    }

    returnedPrice() {
        return cy.get('tr > .a-span12')
    }








}

export default Amazon;