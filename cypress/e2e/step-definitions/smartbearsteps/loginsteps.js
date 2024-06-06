const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const SmartBear = require('../../../pages/smartbear')
const Weborders = require('../../../pages/smartBearWeborders')

const smartbear = new SmartBear()
const weborders = new Weborders()
Given(/^user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

When(/^user enters username as "([^"]*)"$/, (username) => {
  smartbear.usernameInput().type(username)
})

Then(/^user enters password as "([^"]*)"$/, (password) => {
  smartbear.passwordInput().type(password)
})

Then(/^user clicks on "([^"]*)" button$/, (text) => {
  if (text === 'Login') smartbear.loginButtn().click()
  else if (text === 'Process') weborders.ProcessButton().click()
  else if (text === 'Check All') weborders.checkallbutton().click()
  else if (text === 'Uncheck All') weborders.uncheckallbutton().click()
  else if (text === 'Delete Selected') weborders.deletebutton().click()
})

Then(/^user should see "([^"]*)" message$/, (Message) => {
  smartbear.invaildMessage().should('contain', Message)
})

Then(/^user should be routed to "([^"]*)"$/, (url) => {
  cy.visit(url)
})
