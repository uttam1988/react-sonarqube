import React from "react";
import { shallow } from "enzyme";
import { UserDetails, User } from "./UserDetails";

describe("HeaderSection", () => {
  let userdetails;
  let user;
  beforeEach(() => {
    userdetails = shallow(<UserDetails />);
    user = shallow(
      <User
        user={{
          id: 1,
          avatar: "https://images/image.png",
          last_name: "G",
          first_name: "Joh"
        }}
      />
    );
  });
  it("userdetails should have user", () => {
    expect(userdetails.find("User").length).toEqual(1);
  });

  it("user should have image ", () => {
    expect(user.find("img").prop("src")).toEqual("https://images/image.png");
  });

  it("user should have name and id ", () => {
    expect(
      user
        .find("span")
        .at(0)
        .text()
    ).toEqual("Id: 1");
    expect(
      user
        .find("span")
        .at(1)
        .text()
    ).toEqual("Name :Joh G");
  });
});
