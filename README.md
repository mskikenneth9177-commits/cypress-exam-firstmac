# Cypress TypeScript Automation Project

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mskikenneth9177-commits/cypress-exam-firstmac.git
cd repo-name

#once clone and your at the directory Time to install

# Install dependencies:

npm install

# Install cypress-iframe (required for Nested Frames tests)
npm install -D cypress-iframe

# Import cypress-iframe in cypress/support/commands.ts (or your test file):
import 'cypress-iframe';

# Open Cypress - 

npx cypress open

# Run a specific spec file - Access the e2e folder (from there can select which file you want to run copy the filename and change "challengingDom.cy.ts") on the code below

# example wanted to run dynamic Controls - npx cypress run --spec "cypress/e2e/dynamicControls.cy.ts"
# example wanted to run shadow nested - npx cypress run --spec "cypress/e2e/shadowNested.cy.ts"

npx cypress run --spec "cypress/e2e/challengingDom.cy.ts"


Notes

All tests are written in TypeScript for type safety.

Ensure all dependencies, including cypress-iframe, are installed before running the tests.