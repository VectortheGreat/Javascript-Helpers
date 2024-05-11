const fs = require("fs");

const rawData = fs.readFileSync("input.json");

const data = JSON.parse(rawData);
console.log("JSON data parsed successfully.");

data.forEach((obj) => {
  if (obj.status === "Bitirildi") {
    obj.status = "completed";
  }
  if (obj.status === "Bırakıldı") {
    obj.status = "abondoned";
  }
  if (obj.status === "Bitirilecek") {
    obj.status = "toBeCompleted";
  }
  if (obj.status === "Aktif Oynanılıyor") {
    obj.status = "activePlaying";
  }
  if (obj.platform === "Steam") {
    obj.platform = "steam";
  }
  if (obj.platform === "Epic Games") {
    obj.platform = "epicGames";
  }
  if (obj.platform === "Ubisoft") {
    obj.platform = "ubisoft";
  }
  if (obj.platform === "Xbox(Pc)") {
    obj.platform = "xboxPc";
  }
  if (obj.platform === "Playstation") {
    obj.platform = "playstation";
  }
  if (obj.platform === "EA Games") {
    obj.platform = "eaGames";
  }
  if (obj.platform === "Torrent") {
    obj.platform = "torrent";
  }
  if (obj.platform === "Xbox Series") {
    obj.platform = "xboxSeries";
  }
  if (obj.platform === "Nintendo") {
    obj.platform = "nintendo";
  }
  if (obj.platform === "Mobile") {
    obj.platform = "mobile";
  }
  if (obj.platform === "Diğer Platformlar") {
    obj.platform = "otherPlatforms";
  }
  obj = renameKeys(obj, {
    gameName: "name",
    gameDate: "lastPlay",
    gameTotalTime: "play_time",
    gameReview: "review",
    gamePhoto: "photo",
    gameScore: "rating",
    gamePlatform: "platform",
    gameStatus: "status",
  });
});
console.log("Data processed successfully.");

const jsonString = JSON.stringify(data, null, 2);
fs.writeFileSync("output.json", jsonString);
console.log("Data written to output.json successfully.");

console.log("Resulting JSON data:");
console.log(jsonString);

function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}
