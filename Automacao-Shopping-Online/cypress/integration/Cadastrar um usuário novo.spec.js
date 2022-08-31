//<reference types = "cypress" />

context('Shopping Online', () =>{
    it('Cadastrar um novo usuário', () => {
     
    cy.visit('https://www.onlineshopping.com.br/')
    cy.get('.ui > :nth-child(3) > a > .text').click()
    cy.get('.segment > .grid > .row > :nth-child(3) > .ui').click()
    cy.get('#login').type('gab.henrique2022@gmail.com')
    cy.get('#enviar > .visible').click()
    //cy.get('.form > :nth-child(2) > .ui').select('Pessoa Física')
    cy.get(':nth-child(1) > .form > :nth-child(3) > .ui > input').type('Gabriel Henrique de Sousa Silva')
    cy.get('#_cpf').type(22406855799)
    cy.get(':nth-child(6) > :nth-child(2) > .ui > input').type(598780287)
    cy.get('#inputDateBirthRegister').type('08-06-2000')
    cy.get(':nth-child(3) > .ui > .default').type('Solteiro')
    cy.get(':nth-child(8) > .required > .ui > .masked').type(1195638578)
    cy.get('.password_box').type('G@b22458')
    cy.get('.form > :nth-child(2) > :nth-child(1) > .ui > .masked').type('06695235')
    cy.get('.form > :nth-child(4) > :nth-child(1) > .ui > input').type(130)
    cy.get('#categories_news > .field > .ui > label').click()
    cy.get('.inline > .ui > label').click()
    cy.get('.submit > .hidden').click()
    })

})