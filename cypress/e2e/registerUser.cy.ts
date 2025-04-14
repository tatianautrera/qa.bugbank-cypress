import LoginPage from '../support/page/login'
import RegisterPage from '../support/page/registerUser'
import faker from 'faker-br'

describe('Cadastro de usuario', () => {

  beforeEach(() => {
    LoginPage.accessRegisterUserPage()
  })
  describe('Dado que eu não possua cadastro no BugBank', () => {
    it('CT01 - Quando solicito o cadastro de um novo usuário informando dados de email, nome e senha validos, então o sistema deve criar um usuário conforme os dados informados com o saldo zerado', () => {
      const user = {
        email: "teste" + faker.internet.email(),
        name: faker.name.findName(),
        password: "1234",
        confirmationPassword: "1234",
        withBalance: false
      }

      RegisterPage.registerUser(user)
      RegisterPage.assertMessageAlert('criada com sucesso')
      RegisterPage.assertRegisterUserBalance(user, "0,00")
    })

    it('CT02 - Quando solicito o cadastro de um novo usuário informando dados de email, nome e senha validos, marcando a opção de “Criar conta com saldo”, então o sistema deve criar um usuário conforme os dados informados com o saldo de R$1000,00', () => {
      const user = {
        email: "teste" + faker.internet.email(),
        name: faker.name.findName(),
        password: "1234",
        confirmationPassword: "1234",
        withBalance: true
      }

      RegisterPage.registerUser(user)
      RegisterPage.assertMessageAlert('criada com sucesso')
      RegisterPage.assertRegisterUserBalance(user, "1.000,00")
    })

    it('CT03 - Quando solicito o cadastro de um novo usuário informando campo invalido(a) então o sistema deve retornar uma mensagem de erro informando que o campo é invalido não prosseguindo com o cadastro', () => {
      cy.fixture('RegisterUserWithFieldsInvalid.json').then((users) => {
        for (let i = 0; i < users.invalidFields.length; i++){
          RegisterPage.registerUser(users.invalidFields[i])
          if(users.invalidFields[i].field == 'password')
            RegisterPage.assertMessageAlert(users.invalidFields[i].message)
          else
            RegisterPage.assertRegisterUserMessageError(users.invalidFields[i].message, users.invalidFields[i].field)
          LoginPage.accessRegisterUserPage()
        }
      })
    })
    it('CT04 - Quando solicito o cadastro de um novo usuário não informando os campos obrigatórios, então o sistema deve retornar uma mensagem de erro informando que o campo é obrigatório não prosseguindo com o cadastro', () => {
      cy.fixture('RegisterUserWithFieldsInvalid.json').then((users) => {
        for (let i = 0; i < users.emptyRequiredFields.length; i++){
          RegisterPage.registerUser(users.emptyRequiredFields[i])
          if(users.emptyRequiredFields[i].field == 'name')
            RegisterPage.assertMessageAlert(users.emptyRequiredFields[i].message)
          else
            RegisterPage.assertRegisterUserMessageError(users.emptyRequiredFields[i].message, users.emptyRequiredFields[i].field)
          LoginPage.accessRegisterUserPage()
        }
      })
    })
  })
})