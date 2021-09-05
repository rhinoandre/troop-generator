export function validateTroop(troopSize: number) {
  if (troopSize <= 0) {
    throw new Error(`Can't create arm with no man/woman`);
  }
}

export function validateAvailableUnitTypes(
  availableTroopTypes: Array<string>,
  troopSize: number
) {
  const availableTroopTypesAmount = availableTroopTypes.length;
  if (!availableTroopTypesAmount) {
    throw new Error(
      `No available unit types to generate the ${troopSize} units`
    );
  }
  if (troopSize < availableTroopTypesAmount) {
    throw new Error(
      `Need at least ${availableTroopTypesAmount} people to create an arm`
    );
  }
}
