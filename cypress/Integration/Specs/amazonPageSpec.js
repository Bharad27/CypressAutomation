import Amazon from '../Pages/amazonPage'

describe('Selecting Item Module', function () {

    const amazon = new Amazon()
    
    it('Verify user can navigate to launch the url', function () {

        amazon.launchURL()
        amazon.homepageAllSideMenu().should('be.visible')
        amazon.homepageAmazonIcon().should('be.visible')
        amazon.homepageSignIn().should('be.visible')
        amazon.searchBox().should('be.visible').type('Samsung Tv')
        amazon.searchButton().click()
        amazon.resultReturned().should('have.text', '"Samsung Tv"')
        amazon.verifyTvReturned().should('be.visible')
            .and('have.text', "SAMSUNG 32-inch Class LED Smart FHD TV 1080P (UN32N5300AFXZA, 2018 Model), Black")

        amazon.selectTvReturned().click();
        amazon.selectedProductTitle().should('be.visible')
            .and('contain.text', "SAMSUNG 32-inch Class LED Smart FHD TV")
        amazon.productRating().should('be.visible')
        amazon.productImage().should('be.visible')
        cy.wait(3000)
    })




})