Feature: User Authentication

  @login
  Scenario: Fail login with invalid email format
    Given I navigate to login page
    When I input invalid email and password
    And I click the login button
    Then I should see the message saying "Please enter a valid email address"
    # Then I should see the message saying "Enter an invalid email"

  @signup
  Scenario: Successfully signup and login with valid credentials
    Given I navigate to login page
    And I click on Sign up tab
    When I input valid email and password
    And I repeat the password
    And I click the sign up button
    Then I should see the message saying "Signed Up!"
    And I close the popup
    When I click on Login tab
    And I click the login button
    Then I should see the message saying "Success"
