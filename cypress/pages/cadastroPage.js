class CadastroPage {
  visit() { cy.visit('/'); }
  clickRegistrar() { cy.contains('Registrar').click(); }
  fillEmail(email) { cy.get('.card__register [name="email"]').type(email,  {force: true}); }
  fillName(name) { cy.get('.card__register [name="name"]').type(name,  {force: true}); }
  fillPassword(password) { cy.get('.card__register [name="password"]').type(password,  {force: true}); }
  fillConfirmPassword(password) { cy.get('.card__register [name="passwordConfirmation"]').type(password,  {force: true}); }
  chooseAccountType(type = 'contaComSaldo') {
    const selector = type === 'contaComSaldo' ? '#toggleAddBalance' : '#toggleAddBalance+label';
    cy.get(selector).click({force: true});
  }
  cadastrar() { cy.contains('Cadastrar').click({force: true}); }
  validateCadastro(){cy.get('#modalText').should('be.visible').and('contain', 'foi criada com sucesso'); }
  capturarTela(nomePrint){ cy.screenshot(nomePrint); }
}
export default new CadastroPage();
