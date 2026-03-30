Feature: Drag and Drop puzzle

  @drag
  Scenario: Drag and Drop the correct puzzle pieces to complete it
    Given I navigate to drag page
    When I drag and drop the correct pieces into slots
      | PieceLocation | SlotLocation |
      | l1            | l1           |
      | l2            | l2           |
      | l3            | l3           |
      | c1            | c1           |
      | c2            | c2           |
      | c3            | c3           |
      | r1            | r1           |
      | r2            | r2           |
      | r3            | r3           |
    Then I check for a message saying "Congratulations"
