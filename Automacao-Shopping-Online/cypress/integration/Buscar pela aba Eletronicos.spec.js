//<reference types = "cypress" />

context('Shopping Online', () =>{
    it('Buscar produtos pela aba de Eletrônicos', () => {
     
    cy.visit('https://www.onlineshopping.com.br/')
    cy.get('[href="/categoria/eletronicos"]').click()
    
    })

})