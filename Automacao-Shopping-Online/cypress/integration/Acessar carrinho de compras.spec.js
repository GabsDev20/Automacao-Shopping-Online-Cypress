//<reference types = "cypress" />

context('Shopping Online', () =>{
    it('Acessar carrinho de compras', () => {
     
    cy.visit('https://www.onlineshopping.com.br/')
    cy.get(':nth-child(2) > .container > .grid > .row > :nth-child(5) > #cartButton > div > :nth-child(1) > .shopping').click()

    })

})