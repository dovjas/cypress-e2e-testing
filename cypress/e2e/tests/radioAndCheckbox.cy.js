describe('Radio and Checkbox',()=>{
    it('Radio button',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#male').should('be.visible')
        .and('not.be.checked')
        .check()
        .should('be.checked');
    });

    it('Checkobx',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#sunday').should('be.visible')
        .and('not.checked')
        .check()
        .and('be.checked');

        cy.get('input.form-check-input[type="checkbox"]').last().check().and('be.checked');
    })
})