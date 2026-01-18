import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{ts,js}',
    supportFile: 'cypress/support/index.ts',
    baseUrl: 'https://the-internet.herokuapp.com',
    defaultCommandTimeout: 10000
  },
})