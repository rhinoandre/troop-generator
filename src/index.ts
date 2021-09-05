function getTroopPercentage(troopSize: number) {
  const percentage = Math.random() * 85 + 1;
  return Math.round((troopSize * percentage) / 100);
}

function getArm(troopSize: number, availableTroopTypes: Array<string>) {
  if (troopSize <= 0) {
    throw new Error(`Can't create arm with no man/woman`);
  }
  if (troopSize < 3) {
    throw new Error(`Need at least 3 people to create an arm`);
  }

  const spearmen = getTroopPercentage(troopSize);
  const swordsmen = getTroopPercentage(troopSize - spearmen);
  const archers = troopSize - swordsmen - spearmen;
  console.log(spearmen + swordsmen + archers);
  return {
    spearmen,
    swordsmen,
    archers,
  };
}
console.clear();
console.log(getArm(100, ["spearmen", "swordsmen", "archers"]));
