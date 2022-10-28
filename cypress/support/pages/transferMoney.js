export class TransferMoney{
  
    typeDebitCardDataReceiver(cardNumber, firstName, lastName){
        cy.get('[data-qa-node="numberreceiver"]')
        .type(cardNumber)
        .get('[data-qa-node="firstNamereceiver"]')
        .type(firstName)
        .get('[data-qa-node="lastNamereceiver"]')
        .type(lastName)
    }

    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type(comment)
    }

    //Checks
    checkReceiverAndReceiverCard(debitCard,receiverCard){
        cy.get('[data-qa-node="payer-card"]')
        .should('have.contain', debitCard)
        .get('[data-qa-node="receiver-card"]')
        .should('have.contain', receiverCard)
    }

    checkPayerAndReceiverAmount (payerAmount,receiverAmount){
        cy.get('[data-qa-node="payer-amount"]')
        .should('have.contain',payerAmount)
        .get('[data-qa-node="receiver-amount"]')
        .should('have.contain',receiverAmount)
    }

    checkPayerCurrency (payerCurrency){
        cy.get('[data-qa-node="payer-currency"]')
        .should('have.contain',payerCurrency)
    }

    checkTotalAmount(totalAmonunt){
        cy.get('[data-qa-node="total"]')        
        .should('have.contain',totalAmonunt)

    }

    checkCommnent(comment){
        cy.get('[data-qa-node="comment"]')        
        .should('have.text',comment)
    }

}

export const transferMoney = new TransferMoney()