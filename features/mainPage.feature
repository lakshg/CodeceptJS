Feature: Main Page Tests

  Scenario: Verify Most Read section is appearing on Desktop
    Given I am on the main page
    Then I should see the Most Read section

  Scenario: Verify Most Read section has 10 posts on Desktop
    Given I am on the main page
    Then I should see expected posts in the Most Read section
 
  Scenario: Verify Most Read section is not appearing on Mobile
    Given I am on the main page with mobile viewport
    Then I should not see the Most Read section

  Scenario: Verify Bypass Block menu item for Most Read is working on Desktop
    Given I am on the main page
    When I click on the Bypass Block menu
    Then he URL should change to include #most-read-container
