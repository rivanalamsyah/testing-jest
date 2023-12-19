const { expect, describe, it } = require("@jest/globals");
const { isTrue, isFalse, isNot, isNull, isUndefined } = require("../logical");

/**
 * @Note
 * The describe function is used to group together related tests.
 * The it function is used to create a test.
 * The expect function is used to make assertions about the code.
 * The toBe matcher is used to check that a function returns the exact value.
 * The toEqual matcher is used to check that a function returns the expected value.
 * The not matcher is used to check that a function does not return the exact value.
 * The not.toEqual matcher is used to check that a function does not return the expected value.
 */

describe("Logical Operation", () => {
  describe("isTrue", () => {
    it("checks if two values are true", () => {
      expect(isTrue(true, true)).toBe(true);
    });

    it("checks if two values are true", () => {
      expect(isTrue(true, true)).not.toBe(false);
    });

    it("checks if two values are true", () => {
      expect(isTrue(true, true)).toEqual(true);
    });

    it("checks if two values are true", () => {
      expect(isTrue(true, true)).not.toEqual(false);
    });
  });

  describe("isFalse", () => {
    it("checks if two values are false", () => {
      expect(isFalse(false, false)).toBe(false);
    });

    it("checks if two values are false", () => {
      expect(isFalse(false, false)).not.toBe(true);
    });

    it("checks if two values are false", () => {
      expect(isFalse(false, false)).toEqual(false);
    });

    it("checks if two values are false", () => {
      expect(isFalse(false, false)).not.toEqual(true);
    });
  });

  describe("isNot", () => {
    it("checks if a value is not true", () => {
      expect(isNot(false)).toBe(true);
    });

    it("checks if a value is not true", () => {
      expect(isNot(false)).not.toBe(false);
    });

    it("checks if a value is not true", () => {
      expect(isNot(false)).toEqual(true);
    });

    it("checks if a value is not true", () => {
      expect(isNot(false)).not.toEqual(false);
    });
  });

  describe("isNull", () => {
    it("checks if a value is null", () => {
      expect(isNull(null)).toBe(true);
    });

    it("checks if a value is null", () => {
      expect(isNull(null)).not.toBe(false);
    });

    it("checks if a value is null", () => {
      expect(isNull(null)).toEqual(true);
    });

    it("checks if a value is null", () => {
      expect(isNull(null)).not.toEqual(false);
    });
  });

  describe("isUndefined", () => {
    it("checks if a value is undefined", () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    it("checks if a value is undefined", () => {
      expect(isUndefined("undefined")).toBe(false);
    });

    it("checks if a value is undefined", () => {
      expect(isUndefined(undefined)).toEqual(true);
    });

    it("checks if a value is undefined", () => {
      expect(isUndefined(undefined)).not.toEqual(false);
    });
  });
});
