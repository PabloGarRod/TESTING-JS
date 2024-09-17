const { sum, multiply, divide } = require("./02-math");

test("add 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("should be 15", () => {
  const rta = multiply(3, 5);
  expect(rta).toBe(15);
});

test("should divide", () => {
  const rta = divide(100, 4);
  expect(rta).toBe(25);
  const rta2 = divide(15, 3);
  expect(rta2).toBe(5);
  const rta3 = divide(10, "t");
  expect(rta3).toBe(NaN);
  const rta4 = divide(undefined, undefined);
  expect(rta4).toBe(NaN);
  const rta5 = divide(10, 0);
  expect(rta5).toBe(null);
});
