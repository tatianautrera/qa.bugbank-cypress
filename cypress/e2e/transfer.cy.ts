import LoginPage from '../support/page/login'
import RegisterUserPage from '../support/page/registerUser'
import TransferPage from '../support/page/transfer'
import faker from 'faker-br'


describe('Transferência bancária', () => {
let user
  beforeEach(() => {
    user = {
            email: "teste" + faker.internet.email(),
            name: faker.name.findName(),
            password: "1234",
            confirmationPassword: "1234",
            withBalance: true
          }
          LoginPage.accessRegisterUserPage()
          RegisterUserPage.registerUser(user)
          LoginPage.login(user)
  })
  describe('Dado que possua um conta com saldo', () => {
    it('CT12 - Quando solicito uma transferência para uma conta inexistente, então o sistema deve retornar uma mensagem erro informando que a conta é invalida não prosseguindo com o fluxo', () => {
      const transfer = {
        accountNumber: "14",
        digit: "1",
        transferValue: "1"
      }
      TransferPage.bankTransfer(transfer)
      TransferPage.assertMessageAlert("Conta inválida ou inexistente")
    })
  })
})