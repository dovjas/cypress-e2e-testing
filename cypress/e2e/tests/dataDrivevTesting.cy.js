///<reference types="cypress" />
const myUserData = require('../../fixtures/myUserData.json');


describe('Login using DDT hooks approach',()=>{
    let beforeData;
    before(()=>{
        cy.fixture('myUserData.json').then((data)=>{
            beforeData = data;
        })
    })
    it('Login test',()=>{
        cy.visit('https://demo.guru99.com/test/newtours/login.php');
        cy.get('input[name="userName"]').type(beforeData.username);
        cy.get('input[name="password"]').type(beforeData.password);
        cy.get('input[name="submit"]').click();
    })
})