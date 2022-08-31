// Buscar Produtos.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


//<reference types = "cypress" />

context('Shopping Online', () =>{
    it('Buscando produtos', () => {
     
    cy.visit('https://www.onlineshopping.com.br/')
    cy.get(':nth-child(2) > .container > .grid > .row > .six > .category > .ui > .prompt').type('Notebook')
    cy.get('.fixed > .container > .grid > .row > .six > .category > .ui > .button > .search').click()
     
    })

})