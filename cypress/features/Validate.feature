Feature: Interaction with TechGlobal HtmlElements page

  Scenario: Validate HTML Elements card, Interact with text inputs - Choose options from the dropdown
    Given user navigates to "https://techglobal-training.com/frontend/"
    When user clicks on the "Html Elements" card
    Then user should see the "Html Elements" page heading
    Then the URL should contain "elements"
    When user selects "Apple" from the first dropdown menu
    And user selects "Microsoft" from the second dropdown menu
    Then "Apple" should be the selected option in the first dropdown
    And "Microsoft" should be the selected option in the second dropdown