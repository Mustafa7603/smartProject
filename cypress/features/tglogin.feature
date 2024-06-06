Feature: Login Feature

  Scenario: Validate Login Form
    Given user navigates to "https://techglobal-training.com/frontend"
    When user clicks on the "Project - Login Function" card
    Then user should see the "Login Function" page heading
    When user enter username as "johnode" and password as "123456"
    And user clicks Login button
    Then user should see a "Invalid Username entered!"