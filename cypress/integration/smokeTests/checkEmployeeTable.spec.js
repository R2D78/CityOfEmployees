//Feature: Show Data of Employees
//
//As a web user
//Should be able to see your data
//when I visit the employee website

//    Scenario: See data of employees
//        Given that wants see the data of employees
//        When visit the employee website
//        Then see one table with the columns Firstname, LastName and Title.
import { selector } from "../../helpers/selectors.ts"
describe('Show Data of Employees', () => {
    beforeEach(() => {
    cy.visit('employees.html')
    })
    it('FirstName field should be displayed', () => {
        cy.get(selector.firstName).should("be.visible")
    })

    it('LastName field should be displayed', () => {
        cy.get(selector.lastName).should("be.visible")
    })
    it('Title field should be displayed', () => {
        cy.get(selector.title).should("be.visible")
    })
    it('Button "view selected data" should be visible', () => {
        cy.get(selector.viewSelectedDataBottom).should("be.visible")
     })
     it('Number of page should be visible', () => {
        cy.get(selector.numberPage).should("be.visible")
     })
  })