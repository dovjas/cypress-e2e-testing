///<reference types="cypress" />

describe('Iterate over elements',()=>{
    it('Log information about all hair care products',()=>{
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click();
        cy.get('.fixed_wrapper .prdocutname').each(($el,idx,$list)=>{
            cy.log('Index: '+idx, 'list: '+$el.text());
        });
    })
    it('Add to cart specifict product',()=>{
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click();
        cy.get('.fixed_wrapper .prdocutname').each(($el,idx,$list)=>{
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click();
            };
        });
    });

})