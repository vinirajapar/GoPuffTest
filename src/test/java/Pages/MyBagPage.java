package Pages;

import Utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyBagPage {

    public MyBagPage(){
        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(xpath = "//button[contains(text(),'My Bag')]")
    public WebElement myBagBrn;

    @FindBy(xpath = "//div[@class='c-basket__items-details animated fadeIn']")
    public WebElement items;

    @FindBy(xpath = "//span[contains(text(),'details')]")
    public WebElement detailsBtn;

    @FindBy(xpath = "//span[contains(text(),'product')]")
    public WebElement product;

    @FindBy(xpath = "//button[@class='c-order-button puffButton puffAnim drop-shadow c-basket__order-actions-button u-box-shadow-none u-border-0']")
    public WebElement checkOutBtn;

    @FindBy(xpath = "//span[contains(text(),'Continue to Checkout')]")
    public WebElement continueBtn;

    @FindBy(xpath = "//*[@src='/mixpublic/images/footer-reskin-home-off.png']")
    public WebElement goPuffbtn;

    @FindBy(xpath = "//div[contains(text(),\"Product isn't available in this delivery zone\")]")
    public WebElement errorMSg;
}
