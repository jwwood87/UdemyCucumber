package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import utils.DriverFactory;

public class ContactUs extends DriverFactory {

    @Given("^I access webdriveruniversity contact us form$")
    public void accessWebdriverUniversityContactUsForm() {
        getDriver().get("http://webdriveruniversity.com/contact-us/contactus.html");
    }

    @Given("^User does nothing$")
    public void user_does_nothing() {
        System.out.println("\nThis is doing nothing.");
    }

//    @Given("^User does nothing$")
//    public void userDoesNothing() throws Throwable {
//        System.out.println("This is doing nothing from the ContactUs Class");
//    }
}
