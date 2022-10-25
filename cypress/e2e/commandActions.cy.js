/// <reference types="Cypress"/> 
//будем использовать IntelliSense


it('type',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type(112233344)
})

it.only('focus',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .clear()
        .focus()
})