///<reference types="cypress" />

describe('Alias example',()=>{
    it('alias',()=>{
        cy.visit('https://commitquality.com/practice-contact-form');
        const emailValue = cy.get('#email').type('email@email.com').invoke('val');
        emailValue.should('eq','email@email.com');
    })
})