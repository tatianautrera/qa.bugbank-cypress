/// <reference types="cypress" />

const el = require('./elements').el;
import HomePage from '../home'
import  BasePage  from '../BasePage';

class TransferPage extends BasePage{
    bankTransfer(tranfer){
        HomePage.accessTransferPage()
        cy.get(el.inputAccountNumber).type(tranfer.accountNumber)
        cy.get(el.inputDigit).type(tranfer.digit)
        cy.get(el.inputTransferValue).type(tranfer.transferValue)
        cy.get(el.btnTransfer).click()
    }

}
export default new TransferPage();