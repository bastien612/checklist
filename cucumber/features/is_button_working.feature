Feature: Is button working ?
 Test if button make disappear "Chouette"

Scenario: Does chouette disappear ?
    Given I open my browser at "http://localhost:3000"
    When I click the button
    Then "chouette" disapear

Scenario: Does chouette is here to begin with ?
    Given I open my browser at "http://localhost:3000"
    When I do nothing
    Then "chouette" is here