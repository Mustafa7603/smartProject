Feature: Interaction with TechGlobal HtmlElements page

  Scenario: Validate HTML Elements card, Interact with text inputs
    Given user navigates to "https://techglobal-training.com/frontend/"
    When user clicks on the "Html Elements" card
    Then user should see the "Html Elements" page heading
    Then the URL should contain "elements"
    When user enters "test input" into the first text input field
    And user enters "another test input" into the second text input field
    Then the first text input field should contain "test input"
    And the second text input field should contain "another test input"