package CucumberFramework.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import com.cucumber.listener.Reporter;
import java.io.File;

@RunWith(Cucumber.class)
@CucumberOptions (
        features =  {"src/test/java/CucumberFramework/featureFiles"},
        glue = {"CucumberFramework.steps"},
        monochrome = true,
        tags = {},
        dryRun = false,
        plugin = {"pretty",
                    "html:target/cucumber",
                    "json:target/cucumber.json",
                    "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
)

public class MainRunner extends AbstractTestNGCucumberTests {

}
