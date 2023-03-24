import { errorMsg } from "../../js/error.js";

describe("Error message", () => {
  test("returns HTML error message with default parameters", () => {
    const expected = `<div class="error error">An error occured</div>`;
    const result = errorMsg();
    expect(result).toEqual(expected);
  });
});
