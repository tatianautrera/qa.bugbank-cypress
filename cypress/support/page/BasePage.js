/// <reference types="cypress" />

const el = require('./elements').el;

class BasePage{
    assertMessageAlert(message) {
        cy.get(el.txtmessage)
            .invoke('text')
            .then((text) => {
                const cleanText = text.replace(/\s+/g, ' ').trim();
                expect(cleanText).to.contain(message);
            });
    }
}
export default BasePage;