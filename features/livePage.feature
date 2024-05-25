Feature: Live Page Tests

  Scenario: Validate Livestream Player is visible
    Given I am on the live page
    Then I should see the Livestream Player

  Scenario: Validate Switch Player button is visible in Livestream Player
    Given I am on the live page
    Then I should see the Switch Player button
