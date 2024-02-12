///<reference types="cypress" />

describe('Handling data tables',()=>{
    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#data-table').invoke('removeAttr','target').click();
    });
    it('Calculate and assert the total age of all users',()=>{
        const userDetails = [];
        let numb = 0
        cy.get('#thumbnail-1 td').each(($el,idx,$list)=>{
            userDetails[idx]= $el.text();
        }).then(()=>{
            for(let i = 0; i<userDetails.length;i++){
                if(Number(userDetails[i])){
                    numb += Number(userDetails[i]);
                }
            }
            cy.log('Total age is: '+numb);
            expect(numb).to.eq(322);
        })
    });
    it('Calculate and assert the age of a given last name',()=>{
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el,idx,$list)=>{
            const text = $el.text();
            if(text === 'Woods'){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(idx).next().then((age)=>{
                    const userAge = age.text();
                    expect(userAge).to.eq('80');
                });
            };
        });
    });
});
