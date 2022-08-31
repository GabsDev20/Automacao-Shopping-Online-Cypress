//<reference types = "cypress" />

context('Shopping Online', () =>{
    it('Enviar mensagem ao suporte', () => {
     
    cy.visit('https://www.onlineshopping.com.br/')
    cy.get(':nth-child(2) > a > .text').click()
    cy.get('.one > .column > :nth-child(1) > .ui > input').type('teste teste teste')
    cy.get('#email').type('teste@teste.com')
    cy.get('.three > :nth-child(1) > .ui > .masked').type(11959458762)
    cy.get('.three > :nth-child(2) > .ui > .search').type('Roraima')
    cy.get(':nth-child(3) > .ui > input').type('Alagoa')
    cy.get('.div > :nth-child(1) > .ui').type('Dúvidas')
    cy.get('.div > :nth-child(2) > .ui > input').type('teste')
    cy.get('textarea').type('teste 123')
    cy.get('#submitContact > .hidden').click()
    })

})