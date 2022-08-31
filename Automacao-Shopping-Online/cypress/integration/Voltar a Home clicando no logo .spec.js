//<reference types = "cypress" />

context('Shopping Online', () =>{
    it('VOltar a home da pagina clicando no logo', () => {
     
    cy.visit('https://www.onlineshopping.com.br/')
    cy.get('[href="/categoria/eletronicos"]').click()
    cy.get(':nth-child(2) > .container > .grid > .row > .eight > a > .ui').click()
    })

})