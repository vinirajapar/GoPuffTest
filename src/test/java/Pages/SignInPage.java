package Pages;

import Utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage {


    public SignInPage() {


        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(xpath = "//*[@class='mr-2 btn rounded btn--text']")
    public WebElement SignInBtn;

    @FindBy(xpath = "//input[@id='input-22']")
    public WebElement numberInput;

    @FindBy(xpath = "//span[contains(text(),'Next')]")
    public WebElement nextBtn;

    @FindBy(xpath = "//input[@placeholder='Enter Code']")
    public WebElement codeInput;

    @FindBy(xpath = "//button[@class='mt-4 v-btn v-btn--block v-btn--contained theme--light elevation-0 v-size--default primary']")
    public WebElement submit;

    @FindBy(xpath = "//*[@alt='Account']")
    public WebElement manu;

    @FindBy(xpath = "//*[@data-testid='My Addresses']")
    public WebElement myAddress;

    @FindBy(xpath = "//div[contains(text(),'Kansas City, MO')]")
    public WebElement KsAddress;

    @FindBy(xpath = "//input[@id='product-search']")
    public WebElement search;

    @FindBy(xpath = "//div[@class='u-flex1']")
    public WebElement alcErrorMsg;

}
