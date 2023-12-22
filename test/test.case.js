// it() example
describe("Arithmetic", () => {
    it("should add number correcly", () => {
      expect(2 + 2).toBe(4);
    });
  
    it("should subtract number correcly", () => {
      expect(2 - 2).toBe(0);
    });
  });
  
  describe("Object", () => {
    it("should assign object correcly", () => {
      const data = { one: 1 };
      data["two"] = 2;
      expect(data).toEqual({ one: 1, two: 2 });
    });
  });
  
  // test() example
  describe("Arithmetic", () => {
    test("if function add number correcly", () => {
      expect(2 + 2).toBe(4);
    });
  
    test("if function subtract number correcly", () => {
      expect(2 - 2).toBe(0);
    });
  });
  