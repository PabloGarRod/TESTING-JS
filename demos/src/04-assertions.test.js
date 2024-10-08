// matchers

test("testObj", () => {
  const data = { name: "Pablo" };
  data.lastName = "Garcia";
  expect(data).toEqual({ name: "Pablo", lastName: "Garcia" });
});

test("null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("booleans", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
  expect("0").toBeTruthy();
});

test("string", () => {
  expect("Patata").toMatch(/ta/);
});

test("arrays", () => {
  const numbers = [1, 2, 4, 5, 6];
  expect(numbers).toContain(4);
});
