// const { Then, When } = require('@badeball/cypress-cucumber-preprocessor')
// const TGHtmlElementsPage = require('../../../pages/TGHtmlElementsPage')

// const tgHtmlElementsPage = new TGHtmlElementsPage()

// Then(/^user should see the "([^"]*)" page heading$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user clicks on the "([^"]*)" button$/, (label) => {
//   tgHtmlElementsPage.clickButtonByText(label)
// })

// Then(/^the text under it should be "([^"]*)"$/, (message) => {
//   tgHtmlElementsPage.getButtonMessage().should('have.text', message)

//   cy.log('asdasdsa').get().click().each().find().log().find().find().find().find()
// })

// When(/^user selects "([^"]*)" from the first dropdown menu$/, (company) => {
//   cy.get('#company_dropdown1').select(company)
// })

// Then(/^user selects "([^"]*)" from the second dropdown menu$/, (company) => {
//   cy.get('#company_dropdown2').select(company)
// })

// Then(/^"([^"]*)" should be the selected option in the first dropdown$/, (company) => {
//   cy.get('#company_dropdown1').should('have.value', company)
// })

// Then(/^"([^"]*)" should be the selected option in the second dropdown$/, (company) => {
//   cy.get('#company_dropdown2').should('have.value', company)
// })

// When(/^user enters "([^"]*)" into the first text input field$/, (text) => {
//   tgHtmlElementsPage.getInputfield1().type(text)
// })

// Then(/^user enters "([^"]*)" into the second text input field$/, (text) => {
//   tgHtmlElementsPage.getInputfield2().type(text)
// })

// Then(/^the first text input field should contain "([^"]*)"$/, (text) => {
//   tgHtmlElementsPage.getInputfield1().should('have.value', text)
// })

// Then(/^the second text input field should contain "([^"]*)"$/, (text) => {
//   tgHtmlElementsPage.getInputfield2().should('have.value', text)
// })

// When(/^user selects the "([^"]*)" checkbox$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user deselects the "([^"]*)" checkbox$/, (args1) => {
//   console.log(args1)
//   return true
// })

// Then(/^the "([^"]*)" checkbox should not be checked$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user selects the "([^"]*)" and "([^"]*)" checkboxes$/, (args1, args2) => {
//   console.log(args1, args2)
//   return true
// })

// Then(/^both "([^"]*)" and "([^"]*)" checkboxes should be checked$/, (args1, args2) => {
//   console.log(args1, args2)
//   return true
// })

// Then(/^the "([^"]*)" checkbox remains unchecked$/, (args1) => {
//   console.log(args1)
//   return true
// })

// When(/^user enter username as "([^"]*)" and password as "([^"]*)"$/, (username, password) => {
//   tgHtmlElementsPage.usernameinput().type(username)
//   tgHtmlElementsPage.passwordinput().type(password)
// })

// When(/^user clicks Login button$/, () => {
//   tgHtmlElementsPage.loginbuttonOnloginpage().click()
// })

// Then(/^user should see a "([^"]*)"$/, (text) => {
//   if (text === 'Invalid Username entered!') {
//     tgHtmlElementsPage.errorMessage().should('have.text', text)
//   } else if (text === 'You are logged in') {
//     tgHtmlElementsPage.getSuccessMessage().should('have.text', text)
//   }
// })
