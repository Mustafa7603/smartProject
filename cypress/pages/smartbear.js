class SmartBear {
  //locators

  usernameInput() {
    return cy.get('#ctl00_MainContent_username')
  }

  passwordInput() {
    return cy.get('#ctl00_MainContent_password')
  }
  loginButtn() {
    return cy.get('#ctl00_MainContent_login_button')
  }
  invaildMessage() {
    return cy.get('#ctl00_MainContent_status')
  }
}

module.exports = SmartBear
