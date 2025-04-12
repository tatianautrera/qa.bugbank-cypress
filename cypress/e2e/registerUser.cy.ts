import LoginPage from '../support/page/login'
import RegisterPage from '../support/page/registerUser'
import faker from 'faker-br'


describe('Cadastro de usuario', () => {

  beforeEach(()=>{
    cy.visit('/')
    LoginPage.accessRegisterUserPage()
  })
 describe('Dado que eu não possua cadastro no BugBank',() =>{
  it('Quando solicito o cadastro de um novo usuário informando dados de email, nome e senha validos, Então o sistema deve criar um usuário conforme os dados informados com o saldo zerado',()=>{
    const user = {
      email: "teste"+faker.internet.email(),
      name: faker.name.findName(),
      password: "1234",
      confirmationPassword:"1234"
    }  
    RegisterPage.registerUser(user)
    RegisterPage.assertRegisterUserSucess()
  })
 })
})