import {
  validateAvailableUnitTypes,
  validateTroop,
} from "./helpers/validations";

export interface Troop {
  [key: string]: number;
}

function getTroopPercentage(troopSize: number) {
  const percentage = Math.random() * 85 + 1;
  return Math.round((troopSize * percentage) / 100);
}

const isLastUnitType = (
  availableTroopTypesAmount: number,
  currentIndex: number
) => availableTroopTypesAmount - 1 === currentIndex;

const getUniqueUnitTypes = (availableTroopTypes: Array<string>) => [
  ...new Set(availableTroopTypes),
];

export function getArm(
  troopSize: number,
  availableTroopTypes: Array<string>
): Troop {
  const uniqueAvailableTroopTypes = getUniqueUnitTypes(availableTroopTypes);
  const availableTroopTypesAmount = uniqueAvailableTroopTypes.length;

  validateTroop(troopSize);
  validateAvailableUnitTypes(uniqueAvailableTroopTypes, troopSize);

  if (availableTroopTypesAmount !== availableTroopTypes.length) {
    console.log("The duplicated unit types was removed");
  }

  // remove the min amount of units to have at least one unit per type
  let remainingTroopsUnit = troopSize - availableTroopTypesAmount;
  return uniqueAvailableTroopTypes.reduce((troop: Troop, unitType, index) => {
    // if it's the last one
    if (isLastUnitType(availableTroopTypesAmount, index)) {
      troop[unitType] = 1 + remainingTroopsUnit;
      return troop;
    }

    const unitAmount = getTroopPercentage(remainingTroopsUnit);
    remainingTroopsUnit -= unitAmount;
    // Make sure all units will have at least one unit
    troop[unitType] = 1 + unitAmount;
    return troop;
  }, {});
}

console.clear();
console.log(getArm(100, ["spearmen", "swordsmen", "archers"]));
