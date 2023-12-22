describe("Test Suite", () => {
    it("two plus two is four", () => {
      expect(2 + 2).toBe(4); // toBe() matcher
    });
  
    it("two plus two is not five", () => {
      expect(2 + 2).not.toBe(5); // not.toBe() matcher
    });
  
    it("object assignment", () => {
      const data = { one: 1 };
      data["two"] = 2;
      expect(data).toEqual({ one: 1, two: 2 }); // toEqual() matcher
    });
  });