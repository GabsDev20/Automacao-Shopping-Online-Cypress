//<reference types = "cypress" />

context('Shopping Online', () =>{
    it('VOltar a home da pagina clicando no logo', () => {
     
    cy.visit('https://www.onlineshopping.com.br/')
    cy.get('#webchat-title-text').click()
    cy.get('#msg-txt').type('teste')
    cy.get('#webchat-send-btn').click()
    })

})