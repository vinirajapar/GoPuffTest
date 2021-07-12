package Pages;

import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DrinkPage {
    public DrinkPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//div[contains(text(),'Drinks')]")
    public WebElement drinks;

////div[contains(text(),'Mountain Dew 2L Btl')]/parent::div/parent::div/div[3]


}
