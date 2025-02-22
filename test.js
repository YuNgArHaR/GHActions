const isEvenDay = require("./index");

test("Проверка чётности дня", () => {
  const day = new Date().getDate();
  expect(isEvenDay()).toBe(day % 2 === 0);
});
