/// <reference types="cypress" />

const el = require('./elements').el;

class LoginPage{

    accessRegisterUserPage(){
        cy.contains(el.btnRegister).click()

    }

}
export default new LoginPage();