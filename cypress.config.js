const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx');
const fs = require('fs');
const path = require('path')



module.exports = defineConfig({
  projectId: "j2p56w",
  reporter:'cypress-mochawesome-reporter',
  reporterOptions:{
    configFile:'reporter-config.json'
  },
  retries:{
    openMode:1,
    runMode:0,
  },
  e2e: {
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    screenshotOnRunFailure:true,
    trashAssetsBeforeRuns:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
},

  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
  }
}});
