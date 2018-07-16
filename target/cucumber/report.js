$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Blank.feature");
formatter.feature({
  "line": 1,
  "name": "Nada",
  "description": "Try to figure out why Selenium is launching two browsers at start up, not just one",
  "id": "nada",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3616513246,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Do nothing",
  "description": "Description for this scenario",
  "id": "nada;do-nothing",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User does nothing",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_does_nothing()"
});
formatter.result({
  "duration": 88823442,
  "status": "passed"
});
formatter.after({
  "duration": 802457941,
  "status": "passed"
});
formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 2,
  "name": "WebDriver University: Contact Us Form",
  "description": "A user should be able to submit information via the ContactUs form\r\nIf a user clicks on the Reset button, then all information is removed from the form",
  "id": "webdriver-university:-contact-us-form",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Family"
    }
  ]
});
formatter.before({
  "duration": 3122477760,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Submit Information into the Contact Us form",
  "description": "",
  "id": "webdriver-university:-contact-us-form;submit-information-into-the-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@John"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I access WebDriver University",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on the Contact Us button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter a First name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter a Last name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter an email address",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter comments",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on the SUBMIT button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the information is submitted via Contact Us form",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.Access_WebDriver_University()"
});
formatter.result({
  "duration": 3528528348,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClickOnTheContactUsButton()"
});
formatter.result({
  "duration": 263599711,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterFirstName()"
});
formatter.result({
  "duration": 1145600243,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterLastName()"
});
formatter.result({
  "duration": 123385138,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterEmailAddress()"
});
formatter.result({
  "duration": 221464968,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterComments()"
});
formatter.result({
  "duration": 221982088,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClickSubmitButton()"
});
formatter.result({
  "duration": 1406165502,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.theInformationIsSubmittedViaContactUsForm()"
});
formatter.result({
  "duration": 31607458,
  "status": "passed"
});
formatter.after({
  "duration": 849377038,
  "status": "passed"
});
formatter.before({
  "duration": 3111324128,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Reset button removes the Contact Us information",
  "description": "",
  "id": "webdriver-university:-contact-us-form;reset-button-removes-the-contact-us-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Lori"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I access WebDriver University",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on the Contact Us button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter a First name",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a Last name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter an email address",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter comments",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click the RESET button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the information on the Contact Us form is removed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.Access_WebDriver_University()"
});
formatter.result({
  "duration": 3302824020,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClickOnTheContactUsButton()"
});
formatter.result({
  "duration": 207732563,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterFirstName()"
});
formatter.result({
  "duration": 1149416917,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterLastName()"
});
formatter.result({
  "duration": 121057245,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterEmailAddress()"
});
formatter.result({
  "duration": 198168975,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterComments()"
});
formatter.result({
  "duration": 233587418,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_the_RESET_button()"
});
formatter.result({
  "duration": 55966135,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_information_on_the_Contact_Us_form_is_removed()"
});
formatter.result({
  "duration": 30151,
  "status": "passed"
});
formatter.after({
  "duration": 811020854,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login into account feature1",
  "description": "Existing user should be able to login to account using the correct credentials",
  "id": "login-into-account-feature1",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 3126453724,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login into account with correct credentials number 1",
  "description": "Description for this scenario",
  "id": "login-into-account-feature1;login-into-account-with-correct-credentials-number-1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "a user navigates to \"www.webdriveruniversity.com\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#    And user clicks on an \u0027a\u0027 element that contains the text string \"Log In\""
    }
  ],
  "line": 11,
  "name": "I click on the LoginPortal button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters a valid username1",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters a valid password1",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user clicks on the submit button1",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user is taken to the successful login page1",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "www.webdriveruniversity.com",
      "offset": 21
    }
  ],
  "location": "LoginSteps.navigatesToEndpoint(String)"
});
formatter.result({
  "duration": 3714728472,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginPortal_button()"
});
formatter.result({
  "duration": 605833498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_enters_a_valid_username(int)"
});
formatter.result({
  "duration": 1131321136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "LoginSteps.user_enters_a_valid_password(int)"
});
formatter.result({
  "duration": 75140530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "LoginSteps.user_clicks_on_the_submit_button(int)"
});
formatter.result({
  "duration": 3066321616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "LoginSteps.user_is_taken_to_the_successful_login_page(int)"
});
formatter.result({
  "duration": 3016091017,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCloseTheBrowser()"
});
formatter.result({
  "duration": 777158890,
  "status": "passed"
});
formatter.after({
  "duration": 59164,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Login to account with credentials",
  "description": "This is an example to run multiples scenarios with the same set of test steps",
  "id": "login-into-account-feature1;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "a user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on the LoginPortal button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "a user enters \"\u003cusername\u003e\" in the userName text field",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "a user enters a \"\u003cpassword\u003e\" in the password text field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks the Login Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user is presented with a \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-into-account-feature1;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 29,
      "id": "login-into-account-feature1;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "www.webdriveruniversity.com",
        "webdriveruniversity2@mailz.com",
        "Yellow321!",
        "Fail"
      ],
      "line": 30,
      "id": "login-into-account-feature1;login-to-account-with-credentials;;2"
    },
    {
      "cells": [
        "www.webdriveruniversity.com",
        "webdriver",
        "webdriver123",
        "Succeed"
      ],
      "line": 31,
      "id": "login-into-account-feature1;login-to-account-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3150351033,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login to account with credentials",
  "description": "This is an example to run multiples scenarios with the same set of test steps",
  "id": "login-into-account-feature1;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "a user navigates to \"www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on the LoginPortal button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "a user enters \"webdriveruniversity2@mailz.com\" in the userName text field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "a user enters a \"Yellow321!\" in the password text field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks the Login Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user is presented with a \"Fail\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "www.webdriveruniversity.com",
      "offset": 21
    }
  ],
  "location": "LoginSteps.navigatesToEndpoint(String)"
});
formatter.result({
  "duration": 3560453245,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginPortal_button()"
});
formatter.result({
  "duration": 2915840877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriveruniversity2@mailz.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.entersInTheUserNameTextField(String)"
});
formatter.result({
  "duration": 1180688162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yellow321!",
      "offset": 17
    }
  ],
  "location": "LoginSteps.entersInThePasswordTextField(String)"
});
formatter.result({
  "duration": 63035146,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_Login_Submit_button()"
});
formatter.result({
  "duration": 3072676104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fail",
      "offset": 30
    }
  ],
  "location": "LoginSteps.the_user_is_presented_with_a(String)"
});
formatter.result({
  "duration": 3011236690,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCloseTheBrowser()"
});
formatter.result({
  "duration": 803166776,
  "status": "passed"
});
formatter.after({
  "duration": 49493,
  "status": "passed"
});
formatter.before({
  "duration": 3134594522,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Login to account with credentials",
  "description": "This is an example to run multiples scenarios with the same set of test steps",
  "id": "login-into-account-feature1;login-to-account-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "a user navigates to \"www.webdriveruniversity.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on the LoginPortal button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "a user enters \"webdriver\" in the userName text field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "a user enters a \"webdriver123\" in the password text field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user clicks the Login Submit button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user is presented with a \"Succeed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "www.webdriveruniversity.com",
      "offset": 21
    }
  ],
  "location": "LoginSteps.navigatesToEndpoint(String)"
});
formatter.result({
  "duration": 3419412076,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginPortal_button()"
});
formatter.result({
  "duration": 600485376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 15
    }
  ],
  "location": "LoginSteps.entersInTheUserNameTextField(String)"
});
formatter.result({
  "duration": 1151063281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 17
    }
  ],
  "location": "LoginSteps.entersInThePasswordTextField(String)"
});
formatter.result({
  "duration": 64193404,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_Login_Submit_button()"
});
formatter.result({
  "duration": 3096365200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Succeed",
      "offset": 30
    }
  ],
  "location": "LoginSteps.the_user_is_presented_with_a(String)"
});
formatter.result({
  "duration": 3020507870,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCloseTheBrowser()"
});
formatter.result({
  "duration": 806454953,
  "status": "passed"
});
formatter.after({
  "duration": 72249,
  "status": "passed"
});
});