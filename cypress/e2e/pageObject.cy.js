/// <reference types="Cypress"/> 
//будем использовать IntelliSense

import { phoneNumber } from "../support/pages/phoneNumber"
import {transferMoney} from "../support/pages/transferMoney"
import { basePage } from "../support/pages/basePage"

it ('phone number',()=>{
    basePage.open('https://next.privat24.ua/mobile?lang=en')
       
       phoneNumber.typePhoneNumber('686979721')
       // .get('[data-qa-node="phone-number"]')
       // .type('686979721')
       basePage.typeAmount('1')
       basePage.typeDebitCard('4552 3314 4813 8217', '0524', '111', 'Shayne', 'McConnell')
       basePage.submitPayment()

       //Checks
       phoneNumber.checkDebitCard('4552 **** **** 8217')
       //.get('[data-qa-node="card"]')
       //.should('have.text', '4552 **** **** 8217')
       phoneNumber.checkAmount('UAH')
       phoneNumber.checkCommission('2', 'UAH')

})


it ('transfer money',()=>{
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
      
        //card 1
        basePage.typeDebitCard('4552331448138217','05/24','926', 'Shayne', 'McConnell')
        //card 2
        transferMoney.typeDebitCardDataReceiver('5309233034765085','Juliana', 'Janssen')
        //amount
        basePage.typeAmount('3000')
        transferMoney.typeComment('Transfer money')
        //submit
        basePage.submitPayment()

        //checks
        transferMoney.checkReceiverAndReceiverCard('4552 3314 4813 8217','5309 2330 3476 5085')
        transferMoney.checkPayerAndReceiverAmount('3 000 UAH', '3 000 UAH')
        transferMoney.checkPayerCurrency('170.49 UAH')
        transferMoney.checkTotalAmount('3 170.49')
        transferMoney.checkCommnent('Transfer money')  
})