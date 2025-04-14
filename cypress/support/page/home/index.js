/// <reference types="cypress" />

const el = require('./elements').el;

class HomePage{
    assertBalance(price){
        cy.get(el.balance).should('contain.text', price)
    }

    assertName(name){
        cy.get(el.name).should('contain.text', name)
    }

    accessTransferPage(){
        cy.get(el.btnTransfer).click()
    }
}
export default new HomePage();