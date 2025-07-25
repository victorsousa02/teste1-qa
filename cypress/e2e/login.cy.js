import loginPage from '../pages/loginPage';
import helper from '../support/e2e';
describe('Login - BugBank', () => {
  beforeEach(() => {
    loginPage.visite();
    loginPage.tituloPrincipal();
    loginPage.capturarTela('tela_inicial');
  });
  it('Login inválido', () => {
    loginPage.preencherEmail('fake@email.com');
    loginPage.capturarTela('email_preenchido');
    loginPage.preencherSenha('123456');
    loginPage.capturarTela('senha_preenchida');
    loginPage.cliqueAcessar();
    loginPage.validarLoginErro();
    loginPage.capturarTela('login_invalido');
  });
  it('E-mail e senha com campos vazios', () => {
    loginPage.acessar();
    loginPage. validarCamposVazios();
    loginPage.capturarTela('login_campos_vazios');
  });
  it('E-mail inválido', () => {
    loginPage.preencherEmail('emailinvalido');
    loginPage.capturarTela('email_invalido');
    loginPage.preencherSenha('123456');
    loginPage.capturarTela('senha_preenchida');
    loginPage.cliqueAcessar();
    loginPage.validarEmailInvalido();
    loginPage.capturarTela('login_email_invalido');
  });
  it('Senha inválida', () => {
    loginPage.preencherEmail('tester1@email.com');
    loginPage.capturarTela('email_preenchido');
    loginPage.preencherSenha('senhaerrada');
    loginPage.capturarTela('senha_invalida');
    loginPage.cliqueAcessar();
    loginPage.validarLoginErro();
    loginPage.capturarTela('login_senha_invalida');
  }); 
  it('Login com sucesso', () => {
    helper.cadastrarUsuario('tester1@email.com', 'Victor', "qwer"); // cadastrar primeiro por conta do banco na memoria
    loginPage.preencherEmail('tester1@email.com');
    loginPage.capturarTela('email_preenchido');
    loginPage.preencherSenha('qwer');
    loginPage.capturarTela('senha_preenchida');
    loginPage.acessar();
    helper.telaInicial();
    loginPage.capturarTela('login_sucesso');
    helper.verificaTelaInicial();
  })
});
