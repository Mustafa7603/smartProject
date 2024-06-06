const { Then, When } = require('@badeball/cypress-cucumber-preprocessor')
const Weborders = require('../../../pages/smartBearWeborders')
const weborders = new Weborders()

Then('validate below menu {string} are displayed', (items) => {
  weborders.itemsOnsidelocators().should('contain', items).and('be.visible')
})

Then(/^all rows should be checked$/, () => {
  weborders.checkboxInput().each((el) => {
    cy.wrap(el).should('be.checked')
  })
})

Then(/^all rows should be unchecked$/, () => {
  weborders.checkboxInput().each((el) => {
    cy.wrap(el).should('not.be.checked')
  })
})

Then(/^validate all orders are deleted from the List of All Orders$/, () => {
  weborders.checkboxInput().should('not.exist')
})

Then(/^validate user sees "([^"]*)" message$/, (text) => {
  weborders.emptyItemsMessage().should('contain', text)
})

When(/^user clicks on "([^"]*)" menu item$/, (text) => {
  if (text === 'Order') weborders.viewOrder().click()
  else if (text === 'View all orders') weborders.viewAllorders().click()
})

When('user enters all product information {string},{string}', function (string, string2) {
  weborders.productDropdown().select(string)
  weborders.quantityInput().clear().type(string2)
})

Then('user enters all address information {string}, {string}, {string}, {string}', function (name, street, city, zip) {
  weborders.customerName().type(name)
  weborders.customerStreet().type(street)
  weborders.customerCity().type(city)
  weborders.customerZip().type(zip)
})

When('user enters all payment information {string}, {string}, {string}', function (card, cardNr, expiredate) {
  weborders.cardRadio(card).click()
  weborders.cardNr().type(cardNr)
  weborders.expiredate().type(expiredate)
})

Then(
  'validate all information entered displayed correct with the order {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',
  function (name, product, quantity, street, city, zip, card, cardnumber, exp) {
    weborders.verify(name)
    weborders.verify(product)
    weborders.verify(quantity)
    weborders.verify(street)
    weborders.verify(city)
    weborders.verify(zip)
    weborders.verify(card)
    weborders.verify(cardnumber)
    weborders.verify(exp)
  },
)
