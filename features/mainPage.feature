@mainPage @regression
Feature: Main Page Tests

  @desktop
  Scenario: Verify Most Read section is appearing on Desktop
    Given I am on the main page with "desktop" viewport
    Then I should see the Most Read section

  @desktop
  Scenario: Verify Most Read section has 10 posts on Desktop
     Given I am on the main page with "desktop" viewport
    Then I should see expected posts in the Most Read section

  @mobile
  Scenario: Verify Most Read section is not appearing on Mobile
    Given I am on the main page with "mobile" viewport
    Then I should not see the Most Read section

  @accessibility @desktop
  Scenario: Verify Bypass Block menu item for Most Read is working on Desktop
     Given I am on the main page with "desktop" viewport
    When I click on the Bypass Block menu
    Then The URL should change to include #most-read-container
