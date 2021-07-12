package Pages;

import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SnackPage {

    public SnackPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//div[contains(text(),'Snacks')]")
    public WebElement snacks;

    @FindBy(xpath = "//div[contains(text(),\"Cheetos Crunchy Flamin' Hot 8.5oz\")]")
    public WebElement chheto;

    @FindBy(xpath = "//span[contains(text(),'Add to Bag')]")
    public WebElement addBagBtn;

    @FindBy(xpath = "//*[@class='gp-product-info__navigate-back-img']")
    public WebElement closeBtn;
}
