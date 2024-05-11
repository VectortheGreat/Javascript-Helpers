const fs = require("fs");

const rawData = fs.readFileSync("input.json");

const jsonData = JSON.parse(rawData);

function removeId(jsonData) {
  return jsonData.map((obj) => {
    if (obj.hasOwnProperty("_id")) {
      delete obj._id;
    }
    return obj;
  });
}

const newData = removeId(jsonData);
const jsonString = JSON.stringify(newData, null, 2);
fs.writeFileSync("output.json", jsonString);
console.log(newData);
