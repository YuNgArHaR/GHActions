function isEvenDay() {
  const day = new Date().getDate();
  return day % 2 === 0;
}

console.log(`Сегодня ${isEvenDay() ? "чётный" : "нечётный"} день.`);

module.exports = isEvenDay;
