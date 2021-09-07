import { getArm, Troop } from "./getArm";

describe("get arm", () => {
  describe("generates", () => {
    let arm: Troop;
    beforeEach(() => {
      arm = getArm(100, ["spearmen", "swordsmen", "archer"]);
    });

    it("random units number for each unit type", () => {
      expect(arm.spearmen).toStrictEqual(expect.any(Number));
      expect(arm.swordsmen).toStrictEqual(expect.any(Number));
      expect(arm.archer).toStrictEqual(expect.any(Number));
    });

    it("each available unit is composed by at least one unit", () => {
      expect(arm.spearmen).not.toBeGreaterThanOrEqual(1);
      expect(arm.swordsmen).toBeGreaterThanOrEqual(1);
      expect(arm.archer).toBeGreaterThanOrEqual(1);
    });

    it("different results in each call", () => {
      const arm2 = getArm(100, ["spearmen", "swordsmen", "archer"]);
      expect(arm2).not.toEqual(arm);

      const arm3 = getArm(100, ["spearmen", "swordsmen", "archer"]);
      expect(arm3).not.toEqual(arm);
      expect(arm3).not.toEqual(arm2);
    });

    it("arm is equal to the troop size provided", () => {
      expect(
        Object.values(arm).reduce((total, unitValue) => total + unitValue)
      ).toBe(100);
    });
  });

  describe("validations", () => {
    it("troops can't be 0", () => {
      expect(() =>
        getArm(0, ["jaguarWarrior", "samurai", "ashigaru", "horsemen"])
      ).toThrow(`Can't create arm with no man/woman`);
    });

    it("needs to have available unit type", () => {
      expect(() => getArm(3, [])).toThrow(
        "No available unit types to generate the 3 units"
      );
    });

    it("troop size needs to have at least one unit per available unit type", () => {
      expect(() =>
        getArm(3, ["jaguarWarrior", "samurai", "ashigaru", "horsemen"])
      ).toThrow("Need at least 4 people to create an arm");
    });

    it("remove duplicated available unit types", () => {
      jest.spyOn(console, "log");

      const arm = getArm(5, [
        "jaguarWarrior",
        "samurai",
        "ashigaru",
        "horsemen",
        "horsemen",
      ]);

      expect(console.log).toBeCalledWith(
        "The duplicated unit types was removed"
      );

      expect(arm.jaguarWarrior).toStrictEqual(expect.any(Number));
      expect(arm.samurai).toStrictEqual(expect.any(Number));
      expect(arm.ashigaru).toStrictEqual(expect.any(Number));
      expect(arm.horsemen).toStrictEqual(expect.any(Number));
    });
  });
});
