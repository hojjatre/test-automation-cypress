/// <reference types="cypress" />

describe("Main Test", ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it("first section", () =>{
        cy.get('[data-cy="text-input-name"]').type("Adam")
        cy.get('[data-cy="selector-option"]').type("option-green")
        cy.get('[data-cy="option-green"]').click()
        cy.get('[data-cy="submit-button"]').click()

        cy.get('[data-cy="message"]').then( message => {
            expect(message.text()).to.equal('My name is Adam and My favorite color is green.');
        })

        cy.get('[data-cy="delete-button"]').click()

        cy.get('[data-cy="message"]').then( message => {
            expect(message.text()).to.equal('No submition');
        })
    })

    it("second section", () =>{
        cy.get('[data-cy="text-input-name"]').type("Andrew")
        cy.get('[data-cy="selector-option"]').type("option-blue")
        cy.get('[data-cy="option-blue"]').click()
        cy.get('[data-cy="submit-button"]').click()

        cy.get('[data-cy="message"]').then( message => {
            expect(message.text()).to.equal('My name is Andrew and My favorite color is blue.');
        })

        cy.get('[data-cy="delete-button"]').click()

        cy.get('[data-cy="message"]').then( message => {
            expect(message.text()).to.equal('No submition');
        })
    })

    it("third section", () =>{
        cy.get('[data-cy="text-input-name"]').type("Alex")
        cy.get('[data-cy="selector-option"]').type("option-red")
        cy.get('[data-cy="option-red"]').click()
        cy.get('[data-cy="submit-button"]').click()

        cy.get('[data-cy="message"]').then( message => {
            expect(message.text()).to.not.equal('My name is Andrew and My favorite color is blue.');
        })

        cy.get('[data-cy="delete-button"]').click()

        cy.get('[data-cy="message"]').then( message => {
            expect(message.text()).to.equal('No submition');
        })
    })

    it("fourth section", () =>{
        cy.get('[data-cy="text-input-name"]').type("Alex")
        cy.get('[data-cy="selector-option"]').type("option-red")
        cy.get('[data-cy="option-red"]').click()
        cy.get('[data-cy="submit-button"]').click()

        cy.get('[data-cy="message"]').then( message => {
            expect(message.text()).to.equal('My name is Alex and My favorite color is red.');
        })

        cy.get('[data-cy="delete-button"]').click()

        cy.get('[data-cy="message"]').then( message => {
            expect(message.text()).to.not.equal('submition');
        })
    })


})