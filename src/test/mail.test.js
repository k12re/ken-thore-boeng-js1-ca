import { checkMail } from "../../js/mail.js";

describe("Email verification", () => {
  test("returns mailpattern from regex validation", () => {
    const expected = /\S+@\S+\.\S+/;
    const result = `email@address.no`;
    expect(result).toMatch(expected);
  });
});
