///<reference types="cypress" />

describe('Hooks and Tags',()=>{

    before(()=>{
        cy.log('Opening browser');
    })
    after(()=>{
        cy.log('Closing browser');
    })

    beforeEach(()=>{
        cy.log('Opening excel file');
    })
    
    afterEach(()=>{
        cy.log('Closing opened excel file');
    })


    it('TC1',()=>{
        cy.log('verify Home page')
    })
    it('TC2',()=>{
        cy.log('adding new user')
    })
    it('TC3',()=>{
        cy.log('search product')
    })
})