export class BasePage{

    open (){
        cy.visit('url')
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
        .clear()
        .type(amount)
    }

    typeDebitCard(cardNumber, expDate, cvv, firstName, lastName){
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .type(expDate)
        .get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
        .wait(2000)
        .get('[data-qa-node="firstNamedebitSource"]')
        .type(firstName)
        .get('[data-qa-node="lastNamedebitSource"]')
        .type(lastName)
    }

    submitPayment(){
        cy.get('button[type="submit"]')
        .click()
        cy.wait(2000)
    }

}

export const basePage = new BasePage()
