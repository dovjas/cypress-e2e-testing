class registrationPage{

    webLocators = {
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continueBtn:'.btn.btn-primary'
    };

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(fName){
        cy.get(this.webLocators.firstName).type(fName);
    }
    enterLastName(lName){
        cy.get(this.webLocators.lastName).type(lName);
    }
    enterEmail(email){
        cy.get(this.webLocators.email).type(email);
    }
    enterPhone(phone){
        cy.get(this.webLocators.telephone).type(phone);
    }
    enterPassword(password){
        cy.get(this.webLocators.password).type(password);
        cy.get(this.webLocators.passwordConfirm).type(password);
    }
    selectCheckbox(){
        cy.get(this.webLocators.policyCheckbox).check();
    }
    clickContinue(){
        cy.get(this.webLocators.continueBtn).click();
    }

}

export default registrationPage;