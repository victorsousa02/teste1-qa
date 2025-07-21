import loginPage from '../pages/loginPage';
describe('Login - BugBank', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.tituloHome()
    loginPage.capturarTela('tela_inicial');
  });
  it('Login inválido', () => {
    loginPage.fillEmail('fake@email.com');
    loginPage.capturarTela('email_preenchido');
    loginPage.fillPassword('123456');
    loginPage.capturarTela('senha_preenchida');
    loginPage.acessar();
    loginPage.validateLoginError();
    loginPage.capturarTela('login_invalido');
  });
});
