const { expect, describe, it } = require("@jest/globals");
const { sum, subtract, multiply, divide, power } = require("../arithmetic");

// Global Test Suite
describe("Arithmetic Operation", () => {
  // Test Suite
  describe("sum", () => {
    // Test Case
    it("adds two numbers", () => {
      expect(sum(1, 2)).toBe(3);
    });

    it("adds two numbers", () => {
      expect(sum(1, 2)).not.toBe(4);
    });

    it("adds two numbers", () => {
      expect(sum(1, 2)).toEqual(3);
    });

    it("adds two numbers", () => {
      expect(sum(1, 2)).not.toEqual(4);
    });
  });

  describe("subtract", () => {
    it("subtracts two numbers", () => {
      expect(subtract(1, 2)).toBe(-1);
    });

    it("subtracts two numbers", () => {
      expect(subtract(1, 2)).not.toBe(-3);
    });

    it("subtracts two numbers", () => {
      expect(subtract(1, 2)).toEqual(-1);
    });

    it("subtracts two numbers", () => {
      expect(subtract(1, 2)).not.toEqual(-3);
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers", () => {
      expect(multiply(1, 2)).toBe(2);
    });

    it("multiplies two numbers", () => {
      expect(multiply(1, 2)).not.toBe(3);
    });

    it("multiplies two numbers", () => {
      expect(multiply(1, 2)).toEqual(2);
    });

    it("multiplies two numbers", () => {
      expect(multiply(1, 2)).not.toEqual(3);
    });
  });

  describe("divide", () => {
    it("divides two numbers", () => {
      expect(divide(1, 2)).toBe(0.5);
    });

    it("divides two numbers", () => {
      expect(divide(1, 2)).not.toBe(0.2);
    });

    it("divides two numbers", () => {
      expect(divide(1, 2)).toEqual(0.5);
    });

    it("divides two numbers", () => {
      expect(divide(1, 2)).not.toEqual(0.2);
    });
  });

  describe("power", () => {
    it("raises a number to the power of another", () => {
      expect(power(2, 3)).toBe(8);
    });

    it("raises a number to the power of another", () => {
      expect(power(2, 3)).not.toBe(9);
    });

    it("raises a number to the power of another", () => {
      expect(power(2, 3)).toEqual(8);
    });

    it("raises a number to the power of another", () => {
      expect(power(2, 3)).not.toEqual(9);
    });
  });
});
