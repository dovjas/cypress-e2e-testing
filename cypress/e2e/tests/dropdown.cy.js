///<reference types="cypress"/>

describe('Handling dropdown',()=>{
    it('Standart dropdown with Select',()=>{
        cy.visit('https://demo.guru99.com/test/newtours/register.php')
        cy.get('select[name="country"]').select('LITHUANIA')
        .should('have.value','LITHUANIA');
    })
    it('Dropdown without Select',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-reasondummy-container').click();
        cy.get('input.select2-search__field').type('Expedite passport renewal').type('{enter}')
        cy.get('#select2-reasondummy-container')
            .should('have.text','×Expedite passport renewal');
    })
    it('Dropdown using Contains',()=>{
        cy.visit('https://www.wikipedia.org/');
        cy.get('#searchInput').type('Lithuania');
        cy.get('em.suggestion-highlight').contains('Lithuania').click();
        cy.get('.mw-page-title-main').should('have.text','Lithuanian Journal of Physics')
    });
    it.only('Verify autocomplete',()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click();
        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el,idx,$list)=>{ 
            let product = $el.text();
            let productSelect = 'Asparagus';

            if (product === productSelect){
                cy.wrap($el).trigger('click');
                cy.get('#submit-button').click();
                cy.url().should('include','Asparagus');
            };
        });
    });
})

