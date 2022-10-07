import { expect, test } from "vitest";
import { add } from ".";

test("1+1=2", () => {
  expect(add(1, 1)).toBe(2);
});
