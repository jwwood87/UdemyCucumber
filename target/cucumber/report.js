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
    },
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I access webdriveruniversity contact us form",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Tester.feature");
formatter.feature({
  "line": 1,
  "name": "Tester",
  "description": "",
  "id": "tester",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Hi there",
  "description": "",
  "id": "tester;hi-there",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I access webdriveruniversity contact us form",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});