//Found elements: GET

//by ID
it('found element by id', () => {
cy.visit('http://facebook.com')
cy.get('#email')
}) 

//by Class
it ('found element by class', ()=>{
    cy.visit('https://docs.cypress.io/api/table-of-contents')
    cy.get('.DocSearch')
})

//by Tag
it ('found element by tag', ()=>{
    cy.visit('https://docs.cypress.io/api/table-of-contents')
    cy.get('nav')
})

//by Tag value
it ('found element by tag value', ()=>{
    cy.visit('http://facebook.com')
    cy.get('[name="pass"]')
})

//by different Tags values
it ('found element by different tags values', ()=>{
    cy.visit('http://facebook.com')
    cy.get('data-testid="open-registration-form-button"][role="button"]')
})

//by different Types
it ('found element by different types', ()=>{
    cy.visit('https://docs.cypress.io/api/table-of-contents')
    cy.get('a[aria-current="page"][href="/api/table-of-contents"]')
})

//by contains name
it.only ('found element by contains name', ()=>{
    cy.visit('https://next.privat24.ua/')
    cy.get('*[class^="card"]')
})
