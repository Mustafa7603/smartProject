Feature: Interaction with TechGlobal HtmlElements page

  Scenario: Validate HTML Elements card, Toggle checkboxes and verify the state
    Given user navigates to "https://techglobal-training.com/frontend/"
    When user clicks on the "Html Elements" card
    Then user should see the "Html Elements" page heading
    Then the URL should contain "elements"
    When user selects the "Microsoft" checkbox
    And user deselects the "Microsoft" checkbox
    Then the "Microsoft" checkbox should not be checked
    When user selects the "Apple" and "Tesla" checkboxes
    Then both "Apple" and "Tesla" checkboxes should be checked
    And the "Microsoft" checkbox remains unchecked