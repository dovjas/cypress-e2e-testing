describe('Assert Demo',()=>{
    it('implicit assert demo',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        // cy.url().should('include','testautomationpractice')
        // .should('eq','https://testautomationpractice.blogspot.com/')
        // .should('contain','.blogspot.com/');

        cy.url().should('include','testautomationpractice')
        .and('eq','https://testautomationpractice.blogspot.com/')
        .and('contain','.blogspot.com/');

        // Element visible
        cy.get('#name').should('be.visible').and('exist');
        cy.get('input.form-check-input[type="checkbox"]').should('have.length',7)
    })
    it.only('explicit assert demo',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('[for="sunday"]').then((el)=>{
            const text = el.text();
            expect('Sunday').to.eq(text);
        })
    })
})