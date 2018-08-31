@Smoke
Feature: Login into account feature1
  Existing user should be able to login to account using the correct credentials


  Scenario: Login into account with correct credentials number 1
  Description for this scenario

    Given a user navigates to "www.webdriveruniversity.com"
#    And user clicks on an 'a' element that contains the text string "Log In"
    When I click on the LoginPortal button
    And user enters a valid username1
    And user enters a valid password1
    When user clicks on the submit button1
    Then user is taken to the successful login page1
    And I close the browser

  Scenario Outline: Login to account with credentials
  This is an example to run multiples scenarios with the same set of test steps

    Given a user navigates to "<url>"
    When I click on the LoginPortal button
    When a user enters "<username>" in the userName text field
    And a user enters a "<password>" in the password text field
    When user clicks the Login Submit button
    Then the user is presented with a "<message>"
    And I close the browser
    Examples:
      | url                         | username                       | password     | message |
      | www.webdriveruniversity.com | webdriveruniversity2@mailz.com | Yellow321!   | Fail    |
      | www.webdriveruniversity.com | webdriver                      | webdriver123 | Succeed |


