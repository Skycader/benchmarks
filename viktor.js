let s1 = [
  "fregrew",
  "kuitkyu",
  "ygryjn",
  "yjdhy",
  "ndyytjyt",
  "njytjrt",
  "ifgkuyk",
  "muffukuy",
  "uyfk,fy,y",
  "",
];

function getRandomString() {
  return (
    s1[Math.round(Math.random() * s1.length)] +
    " " +
    s1[Math.round(Math.random() * s1.length)]
  );
}

function getRandomFlight() {
  let f = {
    flagPnr: Math.random() > 0.05,
    routeNumber: Math.round(Math.random() * 1000).toString(),
    planDepartDate: getRandomString(),
    planDepartDateMs: 1721144400000 + Math.round(Math.random() * 10000000000),
    departAirportNameRu: getRandomString(),
    arriveAirportNameRu: getRandomString(),
    passExists: Math.random() > 0.05 ? "true" : "false",
    crewExists: Math.random() > 0.05 ? "true" : "false",
  };
  return f;
}

const array = [];
for (let i = 0; i <= 1000000; i++) {
  array.push(getRandomFlight());
}

const start = Date.now();

const flightDeparts = array.map((flight) => flight.planDepartDateMs);
const departMillisecondsMin = Math.min(...flightDeparts);

console.log("DONE", Date.now() - start, "RESULT: ", minMs);
