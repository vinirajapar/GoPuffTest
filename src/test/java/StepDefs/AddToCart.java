package StepDefs;

import Pages.MyBagPage;
import Pages.SignInPage;
import Pages.SnackPage;
import Utilities.Driver;
import Utilities.Utils;
import com.sun.source.tree.AssertTree;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static Utilities.ConfigReader.*;

public class AddToCart {
    //WebDriver driver = Driver.getDriver();
    SignInPage sPge = new SignInPage();
    MyBagPage bagPge = new MyBagPage();
    SnackPage snkPge = new SnackPage();
    WebDriverWait wait = new WebDriverWait(Driver.getDriver(), 10);
    Actions ac = new Actions(Driver.getDriver());
    JavascriptExecutor jse = (JavascriptExecutor)Driver.getDriver();

    @Given("user is on the home page and click on sign in button")
    public void userIsOnTheHomePageAndClickOnSignInButton() {
        Driver.getDriver().get(getProperty("HomeUrl"));
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        sPge.SignInBtn.click();
        String SignInTitle = "Sign In to Your goPuff Delivery Account | goPuff";
        wait.until(ExpectedConditions.titleIs(SignInTitle));
    }

    @When("user enter phoneNumber and click on next button")
    public void userEnterPhoneNumberAndClickOnNextButton() {
        sPge.numberInput.sendKeys(getProperty("PhoneNumber"));
        sPge.nextBtn.click();
    }

    @And("user enter code and click on next button")
    public void userEnterCodeAndClickOnNextButton() {
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.tagName("h1"), "Code"));
        Driver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        System.out.println("CODE ISSSSS"+Utils.getCode());
        sPge.codeInput.sendKeys(Utils.getCode());
        sPge.submit.click();

    }

    @Then("User should be on shop page")
    public void userShouldBeOnShopPage() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@alt='Account']")));
    }


    @When("user click on {string}")
    public void userClickOn(String snackName) {
        String xpath = "//div[contains(text(),'" + snackName + "')]";
        WebElement snackItem = Driver.getDriver().findElement(By.xpath(xpath));
        jse.executeScript("arguments[0].click()", snackItem);
      //  ac.moveToElement(snackItem).click().perform();

    }

    @And("user go to {string} page")
    public void userGoToPage(String snackName) {
        //Driver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
       // wait.until(ExpectedConditions.titleContains(snackName));
        WebElement h = Driver.getDriver().findElement(By.tagName("h1"));
        Assert.assertTrue(h.getText().contains(snackName));
    }

    @And("user click on Add to Bag button")
    public void userClickOnAddToBagButton() {
        snkPge.addBagBtn.click();
    }

    @And("user click on close button")
    public void userClickOnCloseButton() {
        snkPge.closeBtn.click();
    }

    @Then("verify user is on home page and click on My Bag")
    public void verifyUserIsOnHomePageAndClickOnMyBag() {
        Driver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        //Assert.assertTrue(Driver.getDriver().getCurrentUrl().equals(getProperty("ShopURL")));
        bagPge.myBagBrn.click();
    }

    @And("verify {string} is in the item list")
    public void verifyIsInTheItemList(String snackName) {
        Boolean hasItem = false;
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        bagPge.detailsBtn.click();
        List<WebElement> itemList = bagPge.items.findElements(By.xpath("./div/div[3]"));
        for (WebElement i : itemList) {
            if (i.getText().contains(snackName)) {
                hasItem = true;
                break;
            }
        }
        Assert.assertTrue(hasItem);
    }

    @Given("user click on {string} section")
    public void userClickOnSection(String sectionName) {
        String path = "//div[contains(text(),'" + sectionName + "')]";
        WebElement sec = Driver.getDriver().findElement(By.xpath(path));
        sec.click();
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

    }

    @When("user click on add button on {string}")
    public void userClickOnAddButtonOn(String itemName) {
        String path = "//div[contains(text(),'" + itemName + "')]/parent::div/parent::div/div[3]";
        WebElement btn = Driver.getDriver().findElement(By.xpath(path));
        jse.executeScript("arguments[0].click()", btn);
       // btn.click();
    }

    @And("verify all items are in the item list")
    public void verifyAllItemsAreInTheItemList() {
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        Assert.assertTrue(bagPge.product.getText().contains("2"));
    }

    @Then("click on My Bag")
    public void clickOnMyBag() {
        bagPge.myBagBrn.click();
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }


    @And("click on checkout then Continue to Checkout display")
    public void clickOnCheckoutThenContinueToCheckoutDisplay() {
        bagPge.checkOutBtn.click();
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        Assert.assertTrue(bagPge.continueBtn.isDisplayed());
    }

    @When("user click on manu and my address and select KansasCity, Mo")
    public void userClickOnManuAndMyAddressAndSelectKansasCityMo() {
        sPge.manu.click();
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        sPge.myAddress.click();
        Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        wait.until(ExpectedConditions.elementToBeClickable(sPge.KsAddress));
        sPge.KsAddress.click();
        wait.until(ExpectedConditions.elementToBeClickable(bagPge.goPuffbtn));
        jse.executeScript("arguments[0].click()", bagPge.goPuffbtn);
    }

    @And("click on Home")
    public void clickOnHome() {
        Driver.getDriver().manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        wait.until(ExpectedConditions.elementToBeClickable(bagPge.goPuffbtn));
        jse.executeScript("arguments[0].click()", bagPge.goPuffbtn);
    }

    @Then("error message should be displayed")
    public void errorMessageShouldBeDisplayed() {
        Assert.assertTrue(sPge.alcErrorMsg.isDisplayed());
    }

    @And("user search for {string}")
    public void userSearchFor(String searchItem) {
        sPge.search.sendKeys(searchItem);
        sPge.search.sendKeys(Keys.ENTER);
    }
}




