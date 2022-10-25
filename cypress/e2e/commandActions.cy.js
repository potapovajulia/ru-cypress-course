/// <reference types="Cypress"/> 
//будем использовать IntelliSense


it('type',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type(112233344)
})

it ('focus',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .clear()
        .focus()
})

//blur highlighted filed with error
/*it.only ('blur',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .clear()
        .focus()
})*/