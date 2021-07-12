$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/AddToCart.feature");
formatter.feature({
  "name": "Add to chart functionality of GoPuff",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add item to cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click on \"\u003csectionName\u003e\" section",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on \"\u003citemName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user go to \"\u003citemName\u003e\" page",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Add to Bag button",
  "keyword": "And "
});
formatter.step({
  "name": "user click on close button",
  "keyword": "And "
});
formatter.step({
  "name": "verify user is on home page and click on My Bag",
  "keyword": "Then "
});
formatter.step({
  "name": "verify \"\u003citemName\u003e\" is in the item list",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sectionName",
        "itemName"
      ]
    },
    {
      "cells": [
        "Snacks",
        "Kit Kat King Size 3oz"
      ]
    }
  ]
});
formatter.background({
  "name": "signin",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page and click on sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCart.userIsOnTheHomePageAndClickOnSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter phoneNumber and click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCart.userEnterPhoneNumberAndClickOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter code and click on next button",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.userEnterCodeAndClickOnNextButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text (\u0027Code\u0027) to be present in element found by By.tagName: h1 (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Viniras-MBP.fios-router.home\u0027, ip: \u0027fe80:0:0:0:857:c7a:696e:7f78%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: /var/folders/n8/9hgvnygd7x5...}, goog:chromeOptions: {debuggerAddress: localhost:52162}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b87728a690a0aa6d893be04f7d927c22\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\n\tat StepDefs.AddToCart.userEnterCodeAndClickOnNextButton(AddToCart.java:53)\n\tat ✽.user enter code and click on next button(src/test/java/Features/AddToCart.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should be on shop page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.userShouldBeOnShopPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add item to cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click on \"Snacks\" section",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCart.userClickOnSection(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on \"Kit Kat King Size 3oz\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCart.userClickOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user go to \"Kit Kat King Size 3oz\" page",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.userGoToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Add to Bag button",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.userClickOnAddToBagButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on close button",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.userClickOnCloseButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify user is on home page and click on My Bag",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.verifyUserIsOnHomePageAndClickOnMyBag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify \"Kit Kat King Size 3oz\" is in the item list",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.verifyIsInTheItemList(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add Item to cart with button",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click on \"\u003csectionName\u003e\" section",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on add button on \"\u003citemName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on Home",
  "keyword": "And "
});
formatter.step({
  "name": "user click on \"\u003csectionName2\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on add button on \"\u003citemName2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on My Bag",
  "keyword": "Then "
});
formatter.step({
  "name": "verify all items are in the item list",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sectionName",
        "itemName",
        "sectionName2",
        "itemName2"
      ]
    },
    {
      "cells": [
        "Snacks",
        "Kit Kat King Size 3oz",
        "Drinks",
        "Mountain Dew 2L Btl"
      ]
    }
  ]
});
formatter.background({
  "name": "signin",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page and click on sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCart.userIsOnTheHomePageAndClickOnSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter phoneNumber and click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCart.userEnterPhoneNumberAndClickOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter code and click on next button",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.userEnterCodeAndClickOnNextButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text (\u0027Code\u0027) to be present in element found by By.tagName: h1 (tried for 10 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\n\tat StepDefs.AddToCart.userEnterCodeAndClickOnNextButton(AddToCart.java:53)\n\tat ✽.user enter code and click on next button(src/test/java/Features/AddToCart.feature:6)\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d91.0.4472.114)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Viniras-MBP.fios-router.home\u0027, ip: \u0027fe80:0:0:0:857:c7a:696e:7f78%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: /var/folders/n8/9hgvnygd7x5...}, goog:chromeOptions: {debuggerAddress: localhost:52287}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e7aba22daaa1e61d138406d6da9b336f\n*** Element info: {Using\u003dtag name, value\u003dh1}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:349)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByTagName(RemoteWebDriver.java:396)\n\tat org.openqa.selenium.By$ByTagName.findElements(By.java:312)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:310)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$13.apply(ExpectedConditions.java:398)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$13.apply(ExpectedConditions.java:394)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat StepDefs.AddToCart.userEnterCodeAndClickOnNextButton(AddToCart.java:53)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should be on shop page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.userShouldBeOnShopPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add Item to cart with button",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click on \"Snacks\" section",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCart.userClickOnSection(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on add button on \"Kit Kat King Size 3oz\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCart.userClickOnAddButtonOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Home",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.clickOnHome()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on \"Drinks\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCart.userClickOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on add button on \"Mountain Dew 2L Btl\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCart.userClickOnAddButtonOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on My Bag",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.clickOnMyBag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify all items are in the item list",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.verifyAllItemsAreInTheItemList()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d91.0.4472.114)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Viniras-MBP.fios-router.home\u0027, ip: \u0027fe80:0:0:0:857:c7a:696e:7f78%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: /var/folders/n8/9hgvnygd7x5...}, goog:chromeOptions: {debuggerAddress: localhost:52287}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e7aba22daaa1e61d138406d6da9b336f\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat Utilities.Driver.getDriver(Driver.java:36)\n\tat StepDefs.Hooks.tearDown(Hooks.java:26)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "buy alcohol with valid address",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click on \"\u003csectionName\u003e\" section",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on add button on \"\u003citemName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on My Bag",
  "keyword": "Then "
});
formatter.step({
  "name": "click on checkout then Continue to Checkout display",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sectionName",
        "itemName"
      ]
    },
    {
      "cells": [
        "Alcohol",
        "TRULY Hard Seltzer Iced Tea 12pk 12oz Can 5.0 ABV"
      ]
    }
  ]
});
formatter.background({
  "name": "signin",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page and click on sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCart.userIsOnTheHomePageAndClickOnSignInButton()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class StepDefs.AddToCart\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d91.0.4472.114)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Viniras-MBP.fios-router.home\u0027, ip: \u0027fe80:0:0:0:857:c7a:696e:7f78%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: /var/folders/n8/9hgvnygd7x5...}, goog:chromeOptions: {debuggerAddress: localhost:52287}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e7aba22daaa1e61d138406d6da9b336f\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat Utilities.Driver.getDriver(Driver.java:36)\n\tat Pages.SignInPage.\u003cinit\u003e(SignInPage.java:15)\n\tat StepDefs.AddToCart.\u003cinit\u003e(AddToCart.java:29)\n\t... 37 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter phoneNumber and click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCart.userEnterPhoneNumberAndClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter code and click on next button",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.userEnterCodeAndClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be on shop page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.userShouldBeOnShopPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "buy alcohol with valid address",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user click on \"Alcohol\" section",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCart.userClickOnSection(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on add button on \"TRULY Hard Seltzer Iced Tea 12pk 12oz Can 5.0 ABV\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCart.userClickOnAddButtonOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on My Bag",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.clickOnMyBag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on checkout then Continue to Checkout display",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.clickOnCheckoutThenContinueToCheckoutDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d91.0.4472.114)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Viniras-MBP.fios-router.home\u0027, ip: \u0027fe80:0:0:0:857:c7a:696e:7f78%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: /var/folders/n8/9hgvnygd7x5...}, goog:chromeOptions: {debuggerAddress: localhost:52287}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e7aba22daaa1e61d138406d6da9b336f\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat Utilities.Driver.getDriver(Driver.java:36)\n\tat StepDefs.Hooks.tearDown(Hooks.java:26)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.background({
  "name": "signin",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the home page and click on sign in button",
  "keyword": "Given "
});
formatter.match({
  "location": "AddToCart.userIsOnTheHomePageAndClickOnSignInButton()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class StepDefs.AddToCart\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d91.0.4472.114)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Viniras-MBP.fios-router.home\u0027, ip: \u0027fe80:0:0:0:857:c7a:696e:7f78%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: /var/folders/n8/9hgvnygd7x5...}, goog:chromeOptions: {debuggerAddress: localhost:52287}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e7aba22daaa1e61d138406d6da9b336f\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat Utilities.Driver.getDriver(Driver.java:36)\n\tat Pages.SignInPage.\u003cinit\u003e(SignInPage.java:15)\n\tat StepDefs.AddToCart.\u003cinit\u003e(AddToCart.java:29)\n\t... 37 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter phoneNumber and click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCart.userEnterPhoneNumberAndClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter code and click on next button",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.userEnterCodeAndClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be on shop page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.userShouldBeOnShopPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "buy alcohol with invalid address",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user click on manu and my address and select KansasCity, Mo",
  "keyword": "When "
});
formatter.match({
  "location": "AddToCart.userClickOnManuAndMyAddressAndSelectKansasCityMo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Home",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.clickOnHome()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for \"Alcohol\"",
  "keyword": "And "
});
formatter.match({
  "location": "AddToCart.userSearchFor(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddToCart.errorMessageShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d91.0.4472.114)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Viniras-MBP.fios-router.home\u0027, ip: \u0027fe80:0:0:0:857:c7a:696e:7f78%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: /var/folders/n8/9hgvnygd7x5...}, goog:chromeOptions: {debuggerAddress: localhost:52287}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e7aba22daaa1e61d138406d6da9b336f\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\n\tat Utilities.Driver.getDriver(Driver.java:36)\n\tat StepDefs.Hooks.tearDown(Hooks.java:26)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
});