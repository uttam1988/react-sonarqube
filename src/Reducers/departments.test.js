import { departments } from "./departments";

describe("departments reducer", () => {
  it("should return empty array", () => {
    expect(departments()).toEqual([]);
  });

  it("should return provide state ", () => {
    expect(departments(["HR"], {})).toEqual(["HR"]);
  });
});
