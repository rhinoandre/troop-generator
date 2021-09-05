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

export function getArm(
  troopSize: number,
  availableTroopTypes: Array<string>
): Troop {
  if (troopSize <= 0) {
    throw new Error(`Can't create arm with no man/woman`);
  }

  const availableTroopTypesAmount = availableTroopTypes.length;
  if (troopSize < availableTroopTypesAmount) {
    throw new Error(
      `Need at least ${availableTroopTypesAmount} people to create an arm`
    );
  }

  // remove the min amount of units to have at least one unit per type
  let remainingTroopsUnit = troopSize - availableTroopTypesAmount;
  return availableTroopTypes.reduce((troop: Troop, unitType, index) => {
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
