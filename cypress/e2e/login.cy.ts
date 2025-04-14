import LoginPage from '../support/page/login'
import RegisterUserPage from '../support/page/registerUser'
import HomePage from '../support/page/home'
import faker from 'faker-br'

describe('Realziar Login', () => {
  let user;
  beforeEach(() => {
    user = {
      email: "teste" + faker.internet.email(),
      name: faker.name.findName(),
      password: "1234",
      confirmationPassword: "1234",
      withBalance: false
    }
    LoginPage.accessRegisterUserPage()
    RegisterUserPage.registerUser(user)

  })
  describe('Dado que eu possua cadastro no BugBank', () => {
    it('CT05 - Quando solicito o login informando dados validos de um usuário que possui cadastro, então o sistema deve acessar o sistema com sucesso', () => {
      LoginPage.login(user)
      HomePage.assertName(user.name)
    })

    it.only('CT06 - Quando solicito o login informando a senha incorreta, então o sistema deve retornar uma mensagem de erro informando que as credencias estão inválidas não permitindo seguir com o fluxo', () => {
      user.password = "12345"
      cy.get('#btnCloseModal').click()
      LoginPage.login(user)
      RegisterUserPage.assertMessageAlert("Usuário ou senha inválido. Tente novamente ou verifique suas informações!")
    })
  })
})