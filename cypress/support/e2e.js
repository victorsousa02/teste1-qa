import 'cypress-mochawesome-reporter/register';
class Helper{
    cadastrarUsuario(email, name, password) {
        cy.contains('Registrar').click();
        cy.get('.card__register [name="email"]').type(email, {force: true});
        cy.get('.card__register [name="name"]').type(name, {force: true});
        cy.get('.card__register [name="password"]').type(password, {force: true});
        cy.get('.card__register [name="passwordConfirmation"]').type(password, {force: true});
        const selector = '#toggleAddBalance';
        cy.get(selector).click({force: true});
        cy.contains('Cadastrar').click({force: true});
        cy.get('#modalText').should('be.visible').and('contain', 'foi criada com sucesso');
        cy.get('#btnCloseModal').should('be.visible').click();
    }
    telaInicial(){ cy.url().should('include', '/home'); }
    verificaTelaInicial(){ cy.get('#textName').should('have.text', 'Olá Victor,'); }
}
export default new Helper();