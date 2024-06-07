const fs = require("fs");

const rawData = fs.readFileSync("input.json");
const data = JSON.parse(rawData);
console.log("JSON data parsed successfully.");

//! IMPORTANT: BE SURE JSON FILE DOES NOT CONTAIN ANY APOSTROPHE ' CHARACTER

const keyMap = {
  gameName: "name",
  gameDate: "lastPlay",
  gameTotalTime: "playTime",
  gameReview: "review",
  gamePhoto: "photo",
  gameScore: "rating",
  gamePlatform: "platform",
  gameStatus: "status",
  ssName: "name",
  ssUrl: "url",
};

const valueTransformations = {
  Bitirildi: "completed",
  Bırakıldı: "abandoned",
  Bitirilecek: "toBeCompleted",
  "Aktif Oynanılıyor": "activePlaying",
  Steam: "steam",
  "Epic Games": "epicGames",
  Ubisoft: "ubisoft",
  "Xbox(Pc)": "xboxPc",
  Playstation: "playstation",
  "EA Games": "eaGames",
  Torrent: "torrent",
  "Xbox Series": "xboxSeries",
  Nintendo: "nintendo",
  Mobile: "mobile",
  "Diğer Platformlar": "otherPlatforms",
};

const transformedData = data.map((obj) => {
  const transformedObj = {};

  Object.entries(obj).forEach(([key, value]) => {
    const newKey = keyMap[key] || key;
    const newValue = valueTransformations[value] || value;
    transformedObj[newKey] = newValue;
  });

  return transformedObj;
});

console.log("Data processed successfully.");

const jsonString = JSON.stringify(transformedData, null, 2);
fs.writeFileSync("output.json", jsonString);
console.log("Data written to output.json successfully.");

console.log("Resulting JSON data:");
console.log(jsonString);
