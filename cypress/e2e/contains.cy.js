//Found elements: Contains
/// <reference types="Cypress"/> 
//будем использовать IntelliSense

//using contains
it ('using contains find element', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in')
})

it ('using contains find element', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div','Sign in')
})

//ignore register
it ('using contains find element', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('SIGN IN', {matchCase:false})
})

//get+contains
it.only ('using contains find element', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('footer').contains('Join the team')
})