describe('Screenshot',()=>{
    it('Making a Screenshot',()=>{
        cy.visit('https://demo.guru99.com/test/newtours/');
        cy.screenshot();
    })
})