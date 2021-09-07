# troop-generator

Generate a random arm for the available unit types provided.

## How to install

```
yarn add troop-generator
```

or

```
npm install -s troop-generator
```

## How to use

The `getArm` function accepts two parameters:

- `troopSize` - number of the total size of the arm
- `availableTroopTypes` - list of the available unit type

```
import { getArm } from 'troop-generator';

getArm(159, ["spearmen", "swordsmen", "archer"])
```

## Run tests

Install the dependencies

```
yarn
```

and run the tests:

```
yarn test
```

There's also the `yarn test:dev` that run the tests and watch for changes, used mainly when developing.

## Releases process

This repository is publishing the library to npm using [github actions](./.github/workflows/publish.lib.yml).

This action executes the tests, the build and then if everything is fine it publishes the dist folder. The action runs whenever a new release is created.

## Brainstorm

- Troop: Spearmen, Swordsmen, Archers, etc
  - The `etc` shows there are more than just these 3 unit types and the "...Assuming **available** unit types..." shows we need to generate the troops only for the available units.
    - so the function will need to either receive the list of unit available OR the number of units available
      - I preferred to receive the list with the names of available unit
- Generating randomly the arm
  - [x] Get a random percentage
  - [x] Get this percentage from the total unit amount provided to the function
  - [x] Set it in a random available unit type
    - [] ~~get the list of possible available unit types~~
  - Repeat until all available unit types have their value
    - **Except** for the last one which will receive the remaining troops unit

## Assumptions

- Each available unit type needs to have at least one unit
- The available unit types will be provided
  - Point to improve: **also** allow to create the arm without providing the available unit types. In this case, the number of available unit types would need to be provided anyway.
