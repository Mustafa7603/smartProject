class Weborders {
  itemsOnsidelocators() {
    return cy.get('li [href]')
  }

  viewAllorders() {
    return cy.get('#ctl00_menu > :nth-child(1) > a')
  }

  viewAllproducts() {
    return cy.get('[href="Products.aspx"]')
  }

  viewOrder() {
    return cy.get('[href="Process.aspx"]')
  }

  checkallbutton() {
    return cy.get('#ctl00_MainContent_btnCheckAll')
  }
  uncheckallbutton() {
    return cy.get('#ctl00_MainContent_btnUncheckAll')
  }

  checkboxInput() {
    return cy.get('[type="checkbox"]')
  }
  deletebutton() {
    return cy.get('#ctl00_MainContent_btnDelete')
  }
  emptyItemsMessage() {
    return cy.get('#ctl00_MainContent_orderMessage')
  }

  ProcessButton() {
    return cy.get('#ctl00_MainContent_fmwOrder_InsertButton')
  }

  productDropdown() {
    return cy.get('#ctl00_MainContent_fmwOrder_ddlProduct')
  }

  quantityInput() {
    return cy.get('#ctl00_MainContent_fmwOrder_txtQuantity')
  }

  customerName() {
    return cy.get('#ctl00_MainContent_fmwOrder_txtName')
  }

  customerStreet() {
    return cy.get('#ctl00_MainContent_fmwOrder_TextBox2')
  }

  customerCity() {
    return cy.get('#ctl00_MainContent_fmwOrder_TextBox3')
  }

  customerZip() {
    return cy.get('#ctl00_MainContent_fmwOrder_TextBox5')
  }

  cardRadio(cardType) {
    return cy.get('label').contains(cardType).prev('input[type="radio"]')
  }

  cardNr() {
    return cy.get('#ctl00_MainContent_fmwOrder_TextBox6')
  }

  expiredate() {
    return cy.get('#ctl00_MainContent_fmwOrder_TextBox1')
  }
  verify(text) {
    return cy
      .get(
        'tbody > :nth-child(2) > :nth-child(2), tbody > :nth-child(2) > :nth-child(3), tbody > :nth-child(2) > :nth-child(4), tbody > :nth-child(2) > :nth-child(6), tbody > :nth-child(2) > :nth-child(7), :nth-child(2) > :nth-child(9), :nth-child(2) > :nth-child(10), :nth-child(2) > :nth-child(11), :nth-child(2) > :nth-child(12)',
      )
      .should('contain', text)
  }
}

module.exports = Weborders
