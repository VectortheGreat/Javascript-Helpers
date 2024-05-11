const fs = require("fs");

const rawData = fs.readFileSync("input.json");

const data = JSON.parse(rawData);
console.log("JSON data parsed successfully.");

data.forEach((obj) => {
  const milliseconds =
    obj.createdAt.seconds * 1000 + obj.createdAt.nanoseconds / 1000000;
  const date = new Date(milliseconds);
  obj.createdAt = date;
});
console.log("Date data processed successfully.");

const jsonString = JSON.stringify(data, null, 2);
fs.writeFileSync("output.json", jsonString);
console.log("Data written to output.json successfully.");

console.log("Resulting JSON data:");
console.log(jsonString);
