//Feature: Find Cities of Employees
//
//As a web user
//Should be able to see your city
//when I select the employee

//    Scenario: See the city of employees
//        Given that wants see the city of employees
//        When select the employee and click on view selected data
//        Then see it in a textbox at the bottom of the listing.

describe('Find Cities of my Employees', () => {
    beforeEach(() => {
    cy.visit('employees.html')
    })

    afterEach(() => {   
    })
  
    it('should be able to see the city of the VicePresident when I select the check of the employee with the title VicePresident and select the "view selected data" button', () => {
      cy.contains('Andrew')
      cy.get('#row0treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
      cy.get('#btn').click()

      cy.contains('.jqx-listitem-state-normal', 'Andrew is from Tacoma').should("be.visible")
      
      cy.get('#row0treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
    })
    it('should be able to see the city of the Sales Representative when I select the check of the employee with the title Sales Representative and select the "view selected data" button', () => {
      cy.contains('Nancy')
      cy.get('#row1treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
      cy.get('#btn').click()
  
      cy.contains('.jqx-listitem-state-normal', 'Nancy is from Seattle').should("be.visible")

      cy.get('#row1treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
    })
    it('should be able to see the city of the Sales Manager when I select the check of the employee with the title Sales Manager and select the "view selected data" button', () => {
      cy.contains('Steven')
      cy.get('#row4treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
      cy.get('#btn').click()
  
      cy.contains('.jqx-listitem-state-normal', 'Steven is from London').should("be.visible")

      cy.get('#row4treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
    })
    it('should be able to see the city of the Inside Sales Coordinator when I select the check of the employee with the title Inside Sales Coordinator and select the "view selected data" button', () => {
      cy.contains('Laura')
      cy.get('#row5treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
      cy.get('#btn').click()
  
      cy.contains('.jqx-listitem-state-normal', 'Laura is from Seattle').should("be.visible")

      cy.get('#row5treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
    })
})