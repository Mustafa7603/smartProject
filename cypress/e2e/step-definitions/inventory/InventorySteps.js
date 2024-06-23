const { Given, Then, When } = require('@badeball/cypress-cucumber-preprocessor')
const Inventory = require('../../../pages/Inventory')
const inventory = new Inventory()
Given(/^the user is on "([^"]*)"$/, (url) => {
  cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (text) => {
  inventory.HeadingLocator().should('have.text', text).and('be.visible')
})

Then(/^the user should see the table with the headers below$/, (dataTable) => {
  const headers = dataTable.rawTable.flat()
  inventory.colomnLocator().each((el, index) => {
    cy.wrap(el).should('have.text', headers[index]).and('be.visible')
  })
})

Then(/^the user should see the table with the rows below$/, (dataTable) => {
  const rows = dataTable.rawTable.flat()
  inventory.tableValues().each((el, index) => {
    cy.wrap(el).should('have.text', rows[index]).and('be.visible')
  })
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (btn) => {
  if (btn === 'ADD PRODUCT') inventory.addButton().should('be.enabled')
  if (btn === 'X') inventory.Xbutton().should('be.enabled')
  if (btn === 'SUBMIT') inventory.submit().should('be.enabled')
})

Then(/^the user should see the "([^"]*)" text displayed$/, (text) => {
  inventory.total().should('have.text', text)
})

When(/^the user clicks on the "([^"]*)" button$/, (btn) => {
  if (btn === 'ADD PRODUCT') inventory.addButton().click()
  if (btn === 'X') inventory.Xbutton().click()
  if (btn === 'SUBMIT') inventory.submit().click()
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, (text) => {
  inventory.popupwindow().should('be.visible')
  inventory.popuptitle().should('have.text', text)
})

Then(/^the user should see the "([^"]*)" label$/, (text) => {
  if (text === 'Please select the quantity') inventory.firstLabelforPopup().should('have.text', text)
  if (text === 'Please enter the name of the product') inventory.SecondLabel().should('have.text', text)
  if (text === 'Please enter the price of the product') inventory.thirdLabel().should('have.text', text)
})

Then(/^the user should see the "([^"]*)" input box is enabled$/, (text) => {
  if (text === 'Quantity') inventory.inputOne().should('be.enabled')
  if (text === 'Product') inventory.inputTwo().should('be.enabled')
  if (text === 'Price') inventory.inputThree().should('be.enabled')
})

Then(/^the user should not see the "([^"]*)" modal$/, (text) => {
  if (text === 'Add New Product') inventory.popupwindow().should('not.exist')
})

Then(/^the user enters the quantity as "([^"]*)"$/, (num) => {
  inventory.inputOne().type(num)
})

Then(/^the user enters the product as "([^"]*)"$/, (text) => {
  inventory.inputTwo().type(text)
})

Then(/^the user enters the price as "([^"]*)"$/, (price) => {
  inventory.inputThree().type(price)
})

Then(/^the user should see the table with the new row below$/, (dataTable) => {
  const values = dataTable.rawTable.flat()
  inventory.row4Locator().each((el, index) => {
    cy.wrap(el).should('have.text', values[index]).and('be.visible')
  })
})
