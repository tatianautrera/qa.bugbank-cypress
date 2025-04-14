/// <reference types="cypress" />

const el = require('./elements').el;

class HomePage{
    assertBalance(price){
        cy.get(el.balance).should('contain.text', price)
    }

    assertName(name){
        cy.get(el.name).should('contain.text', name)
    }
}
export default new HomePage();