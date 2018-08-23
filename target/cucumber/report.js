$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Blank.feature");
formatter.feature({
  "line": 1,
  "name": "Nada",
  "description": "Try to figure out why Selenium is launching two browsers at start up, not just one",
  "id": "nada",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3689336162,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Go On!",
  "description": "",
  "id": "nada;go-on!",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "a user navigates to \"http://webdriveruniversity.com/Page-Object-Model/products.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "clicks on the button identified with \"#container-special-offers div.section-title \u003e p\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the Proceed button is there",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 21
    }
  ],
  "location": "LoginSteps.navigatesToEndpoint(String)"
});
formatter.result({
  "duration": 3257940278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#container-special-offers div.section-title \u003e p",
      "offset": 38
    }
  ],
  "location": "LoginSteps.clicksOnTheButtonIdentified(String)"
});
formatter.result({
  "duration": 10159532032,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.theProceedButtonIsThere()"
});
formatter.result({
  "duration": 70894466,
  "status": "passed"
});
formatter.after({
  "duration": 822012618,
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
  "duration": 3182018535,
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
  "duration": 56781450,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"Cannot navigate to invalid URL\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-Q06AMIK\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\jwwoo\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: f0c6e8febaab4b88ea6552f7d9bd041b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat CucumberFramework.steps.LoginSteps.navigatesToEndpoint(LoginSteps.java:176)\r\n\tat ✽.Given a user navigates to \"www.webdriveruniversity.com\"(Login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginPortal_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 897416672,
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
  "duration": 3105787314,
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
  "duration": 37506329,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"Cannot navigate to invalid URL\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-Q06AMIK\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\jwwoo\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 5bcfb5ee54bb2da3e658a2728f2def97\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat CucumberFramework.steps.LoginSteps.navigatesToEndpoint(LoginSteps.java:176)\r\n\tat ✽.Given a user navigates to \"www.webdriveruniversity.com\"(Login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginPortal_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_Login_Submit_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 856646054,
  "status": "passed"
});
formatter.before({
  "duration": 3185592299,
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
  "duration": 37274221,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"Cannot navigate to invalid URL\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-Q06AMIK\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\jwwoo\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 9923db40520633e1e0cd1b93c3f153f6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat CucumberFramework.steps.LoginSteps.navigatesToEndpoint(LoginSteps.java:176)\r\n\tat ✽.Given a user navigates to \"www.webdriveruniversity.com\"(Login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_LoginPortal_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_clicks_the_Login_Submit_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.iCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 819296170,
  "status": "passed"
});
});