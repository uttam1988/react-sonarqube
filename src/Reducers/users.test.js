import { users } from "./users";
import {
  GET_USER_DETAILS_REQUESTED,
  GET_USER_DETAILS_LOADED,
  GET_USER_DETAILS_FAILED,
  CLEAR_USER_DETAILS_REQUESTED
} from "../Actions";

describe("users reducer", () => {
  it("should return empty object", () => {
    expect(users({}, { type: "none" })).toEqual({});
  });

  it("should return provided state ", () => {
    expect(users({}, { type: GET_USER_DETAILS_REQUESTED })).toEqual({});
  });
  it("should return selected user", () => {
    expect(users({}, { type: GET_USER_DETAILS_LOADED, data: "John" })).toEqual({
      loading: false,
      selectedUser: "John"
    });
  });
  it("should return error  ", () => {
    expect(users({}, { type: GET_USER_DETAILS_FAILED })).toEqual({
      loading: false,
      error: true
    });
  });
  it("should return provide state ", () => {
    expect(users({}, { type: CLEAR_USER_DETAILS_REQUESTED })).toEqual({});
  });
});
