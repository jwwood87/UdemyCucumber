$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
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
  "duration": 3896474139,
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
  "duration": 3427539464,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.ClickOnTheContactUsButton()"
});
formatter.result({
  "duration": 209759064,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterFirstName()"
});
formatter.result({
  "duration": 1162093557,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterLastName()"
});
formatter.result({
  "duration": 106147301,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterEmailAddress()"
});
formatter.result({
  "duration": 163015727,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.EnterComments()"
});
formatter.result({
  "duration": 231322803,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_the_RESET_button()"
});
formatter.result({
  "duration": 59042150,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_information_on_the_Contact_Us_form_is_removed()"
});
formatter.result({
  "duration": 31289,
  "status": "passed"
});
formatter.after({
  "duration": 822124323,
  "status": "passed"
});
});