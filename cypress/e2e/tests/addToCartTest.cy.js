import homePage from "../../pages/homepage";
import testData from "../../fixtures/testData.json";

const homePageObj = new homePage();

describe('Add to cart test automation',()=>{
    before(()=>{
        cy.login(testData.login.username,testData.login.password);
    })


    it('Add to cart flow',()=>{
        homePageObj.searchProduct(testData.product.productName);
        homePageObj.addToCart();
        homePageObj.verifySuccessMessage().should('contain',testData.message.successMsg).and('contain',testData.product.productName);
    })
})