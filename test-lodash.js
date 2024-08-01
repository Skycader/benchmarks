const _ = require("lodash");

const tours = [
  { id: 1, price: 200, prop: "prop1" },
  { id: 1, price: 300, prop: "prop1" },
  { id: 3, price: 150 },
  { id: 2, price: 110 },
  { id: 3, price: 120 },
  { id: 2, price: 100 },
];

const result = _(tours)
  .groupBy("id")
  .map((group) => _.minBy(group, "price"))
  .value();

console.log(result);
