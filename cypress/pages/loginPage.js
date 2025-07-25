class LoginPage {
  visite() { cy.visit('/'); }
  cliqueAcessar() { cy.contains('Acessar').click(); }
  tituloPrincipal() { cy.contains('BugBank'); }
  preencherEmail(email) { cy.get('input[name="email"]').eq(0).type(email); }
  preencherSenha(password) { cy.get('input[name="password"]').eq(0).type(password); }
  acessar() { cy.contains('button', 'Acessar').click(); }
  validarLoginErro() { cy.get('#modalText').should('be.visible').and('contain', 'Usuário ou senha inválido'); }
  validarCamposVazios() { 
    cy.get('p.input__warging').eq(0).should('contain', 'É campo obrigatório');
    cy.get('p.input__warging').eq(1).should('contain', 'É campo obrigatório');
  }
  validarEmailInvalido() { cy.get('p.input__warging').eq(0).should('contain', 'Formato inválido'); }
  capturarTela(nomePrint){ cy.screenshot(nomePrint); }
}
export default new LoginPage();
