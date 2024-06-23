class Inventory {
  HeadingLocator() {
    return cy.get('.is-size-3')
  }

  colomnLocator() {
    return cy.get('.DynamicTables_tableHeaders__k53h5 > th')
  }

  tableValues() {
    return cy.get('tr >td')
  }

  addButton() {
    return cy.get('#add_product_btn')
  }

  total() {
    return cy.get('#total_amount')
  }

  popupwindow() {
    return cy.get('.DynamicTables_modal__J70Cc')
  }
  popuptitle() {
    return cy.get('#modal_title')
  }
  Xbutton() {
    return cy.get('[aria-label="close"]')
  }

  firstLabelforPopup() {
    return cy.get('[for="product_quantity"]')
  }

  inputOne() {
    return cy.get('#quantity')
  }
  SecondLabel() {
    return cy.get('[for="product_name"]')
  }

  inputTwo() {
    return cy.get('#product')
  }
  thirdLabel() {
    return cy.get('[for="product_price"]')
  }
  inputThree() {
    return cy.get('#price')
  }

  submit() {
    return cy.get('#submit')
  }

  row4Locator() {
    return cy.get('tr:nth-child(4) > td')
  }
}

module.exports = Inventory
