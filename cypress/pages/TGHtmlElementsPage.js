const TGBasePage = require('./TGBasePage')

class TGHtmlElementsPage extends TGBasePage {
  /* Locators */

  getAppleCheckbox() {
    return cy.get('#checkbox_1')
  }

  getMicrosoftCheckbox() {
    return cy.get('#checkbox_2')
  }

  getTeslaCheckbox() {
    return cy.get('checkbox_3')
  }

  getButtons() {
    return cy.get('#register_button, #signin_button')
  }

  getButtonMessage() {
    return cy.get('.is-block')
  }

  getInputfield1() {
    return cy.get('#text_input1')
  }
  getInputfield2() {
    return cy.get('#text_input2')
  }

  getButtonByText(label) {
    return this.getButtons().contains(label)
  }

  usernameinput() {
    return cy.get('#username')
  }

  passwordinput() {
    return cy.get('#password')
  }

  loginbuttonOnloginpage() {
    return cy.get('#login_btn')
  }

  errorMessage() {
    return cy.get('#error_message')
  }
  /* Methods */

  clickButtonByText(label) {
    this.getButtonByText(label).click()
  }
  getSuccessMessage() {
    return cy.get('#success_lgn')
  }
}

module.exports = TGHtmlElementsPage
