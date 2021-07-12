package Runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
       plugin = {"pretty","html:target/cucumber", "json:target/report.json"},
        features = "src/test/java/Features",
        glue = "StepDefs",
       // tags = "",
        dryRun = false
)
public class Runner {

}

