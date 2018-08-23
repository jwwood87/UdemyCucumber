Feature: Nada
  Try to figure out why Selenium is launching two browsers at start up, not just one

  Scenario: Do nothing
    Description for this scenario

    Given User does nothing

@Smoke
    Scenario: Go On!

      Given a user navigates to "http://webdriveruniversity.com/Page-Object-Model/products.html"
      Given clicks on the button identified with "#container-special-offers div.section-title > p"
      Then the Proceed button is there
