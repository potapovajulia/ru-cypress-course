export class PhoneNumber { //class

    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
        .type(phoneNumber)
    }

    //Checks
    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
        .should('have.text', debitCard)
    }

    checkAmount(amount){
        cy.get('[data-qa-node="amount"]')
        .eq(1)
        .should('contain.text',amount)
    }

    checkCommission(commision,commissionCurrency){
        cy.get('[data-qa-node="commission"]')
        .eq(1)
        .should('have.text',commision)
        .get('[data-qa-node="commission-currency"]')
        .should('contain.text', commissionCurrency)
    }

}

export const  phoneNumber = new PhoneNumber() //class instance