/// <reference types="Cypress"/> 
//будем использовать IntelliSense

//
it ('should',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')   
    cy.get('[data-qa-node="amount"]')
         .clear()   
         .type(100)
        .should('have.value', '100')
        .and('be.visible')
})

//
it.only ('expect',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')   
    cy.get('[data-qa-node="amount"]')
        .clear().type(100).then(input=>{
        expect(input).to.have.value('100')
        })
})

//
it ('check is visible archive link',()=>{
    cy.visit('https://next.privat24.ua/deposit?lang=en')   
    cy.contains('My deposits')
        .trigger('mouseover')
        .get('#archiveDeposits')
        .should('be.visible')
})

it ('check is correct attr in button',()=>{
    cy.visit('https://next.privat24.ua?lang=en')   
    cy.contains('Show cards')
        .should('have.attr','type')
        .and('match', /button/)
        
})

it ('check is correct url',()=>{
    cy.visit('https://next.privat24.ua?lang=en')   
    cy.url()
        .should('eq','https://next.privat24.ua/?lang=en')        
})