const basePage = {
  baseUrl: 'https://qualityshepherd.com/',


  goto (relativeUrl = '') {
    cy.visit(`${this.baseUrl}${this.url}${relativeUrl}`)
  }
}
export default basePage
