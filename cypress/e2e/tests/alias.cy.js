///<reference types="cypress" />

describe('Alias example',()=>{
    it('alias',()=>{
        cy.visit('https://commitquality.com/practice-contact-form');
        const emailValue = cy.get('#email').type('email@email.com').invoke('val');
        emailValue.should('eq','email@email.com');
    })
    it('alias and invode',()=>{
        cy.visit('https://automationteststore.com/');
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt',5);
        cy.get('@productThumbnail').should('include','Seaweed Conditioner');
    });
    it.only('calculate normal of total and sale products ',()=>{
        cy.visit('https://automationteststore.com/');
        cy.get('.thumbnail').as('productsThumbnail');
        cy.get('@productsThumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@itemPrice').then(($priceValue)=>{
            let totalPrice = 0
            let price = $priceValue.split('$');
            for(let i=0;i<price.length;i++){
                totalPrice += Number(price[i]);
            };
            totalItems += totalPrice; 
            cy.log(totalPrice)
        });
    });
})