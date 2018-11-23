import React from "react";
import { shallow } from "enzyme";
import { HeaderSection, Button, Select } from "./HeaderSection";

describe("HeaderSection component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<HeaderSection />);
  });
  it("should have two select components", () => {
    expect(component.find("Select").length).toEqual(2);
  });
});

describe("Button component", () => {
  let button;
  beforeEach(() => {
    button = shallow(<Button name="get Details" />);
  });

  it("should have button name", () => {
    expect(
      button
        .find("button")
        .first()
        .text()
    ).toEqual("get Details");
  });
});

describe("Select component", () => {
  let select;
  beforeEach(() => {
    select = shallow(<Select label="Employee" />);
  });

  it("should have button label", () => {
    expect(
      select
        .find("div")
        .first()
        .text()
    ).toEqual("Employee :");
  });
});
