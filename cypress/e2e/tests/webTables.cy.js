///<reference types="cypress"/>

describe('Web table',()=>{
    it('verifying total table',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('table#productTable tr').should('have.length',6);
        cy.get('table#productTable tr th').should('have.length',4);
        cy.get('table#productTable tr td').should('have.length',20);
    });
    it('specific value from table',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('table#productTable').scrollIntoView();
        cy.get('table#productTable tr:nth-child(3) td:nth-child(2)').contains('Product 3');
    });
    it('get all rows values',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('table#productTable').scrollIntoView();
        cy.get('table#productTable tbody tr').each(($row,index,$rows)=>{
        cy.wrap($row).within(()=>{
            cy.get('td').each(($cel,index,$cels)=>{
                cy.log($cel.text())
            })
        })
        })
    });
    it('pagination',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('table#productTable').scrollIntoView();
        cy.get('ul#pagination li').then(($el)=>{
            const pageNumbers = $el.length;
            cy.log(pageNumbers)
        })
    });
    it('full pagination solution',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('table#productTable').scrollIntoView();

        let pageNumb = 4;
        for(let i=1;i<=pageNumb;i++){
            cy.get(`ul#pagination li:nth-child(${i}) a`).click();
            cy.wait(3000);
            cy.get('table#productTable tbody tr').each(($row,index,$rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($cel,index,$cels)=>{
                        cy.log($cel.text())
                    })
                })
                })
        }


    })
})