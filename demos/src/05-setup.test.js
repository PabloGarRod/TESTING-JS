describe("group 1", () => {
  beforeAll(() => {
    console.log("before all");
  });

  afterAll(() => {
    console.log("after all");
  });

  beforeEach(() => {
    console.log("before each");
  });
  afterEach(() => {
    console.log("after each");
  });

  test("case 1", () => {
    console.log("Case 1");
    expect(1 + 1).toBe(2);
  });
  test("case 2", () => {
    console.log("Case 2");
    expect(1 + 2).toBe(3);
  });

  describe("group 2", () => {
    beforeAll(() => {
      console.log("before all in group 2");
    });

    afterAll(() => {
      console.log("after all in group 2");
    });

    test("case 3", () => {
      console.log("Case 3");
      expect(1 + 3).toBe(4);
    });
    test("case 4", () => {
      console.log("Case 4");
      expect(1 + 4).toBe(5);
    });
  });
});
