const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    screenshotOnRunFailure: true,
    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: "https://bugbank.netlify.app",
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true,
    reportDir: 'cypress/reports/mochawesome'
  }
});
