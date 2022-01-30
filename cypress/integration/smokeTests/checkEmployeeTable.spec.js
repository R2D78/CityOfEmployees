//Feature: Show Data of my Employees
//
//As a web user
//Should be able to see your data
//when I visit the employee website

//    Scenario: See data of employees
//        Given that wants see the data of employees
//        When visit the employee website
//        Then see one table with the columns Firstname, LastName and Title.

describe('Show Data of my Employees in Employees.html', () => {
    beforeEach(() => {
    cy.visit('employees.html')
    })
  
    it('finds data employees', () => {
      cy.contains('Andrew')
      cy.get('#row0treeGrid > .jqx-grid-cell-nowrap > .jqx-tree-grid-checkbox').click()
      cy.get('#btn').click()

      cy.contains('.jqx-listitem-state-normal', 'Andrew is from Tacoma')
    })
  })