Feature: Add to chart functionality of GoPuff

  Background: signin
    Given user is on the home page and click on sign in button
    When user enter phoneNumber and click on next button
    And user enter code and click on next button
    Then User should be on shop page

  Scenario Outline: Add item to cart
    Given user click on "<sectionName>" section
    When user click on "<itemName>"
    And user go to "<itemName>" page
    And user click on Add to Bag button
    And user click on close button
    Then verify user is on home page and click on My Bag
    And verify "<itemName>" is in the item list

    Examples:
      | sectionName | itemName              |
      | Snacks      | Kit Kat King Size 3oz |

  Scenario Outline: Add Item to cart with button
    Given user click on "<sectionName>" section
    When user click on add button on "<itemName>"
    And click on Home
    Given user click on "<sectionName2>"
    When user click on add button on "<itemName2>"
    Then click on My Bag
    And verify all items are in the item list

    Examples:
      | sectionName | itemName              | sectionName2 | itemName2                              |
      | Snacks      | Kit Kat King Size 3oz | Drinks       | Mountain Dew 2L Btl                    |

  Scenario Outline: buy alcohol with valid address
    Given user click on "<sectionName>" section
    When user click on add button on "<itemName>"
    Then click on My Bag
    And click on checkout then Continue to Checkout display

    Examples:
      | sectionName | itemName                                          |
      | Alcohol     | TRULY Hard Seltzer Iced Tea 12pk 12oz Can 5.0 ABV |
#
  Scenario:buy alcohol with invalid address
    When user click on manu and my address and select KansasCity, Mo
    And click on Home
    And user search for "Alcohol"
#    Given user click on "<sectionName>" section
#    When user click on add button on "<itemName>"
#    And click on My Bag
    Then error message should be displayed
#
#    Examples:
#      | sectionName | itemName                                          |
#      | Alcohol     | TRULY Hard Seltzer Iced Tea 12pk 12oz Can 5.0 ABV |