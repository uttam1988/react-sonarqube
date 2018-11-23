import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should have HeaderSection", () => {
    expect(component.find("HeaderSection").length).toEqual(1);
  });

  it("should have UserDetails", () => {
    expect(component.find("UserDetails").length).toEqual(1);
  });
});
