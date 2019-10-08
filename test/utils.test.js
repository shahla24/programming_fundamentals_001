const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
  test("returns 240 when passed 200", () => {
    expect(utils.addVAT(200)).toBe(240);
  });

  describe("utils.getFullName", () => {
    test("returns Haruki Murakami when passed Haruki and Murakami", () => {
      expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
    });
  });

  describe("utils.makeHalfPrice", () => {
    test("returns 50 when passed 100", () => {
      expect(utils.makeHalfPrice(100)).toBe(50);
    });
    });

    describe("utils.getFullName", () => {
      test("returns Haruki Murakami when passed Haruki and Murakami", () => {
        expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
      });
    });





    
  });
