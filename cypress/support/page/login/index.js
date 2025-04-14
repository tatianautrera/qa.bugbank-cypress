/// <reference types="cypress" />

const el = require('./elements').el;

class LoginPage{

    accessRegisterUserPage(){
        cy.visit('/')
        cy.contains(el.btnRegister).click()
    }

    login(user){
        cy.get(el.inputEmail).click({force: true}).type(user.email)
        cy.get(el.inputPassword).click({force: true}).type(user.password)
        cy.get(el.btnSubmit).click({force: true})
    }

    closeAlert(){
        cy.get(el.btnCloseMessage).click()
    }

}
export default new LoginPage();