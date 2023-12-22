describe("Test Suite", () => {
    let data;
  
    beforeEach(() => {
      data = { one: 1 };
    });
  
    afterEach(() => {
      data = null;
    });
  
    it("two plus two is four", () => {
      data["two"] = 2;
      expect(data).toEqual({ one: 1, two: 2 });
    });
  
    it("two plus two is not five", () => {
      data["two"] = 2;
      expect(data).toEqual({ one: 1, two: 2 });
    });
  
    it("object assignment", () => {
      const data = { one: 1 };
      data["two"] = 2;
      expect(data).toEqual({ one: 1, two: 2 });
    });
  });