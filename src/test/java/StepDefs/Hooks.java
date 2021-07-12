package StepDefs;

import Utilities.Driver;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hooks {

    @Before
    public void setUp(Scenario scenario){

        System.out.println("This is running before each scenario");


    }

    @After
    public void tearDown(Scenario scenario){

        if(scenario.isFailed() && Driver.getDriverReference() != null) {
            final byte[] screenshot = ((TakesScreenshot) Driver.getDriver())
                    .getScreenshotAs(OutputType.BYTES);

            scenario.embed(screenshot, "image/png");
        }

        Driver.closeDriver();
    }
}
