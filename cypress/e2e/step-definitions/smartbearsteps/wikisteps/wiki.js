const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor')
const Wiki = require('../../../../pages/wikipage')

Given(/^user navigates to "([^"]*)"$/, (url) => {
  cy.visit(url)
})

Then(/^user should see below languages around the logo$/, (dataTable) => {
  const arr = dataTable.rawTable.flat()

  wiki.fetchlanguages().each(($el, index) => {
    cy.wrap($el).should('have.text', arr[index])
  })
})

// Then(/^user should see "([^"]*)" in the title$/, (args1) => {
// 	console.log(args1);
// 	return true;
// });

// Then(/^user should see "([^"]*)" in the URL$/, (args1) => {
// 	console.log(args1);
// 	return true;
// });

// Then(/^user should see "([^"]*)" in the first heading$/, (args1) => {
// 	console.log(args1);
// 	return true;
// });

const wiki = new Wiki()
