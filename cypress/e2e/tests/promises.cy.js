///<reference types="cypress" />

describe('Promises example',()=>{
    it('Example',()=>{
        cy.visit('https://automationteststore.com/');
        cy.get('a[href$="contact"]').click().then((value)=>{
            cy.log('Clicked on: ' +value.text());
        });
    })
})