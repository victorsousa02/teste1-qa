import cadastroPage from '../pages/cadastroPage';
describe('Cadastro - BugBank', () => {
  it('Criar usuário com sucesso', () => {
    cadastroPage.visit();
    cadastroPage.capturarTela('tela_inicial');
    cadastroPage.clickRegistrar();
    cadastroPage.capturarTela('tela_cadastro');
    const email = 'usuario_teste_' + Date.now() + '@email.com';
    cadastroPage.fillEmail(email);
    cadastroPage.capturarTela('add_email');
    cadastroPage.fillName('Usuário Teste');    
    cadastroPage.capturarTela('add_user');
    cadastroPage.fillPassword('123456');
    cadastroPage.capturarTela('add_senha');
    cadastroPage.fillConfirmPassword('123456');
    cadastroPage.capturarTela('confirm_senha');
    cadastroPage.chooseAccountType();
    cadastroPage.cadastrar();
    cadastroPage.validateCadastro();
    cadastroPage.capturarTela('cadastro_feito');
  });
});
