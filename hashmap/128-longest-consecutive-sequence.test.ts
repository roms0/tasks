import { test, expect, it } from "bun:test";
import { longest } from "./128-longest-consecutive-sequence";
import { describe } from "node:test";

describe("longest consecutive number sequence", () => {
  it("retuns 0 at empty list", () => {
    expect(longest([])).toBe(0);
  });
  it("", () => {
    expect(longest([1, 2, 3, 4])).toBe(4);
  });
  it("", () => {
    expect(longest([5, 6, 1, 2, 3, 4])).toBe(6);
  });
  it("", () => {
    expect(longest([1, 100, 2, 102, 3, 101])).toBe(3);
  });
  it("", () => {
    expect(longest([6, 5, 2, 9, 7, 8])).toBe(5);
  });
  it("", () => {
    expect(longest([6, 5, 2, 9, 7, 8, 4, 3])).toBe(8);
  });
});
