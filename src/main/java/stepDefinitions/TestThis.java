package stepDefinitions;

import cucumber.api.java.en.Given;
import utils.DriverFactory;

public class TestThis extends DriverFactory {


    @Given("^I access webdriveruniversity contact us form$")
    public void i_access_webdriveruniversity_contact_us_form() {

        getDriver().get("http://webdriveruniversity.com/Contact-Us/contactus.html");
    }

    @Given("^User does nothing$")
    public void user_does_nothing() {

        System.out.println("\nThis is doing nothing.");
    }

}
