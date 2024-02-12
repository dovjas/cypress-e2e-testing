class homePage{ 
    weblocators = {
        searchInput:'.form-control.input-lg',
        clickSearch:'.btn.btn-default',
        product:'img[title="MacBook"]',
        addtocart: 'Add to Cart',
        successMessage:'.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName){
        cy.get(this.weblocators.searchInput).type(productName);
        cy.get(this.weblocators.clickSearch).click();
    }
    addToCart(){
        cy.contains(this.weblocators.addtocart).first().click();
    }
    verifySuccessMessage(){
        return cy.get(this.weblocators.successMessage);
    }
}

export default homePage; 