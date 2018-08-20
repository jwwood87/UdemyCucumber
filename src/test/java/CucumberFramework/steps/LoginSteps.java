package CucumberFramework.steps;

import cucumber.api.java.Before;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.concurrent.TimeUnit;


public class LoginSteps {

    WebDriver webDriver;

    @Before()
    public void setup(){
        System.out.println("\n" + "Entering LoginSteps.java setup");
/*
System.setProperty("webdriver.gecko.driver","C:\\Users\\jwwoo\\Documents\\LocalRepo\\src\\test\\java\\CucumberFramework\\resources\\geckodriver.exe");
this.webDriver = new FirefoxDriver();
*/
        System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toAbsolutePath() + "\\src\\test\\java\\CucumberFramework\\resources\\chromedriver.exe");
        this.webDriver = new ChromeDriver();
        this.webDriver.manage().window().maximize();
        this.webDriver.manage().timeouts().pageLoadTimeout(60,TimeUnit.SECONDS);
    }

    @After()
    public void tearDown(){
        System.out.println("\n" + "Entering the LoginSteps.java tearDown phase");
        this.webDriver.quit();
    }

    @Given("^I access WebDriver University$")
    public void Access_WebDriver_University() throws Throwable {
        System.out.println("Going to webdriver...");
        webDriver.get("http://webdriveruniversity.com");
        System.out.println("\n" + "...Done");
    }

    @When("^I click on the Contact Us button$")
    public void ClickOnTheContactUsButton() throws Throwable {
        try {
            System.out.println("Clicking the Contact Us link...");
            WebElement element = webDriver.findElement(By.cssSelector("a#contact-us div.section-title"));
            JavascriptExecutor js = (JavascriptExecutor) webDriver;
            js.executeScript("javascript:window.scrollBy(50,-300)");
            element.click();
            ArrayList<String> newTab = new ArrayList<String>(webDriver.getWindowHandles());
            System.out.println("\n" + "Going to the next tab..." + "\n");
            webDriver.switchTo().window(newTab.get(1));
            System.out.println("\n" + "...Done");
        } catch (Throwable t) {
            System.out.println("Error");
            throw t; // rethrow to allow the failure to be reported to JUnit
        }
    }

    @When("^I enter a First name$")
    public void EnterFirstName() throws Exception {

        System.out.println("Entering a first name..." + "\n");
        webDriver.findElement(By.xpath("//input[@name='first_name']")).click();
        webDriver.findElement(By.xpath("//input[@name='first_name']")).sendKeys("John");
        System.out.println("...Done");
    }

    @When("^I enter a Last name$")
    public void EnterLastName() {
        System.out.println("Entering a last name..." + "\n");
        webDriver.findElement(By.name("last_name")).click();
        webDriver.findElement(By.name("last_name")).sendKeys("Persing");
        System.out.println("...Done");
    }

    @When("^I enter an email address$")
    public void EnterEmailAddress() {
        System.out.println("Entering an email..." + "\n");
        webDriver.findElement(By.cssSelector("[name='email']")).click();
        webDriver.findElement(By.name("email")).sendKeys("johnWesWood@protonMail.com");
        System.out.println("...Done");
    }

    @When("^I enter comments$")
    public void EnterComments() {
        System.out.println("Entering a comment..." + "\n");
        webDriver.findElement(By.name("message")).click();
        webDriver.findElement(By.name("message")).sendKeys("The rain in Spain...." + "\n...falls mainly in the plain.");
        System.out.println("...Done");
    }

    @When("^user clicks on the SUBMIT button$")
    public void ClickSubmitButton() {
        System.out.println("Click SUBMIT..." + "\n");
        webDriver.findElement(By.xpath("//input[@value='SUBMIT']")).click();
        System.out.println("...Done");
    }

    @Then("^the information is submitted via Contact Us form$")
    public void theInformationIsSubmittedViaContactUsForm() {
        boolean thanksMessage = webDriver.findElement(By.xpath("//h1[contains(text(), 'Thank You for your Message')]")).isDisplayed();
        org.testng.Assert.assertTrue(thanksMessage, "Sorry, the expected Thanks message is not displayed");
    }

    @Given("^User navigates to stackoverflow website(\\d+)$")
    public void user_navigates_to_stackoverflow_website(int arg1) throws Throwable {
        webDriver.get("https://stackoverflow.com");
    }

    @And("^user clicks on the login button(\\d+)$")
    public void user_clicks_on_the_login_button(int arg1) throws Throwable {
        System.out.println("User Clicking on the Login Button");
        webDriver.findElement(By.xpath("//a[contains(text(), 'Log In')]")).click();
    }

    @When("^I click on the LoginPortal button$")
    public void i_click_on_the_LoginPortal_button() throws Throwable {
        System.out.println("User Clicking on the LoginPortal Button");

        WebElement element = webDriver.findElement(By.cssSelector("#login-portal h1"));
        JavascriptExecutor js = (JavascriptExecutor) webDriver;
        js.executeScript("javascript:window.scrollBy(50,-900)");
        element.click();

        System.out.println("\n" + "...Done. Window handle: " + webDriver.getWindowHandle());
    }

    @And("^user enters a valid username(\\d+)$")
    public void user_enters_a_valid_username(int arg1) throws Throwable {
        System.out.println("\n" + "User Enters a valid username");
        for (String winHandle : webDriver.getWindowHandles()) {
            webDriver.switchTo().window(winHandle);
        }
        webDriver.findElement(By.cssSelector("input#text")).sendKeys("webdriver");
    }

    @When("^user enters a valid password(\\d+)$")
    public void user_enters_a_valid_password(int arg1) throws Throwable {
        System.out.println("User Enters a Valid Password");
        webDriver.findElement(By.xpath(".//*[@id='password']")).sendKeys("webdriver123");
    }

    @Then("^user is taken to the successful login page(\\d+)$")
    public void user_is_taken_to_the_successful_login_page(int arg1) throws Throwable {

        Thread.sleep(1000);
        Alert alert = webDriver.switchTo().alert();
        Assert.assertTrue(alert.getText().toLowerCase().contains("succeed"));
        Thread.sleep(1000);
        alert.accept();
        Thread.sleep(1000);
    }

    @And("^I close the browser$")
    public void iCloseTheBrowser() throws Throwable {
        webDriver.quit();
    }

    @Given("^a user navigates to \"([^\"]*)\"$")
    public void navigatesToEndpoint(String endPoint) throws Throwable {

        System.out.println(("the endopint is " + endPoint));
        webDriver.get("http://" + endPoint);
    }

    @Given("^user clicks on an 'a' element that contains the text string \"([^\"]*)\"$")
    public void user_clicks_on_an_a_element_that_contains_the_text_string(String arg1) throws Throwable {

        webDriver.findElement(By.xpath("//a[contains(text(), 'Log In')]")).click();
    }

    @Given("^a user clicks the login portal button$")
    public void clickTheLoginPortalButton() throws Throwable {

        webDriver.findElement(By.xpath("//a[contains(text(), 'Log In')]")).click();
    }

    @When("^a user enters \"([^\"]*)\" in the userName text field$")
    public void entersInTheUserNameTextField(String userName) throws Throwable {
        System.out.println("\n" + "The current window handle is: " + " " + webDriver.getWindowHandle());

        System.out.println("\n" + "Going to the next tab..." + "\n");
        for (String winHandle : webDriver.getWindowHandles()) {
            webDriver.switchTo().window(winHandle);
        }
        System.out.println("\n" + "The new window handle: " + " " + webDriver.getWindowHandle());
        webDriver.findElement(By.cssSelector("input#text")).sendKeys(userName);
    }

    @When("^a user enters a \"([^\"]*)\" in the password text field$")
    public void entersInThePasswordTextField(String passWord) throws Throwable {

//        webDriver.findElement(By.xpath("//*[@id='password']")).sendKeys(passWord);
        webDriver.findElement(By.id("password")).sendKeys((passWord));
    }

    @When("^user clicks the Login Submit button$")
    public void user_clicks_the_Login_Submit_button() throws Throwable {
        Thread.sleep(3000);
        webDriver.findElement(By.xpath("//*[@id='login-button']")).click();
    }


    @And("^user clicks on the submit button(\\d+)$")
    public void user_clicks_on_the_submit_button(int arg1) throws Throwable {
        System.out.println("\n" +"User Clicking on the Login Button");
        Thread.sleep(3000);
        webDriver.findElement(By.xpath(".//*[@id='login-button']")).click();
    }

    @When("^I click the RESET button$")
    public void i_click_the_RESET_button() throws Throwable {

        webDriver.findElement(By.xpath("//*[@type='reset']")).click();
    }

    @Then("^the information on the Contact Us form is removed$")
    public void the_information_on_the_Contact_Us_form_is_removed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("^the user is presented with a \"([^\"]*)\"$")
    public void the_user_is_presented_with_a(String message) throws Throwable {    // Write code here that turns the phrase above into concrete actions

        Thread.sleep(1000);
        Alert alert = webDriver.switchTo().alert();
        Assert.assertTrue(alert.getText().toLowerCase().contains(message.toLowerCase()));
        Thread.sleep(1000);
        alert.accept();
        Thread.sleep(1000);
    }

    @Given("^User does nothing$")public void user_does_nothing() throws Throwable {

    }

    public static void disableWarning() {
        System.err.close();
        System.setErr(System.out);
    }
}
