# Testes Automatizados com Cypress

Este projeto contém testes automatizados utilizando o [Cypress](https://www.cypress.io/), focados em testes de interface para uma aplicação web.

---

## 🧩 Pré-requisitos

- Node.js (versão 16.x ou superior)
- Git
- npm ou yarn

---

## 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Instale as dependências:

```bash
npm install
```
Instale o Cypress :

```bash
npx cypress install
```
---

## 🧪 Execução dos Testes

### Testes no modo interativo (GUI)

```bash
npx cypress open
```

### Testes no modo headless (terminal)

```bash
npx cypress run
```

---

## 📸 Screenshots e Vídeos

O Cypress automaticamente salva screenshots e vídeos dos testes:

- Screenshots: `cypress/screenshots/`
- Vídeos: `cypress/videos/`

Para capturar manualmente:

```js
cy.screenshot('nome-do-arquivo');
```

---

## 📄 Geração de Relatórios

### Com o Mochawesome (se estiver configurado)

Instale o reporter:

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

Adicione no `cypress.config.js`:

```js
reporter: 'mochawesome',
reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: false,
  json: true
}
```

Para gerar o relatório final:

```bash
npx mochawesome-merge cypress/reports/*.json -o cypress/reports/report.json
npx marge cypress/reports/report.json -f report -o cypress/reports/html
```

Abra em: `cypress/reports/html/report.html`

---

## 🌿 Fluxo Git Sugerido

1. Inicialize o repositório localmente:

```bash
git init
git add .
git commit -m "feat: primeira versão dos testes"
```

2. Crie o repositório remoto no GitHub e conecte:

```bash
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git branch -M master
git push -u origin master
```

3. Para criar uma branch de desenvolvimento:

```bash
git checkout -b develop
```

4. Subir alterações:

```bash
git add .
git commit -m "feat: novos testes"
git push origin develop
```

---

## 📁 Estrutura Importante

```
cypress/
  ├── e2e/               # Testes end-to-end
  ├── fixtures/          # Arquivos de massa de dados
  ├── support/           # Arquivos de suporte (comandos, config global)
  │   └── commands.js
  │   └── e2e.js
  └── screenshots/       # Prints automáticos
  └── videos/            # Vídeos de execução
```

---

## 🧠 Dicas

- Utilize `{ force: true }` em `.click()` ou `.type()` quando o elemento estiver oculto por CSS (e você souber que deve forçar):

```js
cy.get(selector).click({ force: true });
```

- Espere elementos com visibilidade:

```js
cy.get('.card__register [name="email"]').should('be.visible').type('email@teste.com');
```

---

## 🤝 Contribuindo

1. Fork este repositório
2. Crie sua branch: `git checkout -b feature/sua-feature`
3. Commit suas mudanças: `git commit -m 'feat: adiciona nova feature'`
4. Push para a branch: `git push origin feature/sua-feature`
5. Crie um Pull Request!

---

## 🛡️ Licença

Distribuído sob a licença MIT.
