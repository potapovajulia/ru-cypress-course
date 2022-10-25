//Found elements: Find, Eq

/// <reference types="Cypress"/> 
//будем использовать IntelliSense

//using get with find and eq
it ('using get with find and eq', ()=>{
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

//using get with find and eq
it.only ('using get with find and eq', ()=>{
    cy.viewport(1500,900)
    cy.visit('https://docs.cypress.io/api/commands/as#Syntax')
    cy.get('[href="#Syntax"][class="block text-sm scrollactive-item pl-1 hover:text-green transition-colors py-1 pb-2 pl-2 font-bold scrollactiveItemActive_vn9Qn"]')
})