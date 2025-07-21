class LoginPage {
  visit() { cy.visit('/'); }
  clickAcessar() { cy.contains('Acessar').click(); }
  tituloHome() { cy.contains('BugBank'); }
  fillEmail(email) { cy.get('input[name="email"]').eq(0).type(email); }
  fillPassword(password) { cy.get('input[name="password"]').eq(0).type(password); }
  acessar() { cy.contains('button', 'Acessar').click(); }
  validateLoginError() { cy.get('#modalText').should('be.visible').and('contain', 'Usuário ou senha inválido'); }
  capturarTela(nomePrint){ cy.screenshot(nomePrint); }
}
export default new LoginPage();
