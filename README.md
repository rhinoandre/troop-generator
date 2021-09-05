# troop-generator

Goodgame Studios code challenge

## Brainstorm

- Troop: Spearmen, Swordsmen, Archers, etc
  - The `etc` shows there are more than just these 3 unit types and the "...Assuming **available** unit types..." shows we need to generate the troops only for the available units.
    - so the function will need to either receive the list of unit available OR the number of units available
      - I preferred to receive the list with the names of available unit
- Generating randomly the arm
  - {{[[TODO]]}} Get a random percentage
  - {{[[TODO]]}} Get this percentage from the total unit amount provided to the function
  - {{[[TODO]]}} Set it in a random available unit type
    - {{[[TODO]]}} get the list of possible available unit types
  - Repeat until all available unit types have their value
    - **Except** for the last one which will receive the remaining troops unit

## Assumptions

- Each available unit type needs to have at least one unit
