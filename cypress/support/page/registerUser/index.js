/// <reference types="cypress" />

const el = require('./elements').el;
import LoginPage from '../login'
import HomePage from '../home'
import  BasePage  from '../BasePage';

class RegisterUserPage extends BasePage {

    registerUser(user) {
        cy.get(el.inputEmail).click({ force: true }).type(user.email)
        cy.get(el.inputName).click({ force: true }).type(user.name)
        cy.get(el.inputPassword).click({ force: true }).type(user.password)
        cy.get(el.inputConfirmationPassword).click({ force: true }).type(user.confirmationPassword)
        if(user.withBalance)
            cy.get(el.addBalance).click({ force: true })
        cy.get(el.btnSubmit).click({ force: true })
    }

    assertRegisterUserBalance(user, price) {
        LoginPage.login(user)
        HomePage.assertBalance(price)
        HomePage.assertName(user.name)
    }

    assertRegisterUserMessageError(message, field) {
        cy.get(el.errorMessageByinputName(field)).should('have.text', message)
    }

}
export default new RegisterUserPage();