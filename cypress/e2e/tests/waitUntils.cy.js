///<reference types="cypress" />
import 'cypress-wait-until';

describe('Wait until testing',()=>{
    it('wait until',()=>{
        cy.visit('https://www.programsbuzz.com/');
        cy.waitUntil(()=>
            cy.get('.nav-link.is-active')
            .invoke('text')
            .then(texts => texts === 'Home1'),{
                errorMsg: 'This is a custom error message', // overrides the default error message
                timeout: 2000, // waits up to 2000 ms, default to 5000
                interval: 500 // performs the check every 500 ms, default to 200
              } 
        )
        
    })
})

