import basePage from './basePage'

const homePage = {
    url: '',
    postTitles: '.post-title',
    githubLink: '#github-social img',
    loadMoreBtn: '#load-more',

 
    posts() {
        return cy.get(this.postTitles)
    },

   
    findPostByPaging(postTitle) {
        cy.get(this.nextPageLink).click();
        (cy.get(this.postTitles).contains(postTitle)) ? true : this.findPostByPaging(postTitle)
    }
}
export default { ...basePage, ...homePage }