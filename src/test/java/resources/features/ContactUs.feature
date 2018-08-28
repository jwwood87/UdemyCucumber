@Family
Feature: WebDriver University: Contact Us Form
  A user should be able to submit information via the ContactUs form
  If a user clicks on the Reset button, then all information is removed from the form

  @John
  Scenario: Submit Information into the Contact Us form

    Given I access WebDriver University
    When I click on the Contact Us button
    And I enter a First name
    And I enter a Last name
    And I enter an email address
    And I enter comments

    When user clicks on the SUBMIT button
    Then the information is submitted via Contact Us form

  @Lori
  Scenario: Reset button removes the Contact Us information

    Given I access WebDriver University
    When I click on the Contact Us button
    And I enter a First name
    And I enter a Last name
    And I enter an email address
    And I enter comments
    When I click the RESET button
    Then the information on the Contact Us form is removed


