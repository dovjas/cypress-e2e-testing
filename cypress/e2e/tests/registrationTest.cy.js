import registrationPage from "../../pages/registrationPage";
import registrationData from "../../fixtures/registrationData.json";

const registrationObj = new registrationPage;

describe('Test automation',()=>{
    
    it('Registration flow',()=>{
        registrationObj.openURL();
        registrationObj.enterFirstName(registrationData.firstName);
        registrationObj.enterLastName(registrationData.lastName);
        registrationObj.enterEmail(registrationData.email);
        registrationObj.enterPhone(registrationData.phone);
        registrationObj.enterPassword(registrationData.password);
        registrationObj.selectCheckbox();
        registrationObj.clickContinue();
    });
});