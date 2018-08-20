$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
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
  "duration": 3591191208,
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
  "duration": 3798837987,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginPortal_button()"
});
formatter.result({
  "duration": 438553156,
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
  "duration": 1148275242,
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
  "duration": 75413070,
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
  "duration": 3078743347,
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
  "duration": 3018462726,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCloseTheBrowser()"
});
formatter.result({
  "duration": 862966006,
  "status": "passed"
});
formatter.after({
  "duration": 257707,
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
  "duration": 3300930930,
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
  "duration": 3228739478,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginPortal_button()"
});
formatter.result({
  "duration": 335366922,
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
  "duration": 1201027186,
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
  "duration": 69562615,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_Login_Submit_button()"
});
formatter.result({
  "duration": 3079358884,
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
  "duration": 3010868056,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCloseTheBrowser()"
});
formatter.result({
  "duration": 792655870,
  "status": "passed"
});
formatter.after({
  "duration": 146204,
  "status": "passed"
});
formatter.before({
  "duration": 3103541789,
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
  "duration": 3554074611,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginPortal_button()"
});
formatter.result({
  "duration": 471240951,
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
  "duration": 1534860952,
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
  "duration": 101821469,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_Login_Submit_button()"
});
formatter.result({
  "duration": 3070078597,
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
  "duration": 3009688181,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCloseTheBrowser()"
});
formatter.result({
  "duration": 784176010,
  "status": "passed"
});
formatter.after({
  "duration": 40960,
  "status": "passed"
});
});