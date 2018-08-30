package stepDefinitions;

import cucumber.api.java.en.Given;
import utils.DriverFactory;

public class ContactUsSteps extends DriverFactory {

    @Given("^I access webdriveruniversity contact us form$")
    public void accessWebdriverUniversityContactUsForm() {
        getDriver().get("http://webdriveruniversity.com/contact-us/contactus.html");
    }
}
