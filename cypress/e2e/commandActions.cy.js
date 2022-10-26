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

//blur highlighted field with error
it ('blur',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .clear()
        .focus()
        .blur()
})

it  ('clear',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .clear()
        .type(999)
        .wait(2000)
        .clear()
})

//usuaully submit can be apply only for form 
it  ('submit',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('form[method="post"]')
        .submit()
})

it  ('click',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="manual"]')
        .click()
})

it  ('rightclick',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .rightclick()
})

it  ('dbclick',()=>{
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
        .contains('my card', {matchCase:false})
        .dblclick()
})

//check can be apply only with element, which has type=input or checkbox
it  ('check',()=>{
    cy.visit('http://www.facebook.com')
        .contains('создать новый аккаунт',{matchCase:false})
        .click()
        .get('input[value="2"]')
        .check()
})

it  ('uncheck',()=>{
    cy.visit('https://en.privatbank.ua/')
        .get('#switch-input')
        .check({force: true}) //element is being covered by another element
        .wait(2000)
        .uncheck({force: true})
        .wait(2000)
})

//select some value from list
it  ('select',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .get('.action-select')
        .select('bananas')
        .wait(2000)
})

it  ('scrollIntoView',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="English"]')
        .wait(2000)
        .scrollIntoView()
     
})

it  ('scrollTo',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .wait(2000)
        .scrollTo(0,500)
     
})


it.only  ('trigger',()=>{
    cy.visit('https://next.privat24.ua?lang=en')
        .contains('Services')
        .wait(2000)
        .trigger('mouseover')
     
})