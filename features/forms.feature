Feature: User inputted forms

  @form
  Scenario: Fill a form with valid input
    Given I navigate to forms page
    When I fill the input field with "Sample Text"
    Then I should see the text below "Sample Text"
    When I toggle the switch to OFF and validate
    And I select an option "Appium is awesome" from dropdown
    And I press the active button
    Then I should see a message saying "This button is active"
