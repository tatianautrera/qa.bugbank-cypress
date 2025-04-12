/// <reference types="cypress" />

const el = require('./elements').el;

class RegisterUserPage{

    registerUser(user){
        cy.get(el.inputEmail).click({force: true}).type(user.email)
        cy.get(el.inputName).click({force: true}).type(user.name)
        cy.get(el.inputPassword).click({force: true}).type(user.password)
        cy.get(el.inputConfirmationPassword).click({force: true}).type(user.confirmationPassword)
        cy.get(el.btnSubmit).click({force: true})
    }

    assertRegisterUserSucess(){
        cy.get(el.messageSuccess).should('contain','criada com sucessoo')
    }

}
export default new RegisterUserPage();