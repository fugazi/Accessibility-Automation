## 👋 Test Automation for Accessibility with Cypress
This is a example of Test Automation Testing for Accessibility with Cypress using Cypress-Axe and Axe-Core, developed by Douglas Urrea Ocampo using Cypress as framework.
Besides I am testing a Democart homepage to practicing writing advanced tests in Cypress

## 🏠 Tester details
* Name: `Douglas Urrea Ocampo`
* Country: `Colombia`
* City: `Medellin`
* E-mail: [Contact me here](https://douglasfugazi.co/contact/)
* LinkedIn: [https://www.linkedin.com/in/douglasfugazi](https://www.linkedin.com/in/douglasfugazi)
* Contact: [https://douglasfugazi.co](https://douglasfugazi.co)

## ✨ Pre-requisites:
1. Install Node.js from [here](https://nodejs.org/en/)
2. Install npm from [here](https://www.npmjs.com)
3. Install git from [here](https://git-scm.com)
4. Install Cypress from [here](https://www.cypress.io)
5. Install Cypress-Axe from [here](https://www.npmjs.com/package/cypress-axe)

## 🛠️ Running the project:
1. Download the project from GitHub
    * Option 1: `git clone https://github.com/fugazi/Accessibility-Automation`
    * Option 2: Download it as a Zip file and extract it
2. CD into the `Accessibility-Automation` folder
3. Set up environment variable `APPLITOOLS_API_KEY` with your own API key.
    * Login to Applitools > Click on the Person icon > My API Key
    * Option Linux/Mac: `export APPLITOOLS_API_KEY=<your_key>`
    * Option Windows: `set APPLITOOLS_API_KEY=<your_key>`
    * Option Manual: Open the file `applitools.config.js` and add the `apiKey:''`
4. run `npm install`
5. run `npx eyes-setup`
6. run `npm test`

### ✏️ Step by Step tutorial

Please see [Test Automation for Accessibility](https://douglasfugazi.gitbook.io/test-automation-for-accessibility/) for all the details.

### 🚴 Project configuration
* Cypress project Baseline: `accessibility-test.cy.js` into folder `cypress\e2e`
* Cypress project Checkpoint Hook: `accessibility-test-hook.cy.js` into folder `cypress\e2e`
* Cypress project Checkpoint Rules: `accessibility-test-rules.cy.js` into folder `cypress\e2e`
* batchName: `Democart for Accessibility`
* appName: `Opencart`
* testName: `Cypress Accessibility`