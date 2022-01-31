/// <reference types="cypress" />

//Test Case 1
describe('Web Form Test', () => {
    var url = 'https://formy-project.herokuapp.com/form'

    it('Can Submit Web Form', () => {
        visit(url)
        fillout()
    })

    function visit(url) {
        cy.visit(url)
    }

    function fillout() {
        cy.get('#first-name')
            .type('Shirley')
        cy.get('#last-name')
            .type('Sasser')
        cy.get('#job-title')
            .type('Owner')
        cy.get('#radio-button-2')
            .check()
        cy.get('#checkbox-3')
            .check()
        cy.get('#select-menu')
            .select('1')
        cy.get('#datepicker')
            .click()
            .get('[data-date="1643932800000"]')
            .click()                
        cy.get('.btn')
           .click()    
    }

})

//Test Case 2
describe('Web Form Test 2', () => {
    var url = 'https://formy-project.herokuapp.com/form'

    it('Can Submit Web Form', () => {
        visit(url)
        fillout2()
    })

     function visit(url) {
        cy.visit(url)
     }

    function fillout2() {
        cy.get('#first-name')
            .type('Luke')
        cy.get('#last-name')
            .type('Skywalker')
        cy.get('#job-title')
            .type('Jedi')
        cy.get('#radio-button-3')
            .check()
        cy.get('#checkbox-1')
            .check()
        cy.get('#select-menu')
            .select('2')
        cy.get('#datepicker')
            .click()
            .get('[data-date="1644019200000"]')
            .click()                
        cy.get('.btn')
           .click()    
     }

})

//This test case passes, but realistically, it should not. No information was entered, so it should fail.
//Test Case 3
describe('Web Form Test 3', () => {
    var url = 'https://formy-project.herokuapp.com/form'

    it('Can Submit Web Form', () => {
        visit(url)
        fillout3()
    })

     function visit(url) {
        cy.visit(url)
     }

    function fillout3() {
        // cy.get('#first-name')
        //     .type('Luke')
        // cy.get('#last-name')
        //     .type('Skywalker')
        // cy.get('#job-title')
        //     .type('Jedi')
        // cy.get('#radio-button-3')
        //     .check()
        // cy.get('#checkbox-1')
        //     .check()
        // cy.get('#select-menu')
        //     .select('2')
        // cy.get('#datepicker')
        //     .click()
        //     .get('[data-date="1644019200000"]')
        //     .click()                
       cy.get('.btn')
           .click()    
     }

})
