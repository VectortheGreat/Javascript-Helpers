const fs = require("fs");

function convertDate(dateString) {
  let regex = /^\d{4}-\d{2}-\d{2}$/;
  if (regex.test(dateString)) {
    const date = new Date(dateString);
    return {
      $date: date.toISOString().split("T")[0] + "T00:00:00.000Z",
    };
  } else {
    return dateString;
  }
}

let json = [
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9108",
    },
    status: "completed",
    rating: 9.1,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2a23.jpg",
    createdAt: "2024-05-26T15:40:17.878Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2024-05-25",
    review:
      "Gelmiş geçmiş en iyi oyun combat'ı olabilir ki sadece combat için bu kadar yüksek puan alması hak ediyor. Hikayesi ortalama seviyede, grafikleri güzel fakat en büyük eleştiri oyunun görevlerde yönlendirmesi neredeyse sıfır. Action RPG olmadığından tekrar tekrar oynatacak bir şey yok fakat bunlara rağmen harika bir oyun",
    playTime: 25,
    platform: "steam",
    name: "Sekiro: Shadows Die Twice",
    screenshotSize: 10,
    slug: "sekiro-shadows-die-twice",
    updatedAt: {
      $date: "2024-07-14T21:18:50.795Z",
    },
    __v: 1,
    igdb: {
      id: 76882,
      cover: {
        id: 106347,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2a23.jpg",
        game: 76882,
      },
      aggregated_rating: 90.0909090909091,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "669440ba0ecc09533ae9fad0",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "669440ba0ecc09533ae9fad1",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "669440ba0ecc09533ae9fad2",
          },
        },
      ],
      developers: [
        {
          id: 1012,
          name: "FromSoftware",
          _id: {
            $oid: "669440ba0ecc09533ae9fad3",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "669440ba0ecc09533ae9fad4",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "669440ba0ecc09533ae9fad5",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "669440ba0ecc09533ae9fad6",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "669440ba0ecc09533ae9fad7",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "669440ba0ecc09533ae9fad8",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "669440ba0ecc09533ae9fad9",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9109",
    },
    createdAt: "2023-12-29T13:16:47.291Z",
    playTime: 19.5,
    review:
      "Oyun combat konusunda başarılı bir action rpg olsa da bir takım eksiklikleri var. Hikaye ve sunumu yok seviyede. Oyun yönlendirmesi yok. Görevleri yapıp yapmadığını anlamak zor. Tabi bunlara rağmen yine iyi oyun. Türüne göre çok iyi ama genel olarak eksikler yukarıda dediğim kadarıyla. Ek olarak müzikler muazzam",
    name: "Dark Souls III",
    status: "completed",
    platform: "steam",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 7.7,
    lastPlay: "2024-05-05",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1vcf.jpg",
    screenshotSize: 9,
    slug: "dark-souls-iii",
    updatedAt: {
      $date: "2024-07-14T21:19:14.435Z",
    },
    igdb: {
      id: 11133,
      cover: {
        id: 87279,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1vcf.jpg",
        game: 11133,
      },
      aggregated_rating: 86.07692307692308,
      aggregated_rating_count: 29,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "669440d20ecc09533ae9fb2d",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "669440d20ecc09533ae9fb2e",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "669440d20ecc09533ae9fb2f",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "669440d20ecc09533ae9fb30",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "669440d20ecc09533ae9fb31",
          },
        },
      ],
      developers: [
        {
          id: 1012,
          name: "FromSoftware",
          _id: {
            $oid: "669440d20ecc09533ae9fb32",
          },
        },
      ],
      publishers: [
        {
          id: 248,
          name: "Bandai Namco Entertainment",
          _id: {
            $oid: "669440d20ecc09533ae9fb33",
          },
        },
        {
          id: 1012,
          name: "FromSoftware",
          _id: {
            $oid: "669440d20ecc09533ae9fb34",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "669440d20ecc09533ae9fb35",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "669440d20ecc09533ae9fb36",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "669440d20ecc09533ae9fb37",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "669440d20ecc09533ae9fb38",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "669440d20ecc09533ae9fb39",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a910a",
    },
    status: "completed",
    rating: 9.8,
    platform: "steam",
    name: "Elden Ring",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4jni.jpg",
    lastPlay: {
      $date: "2024-07-09T00:00:00.000Z",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Tek kelime ile başyapıt. Souls like oyunlarına yabancı olanın bile sevebileceği oyundur. Oyunun açık dünyası gelmiş geçmiş en iyi açık dünyasıdır. Oyun atmosferi, combat'ı, boss'ları fevkalede. Oyunun güzel hikayesi var ama en büyük eksiklliklerinden ikisi hikaye sunumu ve görev log'unun olmayışı. Google'lamadan ilerleyemiyorsunuz bu noktada ",
    createdAt: "2024-04-20T05:59:22.504Z",
    playTime: 121,
    screenshotSize: 40,
    slug: "elden-ring",
    updatedAt: {
      $date: "2024-07-14T21:00:18.467Z",
    },
    __v: 1,
    igdb: {
      id: 119133,
      cover: {
        id: 212094,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4jni.jpg",
        game: 119133,
      },
      aggregated_rating: 96.9,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6692762ec30f292f1fbc924a",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6692762ec30f292f1fbc924b",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6692762ec30f292f1fbc924c",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6692762ec30f292f1fbc924d",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6692762ec30f292f1fbc924e",
          },
        },
      ],
      developers: [
        {
          id: 1012,
          name: "FromSoftware",
          _id: {
            $oid: "6692762ec30f292f1fbc924f",
          },
        },
      ],
      publishers: [
        {
          id: 248,
          name: "Bandai Namco Entertainment",
          _id: {
            $oid: "6692762ec30f292f1fbc9250",
          },
        },
        {
          id: 1012,
          name: "FromSoftware",
          _id: {
            $oid: "6692762ec30f292f1fbc9251",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6692762ec30f292f1fbc9252",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6692762ec30f292f1fbc9253",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6692762ec30f292f1fbc9254",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6692762ec30f292f1fbc9255",
          },
        },
      ],
    },
    isFavorite: true,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a910b",
    },
    playTime: 32,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2024-04-14",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2axn.jpg",
    rating: 8,
    createdAt: "2024-04-05T19:05:33.078Z",
    review: "",
    status: "completed",
    name: "Divinity: Original Sin",
    screenshotSize: 5,
    slug: "divinity-original-sin",
    updatedAt: {
      $date: "2024-07-14T21:19:37.882Z",
    },
    igdb: {
      id: 5082,
      cover: {
        id: 107483,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2axn.jpg",
        game: 5082,
      },
      aggregated_rating: 86.55555555555556,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "669440e90ecc09533ae9fb9a",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "669440e90ecc09533ae9fb9b",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "669440e90ecc09533ae9fb9c",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "669440e90ecc09533ae9fb9d",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "669440e90ecc09533ae9fb9e",
          },
        },
        {
          id: 16,
          name: "Turn-based strategy (TBS)",
          _id: {
            $oid: "669440e90ecc09533ae9fb9f",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "669440e90ecc09533ae9fba0",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "669440e90ecc09533ae9fba1",
          },
        },
      ],
      developers: [
        {
          id: 510,
          name: "Larian Studios",
          _id: {
            $oid: "669440e90ecc09533ae9fba2",
          },
        },
      ],
      publishers: [
        {
          id: 510,
          name: "Larian Studios",
          _id: {
            $oid: "669440e90ecc09533ae9fba3",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "669440e90ecc09533ae9fba4",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "669440e90ecc09533ae9fba5",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "669440e90ecc09533ae9fba6",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "669440e90ecc09533ae9fba7",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a910c",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    platform: "ubisoft",
    rating: 5.9,
    photo:
      "https://blog.monsternotebook.com.tr/wp-content/uploads/Gecmisten-Gunumuze-Watch-Dog.jpg",
    lastPlay: "2024-04-05",
    playTime: 19,
    createdAt: "2024-03-26T20:37:17.591Z",
    review:
      "Dönemine göre ortalama bir oyun. Oyun tam bir çakma gta 5 havası sunsa da mekanik olarak çok geride ama oynanılış olarak yani hackleme ve sneak oynama daha tatmin edici",
    status: "completed",
    name: "Watch Dogs",
    screenshotSize: 24,
    slug: "watch-dogs",
    updatedAt: {
      $date: "2024-06-21T16:18:25.702Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a910d",
    },
    platform: "steam",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    createdAt: "2023-12-29T14:47:35.152Z",
    playTime: 50.6,
    lastPlay: "2024-04-02",
    name: "Star Wars Battlefront II",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3wi7.jpg",
    status: "completed",
    rating: 6.2,
    review:
      "Star Wars sevmesem belki daha düşük verebilirdim. Hikayesi belki bir tık daha uzun olabilirdi. Onun dışında uzay savaşlarından epey keyif aldım. Online kısmı Hikaye kısmından daha keyifli ama geliştiricilerin oyunu terk etmesi üzücü",
    screenshotSize: 8,
    slug: "star-wars-battlefront-ii",
    updatedAt: {
      $date: "2024-07-14T21:20:09.159Z",
    },
    igdb: {
      id: 26401,
      cover: {
        id: 182095,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3wi7.jpg",
        game: 26401,
      },
      aggregated_rating: 71.82352941176471,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "669441090ecc09533ae9fceb",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "669441090ecc09533ae9fcec",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "669441090ecc09533ae9fced",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "669441090ecc09533ae9fcee",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "669441090ecc09533ae9fcef",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "669441090ecc09533ae9fcf0",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "669441090ecc09533ae9fcf1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "669441090ecc09533ae9fcf2",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "669441090ecc09533ae9fcf3",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "669441090ecc09533ae9fcf4",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "669441090ecc09533ae9fcf5",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "669441090ecc09533ae9fcf6",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a910e",
    },
    platform: "torrent",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1r77.jpg",
    status: "completed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 6.5,
    createdAt: "2024-03-18T21:17:15.340Z",
    lastPlay: "2024-03-24",
    review:
      "Oyun hikayesi ortalama üstü sayılsa da combat ı güzel seviyede. Spiderman ve klasik düşmanları ile mücadelesi",
    name: "Marvel's Spider-Man",
    playTime: 15.4,
    screenshotSize: 23,
    slug: "marvels-spider-man",
    updatedAt: {
      $date: "2024-07-14T21:20:58.777Z",
    },
    igdb: {
      id: 19565,
      cover: {
        id: 81907,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1r77.jpg",
        game: 19565,
      },
      aggregated_rating: 89.6875,
      aggregated_rating_count: 18,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694413a0ecc09533ae9fd71",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694413a0ecc09533ae9fd72",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694413a0ecc09533ae9fd73",
          },
        },
      ],
      developers: [
        {
          id: 834,
          name: "Insomniac Games",
          _id: {
            $oid: "6694413a0ecc09533ae9fd74",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694413a0ecc09533ae9fd75",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694413a0ecc09533ae9fd76",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694413a0ecc09533ae9fd77",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694413a0ecc09533ae9fd78",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694413a0ecc09533ae9fd79",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694413a0ecc09533ae9fd7a",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a910f",
    },
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1lat.jpg",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2024-03-10",
    rating: 7.4,
    platform: "epicGames",
    playTime: 10,
    name: "A Plague Tale: Innocence",
    review:
      "Orta çağ Fransasını tema alan ve farelerden oluşan karanlık bir vebayı konu olan bu oyun, oynanılış mekaniği çok iyi olmasa da hikayesi ve atmosferi çok başarılı",
    createdAt: "2024-03-07T20:49:58.265Z",
    screenshotSize: 20,
    slug: "a-plague-tale-innocence",
    updatedAt: {
      $date: "2024-07-14T21:21:12.585Z",
    },
    igdb: {
      id: 27316,
      cover: {
        id: 74261,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1lat.jpg",
        game: 27316,
      },
      aggregated_rating: 80.86666666666666,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "669441480ecc09533ae9fdff",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "669441480ecc09533ae9fe00",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "669441480ecc09533ae9fe01",
          },
        },
      ],
      developers: [
        {
          id: 442,
          name: "Asobo Studio",
          _id: {
            $oid: "669441480ecc09533ae9fe02",
          },
        },
      ],
      publishers: [
        {
          id: 110,
          name: "Focus Entertainment",
          _id: {
            $oid: "669441480ecc09533ae9fe03",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "669441480ecc09533ae9fe04",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "669441480ecc09533ae9fe05",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "669441480ecc09533ae9fe06",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "669441480ecc09533ae9fe07",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "669441480ecc09533ae9fe08",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "669441480ecc09533ae9fe09",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9110",
    },
    rating: 8.6,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1nh1.jpg",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    review:
      "Önceki Batman oyunlara göre çok başarılı bir oyun. Hikayesi harika, mekanikleri harika, açık dünyası güzel. Önceki oyunlarda beklediğim çoğu eksiklikleri fazlasıyla tamamladı. Karakter gelişimi çok güzel renk katmış. Ölmeden önce oynanılması gereken oyunlardan",
    lastPlay: "2024-03-06",
    platform: "steam",
    createdAt: "2024-03-02T20:42:35.473Z",
    playTime: 18,
    name: "Batman: Arkham Knight",
    screenshotSize: 15,
    slug: "batman-arkham-knight",
    updatedAt: {
      $date: "2024-07-15T07:35:01.511Z",
    },
    igdb: {
      id: 5503,
      cover: {
        id: 77077,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1nh1.jpg",
        game: 5503,
      },
      aggregated_rating: 91.8125,
      aggregated_rating_count: 21,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d125a165a77be2f5ea82",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694d125a165a77be2f5ea83",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d125a165a77be2f5ea84",
          },
        },
      ],
      developers: [
        {
          id: 164,
          name: "Rocksteady Studios",
          _id: {
            $oid: "6694d125a165a77be2f5ea85",
          },
        },
      ],
      publishers: [
        {
          id: 14055,
          name: "Warner Bros. Interactive Entertainment",
          _id: {
            $oid: "6694d125a165a77be2f5ea86",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d125a165a77be2f5ea87",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d125a165a77be2f5ea88",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694d125a165a77be2f5ea89",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d125a165a77be2f5ea8a",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d125a165a77be2f5ea8b",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9111",
    },
    platform: "otherPlatforms",
    name: "The Last of Us Part I",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5xex.jpg",
    rating: 9.4,
    createdAt: "2024-02-28T20:58:21.264Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    playTime: 13.1,
    review:
      "Film tadında efsane ötesi oyun. Oyun hikayesi harika, mekanikleri harika, Türkçe dublaj olması harika. Oyun övgü üzerine övgü hak ediyor fakat tek bir sıkıntı var o da oyunda yaşadığım bug'lardı. O da büyük bir sıkıntı değildi.",
    status: "completed",
    lastPlay: "2024-03-02",
    screenshotSize: 6,
    slug: "the-last-of-us-part-i",
    updatedAt: {
      $date: "2024-07-14T21:32:39.465Z",
    },
    __v: 1,
    igdb: {
      id: 204350,
      cover: {
        id: 276585,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5xex.jpg",
        game: 204350,
      },
      aggregated_rating: 77.33333333333333,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "669443f70ecc09533aea00c7",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "669443f70ecc09533aea00c8",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "669443f70ecc09533aea00c9",
          },
        },
      ],
      developers: [
        {
          id: 401,
          name: "Naughty Dog",
          _id: {
            $oid: "669443f70ecc09533aea00ca",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "669443f70ecc09533aea00cb",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "669443f70ecc09533aea00cc",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "669443f70ecc09533aea00cd",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "669443f70ecc09533aea00ce",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "669443f70ecc09533aea00cf",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "669443f70ecc09533aea00d0",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9112",
    },
    playTime: 3.9,
    platform: "epicGames",
    lastPlay: "2024-02-25",
    status: "completed",
    rating: 4.1,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    name: "The Forgotten City",
    review:
      "Skyrim modundan oyuna dönüşen RP temalı bir oyun. Aksiyon pek yok sadece dialog takip etmekten ibaret. Hikayesi çok iyi değil. Fiyatına göre idare eder bir oyun",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3muu.jpg",
    createdAt: "2024-02-25T17:52:46.219Z",
    igdb: {
      id: 103320,
      cover: {
        id: 169590,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3muu.jpg",
        game: 103320,
      },
      aggregated_rating: 90,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d146a165a77be2f5eb3d",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d146a165a77be2f5eb3e",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d146a165a77be2f5eb3f",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d146a165a77be2f5eb40",
          },
        },
      ],
      developers: [
        {
          id: 15691,
          name: "Modern Storyteller",
          _id: {
            $oid: "6694d146a165a77be2f5eb41",
          },
        },
      ],
      publishers: [
        {
          id: 21313,
          name: "Dear Villagers",
          _id: {
            $oid: "6694d146a165a77be2f5eb42",
          },
        },
        {
          id: 1460,
          name: "Plug In Digital",
          _id: {
            $oid: "6694d146a165a77be2f5eb43",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d146a165a77be2f5eb44",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d146a165a77be2f5eb45",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d146a165a77be2f5eb46",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694d146a165a77be2f5eb47",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694d146a165a77be2f5eb48",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "the-forgotten-city",
    updatedAt: {
      $date: "2024-07-15T07:35:34.718Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9113",
    },
    lastPlay: "2024-02-25",
    rating: 7.3,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2nbk.jpg",
    review:
      "Oyun sadece koşmaktan ibaret sanıyordum ve benim büyük bir önyargımı kırdı.Hikayesi kötü değil zaten oynarken hikayeye pek odaklanılamıyor fakat onun dışında her şeyi güzel. Cyberpunk temalı başarılı bir aksiyon",
    name: "Ghostrunner",
    playTime: 6.9,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    createdAt: "2024-02-23T21:01:48.857Z",
    platform: "epicGames",
    screenshotSize: 9,
    slug: "ghostrunner",
    updatedAt: {
      $date: "2024-07-15T07:35:56.280Z",
    },
    __v: 1,
    igdb: {
      id: 121752,
      cover: {
        id: 123536,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2nbk.jpg",
        game: 121752,
      },
      aggregated_rating: 82,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d15ca165a77be2f5ebf8",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d15ca165a77be2f5ebf9",
          },
        },
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694d15ca165a77be2f5ebfa",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d15ca165a77be2f5ebfb",
          },
        },
      ],
      developers: [
        {
          id: 8254,
          name: "One More Level",
          _id: {
            $oid: "6694d15ca165a77be2f5ebfc",
          },
        },
        {
          id: 224,
          name: "3D Realms",
          _id: {
            $oid: "6694d15ca165a77be2f5ebfd",
          },
        },
        {
          id: 24004,
          name: "Slipgate Ironworks",
          _id: {
            $oid: "6694d15ca165a77be2f5ebfe",
          },
        },
      ],
      publishers: [
        {
          id: 19053,
          name: "All In! Games",
          _id: {
            $oid: "6694d15ca165a77be2f5ebff",
          },
        },
        {
          id: 445,
          name: "505 Games",
          _id: {
            $oid: "6694d15ca165a77be2f5ec00",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d15ca165a77be2f5ec01",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d15ca165a77be2f5ec02",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d15ca165a77be2f5ec03",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9114",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    lastPlay: "2024-02-23",
    platform: "epicGames",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2e1s.jpg",
    createdAt: "2024-02-23T19:52:54.734Z",
    playTime: 5,
    rating: 3.5,
    name: "Metro 2033 Redux",
    review:
      "Hikayesini ve oynanılışı beğenmedim. Sevilecek pek bir şey bulamadım",
    __v: 1,
    igdb: {
      id: 80853,
      cover: {
        id: 111520,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2e1s.jpg",
        game: 80853,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d2757bf2b5e195972edb",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d2757bf2b5e195972edc",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d2757bf2b5e195972edd",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d2757bf2b5e195972ede",
          },
        },
      ],
      developers: [
        {
          id: 314,
          name: "4A Games",
          _id: {
            $oid: "6694d2757bf2b5e195972edf",
          },
        },
      ],
      publishers: [
        {
          id: 374,
          name: "Koch Media",
          _id: {
            $oid: "6694d2757bf2b5e195972ee0",
          },
        },
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694d2757bf2b5e195972ee1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d2757bf2b5e195972ee2",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d2757bf2b5e195972ee3",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d2757bf2b5e195972ee4",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694d2757bf2b5e195972ee5",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694d2757bf2b5e195972ee6",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d2757bf2b5e195972ee7",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d2757bf2b5e195972ee8",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d2757bf2b5e195972ee9",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "metro-2033-redux",
    updatedAt: {
      $date: "2024-07-15T07:40:37.971Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9115",
    },
    review:
      "Oyunun iyi yanlarından bahsedecek olursak oyun atmosferi oldukça güzel. Hikayesi iyi fakat kötü yanlarına gelecek olursak tam anlamıyla yürüme simülatörü bir oyun. Oyundan çok filmdi",
    rating: 4.2,
    createdAt: "2024-02-19T21:14:34.392Z",
    status: "completed",
    name: "Hellblade: Senua's Sacrifice",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2l7l.jpg",
    lastPlay: "2024-02-20",
    playTime: 6.6,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    platform: "steam",
    screenshotSize: 5,
    slug: "hellblade-senuas-sacrifice",
    updatedAt: {
      $date: "2024-07-15T07:41:02.352Z",
    },
    igdb: {
      id: 7603,
      cover: {
        id: 120801,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2l7l.jpg",
        game: 7603,
      },
      aggregated_rating: 84.27272727272727,
      aggregated_rating_count: 26,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d28e7bf2b5e195972fb4",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694d28e7bf2b5e195972fb5",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d28e7bf2b5e195972fb6",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d28e7bf2b5e195972fb7",
          },
        },
      ],
      developers: [
        {
          id: 795,
          name: "Ninja Theory",
          _id: {
            $oid: "6694d28e7bf2b5e195972fb8",
          },
        },
      ],
      publishers: [
        {
          id: 795,
          name: "Ninja Theory",
          _id: {
            $oid: "6694d28e7bf2b5e195972fb9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d28e7bf2b5e195972fba",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d28e7bf2b5e195972fbb",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d28e7bf2b5e195972fbc",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d28e7bf2b5e195972fbd",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9116",
    },
    platform: "xboxPc",
    rating: 5.1,
    createdAt: "2024-02-12T19:45:05.510Z",
    playTime: "7.8",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2qtv.jpg",
    status: "completed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    name: "Halo 2: Anniversary",
    review: "Halo CE'den sonra güzel geldi fakat oyun dizaynı halen zayıf",
    lastPlay: "2024-02-18",
    screenshotSize: 6,
    slug: "halo-2-anniversary",
    updatedAt: {
      $date: "2024-07-15T07:41:14.705Z",
    },
    igdb: {
      id: 125009,
      cover: {
        id: 128083,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2qtv.jpg",
        game: 125009,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d29a7bf2b5e195973092",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d29a7bf2b5e195973093",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d29a7bf2b5e195973094",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694d29a7bf2b5e195973095",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d29a7bf2b5e195973096",
          },
        },
      ],
      developers: [
        {
          id: 722,
          name: "343 Industries",
          _id: {
            $oid: "6694d29a7bf2b5e195973097",
          },
        },
        {
          id: 620,
          name: "Bungie",
          _id: {
            $oid: "6694d29a7bf2b5e195973098",
          },
        },
      ],
      publishers: [
        {
          id: 17966,
          name: "Xbox Game Studios",
          _id: {
            $oid: "6694d29a7bf2b5e195973099",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d29a7bf2b5e19597309a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d29a7bf2b5e19597309b",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d29a7bf2b5e19597309c",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9117",
    },
    name: "Star Wars Jedi: Fallen Order",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rbi.jpg",
    status: "completed",
    rating: 7.9,
    createdAt: "2024-02-12T19:48:17.733Z",
    playTime: 16,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    platform: "epicGames",
    lastPlay: "2024-02-17",
    review:
      "Tam bir souls like olmasa da zorluk ayarını sona alınca souls like'ı yeterince hissettiriyor. Combat sistemi başarılı. Game design ilk baş karışık gelince sonra kolayca çözülüyor. Skill sistemi oldukça güzel. Star Wars Film'leri sevenler için oldukça tatmin edici bir oyun olmuş",
    screenshotSize: 36,
    slug: "star-wars-jedi-fallen-order",
    updatedAt: {
      $date: "2024-07-15T07:41:27.434Z",
    },
    __v: 1,
    igdb: {
      id: 74701,
      cover: {
        id: 82062,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rbi.jpg",
        game: 74701,
      },
      aggregated_rating: 82.84615384615384,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d2a77bf2b5e19597317c",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d2a77bf2b5e19597317d",
          },
        },
      ],
      developers: [
        {
          id: 1002,
          name: "Respawn Entertainment",
          _id: {
            $oid: "6694d2a77bf2b5e19597317e",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694d2a77bf2b5e19597317f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d2a77bf2b5e195973180",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d2a77bf2b5e195973181",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d2a77bf2b5e195973182",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d2a77bf2b5e195973183",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9118",
    },
    createdAt: "2024-02-11T18:57:32.887Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xhb.jpg",
    name: "Halo: Combat Evolved Anniversary",
    status: "completed",
    lastPlay: "2024-02-12",
    platform: "xboxPc",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Tek iyi yanı ilk oyuna göre vuruş hissiyatının yanı iyi olması onun dışında sayıalcak çok fazla kötü şey var. İlk oyunda ekip gibi takılıyorduk karakterler vardı şimdi resmen solo oyunu olmuş. Ve en kötü olay ise oyun dizaynı rezalet ötesi. Neredeyse hep aynı yerlere fight ediyorsunuz. İsmi Combat Evolved ama combat ilk oyundan daha basit. Oyunun son 2 saati uykum geldi resmen",
    rating: 1.8,
    playTime: 7,
    screenshotSize: 6,
    slug: "halo-combat-evolved-anniversary",
    updatedAt: {
      $date: "2024-07-15T07:41:41.068Z",
    },
    igdb: {
      id: 2640,
      cover: {
        id: 90047,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xhb.jpg",
        game: 2640,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d2b57bf2b5e19597326b",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d2b57bf2b5e19597326c",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d2b57bf2b5e19597326d",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694d2b57bf2b5e19597326e",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d2b57bf2b5e19597326f",
          },
        },
      ],
      developers: [
        {
          id: 722,
          name: "343 Industries",
          _id: {
            $oid: "6694d2b57bf2b5e195973270",
          },
        },
      ],
      publishers: [
        {
          id: 1010,
          name: "Microsoft Studios",
          _id: {
            $oid: "6694d2b57bf2b5e195973271",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d2b57bf2b5e195973272",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d2b57bf2b5e195973273",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d2b57bf2b5e195973274",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d2b57bf2b5e195973275",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9119",
    },
    name: "Halo: Reach",
    lastPlay: "2024-02-11",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xha.jpg",
    playTime: 8,
    rating: 6.4,
    platform: "xboxPc",
    review:
      "Hikayesi güzel sayılmaz fakat oynanılışı oldukça güzel. Uzay temasını başarıyla yansıtıyor özellikle atmosferi güzel.  En kötü tarafı ise oyunda vuruş hissiyatı neredeyse yok.",
    createdAt: "2024-02-10T21:49:44.309Z",
    status: "completed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    screenshotSize: 28,
    slug: "halo-reach",
    updatedAt: {
      $date: "2024-07-15T07:42:42.748Z",
    },
    igdb: {
      id: 990,
      cover: {
        id: 90046,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xha.jpg",
        game: 990,
      },
      aggregated_rating: 89,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d2f27bf2b5e195973368",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d2f27bf2b5e195973369",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d2f27bf2b5e19597336a",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694d2f27bf2b5e19597336b",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d2f27bf2b5e19597336c",
          },
        },
      ],
      developers: [
        {
          id: 620,
          name: "Bungie",
          _id: {
            $oid: "6694d2f27bf2b5e19597336d",
          },
        },
      ],
      publishers: [
        {
          id: 53,
          name: "Microsoft Game Studios",
          _id: {
            $oid: "6694d2f27bf2b5e19597336e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d2f27bf2b5e19597336f",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d2f27bf2b5e195973370",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d2f27bf2b5e195973371",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d2f27bf2b5e195973372",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d2f27bf2b5e195973373",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a911a",
    },
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4ctz.jpg",
    review:
      "İlk oyun kadaar zevkli ama bir ilk oyun kadar değil. Oyunun size sunduğu bulmaca, keşif çok iyi. Combat kısmı çok iyi olduğunu söyleyemem",
    platform: "steam",
    createdAt: "2024-02-10T13:06:19.009Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    playTime: 9.8,
    lastPlay: "2024-02-10",
    rating: 7.5,
    name: "Supraland: Six Inches Under",
    screenshotSize: 3,
    slug: "supraland-six-inches-under",
    updatedAt: {
      $date: "2024-07-15T07:42:55.553Z",
    },
    igdb: {
      id: 172903,
      cover: {
        id: 203255,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4ctz.jpg",
        game: 172903,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d2ff7bf2b5e195973472",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694d2ff7bf2b5e195973473",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694d2ff7bf2b5e195973474",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d2ff7bf2b5e195973475",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d2ff7bf2b5e195973476",
          },
        },
      ],
      developers: [
        {
          id: 5119,
          name: "Supra Games UG",
          _id: {
            $oid: "6694d2ff7bf2b5e195973477",
          },
        },
        {
          id: 5119,
          name: "Supra Games UG",
          _id: {
            $oid: "6694d2ff7bf2b5e195973478",
          },
        },
      ],
      publishers: [
        {
          id: 26341,
          name: "Humble Games",
          _id: {
            $oid: "6694d2ff7bf2b5e195973479",
          },
        },
        {
          id: 5119,
          name: "Supra Games UG",
          _id: {
            $oid: "6694d2ff7bf2b5e19597347a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d2ff7bf2b5e19597347b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d2ff7bf2b5e19597347c",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694d2ff7bf2b5e19597347d",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d2ff7bf2b5e19597347e",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a911b",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1v88.jpg",
    lastPlay: "2024-02-10",
    name: "Metal Gear Solid V: Ground Zeroes",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    createdAt: "2024-02-10T15:37:20.453Z",
    review:
      "1-2 saatlik demo oyun olduğundan çok büyük oranda puan kırdım. Ne hikayeden anladım ne olaydan. Zaten en az yarım saati ara sahne izlemek oldu",
    platform: "steam",
    rating: 3.8,
    playTime: 1.8,
    igdb: {
      id: 5328,
      cover: {
        id: 87128,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1v88.jpg",
        game: 5328,
      },
      aggregated_rating: 79.21052631578948,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3749a01891f6485a76a",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d3749a01891f6485a76b",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d3749a01891f6485a76c",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d3749a01891f6485a76d",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d3749a01891f6485a76e",
          },
        },
      ],
      developers: [
        {
          id: 170,
          name: "Kojima Productions",
          _id: {
            $oid: "6694d3749a01891f6485a76f",
          },
        },
      ],
      publishers: [
        {
          id: 129,
          name: "Konami",
          _id: {
            $oid: "6694d3749a01891f6485a770",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d3749a01891f6485a771",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d3749a01891f6485a772",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d3749a01891f6485a773",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d3749a01891f6485a774",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d3749a01891f6485a775",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d3749a01891f6485a776",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "metal-gear-solid-v-ground-zeroes",
    updatedAt: {
      $date: "2024-07-15T07:44:52.882Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a911c",
    },
    status: "completed",
    name: "Batman: Arkham City",
    rating: 6.6,
    playTime: 10.6,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1voh.jpg",
    lastPlay: "2024-02-09",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    createdAt: "2024-02-05T18:47:43.660Z",
    platform: "steam",
    review:
      "Önceki oyunun sadeliği gitmiş ve hikayede yer alan bir çok karakter eklenmiş bu gerçekten iyi olmuş. Robin ve Cat woman ile oynanabilirlik de gayet güzeldi. Combat ve oyun mekanikleri önceki oyunla neredeyse aynı. Önceki oyuna göre 1 tık iyi seviyede",
    screenshotSize: 13,
    slug: "batman-arkham-city",
    updatedAt: {
      $date: "2024-07-15T07:45:09.767Z",
    },
    igdb: {
      id: 501,
      cover: {
        id: 87713,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1voh.jpg",
        game: 501,
      },
      aggregated_rating: 91.2,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3859a01891f6485a88f",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694d3859a01891f6485a890",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d3859a01891f6485a891",
          },
        },
      ],
      developers: [
        {
          id: 164,
          name: "Rocksteady Studios",
          _id: {
            $oid: "6694d3859a01891f6485a892",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694d3859a01891f6485a893",
          },
        },
        {
          id: 165,
          name: "DC Entertainment",
          _id: {
            $oid: "6694d3859a01891f6485a894",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d3859a01891f6485a895",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d3859a01891f6485a896",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d3859a01891f6485a897",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d3859a01891f6485a898",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a911d",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5vmg.jpg",
    review:
      "Muhteşem ötesi bir oyun. Önceki oyuna göre neredeyse her şey iyi, oyun mekanikleri, oyun dizaynı, hikayesi. Oyunun sağladığı özgürlük ile istediğin araçları yapabilmen harika bir özellik.",
    lastPlay: "2024-02-03",
    createdAt: "2024-01-20T21:18:41.748Z",
    status: "completed",
    rating: 9.7,
    playTime: 45,
    name: "The Legend of Zelda: Tears of the Kingdom",
    platform: "otherPlatforms",
    screenshotSize: 54,
    slug: "the-legend-of-zelda-tears-of-the-kingdom",
    updatedAt: {
      $date: "2024-07-15T07:45:29.820Z",
    },
    __v: 1,
    igdb: {
      id: 119388,
      cover: {
        id: 274264,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5vmg.jpg",
        game: 119388,
      },
      aggregated_rating: 95.33333333333333,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3999a01891f6485a9bb",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d3999a01891f6485a9bc",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d3999a01891f6485a9bd",
          },
        },
      ],
      developers: [
        {
          id: 45209,
          name: "Nintendo EPD Production Group No. 3",
          _id: {
            $oid: "6694d3999a01891f6485a9be",
          },
        },
      ],
      publishers: [
        {
          id: 70,
          name: "Nintendo",
          _id: {
            $oid: "6694d3999a01891f6485a9bf",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d3999a01891f6485a9c0",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d3999a01891f6485a9c1",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d3999a01891f6485a9c2",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d3999a01891f6485a9c3",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d3999a01891f6485a9c4",
          },
        },
      ],
    },
    isFavorite: true,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a911e",
    },
    name: "Just Cause 3",
    createdAt: "2024-01-13T14:15:02.508Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co24o5.jpg",
    playTime: 25,
    status: "completed",
    lastPlay: "2024-01-16",
    rating: 7.5,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Hikayesi başarılı olmasa da oynanılışı muazzam keyifli. Stres atmaya birebir oyun.",
    platform: "steam",
    screenshotSize: 5,
    slug: "just-cause-3",
    updatedAt: {
      $date: "2024-07-15T07:45:40.911Z",
    },
    igdb: {
      id: 8187,
      cover: {
        id: 99365,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co24o5.jpg",
        game: 8187,
      },
      aggregated_rating: 76.47368421052632,
      aggregated_rating_count: 22,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3a49a01891f6485aaf1",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d3a49a01891f6485aaf2",
          },
        },
      ],
      developers: [
        {
          id: 437,
          name: "Avalanche Studios",
          _id: {
            $oid: "6694d3a49a01891f6485aaf3",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694d3a49a01891f6485aaf4",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d3a49a01891f6485aaf5",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d3a49a01891f6485aaf6",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d3a49a01891f6485aaf7",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a911f",
    },
    status: "completed",
    createdAt: "2024-01-02T19:17:48.062Z",
    review:
      "Önceki oyununa göre hikayesi bir tık daha iyi konuma gelmiş. Grafikler şahane fakat oynanılış konusunda pek bir fark göremedim",
    name: "Rise of the Tomb Raider",
    platform: "epicGames",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rqa.jpg",
    playTime: 11,
    rating: 6.5,
    lastPlay: "2024-01-13",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    screenshotSize: 25,
    slug: "rise-of-the-tomb-raider",
    updatedAt: {
      $date: "2024-07-15T07:45:52.814Z",
    },
    igdb: {
      id: 7323,
      cover: {
        id: 82594,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rqa.jpg",
        game: 7323,
      },
      aggregated_rating: 87.04,
      aggregated_rating_count: 27,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3b09a01891f6485ac2b",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d3b09a01891f6485ac2c",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d3b09a01891f6485ac2d",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d3b09a01891f6485ac2e",
          },
        },
      ],
      developers: [
        {
          id: 552,
          name: "Crystal Dynamics",
          _id: {
            $oid: "6694d3b09a01891f6485ac2f",
          },
        },
      ],
      publishers: [
        {
          id: 1010,
          name: "Microsoft Studios",
          _id: {
            $oid: "6694d3b09a01891f6485ac30",
          },
        },
        {
          id: 4940,
          name: "Square Enix Europe",
          _id: {
            $oid: "6694d3b09a01891f6485ac31",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d3b09a01891f6485ac32",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d3b09a01891f6485ac33",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694d3b09a01891f6485ac34",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d3b09a01891f6485ac35",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d3b09a01891f6485ac36",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d3b09a01891f6485ac37",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d3b09a01891f6485ac38",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9120",
    },
    name: "The Elder Scrolls Online",
    rating: 6,
    createdAt: "2023-12-29T15:15:23.856Z",
    lastPlay: "2024-01-10",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1ybf.jpg",
    status: "activePlaying",
    platform: "steam",
    review:
      "Bir MMORPG oyunu olmasına rağmen Elder Scrolls Lore'unu sevenleri MMO oynatmaya zorlayan bir oyun. Oyunun görevleri gerçekten başarılı fakat MMO olduğu için puan kırıyorum. Sunucuları rezalet seviyesinde",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    playTime: 73,
    igdb: {
      id: 1081,
      cover: {
        id: 91131,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1ybf.jpg",
        game: 1081,
      },
      aggregated_rating: 70.4375,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3c09a01891f6485ad7a",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d3c09a01891f6485ad7b",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d3c09a01891f6485ad7c",
          },
        },
        {
          id: 5,
          name: "Massively Multiplayer Online (MMO)",
          _id: {
            $oid: "6694d3c09a01891f6485ad7d",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d3c09a01891f6485ad7e",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d3c09a01891f6485ad7f",
          },
        },
      ],
      developers: [
        {
          id: 851,
          name: "ZeniMax Online Studios",
          _id: {
            $oid: "6694d3c09a01891f6485ad80",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694d3c09a01891f6485ad81",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d3c09a01891f6485ad82",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d3c09a01891f6485ad83",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d3c09a01891f6485ad84",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d3c09a01891f6485ad85",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d3c09a01891f6485ad86",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "the-elder-scrolls-online",
    updatedAt: {
      $date: "2024-07-15T07:46:08.586Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9121",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co6zat.jpg",
    playTime: 12,
    platform: "xboxPc",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "toBeCompleted",
    createdAt: "2024-01-08T16:45:12.830Z",
    review: "",
    lastPlay: "2024-01-08",
    name: "No Man's Sky",
    rating: 7,
    screenshotSize: 4,
    slug: "no-mans-sky",
    updatedAt: {
      $date: "2024-07-15T07:46:21.239Z",
    },
    igdb: {
      id: 3225,
      cover: {
        id: 325685,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co6zat.jpg",
        game: 3225,
      },
      aggregated_rating: 73.84210526315789,
      aggregated_rating_count: 43,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3cd9a01891f6485aed5",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d3cd9a01891f6485aed6",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d3cd9a01891f6485aed7",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d3cd9a01891f6485aed8",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d3cd9a01891f6485aed9",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d3cd9a01891f6485aeda",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d3cd9a01891f6485aedb",
          },
        },
      ],
      developers: [
        {
          id: 1641,
          name: "Hello Games",
          _id: {
            $oid: "6694d3cd9a01891f6485aedc",
          },
        },
      ],
      publishers: [
        {
          id: 445,
          name: "505 Games",
          _id: {
            $oid: "6694d3cd9a01891f6485aedd",
          },
        },
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694d3cd9a01891f6485aede",
          },
        },
        {
          id: 1641,
          name: "Hello Games",
          _id: {
            $oid: "6694d3cd9a01891f6485aedf",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d3cd9a01891f6485aee0",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d3cd9a01891f6485aee1",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694d3cd9a01891f6485aee2",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d3cd9a01891f6485aee3",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d3cd9a01891f6485aee4",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d3cd9a01891f6485aee5",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d3cd9a01891f6485aee6",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d3cd9a01891f6485aee7",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9122",
    },
    status: "toBeCompleted",
    rating: 7,
    playTime: 2,
    platform: "epicGames",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co29gf.jpg",
    lastPlay: "2024-01-02",
    review: "",
    createdAt: "2024-01-12T21:51:13.344Z",
    name: "Pathfinder: Kingmaker",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    igdb: {
      id: 36929,
      cover: {
        id: 105567,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co29gf.jpg",
        game: 36929,
      },
      aggregated_rating: 65.66666666666667,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3dd9a01891f6485b049",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d3dd9a01891f6485b04a",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694d3dd9a01891f6485b04b",
          },
        },
      ],
      developers: [
        {
          id: 13310,
          name: "Owlcat Games",
          _id: {
            $oid: "6694d3dd9a01891f6485b04c",
          },
        },
      ],
      publishers: [
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694d3dd9a01891f6485b04d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d3dd9a01891f6485b04e",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d3dd9a01891f6485b04f",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "pathfinder-kingmaker",
    updatedAt: {
      $date: "2024-07-15T07:46:37.642Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9123",
    },
    rating: 4.5,
    name: "Fallout 3",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1ycw.jpg",
    lastPlay: "2024-01-02",
    platform: "epicGames",
    createdAt: "2024-01-02T13:59:43.683Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    playTime: 15,
    review:
      "Diyalog konusunda oldukça başarılı bir RPG fakat oyun mekanikleri çok iyi değil.",
    status: "completed",
    igdb: {
      id: 15,
      cover: {
        id: 91184,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1ycw.jpg",
        game: 15,
      },
      aggregated_rating: 89.1,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3e99a01891f6485b1b8",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d3e99a01891f6485b1b9",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d3e99a01891f6485b1ba",
          },
        },
      ],
      developers: [
        {
          id: 126,
          name: "Bethesda Game Studios",
          _id: {
            $oid: "6694d3e99a01891f6485b1bb",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694d3e99a01891f6485b1bc",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d3e99a01891f6485b1bd",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d3e99a01891f6485b1be",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d3e99a01891f6485b1bf",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d3e99a01891f6485b1c0",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d3e99a01891f6485b1c1",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d3e99a01891f6485b1c2",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d3e99a01891f6485b1c3",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d3e99a01891f6485b1c4",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "fallout-3",
    updatedAt: {
      $date: "2024-07-15T07:46:49.271Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9124",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1voj.jpg",
    lastPlay: "2024-01-01",
    status: "completed",
    rating: 5.8,
    name: "Batman: Arkham Asylum",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Dönemine göre iyi idare edebilir ama mekanikler çok deli etti ve hikayesi zayıftı",
    platform: "steam",
    playTime: 9,
    createdAt: "2024-01-01T12:53:31.190Z",
    screenshotSize: 6,
    slug: "batman-arkham-asylum",
    updatedAt: {
      $date: "2024-07-15T07:47:02.578Z",
    },
    igdb: {
      id: 500,
      cover: {
        id: 87715,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1voj.jpg",
        game: 500,
      },
      aggregated_rating: 89.4,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d3f69a01891f6485b33a",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694d3f69a01891f6485b33b",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d3f69a01891f6485b33c",
          },
        },
      ],
      developers: [
        {
          id: 164,
          name: "Rocksteady Studios",
          _id: {
            $oid: "6694d3f69a01891f6485b33d",
          },
        },
      ],
      publishers: [
        {
          id: 4,
          name: "Eidos Interactive",
          _id: {
            $oid: "6694d3f69a01891f6485b33e",
          },
        },
        {
          id: 3989,
          name: "Playcast-media",
          _id: {
            $oid: "6694d3f69a01891f6485b33f",
          },
        },
        {
          id: 14055,
          name: "Warner Bros. Interactive Entertainment",
          _id: {
            $oid: "6694d3f69a01891f6485b340",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d3f69a01891f6485b341",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d3f69a01891f6485b342",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d3f69a01891f6485b343",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d3f69a01891f6485b344",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9125",
    },
    lastPlay: "2023-12-29",
    review:
      "Yeni Nesil AC mekanikleri geçiş olduğundan bazı mekanikleri çok iyi olsa da bazıları ise yetersiz kalmış. Antik mısırı çok güzel yansıtan güzel bir oyun. Ana görevleri iyi olsa da yan görevleri başarılı değil tekrara düşürüyor.",
    createdAt: "2023-12-29T09:00:00.737Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rbe.jpg",
    platform: "ubisoft",
    rating: 6.6,
    name: "Assassin's Creed Origins",
    status: "completed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    playTime: 51,
    screenshotSize: 14,
    slug: "assassins-creed-origins",
    updatedAt: {
      $date: "2024-07-15T07:47:18.282Z",
    },
    igdb: {
      id: 28540,
      cover: {
        id: 82058,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rbe.jpg",
        game: 28540,
      },
      aggregated_rating: 85.93333333333334,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4069a01891f6485b4c5",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d4069a01891f6485b4c6",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d4069a01891f6485b4c7",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694d4069a01891f6485b4c8",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694d4069a01891f6485b4c9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d4069a01891f6485b4ca",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4069a01891f6485b4cb",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4069a01891f6485b4cc",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d4069a01891f6485b4cd",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d4069a01891f6485b4ce",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9126",
    },
    status: "activePlaying",
    rating: 6.8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4v4h.jpg",
    createdAt: "2023-12-29T15:19:43.422Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    playTime: 641,
    name: "Victoria 3",
    review:
      "Ekonomi ve siyaset yönetiminin arşına çıkan başarılı bir Grand Strategy oyunudur. Oyunda eksiklikler var tipik paradox oyunu olduğundan zamanla dlc lerle dolacaktır.",
    platform: "steam",
    lastPlay: "2023-12-21",
    igdb: {
      id: 148372,
      cover: {
        id: 226961,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4v4h.jpg",
        game: 148372,
      },
      aggregated_rating: 87,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d40f9a01891f6485b659",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d40f9a01891f6485b65a",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d40f9a01891f6485b65b",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d40f9a01891f6485b65c",
          },
        },
      ],
      developers: [
        {
          id: 7466,
          name: "Paradox Development Studio",
          _id: {
            $oid: "6694d40f9a01891f6485b65d",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694d40f9a01891f6485b65e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d40f9a01891f6485b65f",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d40f9a01891f6485b660",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "victoria-3",
    updatedAt: {
      $date: "2024-07-15T07:47:27.916Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9127",
    },
    name: "Ranch Simulator",
    lastPlay: "2023-12-09",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Tipik bir çiftlik simulator oyunu. Oyunun konsepti çok başarılı olsa da çok zayıf mekanikleri var. Full sürüme çıkmasına rağmen oyun full sürümdeyim demiyor",
    platform: "steam",
    status: "abandoned",
    rating: 3.5,
    createdAt: "2023-12-29T13:18:44.187Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co29nf.jpg",
    playTime: 8,
    screenshotSize: 1,
    slug: "ranch-simulator",
    updatedAt: {
      $date: "2024-07-15T07:47:40.470Z",
    },
    igdb: {
      id: 121087,
      cover: {
        id: 105819,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co29nf.jpg",
        game: 121087,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d41c9a01891f6485b7f3",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d41c9a01891f6485b7f4",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d41c9a01891f6485b7f5",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d41c9a01891f6485b7f6",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d41c9a01891f6485b7f7",
          },
        },
      ],
      developers: [
        {
          id: 35089,
          name: "Toxic Dog",
          _id: {
            $oid: "6694d41c9a01891f6485b7f8",
          },
        },
      ],
      publishers: [
        {
          id: 12084,
          name: "Excalibur Games",
          _id: {
            $oid: "6694d41c9a01891f6485b7f9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d41c9a01891f6485b7fa",
          },
        },
      ],
      themes: [
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d41c9a01891f6485b7fb",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d41c9a01891f6485b7fc",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9128",
    },
    platform: "steam",
    review:
      "Oyuna dair hangi konudan bahsetsek harika deriz ben ise 2 puan nereden kırdığımı söyleyim. At sürmekten ciddi derece baygınlık geçirdim, Oyun çok yavaş ilerliyor ki eğer oyun oynamaya zaman bulamıyorsanız bu sizi sebepsizce sıkıyor.",
    name: "Red Dead Redemption 2",
    status: "completed",
    playTime: 53,
    lastPlay: "2023-12-07",
    rating: 8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1q1f.jpg",
    createdAt: "2023-12-29T13:49:24.534Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    screenshotSize: 18,
    slug: "red-dead-redemption-2",
    updatedAt: {
      $date: "2024-07-15T07:47:51.102Z",
    },
    igdb: {
      id: 25076,
      cover: {
        id: 80403,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1q1f.jpg",
        game: 25076,
      },
      aggregated_rating: 94.05882352941177,
      aggregated_rating_count: 26,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4279a01891f6485b999",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d4279a01891f6485b99a",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d4279a01891f6485b99b",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d4279a01891f6485b99c",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d4279a01891f6485b99d",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d4279a01891f6485b99e",
          },
        },
      ],
      developers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694d4279a01891f6485b99f",
          },
        },
      ],
      publishers: [
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694d4279a01891f6485b9a0",
          },
        },
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694d4279a01891f6485b9a1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d4279a01891f6485b9a2",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d4279a01891f6485b9a3",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4279a01891f6485b9a4",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694d4279a01891f6485b9a5",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d4279a01891f6485b9a6",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9129",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 7.8,
    playTime: 2463,
    createdAt: "2023-12-29T15:17:46.355Z",
    lastPlay: "2023-11-28",
    review:
      "Grand Strategy'lerden en başarılı oyun. Oyun dlc oyunu olsa da verdiği tad başkadır. Oyunun eksik yönleri hala eski bir oyun motoru üzerinde geliştiriliyor olmasdır.",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rby.jpg",
    status: "activePlaying",
    name: "Europa Universalis IV",
    igdb: {
      id: 1904,
      cover: {
        id: 82078,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rby.jpg",
        game: 1904,
      },
      aggregated_rating: 85,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4329a01891f6485bb51",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d4329a01891f6485bb52",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d4329a01891f6485bb53",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694d4329a01891f6485bb54",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d4329a01891f6485bb55",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d4329a01891f6485bb56",
          },
        },
      ],
      developers: [
        {
          id: 7466,
          name: "Paradox Development Studio",
          _id: {
            $oid: "6694d4329a01891f6485bb57",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694d4329a01891f6485bb58",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d4329a01891f6485bb59",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d4329a01891f6485bb5a",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4329a01891f6485bb5b",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d4329a01891f6485bb5c",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "europa-universalis-iv",
    updatedAt: {
      $date: "2024-07-15T07:48:02.477Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a912a",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Son 10 yılda çıkmış belki de en iyi oyunu ve gelmiş geçmiş en iyi RPG'dir. Devrim niteliğinde çıkan bu oyun 17 bin alternatif, binlerce diyalog, başarılı sinematik sahneler ve özgür kararlarla adeta oyun ötesinde bir oyun olduğunu ispatlıyor.",
    status: "completed",
    platform: "steam",
    lastPlay: {
      $date: "2024-06-16T00:00:00.000Z",
    },
    rating: 10,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co670h.jpg",
    createdAt: "2023-12-29T09:06:16.322Z",
    playTime: 191,
    name: "Baldur's Gate 3",
    screenshotSize: 58,
    slug: "baldurs-gate-3",
    updatedAt: {
      $date: "2024-07-14T21:17:18.228Z",
    },
    __v: 1,
    igdb: {
      id: 119171,
      cover: {
        id: 289025,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co670h.jpg",
        game: 119171,
      },
      aggregated_rating: 94.5,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694405e0ecc09533ae9f934",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694405e0ecc09533ae9f935",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694405e0ecc09533ae9f936",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694405e0ecc09533ae9f937",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694405e0ecc09533ae9f938",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694405e0ecc09533ae9f939",
          },
        },
        {
          id: 16,
          name: "Turn-based strategy (TBS)",
          _id: {
            $oid: "6694405e0ecc09533ae9f93a",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694405e0ecc09533ae9f93b",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694405e0ecc09533ae9f93c",
          },
        },
      ],
      developers: [
        {
          id: 510,
          name: "Larian Studios",
          _id: {
            $oid: "6694405e0ecc09533ae9f93d",
          },
        },
      ],
      publishers: [
        {
          id: 510,
          name: "Larian Studios",
          _id: {
            $oid: "6694405e0ecc09533ae9f93e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694405e0ecc09533ae9f93f",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694405e0ecc09533ae9f940",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694405e0ecc09533ae9f941",
          },
        },
      ],
    },
    isFavorite: true,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a912b",
    },
    platform: "steam",
    lastPlay: "2023-11-19",
    name: "The Witcher 3: Wild Hunt",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wyy.jpg",
    createdAt: "2023-12-29T13:53:12.374Z",
    playTime: 64,
    status: "completed",
    review:
      "Oyun Harika ötesi. Hikayesi muazzam, Mekanikleri iyi, yaşattığı atmosfer iyi, diyaloglar iyi. Dlc'leri ana oyun kadar iyi. Normalde 10 vermem gerekirken 1 kırmamın sebebi bir RPG için diyalog kısmı zayıf kalıyor. İkinci bir diyalog koyuyorlar fakat hiçbir etki veya alternatif sunmuyorlar.",
    rating: 9.2,
    screenshotSize: 17,
    slug: "the-witcher-3-wild-hunt",
    updatedAt: {
      $date: "2024-07-15T07:48:12.435Z",
    },
    igdb: {
      id: 1942,
      cover: {
        id: 89386,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wyy.jpg",
        game: 1942,
      },
      aggregated_rating: 91.72,
      aggregated_rating_count: 26,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d43c9a01891f6485bd13",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d43c9a01891f6485bd14",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d43c9a01891f6485bd15",
          },
        },
      ],
      developers: [
        {
          id: 908,
          name: "CD Projekt RED",
          _id: {
            $oid: "6694d43c9a01891f6485bd16",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694d43c9a01891f6485bd17",
          },
        },
        {
          id: 248,
          name: "Bandai Namco Entertainment",
          _id: {
            $oid: "6694d43c9a01891f6485bd18",
          },
        },
        {
          id: 3119,
          name: "cdp.pl",
          _id: {
            $oid: "6694d43c9a01891f6485bd19",
          },
        },
        {
          id: 1217,
          name: "Spike ChunSoft",
          _id: {
            $oid: "6694d43c9a01891f6485bd1a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d43c9a01891f6485bd1b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d43c9a01891f6485bd1c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d43c9a01891f6485bd1d",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d43c9a01891f6485bd1e",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a912c",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    platform: "otherPlatforms",
    playTime: 41,
    name: "The Legend of Zelda: Breath of the Wild",
    review:
      "Oyun erken aşamada çok baysa da oyunu çözünce gerçekten aşırı keyifli bir oyuna dönüşüyor. Hikayesi güzel, oyunun combatı eğer çözerseniz çok zevkli, oyun içerikleri muazzam, açık dünyası harika",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3p2d.jpg",
    lastPlay: "2023-10-29",
    createdAt: "2024-01-18T12:57:23.610Z",
    rating: 8.6,
    status: "completed",
    screenshotSize: 27,
    slug: "the-legend-of-zelda-breath-of-the-wild",
    updatedAt: {
      $date: "2024-07-15T07:48:42.697Z",
    },
    igdb: {
      id: 7346,
      cover: {
        id: 172453,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3p2d.jpg",
        game: 7346,
      },
      aggregated_rating: 97.5925925925926,
      aggregated_rating_count: 31,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d45a9a01891f6485bee1",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694d45a9a01891f6485bee2",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d45a9a01891f6485bee3",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d45a9a01891f6485bee4",
          },
        },
      ],
      developers: [
        {
          id: 45209,
          name: "Nintendo EPD Production Group No. 3",
          _id: {
            $oid: "6694d45a9a01891f6485bee5",
          },
        },
      ],
      publishers: [
        {
          id: 70,
          name: "Nintendo",
          _id: {
            $oid: "6694d45a9a01891f6485bee6",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d45a9a01891f6485bee7",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d45a9a01891f6485bee8",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d45a9a01891f6485bee9",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d45a9a01891f6485beea",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d45a9a01891f6485beeb",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694d45a9a01891f6485beec",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d45a9a01891f6485beed",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d45a9a01891f6485beee",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a912d",
    },
    createdAt: "2023-12-29T15:22:07.987Z",
    name: "Hearts of Iron IV",
    playTime: 462,
    platform: "steam",
    status: "activePlaying",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 6,
    review: "Dünya savaşını konu alan başarılı bir Grand Strategy oyunudur.",
    lastPlay: "2023-10-26",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1j86.jpg",
    igdb: {
      id: 15894,
      cover: {
        id: 71574,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1j86.jpg",
        game: 15894,
      },
      aggregated_rating: 83.83333333333333,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4669a01891f6485c0bf",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d4669a01891f6485c0c0",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d4669a01891f6485c0c1",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694d4669a01891f6485c0c2",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d4669a01891f6485c0c3",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d4669a01891f6485c0c4",
          },
        },
      ],
      developers: [
        {
          id: 7466,
          name: "Paradox Development Studio",
          _id: {
            $oid: "6694d4669a01891f6485c0c5",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694d4669a01891f6485c0c6",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d4669a01891f6485c0c7",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4669a01891f6485c0c8",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d4669a01891f6485c0c9",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "hearts-of-iron-iv",
    updatedAt: {
      $date: "2024-07-15T07:48:54.841Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a912e",
    },
    name: "Battlefield V",
    platform: "steam",
    rating: 6.3,
    status: "activePlaying",
    lastPlay: "2023-10-14",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Oyun güzel fakat hilecileriden dolayı oynaması güçlük çekiyor. Bf1'den sonraki yansıttığı oyun atmosferi inanılmaz düşmüş ve en kötüsü ise 2.dünya savaşının en önemli cephlerinden doğu cephesinin olmaması",
    playTime: 6,
    createdAt: "2023-12-29T14:26:20.407Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xbv.jpg",
    igdb: {
      id: 83728,
      cover: {
        id: 89851,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xbv.jpg",
        game: 83728,
      },
      aggregated_rating: 77.41176470588235,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4779a01891f6485c2a5",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d4779a01891f6485c2a6",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d4779a01891f6485c2a7",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d4779a01891f6485c2a8",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "6694d4779a01891f6485c2a9",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694d4779a01891f6485c2aa",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d4779a01891f6485c2ab",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4779a01891f6485c2ac",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4779a01891f6485c2ad",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d4779a01891f6485c2ae",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "battlefield-v",
    updatedAt: {
      $date: "2024-07-15T07:49:11.462Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a912f",
    },
    lastPlay: "2023-10-06",
    platform: "steam",
    name: "Cyberpunk 2077",
    status: "completed",
    review:
      "Oyuna 2.0 güncellemesi ile başladım ve çok başarılı bir oyun olduğunu kanıtlamış. Aksiyonu, yaşattığı atmosferi ve hikayesi çok başarılı keyifli bir oyun. RPG oyununa göre diyalogları zayıf, diyalogların hiçbir alternatif etkisi bulunmuyor.",
    rating: 8.8,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    playTime: 48,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co7497.jpg",
    createdAt: "2023-12-29T13:55:31.778Z",
    screenshotSize: 11,
    slug: "cyberpunk-2077",
    updatedAt: {
      $date: "2024-07-15T07:49:25.568Z",
    },
    igdb: {
      id: 1877,
      cover: {
        id: 332107,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co7497.jpg",
        game: 1877,
      },
      aggregated_rating: 75.23809523809524,
      aggregated_rating_count: 28,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4859a01891f6485c494",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d4859a01891f6485c495",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d4859a01891f6485c496",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d4859a01891f6485c497",
          },
        },
      ],
      developers: [
        {
          id: 908,
          name: "CD Projekt RED",
          _id: {
            $oid: "6694d4859a01891f6485c498",
          },
        },
      ],
      publishers: [
        {
          id: 4291,
          name: "CD Projekt",
          _id: {
            $oid: "6694d4859a01891f6485c499",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d4859a01891f6485c49a",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d4859a01891f6485c49b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4859a01891f6485c49c",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d4859a01891f6485c49d",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d4859a01891f6485c49e",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d4859a01891f6485c49f",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9130",
    },
    name: "Smite",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    platform: "steam",
    lastPlay: "2023-09-22",
    rating: 2,
    review:
      "Bir moba oyunu, oyun değil bağımlılıktır ama bu oyun sürecinde bana kurmaya vesile olduğu bazı arkadaşlardan ve yaşattığı bazı güzel anılardan ötürü bir tık fazla puan veriyorum.",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co46v5.jpg",
    playTime: 5500,
    status: "abandoned",
    createdAt: "2023-12-29T09:55:31.938Z",
    igdb: {
      id: 5607,
      cover: {
        id: 195521,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co46v5.jpg",
        game: 5607,
      },
      aggregated_rating: 78,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d48e9a01891f6485c691",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d48e9a01891f6485c692",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d48e9a01891f6485c693",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d48e9a01891f6485c694",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d48e9a01891f6485c695",
          },
        },
        {
          id: 36,
          name: "MOBA",
          _id: {
            $oid: "6694d48e9a01891f6485c696",
          },
        },
      ],
      developers: [
        {
          id: 43596,
          name: "Titan Forge Games",
          _id: {
            $oid: "6694d48e9a01891f6485c697",
          },
        },
      ],
      publishers: [
        {
          id: 3595,
          name: "Tencent Games",
          _id: {
            $oid: "6694d48e9a01891f6485c698",
          },
        },
        {
          id: 2499,
          name: "Hi-Rez Studios",
          _id: {
            $oid: "6694d48e9a01891f6485c699",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d48e9a01891f6485c69a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d48e9a01891f6485c69b",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d48e9a01891f6485c69c",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "smite",
    updatedAt: {
      $date: "2024-07-15T07:49:34.659Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9131",
    },
    status: "completed",
    name: "Starfield",
    playTime: 60,
    platform: "steam",
    lastPlay: "2023-09-18",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 6.7,
    createdAt: "2023-12-29T09:59:12.979Z",
    review:
      "Uzun bir süredir oyunu bekliyordum.  Rp yönünden güzel karşılasa da oyun mekanikleri büyük hayal kırıklığıydı. 2013 oyunu kadar zayıf mekanikleri var üstüne her yerde yükleme ekranı var bu can sıkıyor. Yine de bu oyunun gelişimine karşı büyük bir umudum var. En azından modlara karşı.",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co39vv.jpg",
    screenshotSize: 13,
    slug: "starfield",
    updatedAt: {
      $date: "2024-07-15T07:49:44.874Z",
    },
    igdb: {
      id: 96437,
      cover: {
        id: 152779,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co39vv.jpg",
        game: 96437,
      },
      aggregated_rating: 87.42857142857143,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4989a01891f6485c89a",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d4989a01891f6485c89b",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d4989a01891f6485c89c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d4989a01891f6485c89d",
          },
        },
      ],
      developers: [
        {
          id: 126,
          name: "Bethesda Game Studios",
          _id: {
            $oid: "6694d4989a01891f6485c89e",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694d4989a01891f6485c89f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d4989a01891f6485c8a0",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d4989a01891f6485c8a1",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4989a01891f6485c8a2",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d4989a01891f6485c8a3",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d4989a01891f6485c8a4",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d4989a01891f6485c8a5",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9132",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2023-09-06",
    review:
      "En iyi BF oyunudur. Oyunun yaşattığı atmosferi ile dünya savaşının içinde hissettiriyor. Hileciler olmasa 10 puanı hak eder",
    name: "Battlefield 1",
    createdAt: "2023-12-29T14:36:26.256Z",
    platform: "steam",
    rating: 8.3,
    status: "activePlaying",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2n9d.jpg",
    playTime: 67,
    screenshotSize: 6,
    slug: "battlefield-1",
    updatedAt: {
      $date: "2024-07-15T07:50:00.301Z",
    },
    igdb: {
      id: 18320,
      cover: {
        id: 123457,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2n9d.jpg",
        game: 18320,
      },
      aggregated_rating: 89.0952380952381,
      aggregated_rating_count: 27,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4a89a01891f6485caaf",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d4a89a01891f6485cab0",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d4a89a01891f6485cab1",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "6694d4a89a01891f6485cab2",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694d4a89a01891f6485cab3",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d4a89a01891f6485cab4",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d4a89a01891f6485cab5",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4a89a01891f6485cab6",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4a89a01891f6485cab7",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d4a89a01891f6485cab8",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9133",
    },
    playTime: 190,
    createdAt: "2023-12-29T14:38:23.823Z",
    status: "activePlaying",
    name: "Crusader Kings III",
    review:
      "Orta çağ avrupasında bir karakter ve hanedanı adeta rol yaparak oynattıran başarılı bir strateji oyunudur",
    rating: 7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2g3i.jpg",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    platform: "steam",
    lastPlay: "2023-08-25",
    igdb: {
      id: 124954,
      cover: {
        id: 114174,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2g3i.jpg",
        game: 124954,
      },
      aggregated_rating: 91.33333333333333,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4b79a01891f6485cccc",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d4b79a01891f6485cccd",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d4b79a01891f6485ccce",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d4b79a01891f6485cccf",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d4b79a01891f6485ccd0",
          },
        },
      ],
      developers: [
        {
          id: 7466,
          name: "Paradox Development Studio",
          _id: {
            $oid: "6694d4b79a01891f6485ccd1",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694d4b79a01891f6485ccd2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d4b79a01891f6485ccd3",
          },
        },
        {
          id: 5,
          name: "Text",
          _id: {
            $oid: "6694d4b79a01891f6485ccd4",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4b79a01891f6485ccd5",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d4b79a01891f6485ccd6",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d4b79a01891f6485ccd7",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "crusader-kings-iii",
    updatedAt: {
      $date: "2024-07-15T07:50:15.952Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9134",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 6.6,
    review: "Hikaye kısmı beni hiç sarmasa da online kısmı gayet keyifli",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2lbd.jpg",
    status: "completed",
    createdAt: "2023-12-29T15:30:07.714Z",
    platform: "epicGames",
    name: "Grand Theft Auto V",
    playTime: 205,
    lastPlay: "2023-08-20",
    screenshotSize: 19,
    slug: "grand-theft-auto-v",
    updatedAt: {
      $date: "2024-07-15T07:50:32.769Z",
    },
    igdb: {
      id: 1020,
      cover: {
        id: 120937,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2lbd.jpg",
        game: 1020,
      },
      aggregated_rating: 88.13793103448276,
      aggregated_rating_count: 37,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4c89a01891f6485cef7",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d4c89a01891f6485cef8",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d4c89a01891f6485cef9",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d4c89a01891f6485cefa",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694d4c89a01891f6485cefb",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d4c89a01891f6485cefc",
          },
        },
      ],
      developers: [
        {
          id: 365,
          name: "Rockstar North",
          _id: {
            $oid: "6694d4c89a01891f6485cefd",
          },
        },
      ],
      publishers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694d4c89a01891f6485cefe",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694d4c89a01891f6485ceff",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d4c89a01891f6485cf00",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d4c89a01891f6485cf01",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4c89a01891f6485cf02",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694d4c89a01891f6485cf03",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d4c89a01891f6485cf04",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d4c89a01891f6485cf05",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9135",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2023-08-12",
    platform: "steam",
    rating: 7.2,
    playTime: 68,
    name: "Age of Empires III: Definitive Edition",
    createdAt: "2023-12-29T14:41:22.444Z",
    review:
      "Beni saran tek age of empires serisi olmuştur. İlkel dönemleri nazaran yeni çağ dönemi daha çok ilgimi çekiyor. Oyundaki kart sistemini gerçekten beğeniyorum. Eski oyununa göre Definite Edition gerçekten başarılı",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2fin.jpg",
    status: "completed",
    igdb: {
      id: 55057,
      cover: {
        id: 113423,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2fin.jpg",
        game: 55057,
      },
      aggregated_rating: 80.75,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4d79a01891f6485d134",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d4d79a01891f6485d135",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d4d79a01891f6485d136",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694d4d79a01891f6485d137",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d4d79a01891f6485d138",
          },
        },
      ],
      developers: [
        {
          id: 1304,
          name: "Tantalus Media",
          _id: {
            $oid: "6694d4d79a01891f6485d139",
          },
        },
      ],
      publishers: [
        {
          id: 17966,
          name: "Xbox Game Studios",
          _id: {
            $oid: "6694d4d79a01891f6485d13a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d4d79a01891f6485d13b",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4d79a01891f6485d13c",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d4d79a01891f6485d13d",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "age-of-empires-iii-definitive-edition",
    updatedAt: {
      $date: "2024-07-15T07:50:47.008Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9136",
    },
    createdAt: "2023-12-29T15:37:23.798Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co28ha.jpg",
    platform: "torrent",
    review:
      "İlkel çağ da geçen ortalama seviyede bir oyun. Vahşi hayvanları kullanabilmek oyunun asıl keyifli kısmı",
    status: "completed",
    playTime: 16,
    rating: 5.6,
    lastPlay: "2023-08-12",
    name: "Far Cry: Primal",
    igdb: {
      id: 13182,
      cover: {
        id: 104302,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co28ha.jpg",
        game: 13182,
      },
      aggregated_rating: 76.15,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4e59a01891f6485d376",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d4e59a01891f6485d377",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d4e59a01891f6485d378",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694d4e59a01891f6485d379",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694d4e59a01891f6485d37a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d4e59a01891f6485d37b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4e59a01891f6485d37c",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d4e59a01891f6485d37d",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4e59a01891f6485d37e",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d4e59a01891f6485d37f",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "far-cry-primal",
    updatedAt: {
      $date: "2024-07-15T07:51:01.961Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9137",
    },
    platform: "epicGames",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xis.jpg",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    name: "Assassin's Creed Syndicate",
    review:
      "AC serisinin en underrated oyunudur. Yan görevleri çok başarılı. AC oyununlarında görülebilecek en fazla tarihsel karaktere sahip. Yeni nesil AC mekaniklerine temel atan oyundur.",
    status: "completed",
    createdAt: "2023-12-29T15:27:40.153Z",
    rating: 8.2,
    playTime: 30,
    lastPlay: "2023-08-11",
    screenshotSize: 10,
    slug: "assassins-creed-syndicate",
    updatedAt: {
      $date: "2024-07-15T07:51:12.014Z",
    },
    igdb: {
      id: 8263,
      cover: {
        id: 90100,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xis.jpg",
        game: 8263,
      },
      aggregated_rating: 72.15789473684211,
      aggregated_rating_count: 22,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4f09a01891f6485d5c2",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d4f09a01891f6485d5c3",
          },
        },
      ],
      developers: [
        {
          id: 15790,
          name: "Ubisoft Québec",
          _id: {
            $oid: "6694d4f09a01891f6485d5c4",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694d4f09a01891f6485d5c5",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d4f09a01891f6485d5c6",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4f09a01891f6485d5c7",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d4f09a01891f6485d5c8",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d4f09a01891f6485d5c9",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4f09a01891f6485d5ca",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d4f09a01891f6485d5cb",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d4f09a01891f6485d5cc",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9138",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2023-08-04",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xiq.jpg",
    createdAt: "2023-12-29T15:35:02.592Z",
    review:
      "Klasik AC serisinin son oyunudur. Oyundaki tapınakçılarla olan mücadele çok güzel anlatılıyor. Fransanın çeşitli dönemlerinde geçirdiğimiz o zamanlar çok güzeldi. Ama en güzel kısım Fransız devrimi kısımıydı. Oyundaki parkur sistemi serideki en iyisidir.",
    status: "completed",
    name: "Assassin's Creed Unity",
    playTime: 18,
    platform: "torrent",
    rating: 6.2,
    igdb: {
      id: 5606,
      cover: {
        id: 90098,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xiq.jpg",
        game: 5606,
      },
      aggregated_rating: 70.93333333333334,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d4f89a01891f6485d81a",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d4f89a01891f6485d81b",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d4f89a01891f6485d81c",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d4f89a01891f6485d81d",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d4f89a01891f6485d81e",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694d4f89a01891f6485d81f",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694d4f89a01891f6485d820",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d4f89a01891f6485d821",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d4f89a01891f6485d822",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d4f89a01891f6485d823",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d4f89a01891f6485d824",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d4f89a01891f6485d825",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d4f89a01891f6485d826",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "assassins-creed-unity",
    updatedAt: {
      $date: "2024-07-15T07:51:20.520Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9139",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co404r.jpg",
    createdAt: "2023-12-29T14:43:24.727Z",
    lastPlay: "2023-08-03",
    status: "completed",
    platform: "steam",
    rating: 4.3,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    playTime: 7,
    name: "Crysis 2 Remastered",
    review:
      "İlk oyuna göre mekanikler iyice geliştirilmiş fakat hikayesi daha da kötü olmuş",
    igdb: {
      id: 165126,
      cover: {
        id: 186795,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co404r.jpg",
        game: 165126,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5089a01891f6485da81",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d5089a01891f6485da82",
          },
        },
      ],
      developers: [
        {
          id: 249,
          name: "Crytek",
          _id: {
            $oid: "6694d5089a01891f6485da83",
          },
        },
        {
          id: 946,
          name: "Saber Interactive",
          _id: {
            $oid: "6694d5089a01891f6485da84",
          },
        },
      ],
      publishers: [
        {
          id: 249,
          name: "Crytek",
          _id: {
            $oid: "6694d5089a01891f6485da85",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d5089a01891f6485da86",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5089a01891f6485da87",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d5089a01891f6485da88",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "crysis-2-remastered",
    updatedAt: {
      $date: "2024-07-15T07:51:36.017Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a913a",
    },
    lastPlay: "2023-07-31",
    status: "completed",
    platform: "steam",
    createdAt: "2023-12-29T14:44:43.061Z",
    review:
      "Dönemine göre başarılı bir oyun fakat mekanikleri çok mükemmel diyemem",
    rating: 6.4,
    name: "Crysis Remastered",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2on5.jpg",
    playTime: 6,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    igdb: {
      id: 132164,
      cover: {
        id: 125249,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2on5.jpg",
        game: 132164,
      },
      aggregated_rating: 68.42857142857143,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5159a01891f6485dceb",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5159a01891f6485dcec",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d5159a01891f6485dced",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d5159a01891f6485dcee",
          },
        },
      ],
      developers: [
        {
          id: 249,
          name: "Crytek",
          _id: {
            $oid: "6694d5159a01891f6485dcef",
          },
        },
        {
          id: 946,
          name: "Saber Interactive",
          _id: {
            $oid: "6694d5159a01891f6485dcf0",
          },
        },
      ],
      publishers: [
        {
          id: 249,
          name: "Crytek",
          _id: {
            $oid: "6694d5159a01891f6485dcf1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d5159a01891f6485dcf2",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5159a01891f6485dcf3",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d5159a01891f6485dcf4",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d5159a01891f6485dcf5",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694d5159a01891f6485dcf6",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "crysis-remastered",
    updatedAt: {
      $date: "2024-07-15T07:51:49.179Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a913b",
    },
    createdAt: "2023-12-29T14:49:32.785Z",
    platform: "steam",
    review:
      "2B'ye olan hayranlığım bu oyuna beni başlattı. Oyun çok keyifli fakat oyun dizaynı çok berbat. Müzikleri ve Animasyonlarına hayranım",
    lastPlay: "2023-07-23",
    status: "completed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5pcj.jpg",
    playTime: 16,
    name: "NieR: Automata",
    rating: 7.9,
    screenshotSize: 10,
    slug: "nier-automata",
    updatedAt: {
      $date: "2024-07-15T07:52:01.472Z",
    },
    igdb: {
      id: 11208,
      cover: {
        id: 266131,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5pcj.jpg",
        game: 11208,
      },
      aggregated_rating: 85.72,
      aggregated_rating_count: 30,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5219a01891f6485df65",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d5219a01891f6485df66",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694d5219a01891f6485df67",
          },
        },
      ],
      developers: [
        {
          id: 852,
          name: "PlatinumGames",
          _id: {
            $oid: "6694d5219a01891f6485df68",
          },
        },
        {
          id: 53031,
          name: "Square Enix Business Division 6",
          _id: {
            $oid: "6694d5219a01891f6485df69",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694d5219a01891f6485df6a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d5219a01891f6485df6b",
          },
        },
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694d5219a01891f6485df6c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5219a01891f6485df6d",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d5219a01891f6485df6e",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d5219a01891f6485df6f",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694d5219a01891f6485df70",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d5219a01891f6485df71",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a913c",
    },
    createdAt: "2023-12-29T14:54:46.917Z",
    review:
      "Sneak ve Aim'lerin sözü geçtiği oyunda bu oyunun serisi çok keyifli oluyor. Üçüncü oyuna göre oyun daha zor olmuş fakat ben bunu gerçekçi ve başarılı buluyorum. Co-op sarıyor",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    playTime: 8,
    rating: 6,
    platform: "steam",
    lastPlay: "2023-07-22",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co24t8.jpg",
    name: "Sniper Elite 4",
    igdb: {
      id: 18366,
      cover: {
        id: 99548,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co24t8.jpg",
        game: 18366,
      },
      aggregated_rating: 76.21052631578948,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d52f9a01891f6485e1ed",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d52f9a01891f6485e1ee",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d52f9a01891f6485e1ef",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d52f9a01891f6485e1f0",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694d52f9a01891f6485e1f1",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d52f9a01891f6485e1f2",
          },
        },
      ],
      developers: [
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694d52f9a01891f6485e1f3",
          },
        },
      ],
      publishers: [
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694d52f9a01891f6485e1f4",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d52f9a01891f6485e1f5",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d52f9a01891f6485e1f6",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d52f9a01891f6485e1f7",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d52f9a01891f6485e1f8",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d52f9a01891f6485e1f9",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d52f9a01891f6485e1fa",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "sniper-elite-4",
    updatedAt: {
      $date: "2024-07-15T07:52:15.150Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a913d",
    },
    review:
      "Büyük umutlarla çıkıp şu an hüsrana uğrayan bir oyun. Oyun keyifli fakat 50 saat sonra oyun tekrara düşüyor ve sarmıyor. Modlar sayesinde ayakta duruyor. Oyunda diplomasi, hikaye ve diyaloglar yok denilecek seviyede ama buna rağmen oyun sarıyor. Bu dediklerim olsa çok tutulan bir oyun olur.",
    playTime: 300,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co24f2.jpg",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 7.3,
    createdAt: "2023-12-29T14:52:12.713Z",
    lastPlay: "2023-07-22",
    status: "completed",
    name: "Mount & Blade II: Bannerlord",
    platform: "steam",
    igdb: {
      id: 9608,
      cover: {
        id: 99038,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co24f2.jpg",
        game: 9608,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d53f9a01891f6485e484",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d53f9a01891f6485e485",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d53f9a01891f6485e486",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d53f9a01891f6485e487",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d53f9a01891f6485e488",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d53f9a01891f6485e489",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694d53f9a01891f6485e48a",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d53f9a01891f6485e48b",
          },
        },
      ],
      developers: [
        {
          id: 947,
          name: "Taleworlds",
          _id: {
            $oid: "6694d53f9a01891f6485e48c",
          },
        },
      ],
      publishers: [
        {
          id: 947,
          name: "Taleworlds",
          _id: {
            $oid: "6694d53f9a01891f6485e48d",
          },
        },
        {
          id: 34936,
          name: "Prime Matter",
          _id: {
            $oid: "6694d53f9a01891f6485e48e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d53f9a01891f6485e48f",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d53f9a01891f6485e490",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d53f9a01891f6485e491",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d53f9a01891f6485e492",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d53f9a01891f6485e493",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "mount-and-blade-ii-bannerlord",
    updatedAt: {
      $date: "2024-07-15T07:52:31.196Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a913e",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Oyun mekanikleri çok zayıf fakat buna rağmen co-op ile saran bir oyun",
    platform: "steam",
    name: "Sniper Elite III",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2e40.jpg",
    rating: 4,
    status: "completed",
    createdAt: "2023-12-29T14:56:27.462Z",
    lastPlay: "2023-07-10",
    playTime: 3,
    igdb: {
      id: 8366,
      cover: {
        id: 111600,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2e40.jpg",
        game: 8366,
      },
      aggregated_rating: 67.91666666666667,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d54a9a01891f6485e72d",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d54a9a01891f6485e72e",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d54a9a01891f6485e72f",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d54a9a01891f6485e730",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d54a9a01891f6485e731",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694d54a9a01891f6485e732",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d54a9a01891f6485e733",
          },
        },
      ],
      developers: [
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694d54a9a01891f6485e734",
          },
        },
      ],
      publishers: [
        {
          id: 445,
          name: "505 Games",
          _id: {
            $oid: "6694d54a9a01891f6485e735",
          },
        },
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694d54a9a01891f6485e736",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d54a9a01891f6485e737",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d54a9a01891f6485e738",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d54a9a01891f6485e739",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d54a9a01891f6485e73a",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d54a9a01891f6485e73b",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d54a9a01891f6485e73c",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "sniper-elite-iii",
    updatedAt: {
      $date: "2024-07-15T07:52:42.067Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a913f",
    },
    review: "Oyun mekanikleri orta seviyede fakat hikayesi iyi sayılmaz.",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rbu.jpg",
    name: "Tomb Raider",
    playTime: 11,
    lastPlay: "2023-07-10",
    status: "completed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    createdAt: "2023-12-29T14:57:46.749Z",
    rating: 6,
    platform: "steam",
    igdb: {
      id: 1164,
      cover: {
        id: 82074,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rbu.jpg",
        game: 1164,
      },
      aggregated_rating: 84.64285714285714,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5629a01891f6485e9e6",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5629a01891f6485e9e7",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d5629a01891f6485e9e8",
          },
        },
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694d5629a01891f6485e9e9",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694d5629a01891f6485e9ea",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d5629a01891f6485e9eb",
          },
        },
      ],
      developers: [
        {
          id: 552,
          name: "Crystal Dynamics",
          _id: {
            $oid: "6694d5629a01891f6485e9ec",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694d5629a01891f6485e9ed",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694d5629a01891f6485e9ee",
          },
        },
        {
          id: 552,
          name: "Crystal Dynamics",
          _id: {
            $oid: "6694d5629a01891f6485e9ef",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d5629a01891f6485e9f0",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5629a01891f6485e9f1",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d5629a01891f6485e9f2",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d5629a01891f6485e9f3",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "tomb-raider",
    updatedAt: {
      $date: "2024-07-15T07:53:06.674Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9140",
    },
    status: "completed",
    review:
      "2 boyutlu oyunlar arasında en başarılı bir oyundur. Co-op daha çok saran bir oyundur. Oyundan sıkıldığınızda mod kurup oyunu defalarca oynayabilirsiniz.",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    name: "Terraria",
    lastPlay: "2023-07-05",
    playTime: 207,
    platform: "steam",
    createdAt: "2023-12-29T15:00:02.035Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rbo.jpg",
    rating: 8.1,
    igdb: {
      id: 1879,
      cover: {
        id: 82068,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rbo.jpg",
        game: 1879,
      },
      aggregated_rating: 81,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5769a01891f6485ecab",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5769a01891f6485ecac",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d5769a01891f6485ecad",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694d5769a01891f6485ecae",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d5769a01891f6485ecaf",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d5769a01891f6485ecb0",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d5769a01891f6485ecb1",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d5769a01891f6485ecb2",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d5769a01891f6485ecb3",
          },
        },
      ],
      developers: [
        {
          id: 910,
          name: "Re-Logic",
          _id: {
            $oid: "6694d5769a01891f6485ecb4",
          },
        },
      ],
      publishers: [
        {
          id: 3010,
          name: "Headup Games",
          _id: {
            $oid: "6694d5769a01891f6485ecb5",
          },
        },
        {
          id: 910,
          name: "Re-Logic",
          _id: {
            $oid: "6694d5769a01891f6485ecb6",
          },
        },
        {
          id: 445,
          name: "505 Games",
          _id: {
            $oid: "6694d5769a01891f6485ecb7",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694d5769a01891f6485ecb8",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5769a01891f6485ecb9",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d5769a01891f6485ecba",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d5769a01891f6485ecbb",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694d5769a01891f6485ecbc",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d5769a01891f6485ecbd",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d5769a01891f6485ecbe",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d5769a01891f6485ecbf",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "terraria",
    updatedAt: {
      $date: "2024-07-15T07:53:26.437Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9141",
    },
    name: "The Elder Scrolls V: Skyrim - Special Edition",
    playTime: 410,
    review:
      "Başarılı bir RPG olan Skyrim her konuda bizim gönlümüzü fethetti. Müzikleri, atmosferi, hikayesi ve bir çok şey. Oyun dünyasında en büyük ve en kaliteli mod topluluğuna sahiptir. 2011 oyunu olsa bile modlama ile oyunu 2023'e çevirebillirsiniz. Tek eksi yanı oyun fazla bug'lı",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    platform: "steam",
    createdAt: "2023-12-29T15:03:49.706Z",
    lastPlay: "2023-03-30",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1vco.jpg",
    rating: 9.5,
    igdb: {
      id: 19457,
      cover: {
        id: 87288,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1vco.jpg",
        game: 19457,
      },
      aggregated_rating: 81.6842105263158,
      aggregated_rating_count: 21,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5859a01891f6485ef8c",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d5859a01891f6485ef8d",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d5859a01891f6485ef8e",
          },
        },
      ],
      developers: [
        {
          id: 126,
          name: "Bethesda Game Studios",
          _id: {
            $oid: "6694d5859a01891f6485ef8f",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694d5859a01891f6485ef90",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d5859a01891f6485ef91",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d5859a01891f6485ef92",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5859a01891f6485ef93",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d5859a01891f6485ef94",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d5859a01891f6485ef95",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d5859a01891f6485ef96",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d5859a01891f6485ef97",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "the-elder-scrolls-v-skyrim-special-edition",
    updatedAt: {
      $date: "2024-07-15T07:53:41.617Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9142",
    },
    playTime: 3,
    lastPlay: "2023-03-22",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "abandoned",
    rating: 6,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co214k.jpg",
    review:
      "Total War serisinde kılıç baltadan sıkılınca şifa gibi gelecek bir oyun. Oyunun fazla eski oluşu oynanılışı kısa tutuyor en azından arayüzü iyi olsaydı daha güzel olurdu.",
    platform: "steam",
    createdAt: "2023-12-29T15:05:21.659Z",
    name: "Empire: Total War",
    igdb: {
      id: 441,
      cover: {
        id: 94772,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co214k.jpg",
        game: 441,
      },
      aggregated_rating: 89.83333333333333,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5959a01891f6485f270",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5959a01891f6485f271",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d5959a01891f6485f272",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694d5959a01891f6485f273",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d5959a01891f6485f274",
          },
        },
        {
          id: 16,
          name: "Turn-based strategy (TBS)",
          _id: {
            $oid: "6694d5959a01891f6485f275",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694d5959a01891f6485f276",
          },
        },
      ],
      developers: [
        {
          id: 111,
          name: "The Creative Assembly",
          _id: {
            $oid: "6694d5959a01891f6485f277",
          },
        },
      ],
      publishers: [
        {
          id: 112,
          name: "Sega",
          _id: {
            $oid: "6694d5959a01891f6485f278",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694d5959a01891f6485f279",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d5959a01891f6485f27a",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d5959a01891f6485f27b",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d5959a01891f6485f27c",
          },
        },
        {
          id: 41,
          name: "4X (explore, expand, exploit, and exterminate)",
          _id: {
            $oid: "6694d5959a01891f6485f27d",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "empire-total-war",
    updatedAt: {
      $date: "2024-07-15T07:53:57.171Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9143",
    },
    rating: 5.6,
    playTime: 3,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review: "Rome 2 mekaniklerine sahip fakat Rome 2 kadar beni sarmadı",
    createdAt: "2023-12-29T15:07:52.485Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2rpx.jpg",
    name: "Total War: Attila",
    status: "abandoned",
    platform: "steam",
    lastPlay: "2023-03-19",
    igdb: {
      id: 8200,
      cover: {
        id: 129237,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2rpx.jpg",
        game: 8200,
      },
      aggregated_rating: 76.8,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5a09a01891f6485f564",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5a09a01891f6485f565",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d5a09a01891f6485f566",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694d5a09a01891f6485f567",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d5a09a01891f6485f568",
          },
        },
        {
          id: 16,
          name: "Turn-based strategy (TBS)",
          _id: {
            $oid: "6694d5a09a01891f6485f569",
          },
        },
      ],
      developers: [
        {
          id: 111,
          name: "The Creative Assembly",
          _id: {
            $oid: "6694d5a09a01891f6485f56a",
          },
        },
      ],
      publishers: [
        {
          id: 112,
          name: "Sega",
          _id: {
            $oid: "6694d5a09a01891f6485f56b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d5a09a01891f6485f56c",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d5a09a01891f6485f56d",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d5a09a01891f6485f56e",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d5a09a01891f6485f56f",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "total-war-attila",
    updatedAt: {
      $date: "2024-07-15T07:54:08.968Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9144",
    },
    createdAt: "2023-12-29T15:11:49.025Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1qp1.jpg",
    playTime: 20,
    platform: "steam",
    lastPlay: "2023-02-28",
    status: "toBeCompleted",
    review:
      "Zorluk isteyenler için bir oyundur. Oyun çeşitli part'lara bölünmüş ve her bir part'ı başarılı bir şekilde geçmeniz bekleniyor. Eğer ölürseniz save siliniyor. Oyundaki silah düzenleme ve perk sistemini sevdim.",
    rating: 5,
    name: "Noita",
    igdb: {
      id: 52006,
      cover: {
        id: 81253,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1qp1.jpg",
        game: 52006,
      },
      aggregated_rating: 80.5,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5a99a01891f6485f862",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d5a99a01891f6485f863",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d5a99a01891f6485f864",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d5a99a01891f6485f865",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d5a99a01891f6485f866",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d5a99a01891f6485f867",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694d5a99a01891f6485f868",
          },
        },
      ],
      developers: [
        {
          id: 13174,
          name: "Nolla Games",
          _id: {
            $oid: "6694d5a99a01891f6485f869",
          },
        },
      ],
      publishers: [
        {
          id: 13174,
          name: "Nolla Games",
          _id: {
            $oid: "6694d5a99a01891f6485f86a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694d5a99a01891f6485f86b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5a99a01891f6485f86c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d5a99a01891f6485f86d",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d5a99a01891f6485f86e",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "noita",
    updatedAt: {
      $date: "2024-07-15T07:54:17.513Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9145",
    },
    lastPlay: "2023-02-11",
    rating: 7,
    status: "completed",
    name: "Left 4 Dead 2",
    playTime: 200,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1y2f.jpg",
    createdAt: "2023-12-29T15:13:23.568Z",
    platform: "steam",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Lise hayatımı çalan bir oyun oldu. Steam hesabımdan çok internet kafede oynamışlığım vardır. Arkadaşlarla çok saran bir oyun",
    igdb: {
      id: 124,
      cover: {
        id: 90807,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1y2f.jpg",
        game: 124,
      },
      aggregated_rating: 88.6,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5b29a01891f6485fb6e",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5b29a01891f6485fb6f",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d5b29a01891f6485fb70",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d5b29a01891f6485fb71",
          },
        },
      ],
      developers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694d5b29a01891f6485fb72",
          },
        },
        {
          id: 55,
          name: "Turtle Rock Studios",
          _id: {
            $oid: "6694d5b29a01891f6485fb73",
          },
        },
      ],
      publishers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694d5b29a01891f6485fb74",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d5b29a01891f6485fb75",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5b29a01891f6485fb76",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694d5b29a01891f6485fb77",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d5b29a01891f6485fb78",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "left-4-dead-2",
    updatedAt: {
      $date: "2024-07-15T07:54:26.872Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9146",
    },
    review: "Harika bir FPS oyunu",
    createdAt: "2024-01-01T14:32:51.506Z",
    name: "Battlefield 4",
    rating: 7,
    platform: "steam",
    playTime: 77,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    lastPlay: "2022-12-13",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1nmf.jpg",
    igdb: {
      id: 1979,
      cover: {
        id: 77271,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1nmf.jpg",
        game: 1979,
      },
      aggregated_rating: 80.27777777777777,
      aggregated_rating_count: 21,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5be9a01891f6485fe83",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5be9a01891f6485fe84",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d5be9a01891f6485fe85",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "6694d5be9a01891f6485fe86",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694d5be9a01891f6485fe87",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d5be9a01891f6485fe88",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d5be9a01891f6485fe89",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5be9a01891f6485fe8a",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d5be9a01891f6485fe8b",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "battlefield-4",
    updatedAt: {
      $date: "2024-07-15T07:54:38.938Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9147",
    },
    platform: "steam",
    rating: 5,
    name: "Starbound",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2022-12-07",
    status: "abandoned",
    review: "Ortalama seviyede iyi oyun",
    createdAt: "2024-01-01T14:34:01.960Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4b19.jpg",
    playTime: 4,
    igdb: {
      id: 3019,
      cover: {
        id: 200925,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4b19.jpg",
        game: 3019,
      },
      aggregated_rating: 87.4,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5cc9a01891f6486019f",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5cc9a01891f648601a0",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d5cc9a01891f648601a1",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694d5cc9a01891f648601a2",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d5cc9a01891f648601a3",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d5cc9a01891f648601a4",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d5cc9a01891f648601a5",
          },
        },
      ],
      developers: [
        {
          id: 1418,
          name: "Chucklefish Games",
          _id: {
            $oid: "6694d5cc9a01891f648601a6",
          },
        },
      ],
      publishers: [
        {
          id: 1418,
          name: "Chucklefish Games",
          _id: {
            $oid: "6694d5cc9a01891f648601a7",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694d5cc9a01891f648601a8",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5cc9a01891f648601a9",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d5cc9a01891f648601aa",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d5cc9a01891f648601ab",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "starbound",
    updatedAt: {
      $date: "2024-07-15T07:54:52.489Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9148",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20x5.jpg",
    lastPlay: "2022-12-03",
    review:
      "Survival açıdan iyi olsa da yıllardır gelişme alan bu oyun çok da başarılı değil. Bir yerden sonra yapacak bir şeyiniz kalmıyor.",
    name: "The Forest",
    rating: 4.2,
    platform: "steam",
    playTime: 8,
    createdAt: "2024-01-01T14:36:05.884Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    igdb: {
      id: 7504,
      cover: {
        id: 94505,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20x5.jpg",
        game: 7504,
      },
      aggregated_rating: 86,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5d89a01891f648604cc",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5d89a01891f648604cd",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d5d89a01891f648604ce",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694d5d89a01891f648604cf",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d5d89a01891f648604d0",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d5d89a01891f648604d1",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d5d89a01891f648604d2",
          },
        },
      ],
      developers: [
        {
          id: 3108,
          name: "Endnight Games Ltd",
          _id: {
            $oid: "6694d5d89a01891f648604d3",
          },
        },
      ],
      publishers: [
        {
          id: 3108,
          name: "Endnight Games Ltd",
          _id: {
            $oid: "6694d5d89a01891f648604d4",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d5d89a01891f648604d5",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694d5d89a01891f648604d6",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5d89a01891f648604d7",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694d5d89a01891f648604d8",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d5d89a01891f648604d9",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d5d89a01891f648604da",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "the-forest",
    updatedAt: {
      $date: "2024-07-15T07:55:04.154Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9149",
    },
    playTime: 2,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2022-09-06",
    createdAt: "2024-01-01T14:37:32.434Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rbq.jpg",
    review: "Oyun ilk başlar beni cezbetse de benlik olmadığını analdım",
    status: "abandoned",
    name: "Age of Wonders III",
    rating: 4,
    platform: "steam",
    igdb: {
      id: 5652,
      cover: {
        id: 82070,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rbq.jpg",
        game: 5652,
      },
      aggregated_rating: 79.6,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5e59a01891f6486080a",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d5e59a01891f6486080b",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d5e59a01891f6486080c",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d5e59a01891f6486080d",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d5e59a01891f6486080e",
          },
        },
        {
          id: 16,
          name: "Turn-based strategy (TBS)",
          _id: {
            $oid: "6694d5e59a01891f6486080f",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694d5e59a01891f64860810",
          },
        },
      ],
      developers: [
        {
          id: 331,
          name: "Triumph Studios",
          _id: {
            $oid: "6694d5e59a01891f64860811",
          },
        },
      ],
      publishers: [
        {
          id: 331,
          name: "Triumph Studios",
          _id: {
            $oid: "6694d5e59a01891f64860812",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d5e59a01891f64860813",
          },
        },
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d5e59a01891f64860814",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d5e59a01891f64860815",
          },
        },
        {
          id: 41,
          name: "4X (explore, expand, exploit, and exterminate)",
          _id: {
            $oid: "6694d5e59a01891f64860816",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "age-of-wonders-iii",
    updatedAt: {
      $date: "2024-07-15T07:55:17.459Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a914a",
    },
    name: "Prototype 2",
    review:
      "İlk oyuna ne kadar hayran olsam da bu oyun ilki kadar tatmin etmedi. Hikayesinden ötürü prototype serisinin bitişine sebep oldu.",
    rating: 6.4,
    createdAt: "2024-01-01T14:38:58.965Z",
    platform: "steam",
    playTime: 13,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2022-08-30",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20jt.jpg",
    status: "completed",
    igdb: {
      id: 2988,
      cover: {
        id: 94025,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20jt.jpg",
        game: 2988,
      },
      aggregated_rating: 77.1,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d5ff9a01891f64860b53",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694d5ff9a01891f64860b54",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694d5ff9a01891f64860b55",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d5ff9a01891f64860b56",
          },
        },
      ],
      developers: [
        {
          id: 444,
          name: "Radical Entertainment",
          _id: {
            $oid: "6694d5ff9a01891f64860b57",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694d5ff9a01891f64860b58",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d5ff9a01891f64860b59",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d5ff9a01891f64860b5a",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d5ff9a01891f64860b5b",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694d5ff9a01891f64860b5c",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d5ff9a01891f64860b5d",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d5ff9a01891f64860b5e",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d5ff9a01891f64860b5f",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "prototype-2",
    updatedAt: {
      $date: "2024-07-15T07:55:43.702Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a914b",
    },
    rating: 8.2,
    lastPlay: "2022-08-26",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    playTime: 10,
    review:
      "Çocukluğumun oyunlarından birisidir. Belki de internet kafe'de saatlerce oynamışımdır kim bilir. Oyunun hikayesi iyi olsa da asıl zevki oynanılışındaydı.",
    platform: "steam",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1ql2.jpg",
    name: "Prototype",
    createdAt: "2024-01-01T14:41:07.484Z",
    igdb: {
      id: 570,
      cover: {
        id: 81110,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1ql2.jpg",
        game: 570,
      },
      aggregated_rating: 78.375,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d61b9a01891f64860ea9",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694d61b9a01891f64860eaa",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694d61b9a01891f64860eab",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d61b9a01891f64860eac",
          },
        },
      ],
      developers: [
        {
          id: 444,
          name: "Radical Entertainment",
          _id: {
            $oid: "6694d61b9a01891f64860ead",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694d61b9a01891f64860eae",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d61b9a01891f64860eaf",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d61b9a01891f64860eb0",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694d61b9a01891f64860eb1",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d61b9a01891f64860eb2",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d61b9a01891f64860eb3",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d61b9a01891f64860eb4",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d61b9a01891f64860eb5",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "prototype",
    updatedAt: {
      $date: "2024-07-15T07:56:11.588Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a914c",
    },
    review:
      "Total War Serisindeki en sevdiğim oyundur. Antik Roma dönemine olan ilgimle bu oyun beni daha çok cezbetti. Başarılı bir strateji oyunudur.",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1qs5.jpg",
    playTime: 171.5,
    name: "Total War: Rome II",
    lastPlay: {
      $date: "2024-05-12T00:00:00.000Z",
    },
    rating: 8,
    status: "completed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    createdAt: "2024-01-01T14:42:47.220Z",
    platform: "steam",
    screenshotSize: 0,
    slug: "total-war-rome-ii",
    updatedAt: {
      $date: "2024-07-14T21:18:39.621Z",
    },
    __v: 1,
    igdb: {
      id: 2359,
      cover: {
        id: 81365,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1qs5.jpg",
        game: 2359,
      },
      aggregated_rating: 71.9090909090909,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "669440af0ecc09533ae9fa7c",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "669440af0ecc09533ae9fa7d",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "669440af0ecc09533ae9fa7e",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "669440af0ecc09533ae9fa7f",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "669440af0ecc09533ae9fa80",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "669440af0ecc09533ae9fa81",
          },
        },
        {
          id: 16,
          name: "Turn-based strategy (TBS)",
          _id: {
            $oid: "669440af0ecc09533ae9fa82",
          },
        },
      ],
      developers: [
        {
          id: 111,
          name: "The Creative Assembly",
          _id: {
            $oid: "669440af0ecc09533ae9fa83",
          },
        },
      ],
      publishers: [
        {
          id: 112,
          name: "Sega",
          _id: {
            $oid: "669440af0ecc09533ae9fa84",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "669440af0ecc09533ae9fa85",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "669440af0ecc09533ae9fa86",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a914d",
    },
    status: "abandoned",
    createdAt: "2024-01-01T14:43:46.777Z",
    name: "Feign",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3vyk.jpg",
    review: "İlk defa bir oyun oynarken uyuya kaldım.",
    playTime: 2,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2022-07-02",
    rating: 0,
    platform: "steam",
    igdb: {
      id: 172516,
      cover: {
        id: 181388,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3vyk.jpg",
        game: 172516,
      },
      game_modes: [
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d81f9a01891f6486120c",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d81f9a01891f6486120d",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d81f9a01891f6486120e",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d81f9a01891f6486120f",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d81f9a01891f64861210",
          },
        },
      ],
      developers: [
        {
          id: 37839,
          name: "Teneke Kafalar Studios",
          _id: {
            $oid: "6694d81f9a01891f64861211",
          },
        },
      ],
      publishers: [
        {
          id: 37839,
          name: "Teneke Kafalar Studios",
          _id: {
            $oid: "6694d81f9a01891f64861212",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d81f9a01891f64861213",
          },
        },
      ],
      themes: [
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d81f9a01891f64861214",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694d81f9a01891f64861215",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "feign",
    updatedAt: {
      $date: "2024-07-15T08:04:47.632Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a914e",
    },
    platform: "steam",
    createdAt: "2024-01-01T14:45:30.687Z",
    name: "Pummel Party",
    lastPlay: "2022-06-27",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20uq.jpg",
    rating: 6,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Çocukken oynadığımız kızma birader gibi oyunların mini-oyunlarlar beraber dijitale dökülmüş haline benzer. Arkadaşlarla beraber zevkli bir oyun.",
    status: "completed",
    playTime: 3,
    igdb: {
      id: 105322,
      cover: {
        id: 94418,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20uq.jpg",
        game: 105322,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d8309a01891f64861576",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d8309a01891f64861577",
          },
        },
      ],
      genres: [
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d8309a01891f64861578",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694d8309a01891f64861579",
          },
        },
        {
          id: 35,
          name: "Card & Board Game",
          _id: {
            $oid: "6694d8309a01891f6486157a",
          },
        },
      ],
      developers: [
        {
          id: 24695,
          name: "Rebuilt Games",
          _id: {
            $oid: "6694d8309a01891f6486157b",
          },
        },
      ],
      publishers: [
        {
          id: 24695,
          name: "Rebuilt Games",
          _id: {
            $oid: "6694d8309a01891f6486157c",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d8309a01891f6486157d",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d8309a01891f6486157e",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694d8309a01891f6486157f",
          },
        },
        {
          id: 40,
          name: "Party",
          _id: {
            $oid: "6694d8309a01891f64861580",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "pummel-party",
    updatedAt: {
      $date: "2024-07-15T08:05:04.390Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a914f",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 4.7,
    name: "Age of Empires II: Definitive Edition",
    platform: "steam",
    playTime: 4,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1n24.jpg",
    createdAt: "2024-01-01T14:46:50.901Z",
    lastPlay: "2022-04-25",
    review:
      "Başarılı bir strateji oyunu da olsa benlik değil. 3 her zaman favorim olmuştur.",
    status: "abandoned",
    igdb: {
      id: 55056,
      cover: {
        id: 76540,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1n24.jpg",
        game: 55056,
      },
      aggregated_rating: 77.66666666666667,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9459a01891f648618ec",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9459a01891f648618ed",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d9459a01891f648618ee",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694d9459a01891f648618ef",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d9459a01891f648618f0",
          },
        },
      ],
      developers: [
        {
          id: 6019,
          name: "Forgotten Empires LLC",
          _id: {
            $oid: "6694d9459a01891f648618f1",
          },
        },
        {
          id: 1304,
          name: "Tantalus Media",
          _id: {
            $oid: "6694d9459a01891f648618f2",
          },
        },
        {
          id: 2084,
          name: "Wicked Witch Software",
          _id: {
            $oid: "6694d9459a01891f648618f3",
          },
        },
      ],
      publishers: [
        {
          id: 17966,
          name: "Xbox Game Studios",
          _id: {
            $oid: "6694d9459a01891f648618f4",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d9459a01891f648618f5",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d9459a01891f648618f6",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d9459a01891f648618f7",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "age-of-empires-ii-definitive-edition",
    updatedAt: {
      $date: "2024-07-15T08:09:41.945Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9150",
    },
    lastPlay: "2022-04-09",
    platform: "steam",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xy6.jpg",
    rating: 6,
    name: "Age of Empires III",
    review:
      "Favori age of empires oyunumdur fakat definite edition daha başarılıdır.",
    createdAt: "2024-01-01T14:48:20.429Z",
    playTime: 150,
    status: "completed",
    igdb: {
      id: 299,
      cover: {
        id: 90654,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xy6.jpg",
        game: 299,
      },
      aggregated_rating: 78.25,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9529a01891f64861c6f",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9529a01891f64861c70",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694d9529a01891f64861c71",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d9529a01891f64861c72",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d9529a01891f64861c73",
          },
        },
      ],
      developers: [
        {
          id: 68,
          name: "Ensemble Studios",
          _id: {
            $oid: "6694d9529a01891f64861c74",
          },
        },
      ],
      publishers: [
        {
          id: 132,
          name: "Destineer",
          _id: {
            $oid: "6694d9529a01891f64861c75",
          },
        },
        {
          id: 53,
          name: "Microsoft Game Studios",
          _id: {
            $oid: "6694d9529a01891f64861c76",
          },
        },
        {
          id: 130,
          name: "MacSoft Games",
          _id: {
            $oid: "6694d9529a01891f64861c77",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d9529a01891f64861c78",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d9529a01891f64861c79",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d9529a01891f64861c7a",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d9529a01891f64861c7b",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "age-of-empires-iii",
    updatedAt: {
      $date: "2024-07-15T08:09:54.630Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9151",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review:
      "Keşifin, Bulmacanın ve aksiyonun buluştuğu bağımsız bir oyun için çok başarılıdır. Oyundaki npc diyaloglarına hayrran kalmışımdır.",
    platform: "steam",
    createdAt: "2024-01-01T14:50:24.206Z",
    status: "completed",
    rating: 8,
    name: "Supraland",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2yys.jpg",
    playTime: 31,
    lastPlay: "2022-02-24",
    screenshotSize: 8,
    slug: "supraland",
    updatedAt: {
      $date: "2024-07-15T08:10:05.757Z",
    },
    igdb: {
      id: 89354,
      cover: {
        id: 138628,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2yys.jpg",
        game: 89354,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d95d9a01891f64862000",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694d95d9a01891f64862001",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694d95d9a01891f64862002",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d95d9a01891f64862003",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d95d9a01891f64862004",
          },
        },
      ],
      developers: [
        {
          id: 5119,
          name: "Supra Games UG",
          _id: {
            $oid: "6694d95d9a01891f64862005",
          },
        },
      ],
      publishers: [
        {
          id: 26341,
          name: "Humble Games",
          _id: {
            $oid: "6694d95d9a01891f64862006",
          },
        },
        {
          id: 5119,
          name: "Supra Games UG",
          _id: {
            $oid: "6694d95d9a01891f64862007",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d95d9a01891f64862008",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d95d9a01891f64862009",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694d95d9a01891f6486200a",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d95d9a01891f6486200b",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9152",
    },
    createdAt: "2024-01-01T14:51:23.861Z",
    platform: "steam",
    review: "Sandbox oyunu fazla bir şey beklemeye gerek yok",
    playTime: 20,
    status: "completed",
    rating: 5,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2022-02-14",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1mxa.jpg",
    name: "Garry's Mod",
    igdb: {
      id: 3278,
      cover: {
        id: 76366,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1mxa.jpg",
        game: 3278,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9689a01891f6486239c",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9689a01891f6486239d",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d9689a01891f6486239e",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d9689a01891f6486239f",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d9689a01891f648623a0",
          },
        },
      ],
      developers: [
        {
          id: 1715,
          name: "Facepunch Studios",
          _id: {
            $oid: "6694d9689a01891f648623a1",
          },
        },
      ],
      publishers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694d9689a01891f648623a2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d9689a01891f648623a3",
          },
        },
      ],
      themes: [
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d9689a01891f648623a4",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "garrys-mod",
    updatedAt: {
      $date: "2024-07-15T08:10:16.856Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9153",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 5.1,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2rg5.jpg",
    platform: "steam",
    createdAt: "2024-01-01T14:52:46.924Z",
    status: "abandoned",
    review: "Beklediğimden güzel bir indie oyundu",
    playTime: 2,
    name: "Strangers of the Power 2",
    lastPlay: "2021-11-09",
    igdb: {
      id: 97272,
      cover: {
        id: 128885,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2rg5.jpg",
        game: 97272,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9799a01891f6486273e",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9799a01891f6486273f",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d9799a01891f64862740",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d9799a01891f64862741",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d9799a01891f64862742",
          },
        },
      ],
      developers: [],
      publishers: [],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "strangers-of-the-power-2",
    updatedAt: {
      $date: "2024-07-15T08:10:33.570Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9154",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    platform: "steam",
    rating: 3,
    status: "abandoned",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1zs1.jpg",
    lastPlay: "2020-11-11",
    review: "Arayüzü kötü ve oyun geliştirilmeye terk edilmişti",
    name: "Victoria II",
    createdAt: "2024-01-01T14:54:41.874Z",
    playTime: 2,
    igdb: {
      id: 11037,
      cover: {
        id: 93025,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1zs1.jpg",
        game: 11037,
      },
      aggregated_rating: 76,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9829a01891f64862ae1",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9829a01891f64862ae2",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694d9829a01891f64862ae3",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d9829a01891f64862ae4",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d9829a01891f64862ae5",
          },
        },
      ],
      developers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694d9829a01891f64862ae6",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694d9829a01891f64862ae7",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d9829a01891f64862ae8",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694d9829a01891f64862ae9",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d9829a01891f64862aea",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "victoria-ii",
    updatedAt: {
      $date: "2024-07-15T08:10:42.790Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9155",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 4.3,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1my1.jpg",
    createdAt: "2024-01-01T14:55:50.013Z",
    lastPlay: "2020-11-09",
    platform: "steam",
    review: "Takip etmesi fazla yoran bir strateji oyunu",
    name: "Company of Heroes 2",
    playTime: 36,
    status: "completed",
    igdb: {
      id: 1369,
      cover: {
        id: 76393,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1my1.jpg",
        game: 1369,
      },
      aggregated_rating: 77.72727272727273,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d98f9a01891f64862e93",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d98f9a01891f64862e94",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d98f9a01891f64862e95",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694d98f9a01891f64862e96",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d98f9a01891f64862e97",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d98f9a01891f64862e98",
          },
        },
      ],
      developers: [
        {
          id: 196,
          name: "Relic Entertainment",
          _id: {
            $oid: "6694d98f9a01891f64862e99",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694d98f9a01891f64862e9a",
          },
        },
      ],
      publishers: [
        {
          id: 112,
          name: "Sega",
          _id: {
            $oid: "6694d98f9a01891f64862e9b",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694d98f9a01891f64862e9c",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d98f9a01891f64862e9d",
          },
        },
      ],
      themes: [
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d98f9a01891f64862e9e",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "company-of-heroes-2",
    updatedAt: {
      $date: "2024-07-15T08:10:55.826Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9156",
    },
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2lbv.jpg",
    createdAt: "2024-01-01T14:57:19.327Z",
    playTime: 42,
    lastPlay: "2020-11-02",
    platform: "steam",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 7.3,
    name: "Grand Theft Auto IV",
    review:
      "Hikayesi, karakteri, oynanılışı gerçekten başarılı bir GTA oyunu öyle bir etkiledi ki 5'de bu zevki alamadım",
    igdb: {
      id: 731,
      cover: {
        id: 120955,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2lbv.jpg",
        game: 731,
      },
      aggregated_rating: 88.125,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d99d9a01891f64863253",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d99d9a01891f64863254",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d99d9a01891f64863255",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694d99d9a01891f64863256",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d99d9a01891f64863257",
          },
        },
      ],
      developers: [
        {
          id: 365,
          name: "Rockstar North",
          _id: {
            $oid: "6694d99d9a01891f64863258",
          },
        },
        {
          id: 306,
          name: "Rockstar Toronto",
          _id: {
            $oid: "6694d99d9a01891f64863259",
          },
        },
      ],
      publishers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694d99d9a01891f6486325a",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694d99d9a01891f6486325b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d99d9a01891f6486325c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d99d9a01891f6486325d",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694d99d9a01891f6486325e",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "grand-theft-auto-iv",
    updatedAt: {
      $date: "2024-07-15T08:11:09.248Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9157",
    },
    review: "Bulmacaları oldukça keyifli özellikle co op modu zevkli",
    lastPlay: "2020-08-10",
    status: "completed",
    rating: 7.2,
    playTime: 16,
    createdAt: "2024-01-01T14:58:37.628Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rs4.jpg",
    name: "Portal 2",
    platform: "steam",
    igdb: {
      id: 72,
      cover: {
        id: 82660,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rs4.jpg",
        game: 72,
      },
      aggregated_rating: 92.44444444444444,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9ae9a01891f6486362f",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9ae9a01891f64863630",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d9ae9a01891f64863631",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694d9ae9a01891f64863632",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d9ae9a01891f64863633",
          },
        },
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694d9ae9a01891f64863634",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694d9ae9a01891f64863635",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d9ae9a01891f64863636",
          },
        },
      ],
      developers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694d9ae9a01891f64863637",
          },
        },
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694d9ae9a01891f64863638",
          },
        },
      ],
      publishers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694d9ae9a01891f64863639",
          },
        },
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694d9ae9a01891f6486363a",
          },
        },
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694d9ae9a01891f6486363b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d9ae9a01891f6486363c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d9ae9a01891f6486363d",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694d9ae9a01891f6486363e",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694d9ae9a01891f6486363f",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "portal-2",
    updatedAt: {
      $date: "2024-07-15T08:11:26.086Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9158",
    },
    rating: 5.5,
    review:
      "Çok fazla eski geldiğinden oyunu pek sevmedim ama kaliteli bir oyun",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1mwa.jpg",
    status: "abandoned",
    platform: "steam",
    lastPlay: "2020-05-07",
    name: "Crusader Kings II",
    createdAt: "2024-01-01T15:02:18.291Z",
    playTime: 2,
    igdb: {
      id: 2918,
      cover: {
        id: 76330,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1mwa.jpg",
        game: 2918,
      },
      aggregated_rating: 83.5,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9b99a01891f64863a11",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9b99a01891f64863a12",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d9b99a01891f64863a13",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694d9b99a01891f64863a14",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694d9b99a01891f64863a15",
          },
        },
      ],
      developers: [
        {
          id: 7466,
          name: "Paradox Development Studio",
          _id: {
            $oid: "6694d9b99a01891f64863a16",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694d9b99a01891f64863a17",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694d9b99a01891f64863a18",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694d9b99a01891f64863a19",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d9b99a01891f64863a1a",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "crusader-kings-ii",
    updatedAt: {
      $date: "2024-07-15T08:11:37.436Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9159",
    },
    name: "Unturned",
    platform: "steam",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co6115.jpg",
    createdAt: "2024-01-01T15:03:54.008Z",
    lastPlay: "2020-02-25",
    playTime: 9,
    status: "abandoned",
    rating: 1,
    review:
      "Çok basit bir oyun. Bu kadar tutulan bir oyun gerçekten bu kadar mı geliştirilmiş hala şaşırıyorum.",
    igdb: {
      id: 7878,
      cover: {
        id: 281273,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co6115.jpg",
        game: 7878,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9d69a01891f64863df6",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9d69a01891f64863df7",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d9d69a01891f64863df8",
          },
        },
        {
          id: 5,
          name: "Massively Multiplayer Online (MMO)",
          _id: {
            $oid: "6694d9d69a01891f64863df9",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d9d69a01891f64863dfa",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d9d69a01891f64863dfb",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d9d69a01891f64863dfc",
          },
        },
      ],
      developers: [
        {
          id: 3824,
          name: "Nelson Sexton",
          _id: {
            $oid: "6694d9d69a01891f64863dfd",
          },
        },
        {
          id: 3823,
          name: "Smartly Dressed Games",
          _id: {
            $oid: "6694d9d69a01891f64863dfe",
          },
        },
      ],
      publishers: [
        {
          id: 3823,
          name: "Smartly Dressed Games",
          _id: {
            $oid: "6694d9d69a01891f64863dff",
          },
        },
        {
          id: 445,
          name: "505 Games",
          _id: {
            $oid: "6694d9d69a01891f64863e00",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d9d69a01891f64863e01",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d9d69a01891f64863e02",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694d9d69a01891f64863e03",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d9d69a01891f64863e04",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694d9d69a01891f64863e05",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694d9d69a01891f64863e06",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "unturned",
    updatedAt: {
      $date: "2024-07-15T08:12:06.307Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a915a",
    },
    review: "Pek bana hitap etmedi",
    platform: "steam",
    lastPlay: "2020-02-23",
    playTime: 5,
    name: "Castle Crashers",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co527e.jpg",
    status: "abandoned",
    createdAt: "2024-01-01T15:05:52.353Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 4,
    igdb: {
      id: 3153,
      cover: {
        id: 236138,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co527e.jpg",
        game: 3153,
      },
      aggregated_rating: 78.75,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9e19a01891f648641f3",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9e19a01891f648641f4",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d9e19a01891f648641f5",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694d9e19a01891f648641f6",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694d9e19a01891f648641f7",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694d9e19a01891f648641f8",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694d9e19a01891f648641f9",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694d9e19a01891f648641fa",
          },
        },
      ],
      developers: [
        {
          id: 1228,
          name: "The Behemoth",
          _id: {
            $oid: "6694d9e19a01891f648641fb",
          },
        },
      ],
      publishers: [
        {
          id: 1228,
          name: "The Behemoth",
          _id: {
            $oid: "6694d9e19a01891f648641fc",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694d9e19a01891f648641fd",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d9e19a01891f648641fe",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694d9e19a01891f648641ff",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "castle-crashers",
    updatedAt: {
      $date: "2024-07-15T08:12:17.375Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a915b",
    },
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review: "Oynayınca benlik oyun olmadığını anladım",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co68m7.jpg",
    platform: "steam",
    rating: 3,
    name: "Payday: The Heist",
    lastPlay: "2020-02-23",
    createdAt: "2024-01-01T15:05:02.782Z",
    playTime: 8,
    status: "abandoned",
    igdb: {
      id: 1381,
      cover: {
        id: 291103,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co68m7.jpg",
        game: 1381,
      },
      aggregated_rating: 72.5,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9eb9a01891f648645f9",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9eb9a01891f648645fa",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d9eb9a01891f648645fb",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d9eb9a01891f648645fc",
          },
        },
      ],
      developers: [
        {
          id: 905,
          name: "Overkill Software",
          _id: {
            $oid: "6694d9eb9a01891f648645fd",
          },
        },
      ],
      publishers: [
        {
          id: 243,
          name: "Sony Online Entertainment",
          _id: {
            $oid: "6694d9eb9a01891f648645fe",
          },
        },
        {
          id: 6997,
          name: "Daybreak Game Company",
          _id: {
            $oid: "6694d9eb9a01891f648645ff",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694d9eb9a01891f64864600",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d9eb9a01891f64864601",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "payday-the-heist",
    updatedAt: {
      $date: "2024-07-15T08:12:27.632Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a915c",
    },
    createdAt: "2024-01-01T15:06:47.120Z",
    review: "Başarılı bir oyun",
    playTime: 9,
    lastPlay: "2020-02-16",
    platform: "steam",
    rating: 6,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2e41.jpg",
    name: "Sniper Elite V2",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    igdb: {
      id: 3078,
      cover: {
        id: 111601,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2e41.jpg",
        game: 3078,
      },
      aggregated_rating: 66.9090909090909,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694d9fc9a01891f64864a04",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694d9fc9a01891f64864a05",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694d9fc9a01891f64864a06",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694d9fc9a01891f64864a07",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694d9fc9a01891f64864a08",
          },
        },
      ],
      developers: [
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694d9fc9a01891f64864a09",
          },
        },
      ],
      publishers: [
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694d9fc9a01891f64864a0a",
          },
        },
        {
          id: 445,
          name: "505 Games",
          _id: {
            $oid: "6694d9fc9a01891f64864a0b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694d9fc9a01891f64864a0c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694d9fc9a01891f64864a0d",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694d9fc9a01891f64864a0e",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694d9fc9a01891f64864a0f",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694d9fc9a01891f64864a10",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "sniper-elite-v2",
    updatedAt: {
      $date: "2024-07-15T08:12:44.717Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a915d",
    },
    playTime: 5,
    review:
      "Hikayesini hiç sevmedim. Aksiyonu bir tık iyi olsa da bence iyi bir oyun değil.",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1mxv.jpg",
    lastPlay: "2020-02-13",
    rating: 3,
    createdAt: "2024-01-01T15:11:14.109Z",
    name: "The Darkness II",
    platform: "steam",
    igdb: {
      id: 544,
      cover: {
        id: 76387,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1mxv.jpg",
        game: 544,
      },
      aggregated_rating: 76.63636363636364,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694da0c9a01891f64864e20",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694da0c9a01891f64864e21",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694da0c9a01891f64864e22",
          },
        },
      ],
      developers: [
        {
          id: 17,
          name: "Digital Extremes",
          _id: {
            $oid: "6694da0c9a01891f64864e23",
          },
        },
      ],
      publishers: [
        {
          id: 8,
          name: "2K Games",
          _id: {
            $oid: "6694da0c9a01891f64864e24",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694da0c9a01891f64864e25",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da0c9a01891f64864e26",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694da0c9a01891f64864e27",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694da0c9a01891f64864e28",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694da0c9a01891f64864e29",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "the-darkness-ii",
    updatedAt: {
      $date: "2024-07-15T08:13:00.005Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a915e",
    },
    review:
      "Steam de 11 saatim olsa da bu oyunu zamanında internet kafelerde en az 50 saatimi almıştır. Arkadaşlarla sarıyordu da online da beni sarmadı",
    createdAt: "2024-01-01T15:08:21.246Z",
    lastPlay: "2020-02-13",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co6rzl.jpg",
    playTime: 60,
    platform: "steam",
    rating: 4.6,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    name: "Team Fortress 2",
    igdb: {
      id: 891,
      cover: {
        id: 316209,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co6rzl.jpg",
        game: 891,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694da169a01891f64865243",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694da169a01891f64865244",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694da169a01891f64865245",
          },
        },
      ],
      developers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694da169a01891f64865246",
          },
        },
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694da169a01891f64865247",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694da169a01891f64865248",
          },
        },
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694da169a01891f64865249",
          },
        },
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694da169a01891f6486524a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694da169a01891f6486524b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da169a01891f6486524c",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694da169a01891f6486524d",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "team-fortress-2",
    updatedAt: {
      $date: "2024-07-15T08:13:10.831Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a915f",
    },
    status: "completed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2020-02-13",
    name: "Half-Life 2",
    playTime: 23,
    createdAt: "2024-01-01T15:10:06.516Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1nmw.jpg",
    review: "Oldukça başarılı bir oyun. Verdiği aksiyonu çoğu oyun vermiyor.",
    platform: "steam",
    rating: 8.5,
    igdb: {
      id: 233,
      cover: {
        id: 77288,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1nmw.jpg",
        game: 233,
      },
      aggregated_rating: 91,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694da259a01891f64865672",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694da259a01891f64865673",
          },
        },
      ],
      developers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694da259a01891f64865674",
          },
        },
      ],
      publishers: [
        {
          id: 24,
          name: "Sierra Entertainment",
          _id: {
            $oid: "6694da259a01891f64865675",
          },
        },
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694da259a01891f64865676",
          },
        },
        {
          id: 22994,
          name: "NVIDIA Lightspeed Studios",
          _id: {
            $oid: "6694da259a01891f64865677",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694da259a01891f64865678",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da259a01891f64865679",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694da259a01891f6486567a",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694da259a01891f6486567b",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "half-life-2",
    updatedAt: {
      $date: "2024-07-15T08:13:25.124Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9160",
    },
    platform: "steam",
    createdAt: "2024-01-01T15:13:56.608Z",
    status: "completed",
    name: "Mount & Blade: With Fire and Sword",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co25bz.jpg",
    review:
      "Normal Warband'dan fazla sıkılınca tüfekli warband muazzam ötesi geldi",
    lastPlay: "2020-02-09",
    playTime: 28,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 7.7,
    igdb: {
      id: 8792,
      cover: {
        id: 100223,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co25bz.jpg",
        game: 8792,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694da309a01891f64865aaa",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694da309a01891f64865aab",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694da309a01891f64865aac",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694da309a01891f64865aad",
          },
        },
      ],
      developers: [
        {
          id: 947,
          name: "Taleworlds",
          _id: {
            $oid: "6694da309a01891f64865aae",
          },
        },
        {
          id: 4749,
          name: "SiCh Studio",
          _id: {
            $oid: "6694da309a01891f64865aaf",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694da309a01891f64865ab0",
          },
        },
        {
          id: 74,
          name: "CyberFront",
          _id: {
            $oid: "6694da309a01891f64865ab1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694da309a01891f64865ab2",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694da309a01891f64865ab3",
          },
        },
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694da309a01891f64865ab4",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da309a01891f64865ab5",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694da309a01891f64865ab6",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694da309a01891f64865ab7",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "mount-and-blade-with-fire-and-sword",
    updatedAt: {
      $date: "2024-07-15T08:13:36.781Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9161",
    },
    createdAt: "2024-01-01T15:14:59.624Z",
    platform: "steam",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1y8y.jpg",
    review:
      "Mount Blade'i sevdiren başarılı bir oyun. Oyundan sıkılsanız bile modlarla defalarca sizi oynatır.",
    lastPlay: "2020-02-01",
    rating: 8,
    name: "Mount & Blade: Warband",
    playTime: 60,
    igdb: {
      id: 2025,
      cover: {
        id: 91042,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1y8y.jpg",
        game: 2025,
      },
      aggregated_rating: 68.6,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694da3c9a01891f64865ef4",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694da3c9a01891f64865ef5",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694da3c9a01891f64865ef6",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694da3c9a01891f64865ef7",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694da3c9a01891f64865ef8",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694da3c9a01891f64865ef9",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694da3c9a01891f64865efa",
          },
        },
      ],
      developers: [
        {
          id: 947,
          name: "Taleworlds",
          _id: {
            $oid: "6694da3c9a01891f64865efb",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694da3c9a01891f64865efc",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694da3c9a01891f64865efd",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694da3c9a01891f64865efe",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da3c9a01891f64865eff",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694da3c9a01891f64865f00",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694da3c9a01891f64865f01",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694da3c9a01891f64865f02",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694da3c9a01891f64865f03",
          },
        },
        {
          id: 41,
          name: "4X (explore, expand, exploit, and exterminate)",
          _id: {
            $oid: "6694da3c9a01891f64865f04",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "mount-and-blade-warband",
    updatedAt: {
      $date: "2024-07-15T08:13:48.013Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9162",
    },
    platform: "ubisoft",
    name: "Assassin's Creed IV Black Flag",
    playTime: 30,
    lastPlay: "2019-06-30",
    status: "completed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4qfn.jpg",
    review:
      "Assassin's Creed serisinin en iyi oyunudur. Açık dünyası, karakter gelişimi önceki oyunlara göre en başarılı oyundur fakat bu oyunu sevdiren en iyi özellik ise gemi savaşları ve gemi gelişimiydi. Hikayesi çok iyi diyemem",
    createdAt: "2024-01-02T20:23:16.408Z",
    rating: 9,
    igdb: {
      id: 1970,
      cover: {
        id: 220883,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4qfn.jpg",
        game: 1970,
      },
      aggregated_rating: 84.57142857142857,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694da499a01891f64866352",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694da499a01891f64866353",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694da499a01891f64866354",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694da499a01891f64866355",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694da499a01891f64866356",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694da499a01891f64866357",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694da499a01891f64866358",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694da499a01891f64866359",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da499a01891f6486635a",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694da499a01891f6486635b",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694da499a01891f6486635c",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694da499a01891f6486635d",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694da499a01891f6486635e",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694da499a01891f6486635f",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694da499a01891f64866360",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "assassins-creed-iv-black-flag",
    updatedAt: {
      $date: "2024-07-15T08:14:01.072Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9163",
    },
    rating: 7.3,
    platform: "torrent",
    status: "completed",
    playTime: 16,
    lastPlay: "2019-06-20",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xii.jpg",
    createdAt: "2024-01-02T20:15:50.273Z",
    review:
      "Assassin's Creed serisinde büyük oynanılış değişikliklere varılan oyun oldu. Combat sistemi öncekilerine çok iyi ve aşırı tatmin edici. Oyundaki gemi görevleri çok iyi diyemem. Hikayesini de çok beğenmedim fakat buna rağmen zevkle oynadım",
    name: "Assassin's Creed III",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    igdb: {
      id: 1266,
      cover: {
        id: 90090,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xii.jpg",
        game: 1266,
      },
      aggregated_rating: 81.17647058823529,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694da519a01891f648667bd",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694da519a01891f648667be",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694da519a01891f648667bf",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694da519a01891f648667c0",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694da519a01891f648667c1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694da519a01891f648667c2",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da519a01891f648667c3",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694da519a01891f648667c4",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694da519a01891f648667c5",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694da519a01891f648667c6",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694da519a01891f648667c7",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694da519a01891f648667c8",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694da519a01891f648667c9",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "assassins-creed-iii",
    updatedAt: {
      $date: "2024-07-15T08:14:09.161Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9164",
    },
    lastPlay: "2019-06-12",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 6.1,
    playTime: 18,
    createdAt: "2024-01-02T20:09:38.499Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5j90.jpg",
    platform: "torrent",
    name: "Assassin's Creed Revelations",
    review:
      "Brothood'a göre hikaye daha iyi bir noktaya geliyor. Ezio ile Altair hikaye bağlantılara kavuşması oldukça tatmin edici. Oyun mekaniklerinde değişiklikler oldukça güzel tek can sıkıcı noktası sürekli tower defence yapmaya zorlanmak bir yerden sonra bayıyor.",
    status: "completed",
    igdb: {
      id: 221824,
      cover: {
        id: 258228,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5j90.jpg",
        game: 221824,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694da669a01891f64866c33",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694da669a01891f64866c34",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694da669a01891f64866c35",
          },
        },
        {
          id: 794,
          name: "Virtuos",
          _id: {
            $oid: "6694da669a01891f64866c36",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694da669a01891f64866c37",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694da669a01891f64866c38",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da669a01891f64866c39",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694da669a01891f64866c3a",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694da669a01891f64866c3b",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694da669a01891f64866c3c",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694da669a01891f64866c3d",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694da669a01891f64866c3e",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "assassins-creed-revelations",
    updatedAt: {
      $date: "2024-07-15T08:14:30.971Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9165",
    },
    review:
      "2 kadar başarılı bir hikayesi olmasa da oyuna yeni kattığı mekanikler ile kendini sevdirdi. Özellikle kardeşlikteki suikastçileri kullanabilmek oldukça keyifliydi.",
    name: "Assassin's Creed Brotherhood",
    playTime: 13,
    rating: 5.3,
    createdAt: "2024-01-02T20:05:51.883Z",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    platform: "torrent",
    lastPlay: "2019-06-10",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5j8z.jpg",
    status: "completed",
    igdb: {
      id: 221823,
      cover: {
        id: 258227,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5j8z.jpg",
        game: 221823,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694da7e9a01891f648670b4",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694da7e9a01891f648670b5",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694da7e9a01891f648670b6",
          },
        },
        {
          id: 794,
          name: "Virtuos",
          _id: {
            $oid: "6694da7e9a01891f648670b7",
          },
        },
      ],
      publishers: [],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694da7e9a01891f648670b8",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da7e9a01891f648670b9",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694da7e9a01891f648670ba",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694da7e9a01891f648670bb",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694da7e9a01891f648670bc",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694da7e9a01891f648670bd",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694da7e9a01891f648670be",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694da7e9a01891f648670bf",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "assassins-creed-brotherhood",
    updatedAt: {
      $date: "2024-07-15T08:14:54.879Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9166",
    },
    createdAt: "2024-01-02T19:44:50.140Z",
    playTime: 15,
    name: "Assassin's Creed II",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rcf.jpg",
    review:
      "Dönemine göre muazzam ötesi, seriyi sevdiren bir oyun. Ezio serisinin ilk oyunu Assassin's creed serisinin temelini atan bir seri olmuştur. Ezio üçlemesinde en keyifli hikayeye sahip oyunudur.",
    status: "completed",
    platform: "torrent",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    lastPlay: "2019-06-06",
    rating: 8.3,
    igdb: {
      id: 127,
      cover: {
        id: 82095,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rcf.jpg",
        game: 127,
      },
      aggregated_rating: 90.25,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694da889a01891f64867541",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694da889a01891f64867542",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694da889a01891f64867543",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694da889a01891f64867544",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694da889a01891f64867545",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694da889a01891f64867546",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694da889a01891f64867547",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694da889a01891f64867548",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694da889a01891f64867549",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694da889a01891f6486754a",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694da889a01891f6486754b",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694da889a01891f6486754c",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694da889a01891f6486754d",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "assassins-creed-ii",
    updatedAt: {
      $date: "2024-07-15T08:15:04.976Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9167",
    },
    playTime: 12,
    createdAt: "2024-01-02T19:47:17.302Z",
    review:
      "Serinin ilk oyunu olduğu için bir çok kusuru var ki oyun mekanikleri vs söylenebilir ama asıl eleştirilecek kısım görevler birbirinin aynısı olmasıdır. Oyunda altyazı olmaması büyük eksiklik fakat hikayesi gerçekten güzel",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rrw.jpg",
    status: "completed",
    name: "Assassin's Creed",
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    rating: 4.9,
    platform: "torrent",
    lastPlay: "2019-06-01",
    igdb: {
      id: 128,
      cover: {
        id: 82652,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rrw.jpg",
        game: 128,
      },
      aggregated_rating: 80.75,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694db771a0b188de2ce8433",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694db771a0b188de2ce8434",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694db771a0b188de2ce8435",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694db771a0b188de2ce8436",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694db771a0b188de2ce8437",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694db771a0b188de2ce8438",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694db771a0b188de2ce8439",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694db771a0b188de2ce843a",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694db771a0b188de2ce843b",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694db771a0b188de2ce843c",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694db771a0b188de2ce843d",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694db771a0b188de2ce843e",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694db771a0b188de2ce843f",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "assassins-creed",
    updatedAt: {
      $date: "2024-07-15T08:19:03.966Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9168",
    },
    status: "completed",
    rating: 5.7,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2qbm.jpg",
    createdAt: "2024-01-02T19:25:24.460Z",
    review:
      "İlk Grand Strategy oyunumdur. Zamanına göre harika başarılı bir oyun",
    playTime: 80,
    lastPlay: "2017-08-06",
    platform: "steam",
    name: "Hearts of Iron III",
    igdb: {
      id: 741,
      cover: {
        id: 127426,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2qbm.jpg",
        game: 741,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694db861a0b188de2ce88db",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694db861a0b188de2ce88dc",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694db861a0b188de2ce88dd",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694db861a0b188de2ce88de",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694db861a0b188de2ce88df",
          },
        },
      ],
      developers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694db861a0b188de2ce88e0",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694db861a0b188de2ce88e1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694db861a0b188de2ce88e2",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694db861a0b188de2ce88e3",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "hearts-of-iron-iii",
    updatedAt: {
      $date: "2024-07-15T08:19:18.348Z",
    },
  },
  {
    _id: {
      $oid: "6673e803cb66f1bc4b2a9169",
    },
    rating: 5,
    status: "completed",
    createdAt: "2024-01-01T15:00:52.679Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1tx2.jpg",
    lastPlay: "2012-06-06",
    playTime: 60,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    review: "Çocukluğumda en çok oynadığım başka bir oyunlardan",
    name: "Team Fortress Classic",
    platform: "torrent",
    igdb: {
      id: 6359,
      cover: {
        id: 85430,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1tx2.jpg",
        game: 6359,
      },
      game_modes: [
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694db911a0b188de2ce8d88",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694db911a0b188de2ce8d89",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694db911a0b188de2ce8d8a",
          },
        },
      ],
      developers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694db911a0b188de2ce8d8b",
          },
        },
      ],
      publishers: [
        {
          id: 24,
          name: "Sierra Entertainment",
          _id: {
            $oid: "6694db911a0b188de2ce8d8c",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694db911a0b188de2ce8d8d",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694db911a0b188de2ce8d8e",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694db911a0b188de2ce8d8f",
          },
        },
      ],
    },
    isFavorite: false,
    screenshotSize: 0,
    slug: "team-fortress-classic",
    updatedAt: {
      $date: "2024-07-15T08:19:29.329Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a996c",
    },
    status: "completed",
    name: "Balatro",
    lastPlay: {
      $date: "2024-06-14T00:00:00.000Z",
    },
    playTime: 25,
    platform: "steam",
    screenshotSize: 0,
    review: "",
    rating: 8.3,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co752b.jpg",
    createdAt: "2024-05-14T18:06:25.132Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 251833,
      cover: {
        id: 333155,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co752b.jpg",
        game: 251833,
      },
      aggregated_rating: 91.2,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694def5ecde3233403158a2",
          },
        },
      ],
      genres: [
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694def5ecde3233403158a3",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694def5ecde3233403158a4",
          },
        },
        {
          id: 35,
          name: "Card & Board Game",
          _id: {
            $oid: "6694def5ecde3233403158a5",
          },
        },
      ],
      developers: [
        {
          id: 53072,
          name: "LocalThunk",
          _id: {
            $oid: "6694def5ecde3233403158a6",
          },
        },
      ],
      publishers: [
        {
          id: 15299,
          name: "Playstack",
          _id: {
            $oid: "6694def5ecde3233403158a7",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694def5ecde3233403158a8",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "balatro",
    updatedAt: {
      $date: "2024-07-15T08:33:57.879Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a996d",
    },
    name: "Ghost of Tsushima",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2crj.jpg",
    review: "",
    createdAt: "2024-05-20T19:32:23.309Z",
    playTime: 45,
    rating: 8.4,
    lastPlay: "2024-05-31",
    platform: "steam",
    screenshotSize: 0,
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 75235,
      cover: {
        id: 109855,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2crj.jpg",
        game: 75235,
      },
      aggregated_rating: 91.91666666666667,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694df02ecde32334031593e",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694df02ecde32334031593f",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694df02ecde323340315940",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694df02ecde323340315941",
          },
        },
      ],
      developers: [
        {
          id: 403,
          name: "Sucker Punch Productions",
          _id: {
            $oid: "6694df02ecde323340315942",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694df02ecde323340315943",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694df02ecde323340315944",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694df02ecde323340315945",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694df02ecde323340315946",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694df02ecde323340315947",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694df02ecde323340315948",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694df02ecde323340315949",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "ghost-of-tsushima",
    updatedAt: {
      $date: "2024-07-15T08:34:10.812Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a996e",
    },
    screenshotSize: 0,
    name: "Senua's Saga: Hellblade II",
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co81i4.jpg",
    status: "completed",
    createdAt: "2024-05-25T18:45:58.334Z",
    platform: "steam",
    lastPlay: "2024-05-27",
    playTime: 6,
    rating: 7.5,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 127342,
      cover: {
        id: 375196,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co81i4.jpg",
        game: 127342,
      },
      aggregated_rating: 71,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694df0cecde3233403159eb",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694df0cecde3233403159ec",
          },
        },
      ],
      developers: [
        {
          id: 795,
          name: "Ninja Theory",
          _id: {
            $oid: "6694df0cecde3233403159ed",
          },
        },
      ],
      publishers: [
        {
          id: 17966,
          name: "Xbox Game Studios",
          _id: {
            $oid: "6694df0cecde3233403159ee",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694df0cecde3233403159ef",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694df0cecde3233403159f0",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694df0cecde3233403159f1",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694df0cecde3233403159f2",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "senuas-saga-hellblade-ii",
    updatedAt: {
      $date: "2024-07-15T08:34:20.586Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a996f",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co833w.jpg",
    playTime: 55,
    lastPlay: "2024-05-24",
    name: "Dragon's Dogma II",
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-05-04T20:13:58.228Z",
    status: "completed",
    screenshotSize: 0,
    rating: 8.4,
    review: "",
    igdb: {
      id: 115060,
      cover: {
        id: 377276,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co833w.jpg",
        game: 115060,
      },
      aggregated_rating: 90.83333333333333,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694df1aecde323340315a9c",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694df1aecde323340315a9d",
          },
        },
      ],
      developers: [
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694df1aecde323340315a9e",
          },
        },
      ],
      publishers: [
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694df1aecde323340315a9f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694df1aecde323340315aa0",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694df1aecde323340315aa1",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694df1aecde323340315aa2",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694df1aecde323340315aa3",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "dragons-dogma-ii",
    updatedAt: {
      $date: "2024-07-15T08:34:34.747Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9970",
    },
    review: "",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.7,
    createdAt: "2024-04-15T19:57:42.909Z",
    lastPlay: {
      $date: "2024-05-01T00:00:00.000Z",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co6jbl.jpg",
    status: "completed",
    name: "The Talos Principle II",
    platform: "steam",
    playTime: 33,
    igdb: {
      id: 79864,
      cover: {
        id: 304977,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co6jbl.jpg",
        game: 79864,
      },
      aggregated_rating: 90.16666666666667,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694df2aecde323340315b55",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694df2aecde323340315b56",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694df2aecde323340315b57",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694df2aecde323340315b58",
          },
        },
      ],
      developers: [
        {
          id: 414,
          name: "Croteam",
          _id: {
            $oid: "6694df2aecde323340315b59",
          },
        },
      ],
      publishers: [
        {
          id: 634,
          name: "Devolver Digital",
          _id: {
            $oid: "6694df2aecde323340315b5a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694df2aecde323340315b5b",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694df2aecde323340315b5c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694df2aecde323340315b5d",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694df2aecde323340315b5e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-talos-principle-ii",
    updatedAt: {
      $date: "2024-07-15T08:34:50.317Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9971",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: {
      $date: "2024-04-23T00:00:00.000Z",
    },
    name: "Starfield",
    screenshotSize: 0,
    rating: 7.9,
    createdAt: "2024-04-22T22:02:05.627Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co39vv.jpg",
    review: "",
    playTime: 50,
    platform: "steam",
    status: "completed",
    igdb: {
      id: 96437,
      cover: {
        id: 152779,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co39vv.jpg",
        game: 96437,
      },
      aggregated_rating: 87.42857142857143,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694f5f7ecde3233403ab94d",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694f5f7ecde3233403ab94e",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694f5f7ecde3233403ab94f",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694f5f7ecde3233403ab950",
          },
        },
      ],
      developers: [
        {
          id: 126,
          name: "Bethesda Game Studios",
          _id: {
            $oid: "6694f5f7ecde3233403ab951",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694f5f7ecde3233403ab952",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694f5f7ecde3233403ab953",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694f5f7ecde3233403ab954",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694f5f7ecde3233403ab955",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694f5f7ecde3233403ab956",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694f5f7ecde3233403ab957",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694f5f7ecde3233403ab958",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "starfield",
    updatedAt: {
      $date: "2024-07-15T10:12:07.051Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9972",
    },
    rating: 8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co7lbb.jpg",
    createdAt: "2024-04-15T12:46:19.048Z",
    screenshotSize: 0,
    lastPlay: "2024-04-15",
    name: "Tekken 8",
    review: "",
    platform: "steam",
    playTime: 4,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    igdb: {
      id: 217590,
      cover: {
        id: 354215,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co7lbb.jpg",
        game: 217590,
      },
      aggregated_rating: 88.16666666666667,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694df47ecde323340315cf1",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694df47ecde323340315cf2",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694df47ecde323340315cf3",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Fighting",
          _id: {
            $oid: "6694df47ecde323340315cf4",
          },
        },
      ],
      developers: [
        {
          id: 22721,
          name: "Bandai Namco Studios",
          _id: {
            $oid: "6694df47ecde323340315cf5",
          },
        },
      ],
      publishers: [
        {
          id: 248,
          name: "Bandai Namco Entertainment",
          _id: {
            $oid: "6694df47ecde323340315cf6",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694df47ecde323340315cf7",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694df47ecde323340315cf8",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "tekken-8",
    updatedAt: {
      $date: "2024-07-15T08:35:19.802Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9973",
    },
    rating: 7.6,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co52t8.jpg",
    name: "Alone in the Dark",
    status: "completed",
    playTime: 9,
    platform: "xboxPc",
    screenshotSize: 0,
    lastPlay: "2024-04-11",
    createdAt: "2024-04-11T12:49:08.174Z",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 213237,
      cover: {
        id: 236924,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co52t8.jpg",
        game: 213237,
      },
      aggregated_rating: 75.25,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694df74ecde323340315dc8",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694df74ecde323340315dc9",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694df74ecde323340315dca",
          },
        },
      ],
      developers: [
        {
          id: 7212,
          name: "Pieces Interactive",
          _id: {
            $oid: "6694df74ecde323340315dcb",
          },
        },
      ],
      publishers: [
        {
          id: 10075,
          name: "THQ Nordic",
          _id: {
            $oid: "6694df74ecde323340315dcc",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694df74ecde323340315dcd",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694df74ecde323340315dce",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694df74ecde323340315dcf",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694df74ecde323340315dd0",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694df74ecde323340315dd1",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "alone-in-the-dark",
    updatedAt: {
      $date: "2024-07-15T08:36:04.933Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9974",
    },
    rating: 7.7,
    playTime: 8,
    platform: "steam",
    name: "Tavern Master",
    review: "",
    lastPlay: "2024-03-06",
    createdAt: "2024-03-06T12:49:51.439Z",
    status: "activePlaying",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3dfr.jpg",
    igdb: {
      id: 148900,
      cover: {
        id: 157383,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3dfr.jpg",
        game: 148900,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694df81ecde323340315eab",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694df81ecde323340315eac",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694df81ecde323340315ead",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694df81ecde323340315eae",
          },
        },
      ],
      developers: [
        {
          id: 35826,
          name: "Untitled Studio",
          _id: {
            $oid: "6694df81ecde323340315eaf",
          },
        },
      ],
      publishers: [
        {
          id: 35826,
          name: "Untitled Studio",
          _id: {
            $oid: "6694df81ecde323340315eb0",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694df81ecde323340315eb1",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694df81ecde323340315eb2",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694df81ecde323340315eb3",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "tavern-master",
    updatedAt: {
      $date: "2024-07-15T08:36:17.203Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9975",
    },
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co6lmo.jpg",
    playTime: 27,
    platform: "steam",
    name: "Banishers: Ghosts of New Eden",
    screenshotSize: 0,
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2024-03-06",
    rating: 7.7,
    createdAt: "2024-03-06T12:49:02.495Z",
    igdb: {
      id: 228539,
      cover: {
        id: 307968,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co6lmo.jpg",
        game: 228539,
      },
      aggregated_rating: 78.33333333333333,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694df8decde323340315f96",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694df8decde323340315f97",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694df8decde323340315f98",
          },
        },
      ],
      developers: [
        {
          id: 894,
          name: "DON'T NOD",
          _id: {
            $oid: "6694df8decde323340315f99",
          },
        },
      ],
      publishers: [
        {
          id: 110,
          name: "Focus Entertainment",
          _id: {
            $oid: "6694df8decde323340315f9a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694df8decde323340315f9b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694df8decde323340315f9c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694df8decde323340315f9d",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "banishers-ghosts-of-new-eden",
    updatedAt: {
      $date: "2024-07-15T08:36:29.562Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9976",
    },
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    playTime: 20,
    platform: "steam",
    lastPlay: "2024-03-04",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4v9d.jpg",
    name: "Dave the Diver",
    status: "completed",
    rating: 8.2,
    createdAt: "2024-03-04T10:55:07.672Z",
    igdb: {
      id: 203722,
      cover: {
        id: 227137,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4v9d.jpg",
        game: 203722,
      },
      aggregated_rating: 92.75,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694df98ecde323340316088",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694df98ecde323340316089",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694df98ecde32334031608a",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694df98ecde32334031608b",
          },
        },
      ],
      developers: [
        {
          id: 41489,
          name: "MINTROCKET",
          _id: {
            $oid: "6694df98ecde32334031608c",
          },
        },
      ],
      publishers: [
        {
          id: 41489,
          name: "MINTROCKET",
          _id: {
            $oid: "6694df98ecde32334031608d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694df98ecde32334031608e",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694df98ecde32334031608f",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694df98ecde323340316090",
          },
        },
        {
          id: 28,
          name: "Business",
          _id: {
            $oid: "6694df98ecde323340316091",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "dave-the-diver",
    updatedAt: {
      $date: "2024-07-15T08:36:40.765Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9977",
    },
    review: "",
    screenshotSize: 0,
    createdAt: "2024-03-04T10:53:59.204Z",
    rating: 7.4,
    lastPlay: "2024-03-04",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    status: "completed",
    name: "Anomaly Agent",
    playTime: 5,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co7r6n.jpg",
    igdb: {
      id: 249084,
      cover: {
        id: 361823,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co7r6n.jpg",
        game: 249084,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694dfa3ecde323340316186",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Fighting",
          _id: {
            $oid: "6694dfa3ecde323340316187",
          },
        },
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694dfa3ecde323340316188",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694dfa3ecde323340316189",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694dfa3ecde32334031618a",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694dfa3ecde32334031618b",
          },
        },
      ],
      developers: [
        {
          id: 52300,
          name: "Phew Phew Games",
          _id: {
            $oid: "6694dfa3ecde32334031618c",
          },
        },
      ],
      publishers: [
        {
          id: 52300,
          name: "Phew Phew Games",
          _id: {
            $oid: "6694dfa3ecde32334031618d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694dfa3ecde32334031618e",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694dfa3ecde32334031618f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "anomaly-agent",
    updatedAt: {
      $date: "2024-07-15T08:36:51.777Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9978",
    },
    lastPlay: "2024-03-02",
    createdAt: "2024-03-04T13:52:10.458Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xbv.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 43,
    review: "",
    platform: "steam",
    rating: 7.6,
    screenshotSize: 0,
    name: "Battlefield V",
    status: "activePlaying",
    igdb: {
      id: 83728,
      cover: {
        id: 89851,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xbv.jpg",
        game: 83728,
      },
      aggregated_rating: 77.41176470588235,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694dfb1ecde32334031628e",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694dfb1ecde32334031628f",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694dfb1ecde323340316290",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694dfb1ecde323340316291",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "6694dfb1ecde323340316292",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694dfb1ecde323340316293",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694dfb1ecde323340316294",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694dfb1ecde323340316295",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694dfb1ecde323340316296",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694dfb1ecde323340316297",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "battlefield-v",
    updatedAt: {
      $date: "2024-07-15T08:37:05.111Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9979",
    },
    rating: 9.3,
    screenshotSize: 0,
    createdAt: "2024-01-21T07:24:23.523Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4jni.jpg",
    lastPlay: "2024-01-15",
    platform: "steam",
    review: "",
    playTime: 70,
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Elden Ring",
    igdb: {
      id: 119133,
      cover: {
        id: 212094,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4jni.jpg",
        game: 119133,
      },
      aggregated_rating: 96.9,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694dfbbecde3233403163a0",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694dfbbecde3233403163a1",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694dfbbecde3233403163a2",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694dfbbecde3233403163a3",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694dfbbecde3233403163a4",
          },
        },
      ],
      developers: [
        {
          id: 1012,
          name: "FromSoftware",
          _id: {
            $oid: "6694dfbbecde3233403163a5",
          },
        },
      ],
      publishers: [
        {
          id: 248,
          name: "Bandai Namco Entertainment",
          _id: {
            $oid: "6694dfbbecde3233403163a6",
          },
        },
        {
          id: 1012,
          name: "FromSoftware",
          _id: {
            $oid: "6694dfbbecde3233403163a7",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694dfbbecde3233403163a8",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694dfbbecde3233403163a9",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694dfbbecde3233403163aa",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694dfbbecde3233403163ab",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "elden-ring",
    updatedAt: {
      $date: "2024-07-15T08:37:15.706Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a997a",
    },
    screenshotSize: 0,
    playTime: 16,
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "epicGames",
    name: "Ratchet & Clank: Rift Apart",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2str.jpg",
    status: "completed",
    createdAt: "2024-01-23T08:36:50.881Z",
    rating: 7.4,
    lastPlay: "2023-12-08",
    igdb: {
      id: 134582,
      cover: {
        id: 130671,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2str.jpg",
        game: 134582,
      },
      aggregated_rating: 90.66666666666667,
      aggregated_rating_count: 18,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694dfe6ecde3233403164c0",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694dfe6ecde3233403164c1",
          },
        },
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694dfe6ecde3233403164c2",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694dfe6ecde3233403164c3",
          },
        },
      ],
      developers: [
        {
          id: 834,
          name: "Insomniac Games",
          _id: {
            $oid: "6694dfe6ecde3233403164c4",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694dfe6ecde3233403164c5",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694dfe6ecde3233403164c6",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694dfe6ecde3233403164c7",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694dfe6ecde3233403164c8",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "ratchet-and-clank-rift-apart",
    updatedAt: {
      $date: "2024-07-15T08:37:58.773Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a997b",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-01-23T08:39:07.324Z",
    platform: "epicGames",
    status: "completed",
    playTime: 18,
    review: "",
    screenshotSize: 0,
    rating: 8.4,
    name: "Alan Wake II",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co6jar.jpg",
    lastPlay: "2023-11-30",
    igdb: {
      id: 185246,
      cover: {
        id: 304947,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co6jar.jpg",
        game: 185246,
      },
      aggregated_rating: 92.6,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694dff2ecde3233403165e6",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694dff2ecde3233403165e7",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694dff2ecde3233403165e8",
          },
        },
      ],
      developers: [
        {
          id: 305,
          name: "Remedy Entertainment",
          _id: {
            $oid: "6694dff2ecde3233403165e9",
          },
        },
      ],
      publishers: [
        {
          id: 17463,
          name: "Epic Games",
          _id: {
            $oid: "6694dff2ecde3233403165ea",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694dff2ecde3233403165eb",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694dff2ecde3233403165ec",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694dff2ecde3233403165ed",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694dff2ecde3233403165ee",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "alan-wake-ii",
    updatedAt: {
      $date: "2024-07-15T08:38:10.772Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a997c",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    platform: "steam",
    lastPlay: "2023-11-17",
    createdAt: "2024-01-23T08:38:01.762Z",
    review: "",
    status: "abandoned",
    playTime: 22,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2a23.jpg",
    rating: 8,
    name: "Sekiro: Shadows Die Twice",
    igdb: {
      id: 76882,
      cover: {
        id: 106347,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2a23.jpg",
        game: 76882,
      },
      aggregated_rating: 90.0909090909091,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694dffeecde323340316715",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694dffeecde323340316716",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694dffeecde323340316717",
          },
        },
      ],
      developers: [
        {
          id: 1012,
          name: "FromSoftware",
          _id: {
            $oid: "6694dffeecde323340316718",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694dffeecde323340316719",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694dffeecde32334031671a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694dffeecde32334031671b",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694dffeecde32334031671c",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694dffeecde32334031671d",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694dffeecde32334031671e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "sekiro-shadows-die-twice",
    updatedAt: {
      $date: "2024-07-15T08:38:22.292Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a997d",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 9.2,
    name: "Red Dead Redemption 2",
    createdAt: "2024-01-21T07:28:09.204Z",
    review: "",
    platform: "steam",
    playTime: 90,
    lastPlay: "2023-11-16",
    screenshotSize: 0,
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1q1f.jpg",
    slug: "red-dead-redemption-2",
    updatedAt: {
      $date: "2024-07-15T08:38:35.127Z",
    },
    igdb: {
      id: 25076,
      cover: {
        id: 80403,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1q1f.jpg",
        game: 25076,
      },
      aggregated_rating: 94.05882352941177,
      aggregated_rating_count: 26,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e00becde32334031684f",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e00becde323340316850",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e00becde323340316851",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e00becde323340316852",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e00becde323340316853",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e00becde323340316854",
          },
        },
      ],
      developers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694e00becde323340316855",
          },
        },
      ],
      publishers: [
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694e00becde323340316856",
          },
        },
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694e00becde323340316857",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e00becde323340316858",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e00becde323340316859",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e00becde32334031685a",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e00becde32334031685b",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e00becde32334031685c",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a997e",
    },
    lastPlay: "2023-10-27",
    name: "Baldur's Gate 3",
    playTime: 82,
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co670h.jpg",
    status: "completed",
    createdAt: "2024-01-21T07:32:33.524Z",
    review: "",
    rating: 9.2,
    igdb: {
      id: 119171,
      cover: {
        id: 289025,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co670h.jpg",
        game: 119171,
      },
      aggregated_rating: 94.5,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e014ecde32334031699b",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e014ecde32334031699c",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e014ecde32334031699d",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e014ecde32334031699e",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e014ecde32334031699f",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e014ecde3233403169a0",
          },
        },
        {
          id: 16,
          name: "Turn-based strategy (TBS)",
          _id: {
            $oid: "6694e014ecde3233403169a1",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e014ecde3233403169a2",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e014ecde3233403169a3",
          },
        },
      ],
      developers: [
        {
          id: 510,
          name: "Larian Studios",
          _id: {
            $oid: "6694e014ecde3233403169a4",
          },
        },
      ],
      publishers: [
        {
          id: 510,
          name: "Larian Studios",
          _id: {
            $oid: "6694e014ecde3233403169a5",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e014ecde3233403169a6",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e014ecde3233403169a7",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e014ecde3233403169a8",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "baldurs-gate-3",
    updatedAt: {
      $date: "2024-07-15T08:38:44.124Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a997f",
    },
    playTime: 10,
    review: "",
    lastPlay: "2023-10-19",
    platform: "steam",
    name: "Vampire Survivors",
    status: "completed",
    createdAt: "2024-04-13T19:16:46.581Z",
    rating: 8.4,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4bzv.jpg",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 186725,
      cover: {
        id: 202171,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4bzv.jpg",
        game: 186725,
      },
      aggregated_rating: 91.4,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e026ecde323340316af5",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e026ecde323340316af6",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e026ecde323340316af7",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e026ecde323340316af8",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e026ecde323340316af9",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e026ecde323340316afa",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e026ecde323340316afb",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694e026ecde323340316afc",
          },
        },
      ],
      developers: [
        {
          id: 44617,
          name: "Poncle",
          _id: {
            $oid: "6694e026ecde323340316afd",
          },
        },
      ],
      publishers: [
        {
          id: 44617,
          name: "Poncle",
          _id: {
            $oid: "6694e026ecde323340316afe",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e026ecde323340316aff",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e026ecde323340316b00",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e026ecde323340316b01",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e026ecde323340316b02",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "vampire-survivors",
    updatedAt: {
      $date: "2024-07-15T08:39:02.877Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9980",
    },
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Call of Duty: Modern Warfare II",
    screenshotSize: 0,
    status: "activePlaying",
    rating: 7.8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4sbw.jpg",
    lastPlay: "2023-10-18",
    createdAt: "2024-01-23T08:48:21.932Z",
    playTime: 52,
    review: "",
    igdb: {
      id: 200165,
      cover: {
        id: 223340,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4sbw.jpg",
        game: 200165,
      },
      aggregated_rating: 79.5,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e033ecde323340316c5d",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e033ecde323340316c5e",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e033ecde323340316c5f",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e033ecde323340316c60",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e033ecde323340316c61",
          },
        },
      ],
      developers: [
        {
          id: 438,
          name: "Infinity Ward",
          _id: {
            $oid: "6694e033ecde323340316c62",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694e033ecde323340316c63",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e033ecde323340316c64",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e033ecde323340316c65",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e033ecde323340316c66",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e033ecde323340316c67",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-modern-warfare-ii",
    updatedAt: {
      $date: "2024-07-15T08:39:15.569Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9981",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4zw5.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7,
    screenshotSize: 0,
    createdAt: "2024-03-04T13:56:20.418Z",
    lastPlay: "2023-09-08",
    platform: "steam",
    name: "FIFA 23",
    playTime: 36,
    review: "",
    status: "activePlaying",
    igdb: {
      id: 205780,
      cover: {
        id: 233141,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4zw5.jpg",
        game: 205780,
      },
      aggregated_rating: 80.66666666666667,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e047ecde323340316dcd",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e047ecde323340316dce",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e047ecde323340316dcf",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e047ecde323340316dd0",
          },
        },
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694e047ecde323340316dd1",
          },
        },
      ],
      developers: [
        {
          id: 27222,
          name: "EA Vancouver",
          _id: {
            $oid: "6694e047ecde323340316dd2",
          },
        },
      ],
      publishers: [
        {
          id: 454,
          name: "EA Sports",
          _id: {
            $oid: "6694e047ecde323340316dd3",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e047ecde323340316dd4",
          },
        },
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e047ecde323340316dd5",
          },
        },
      ],
      themes: [
        {
          id: 32,
          name: "Non-fiction",
          _id: {
            $oid: "6694e047ecde323340316dd6",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "fifa-23",
    updatedAt: {
      $date: "2024-07-15T08:39:35.884Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9982",
    },
    review: "",
    playTime: 9,
    platform: "epicGames",
    screenshotSize: 0,
    lastPlay: "2023-09-02",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co68l9.jpg",
    name: "Sherlock Holmes: The Awakened",
    rating: 7.5,
    createdAt: "2024-01-23T08:45:00.688Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 212664,
      cover: {
        id: 291069,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co68l9.jpg",
        game: 212664,
      },
      aggregated_rating: 82,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e05aecde323340316f46",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e05aecde323340316f47",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e05aecde323340316f48",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e05aecde323340316f49",
          },
        },
      ],
      developers: [
        {
          id: 2410,
          name: "Frogwares",
          _id: {
            $oid: "6694e05aecde323340316f4a",
          },
        },
      ],
      publishers: [
        {
          id: 2410,
          name: "Frogwares",
          _id: {
            $oid: "6694e05aecde323340316f4b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e05aecde323340316f4c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e05aecde323340316f4d",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e05aecde323340316f4e",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e05aecde323340316f4f",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e05aecde323340316f50",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "sherlock-holmes-the-awakened",
    updatedAt: {
      $date: "2024-07-15T08:39:54.302Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9983",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5us3.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.6,
    playTime: 7,
    createdAt: "2024-01-23T08:46:26.646Z",
    lastPlay: "2023-08-11",
    status: "completed",
    review: "",
    name: "Amnesia: The Bunker",
    platform: "xboxPc",
    screenshotSize: 0,
    igdb: {
      id: 228258,
      cover: {
        id: 273171,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5us3.jpg",
        game: 228258,
      },
      aggregated_rating: 84.5,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e063ecde3233403170cb",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e063ecde3233403170cc",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e063ecde3233403170cd",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e063ecde3233403170ce",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e063ecde3233403170cf",
          },
        },
      ],
      developers: [
        {
          id: 36,
          name: "Frictional Games",
          _id: {
            $oid: "6694e063ecde3233403170d0",
          },
        },
      ],
      publishers: [
        {
          id: 36,
          name: "Frictional Games",
          _id: {
            $oid: "6694e063ecde3233403170d1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e063ecde3233403170d2",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e063ecde3233403170d3",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e063ecde3233403170d4",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e063ecde3233403170d5",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e063ecde3233403170d6",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e063ecde3233403170d7",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "amnesia-the-bunker",
    updatedAt: {
      $date: "2024-07-15T08:40:03.888Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9984",
    },
    review: "",
    name: "The Witcher 3: Wild Hunt",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 9.4,
    status: "completed",
    playTime: 205,
    platform: "steam",
    lastPlay: "2023-08-09",
    createdAt: "2024-01-21T07:26:05.406Z",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wyy.jpg",
    igdb: {
      id: 1942,
      cover: {
        id: 89386,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wyy.jpg",
        game: 1942,
      },
      aggregated_rating: 91.72,
      aggregated_rating_count: 26,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e06cecde32334031725f",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e06cecde323340317260",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e06cecde323340317261",
          },
        },
      ],
      developers: [
        {
          id: 908,
          name: "CD Projekt RED",
          _id: {
            $oid: "6694e06cecde323340317262",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e06cecde323340317263",
          },
        },
        {
          id: 248,
          name: "Bandai Namco Entertainment",
          _id: {
            $oid: "6694e06cecde323340317264",
          },
        },
        {
          id: 3119,
          name: "cdp.pl",
          _id: {
            $oid: "6694e06cecde323340317265",
          },
        },
        {
          id: 1217,
          name: "Spike ChunSoft",
          _id: {
            $oid: "6694e06cecde323340317266",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e06cecde323340317267",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e06cecde323340317268",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e06cecde323340317269",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e06cecde32334031726a",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-witcher-3-wild-hunt",
    updatedAt: {
      $date: "2024-07-15T08:40:12.935Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9985",
    },
    status: "completed",
    review: "",
    rating: 8.2,
    playTime: 52,
    lastPlay: "2023-07-18",
    photo:
      "//images.igdb.com/igdb/image/upload/t_1080p/mferu1am1yv5pcy5aplm.jpg",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    name: "Frostpunk",
    createdAt: "2024-03-04T14:02:26.675Z",
    igdb: {
      id: 23248,
      cover: {
        id: 64984,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/mferu1am1yv5pcy5aplm.jpg",
        game: 23248,
      },
      aggregated_rating: 86.22222222222223,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e077ecde3233403173fe",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e077ecde3233403173ff",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e077ecde323340317400",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e077ecde323340317401",
          },
        },
      ],
      developers: [
        {
          id: 4133,
          name: "11 bit studios",
          _id: {
            $oid: "6694e077ecde323340317402",
          },
        },
      ],
      publishers: [
        {
          id: 4133,
          name: "11 bit studios",
          _id: {
            $oid: "6694e077ecde323340317403",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e077ecde323340317404",
          },
        },
      ],
      themes: [
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e077ecde323340317405",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e077ecde323340317406",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "frostpunk",
    updatedAt: {
      $date: "2024-07-15T08:40:23.280Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9986",
    },
    createdAt: "2024-01-23T08:41:02.775Z",
    rating: 8.4,
    platform: "steam",
    review: "",
    name: "Inscryption",
    screenshotSize: 0,
    lastPlay: "2023-07-07",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co401c.jpg",
    playTime: 14,
    igdb: {
      id: 139090,
      cover: {
        id: 186672,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co401c.jpg",
        game: 139090,
      },
      aggregated_rating: 82.25,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e07fecde3233403175a3",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e07fecde3233403175a4",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e07fecde3233403175a5",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e07fecde3233403175a6",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e07fecde3233403175a7",
          },
        },
        {
          id: 35,
          name: "Card & Board Game",
          _id: {
            $oid: "6694e07fecde3233403175a8",
          },
        },
      ],
      developers: [
        {
          id: 7871,
          name: "Daniel Mullins Games",
          _id: {
            $oid: "6694e07fecde3233403175a9",
          },
        },
      ],
      publishers: [
        {
          id: 634,
          name: "Devolver Digital",
          _id: {
            $oid: "6694e07fecde3233403175aa",
          },
        },
        {
          id: 7871,
          name: "Daniel Mullins Games",
          _id: {
            $oid: "6694e07fecde3233403175ab",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e07fecde3233403175ac",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e07fecde3233403175ad",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e07fecde3233403175ae",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "inscryption",
    updatedAt: {
      $date: "2024-07-15T08:40:31.798Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9987",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2vpp.jpg",
    platform: "epicGames",
    rating: 7.8,
    lastPlay: "2023-06-17",
    screenshotSize: 0,
    playTime: 14,
    name: "Life is Strange: True Colors",
    createdAt: "2024-03-04T11:02:20.091Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    review: "",
    igdb: {
      id: 144765,
      cover: {
        id: 134413,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2vpp.jpg",
        game: 144765,
      },
      aggregated_rating: 84.27272727272727,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e08aecde323340317757",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e08aecde323340317758",
          },
        },
      ],
      developers: [
        {
          id: 12931,
          name: "Deck Nine",
          _id: {
            $oid: "6694e08aecde323340317759",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694e08aecde32334031775a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e08aecde32334031775b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e08aecde32334031775c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e08aecde32334031775d",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e08aecde32334031775e",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e08aecde32334031775f",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e08aecde323340317760",
          },
        },
        {
          id: 44,
          name: "Romance",
          _id: {
            $oid: "6694e08aecde323340317761",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "life-is-strange-true-colors",
    updatedAt: {
      $date: "2024-07-15T08:40:42.967Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9988",
    },
    review: "",
    rating: 7,
    createdAt: "2024-01-23T08:53:04.480Z",
    screenshotSize: 0,
    status: "completed",
    playTime: 2,
    platform: "steam",
    lastPlay: "2023-06-09",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co67wg.jpg",
    name: "File Destined",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 235446,
      cover: {
        id: 290176,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co67wg.jpg",
        game: 235446,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e093ecde323340317915",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e093ecde323340317916",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e093ecde323340317917",
          },
        },
      ],
      developers: [
        {
          id: 45990,
          name: "Metavision Studio",
          _id: {
            $oid: "6694e093ecde323340317918",
          },
        },
      ],
      publishers: [
        {
          id: 45990,
          name: "Metavision Studio",
          _id: {
            $oid: "6694e093ecde323340317919",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e093ecde32334031791a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e093ecde32334031791b",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e093ecde32334031791c",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e093ecde32334031791d",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "file-destined",
    updatedAt: {
      $date: "2024-07-15T08:40:51.884Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9989",
    },
    name: "Resident Evil 4",
    status: "completed",
    playTime: 16,
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co6bo0.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    createdAt: "2024-01-23T08:50:48.976Z",
    platform: "steam",
    lastPlay: "2023-04-28",
    rating: 8.3,
    igdb: {
      id: 132181,
      cover: {
        id: 295056,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co6bo0.jpg",
        game: 132181,
      },
      aggregated_rating: 94.5,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e117ecde323340317ada",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e117ecde323340317adb",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e117ecde323340317adc",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e117ecde323340317add",
          },
        },
      ],
      developers: [
        {
          id: 42265,
          name: "Capcom Development Division 1",
          _id: {
            $oid: "6694e117ecde323340317ade",
          },
        },
      ],
      publishers: [
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694e117ecde323340317adf",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e117ecde323340317ae0",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e117ecde323340317ae1",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e117ecde323340317ae2",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e117ecde323340317ae3",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "resident-evil-4",
    updatedAt: {
      $date: "2024-07-15T08:43:03.675Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a998a",
    },
    screenshotSize: 0,
    platform: "steam",
    playTime: 54,
    lastPlay: "2023-03-11",
    rating: 7.7,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1i2d.jpg",
    createdAt: "2024-03-04T13:53:36.969Z",
    status: "toBeCompleted",
    review: "",
    name: "Satisfactory",
    igdb: {
      id: 90558,
      cover: {
        id: 70069,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1i2d.jpg",
        game: 90558,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e127ecde323340317caa",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e127ecde323340317cab",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e127ecde323340317cac",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e127ecde323340317cad",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e127ecde323340317cae",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e127ecde323340317caf",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e127ecde323340317cb0",
          },
        },
      ],
      developers: [
        {
          id: 999,
          name: "Coffee Stain Studios",
          _id: {
            $oid: "6694e127ecde323340317cb1",
          },
        },
      ],
      publishers: [
        {
          id: 999,
          name: "Coffee Stain Studios",
          _id: {
            $oid: "6694e127ecde323340317cb2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e127ecde323340317cb3",
          },
        },
      ],
      themes: [
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e127ecde323340317cb4",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e127ecde323340317cb5",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e127ecde323340317cb6",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "satisfactory",
    updatedAt: {
      $date: "2024-07-15T08:43:19.397Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a998b",
    },
    review: "",
    rating: 8,
    createdAt: "2024-01-23T08:43:45.352Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Undertale",
    status: "completed",
    screenshotSize: 0,
    platform: "steam",
    lastPlay: "2023-03-10",
    playTime: 7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2855.jpg",
    igdb: {
      id: 12517,
      cover: {
        id: 103865,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2855.jpg",
        game: 12517,
      },
      aggregated_rating: 96.38461538461539,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e139ecde323340317e8a",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e139ecde323340317e8b",
          },
        },
        {
          id: 16,
          name: "Turn-based strategy (TBS)",
          _id: {
            $oid: "6694e139ecde323340317e8c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e139ecde323340317e8d",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e139ecde323340317e8e",
          },
        },
      ],
      developers: [
        {
          id: 6545,
          name: "tobyfox",
          _id: {
            $oid: "6694e139ecde323340317e8f",
          },
        },
      ],
      publishers: [
        {
          id: 29538,
          name: "8-4",
          _id: {
            $oid: "6694e139ecde323340317e90",
          },
        },
        {
          id: 6545,
          name: "tobyfox",
          _id: {
            $oid: "6694e139ecde323340317e91",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e139ecde323340317e92",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e139ecde323340317e93",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e139ecde323340317e94",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e139ecde323340317e95",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e139ecde323340317e96",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "undertale",
    updatedAt: {
      $date: "2024-07-15T08:43:37.704Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a998c",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2gn3.jpg",
    review: "",
    name: "Hogwarts Legacy",
    lastPlay: "2023-02-17",
    screenshotSize: 0,
    status: "completed",
    playTime: 26,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.8,
    createdAt: "2024-01-23T08:55:36.575Z",
    platform: "steam",
    igdb: {
      id: 136625,
      cover: {
        id: 114879,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2gn3.jpg",
        game: 136625,
      },
      aggregated_rating: 85.57142857142857,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e144ecde323340318077",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e144ecde323340318078",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e144ecde323340318079",
          },
        },
      ],
      developers: [
        {
          id: 1309,
          name: "Avalanche Software",
          _id: {
            $oid: "6694e144ecde32334031807a",
          },
        },
      ],
      publishers: [
        {
          id: 13854,
          name: "Portkey Games",
          _id: {
            $oid: "6694e144ecde32334031807b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e144ecde32334031807c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e144ecde32334031807d",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e144ecde32334031807e",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e144ecde32334031807f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hogwarts-legacy",
    updatedAt: {
      $date: "2024-07-15T08:43:48.037Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a998d",
    },
    lastPlay: "2023-02-01",
    rating: 7.2,
    playTime: 8,
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4tt2.jpg",
    name: "Stray",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    platform: "epicGames",
    screenshotSize: 0,
    createdAt: "2024-03-04T10:57:40.866Z",
    igdb: {
      id: 110248,
      cover: {
        id: 225254,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4tt2.jpg",
        game: 110248,
      },
      aggregated_rating: 85,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e14decde323340318269",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e14decde32334031826a",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e14decde32334031826b",
          },
        },
      ],
      developers: [
        {
          id: 26296,
          name: "BlueTwelve Studio",
          _id: {
            $oid: "6694e14decde32334031826c",
          },
        },
      ],
      publishers: [
        {
          id: 11662,
          name: "Annapurna Interactive",
          _id: {
            $oid: "6694e14decde32334031826d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e14decde32334031826e",
          },
        },
      ],
      themes: [
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e14decde32334031826f",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e14decde323340318270",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "stray",
    updatedAt: {
      $date: "2024-07-15T08:43:57.572Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a998e",
    },
    platform: "steam",
    name: "Call of Duty: Black Ops Cold War",
    rating: 7.1,
    playTime: 7,
    status: "completed",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2n6j.jpg",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-01-23T08:49:29.328Z",
    lastPlay: "2023-01-12",
    igdb: {
      id: 137001,
      cover: {
        id: 123355,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2n6j.jpg",
        game: 137001,
      },
      aggregated_rating: 76.88888888888889,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e157ecde323340318462",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e157ecde323340318463",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e157ecde323340318464",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e157ecde323340318465",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e157ecde323340318466",
          },
        },
      ],
      developers: [
        {
          id: 428,
          name: "Treyarch",
          _id: {
            $oid: "6694e157ecde323340318467",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694e157ecde323340318468",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e157ecde323340318469",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e157ecde32334031846a",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e157ecde32334031846b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-black-ops-cold-war",
    updatedAt: {
      $date: "2024-07-15T08:44:07.466Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a998f",
    },
    rating: 8.4,
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1j86.jpg",
    name: "Hearts of Iron IV",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 400,
    screenshotSize: 0,
    createdAt: "2024-03-04T13:43:35.437Z",
    status: "activePlaying",
    lastPlay: "2022-12-25",
    platform: "steam",
    igdb: {
      id: 15894,
      cover: {
        id: 71574,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1j86.jpg",
        game: 15894,
      },
      aggregated_rating: 83.83333333333333,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e161ecde323340318667",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e161ecde323340318668",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e161ecde323340318669",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694e161ecde32334031866a",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e161ecde32334031866b",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e161ecde32334031866c",
          },
        },
      ],
      developers: [
        {
          id: 7466,
          name: "Paradox Development Studio",
          _id: {
            $oid: "6694e161ecde32334031866d",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694e161ecde32334031866e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e161ecde32334031866f",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e161ecde323340318670",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e161ecde323340318671",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hearts-of-iron-iv",
    updatedAt: {
      $date: "2024-07-15T08:44:17.583Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9990",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xdc.jpg",
    playTime: 13,
    screenshotSize: 0,
    createdAt: "2024-01-23T09:15:22.793Z",
    lastPlay: "2022-11-25",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Raft",
    rating: 7,
    platform: "steam",
    review: "",
    igdb: {
      id: 27082,
      cover: {
        id: 89904,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xdc.jpg",
        game: 27082,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e169ecde323340318878",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e169ecde323340318879",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e169ecde32334031887a",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e169ecde32334031887b",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e169ecde32334031887c",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e169ecde32334031887d",
          },
        },
      ],
      developers: [
        {
          id: 13531,
          name: "Redbeet Interactive",
          _id: {
            $oid: "6694e169ecde32334031887e",
          },
        },
      ],
      publishers: [
        {
          id: 8173,
          name: "Axolot Games",
          _id: {
            $oid: "6694e169ecde32334031887f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e169ecde323340318880",
          },
        },
      ],
      themes: [
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e169ecde323340318881",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "raft",
    updatedAt: {
      $date: "2024-07-15T08:44:25.566Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9991",
    },
    review: "",
    playTime: 6,
    createdAt: "2024-01-23T09:03:30.712Z",
    status: "completed",
    name: "Scorn",
    screenshotSize: 0,
    platform: "steam",
    lastPlay: "2022-11-25",
    rating: 3,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4v5c.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 19817,
      cover: {
        id: 226992,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4v5c.jpg",
        game: 19817,
      },
      aggregated_rating: 63.33333333333334,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e177ecde323340318a92",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e177ecde323340318a93",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e177ecde323340318a94",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e177ecde323340318a95",
          },
        },
      ],
      developers: [
        {
          id: 10219,
          name: "Ebb Software",
          _id: {
            $oid: "6694e177ecde323340318a96",
          },
        },
      ],
      publishers: [
        {
          id: 10219,
          name: "Ebb Software",
          _id: {
            $oid: "6694e177ecde323340318a97",
          },
        },
        {
          id: 37893,
          name: "Kepler Interactive",
          _id: {
            $oid: "6694e177ecde323340318a98",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e177ecde323340318a99",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e177ecde323340318a9a",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e177ecde323340318a9b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "scorn",
    updatedAt: {
      $date: "2024-07-15T08:44:39.081Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9992",
    },
    createdAt: "2024-01-23T08:54:04.518Z",
    review: "",
    playTime: 22,
    platform: "steam",
    name: "Marvel's Spider-Man Remastered",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2022-11-24",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co52vm.jpg",
    status: "completed",
    rating: 8.2,
    igdb: {
      id: 138949,
      cover: {
        id: 237010,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co52vm.jpg",
        game: 138949,
      },
      aggregated_rating: 78.2,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e182ecde323340318cb6",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e182ecde323340318cb7",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e182ecde323340318cb8",
          },
        },
      ],
      developers: [
        {
          id: 834,
          name: "Insomniac Games",
          _id: {
            $oid: "6694e182ecde323340318cb9",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694e182ecde323340318cba",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e182ecde323340318cbb",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e182ecde323340318cbc",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e182ecde323340318cbd",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e182ecde323340318cbe",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e182ecde323340318cbf",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "marvels-spider-man-remastered",
    updatedAt: {
      $date: "2024-07-15T08:44:50.986Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9993",
    },
    name: "Grounded",
    playTime: 25,
    lastPlay: "2022-11-16",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5d1l.jpg",
    screenshotSize: 0,
    rating: 7.7,
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-04-13T19:23:10.158Z",
    platform: "steam",
    igdb: {
      id: 125624,
      cover: {
        id: 250185,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5d1l.jpg",
        game: 125624,
      },
      aggregated_rating: 78.2,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e18decde323340318ee4",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e18decde323340318ee5",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e18decde323340318ee6",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e18decde323340318ee7",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e18decde323340318ee8",
          },
        },
      ],
      developers: [
        {
          id: 47,
          name: "Obsidian Entertainment",
          _id: {
            $oid: "6694e18decde323340318ee9",
          },
        },
      ],
      publishers: [
        {
          id: 17966,
          name: "Xbox Game Studios",
          _id: {
            $oid: "6694e18decde323340318eea",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e18decde323340318eeb",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e18decde323340318eec",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e18decde323340318eed",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e18decde323340318eee",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "grounded",
    updatedAt: {
      $date: "2024-07-15T08:45:01.397Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9994",
    },
    createdAt: "2024-01-23T08:56:40.776Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co65yk.jpg",
    screenshotSize: 0,
    playTime: 24,
    platform: "steam",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Dying Light 2: Stay Human",
    lastPlay: "2022-11-12",
    status: "completed",
    rating: 7.3,
    igdb: {
      id: 102584,
      cover: {
        id: 287660,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co65yk.jpg",
        game: 102584,
      },
      aggregated_rating: 76.81818181818181,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e19becde32334031911e",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e19becde32334031911f",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e19becde323340319120",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e19becde323340319121",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e19becde323340319122",
          },
        },
      ],
      developers: [
        {
          id: 13327,
          name: "Techland Publishing",
          _id: {
            $oid: "6694e19becde323340319123",
          },
        },
        {
          id: 108,
          name: "Techland",
          _id: {
            $oid: "6694e19becde323340319124",
          },
        },
      ],
      publishers: [
        {
          id: 13327,
          name: "Techland Publishing",
          _id: {
            $oid: "6694e19becde323340319125",
          },
        },
        {
          id: 1217,
          name: "Spike ChunSoft",
          _id: {
            $oid: "6694e19becde323340319126",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e19becde323340319127",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e19becde323340319128",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e19becde323340319129",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e19becde32334031912a",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e19becde32334031912b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "dying-light-2-stay-human",
    updatedAt: {
      $date: "2024-07-15T08:45:15.977Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9995",
    },
    status: "completed",
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1tp9.jpg",
    name: "Uncharted: The Lost Legacy",
    playTime: 10,
    rating: 7,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    lastPlay: "2022-11-02",
    screenshotSize: 0,
    createdAt: "2024-01-23T08:42:41.711Z",
    igdb: {
      id: 26193,
      cover: {
        id: 85149,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1tp9.jpg",
        game: 26193,
      },
      aggregated_rating: 86.77272727272727,
      aggregated_rating_count: 25,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e1abecde323340319369",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e1abecde32334031936a",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e1abecde32334031936b",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e1abecde32334031936c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e1abecde32334031936d",
          },
        },
      ],
      developers: [
        {
          id: 401,
          name: "Naughty Dog",
          _id: {
            $oid: "6694e1abecde32334031936e",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694e1abecde32334031936f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e1abecde323340319370",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e1abecde323340319371",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e1abecde323340319372",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "uncharted-the-lost-legacy",
    updatedAt: {
      $date: "2024-07-15T08:45:31.048Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9996",
    },
    createdAt: "2024-03-04T11:06:44.960Z",
    rating: 7.1,
    name: "In Sound Mind",
    status: "completed",
    screenshotSize: 0,
    playTime: 14,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3p6y.jpg",
    lastPlay: "2022-10-12",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    platform: "epicGames",
    igdb: {
      id: 121084,
      cover: {
        id: 172618,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3p6y.jpg",
        game: 121084,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e1b5ecde3233403195ba",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e1b5ecde3233403195bb",
          },
        },
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e1b5ecde3233403195bc",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e1b5ecde3233403195bd",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e1b5ecde3233403195be",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e1b5ecde3233403195bf",
          },
        },
      ],
      developers: [
        {
          id: 5967,
          name: "We Create Stuff",
          _id: {
            $oid: "6694e1b5ecde3233403195c0",
          },
        },
      ],
      publishers: [
        {
          id: 14755,
          name: "Modus Games",
          _id: {
            $oid: "6694e1b5ecde3233403195c1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e1b5ecde3233403195c2",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e1b5ecde3233403195c3",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e1b5ecde3233403195c4",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e1b5ecde3233403195c5",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "in-sound-mind",
    updatedAt: {
      $date: "2024-07-15T08:45:41.883Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9997",
    },
    status: "completed",
    playTime: 18,
    rating: 8.5,
    review: "",
    lastPlay: "2022-10-05",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1r7h.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-01-21T09:00:25.568Z",
    screenshotSize: 0,
    platform: "steam",
    name: "Uncharted 4: A Thief's End",
    igdb: {
      id: 7331,
      cover: {
        id: 81917,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1r7h.jpg",
        game: 7331,
      },
      aggregated_rating: 93.24,
      aggregated_rating_count: 26,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e1c1ecde323340319819",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e1c1ecde32334031981a",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e1c1ecde32334031981b",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e1c1ecde32334031981c",
          },
        },
      ],
      developers: [
        {
          id: 401,
          name: "Naughty Dog",
          _id: {
            $oid: "6694e1c1ecde32334031981d",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694e1c1ecde32334031981e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e1c1ecde32334031981f",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e1c1ecde323340319820",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e1c1ecde323340319821",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e1c1ecde323340319822",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e1c1ecde323340319823",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "uncharted-4-a-thiefs-end",
    updatedAt: {
      $date: "2024-07-15T08:45:53.501Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9998",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    name: "A Plague Tale: Requiem",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5pwb.jpg",
    playTime: 17,
    lastPlay: "2022-09-30",
    platform: "steam",
    status: "completed",
    rating: 7,
    screenshotSize: 0,
    createdAt: "2024-01-23T08:59:06.603Z",
    igdb: {
      id: 152242,
      cover: {
        id: 266843,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5pwb.jpg",
        game: 152242,
      },
      aggregated_rating: 85.5,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e1ccecde323340319a82",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e1ccecde323340319a83",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e1ccecde323340319a84",
          },
        },
      ],
      developers: [
        {
          id: 442,
          name: "Asobo Studio",
          _id: {
            $oid: "6694e1ccecde323340319a85",
          },
        },
      ],
      publishers: [
        {
          id: 110,
          name: "Focus Entertainment",
          _id: {
            $oid: "6694e1ccecde323340319a86",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e1ccecde323340319a87",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e1ccecde323340319a88",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e1ccecde323340319a89",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e1ccecde323340319a8a",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e1ccecde323340319a8b",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e1ccecde323340319a8c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "a-plague-tale-requiem",
    updatedAt: {
      $date: "2024-07-15T08:46:04.169Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9999",
    },
    platform: "steam",
    lastPlay: "2022-09-14",
    playTime: 536,
    name: "Tom Clancy's Rainbow Six Siege",
    createdAt: "2024-03-04T13:41:33.604Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5cxf.jpg",
    screenshotSize: 0,
    rating: 8.2,
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "activePlaying",
    igdb: {
      id: 7360,
      cover: {
        id: 250035,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5cxf.jpg",
        game: 7360,
      },
      aggregated_rating: 74.16666666666667,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e1d6ecde323340319cf6",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e1d6ecde323340319cf7",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e1d6ecde323340319cf8",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e1d6ecde323340319cf9",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e1d6ecde323340319cfa",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e1d6ecde323340319cfb",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e1d6ecde323340319cfc",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e1d6ecde323340319cfd",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e1d6ecde323340319cfe",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e1d6ecde323340319cff",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "tom-clancys-rainbow-six-siege",
    updatedAt: {
      $date: "2024-07-15T08:46:14.743Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a999a",
    },
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co75h8.jpg",
    name: "Fall Guys",
    rating: 7.1,
    createdAt: "2024-03-04T14:05:42.393Z",
    screenshotSize: 0,
    status: "activePlaying",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 18,
    lastPlay: "2022-08-19",
    platform: "steam",
    igdb: {
      id: 119313,
      cover: {
        id: 333692,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co75h8.jpg",
        game: 119313,
      },
      aggregated_rating: 76.6,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e1e1ecde323340319f73",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e1e1ecde323340319f74",
          },
        },
        {
          id: 6,
          name: "Battle Royale",
          _id: {
            $oid: "6694e1e1ecde323340319f75",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e1e1ecde323340319f76",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694e1e1ecde323340319f77",
          },
        },
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694e1e1ecde323340319f78",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e1e1ecde323340319f79",
          },
        },
      ],
      developers: [
        {
          id: 2581,
          name: "Mediatonic",
          _id: {
            $oid: "6694e1e1ecde323340319f7a",
          },
        },
      ],
      publishers: [
        {
          id: 634,
          name: "Devolver Digital",
          _id: {
            $oid: "6694e1e1ecde323340319f7b",
          },
        },
        {
          id: 17463,
          name: "Epic Games",
          _id: {
            $oid: "6694e1e1ecde323340319f7c",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e1e1ecde323340319f7d",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e1e1ecde323340319f7e",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e1e1ecde323340319f7f",
          },
        },
        {
          id: 40,
          name: "Party",
          _id: {
            $oid: "6694e1e1ecde323340319f80",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "fall-guys",
    updatedAt: {
      $date: "2024-07-15T08:46:25.556Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a999b",
    },
    platform: "steam",
    lastPlay: "2022-08-19",
    screenshotSize: 0,
    review: "",
    name: "V Rising",
    rating: 7.9,
    status: "abandoned",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co859m.jpg",
    createdAt: "2024-03-04T13:57:57.244Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 30,
    igdb: {
      id: 148228,
      cover: {
        id: 380074,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co859m.jpg",
        game: 148228,
      },
      aggregated_rating: 88.6,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e1eeecde32334031a202",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e1eeecde32334031a203",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e1eeecde32334031a204",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e1eeecde32334031a205",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e1eeecde32334031a206",
          },
        },
      ],
      developers: [
        {
          id: 1109,
          name: "Stunlock Studios",
          _id: {
            $oid: "6694e1eeecde32334031a207",
          },
        },
      ],
      publishers: [
        {
          id: 1109,
          name: "Stunlock Studios",
          _id: {
            $oid: "6694e1eeecde32334031a208",
          },
        },
        {
          id: 3595,
          name: "Tencent Games",
          _id: {
            $oid: "6694e1eeecde32334031a209",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e1eeecde32334031a20a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e1eeecde32334031a20b",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e1eeecde32334031a20c",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e1eeecde32334031a20d",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e1eeecde32334031a20e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "v-rising",
    updatedAt: {
      $date: "2024-07-15T08:46:38.638Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a999c",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2558.jpg",
    name: "Sea of Thieves",
    screenshotSize: 0,
    rating: 8.2,
    status: "activePlaying",
    createdAt: "2024-03-04T13:46:31.811Z",
    playTime: 138,
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2022-08-19",
    review: "",
    igdb: {
      id: 11137,
      cover: {
        id: 99980,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2558.jpg",
        game: 11137,
      },
      aggregated_rating: 66.41666666666667,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e205ecde32334031a49d",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e205ecde32334031a49e",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e205ecde32334031a49f",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e205ecde32334031a4a0",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e205ecde32334031a4a1",
          },
        },
      ],
      developers: [
        {
          id: 771,
          name: "Rare",
          _id: {
            $oid: "6694e205ecde32334031a4a2",
          },
        },
      ],
      publishers: [
        {
          id: 17966,
          name: "Xbox Game Studios",
          _id: {
            $oid: "6694e205ecde32334031a4a3",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e205ecde32334031a4a4",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e205ecde32334031a4a5",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e205ecde32334031a4a6",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e205ecde32334031a4a7",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "sea-of-thieves",
    updatedAt: {
      $date: "2024-07-15T08:47:01.497Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a999d",
    },
    name: "Hades",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co39vc.jpg",
    createdAt: "2024-03-04T14:07:37.452Z",
    screenshotSize: 0,
    platform: "steam",
    playTime: 15,
    rating: 8.1,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2022-08-16",
    review: "",
    status: "abandoned",
    igdb: {
      id: 113112,
      cover: {
        id: 152760,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co39vc.jpg",
        game: 113112,
      },
      aggregated_rating: 94.0625,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e212ecde32334031a741",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e212ecde32334031a742",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e212ecde32334031a743",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e212ecde32334031a744",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e212ecde32334031a745",
          },
        },
      ],
      developers: [
        {
          id: 928,
          name: "Supergiant Games",
          _id: {
            $oid: "6694e212ecde32334031a746",
          },
        },
      ],
      publishers: [
        {
          id: 928,
          name: "Supergiant Games",
          _id: {
            $oid: "6694e212ecde32334031a747",
          },
        },
        {
          id: 27224,
          name: "Netflix",
          _id: {
            $oid: "6694e212ecde32334031a748",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e212ecde32334031a749",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e212ecde32334031a74a",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e212ecde32334031a74b",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e212ecde32334031a74c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hades",
    updatedAt: {
      $date: "2024-07-15T08:47:14.471Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a999e",
    },
    lastPlay: "2022-07-29",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co39ve.jpg",
    screenshotSize: 0,
    createdAt: "2024-03-04T12:06:18.500Z",
    rating: 8.3,
    playTime: 73,
    platform: "steam",
    status: "completed",
    review: "",
    name: "Subnautica: Below Zero",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 107315,
      cover: {
        id: 152762,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co39ve.jpg",
        game: 107315,
      },
      aggregated_rating: 85.2,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e21becde32334031a9f2",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e21becde32334031a9f3",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e21becde32334031a9f4",
          },
        },
      ],
      developers: [
        {
          id: 856,
          name: "Unknown Worlds Entertainment",
          _id: {
            $oid: "6694e21becde32334031a9f5",
          },
        },
      ],
      publishers: [
        {
          id: 856,
          name: "Unknown Worlds Entertainment",
          _id: {
            $oid: "6694e21becde32334031a9f6",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e21becde32334031a9f7",
          },
        },
      ],
      themes: [
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e21becde32334031a9f8",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e21becde32334031a9f9",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e21becde32334031a9fa",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "subnautica-below-zero",
    updatedAt: {
      $date: "2024-07-15T08:47:23.455Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a999f",
    },
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2lbd.jpg",
    lastPlay: "2022-07-21",
    name: "Grand Theft Auto V",
    platform: "steam",
    screenshotSize: 0,
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 140,
    createdAt: "2024-01-21T08:32:20.069Z",
    rating: 9,
    igdb: {
      id: 1020,
      cover: {
        id: 120937,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2lbd.jpg",
        game: 1020,
      },
      aggregated_rating: 88.13793103448276,
      aggregated_rating_count: 37,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e224ecde32334031aca9",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e224ecde32334031acaa",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e224ecde32334031acab",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e224ecde32334031acac",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694e224ecde32334031acad",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e224ecde32334031acae",
          },
        },
      ],
      developers: [
        {
          id: 365,
          name: "Rockstar North",
          _id: {
            $oid: "6694e224ecde32334031acaf",
          },
        },
      ],
      publishers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694e224ecde32334031acb0",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694e224ecde32334031acb1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e224ecde32334031acb2",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e224ecde32334031acb3",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e224ecde32334031acb4",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e224ecde32334031acb5",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e224ecde32334031acb6",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e224ecde32334031acb7",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "grand-theft-auto-v",
    updatedAt: {
      $date: "2024-07-15T08:47:32.808Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a0",
    },
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    createdAt: "2024-01-21T07:29:50.145Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1tmu.jpg",
    status: "completed",
    lastPlay: "2022-07-21",
    screenshotSize: 0,
    playTime: 30,
    name: "God of War",
    rating: 9,
    igdb: {
      id: 19560,
      cover: {
        id: 85062,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1tmu.jpg",
        game: 19560,
      },
      aggregated_rating: 96.23076923076923,
      aggregated_rating_count: 30,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e230ecde32334031af75",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e230ecde32334031af76",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e230ecde32334031af77",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e230ecde32334031af78",
          },
        },
      ],
      developers: [
        {
          id: 4357,
          name: "SIE Santa Monica Studio",
          _id: {
            $oid: "6694e230ecde32334031af79",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694e230ecde32334031af7a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e230ecde32334031af7b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e230ecde32334031af7c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e230ecde32334031af7d",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e230ecde32334031af7e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "god-of-war",
    updatedAt: {
      $date: "2024-07-15T08:47:44.615Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a1",
    },
    name: "Distraint",
    playTime: 3,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4crl.jpg",
    rating: 7.8,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    lastPlay: "2022-07-15",
    review: "",
    status: "completed",
    createdAt: "2024-04-11T09:36:44.110Z",
    screenshotSize: 0,
    igdb: {
      id: 13664,
      cover: {
        id: 203169,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4crl.jpg",
        game: 13664,
      },
      aggregated_rating: 65,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e23aecde32334031b246",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e23aecde32334031b247",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e23aecde32334031b248",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e23aecde32334031b249",
          },
        },
      ],
      developers: [
        {
          id: 7071,
          name: "Jesse Makkonen",
          _id: {
            $oid: "6694e23aecde32334031b24a",
          },
        },
      ],
      publishers: [
        {
          id: 7071,
          name: "Jesse Makkonen",
          _id: {
            $oid: "6694e23aecde32334031b24b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e23aecde32334031b24c",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e23aecde32334031b24d",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "distraint",
    updatedAt: {
      $date: "2024-07-15T08:47:54.480Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a2",
    },
    createdAt: "2024-03-04T11:00:02.552Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "FAR: Lone Sails",
    screenshotSize: 0,
    lastPlay: "2022-07-07",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co27qa.jpg",
    playTime: 7,
    rating: 7.1,
    status: "completed",
    review: "",
    igdb: {
      id: 19520,
      cover: {
        id: 103330,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co27qa.jpg",
        game: 19520,
      },
      aggregated_rating: 77.5,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e243ecde32334031b51d",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e243ecde32334031b51e",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e243ecde32334031b51f",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e243ecde32334031b520",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e243ecde32334031b521",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e243ecde32334031b522",
          },
        },
      ],
      developers: [
        {
          id: 13947,
          name: "Okomotive",
          _id: {
            $oid: "6694e243ecde32334031b523",
          },
        },
      ],
      publishers: [
        {
          id: 10352,
          name: "Mixtvision",
          _id: {
            $oid: "6694e243ecde32334031b524",
          },
        },
        {
          id: 12419,
          name: "Assemble Entertainment",
          _id: {
            $oid: "6694e243ecde32334031b525",
          },
        },
        {
          id: 8944,
          name: "H2 Interactive Co., Ltd.",
          _id: {
            $oid: "6694e243ecde32334031b526",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e243ecde32334031b527",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e243ecde32334031b528",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e243ecde32334031b529",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e243ecde32334031b52a",
          },
        },
        {
          id: 35,
          name: "Kids",
          _id: {
            $oid: "6694e243ecde32334031b52b",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e243ecde32334031b52c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "far-lone-sails",
    updatedAt: {
      $date: "2024-07-15T08:48:03.851Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a3",
    },
    name: "Choo-Choo Charles",
    rating: 6.8,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-01-23T09:02:20.983Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co62bw.jpg",
    status: "completed",
    playTime: 3,
    platform: "steam",
    review: "",
    lastPlay: "2022-07-06",
    igdb: {
      id: 173432,
      cover: {
        id: 282956,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co62bw.jpg",
        game: 173432,
      },
      aggregated_rating: 70,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e24cecde32334031b80c",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e24cecde32334031b80d",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e24cecde32334031b80e",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e24cecde32334031b80f",
          },
        },
      ],
      developers: [
        {
          id: 24128,
          name: "Two Star Games",
          _id: {
            $oid: "6694e24cecde32334031b810",
          },
        },
      ],
      publishers: [
        {
          id: 24128,
          name: "Two Star Games",
          _id: {
            $oid: "6694e24cecde32334031b811",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e24cecde32334031b812",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e24cecde32334031b813",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e24cecde32334031b814",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e24cecde32334031b815",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e24cecde32334031b816",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "choo-choo-charles",
    updatedAt: {
      $date: "2024-07-15T08:48:12.617Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a4",
    },
    review: "",
    createdAt: "2024-03-04T10:56:39.618Z",
    name: "Tom Clancy's Ghost Recon: Wildlands",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1ku7.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    playTime: 45,
    rating: 7.8,
    lastPlay: "2022-07-06",
    platform: "steam",
    igdb: {
      id: 11171,
      cover: {
        id: 73663,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1ku7.jpg",
        game: 11171,
      },
      aggregated_rating: 72.9,
      aggregated_rating_count: 26,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e25aecde32334031bb01",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e25aecde32334031bb02",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e25aecde32334031bb03",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e25aecde32334031bb04",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e25aecde32334031bb05",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e25aecde32334031bb06",
          },
        },
      ],
      developers: [
        {
          id: 841,
          name: "Ubisoft Paris",
          _id: {
            $oid: "6694e25aecde32334031bb07",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e25aecde32334031bb08",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e25aecde32334031bb09",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e25aecde32334031bb0a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e25aecde32334031bb0b",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e25aecde32334031bb0c",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e25aecde32334031bb0d",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "tom-clancys-ghost-recon-wildlands",
    updatedAt: {
      $date: "2024-07-15T08:48:26.752Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a5",
    },
    review: "",
    screenshotSize: 0,
    platform: "steam",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co222y.jpg",
    createdAt: "2024-04-11T12:53:37.795Z",
    name: "The Fidelio Incident",
    lastPlay: "2022-06-22",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.1,
    playTime: 2,
    igdb: {
      id: 36707,
      cover: {
        id: 96010,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co222y.jpg",
        game: 36707,
      },
      aggregated_rating: 70.6,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e266ecde32334031be05",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e266ecde32334031be06",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e266ecde32334031be07",
          },
        },
      ],
      developers: [
        {
          id: 12873,
          name: "Act 3 Games",
          _id: {
            $oid: "6694e266ecde32334031be08",
          },
        },
      ],
      publishers: [
        {
          id: 12873,
          name: "Act 3 Games",
          _id: {
            $oid: "6694e266ecde32334031be09",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e266ecde32334031be0a",
          },
        },
      ],
      themes: [
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e266ecde32334031be0b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-fidelio-incident",
    updatedAt: {
      $date: "2024-07-15T08:48:38.537Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a6",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-04-13T19:51:49.913Z",
    rating: 7.7,
    playTime: 10,
    name: "Maneater",
    status: "completed",
    screenshotSize: 0,
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1lx6.jpg",
    lastPlay: "2022-06-09",
    platform: "xboxPc",
    igdb: {
      id: 46800,
      cover: {
        id: 75066,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1lx6.jpg",
        game: 46800,
      },
      aggregated_rating: 72.85714285714286,
      aggregated_rating_count: 18,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e270ecde32334031c10a",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e270ecde32334031c10b",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e270ecde32334031c10c",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e270ecde32334031c10d",
          },
        },
      ],
      developers: [
        {
          id: 743,
          name: "Tripwire Interactive",
          _id: {
            $oid: "6694e270ecde32334031c10e",
          },
        },
        {
          id: 15688,
          name: "Blindside Interactive",
          _id: {
            $oid: "6694e270ecde32334031c10f",
          },
        },
      ],
      publishers: [
        {
          id: 743,
          name: "Tripwire Interactive",
          _id: {
            $oid: "6694e270ecde32334031c110",
          },
        },
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694e270ecde32334031c111",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e270ecde32334031c112",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e270ecde32334031c113",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e270ecde32334031c114",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "maneater",
    updatedAt: {
      $date: "2024-07-15T08:48:48.555Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a7",
    },
    status: "abandoned",
    name: "Yakuza 0",
    screenshotSize: 0,
    playTime: 20,
    lastPlay: "2022-04-27",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co252x.jpg",
    rating: 7.7,
    createdAt: "2024-03-04T14:04:57.975Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    igdb: {
      id: 11397,
      cover: {
        id: 99897,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co252x.jpg",
        game: 11397,
      },
      aggregated_rating: 86,
      aggregated_rating_count: 22,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e279ecde32334031c41e",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e279ecde32334031c41f",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e279ecde32334031c420",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e279ecde32334031c421",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e279ecde32334031c422",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e279ecde32334031c423",
          },
        },
      ],
      developers: [
        {
          id: 14150,
          name: "Ryū Ga Gotoku Studios",
          _id: {
            $oid: "6694e279ecde32334031c424",
          },
        },
        {
          id: 15878,
          name: "Sega Games",
          _id: {
            $oid: "6694e279ecde32334031c425",
          },
        },
      ],
      publishers: [
        {
          id: 15878,
          name: "Sega Games",
          _id: {
            $oid: "6694e279ecde32334031c426",
          },
        },
        {
          id: 112,
          name: "Sega",
          _id: {
            $oid: "6694e279ecde32334031c427",
          },
        },
        {
          id: 14087,
          name: "Sega Corporation",
          _id: {
            $oid: "6694e279ecde32334031c428",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e279ecde32334031c429",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e279ecde32334031c42a",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e279ecde32334031c42b",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e279ecde32334031c42c",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e279ecde32334031c42d",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "yakuza-0",
    updatedAt: {
      $date: "2024-07-15T08:48:57.988Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a8",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5zky.jpg",
    playTime: 210,
    review: "",
    lastPlay: "2022-02-04",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-04T13:44:51.736Z",
    platform: "steam",
    rating: 8.2,
    name: "Dead by Daylight",
    status: "activePlaying",
    screenshotSize: 0,
    igdb: {
      id: 18866,
      cover: {
        id: 279394,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5zky.jpg",
        game: 18866,
      },
      aggregated_rating: 67.11111111111111,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e284ecde32334031c747",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e284ecde32334031c748",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e284ecde32334031c749",
          },
        },
      ],
      genres: [
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e284ecde32334031c74a",
          },
        },
      ],
      developers: [
        {
          id: 1260,
          name: "Behaviour Interactive",
          _id: {
            $oid: "6694e284ecde32334031c74b",
          },
        },
      ],
      publishers: [
        {
          id: 1260,
          name: "Behaviour Interactive",
          _id: {
            $oid: "6694e284ecde32334031c74c",
          },
        },
        {
          id: 12898,
          name: "Starbreeze Publishing",
          _id: {
            $oid: "6694e284ecde32334031c74d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e284ecde32334031c74e",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e284ecde32334031c74f",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e284ecde32334031c750",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e284ecde32334031c751",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e284ecde32334031c752",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e284ecde32334031c753",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "dead-by-daylight",
    updatedAt: {
      $date: "2024-07-15T08:49:08.282Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99a9",
    },
    createdAt: "2024-01-23T09:04:25.308Z",
    name: "A Memoir Blue",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3hep.jpg",
    rating: 4.6,
    review: "",
    lastPlay: "2022-02-02",
    playTime: 1,
    screenshotSize: 0,
    platform: "steam",
    igdb: {
      id: 106856,
      cover: {
        id: 162529,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3hep.jpg",
        game: 106856,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e292ecde32334031ca7a",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Point-and-click",
          _id: {
            $oid: "6694e292ecde32334031ca7b",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e292ecde32334031ca7c",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e292ecde32334031ca7d",
          },
        },
      ],
      developers: [
        {
          id: 36487,
          name: "Cloisters Interactive",
          _id: {
            $oid: "6694e292ecde32334031ca7e",
          },
        },
      ],
      publishers: [
        {
          id: 11662,
          name: "Annapurna Interactive",
          _id: {
            $oid: "6694e292ecde32334031ca7f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e292ecde32334031ca80",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e292ecde32334031ca81",
          },
        },
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e292ecde32334031ca82",
          },
        },
      ],
      themes: [
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e292ecde32334031ca83",
          },
        },
        {
          id: 35,
          name: "Kids",
          _id: {
            $oid: "6694e292ecde32334031ca84",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "a-memoir-blue",
    updatedAt: {
      $date: "2024-07-15T08:49:22.029Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99aa",
    },
    playTime: 25,
    screenshotSize: 0,
    platform: "steam",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Forza Horizon 4",
    lastPlay: "2021-12-26",
    createdAt: "2024-03-04T14:01:03.922Z",
    status: "activePlaying",
    rating: 8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2e1a.jpg",
    igdb: {
      id: 82090,
      cover: {
        id: 111502,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2e1a.jpg",
        game: 82090,
      },
      aggregated_rating: 90.78571428571429,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e29fecde32334031cdb6",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e29fecde32334031cdb7",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e29fecde32334031cdb8",
          },
        },
        {
          id: 6,
          name: "Battle Royale",
          _id: {
            $oid: "6694e29fecde32334031cdb9",
          },
        },
      ],
      genres: [
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694e29fecde32334031cdba",
          },
        },
      ],
      developers: [
        {
          id: 1432,
          name: "Playground Games",
          _id: {
            $oid: "6694e29fecde32334031cdbb",
          },
        },
      ],
      publishers: [
        {
          id: 17966,
          name: "Xbox Game Studios",
          _id: {
            $oid: "6694e29fecde32334031cdbc",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e29fecde32334031cdbd",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e29fecde32334031cdbe",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e29fecde32334031cdbf",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e29fecde32334031cdc0",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "forza-horizon-4",
    updatedAt: {
      $date: "2024-07-15T08:49:35.904Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ab",
    },
    playTime: 15,
    screenshotSize: 0,
    lastPlay: "2021-11-19",
    review: "",
    rating: 8.3,
    name: "Ori and the Will of the Wisps",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2e1l.jpg",
    platform: "xboxPc",
    status: "completed",
    createdAt: "2024-03-04T12:53:03.079Z",
    igdb: {
      id: 37001,
      cover: {
        id: 111513,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2e1l.jpg",
        game: 37001,
      },
      aggregated_rating: 90.75,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e2adecde32334031d0fd",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e2adecde32334031d0fe",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e2adecde32334031d0ff",
          },
        },
      ],
      developers: [
        {
          id: 5052,
          name: "Moon Studios",
          _id: {
            $oid: "6694e2adecde32334031d100",
          },
        },
      ],
      publishers: [
        {
          id: 17966,
          name: "Xbox Game Studios",
          _id: {
            $oid: "6694e2adecde32334031d101",
          },
        },
        {
          id: 5442,
          name: "iam8bit",
          _id: {
            $oid: "6694e2adecde32334031d102",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e2adecde32334031d103",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e2adecde32334031d104",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e2adecde32334031d105",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "ori-and-the-will-of-the-wisps",
    updatedAt: {
      $date: "2024-07-15T08:49:49.666Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ac",
    },
    lastPlay: "2021-11-18",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co49u0.jpg",
    review: "",
    name: "The Gunk",
    rating: 7.1,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    playTime: 5,
    platform: "xboxPc",
    createdAt: "2024-01-23T09:11:09.269Z",
    status: "completed",
    igdb: {
      id: 136000,
      cover: {
        id: 199368,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co49u0.jpg",
        game: 136000,
      },
      aggregated_rating: 66.25,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e2b6ecde32334031d44b",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e2b6ecde32334031d44c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e2b6ecde32334031d44d",
          },
        },
      ],
      developers: [
        {
          id: 2542,
          name: "Image & Form",
          _id: {
            $oid: "6694e2b6ecde32334031d44e",
          },
        },
      ],
      publishers: [
        {
          id: 16337,
          name: "Thunderful",
          _id: {
            $oid: "6694e2b6ecde32334031d44f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e2b6ecde32334031d450",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e2b6ecde32334031d451",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-gunk",
    updatedAt: {
      $date: "2024-07-15T08:49:58.420Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ad",
    },
    playTime: 25,
    platform: "steam",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-04-13T19:33:53.668Z",
    lastPlay: "2021-11-16",
    screenshotSize: 0,
    review: "",
    rating: 7.7,
    name: "Back 4 Blood",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2mhj.jpg",
    igdb: {
      id: 116200,
      cover: {
        id: 122455,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2mhj.jpg",
        game: 116200,
      },
      aggregated_rating: 78.8,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e2c0ecde32334031d79e",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e2c0ecde32334031d79f",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e2c0ecde32334031d7a0",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e2c0ecde32334031d7a1",
          },
        },
      ],
      developers: [
        {
          id: 55,
          name: "Turtle Rock Studios",
          _id: {
            $oid: "6694e2c0ecde32334031d7a2",
          },
        },
      ],
      publishers: [
        {
          id: 14055,
          name: "Warner Bros. Interactive Entertainment",
          _id: {
            $oid: "6694e2c0ecde32334031d7a3",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e2c0ecde32334031d7a4",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e2c0ecde32334031d7a5",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e2c0ecde32334031d7a6",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e2c0ecde32334031d7a7",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "back-4-blood",
    updatedAt: {
      $date: "2024-07-15T08:50:08.797Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ae",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2npg.jpg",
    playTime: 27,
    rating: 7.3,
    lastPlay: "2021-11-11",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    review: "",
    createdAt: "2024-03-04T11:03:36.433Z",
    name: "Far Cry 6",
    status: "completed",
    igdb: {
      id: 126290,
      cover: {
        id: 124036,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2npg.jpg",
        game: 126290,
      },
      aggregated_rating: 81.81818181818181,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e2caecde32334031dafe",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e2caecde32334031daff",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e2caecde32334031db00",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e2caecde32334031db01",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e2caecde32334031db02",
          },
        },
      ],
      developers: [
        {
          id: 847,
          name: "Ubisoft Toronto",
          _id: {
            $oid: "6694e2caecde32334031db03",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e2caecde32334031db04",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e2caecde32334031db05",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e2caecde32334031db06",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e2caecde32334031db07",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "far-cry-6",
    updatedAt: {
      $date: "2024-07-15T08:50:18.791Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99af",
    },
    platform: "steam",
    review: "",
    createdAt: "2024-03-04T11:55:34.024Z",
    screenshotSize: 0,
    playTime: 3,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2ehy.jpg",
    status: "completed",
    rating: 5.3,
    name: "Distraint 2",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2021-11-10",
    igdb: {
      id: 27499,
      cover: {
        id: 112102,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2ehy.jpg",
        game: 27499,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e2d6ecde32334031de68",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e2d6ecde32334031de69",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e2d6ecde32334031de6a",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e2d6ecde32334031de6b",
          },
        },
      ],
      developers: [
        {
          id: 7071,
          name: "Jesse Makkonen",
          _id: {
            $oid: "6694e2d6ecde32334031de6c",
          },
        },
      ],
      publishers: [
        {
          id: 7071,
          name: "Jesse Makkonen",
          _id: {
            $oid: "6694e2d6ecde32334031de6d",
          },
        },
        {
          id: 24818,
          name: "Ratalaika Games",
          _id: {
            $oid: "6694e2d6ecde32334031de6e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e2d6ecde32334031de6f",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e2d6ecde32334031de70",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "distraint-2",
    updatedAt: {
      $date: "2024-07-15T08:50:30.375Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b0",
    },
    status: "completed",
    name: "The Forest",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20x5.jpg",
    rating: 7.9,
    lastPlay: "2021-11-05",
    screenshotSize: 0,
    review: "",
    createdAt: "2024-03-04T11:11:17.662Z",
    playTime: 12,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 7504,
      cover: {
        id: 94505,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20x5.jpg",
        game: 7504,
      },
      aggregated_rating: 86,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e2eeecde32334031e1da",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e2eeecde32334031e1db",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e2eeecde32334031e1dc",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e2eeecde32334031e1dd",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e2eeecde32334031e1de",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e2eeecde32334031e1df",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e2eeecde32334031e1e0",
          },
        },
      ],
      developers: [
        {
          id: 3108,
          name: "Endnight Games Ltd",
          _id: {
            $oid: "6694e2eeecde32334031e1e1",
          },
        },
      ],
      publishers: [
        {
          id: 3108,
          name: "Endnight Games Ltd",
          _id: {
            $oid: "6694e2eeecde32334031e1e2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e2eeecde32334031e1e3",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694e2eeecde32334031e1e4",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e2eeecde32334031e1e5",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e2eeecde32334031e1e6",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e2eeecde32334031e1e7",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e2eeecde32334031e1e8",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-forest",
    updatedAt: {
      $date: "2024-07-15T08:50:54.265Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b1",
    },
    name: "Resident Evil Village",
    playTime: 16,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2zpu.jpg",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2021-10-23",
    platform: "steam",
    screenshotSize: 0,
    createdAt: "2024-01-23T09:00:11.955Z",
    rating: 8.5,
    status: "completed",
    igdb: {
      id: 55163,
      cover: {
        id: 139602,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2zpu.jpg",
        game: 55163,
      },
      aggregated_rating: 86.92857142857143,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e2fbecde32334031e561",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e2fbecde32334031e562",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e2fbecde32334031e563",
          },
        },
      ],
      developers: [
        {
          id: 42265,
          name: "Capcom Development Division 1",
          _id: {
            $oid: "6694e2fbecde32334031e564",
          },
        },
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694e2fbecde32334031e565",
          },
        },
      ],
      publishers: [
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694e2fbecde32334031e566",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e2fbecde32334031e567",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694e2fbecde32334031e568",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e2fbecde32334031e569",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e2fbecde32334031e56a",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e2fbecde32334031e56b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "resident-evil-village",
    updatedAt: {
      $date: "2024-07-15T08:51:07.457Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b2",
    },
    review: "",
    status: "completed",
    playTime: 25,
    screenshotSize: 0,
    lastPlay: "2021-10-14",
    createdAt: "2024-03-04T11:59:23.152Z",
    rating: 7.9,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "epicGames",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1izz.jpg",
    name: "Days Gone",
    igdb: {
      id: 19561,
      cover: {
        id: 71279,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1izz.jpg",
        game: 19561,
      },
      aggregated_rating: 74.6875,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e30aecde32334031e8ef",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e30aecde32334031e8f0",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e30aecde32334031e8f1",
          },
        },
      ],
      developers: [
        {
          id: 10019,
          name: "SIE Bend Studio",
          _id: {
            $oid: "6694e30aecde32334031e8f2",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694e30aecde32334031e8f3",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e30aecde32334031e8f4",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e30aecde32334031e8f5",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e30aecde32334031e8f6",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e30aecde32334031e8f7",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e30aecde32334031e8f8",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e30aecde32334031e8f9",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "days-gone",
    updatedAt: {
      $date: "2024-07-15T08:51:22.645Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b3",
    },
    createdAt: "2024-03-04T12:10:36.599Z",
    status: "completed",
    playTime: 7,
    review: "",
    lastPlay: "2021-10-08",
    name: "Little Nightmares II",
    rating: 7.8,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1p7d.jpg",
    platform: "steam",
    igdb: {
      id: 121760,
      cover: {
        id: 79321,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1p7d.jpg",
        game: 121760,
      },
      aggregated_rating: 82.23076923076923,
      aggregated_rating_count: 21,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e31decde32334031ec88",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e31decde32334031ec89",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e31decde32334031ec8a",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e31decde32334031ec8b",
          },
        },
      ],
      developers: [
        {
          id: 747,
          name: "Tarsier Studios",
          _id: {
            $oid: "6694e31decde32334031ec8c",
          },
        },
      ],
      publishers: [
        {
          id: 248,
          name: "Bandai Namco Entertainment",
          _id: {
            $oid: "6694e31decde32334031ec8d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e31decde32334031ec8e",
          },
        },
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e31decde32334031ec8f",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e31decde32334031ec90",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e31decde32334031ec91",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e31decde32334031ec92",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e31decde32334031ec93",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "little-nightmares-ii",
    updatedAt: {
      $date: "2024-07-15T08:51:41.339Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b4",
    },
    playTime: 20,
    review: "",
    screenshotSize: 0,
    status: "completed",
    rating: 7.2,
    lastPlay: "2021-10-07",
    createdAt: "2024-03-04T13:10:35.919Z",
    platform: "epicGames",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "The Sinking City",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co7kpe.jpg",
    igdb: {
      id: 18225,
      cover: {
        id: 353426,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co7kpe.jpg",
        game: 18225,
      },
      aggregated_rating: 70,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e333ecde32334031f02e",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e333ecde32334031f02f",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e333ecde32334031f030",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e333ecde32334031f031",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e333ecde32334031f032",
          },
        },
      ],
      developers: [
        {
          id: 2410,
          name: "Frogwares",
          _id: {
            $oid: "6694e333ecde32334031f033",
          },
        },
      ],
      publishers: [
        {
          id: 1803,
          name: "Bigben Interactive",
          _id: {
            $oid: "6694e333ecde32334031f034",
          },
        },
        {
          id: 2410,
          name: "Frogwares",
          _id: {
            $oid: "6694e333ecde32334031f035",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e333ecde32334031f036",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e333ecde32334031f037",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e333ecde32334031f038",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e333ecde32334031f039",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e333ecde32334031f03a",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-sinking-city",
    updatedAt: {
      $date: "2024-07-15T08:52:03.390Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b5",
    },
    review: "",
    lastPlay: "2021-10-07",
    screenshotSize: 0,
    platform: "steam",
    status: "completed",
    createdAt: "2024-03-04T11:46:40.961Z",
    playTime: 9,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1qlk.jpg",
    rating: 7.3,
    name: "Beholder",
    igdb: {
      id: 24905,
      cover: {
        id: 81128,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1qlk.jpg",
        game: 24905,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e33decde32334031f3e2",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e33decde32334031f3e3",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e33decde32334031f3e4",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e33decde32334031f3e5",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e33decde32334031f3e6",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e33decde32334031f3e7",
          },
        },
      ],
      developers: [
        {
          id: 11259,
          name: "Warm Lamp Games",
          _id: {
            $oid: "6694e33decde32334031f3e8",
          },
        },
      ],
      publishers: [
        {
          id: 8628,
          name: "Alawar Entertainment",
          _id: {
            $oid: "6694e33decde32334031f3e9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e33decde32334031f3ea",
          },
        },
      ],
      themes: [
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e33decde32334031f3eb",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e33decde32334031f3ec",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "beholder",
    updatedAt: {
      $date: "2024-07-15T08:52:13.145Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b6",
    },
    screenshotSize: 0,
    review: "",
    name: "Titanfall 2",
    platform: "steam",
    photo:
      "//images.igdb.com/igdb/image/upload/t_1080p/fhbeilnghyhhmjqhinqa.jpg",
    playTime: 28,
    createdAt: "2024-03-04T12:42:28.156Z",
    lastPlay: "2021-09-14",
    rating: 8,
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 17447,
      cover: {
        id: 18564,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/fhbeilnghyhhmjqhinqa.jpg",
        game: 17447,
      },
      aggregated_rating: 88.91304347826087,
      aggregated_rating_count: 29,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e348ecde32334031f79f",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e348ecde32334031f7a0",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e348ecde32334031f7a1",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e348ecde32334031f7a2",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e348ecde32334031f7a3",
          },
        },
      ],
      developers: [
        {
          id: 1002,
          name: "Respawn Entertainment",
          _id: {
            $oid: "6694e348ecde32334031f7a4",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694e348ecde32334031f7a5",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e348ecde32334031f7a6",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e348ecde32334031f7a7",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e348ecde32334031f7a8",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "titanfall-2",
    updatedAt: {
      $date: "2024-07-15T08:52:24.431Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b7",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    status: "completed",
    lastPlay: "2021-07-23",
    name: "Death Stranding",
    createdAt: "2024-01-23T09:05:17.339Z",
    platform: "xboxPc",
    rating: 8.3,
    playTime: 45,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5vq8.jpg",
    review: "",
    igdb: {
      id: 19564,
      cover: {
        id: 274400,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5vq8.jpg",
        game: 19564,
      },
      aggregated_rating: 84.41176470588235,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e351ecde32334031fb65",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e351ecde32334031fb66",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e351ecde32334031fb67",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e351ecde32334031fb68",
          },
        },
      ],
      developers: [
        {
          id: 170,
          name: "Kojima Productions",
          _id: {
            $oid: "6694e351ecde32334031fb69",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694e351ecde32334031fb6a",
          },
        },
        {
          id: 445,
          name: "505 Games",
          _id: {
            $oid: "6694e351ecde32334031fb6b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e351ecde32334031fb6c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e351ecde32334031fb6d",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e351ecde32334031fb6e",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e351ecde32334031fb6f",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e351ecde32334031fb70",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "death-stranding",
    updatedAt: {
      $date: "2024-07-15T08:52:33.347Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b8",
    },
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co545w.jpg",
    rating: 8.5,
    name: "Resident Evil 7: Biohazard",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-04T12:38:38.315Z",
    lastPlay: "2021-07-16",
    platform: "steam",
    screenshotSize: 0,
    status: "completed",
    playTime: 18,
    igdb: {
      id: 19562,
      cover: {
        id: 238676,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co545w.jpg",
        game: 19562,
      },
      aggregated_rating: 88.46153846153847,
      aggregated_rating_count: 31,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e35aecde32334031ff39",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e35aecde32334031ff3a",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e35aecde32334031ff3b",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e35aecde32334031ff3c",
          },
        },
      ],
      developers: [
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694e35aecde32334031ff3d",
          },
        },
      ],
      publishers: [
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694e35aecde32334031ff3e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e35aecde32334031ff3f",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694e35aecde32334031ff40",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e35aecde32334031ff41",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e35aecde32334031ff42",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e35aecde32334031ff43",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "resident-evil-7-biohazard",
    updatedAt: {
      $date: "2024-07-15T08:52:42.881Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99b9",
    },
    createdAt: "2024-03-04T12:13:52.831Z",
    rating: 7,
    platform: "steam",
    review: "",
    lastPlay: "2021-07-10",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co295l.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 2,
    name: "Florence",
    status: "completed",
    igdb: {
      id: 87672,
      cover: {
        id: 105177,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co295l.jpg",
        game: 87672,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e365ecde323340320317",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e365ecde323340320318",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e365ecde323340320319",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e365ecde32334032031a",
          },
        },
      ],
      developers: [
        {
          id: 14839,
          name: "Mountains",
          _id: {
            $oid: "6694e365ecde32334032031b",
          },
        },
      ],
      publishers: [
        {
          id: 11662,
          name: "Annapurna Interactive",
          _id: {
            $oid: "6694e365ecde32334032031c",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e365ecde32334032031d",
          },
        },
        {
          id: 5,
          name: "Text",
          _id: {
            $oid: "6694e365ecde32334032031e",
          },
        },
      ],
      themes: [
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e365ecde32334032031f",
          },
        },
        {
          id: 44,
          name: "Romance",
          _id: {
            $oid: "6694e365ecde323340320320",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "florence",
    updatedAt: {
      $date: "2024-07-15T08:52:53.505Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ba",
    },
    lastPlay: "2021-07-06",
    status: "completed",
    rating: 7,
    screenshotSize: 0,
    platform: "steam",
    playTime: 20,
    createdAt: "2024-03-04T11:57:22.624Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co28ha.jpg",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Far Cry: Primal",
    igdb: {
      id: 13182,
      cover: {
        id: 104302,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co28ha.jpg",
        game: 13182,
      },
      aggregated_rating: 76.15,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e36fecde3233403206fe",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e36fecde3233403206ff",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e36fecde323340320700",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e36fecde323340320701",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e36fecde323340320702",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e36fecde323340320703",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e36fecde323340320704",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e36fecde323340320705",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e36fecde323340320706",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e36fecde323340320707",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "far-cry-primal",
    updatedAt: {
      $date: "2024-07-15T08:53:03.653Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99bb",
    },
    name: "Twelve Minutes",
    playTime: 7,
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    rating: 7.7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co77xc.jpg",
    platform: "steam",
    createdAt: "2024-03-04T11:39:54.845Z",
    lastPlay: "2021-06-18",
    review: "",
    igdb: {
      id: 16612,
      cover: {
        id: 336864,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co77xc.jpg",
        game: 16612,
      },
      aggregated_rating: 78.75,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e37decde323340320aef",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Point-and-click",
          _id: {
            $oid: "6694e37decde323340320af0",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e37decde323340320af1",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e37decde323340320af2",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e37decde323340320af3",
          },
        },
      ],
      developers: [
        {
          id: 9387,
          name: "Luis Antonio",
          _id: {
            $oid: "6694e37decde323340320af4",
          },
        },
      ],
      publishers: [
        {
          id: 11662,
          name: "Annapurna Interactive",
          _id: {
            $oid: "6694e37decde323340320af5",
          },
        },
        {
          id: 27224,
          name: "Netflix",
          _id: {
            $oid: "6694e37decde323340320af6",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e37decde323340320af7",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e37decde323340320af8",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e37decde323340320af9",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e37decde323340320afa",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "twelve-minutes",
    updatedAt: {
      $date: "2024-07-15T08:53:17.722Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99bc",
    },
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2dqe.jpg",
    lastPlay: "2021-06-10",
    createdAt: "2024-03-04T10:59:00.492Z",
    platform: "steam",
    name: "Quantum Break",
    playTime: 15,
    screenshotSize: 0,
    review: "",
    rating: 7.4,
    igdb: {
      id: 3750,
      cover: {
        id: 111110,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2dqe.jpg",
        game: 3750,
      },
      aggregated_rating: 76.52173913043478,
      aggregated_rating_count: 26,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e389ecde323340320eee",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e389ecde323340320eef",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e389ecde323340320ef0",
          },
        },
      ],
      developers: [
        {
          id: 305,
          name: "Remedy Entertainment",
          _id: {
            $oid: "6694e389ecde323340320ef1",
          },
        },
      ],
      publishers: [
        {
          id: 1010,
          name: "Microsoft Studios",
          _id: {
            $oid: "6694e389ecde323340320ef2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e389ecde323340320ef3",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e389ecde323340320ef4",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e389ecde323340320ef5",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "quantum-break",
    updatedAt: {
      $date: "2024-07-15T08:53:29.300Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99bd",
    },
    lastPlay: "2021-06-05",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2xw1.jpg",
    status: "completed",
    name: "Last Stop",
    createdAt: "2024-03-04T11:13:14.595Z",
    screenshotSize: 0,
    platform: "xboxPc",
    playTime: 9,
    review: "",
    rating: 7.3,
    igdb: {
      id: 125631,
      cover: {
        id: 137233,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2xw1.jpg",
        game: 125631,
      },
      aggregated_rating: 72.5,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e397ecde3233403212f1",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e397ecde3233403212f2",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e397ecde3233403212f3",
          },
        },
      ],
      developers: [
        {
          id: 10445,
          name: "Variable State",
          _id: {
            $oid: "6694e397ecde3233403212f4",
          },
        },
      ],
      publishers: [
        {
          id: 11662,
          name: "Annapurna Interactive",
          _id: {
            $oid: "6694e397ecde3233403212f5",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e397ecde3233403212f6",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e397ecde3233403212f7",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e397ecde3233403212f8",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "last-stop",
    updatedAt: {
      $date: "2024-07-15T08:53:43.330Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99be",
    },
    name: "Road 96",
    platform: "steam",
    lastPlay: "2021-06-03",
    screenshotSize: 0,
    playTime: 8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co77x7.jpg",
    rating: 7.7,
    createdAt: "2024-01-23T09:13:44.830Z",
    review: "",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 141543,
      cover: {
        id: 336859,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co77x7.jpg",
        game: 141543,
      },
      aggregated_rating: 83,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e3a1ecde3233403216fc",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e3a1ecde3233403216fd",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e3a1ecde3233403216fe",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e3a1ecde3233403216ff",
          },
        },
      ],
      developers: [
        {
          id: 15657,
          name: "DigixArt",
          _id: {
            $oid: "6694e3a1ecde323340321700",
          },
        },
      ],
      publishers: [
        {
          id: 9043,
          name: "Ravenscourt",
          _id: {
            $oid: "6694e3a1ecde323340321701",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e3a1ecde323340321702",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e3a1ecde323340321703",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e3a1ecde323340321704",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e3a1ecde323340321705",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "road-96",
    updatedAt: {
      $date: "2024-07-15T08:53:53.828Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99bf",
    },
    review: "",
    name: "Assassin's Creed Valhalla",
    screenshotSize: 0,
    lastPlay: "2021-06-02",
    platform: "ubisoft",
    createdAt: "2024-03-04T11:08:13.045Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2ed3.jpg",
    rating: 7.5,
    status: "completed",
    playTime: 85,
    igdb: {
      id: 133004,
      cover: {
        id: 111927,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2ed3.jpg",
        game: 133004,
      },
      aggregated_rating: 85.08333333333333,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e3adecde323340321b13",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e3adecde323340321b14",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e3adecde323340321b15",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e3adecde323340321b16",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e3adecde323340321b17",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e3adecde323340321b18",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e3adecde323340321b19",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e3adecde323340321b1a",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e3adecde323340321b1b",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e3adecde323340321b1c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-valhalla",
    updatedAt: {
      $date: "2024-07-15T08:54:05.709Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c0",
    },
    screenshotSize: 0,
    rating: 5.2,
    platform: "steam",
    lastPlay: "2021-05-14",
    name: "She Sees Red",
    createdAt: "2024-03-04T11:00:53.813Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co233q.jpg",
    playTime: 3,
    status: "completed",
    review: "",
    igdb: {
      id: 118645,
      cover: {
        id: 97334,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co233q.jpg",
        game: 118645,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e3bcecde323340321f34",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e3bcecde323340321f35",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e3bcecde323340321f36",
          },
        },
        {
          id: 34,
          name: "Visual Novel",
          _id: {
            $oid: "6694e3bcecde323340321f37",
          },
        },
      ],
      developers: [],
      publishers: [
        {
          id: 38970,
          name: 'LLP "Rhinotales"',
          _id: {
            $oid: "6694e3bcecde323340321f38",
          },
        },
      ],
      themes: [
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e3bcecde323340321f39",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "she-sees-red",
    updatedAt: {
      $date: "2024-07-15T08:54:20.241Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c1",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2oz5.jpg",
    rating: 7.3,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Gears 5",
    status: "completed",
    lastPlay: "2021-05-12",
    screenshotSize: 0,
    createdAt: "2024-03-04T12:08:12.155Z",
    platform: "steam",
    review: "",
    playTime: 18,
    igdb: {
      id: 103292,
      cover: {
        id: 125681,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2oz5.jpg",
        game: 103292,
      },
      aggregated_rating: 87.83333333333333,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e3c5ecde323340322357",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e3c5ecde323340322358",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e3c5ecde323340322359",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e3c5ecde32334032235a",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e3c5ecde32334032235b",
          },
        },
      ],
      developers: [
        {
          id: 5961,
          name: "The Coalition",
          _id: {
            $oid: "6694e3c5ecde32334032235c",
          },
        },
      ],
      publishers: [
        {
          id: 17966,
          name: "Xbox Game Studios",
          _id: {
            $oid: "6694e3c5ecde32334032235d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e3c5ecde32334032235e",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e3c5ecde32334032235f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "gears-5",
    updatedAt: {
      $date: "2024-07-15T08:54:29.717Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c2",
    },
    lastPlay: "2021-05-07",
    status: "completed",
    platform: "steam",
    rating: 8.4,
    createdAt: "2024-01-23T09:12:40.141Z",
    screenshotSize: 0,
    name: "The Forgotten City",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3muu.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 7,
    review: "",
    igdb: {
      id: 103320,
      cover: {
        id: 169590,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3muu.jpg",
        game: 103320,
      },
      aggregated_rating: 90,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e3cfecde323340322786",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e3cfecde323340322787",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e3cfecde323340322788",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e3cfecde323340322789",
          },
        },
      ],
      developers: [
        {
          id: 15691,
          name: "Modern Storyteller",
          _id: {
            $oid: "6694e3cfecde32334032278a",
          },
        },
      ],
      publishers: [
        {
          id: 21313,
          name: "Dear Villagers",
          _id: {
            $oid: "6694e3cfecde32334032278b",
          },
        },
        {
          id: 1460,
          name: "Plug In Digital",
          _id: {
            $oid: "6694e3cfecde32334032278c",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e3cfecde32334032278d",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e3cfecde32334032278e",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e3cfecde32334032278f",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e3cfecde323340322790",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e3cfecde323340322791",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-forgotten-city",
    updatedAt: {
      $date: "2024-07-15T08:54:39.962Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c3",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co29lt.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 12,
    platform: "epicGames",
    status: "completed",
    screenshotSize: 0,
    review: "",
    lastPlay: "2021-03-05",
    createdAt: "2024-03-04T12:15:11.424Z",
    name: "Hitman 3",
    rating: 8.4,
    igdb: {
      id: 134595,
      cover: {
        id: 105761,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co29lt.jpg",
        game: 134595,
      },
      aggregated_rating: 85.25,
      aggregated_rating_count: 18,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e3dcecde323340322bc4",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e3dcecde323340322bc5",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e3dcecde323340322bc6",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e3dcecde323340322bc7",
          },
        },
      ],
      developers: [
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694e3dcecde323340322bc8",
          },
        },
      ],
      publishers: [
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694e3dcecde323340322bc9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e3dcecde323340322bca",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e3dcecde323340322bcb",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e3dcecde323340322bcc",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e3dcecde323340322bcd",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e3dcecde323340322bce",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hitman-3",
    updatedAt: {
      $date: "2024-07-15T08:54:52.067Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c4",
    },
    screenshotSize: 0,
    createdAt: "2024-03-04T13:48:53.124Z",
    rating: 7.9,
    status: "activePlaying",
    lastPlay: "2021-03-01",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rby.jpg",
    review: "",
    name: "Europa Universalis IV",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 91,
    platform: "steam",
    igdb: {
      id: 1904,
      cover: {
        id: 82078,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rby.jpg",
        game: 1904,
      },
      aggregated_rating: 85,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e3e7ecde32334032300c",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e3e7ecde32334032300d",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e3e7ecde32334032300e",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694e3e7ecde32334032300f",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e3e7ecde323340323010",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e3e7ecde323340323011",
          },
        },
      ],
      developers: [
        {
          id: 7466,
          name: "Paradox Development Studio",
          _id: {
            $oid: "6694e3e7ecde323340323012",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694e3e7ecde323340323013",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e3e7ecde323340323014",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e3e7ecde323340323015",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e3e7ecde323340323016",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e3e7ecde323340323017",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "europa-universalis-iv",
    updatedAt: {
      $date: "2024-07-15T08:55:03.616Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c5",
    },
    createdAt: "2024-01-23T09:07:12.568Z",
    rating: 7.4,
    platform: "steam",
    review: "",
    playTime: 4,
    name: "The Suicide of Rachel Foster",
    status: "completed",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2u7u.jpg",
    lastPlay: "2021-02-25",
    slug: "the-suicide-of-rachel-foster",
    updatedAt: {
      $date: "2024-07-15T08:55:13.857Z",
    },
    igdb: {
      id: 121947,
      cover: {
        id: 132474,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2u7u.jpg",
        game: 121947,
      },
      aggregated_rating: 64.75,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e3f1ecde323340323461",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e3f1ecde323340323462",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e3f1ecde323340323463",
          },
        },
      ],
      developers: [
        {
          id: 22838,
          name: "ONE-O-ONE GAMES",
          _id: {
            $oid: "6694e3f1ecde323340323464",
          },
        },
      ],
      publishers: [
        {
          id: 2248,
          name: "Daedalic Entertainment",
          _id: {
            $oid: "6694e3f1ecde323340323465",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e3f1ecde323340323466",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e3f1ecde323340323467",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e3f1ecde323340323468",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c6",
    },
    name: "Hitman 2",
    platform: "steam",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2qcq.jpg",
    playTime: 15,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-04T12:12:35.722Z",
    rating: 7.5,
    review: "",
    lastPlay: "2021-02-18",
    status: "completed",
    igdb: {
      id: 103210,
      cover: {
        id: 127466,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2qcq.jpg",
        game: 103210,
      },
      aggregated_rating: 82.42857142857143,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e3fcecde3233403238ba",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e3fcecde3233403238bb",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e3fcecde3233403238bc",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e3fcecde3233403238bd",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e3fcecde3233403238be",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e3fcecde3233403238bf",
          },
        },
      ],
      developers: [
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694e3fcecde3233403238c0",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e3fcecde3233403238c1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e3fcecde3233403238c2",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e3fcecde3233403238c3",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e3fcecde3233403238c4",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e3fcecde3233403238c5",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hitman-2",
    updatedAt: {
      $date: "2024-07-15T08:55:24.080Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c7",
    },
    name: "Ryse: Son of Rome",
    platform: "steam",
    review: "",
    screenshotSize: 0,
    createdAt: "2024-03-04T12:16:59.854Z",
    playTime: 7,
    rating: 6.9,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    lastPlay: "2020-12-26",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2r7y.jpg",
    igdb: {
      id: 3812,
      cover: {
        id: 128590,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2r7y.jpg",
        game: 3812,
      },
      aggregated_rating: 66,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e407ecde323340323d23",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e407ecde323340323d24",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e407ecde323340323d25",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e407ecde323340323d26",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e407ecde323340323d27",
          },
        },
      ],
      developers: [
        {
          id: 122,
          name: "Crytek Frankfurt",
          _id: {
            $oid: "6694e407ecde323340323d28",
          },
        },
      ],
      publishers: [
        {
          id: 1010,
          name: "Microsoft Studios",
          _id: {
            $oid: "6694e407ecde323340323d29",
          },
        },
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694e407ecde323340323d2a",
          },
        },
        {
          id: 249,
          name: "Crytek",
          _id: {
            $oid: "6694e407ecde323340323d2b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e407ecde323340323d2c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e407ecde323340323d2d",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e407ecde323340323d2e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "ryse-son-of-rome",
    updatedAt: {
      $date: "2024-07-15T08:55:35.062Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c8",
    },
    rating: 8.4,
    screenshotSize: 0,
    name: "Cyberpunk 2077",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    platform: "steam",
    playTime: 77,
    createdAt: "2024-03-04T12:17:48.248Z",
    lastPlay: "2020-12-24",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co7497.jpg",
    status: "completed",
    igdb: {
      id: 1877,
      cover: {
        id: 332107,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co7497.jpg",
        game: 1877,
      },
      aggregated_rating: 75.23809523809524,
      aggregated_rating_count: 28,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e412ecde323340324198",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e412ecde323340324199",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e412ecde32334032419a",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e412ecde32334032419b",
          },
        },
      ],
      developers: [
        {
          id: 908,
          name: "CD Projekt RED",
          _id: {
            $oid: "6694e412ecde32334032419c",
          },
        },
      ],
      publishers: [
        {
          id: 4291,
          name: "CD Projekt",
          _id: {
            $oid: "6694e412ecde32334032419d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e412ecde32334032419e",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e412ecde32334032419f",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e412ecde3233403241a0",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e412ecde3233403241a1",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e412ecde3233403241a2",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e412ecde3233403241a3",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "cyberpunk-2077",
    updatedAt: {
      $date: "2024-07-15T08:55:46.230Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99c9",
    },
    playTime: 3,
    lastPlay: "2020-12-08",
    rating: 7,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Metal Gear Solid V: Ground Zeroes",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1v88.jpg",
    createdAt: "2024-03-04T12:23:36.641Z",
    review: "",
    platform: "steam",
    status: "completed",
    igdb: {
      id: 5328,
      cover: {
        id: 87128,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1v88.jpg",
        game: 5328,
      },
      aggregated_rating: 79.21052631578948,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e41cecde323340324619",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e41cecde32334032461a",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e41cecde32334032461b",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e41cecde32334032461c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e41cecde32334032461d",
          },
        },
      ],
      developers: [
        {
          id: 170,
          name: "Kojima Productions",
          _id: {
            $oid: "6694e41cecde32334032461e",
          },
        },
      ],
      publishers: [
        {
          id: 129,
          name: "Konami",
          _id: {
            $oid: "6694e41cecde32334032461f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e41cecde323340324620",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e41cecde323340324621",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e41cecde323340324622",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e41cecde323340324623",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e41cecde323340324624",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e41cecde323340324625",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "metal-gear-solid-v-ground-zeroes",
    updatedAt: {
      $date: "2024-07-15T08:55:56.081Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ca",
    },
    review: "",
    lastPlay: "2020-12-04",
    status: "completed",
    screenshotSize: 0,
    name: "Dishonored 2",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.9,
    platform: "steam",
    photo:
      "https://m.media-amazon.com/images/I/61wzQmbXEZL._AC_UF1000,1000_QL80_.jpg",
    playTime: 18,
    createdAt: "2024-03-04T12:19:50.046Z",
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99cb",
    },
    name: "Beyond: Two Souls",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    review: "",
    createdAt: "2024-03-04T12:21:58.921Z",
    lastPlay: "2020-11-29",
    rating: 7.7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2mps.jpg",
    playTime: 13,
    status: "completed",
    platform: "steam",
    igdb: {
      id: 1342,
      cover: {
        id: 122752,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2mps.jpg",
        game: 1342,
      },
      aggregated_rating: 66.33333333333333,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e433ecde323340324aa8",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e433ecde323340324aa9",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e433ecde323340324aaa",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e433ecde323340324aab",
          },
        },
      ],
      developers: [
        {
          id: 261,
          name: "Quantic Dream",
          _id: {
            $oid: "6694e433ecde323340324aac",
          },
        },
      ],
      publishers: [
        {
          id: 13634,
          name: "Sony Computer Entertainment",
          _id: {
            $oid: "6694e433ecde323340324aad",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e433ecde323340324aae",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e433ecde323340324aaf",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e433ecde323340324ab0",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e433ecde323340324ab1",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e433ecde323340324ab2",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "beyond-two-souls",
    updatedAt: {
      $date: "2024-07-15T08:56:19.508Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99cc",
    },
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1iqw.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-04T12:01:49.336Z",
    name: "Subnautica",
    lastPlay: "2020-11-20",
    status: "completed",
    review: "",
    platform: "steam",
    rating: 8.5,
    playTime: 30,
    igdb: {
      id: 9254,
      cover: {
        id: 70952,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1iqw.jpg",
        game: 9254,
      },
      aggregated_rating: 83.9090909090909,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e43eecde323340324f40",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e43eecde323340324f41",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e43eecde323340324f42",
          },
        },
      ],
      developers: [
        {
          id: 856,
          name: "Unknown Worlds Entertainment",
          _id: {
            $oid: "6694e43eecde323340324f43",
          },
        },
      ],
      publishers: [
        {
          id: 11262,
          name: "Gearbox Publishing",
          _id: {
            $oid: "6694e43eecde323340324f44",
          },
        },
        {
          id: 856,
          name: "Unknown Worlds Entertainment",
          _id: {
            $oid: "6694e43eecde323340324f45",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e43eecde323340324f46",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694e43eecde323340324f47",
          },
        },
      ],
      themes: [
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e43eecde323340324f48",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e43eecde323340324f49",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e43eecde323340324f4a",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "subnautica",
    updatedAt: {
      $date: "2024-07-15T08:56:30.132Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99cd",
    },
    status: "completed",
    review: "",
    screenshotSize: 0,
    name: "Mafia: Definitive Edition",
    rating: 8.2,
    lastPlay: "2020-11-13",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co26vl.jpg",
    createdAt: "2024-03-04T12:28:10.351Z",
    playTime: 13,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "epicGames",
    igdb: {
      id: 134070,
      cover: {
        id: 102225,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co26vl.jpg",
        game: 134070,
      },
      aggregated_rating: 74.72727272727273,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e4e0ecde323340327f86",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e4e0ecde323340327f87",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e4e0ecde323340327f88",
          },
        },
      ],
      developers: [
        {
          id: 6079,
          name: "Hangar 13",
          _id: {
            $oid: "6694e4e0ecde323340327f89",
          },
        },
      ],
      publishers: [
        {
          id: 20228,
          name: "2K",
          _id: {
            $oid: "6694e4e0ecde323340327f8a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e4e0ecde323340327f8b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e4e0ecde323340327f8c",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e4e0ecde323340327f8d",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e4e0ecde323340327f8e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "mafia-definitive-edition",
    updatedAt: {
      $date: "2024-07-15T08:59:12.902Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ce",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2iuo.jpg",
    review: "",
    platform: "epicGames",
    name: "Amnesia: Rebirth",
    screenshotSize: 0,
    createdAt: "2024-03-04T11:04:55.059Z",
    playTime: 17,
    status: "completed",
    rating: 7.6,
    lastPlay: "2020-11-13",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 131785,
      cover: {
        id: 117744,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2iuo.jpg",
        game: 131785,
      },
      aggregated_rating: 81.77777777777777,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e4d0ecde323340327a85",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e4d0ecde323340327a86",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e4d0ecde323340327a87",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e4d0ecde323340327a88",
          },
        },
      ],
      developers: [
        {
          id: 36,
          name: "Frictional Games",
          _id: {
            $oid: "6694e4d0ecde323340327a89",
          },
        },
      ],
      publishers: [
        {
          id: 36,
          name: "Frictional Games",
          _id: {
            $oid: "6694e4d0ecde323340327a8a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e4d0ecde323340327a8b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e4d0ecde323340327a8c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e4d0ecde323340327a8d",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e4d0ecde323340327a8e",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e4d0ecde323340327a8f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "amnesia-rebirth",
    updatedAt: {
      $date: "2024-07-15T08:58:56.641Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99cf",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co24vl.jpg",
    createdAt: "2024-03-04T11:10:18.644Z",
    platform: "steam",
    review: "",
    rating: 7.6,
    screenshotSize: 0,
    lastPlay: "2020-11-07",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Dear Esther: Landmark Edition",
    playTime: 3,
    status: "completed",
    igdb: {
      id: 24051,
      cover: {
        id: 99633,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co24vl.jpg",
        game: 24051,
      },
      aggregated_rating: 64.45454545454545,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e4c6ecde32334032758f",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e4c6ecde323340327590",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e4c6ecde323340327591",
          },
        },
      ],
      developers: [
        {
          id: 1364,
          name: "The Chinese Room",
          _id: {
            $oid: "6694e4c6ecde323340327592",
          },
        },
        {
          id: 12165,
          name: "Rob Briscoe",
          _id: {
            $oid: "6694e4c6ecde323340327593",
          },
        },
      ],
      publishers: [
        {
          id: 1364,
          name: "The Chinese Room",
          _id: {
            $oid: "6694e4c6ecde323340327594",
          },
        },
        {
          id: 5048,
          name: "Curve Digital",
          _id: {
            $oid: "6694e4c6ecde323340327595",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e4c6ecde323340327596",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e4c6ecde323340327597",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e4c6ecde323340327598",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e4c6ecde323340327599",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "dear-esther-landmark-edition",
    updatedAt: {
      $date: "2024-07-15T08:58:46.895Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d0",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1nqc.jpg",
    review: "",
    platform: "epicGames",
    name: "The Stanley Parable Demonstration",
    lastPlay: "2020-10-31",
    rating: 8.1,
    createdAt: "2024-03-04T12:53:50.873Z",
    playTime: 4,
    status: "completed",
    screenshotSize: 0,
    igdb: {
      id: 14544,
      cover: {
        id: 77412,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1nqc.jpg",
        game: 14544,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e4b5ecde32334032709b",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e4b5ecde32334032709c",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e4b5ecde32334032709d",
          },
        },
      ],
      developers: [
        {
          id: 1424,
          name: "Galactic Cafe",
          _id: {
            $oid: "6694e4b5ecde32334032709e",
          },
        },
      ],
      publishers: [
        {
          id: 1424,
          name: "Galactic Cafe",
          _id: {
            $oid: "6694e4b5ecde32334032709f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e4b5ecde3233403270a0",
          },
        },
      ],
      themes: [
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e4b5ecde3233403270a1",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e4b5ecde3233403270a2",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-stanley-parable-demonstration",
    updatedAt: {
      $date: "2024-07-15T08:58:29.568Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d1",
    },
    lastPlay: "2020-10-21",
    review: "",
    rating: 8.8,
    status: "completed",
    playTime: 25,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Metro Exodus",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1iuj.jpg",
    screenshotSize: 0,
    createdAt: "2024-01-21T08:33:57.047Z",
    platform: "epicGames",
    igdb: {
      id: 37016,
      cover: {
        id: 71083,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1iuj.jpg",
        game: 37016,
      },
      aggregated_rating: 83.25,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e49eecde323340326bb9",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e49eecde323340326bba",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e49eecde323340326bbb",
          },
        },
      ],
      developers: [
        {
          id: 314,
          name: "4A Games",
          _id: {
            $oid: "6694e49eecde323340326bbc",
          },
        },
      ],
      publishers: [
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694e49eecde323340326bbd",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e49eecde323340326bbe",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e49eecde323340326bbf",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e49eecde323340326bc0",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e49eecde323340326bc1",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e49eecde323340326bc2",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "metro-exodus",
    updatedAt: {
      $date: "2024-07-15T08:58:06.280Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d2",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2n9d.jpg",
    status: "activePlaying",
    screenshotSize: 0,
    rating: 8.5,
    name: "Battlefield 1",
    platform: "eaGames",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 88,
    lastPlay: "2020-10-17",
    createdAt: "2024-03-04T12:41:22.891Z",
    igdb: {
      id: 18320,
      cover: {
        id: 123457,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2n9d.jpg",
        game: 18320,
      },
      aggregated_rating: 89.0952380952381,
      aggregated_rating_count: 27,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e494ecde3233403266e1",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e494ecde3233403266e2",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e494ecde3233403266e3",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "6694e494ecde3233403266e4",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694e494ecde3233403266e5",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e494ecde3233403266e6",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e494ecde3233403266e7",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e494ecde3233403266e8",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e494ecde3233403266e9",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e494ecde3233403266ea",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "battlefield-1",
    updatedAt: {
      $date: "2024-07-15T08:57:56.744Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d3",
    },
    platform: "ubisoft",
    name: "Far Cry New Dawn",
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1vpg.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 11,
    status: "completed",
    createdAt: "2024-03-05T12:25:01.574Z",
    rating: 6,
    screenshotSize: 0,
    lastPlay: "2020-10-15",
    igdb: {
      id: 113111,
      cover: {
        id: 87748,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1vpg.jpg",
        game: 113111,
      },
      aggregated_rating: 72.36363636363636,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e488ecde323340326213",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e488ecde323340326214",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e488ecde323340326215",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e488ecde323340326216",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e488ecde323340326217",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e488ecde323340326218",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e488ecde323340326219",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e488ecde32334032621a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e488ecde32334032621b",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e488ecde32334032621c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "far-cry-new-dawn",
    updatedAt: {
      $date: "2024-07-15T08:57:44.625Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d4",
    },
    createdAt: "2024-03-04T13:07:06.196Z",
    name: "The Dark Pictures Anthology: Man of Medan",
    screenshotSize: 0,
    playTime: 0,
    rating: 7.1,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "epicGames",
    status: "completed",
    lastPlay: "2020-10-15",
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1omz.jpg",
    igdb: {
      id: 55047,
      cover: {
        id: 78587,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1omz.jpg",
        game: 55047,
      },
      aggregated_rating: 71.46153846153847,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e47becde323340325d4f",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e47becde323340325d50",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e47becde323340325d51",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e47becde323340325d52",
          },
        },
      ],
      developers: [
        {
          id: 4895,
          name: "Supermassive Games",
          _id: {
            $oid: "6694e47becde323340325d53",
          },
        },
      ],
      publishers: [
        {
          id: 248,
          name: "Bandai Namco Entertainment",
          _id: {
            $oid: "6694e47becde323340325d54",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e47becde323340325d55",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e47becde323340325d56",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e47becde323340325d57",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e47becde323340325d58",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-dark-pictures-anthology-man-of-medan",
    updatedAt: {
      $date: "2024-07-15T08:57:31.237Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d5",
    },
    rating: 7.7,
    screenshotSize: 0,
    createdAt: "2024-04-11T09:33:17.947Z",
    lastPlay: "2020-10-14",
    platform: "eaGames",
    status: "completed",
    review: "",
    name: "Star Wars Battlefront II",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 22,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3wi7.jpg",
    igdb: {
      id: 26401,
      cover: {
        id: 182095,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3wi7.jpg",
        game: 26401,
      },
      aggregated_rating: 71.82352941176471,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e457ecde323340325893",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e457ecde323340325894",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e457ecde323340325895",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e457ecde323340325896",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e457ecde323340325897",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "6694e457ecde323340325898",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694e457ecde323340325899",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e457ecde32334032589a",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e457ecde32334032589b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e457ecde32334032589c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e457ecde32334032589d",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e457ecde32334032589e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "star-wars-battlefront-ii",
    updatedAt: {
      $date: "2024-07-15T08:56:55.465Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d6",
    },
    createdAt: "2024-03-04T14:00:08.159Z",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co6kqt.jpg",
    screenshotSize: 0,
    playTime: 28,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2020-10-03",
    name: "Among Us",
    review: "",
    rating: 7.8,
    status: "activePlaying",
    igdb: {
      id: 111469,
      cover: {
        id: 306821,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co6kqt.jpg",
        game: 111469,
      },
      aggregated_rating: 81.75,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e44cecde3233403253e3",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e44cecde3233403253e4",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e44cecde3233403253e5",
          },
        },
      ],
      genres: [
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e44cecde3233403253e6",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e44cecde3233403253e7",
          },
        },
      ],
      developers: [
        {
          id: 21778,
          name: "Innersloth",
          _id: {
            $oid: "6694e44cecde3233403253e8",
          },
        },
      ],
      publishers: [
        {
          id: 21778,
          name: "Innersloth",
          _id: {
            $oid: "6694e44cecde3233403253e9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e44cecde3233403253ea",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e44cecde3233403253eb",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e44cecde3233403253ec",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e44cecde3233403253ed",
          },
        },
        {
          id: 40,
          name: "Party",
          _id: {
            $oid: "6694e44cecde3233403253ee",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "among-us",
    updatedAt: {
      $date: "2024-07-15T08:56:44.370Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d7",
    },
    lastPlay: "2020-09-13",
    name: "Lust for Darkness",
    playTime: 3,
    createdAt: "2024-03-04T12:32:32.379Z",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co7hvu.jpg",
    rating: 5.8,
    screenshotSize: 0,
    platform: "steam",
    review: "",
    igdb: {
      id: 36815,
      cover: {
        id: 349770,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co7hvu.jpg",
        game: 36815,
      },
      aggregated_rating: 60,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e4efecde32334032848e",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e4efecde32334032848f",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e4efecde323340328490",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e4efecde323340328491",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e4efecde323340328492",
          },
        },
      ],
      developers: [
        {
          id: 16034,
          name: "Movie Games Lunarium",
          _id: {
            $oid: "6694e4efecde323340328493",
          },
        },
      ],
      publishers: [
        {
          id: 15494,
          name: "Movie Games S.A.",
          _id: {
            $oid: "6694e4efecde323340328494",
          },
        },
        {
          id: 9005,
          name: "PlayWay S.A.",
          _id: {
            $oid: "6694e4efecde323340328495",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e4efecde323340328496",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e4efecde323340328497",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e4efecde323340328498",
          },
        },
        {
          id: 42,
          name: "Erotic",
          _id: {
            $oid: "6694e4efecde323340328499",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "lust-for-darkness",
    updatedAt: {
      $date: "2024-07-15T08:59:27.644Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d8",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2020-09-11",
    status: "completed",
    playTime: 20,
    screenshotSize: 0,
    review: "",
    rating: 7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1uuh.jpg",
    createdAt: "2024-03-04T12:34:29.191Z",
    name: "Mad Max",
    platform: "steam",
    igdb: {
      id: 2552,
      cover: {
        id: 86633,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1uuh.jpg",
        game: 2552,
      },
      aggregated_rating: 72,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e4fbecde3233403289a5",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e4fbecde3233403289a6",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694e4fbecde3233403289a7",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e4fbecde3233403289a8",
          },
        },
      ],
      developers: [
        {
          id: 437,
          name: "Avalanche Studios",
          _id: {
            $oid: "6694e4fbecde3233403289a9",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e4fbecde3233403289aa",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694e4fbecde3233403289ab",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e4fbecde3233403289ac",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e4fbecde3233403289ad",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e4fbecde3233403289ae",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e4fbecde3233403289af",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "mad-max",
    updatedAt: {
      $date: "2024-07-15T08:59:39.699Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99d9",
    },
    status: "completed",
    createdAt: "2024-01-23T08:57:31.617Z",
    platform: "steam",
    lastPlay: "2020-09-11",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co39pu.jpg",
    playTime: 18,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.8,
    review: "",
    name: "Marvel's Guardians of the Galaxy",
    screenshotSize: 0,
    igdb: {
      id: 152249,
      cover: {
        id: 152562,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co39pu.jpg",
        game: 152249,
      },
      aggregated_rating: 81.1,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e506ecde323340328ec6",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e506ecde323340328ec7",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e506ecde323340328ec8",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e506ecde323340328ec9",
          },
        },
      ],
      developers: [
        {
          id: 27,
          name: "Eidos Montréal",
          _id: {
            $oid: "6694e506ecde323340328eca",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694e506ecde323340328ecb",
          },
        },
        {
          id: 27,
          name: "Eidos Montréal",
          _id: {
            $oid: "6694e506ecde323340328ecc",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e506ecde323340328ecd",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e506ecde323340328ece",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e506ecde323340328ecf",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e506ecde323340328ed0",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "marvels-guardians-of-the-galaxy",
    updatedAt: {
      $date: "2024-07-15T08:59:50.263Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99da",
    },
    rating: 8.1,
    status: "completed",
    platform: "steam",
    lastPlay: "2020-09-07",
    createdAt: "2024-03-04T12:56:51.120Z",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co65yq.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    name: "Dying Light",
    playTime: 37,
    igdb: {
      id: 3042,
      cover: {
        id: 287666,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co65yq.jpg",
        game: 3042,
      },
      aggregated_rating: 72.05882352941177,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e50fecde3233403293f2",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e50fecde3233403293f3",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e50fecde3233403293f4",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e50fecde3233403293f5",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e50fecde3233403293f6",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e50fecde3233403293f7",
          },
        },
      ],
      developers: [
        {
          id: 108,
          name: "Techland",
          _id: {
            $oid: "6694e50fecde3233403293f8",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e50fecde3233403293f9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e50fecde3233403293fa",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e50fecde3233403293fb",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e50fecde3233403293fc",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e50fecde3233403293fd",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e50fecde3233403293fe",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e50fecde3233403293ff",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "dying-light",
    updatedAt: {
      $date: "2024-07-15T08:59:59.912Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99db",
    },
    status: "completed",
    screenshotSize: 0,
    createdAt: "2024-03-04T12:30:13.450Z",
    rating: 7.3,
    lastPlay: "2020-07-10",
    playTime: 7,
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co22l7.jpg",
    platform: "steam",
    name: "Resident Evil 3",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 115115,
      cover: {
        id: 96667,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co22l7.jpg",
        game: 115115,
      },
      aggregated_rating: 80.8,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e525ecde32334032992f",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e525ecde323340329930",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e525ecde323340329931",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e525ecde323340329932",
          },
        },
      ],
      developers: [
        {
          id: 25385,
          name: "M-TWO",
          _id: {
            $oid: "6694e525ecde323340329933",
          },
        },
        {
          id: 8593,
          name: "K2",
          _id: {
            $oid: "6694e525ecde323340329934",
          },
        },
      ],
      publishers: [
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694e525ecde323340329935",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e525ecde323340329936",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e525ecde323340329937",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e525ecde323340329938",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e525ecde323340329939",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "resident-evil-3",
    updatedAt: {
      $date: "2024-07-15T09:00:21.244Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99dc",
    },
    lastPlay: "2020-07-03",
    rating: 7.7,
    createdAt: "2024-03-04T12:43:39.878Z",
    status: "completed",
    review: "",
    platform: "steam",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 3,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2gzl.jpg",
    name: "Her Story",
    igdb: {
      id: 11346,
      cover: {
        id: 115329,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2gzl.jpg",
        game: 11346,
      },
      aggregated_rating: 85,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e52fecde323340329e74",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Point-and-click",
          _id: {
            $oid: "6694e52fecde323340329e75",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e52fecde323340329e76",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e52fecde323340329e77",
          },
        },
      ],
      developers: [
        {
          id: 6026,
          name: "Sam Barlow",
          _id: {
            $oid: "6694e52fecde323340329e78",
          },
        },
      ],
      publishers: [
        {
          id: 6026,
          name: "Sam Barlow",
          _id: {
            $oid: "6694e52fecde323340329e79",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e52fecde323340329e7a",
          },
        },
      ],
      themes: [
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e52fecde323340329e7b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "her-story",
    updatedAt: {
      $date: "2024-07-15T09:00:31.856Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99dd",
    },
    createdAt: "2024-03-04T13:49:57.648Z",
    platform: "steam",
    name: "Cities: Skylines",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 62,
    review: "",
    rating: 7.8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1mx3.jpg",
    status: "activePlaying",
    lastPlay: "2020-06-30",
    igdb: {
      id: 9066,
      cover: {
        id: 76359,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1mx3.jpg",
        game: 9066,
      },
      aggregated_rating: 76.23076923076923,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e53fecde32334032a3be",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e53fecde32334032a3bf",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e53fecde32334032a3c0",
          },
        },
      ],
      developers: [
        {
          id: 943,
          name: "Colossal Order",
          _id: {
            $oid: "6694e53fecde32334032a3c1",
          },
        },
      ],
      publishers: [
        {
          id: 517,
          name: "Paradox Interactive",
          _id: {
            $oid: "6694e53fecde32334032a3c2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e53fecde32334032a3c3",
          },
        },
      ],
      themes: [
        {
          id: 28,
          name: "Business",
          _id: {
            $oid: "6694e53fecde32334032a3c4",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e53fecde32334032a3c5",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "cities-skylines",
    updatedAt: {
      $date: "2024-07-15T09:00:47.501Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99de",
    },
    platform: "steam",
    playTime: 11,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-04T11:51:04.223Z",
    name: "This War of Mine",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3ans.jpg",
    status: "completed",
    lastPlay: "2020-06-20",
    screenshotSize: 0,
    review: "",
    rating: 8.1,
    igdb: {
      id: 7706,
      cover: {
        id: 153784,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3ans.jpg",
        game: 7706,
      },
      aggregated_rating: 82,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e54fecde32334032a910",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e54fecde32334032a911",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e54fecde32334032a912",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e54fecde32334032a913",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e54fecde32334032a914",
          },
        },
      ],
      developers: [
        {
          id: 4133,
          name: "11 bit studios",
          _id: {
            $oid: "6694e54fecde32334032a915",
          },
        },
      ],
      publishers: [
        {
          id: 4133,
          name: "11 bit studios",
          _id: {
            $oid: "6694e54fecde32334032a916",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e54fecde32334032a917",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e54fecde32334032a918",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e54fecde32334032a919",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e54fecde32334032a91a",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e54fecde32334032a91b",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e54fecde32334032a91c",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e54fecde32334032a91d",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "this-war-of-mine",
    updatedAt: {
      $date: "2024-07-15T09:01:03.536Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99df",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3rhy.jpg",
    platform: "epicGames",
    lastPlay: "2020-06-11",
    screenshotSize: 0,
    playTime: 13,
    status: "completed",
    rating: 8,
    name: "Heavy Rain",
    createdAt: "2024-03-04T13:12:31.334Z",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 493,
      cover: {
        id: 175606,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3rhy.jpg",
        game: 493,
      },
      aggregated_rating: 80.25,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e561ecde32334032ae76",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e561ecde32334032ae77",
          },
        },
      ],
      developers: [
        {
          id: 261,
          name: "Quantic Dream",
          _id: {
            $oid: "6694e561ecde32334032ae78",
          },
        },
      ],
      publishers: [
        {
          id: 261,
          name: "Quantic Dream",
          _id: {
            $oid: "6694e561ecde32334032ae79",
          },
        },
        {
          id: 13634,
          name: "Sony Computer Entertainment",
          _id: {
            $oid: "6694e561ecde32334032ae7a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e561ecde32334032ae7b",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e561ecde32334032ae7c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e561ecde32334032ae7d",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e561ecde32334032ae7e",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e561ecde32334032ae7f",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e561ecde32334032ae80",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "heavy-rain",
    updatedAt: {
      $date: "2024-07-15T09:01:21.715Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e0",
    },
    rating: 7,
    review: "",
    lastPlay: "2020-06-09",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 7,
    name: "Deliver Us the Moon",
    createdAt: "2024-03-04T12:47:15.615Z",
    screenshotSize: 0,
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20yy.jpg",
    platform: "steam",
    igdb: {
      id: 20326,
      cover: {
        id: 94570,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20yy.jpg",
        game: 20326,
      },
      aggregated_rating: 78,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e56decde32334032b3e4",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e56decde32334032b3e5",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e56decde32334032b3e6",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e56decde32334032b3e7",
          },
        },
      ],
      developers: [
        {
          id: 10351,
          name: "KeokeN Interactive",
          _id: {
            $oid: "6694e56decde32334032b3e8",
          },
        },
      ],
      publishers: [
        {
          id: 13699,
          name: "Wired Productions",
          _id: {
            $oid: "6694e56decde32334032b3e9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e56decde32334032b3ea",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e56decde32334032b3eb",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694e56decde32334032b3ec",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e56decde32334032b3ed",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e56decde32334032b3ee",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e56decde32334032b3ef",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e56decde32334032b3f0",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "deliver-us-the-moon",
    updatedAt: {
      $date: "2024-07-15T09:01:33.688Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e1",
    },
    screenshotSize: 0,
    review: "",
    createdAt: "2024-03-04T11:27:55.062Z",
    playTime: 16,
    rating: 8.1,
    lastPlay: "2020-06-05",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5wgu.jpg",
    name: "The Evil Within 2",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    status: "completed",
    igdb: {
      id: 36813,
      cover: {
        id: 275358,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5wgu.jpg",
        game: 36813,
      },
      aggregated_rating: 81.2,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e579ecde32334032b961",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e579ecde32334032b962",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e579ecde32334032b963",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e579ecde32334032b964",
          },
        },
      ],
      developers: [
        {
          id: 2145,
          name: "Tango Gameworks",
          _id: {
            $oid: "6694e579ecde32334032b965",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694e579ecde32334032b966",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e579ecde32334032b967",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e579ecde32334032b968",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e579ecde32334032b969",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e579ecde32334032b96a",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e579ecde32334032b96b",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e579ecde32334032b96c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-evil-within-2",
    updatedAt: {
      $date: "2024-07-15T09:01:45.091Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e2",
    },
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20x7.jpg",
    playTime: 45,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Friday the 13th: The Game",
    screenshotSize: 0,
    createdAt: "2024-03-04T13:51:27.508Z",
    rating: 7.4,
    lastPlay: "2020-06-04",
    status: "activePlaying",
    platform: "steam",
    igdb: {
      id: 14389,
      cover: {
        id: 94507,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20x7.jpg",
        game: 14389,
      },
      aggregated_rating: 60.875,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e582ecde32334032bee9",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e582ecde32334032beea",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e582ecde32334032beeb",
          },
        },
      ],
      genres: [
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e582ecde32334032beec",
          },
        },
      ],
      developers: [
        {
          id: 4466,
          name: "Illfonic",
          _id: {
            $oid: "6694e582ecde32334032beed",
          },
        },
      ],
      publishers: [
        {
          id: 10094,
          name: "Gun Interactive",
          _id: {
            $oid: "6694e582ecde32334032beee",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e582ecde32334032beef",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e582ecde32334032bef0",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e582ecde32334032bef1",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e582ecde32334032bef2",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e582ecde32334032bef3",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "friday-the-13th-the-game",
    updatedAt: {
      $date: "2024-07-15T09:01:54.214Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e3",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4hk2.jpg",
    status: "activePlaying",
    playTime: 61,
    review: "",
    createdAt: "2024-03-04T13:58:45.005Z",
    platform: "steam",
    name: "Gwent: The Witcher Card Game",
    screenshotSize: 0,
    rating: 7.8,
    lastPlay: "2020-06-01",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 19474,
      cover: {
        id: 209378,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4hk2.jpg",
        game: 19474,
      },
      aggregated_rating: 85,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e58becde32334032c47b",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e58becde32334032c47c",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e58becde32334032c47d",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e58becde32334032c47e",
          },
        },
        {
          id: 35,
          name: "Card & Board Game",
          _id: {
            $oid: "6694e58becde32334032c47f",
          },
        },
      ],
      developers: [
        {
          id: 908,
          name: "CD Projekt RED",
          _id: {
            $oid: "6694e58becde32334032c480",
          },
        },
      ],
      publishers: [
        {
          id: 908,
          name: "CD Projekt RED",
          _id: {
            $oid: "6694e58becde32334032c481",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e58becde32334032c482",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e58becde32334032c483",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "gwent-the-witcher-card-game",
    updatedAt: {
      $date: "2024-07-15T09:02:03.789Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e4",
    },
    lastPlay: "2020-05-16",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    status: "completed",
    review: "",
    name: "Sherlock Holmes: The Devil's Daughter",
    screenshotSize: 0,
    rating: 7.7,
    createdAt: "2024-03-04T12:48:04.380Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3wmc.jpg",
    playTime: 14,
    igdb: {
      id: 11563,
      cover: {
        id: 182244,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3wmc.jpg",
        game: 11563,
      },
      aggregated_rating: 67.375,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e596ecde32334032ca14",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e596ecde32334032ca15",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e596ecde32334032ca16",
          },
        },
      ],
      developers: [
        {
          id: 2410,
          name: "Frogwares",
          _id: {
            $oid: "6694e596ecde32334032ca17",
          },
        },
      ],
      publishers: [
        {
          id: 1803,
          name: "Bigben Interactive",
          _id: {
            $oid: "6694e596ecde32334032ca18",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e596ecde32334032ca19",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e596ecde32334032ca1a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e596ecde32334032ca1b",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e596ecde32334032ca1c",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e596ecde32334032ca1d",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e596ecde32334032ca1e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "sherlock-holmes-the-devils-daughter",
    updatedAt: {
      $date: "2024-07-15T09:02:14.499Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e5",
    },
    playTime: 11,
    review: "",
    lastPlay: "2020-04-29",
    platform: "steam",
    name: "BioShock Remastered",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    createdAt: "2024-03-04T12:49:23.563Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co54yu.jpg",
    rating: 7.9,
    screenshotSize: 0,
    igdb: {
      id: 34293,
      cover: {
        id: 239718,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co54yu.jpg",
        game: 34293,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e5a1ecde32334032cfba",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e5a1ecde32334032cfbb",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e5a1ecde32334032cfbc",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e5a1ecde32334032cfbd",
          },
        },
      ],
      developers: [
        {
          id: 2492,
          name: "2K Australia",
          _id: {
            $oid: "6694e5a1ecde32334032cfbe",
          },
        },
        {
          id: 649,
          name: "2K Boston",
          _id: {
            $oid: "6694e5a1ecde32334032cfbf",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694e5a1ecde32334032cfc0",
          },
        },
      ],
      publishers: [
        {
          id: 8,
          name: "2K Games",
          _id: {
            $oid: "6694e5a1ecde32334032cfc1",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694e5a1ecde32334032cfc2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e5a1ecde32334032cfc3",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e5a1ecde32334032cfc4",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e5a1ecde32334032cfc5",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e5a1ecde32334032cfc6",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "bioshock-remastered",
    updatedAt: {
      $date: "2024-07-15T09:02:25.203Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e6",
    },
    platform: "steam",
    rating: 7.8,
    name: "Journey",
    createdAt: "2024-03-04T11:43:28.923Z",
    screenshotSize: 0,
    lastPlay: "2020-04-11",
    playTime: 3,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1q8q.jpg",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    igdb: {
      id: 1352,
      cover: {
        id: 80666,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1q8q.jpg",
        game: 1352,
      },
      aggregated_rating: 93.85714285714286,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e5abecde32334032d56f",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e5abecde32334032d570",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e5abecde32334032d571",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e5abecde32334032d572",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e5abecde32334032d573",
          },
        },
      ],
      developers: [
        {
          id: 857,
          name: "ThatGameCompany",
          _id: {
            $oid: "6694e5abecde32334032d574",
          },
        },
      ],
      publishers: [
        {
          id: 11662,
          name: "Annapurna Interactive",
          _id: {
            $oid: "6694e5abecde32334032d575",
          },
        },
        {
          id: 13634,
          name: "Sony Computer Entertainment",
          _id: {
            $oid: "6694e5abecde32334032d576",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e5abecde32334032d577",
          },
        },
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e5abecde32334032d578",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e5abecde32334032d579",
          },
        },
        {
          id: 35,
          name: "Kids",
          _id: {
            $oid: "6694e5abecde32334032d57a",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "journey",
    updatedAt: {
      $date: "2024-07-15T09:02:35.534Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e7",
    },
    createdAt: "2024-04-11T09:24:42.291Z",
    screenshotSize: 0,
    name: "Middle-earth: Shadow of War",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20pq.jpg",
    review: "",
    rating: 7.9,
    status: "completed",
    platform: "steam",
    lastPlay: "2020-02-06",
    playTime: 37,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 27421,
      cover: {
        id: 94238,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20pq.jpg",
        game: 27421,
      },
      aggregated_rating: 83.89473684210526,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e5b6ecde32334032db2f",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e5b6ecde32334032db30",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e5b6ecde32334032db31",
          },
        },
      ],
      developers: [
        {
          id: 407,
          name: "Monolith Productions",
          _id: {
            $oid: "6694e5b6ecde32334032db32",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e5b6ecde32334032db33",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e5b6ecde32334032db34",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e5b6ecde32334032db35",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e5b6ecde32334032db36",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e5b6ecde32334032db37",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "middle-earth-shadow-of-war",
    updatedAt: {
      $date: "2024-07-15T09:02:46.515Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e8",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2020-01-09",
    platform: "steam",
    rating: 7.4,
    name: "Doom",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1nc7.jpg",
    playTime: 16,
    review: "",
    createdAt: "2024-03-04T12:59:51.308Z",
    status: "completed",
    screenshotSize: 0,
    igdb: {
      id: 7351,
      cover: {
        id: 76903,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1nc7.jpg",
        game: 7351,
      },
      aggregated_rating: 86.96875,
      aggregated_rating_count: 30,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e5bfecde32334032e0f5",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e5bfecde32334032e0f6",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e5bfecde32334032e0f7",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e5bfecde32334032e0f8",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e5bfecde32334032e0f9",
          },
        },
      ],
      developers: [
        {
          id: 184,
          name: "id Software",
          _id: {
            $oid: "6694e5bfecde32334032e0fa",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694e5bfecde32334032e0fb",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e5bfecde32334032e0fc",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e5bfecde32334032e0fd",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e5bfecde32334032e0fe",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e5bfecde32334032e0ff",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "doom",
    updatedAt: {
      $date: "2024-07-15T09:02:55.636Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99e9",
    },
    platform: "epicGames",
    name: "Star Wars Jedi: Fallen Order",
    status: "completed",
    playTime: 18,
    lastPlay: "2019-11-22",
    createdAt: "2024-03-04T12:58:37.134Z",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    rating: 7.8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rbi.jpg",
    igdb: {
      id: 74701,
      cover: {
        id: 82062,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rbi.jpg",
        game: 74701,
      },
      aggregated_rating: 82.84615384615384,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e5c9ecde32334032e6c8",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e5c9ecde32334032e6c9",
          },
        },
      ],
      developers: [
        {
          id: 1002,
          name: "Respawn Entertainment",
          _id: {
            $oid: "6694e5c9ecde32334032e6ca",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694e5c9ecde32334032e6cb",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e5c9ecde32334032e6cc",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e5c9ecde32334032e6cd",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e5c9ecde32334032e6ce",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e5c9ecde32334032e6cf",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "star-wars-jedi-fallen-order",
    updatedAt: {
      $date: "2024-07-15T09:03:05.703Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ea",
    },
    name: "Those Who Remain",
    rating: 5.4,
    review: "",
    lastPlay: "2019-11-07",
    playTime: 6,
    platform: "steam",
    status: "completed",
    createdAt: "2024-03-04T11:18:43.761Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2m7n.jpg",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 83848,
      cover: {
        id: 122099,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2m7n.jpg",
        game: 83848,
      },
      aggregated_rating: 55,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e5eaecde32334032eca0",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e5eaecde32334032eca1",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e5eaecde32334032eca2",
          },
        },
      ],
      developers: [
        {
          id: 4642,
          name: "Camel 101",
          _id: {
            $oid: "6694e5eaecde32334032eca3",
          },
        },
      ],
      publishers: [
        {
          id: 4642,
          name: "Camel 101",
          _id: {
            $oid: "6694e5eaecde32334032eca4",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e5eaecde32334032eca5",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e5eaecde32334032eca6",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e5eaecde32334032eca7",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e5eaecde32334032eca8",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e5eaecde32334032eca9",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "those-who-remain",
    updatedAt: {
      $date: "2024-07-15T09:03:38.235Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99eb",
    },
    screenshotSize: 0,
    name: "Batman: Arkham Knight",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1nh1.jpg",
    review: "",
    lastPlay: "2019-10-18",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-04T13:05:53.416Z",
    status: "completed",
    rating: 7.8,
    platform: "steam",
    playTime: 25,
    igdb: {
      id: 5503,
      cover: {
        id: 77077,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1nh1.jpg",
        game: 5503,
      },
      aggregated_rating: 91.8125,
      aggregated_rating_count: 21,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e5f7ecde32334032f284",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e5f7ecde32334032f285",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e5f7ecde32334032f286",
          },
        },
      ],
      developers: [
        {
          id: 164,
          name: "Rocksteady Studios",
          _id: {
            $oid: "6694e5f7ecde32334032f287",
          },
        },
      ],
      publishers: [
        {
          id: 14055,
          name: "Warner Bros. Interactive Entertainment",
          _id: {
            $oid: "6694e5f7ecde32334032f288",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e5f7ecde32334032f289",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e5f7ecde32334032f28a",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e5f7ecde32334032f28b",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e5f7ecde32334032f28c",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e5f7ecde32334032f28d",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "batman-arkham-knight",
    updatedAt: {
      $date: "2024-07-15T09:03:51.092Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ec",
    },
    createdAt: "2024-03-04T11:52:17.248Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2fca.jpg",
    review: "",
    status: "completed",
    lastPlay: "2019-10-17",
    name: "Inside",
    playTime: 12,
    platform: "epicGames",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.8,
    screenshotSize: 0,
    igdb: {
      id: 7342,
      cover: {
        id: 113194,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2fca.jpg",
        game: 7342,
      },
      aggregated_rating: 92.48717948717949,
      aggregated_rating_count: 41,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e605ecde32334032f872",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e605ecde32334032f873",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e605ecde32334032f874",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e605ecde32334032f875",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e605ecde32334032f876",
          },
        },
      ],
      developers: [
        {
          id: 854,
          name: "Playdead",
          _id: {
            $oid: "6694e605ecde32334032f877",
          },
        },
      ],
      publishers: [
        {
          id: 854,
          name: "Playdead",
          _id: {
            $oid: "6694e605ecde32334032f878",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e605ecde32334032f879",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e605ecde32334032f87a",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e605ecde32334032f87b",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e605ecde32334032f87c",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e605ecde32334032f87d",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e605ecde32334032f87e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "inside",
    updatedAt: {
      $date: "2024-07-15T09:04:05.136Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ed",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1yc6.jpg",
    playTime: 45,
    lastPlay: "2019-08-31",
    status: "completed",
    screenshotSize: 0,
    createdAt: "2024-03-04T13:09:04.187Z",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Fallout 4",
    platform: "steam",
    rating: 8.2,
    igdb: {
      id: 9630,
      cover: {
        id: 91158,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1yc6.jpg",
        game: 9630,
      },
      aggregated_rating: 84.66666666666667,
      aggregated_rating_count: 27,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e60eecde32334032fe70",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e60eecde32334032fe71",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e60eecde32334032fe72",
          },
        },
      ],
      developers: [
        {
          id: 126,
          name: "Bethesda Game Studios",
          _id: {
            $oid: "6694e60eecde32334032fe73",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694e60eecde32334032fe74",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e60eecde32334032fe75",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e60eecde32334032fe76",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e60eecde32334032fe77",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e60eecde32334032fe78",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e60eecde32334032fe79",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e60eecde32334032fe7a",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e60eecde32334032fe7b",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e60eecde32334032fe7c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "fallout-4",
    updatedAt: {
      $date: "2024-07-15T09:04:14.603Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ee",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rb4.jpg",
    name: "Devil May Cry 5",
    screenshotSize: 0,
    rating: 8.1,
    playTime: 12,
    platform: "epicGames",
    createdAt: "2024-03-04T13:14:15.727Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2019-08-16",
    review: "",
    status: "completed",
    igdb: {
      id: 76253,
      cover: {
        id: 82048,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rb4.jpg",
        game: 76253,
      },
      aggregated_rating: 90.33333333333333,
      aggregated_rating_count: 18,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e619ecde32334033047b",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e619ecde32334033047c",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e619ecde32334033047d",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e619ecde32334033047e",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e619ecde32334033047f",
          },
        },
      ],
      developers: [
        {
          id: 42265,
          name: "Capcom Development Division 1",
          _id: {
            $oid: "6694e619ecde323340330480",
          },
        },
      ],
      publishers: [
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694e619ecde323340330481",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e619ecde323340330482",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e619ecde323340330483",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "devil-may-cry-5",
    updatedAt: {
      $date: "2024-07-15T09:04:25.772Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ef",
    },
    rating: 8.6,
    screenshotSize: 0,
    lastPlay: "2019-08-10",
    name: "Resident Evil 2",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1ir3.jpg",
    platform: "steam",
    createdAt: "2024-03-04T12:04:57.117Z",
    review: "",
    status: "completed",
    playTime: 16,
    igdb: {
      id: 19686,
      cover: {
        id: 70959,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1ir3.jpg",
        game: 19686,
      },
      aggregated_rating: 92.83333333333333,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e628ecde323340330a8b",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e628ecde323340330a8c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e628ecde323340330a8d",
          },
        },
      ],
      developers: [
        {
          id: 42265,
          name: "Capcom Development Division 1",
          _id: {
            $oid: "6694e628ecde323340330a8e",
          },
        },
      ],
      publishers: [
        {
          id: 37,
          name: "Capcom",
          _id: {
            $oid: "6694e628ecde323340330a8f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e628ecde323340330a90",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e628ecde323340330a91",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e628ecde323340330a92",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e628ecde323340330a93",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "resident-evil-2",
    updatedAt: {
      $date: "2024-07-15T09:04:40.554Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f0",
    },
    platform: "steam",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.8,
    playTime: 23,
    status: "activePlaying",
    createdAt: "2024-03-04T14:03:24.405Z",
    lastPlay: "2019-06-28",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2hr6.jpg",
    name: "Town of Salem",
    screenshotSize: 0,
    igdb: {
      id: 9658,
      cover: {
        id: 116322,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2hr6.jpg",
        game: 9658,
      },
      game_modes: [
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e631ecde3233403310a4",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e631ecde3233403310a5",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e631ecde3233403310a6",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e631ecde3233403310a7",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e631ecde3233403310a8",
          },
        },
      ],
      developers: [
        {
          id: 6117,
          name: "BlankMediaGames",
          _id: {
            $oid: "6694e631ecde3233403310a9",
          },
        },
      ],
      publishers: [
        {
          id: 6117,
          name: "BlankMediaGames",
          _id: {
            $oid: "6694e631ecde3233403310aa",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e631ecde3233403310ab",
          },
        },
        {
          id: 5,
          name: "Text",
          _id: {
            $oid: "6694e631ecde3233403310ac",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e631ecde3233403310ad",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e631ecde3233403310ae",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e631ecde3233403310af",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "town-of-salem",
    updatedAt: {
      $date: "2024-07-15T09:04:49.877Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f1",
    },
    screenshotSize: 0,
    platform: "epicGames",
    review: "",
    rating: 6.8,
    name: "Close to the Sun",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1klo.jpg",
    status: "completed",
    playTime: 5,
    createdAt: "2024-04-11T09:03:24.147Z",
    lastPlay: "2019-06-15",
    igdb: {
      id: 55027,
      cover: {
        id: 73356,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1klo.jpg",
        game: 55027,
      },
      aggregated_rating: 60.6,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e63cecde3233403316cc",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e63cecde3233403316cd",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e63cecde3233403316ce",
          },
        },
      ],
      developers: [
        {
          id: 4184,
          name: "Storm in a Teacup",
          _id: {
            $oid: "6694e63cecde3233403316cf",
          },
        },
      ],
      publishers: [
        {
          id: 13699,
          name: "Wired Productions",
          _id: {
            $oid: "6694e63cecde3233403316d0",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e63cecde3233403316d1",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e63cecde3233403316d2",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e63cecde3233403316d3",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e63cecde3233403316d4",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e63cecde3233403316d5",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "close-to-the-sun",
    updatedAt: {
      $date: "2024-07-15T09:05:00.938Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f2",
    },
    rating: 7.1,
    playTime: 8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2d3a.jpg",
    lastPlay: "2019-06-15",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-04-11T09:18:46.498Z",
    review: "",
    platform: "epicGames",
    status: "completed",
    screenshotSize: 0,
    name: "Call of Cthulhu",
    igdb: {
      id: 9176,
      cover: {
        id: 110278,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2d3a.jpg",
        game: 9176,
      },
      aggregated_rating: 64.75,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e645ecde323340331cfc",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e645ecde323340331cfd",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e645ecde323340331cfe",
          },
        },
      ],
      developers: [
        {
          id: 404,
          name: "Cyanide Studio",
          _id: {
            $oid: "6694e645ecde323340331cff",
          },
        },
      ],
      publishers: [
        {
          id: 110,
          name: "Focus Entertainment",
          _id: {
            $oid: "6694e645ecde323340331d00",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e645ecde323340331d01",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e645ecde323340331d02",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e645ecde323340331d03",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e645ecde323340331d04",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-cthulhu",
    updatedAt: {
      $date: "2024-07-15T09:05:09.112Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f3",
    },
    status: "completed",
    platform: "steam",
    lastPlay: "2019-06-14",
    playTime: 2,
    rating: 7.8,
    review: "",
    screenshotSize: 0,
    name: "What Remains of Edith Finch",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-04-11T09:20:49.667Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rbj.jpg",
    igdb: {
      id: 11233,
      cover: {
        id: 82063,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rbj.jpg",
        game: 11233,
      },
      aggregated_rating: 86.95238095238095,
      aggregated_rating_count: 24,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e64eecde323340332334",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e64eecde323340332335",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e64eecde323340332336",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e64eecde323340332337",
          },
        },
      ],
      developers: [
        {
          id: 4356,
          name: "Giant Sparrow",
          _id: {
            $oid: "6694e64eecde323340332338",
          },
        },
      ],
      publishers: [
        {
          id: 11662,
          name: "Annapurna Interactive",
          _id: {
            $oid: "6694e64eecde323340332339",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e64eecde32334033233a",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e64eecde32334033233b",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e64eecde32334033233c",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e64eecde32334033233d",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "what-remains-of-edith-finch",
    updatedAt: {
      $date: "2024-07-15T09:05:18.760Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f4",
    },
    rating: 7.5,
    name: "Control",
    platform: "epicGames",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 13,
    review: "",
    createdAt: "2024-04-13T20:02:55.014Z",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2evj.jpg",
    status: "completed",
    lastPlay: "2019-06-14",
    igdb: {
      id: 103329,
      cover: {
        id: 112591,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2evj.jpg",
        game: 103329,
      },
      aggregated_rating: 83.4,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e65becde323340332977",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e65becde323340332978",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e65becde323340332979",
          },
        },
      ],
      developers: [
        {
          id: 305,
          name: "Remedy Entertainment",
          _id: {
            $oid: "6694e65becde32334033297a",
          },
        },
      ],
      publishers: [
        {
          id: 445,
          name: "505 Games",
          _id: {
            $oid: "6694e65becde32334033297b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e65becde32334033297c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e65becde32334033297d",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e65becde32334033297e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "control",
    updatedAt: {
      $date: "2024-07-15T09:05:31.551Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f5",
    },
    lastPlay: "2019-06-07",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1r7a.jpg",
    name: "Murdered: Soul Suspect",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    screenshotSize: 0,
    playTime: 7,
    createdAt: "2024-04-11T09:13:26.371Z",
    review: "",
    platform: "steam",
    rating: 6.7,
    igdb: {
      id: 3188,
      cover: {
        id: 81910,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1r7a.jpg",
        game: 3188,
      },
      aggregated_rating: 60.85714285714285,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e667ecde323340332fc0",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e667ecde323340332fc1",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e667ecde323340332fc2",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e667ecde323340332fc3",
          },
        },
      ],
      developers: [
        {
          id: 1170,
          name: "Airtight Games",
          _id: {
            $oid: "6694e667ecde323340332fc4",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694e667ecde323340332fc5",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e667ecde323340332fc6",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e667ecde323340332fc7",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e667ecde323340332fc8",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e667ecde323340332fc9",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e667ecde323340332fca",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e667ecde323340332fcb",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "murdered-soul-suspect",
    updatedAt: {
      $date: "2024-07-15T09:05:43.244Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f6",
    },
    rating: 7,
    createdAt: "2024-03-04T11:49:40.598Z",
    platform: "steam",
    status: "completed",
    lastPlay: "2019-06-06",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Zup!",
    screenshotSize: 0,
    playTime: 2,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1w5z.jpg",
    igdb: {
      id: 24825,
      cover: {
        id: 88343,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1w5z.jpg",
        game: 24825,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e676ecde323340333619",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e676ecde32334033361a",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e676ecde32334033361b",
          },
        },
      ],
      developers: [
        {
          id: 11203,
          name: "Quiet River",
          _id: {
            $oid: "6694e676ecde32334033361c",
          },
        },
      ],
      publishers: [
        {
          id: 11203,
          name: "Quiet River",
          _id: {
            $oid: "6694e676ecde32334033361d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e676ecde32334033361e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "zup",
    updatedAt: {
      $date: "2024-07-15T09:05:58.161Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f7",
    },
    lastPlay: "2019-06-06",
    playTime: 12,
    name: "A Plague Tale: Innocence",
    createdAt: "2024-03-04T13:18:02.905Z",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1lat.jpg",
    review: "",
    platform: "xboxPc",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    rating: 8.1,
    igdb: {
      id: 27316,
      cover: {
        id: 74261,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1lat.jpg",
        game: 27316,
      },
      aggregated_rating: 80.86666666666666,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e68eecde323340333c72",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e68eecde323340333c73",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e68eecde323340333c74",
          },
        },
      ],
      developers: [
        {
          id: 442,
          name: "Asobo Studio",
          _id: {
            $oid: "6694e68eecde323340333c75",
          },
        },
      ],
      publishers: [
        {
          id: 110,
          name: "Focus Entertainment",
          _id: {
            $oid: "6694e68eecde323340333c76",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e68eecde323340333c77",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e68eecde323340333c78",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e68eecde323340333c79",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e68eecde323340333c7a",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e68eecde323340333c7b",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e68eecde323340333c7c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "a-plague-tale-innocence",
    updatedAt: {
      $date: "2024-07-15T09:06:22.692Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f8",
    },
    screenshotSize: 0,
    rating: 7.5,
    lastPlay: "2019-04-18",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2h9r.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    platform: "steam",
    name: "Grid 2",
    review: "",
    createdAt: "2024-03-04T14:11:40.839Z",
    playTime: 9,
    igdb: {
      id: 2138,
      cover: {
        id: 115695,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2h9r.jpg",
        game: 2138,
      },
      aggregated_rating: 80.58333333333333,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e697ecde3233403342db",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e697ecde3233403342dc",
          },
        },
      ],
      genres: [
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694e697ecde3233403342dd",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e697ecde3233403342de",
          },
        },
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694e697ecde3233403342df",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694e697ecde3233403342e0",
          },
        },
      ],
      developers: [
        {
          id: 412,
          name: "Codemasters Southam",
          _id: {
            $oid: "6694e697ecde3233403342e1",
          },
        },
      ],
      publishers: [
        {
          id: 115,
          name: "Codemasters",
          _id: {
            $oid: "6694e697ecde3233403342e2",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694e697ecde3233403342e3",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e697ecde3233403342e4",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e697ecde3233403342e5",
          },
        },
      ],
      themes: [
        {
          id: 32,
          name: "Non-fiction",
          _id: {
            $oid: "6694e697ecde3233403342e6",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "grid-2",
    updatedAt: {
      $date: "2024-07-15T09:06:31.015Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99f9",
    },
    playTime: 10,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Hellblade: Senua's Sacrifice",
    rating: 7.8,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2l7l.jpg",
    lastPlay: "2019-03-27",
    status: "completed",
    review: "",
    screenshotSize: 0,
    createdAt: "2024-04-11T09:09:03.603Z",
    platform: "steam",
    igdb: {
      id: 7603,
      cover: {
        id: 120801,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2l7l.jpg",
        game: 7603,
      },
      aggregated_rating: 84.27272727272727,
      aggregated_rating_count: 26,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e69fecde323340334951",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e69fecde323340334952",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e69fecde323340334953",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e69fecde323340334954",
          },
        },
      ],
      developers: [
        {
          id: 795,
          name: "Ninja Theory",
          _id: {
            $oid: "6694e69fecde323340334955",
          },
        },
      ],
      publishers: [
        {
          id: 795,
          name: "Ninja Theory",
          _id: {
            $oid: "6694e69fecde323340334956",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e69fecde323340334957",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e69fecde323340334958",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e69fecde323340334959",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e69fecde32334033495a",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hellblade-senuas-sacrifice",
    updatedAt: {
      $date: "2024-07-15T09:06:39.597Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99fa",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2019-02-04",
    name: "A Story About My Uncle",
    screenshotSize: 0,
    playTime: 4,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co21sm.jpg",
    platform: "steam",
    review: "",
    rating: 6.2,
    status: "completed",
    createdAt: "2024-04-11T09:11:33.572Z",
    igdb: {
      id: 7211,
      cover: {
        id: 95638,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co21sm.jpg",
        game: 7211,
      },
      aggregated_rating: 69,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e6aaecde323340334fcf",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e6aaecde323340334fd0",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e6aaecde323340334fd1",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e6aaecde323340334fd2",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e6aaecde323340334fd3",
          },
        },
      ],
      developers: [
        {
          id: 3030,
          name: "Gone North Games",
          _id: {
            $oid: "6694e6aaecde323340334fd4",
          },
        },
      ],
      publishers: [
        {
          id: 999,
          name: "Coffee Stain Studios",
          _id: {
            $oid: "6694e6aaecde323340334fd5",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e6aaecde323340334fd6",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e6aaecde323340334fd7",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e6aaecde323340334fd8",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e6aaecde323340334fd9",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "a-story-about-my-uncle",
    updatedAt: {
      $date: "2024-07-15T09:06:50.996Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99fb",
    },
    createdAt: "2024-03-05T11:42:19.293Z",
    review: "",
    lastPlay: "2019-01-25",
    name: "Call of Duty: Infinite Warfare",
    screenshotSize: 0,
    platform: "steam",
    rating: 3.7,
    playTime: 4,
    status: "abandoned",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wkp.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 18968,
      cover: {
        id: 88873,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wkp.jpg",
        game: 18968,
      },
      aggregated_rating: 77.24,
      aggregated_rating_count: 32,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e6b7ecde323340335659",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e6b7ecde32334033565a",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e6b7ecde32334033565b",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e6b7ecde32334033565c",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e6b7ecde32334033565d",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e6b7ecde32334033565e",
          },
        },
      ],
      developers: [
        {
          id: 438,
          name: "Infinity Ward",
          _id: {
            $oid: "6694e6b7ecde32334033565f",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694e6b7ecde323340335660",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e6b7ecde323340335661",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e6b7ecde323340335662",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e6b7ecde323340335663",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e6b7ecde323340335664",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-infinite-warfare",
    updatedAt: {
      $date: "2024-07-15T09:07:03.757Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99fc",
    },
    platform: "steam",
    name: "Rocket League",
    status: "activePlaying",
    rating: 7.7,
    playTime: 114,
    review: "",
    createdAt: "2024-03-04T13:48:13.330Z",
    lastPlay: "2019-01-25",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5w0w.jpg",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 11198,
      cover: {
        id: 274784,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5w0w.jpg",
        game: 11198,
      },
      aggregated_rating: 88.70588235294117,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e6c1ecde323340335cf0",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e6c1ecde323340335cf1",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e6c1ecde323340335cf2",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e6c1ecde323340335cf3",
          },
        },
      ],
      genres: [
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694e6c1ecde323340335cf4",
          },
        },
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694e6c1ecde323340335cf5",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e6c1ecde323340335cf6",
          },
        },
      ],
      developers: [
        {
          id: 711,
          name: "Psyonix",
          _id: {
            $oid: "6694e6c1ecde323340335cf7",
          },
        },
      ],
      publishers: [
        {
          id: 711,
          name: "Psyonix",
          _id: {
            $oid: "6694e6c1ecde323340335cf8",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e6c1ecde323340335cf9",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e6c1ecde323340335cfa",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e6c1ecde323340335cfb",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "rocket-league",
    updatedAt: {
      $date: "2024-07-15T09:07:13.535Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99fd",
    },
    lastPlay: "2018-12-21",
    screenshotSize: 0,
    review: "",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rqa.jpg",
    rating: 7.4,
    createdAt: "2024-03-04T11:37:20.079Z",
    name: "Rise of the Tomb Raider",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    playTime: 17,
    igdb: {
      id: 7323,
      cover: {
        id: 82594,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rqa.jpg",
        game: 7323,
      },
      aggregated_rating: 87.04,
      aggregated_rating_count: 27,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e6caecde323340336393",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e6caecde323340336394",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e6caecde323340336395",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e6caecde323340336396",
          },
        },
      ],
      developers: [
        {
          id: 552,
          name: "Crystal Dynamics",
          _id: {
            $oid: "6694e6caecde323340336397",
          },
        },
      ],
      publishers: [
        {
          id: 1010,
          name: "Microsoft Studios",
          _id: {
            $oid: "6694e6caecde323340336398",
          },
        },
        {
          id: 4940,
          name: "Square Enix Europe",
          _id: {
            $oid: "6694e6caecde323340336399",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e6caecde32334033639a",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e6caecde32334033639b",
          },
        },
        {
          id: 7,
          name: "Virtual Reality",
          _id: {
            $oid: "6694e6caecde32334033639c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e6caecde32334033639d",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e6caecde32334033639e",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e6caecde32334033639f",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e6caecde3233403363a0",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "rise-of-the-tomb-raider",
    updatedAt: {
      $date: "2024-07-15T09:07:22.483Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99fe",
    },
    name: "Into the Breach",
    rating: 8.2,
    platform: "epicGames",
    screenshotSize: 0,
    status: "completed",
    createdAt: "2024-04-13T20:13:15.697Z",
    playTime: 7,
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2gjp.jpg",
    lastPlay: "2018-12-21",
    igdb: {
      id: 27117,
      cover: {
        id: 114757,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2gjp.jpg",
        game: 27117,
      },
      aggregated_rating: 90,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e6d4ecde323340336a46",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e6d4ecde323340336a47",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e6d4ecde323340336a48",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e6d4ecde323340336a49",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e6d4ecde323340336a4a",
          },
        },
        {
          id: 16,
          name: "Turn-based strategy (TBS)",
          _id: {
            $oid: "6694e6d4ecde323340336a4b",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e6d4ecde323340336a4c",
          },
        },
      ],
      developers: [
        {
          id: 1447,
          name: "Subset Games",
          _id: {
            $oid: "6694e6d4ecde323340336a4d",
          },
        },
      ],
      publishers: [
        {
          id: 1447,
          name: "Subset Games",
          _id: {
            $oid: "6694e6d4ecde323340336a4e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e6d4ecde323340336a4f",
          },
        },
      ],
      themes: [
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e6d4ecde323340336a50",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "into-the-breach",
    updatedAt: {
      $date: "2024-07-15T09:07:32.025Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a99ff",
    },
    platform: "epicGames",
    rating: 7.8,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    createdAt: "2024-03-04T11:24:26.667Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2e1s.jpg",
    status: "completed",
    review: "",
    name: "Metro 2033 Redux",
    playTime: 10,
    lastPlay: "2018-11-30",
    igdb: {
      id: 80853,
      cover: {
        id: 111520,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2e1s.jpg",
        game: 80853,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e6dfecde323340337101",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e6dfecde323340337102",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e6dfecde323340337103",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e6dfecde323340337104",
          },
        },
      ],
      developers: [
        {
          id: 314,
          name: "4A Games",
          _id: {
            $oid: "6694e6dfecde323340337105",
          },
        },
      ],
      publishers: [
        {
          id: 374,
          name: "Koch Media",
          _id: {
            $oid: "6694e6dfecde323340337106",
          },
        },
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694e6dfecde323340337107",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e6dfecde323340337108",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e6dfecde323340337109",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e6dfecde32334033710a",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e6dfecde32334033710b",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e6dfecde32334033710c",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e6dfecde32334033710d",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e6dfecde32334033710e",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e6dfecde32334033710f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "metro-2033-redux",
    updatedAt: {
      $date: "2024-07-15T09:07:43.053Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a00",
    },
    createdAt: "2024-04-11T09:44:58.077Z",
    rating: 8.1,
    lastPlay: "2018-11-22",
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wy4.jpg",
    status: "completed",
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "The Witcher 2: Assassins of Kings",
    playTime: 23,
    screenshotSize: 0,
    igdb: {
      id: 478,
      cover: {
        id: 89356,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wy4.jpg",
        game: 478,
      },
      aggregated_rating: 85.71428571428571,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e6eeecde3233403377cf",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e6eeecde3233403377d0",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e6eeecde3233403377d1",
          },
        },
      ],
      developers: [
        {
          id: 908,
          name: "CD Projekt RED",
          _id: {
            $oid: "6694e6eeecde3233403377d2",
          },
        },
      ],
      publishers: [
        {
          id: 3119,
          name: "cdp.pl",
          _id: {
            $oid: "6694e6eeecde3233403377d3",
          },
        },
        {
          id: 248,
          name: "Bandai Namco Entertainment",
          _id: {
            $oid: "6694e6eeecde3233403377d4",
          },
        },
        {
          id: 74,
          name: "CyberFront",
          _id: {
            $oid: "6694e6eeecde3233403377d5",
          },
        },
        {
          id: 1217,
          name: "Spike ChunSoft",
          _id: {
            $oid: "6694e6eeecde3233403377d6",
          },
        },
        {
          id: 908,
          name: "CD Projekt RED",
          _id: {
            $oid: "6694e6eeecde3233403377d7",
          },
        },
        {
          id: 2406,
          name: "Atari, Inc.",
          _id: {
            $oid: "6694e6eeecde3233403377d8",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e6eeecde3233403377d9",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e6eeecde3233403377da",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e6eeecde3233403377db",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-witcher-2-assassins-of-kings",
    updatedAt: {
      $date: "2024-07-15T09:07:58.035Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a01",
    },
    name: "Through the Woods",
    createdAt: "2024-04-11T09:46:39.968Z",
    platform: "steam",
    review: "",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1k9o.jpg",
    rating: 5.9,
    lastPlay: "2018-11-18",
    playTime: 4,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 9525,
      cover: {
        id: 72924,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1k9o.jpg",
        game: 9525,
      },
      aggregated_rating: 46,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e709ecde323340337ea8",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e709ecde323340337ea9",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e709ecde323340337eaa",
          },
        },
      ],
      developers: [
        {
          id: 5101,
          name: "Antagonist",
          _id: {
            $oid: "6694e709ecde323340337eab",
          },
        },
      ],
      publishers: [],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e709ecde323340337eac",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e709ecde323340337ead",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e709ecde323340337eae",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "through-the-woods",
    updatedAt: {
      $date: "2024-07-15T09:08:25.319Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a02",
    },
    createdAt: "2024-03-04T11:21:44.142Z",
    screenshotSize: 0,
    status: "completed",
    lastPlay: "2018-11-15",
    playTime: 12,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2h9d.jpg",
    platform: "epicGames",
    review: "",
    name: "Metro: Last Light",
    rating: 7.8,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 539,
      cover: {
        id: 115681,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2h9d.jpg",
        game: 539,
      },
      aggregated_rating: 79.9,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e716ecde323340338582",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e716ecde323340338583",
          },
        },
      ],
      developers: [
        {
          id: 314,
          name: "4A Games",
          _id: {
            $oid: "6694e716ecde323340338584",
          },
        },
      ],
      publishers: [
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694e716ecde323340338585",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e716ecde323340338586",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e716ecde323340338587",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e716ecde323340338588",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e716ecde323340338589",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e716ecde32334033858a",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "metro-last-light",
    updatedAt: {
      $date: "2024-07-15T09:08:38.663Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a03",
    },
    name: "Assassin's Creed Odyssey",
    lastPlay: "2018-11-08",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2nul.jpg",
    screenshotSize: 0,
    review: "",
    status: "completed",
    rating: 8.5,
    playTime: 88,
    platform: "ubisoft",
    createdAt: "2024-03-04T13:03:46.508Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 103054,
      cover: {
        id: 124221,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2nul.jpg",
        game: 103054,
      },
      aggregated_rating: 88.35714285714286,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e721ecde323340338c67",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e721ecde323340338c68",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e721ecde323340338c69",
          },
        },
      ],
      developers: [
        {
          id: 15790,
          name: "Ubisoft Québec",
          _id: {
            $oid: "6694e721ecde323340338c6a",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e721ecde323340338c6b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e721ecde323340338c6c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e721ecde323340338c6d",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e721ecde323340338c6e",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e721ecde323340338c6f",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e721ecde323340338c70",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-odyssey",
    updatedAt: {
      $date: "2024-07-15T09:08:49.167Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a04",
    },
    name: "Replica",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co222m.jpg",
    status: "completed",
    playTime: 3,
    createdAt: "2024-04-11T09:49:07.874Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2018-11-05",
    rating: 7.4,
    platform: "steam",
    review: "",
    igdb: {
      id: 20125,
      cover: {
        id: 95998,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co222m.jpg",
        game: 20125,
      },
      aggregated_rating: 75,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e72cecde323340339357",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Point-and-click",
          _id: {
            $oid: "6694e72cecde323340339358",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e72cecde323340339359",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e72cecde32334033935a",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e72cecde32334033935b",
          },
        },
      ],
      developers: [
        {
          id: 26657,
          name: "Somi",
          _id: {
            $oid: "6694e72cecde32334033935c",
          },
        },
      ],
      publishers: [
        {
          id: 6319,
          name: "Zero Rock Entertainment",
          _id: {
            $oid: "6694e72cecde32334033935d",
          },
        },
        {
          id: 23125,
          name: "PLAYISM",
          _id: {
            $oid: "6694e72cecde32334033935e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e72cecde32334033935f",
          },
        },
        {
          id: 5,
          name: "Text",
          _id: {
            $oid: "6694e72cecde323340339360",
          },
        },
      ],
      themes: [
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e72cecde323340339361",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "replica",
    updatedAt: {
      $date: "2024-07-15T09:09:00.093Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a05",
    },
    platform: "epicGames",
    lastPlay: "2018-10-18",
    playTime: 22,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co6mzf.jpg",
    rating: 8.4,
    screenshotSize: 0,
    review: "",
    status: "completed",
    name: "Detroit: Become Human",
    createdAt: "2024-03-04T13:02:04.117Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 14362,
      cover: {
        id: 309723,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co6mzf.jpg",
        game: 14362,
      },
      aggregated_rating: 77.61538461538461,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e736ecde323340339a53",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e736ecde323340339a54",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e736ecde323340339a55",
          },
        },
      ],
      developers: [
        {
          id: 261,
          name: "Quantic Dream",
          _id: {
            $oid: "6694e736ecde323340339a56",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "6694e736ecde323340339a57",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e736ecde323340339a58",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e736ecde323340339a59",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e736ecde323340339a5a",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e736ecde323340339a5b",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e736ecde323340339a5c",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e736ecde323340339a5d",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "detroit-become-human",
    updatedAt: {
      $date: "2024-07-15T09:09:10.217Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a06",
    },
    platform: "steam",
    status: "completed",
    screenshotSize: 0,
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3b15.jpg",
    rating: 6.5,
    lastPlay: "2018-10-14",
    playTime: 7,
    createdAt: "2024-03-04T12:46:06.007Z",
    name: "Call of Duty: Ghosts",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 2033,
      cover: {
        id: 154265,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3b15.jpg",
        game: 2033,
      },
      aggregated_rating: 73.6086956521739,
      aggregated_rating_count: 27,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e73eecde32334033a15a",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e73eecde32334033a15b",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e73eecde32334033a15c",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e73eecde32334033a15d",
          },
        },
      ],
      developers: [
        {
          id: 90,
          name: "Neversoft Entertainment",
          _id: {
            $oid: "6694e73eecde32334033a15e",
          },
        },
        {
          id: 438,
          name: "Infinity Ward",
          _id: {
            $oid: "6694e73eecde32334033a15f",
          },
        },
        {
          id: 71,
          name: "Raven Software",
          _id: {
            $oid: "6694e73eecde32334033a160",
          },
        },
        {
          id: 428,
          name: "Treyarch",
          _id: {
            $oid: "6694e73eecde32334033a161",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694e73eecde32334033a162",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e73eecde32334033a163",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e73eecde32334033a164",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e73eecde32334033a165",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e73eecde32334033a166",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e73eecde32334033a167",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e73eecde32334033a168",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e73eecde32334033a169",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-ghosts",
    updatedAt: {
      $date: "2024-07-15T09:09:18.489Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a07",
    },
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co21c0.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    status: "completed",
    screenshotSize: 0,
    lastPlay: "2018-07-25",
    createdAt: "2024-04-11T09:51:55.690Z",
    playTime: 13,
    name: "Wolfenstein: The New Order",
    rating: 7.3,
    igdb: {
      id: 2031,
      cover: {
        id: 95040,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co21c0.jpg",
        game: 2031,
      },
      aggregated_rating: 77.3125,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e746ecde32334033a876",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e746ecde32334033a877",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e746ecde32334033a878",
          },
        },
      ],
      developers: [
        {
          id: 1242,
          name: "MachineGames",
          _id: {
            $oid: "6694e746ecde32334033a879",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694e746ecde32334033a87a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e746ecde32334033a87b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e746ecde32334033a87c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e746ecde32334033a87d",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e746ecde32334033a87e",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e746ecde32334033a87f",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e746ecde32334033a880",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e746ecde32334033a881",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "wolfenstein-the-new-order",
    updatedAt: {
      $date: "2024-07-15T09:09:26.651Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a08",
    },
    platform: "epicGames",
    review: "",
    lastPlay: "2018-07-13",
    name: "Vampyr",
    createdAt: "2024-04-11T09:15:35.045Z",
    playTime: 17,
    rating: 7.7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1q8o.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    status: "completed",
    igdb: {
      id: 8729,
      cover: {
        id: 80664,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1q8o.jpg",
        game: 8729,
      },
      aggregated_rating: 68.29411764705883,
      aggregated_rating_count: 21,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e751ecde32334033af9a",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e751ecde32334033af9b",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e751ecde32334033af9c",
          },
        },
      ],
      developers: [
        {
          id: 894,
          name: "DON'T NOD",
          _id: {
            $oid: "6694e751ecde32334033af9d",
          },
        },
        {
          id: 18717,
          name: "Dontnod Eleven",
          _id: {
            $oid: "6694e751ecde32334033af9e",
          },
        },
      ],
      publishers: [
        {
          id: 110,
          name: "Focus Entertainment",
          _id: {
            $oid: "6694e751ecde32334033af9f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e751ecde32334033afa0",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e751ecde32334033afa1",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e751ecde32334033afa2",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "vampyr",
    updatedAt: {
      $date: "2024-07-15T09:09:37.437Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a09",
    },
    playTime: 6,
    status: "completed",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co24h6.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    screenshotSize: 0,
    name: "Finding Paradise",
    lastPlay: "2018-07-06",
    rating: 7,
    createdAt: "2024-04-11T12:52:26.984Z",
    igdb: {
      id: 36044,
      cover: {
        id: 99114,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co24h6.jpg",
        game: 36044,
      },
      aggregated_rating: 93,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e75fecde32334033b6c4",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Point-and-click",
          _id: {
            $oid: "6694e75fecde32334033b6c5",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e75fecde32334033b6c6",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e75fecde32334033b6c7",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e75fecde32334033b6c8",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e75fecde32334033b6c9",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694e75fecde32334033b6ca",
          },
        },
      ],
      developers: [
        {
          id: 2236,
          name: "Freebird Games",
          _id: {
            $oid: "6694e75fecde32334033b6cb",
          },
        },
      ],
      publishers: [
        {
          id: 2236,
          name: "Freebird Games",
          _id: {
            $oid: "6694e75fecde32334033b6cc",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e75fecde32334033b6cd",
          },
        },
      ],
      themes: [
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e75fecde32334033b6ce",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e75fecde32334033b6cf",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "finding-paradise",
    updatedAt: {
      $date: "2024-07-15T09:09:51.205Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a0a",
    },
    screenshotSize: 0,
    lastPlay: "2018-06-24",
    status: "completed",
    platform: "steam",
    playTime: 35,
    name: "Kingdom Come: Deliverance",
    createdAt: "2024-03-04T12:51:43.185Z",
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4aqi.jpg",
    rating: 7.4,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 4843,
      cover: {
        id: 200538,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4aqi.jpg",
        game: 4843,
      },
      aggregated_rating: 73.72727272727273,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e76becde32334033bdfd",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e76becde32334033bdfe",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e76becde32334033bdff",
          },
        },
      ],
      developers: [
        {
          id: 2171,
          name: "Warhorse Studios",
          _id: {
            $oid: "6694e76becde32334033be00",
          },
        },
      ],
      publishers: [
        {
          id: 2171,
          name: "Warhorse Studios",
          _id: {
            $oid: "6694e76becde32334033be01",
          },
        },
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694e76becde32334033be02",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e76becde32334033be03",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e76becde32334033be04",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e76becde32334033be05",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e76becde32334033be06",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e76becde32334033be07",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e76becde32334033be08",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "kingdom-come-deliverance",
    updatedAt: {
      $date: "2024-07-15T09:10:03.982Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a0b",
    },
    rating: 7.1,
    platform: "ubisoft",
    playTime: 20,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co21a6.jpg",
    status: "completed",
    name: "Far Cry 5",
    review: "",
    lastPlay: "2018-06-24",
    createdAt: "2024-03-05T12:23:42.253Z",
    screenshotSize: 0,
    igdb: {
      id: 28552,
      cover: {
        id: 94974,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co21a6.jpg",
        game: 28552,
      },
      aggregated_rating: 84.33333333333333,
      aggregated_rating_count: 21,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e775ecde32334033c542",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e775ecde32334033c543",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e775ecde32334033c544",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e775ecde32334033c545",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e775ecde32334033c546",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e775ecde32334033c547",
          },
        },
      ],
      publishers: [],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e775ecde32334033c548",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e775ecde32334033c549",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e775ecde32334033c54a",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "far-cry-5",
    updatedAt: {
      $date: "2024-07-15T09:10:13.385Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a0c",
    },
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1vzu.jpg",
    platform: "steam",
    rating: 8.3,
    playTime: 18,
    createdAt: "2024-04-13T21:03:31.288Z",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Alien: Isolation",
    screenshotSize: 0,
    lastPlay: "2018-06-14",
    igdb: {
      id: 4754,
      cover: {
        id: 88122,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1vzu.jpg",
        game: 4754,
      },
      aggregated_rating: 85.63157894736842,
      aggregated_rating_count: 22,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e77fecde32334033cc8d",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e77fecde32334033cc8e",
          },
        },
      ],
      developers: [
        {
          id: 111,
          name: "The Creative Assembly",
          _id: {
            $oid: "6694e77fecde32334033cc8f",
          },
        },
      ],
      publishers: [
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694e77fecde32334033cc90",
          },
        },
        {
          id: 112,
          name: "Sega",
          _id: {
            $oid: "6694e77fecde32334033cc91",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e77fecde32334033cc92",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e77fecde32334033cc93",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e77fecde32334033cc94",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e77fecde32334033cc95",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e77fecde32334033cc96",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e77fecde32334033cc97",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "alien-isolation",
    updatedAt: {
      $date: "2024-07-15T09:10:23.632Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a0d",
    },
    lastPlay: "2018-03-23",
    playTime: 11,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2n12.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "BioShock Infinite",
    platform: "steam",
    screenshotSize: 0,
    rating: 8.3,
    status: "completed",
    createdAt: "2024-04-11T12:57:10.344Z",
    review: "",
    igdb: {
      id: 538,
      cover: {
        id: 123158,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2n12.jpg",
        game: 538,
      },
      aggregated_rating: 93.21428571428571,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e78aecde32334033d3e5",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e78aecde32334033d3e6",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e78aecde32334033d3e7",
          },
        },
      ],
      developers: [
        {
          id: 21,
          name: "Irrational Games",
          _id: {
            $oid: "6694e78aecde32334033d3e8",
          },
        },
      ],
      publishers: [
        {
          id: 8,
          name: "2K Games",
          _id: {
            $oid: "6694e78aecde32334033d3e9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e78aecde32334033d3ea",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e78aecde32334033d3eb",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e78aecde32334033d3ec",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e78aecde32334033d3ed",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e78aecde32334033d3ee",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e78aecde32334033d3ef",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e78aecde32334033d3f0",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "bioshock-infinite",
    updatedAt: {
      $date: "2024-07-15T09:10:34.315Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a0e",
    },
    playTime: 11,
    name: "Life is Strange: Before the Storm",
    platform: "steam",
    rating: 6,
    createdAt: "2024-04-11T12:55:52.906Z",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1twj.jpg",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2018-03-23",
    screenshotSize: 0,
    igdb: {
      id: 29004,
      cover: {
        id: 85411,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1twj.jpg",
        game: 29004,
      },
      aggregated_rating: 77.05405405405405,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e795ecde32334033db4a",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e795ecde32334033db4b",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e795ecde32334033db4c",
          },
        },
      ],
      developers: [
        {
          id: 12931,
          name: "Deck Nine",
          _id: {
            $oid: "6694e795ecde32334033db4d",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694e795ecde32334033db4e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e795ecde32334033db4f",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e795ecde32334033db50",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e795ecde32334033db51",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e795ecde32334033db52",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e795ecde32334033db53",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e795ecde32334033db54",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "life-is-strange-before-the-storm",
    updatedAt: {
      $date: "2024-07-15T09:10:45.820Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a0f",
    },
    name: "Layers of Fear",
    playTime: 4,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    platform: "steam",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1nhw.jpg",
    lastPlay: "2018-03-17",
    rating: 7.3,
    review: "",
    createdAt: "2024-04-11T12:59:10.604Z",
    igdb: {
      id: 12482,
      cover: {
        id: 77108,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1nhw.jpg",
        game: 12482,
      },
      aggregated_rating: 76.11764705882354,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e7a2ecde32334033e2b9",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e7a2ecde32334033e2ba",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e7a2ecde32334033e2bb",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e7a2ecde32334033e2bc",
          },
        },
      ],
      developers: [
        {
          id: 4598,
          name: "Bloober Team",
          _id: {
            $oid: "6694e7a2ecde32334033e2bd",
          },
        },
        {
          id: 36477,
          name: "EXNOA LLC",
          _id: {
            $oid: "6694e7a2ecde32334033e2be",
          },
        },
      ],
      publishers: [
        {
          id: 4598,
          name: "Bloober Team",
          _id: {
            $oid: "6694e7a2ecde32334033e2bf",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e7a2ecde32334033e2c0",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e7a2ecde32334033e2c1",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e7a2ecde32334033e2c2",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "layers-of-fear",
    updatedAt: {
      $date: "2024-07-15T09:10:58.129Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a10",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rs4.jpg",
    playTime: 11,
    lastPlay: "2018-03-14",
    platform: "steam",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    status: "completed",
    name: "Portal 2",
    rating: 7.9,
    createdAt: "2024-04-14T13:09:12.610Z",
    igdb: {
      id: 72,
      cover: {
        id: 82660,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rs4.jpg",
        game: 72,
      },
      aggregated_rating: 92.44444444444444,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e7abecde32334033ea31",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e7abecde32334033ea32",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e7abecde32334033ea33",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e7abecde32334033ea34",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e7abecde32334033ea35",
          },
        },
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e7abecde32334033ea36",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e7abecde32334033ea37",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e7abecde32334033ea38",
          },
        },
      ],
      developers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694e7abecde32334033ea39",
          },
        },
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694e7abecde32334033ea3a",
          },
        },
      ],
      publishers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694e7abecde32334033ea3b",
          },
        },
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694e7abecde32334033ea3c",
          },
        },
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694e7abecde32334033ea3d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e7abecde32334033ea3e",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e7abecde32334033ea3f",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e7abecde32334033ea40",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e7abecde32334033ea41",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "portal-2",
    updatedAt: {
      $date: "2024-07-15T09:11:07.385Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a11",
    },
    lastPlay: "2018-02-23",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2839.jpg",
    rating: 7,
    playTime: 3,
    status: "completed",
    name: "1979 Revolution: Black Friday",
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    review: "",
    createdAt: "2024-04-11T13:01:22.619Z",
    igdb: {
      id: 14360,
      cover: {
        id: 103797,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2839.jpg",
        game: 14360,
      },
      aggregated_rating: 70.75,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e7c4ecde32334033f1c1",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e7c4ecde32334033f1c2",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e7c4ecde32334033f1c3",
          },
        },
      ],
      developers: [
        {
          id: 1362,
          name: "N-Fusion Interactive",
          _id: {
            $oid: "6694e7c4ecde32334033f1c4",
          },
        },
        {
          id: 6658,
          name: "iNK Stories",
          _id: {
            $oid: "6694e7c4ecde32334033f1c5",
          },
        },
      ],
      publishers: [
        {
          id: 6658,
          name: "iNK Stories",
          _id: {
            $oid: "6694e7c4ecde32334033f1c6",
          },
        },
        {
          id: 5257,
          name: "Digerati Distribution",
          _id: {
            $oid: "6694e7c4ecde32334033f1c7",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e7c4ecde32334033f1c8",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e7c4ecde32334033f1c9",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e7c4ecde32334033f1ca",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e7c4ecde32334033f1cb",
          },
        },
        {
          id: 32,
          name: "Non-fiction",
          _id: {
            $oid: "6694e7c4ecde32334033f1cc",
          },
        },
        {
          id: 34,
          name: "Educational",
          _id: {
            $oid: "6694e7c4ecde32334033f1cd",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e7c4ecde32334033f1ce",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "1979-revolution-black-friday",
    updatedAt: {
      $date: "2024-07-15T09:11:32.697Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a12",
    },
    rating: 8.6,
    playTime: 63,
    name: "Metal Gear Solid V: The Phantom Pain",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1v85.jpg",
    review: "",
    screenshotSize: 0,
    status: "completed",
    createdAt: "2024-01-21T08:45:21.791Z",
    lastPlay: "2018-02-21",
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 1985,
      cover: {
        id: 87125,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1v85.jpg",
        game: 1985,
      },
      aggregated_rating: 95.73684210526316,
      aggregated_rating_count: 24,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e7d4ecde32334033f95c",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e7d4ecde32334033f95d",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e7d4ecde32334033f95e",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e7d4ecde32334033f95f",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e7d4ecde32334033f960",
          },
        },
      ],
      developers: [
        {
          id: 170,
          name: "Kojima Productions",
          _id: {
            $oid: "6694e7d4ecde32334033f961",
          },
        },
      ],
      publishers: [
        {
          id: 129,
          name: "Konami",
          _id: {
            $oid: "6694e7d4ecde32334033f962",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e7d4ecde32334033f963",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e7d4ecde32334033f964",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e7d4ecde32334033f965",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e7d4ecde32334033f966",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e7d4ecde32334033f967",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e7d4ecde32334033f968",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "metal-gear-solid-v-the-phantom-pain",
    updatedAt: {
      $date: "2024-07-15T09:11:48.490Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a13",
    },
    screenshotSize: 0,
    createdAt: "2024-04-11T13:02:37.821Z",
    rating: 7.6,
    platform: "steam",
    playTime: 13,
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1qrc.jpg",
    name: "Hitman: Absolution",
    review: "",
    lastPlay: "2018-02-19",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 530,
      cover: {
        id: 81336,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1qrc.jpg",
        game: 530,
      },
      aggregated_rating: 76.4,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e7e0ecde323340340103",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e7e0ecde323340340104",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e7e0ecde323340340105",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e7e0ecde323340340106",
          },
        },
      ],
      developers: [
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694e7e0ecde323340340107",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694e7e0ecde323340340108",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e7e0ecde323340340109",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e7e0ecde32334034010a",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e7e0ecde32334034010b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hitman-absolution",
    updatedAt: {
      $date: "2024-07-15T09:12:00.116Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a14",
    },
    rating: 3.5,
    screenshotSize: 0,
    status: "completed",
    lastPlay: "2018-01-11",
    review: "",
    createdAt: "2024-04-15T15:32:06.003Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 3,
    photo:
      "//images.igdb.com/igdb/image/upload/t_1080p/wp6xgehw3bjiwp0epp1u.jpg",
    platform: "steam",
    name: "Bizarre Earthquake",
    igdb: {
      id: 33385,
      cover: {
        id: 38354,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/wp6xgehw3bjiwp0epp1u.jpg",
        game: 33385,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e7f5ecde3233403408af",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e7f5ecde3233403408b0",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e7f5ecde3233403408b1",
          },
        },
      ],
      developers: [],
      publishers: [],
    },
    isFavorite: false,
    slug: "bizarre-earthquake",
    updatedAt: {
      $date: "2024-07-15T09:12:21.723Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a15",
    },
    status: "completed",
    playTime: 9,
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co27bk.jpg",
    rating: 7.1,
    createdAt: "2024-04-11T13:36:00.448Z",
    name: "The Walking Dead: A New Frontier",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    lastPlay: "2017-12-25",
    igdb: {
      id: 19000,
      cover: {
        id: 102800,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co27bk.jpg",
        game: 19000,
      },
      aggregated_rating: 74.85964912280701,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e800ecde323340341058",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Point-and-click",
          _id: {
            $oid: "6694e800ecde323340341059",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e800ecde32334034105a",
          },
        },
      ],
      developers: [
        {
          id: 294,
          name: "Telltale Games",
          _id: {
            $oid: "6694e800ecde32334034105b",
          },
        },
      ],
      publishers: [
        {
          id: 16242,
          name: "Skybound Games",
          _id: {
            $oid: "6694e800ecde32334034105c",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e800ecde32334034105d",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e800ecde32334034105e",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e800ecde32334034105f",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e800ecde323340341060",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e800ecde323340341061",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e800ecde323340341062",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-walking-dead-a-new-frontier",
    updatedAt: {
      $date: "2024-07-15T09:12:32.356Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a16",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co21et.jpg",
    review: "",
    status: "completed",
    rating: 8.3,
    name: "Wolfenstein: The Old Blood",
    lastPlay: "2017-12-21",
    screenshotSize: 0,
    createdAt: "2024-04-11T09:55:39.812Z",
    playTime: 7,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    igdb: {
      id: 9192,
      cover: {
        id: 95141,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co21et.jpg",
        game: 9192,
      },
      aggregated_rating: 76.4,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e80becde323340341814",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e80becde323340341815",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e80becde323340341816",
          },
        },
      ],
      developers: [
        {
          id: 1242,
          name: "MachineGames",
          _id: {
            $oid: "6694e80becde323340341817",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694e80becde323340341818",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e80becde323340341819",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e80becde32334034181a",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e80becde32334034181b",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e80becde32334034181c",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e80becde32334034181d",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e80becde32334034181e",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e80becde32334034181f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "wolfenstein-the-old-blood",
    updatedAt: {
      $date: "2024-07-15T09:12:43.361Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a17",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2acb.jpg",
    name: "Spec Ops: The Line",
    screenshotSize: 0,
    review: "",
    lastPlay: "2017-11-28",
    status: "completed",
    playTime: 7,
    rating: 7.9,
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-04-11T13:37:24.903Z",
    igdb: {
      id: 1377,
      cover: {
        id: 106715,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2acb.jpg",
        game: 1377,
      },
      aggregated_rating: 76.66666666666667,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e81fecde323340341fdd",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e81fecde323340341fde",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e81fecde323340341fdf",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e81fecde323340341fe0",
          },
        },
      ],
      developers: [
        {
          id: 902,
          name: "Yager Development",
          _id: {
            $oid: "6694e81fecde323340341fe1",
          },
        },
      ],
      publishers: [
        {
          id: 8,
          name: "2K Games",
          _id: {
            $oid: "6694e81fecde323340341fe2",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694e81fecde323340341fe3",
          },
        },
        {
          id: 7919,
          name: "Missing Link Games",
          _id: {
            $oid: "6694e81fecde323340341fe4",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e81fecde323340341fe5",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e81fecde323340341fe6",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e81fecde323340341fe7",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e81fecde323340341fe8",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "spec-ops-the-line",
    updatedAt: {
      $date: "2024-07-15T09:13:03.968Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a18",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rdj.jpg",
    screenshotSize: 0,
    lastPlay: "2017-11-24",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Call of Duty: WWII",
    playTime: 9,
    review: "",
    status: "completed",
    createdAt: "2024-03-04T12:25:21.868Z",
    rating: 7.4,
    platform: "steam",
    igdb: {
      id: 28204,
      cover: {
        id: 82135,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rdj.jpg",
        game: 28204,
      },
      aggregated_rating: 75.27777777777777,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e82aecde3233403427b2",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e82aecde3233403427b3",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e82aecde3233403427b4",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e82aecde3233403427b5",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e82aecde3233403427b6",
          },
        },
      ],
      developers: [
        {
          id: 659,
          name: "Sledgehammer Games",
          _id: {
            $oid: "6694e82aecde3233403427b7",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694e82aecde3233403427b8",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e82aecde3233403427b9",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e82aecde3233403427ba",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e82aecde3233403427bb",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e82aecde3233403427bc",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-wwii",
    updatedAt: {
      $date: "2024-07-15T09:13:14.155Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a19",
    },
    playTime: 10,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20yw.jpg",
    rating: 6.1,
    review: "",
    lastPlay: "2017-11-23",
    platform: "steam",
    name: "Call of Duty: Black Ops III",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    screenshotSize: 0,
    createdAt: "2024-01-23T09:09:28.231Z",
    igdb: {
      id: 9509,
      cover: {
        id: 94568,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20yw.jpg",
        game: 9509,
      },
      aggregated_rating: 76.77777777777777,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e833ecde323340342f91",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e833ecde323340342f92",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e833ecde323340342f93",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e833ecde323340342f94",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e833ecde323340342f95",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e833ecde323340342f96",
          },
        },
      ],
      developers: [
        {
          id: 428,
          name: "Treyarch",
          _id: {
            $oid: "6694e833ecde323340342f97",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694e833ecde323340342f98",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e833ecde323340342f99",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e833ecde323340342f9a",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e833ecde323340342f9b",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e833ecde323340342f9c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-black-ops-iii",
    updatedAt: {
      $date: "2024-07-15T09:13:23.967Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a1a",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2521.jpg",
    lastPlay: "2017-11-15",
    platform: "steam",
    createdAt: "2024-04-11T13:38:43.398Z",
    rating: 2.7,
    screenshotSize: 0,
    name: "Nephise",
    review: "",
    playTime: 1,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    igdb: {
      id: 29171,
      cover: {
        id: 99865,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2521.jpg",
        game: 29171,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e83decde32334034377d",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e83decde32334034377e",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e83decde32334034377f",
          },
        },
      ],
      developers: [],
      publishers: [],
    },
    isFavorite: false,
    slug: "nephise",
    updatedAt: {
      $date: "2024-07-15T09:13:33.656Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a1b",
    },
    rating: 7.4,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2qnx.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Medal of Honor: Airborne",
    createdAt: "2024-04-11T13:41:29.617Z",
    lastPlay: "2017-07-19",
    review: "",
    platform: "steam",
    playTime: 10,
    status: "completed",
    screenshotSize: 0,
    igdb: {
      id: 1314,
      cover: {
        id: 127869,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2qnx.jpg",
        game: 1314,
      },
      aggregated_rating: 82,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e84aecde323340343f63",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e84aecde323340343f64",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e84aecde323340343f65",
          },
        },
      ],
      developers: [
        {
          id: 140,
          name: "EA Los Angeles",
          _id: {
            $oid: "6694e84aecde323340343f66",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694e84aecde323340343f67",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e84aecde323340343f68",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e84aecde323340343f69",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e84aecde323340343f6a",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e84aecde323340343f6b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "medal-of-honor-airborne",
    updatedAt: {
      $date: "2024-07-15T09:13:46.154Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a1c",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    lastPlay: "2017-07-03",
    name: "Gone Home",
    photo:
      "//images.igdb.com/igdb/image/upload/t_1080p/qwhxxrcxzw7inwfrfkbq.jpg",
    status: "completed",
    review: "",
    playTime: 2,
    createdAt: "2024-04-11T13:42:51.754Z",
    screenshotSize: 0,
    rating: 7.2,
    igdb: {
      id: 1906,
      cover: {
        id: 11115,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/qwhxxrcxzw7inwfrfkbq.jpg",
        game: 1906,
      },
      aggregated_rating: 73.8,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e855ecde323340344758",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Point-and-click",
          _id: {
            $oid: "6694e855ecde323340344759",
          },
        },
        {
          id: 7,
          name: "Music",
          _id: {
            $oid: "6694e855ecde32334034475a",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e855ecde32334034475b",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e855ecde32334034475c",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e855ecde32334034475d",
          },
        },
      ],
      developers: [
        {
          id: 918,
          name: "Fullbright",
          _id: {
            $oid: "6694e855ecde32334034475e",
          },
        },
      ],
      publishers: [
        {
          id: 2512,
          name: "Midnight City",
          _id: {
            $oid: "6694e855ecde32334034475f",
          },
        },
        {
          id: 918,
          name: "Fullbright",
          _id: {
            $oid: "6694e855ecde323340344760",
          },
        },
        {
          id: 11662,
          name: "Annapurna Interactive",
          _id: {
            $oid: "6694e855ecde323340344761",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e855ecde323340344762",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e855ecde323340344763",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e855ecde323340344764",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e855ecde323340344765",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "gone-home",
    updatedAt: {
      $date: "2024-07-15T09:13:57.181Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a1d",
    },
    name: "Wolfenstein II: The New Colossus",
    playTime: 14,
    lastPlay: "2017-06-24",
    review: "",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.5,
    screenshotSize: 0,
    createdAt: "2024-03-04T11:42:05.332Z",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co21c5.jpg",
    igdb: {
      id: 36952,
      cover: {
        id: 95045,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co21c5.jpg",
        game: 36952,
      },
      aggregated_rating: 86.54545454545455,
      aggregated_rating_count: 27,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e860ecde323340344f60",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e860ecde323340344f61",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e860ecde323340344f62",
          },
        },
      ],
      developers: [
        {
          id: 1242,
          name: "MachineGames",
          _id: {
            $oid: "6694e860ecde323340344f63",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694e860ecde323340344f64",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e860ecde323340344f65",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e860ecde323340344f66",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e860ecde323340344f67",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e860ecde323340344f68",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e860ecde323340344f69",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "wolfenstein-ii-the-new-colossus",
    updatedAt: {
      $date: "2024-07-15T09:14:08.158Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a1e",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rbe.jpg",
    rating: 8,
    status: "completed",
    screenshotSize: 0,
    createdAt: "2024-03-05T12:08:41.799Z",
    review: "",
    name: "Assassin's Creed Origins",
    platform: "ubisoft",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 35,
    lastPlay: "2017-06-24",
    igdb: {
      id: 28540,
      cover: {
        id: 82058,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rbe.jpg",
        game: 28540,
      },
      aggregated_rating: 85.93333333333334,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e869ecde32334034576e",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e869ecde32334034576f",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e869ecde323340345770",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e869ecde323340345771",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e869ecde323340345772",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e869ecde323340345773",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e869ecde323340345774",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e869ecde323340345775",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e869ecde323340345776",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e869ecde323340345777",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-origins",
    updatedAt: {
      $date: "2024-07-15T09:14:17.358Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a1f",
    },
    rating: 8.4,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2a20.jpg",
    playTime: 13,
    status: "completed",
    platform: "steam",
    name: "Soma",
    lastPlay: "2017-06-21",
    screenshotSize: 0,
    createdAt: "2024-01-21T08:38:33.306Z",
    review: "",
    igdb: {
      id: 9727,
      cover: {
        id: 106344,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2a20.jpg",
        game: 9727,
      },
      aggregated_rating: 81.25,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e873ecde323340345f86",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e873ecde323340345f87",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e873ecde323340345f88",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e873ecde323340345f89",
          },
        },
      ],
      developers: [
        {
          id: 36,
          name: "Frictional Games",
          _id: {
            $oid: "6694e873ecde323340345f8a",
          },
        },
      ],
      publishers: [
        {
          id: 36,
          name: "Frictional Games",
          _id: {
            $oid: "6694e873ecde323340345f8b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e873ecde323340345f8c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e873ecde323340345f8d",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e873ecde323340345f8e",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e873ecde323340345f8f",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e873ecde323340345f90",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e873ecde323340345f91",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "soma",
    updatedAt: {
      $date: "2024-07-15T09:14:27.363Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a20",
    },
    platform: "steam",
    playTime: 17,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1y2f.jpg",
    status: "activePlaying",
    createdAt: "2024-03-04T14:06:54.924Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    lastPlay: "2017-06-17",
    rating: 7.8,
    screenshotSize: 0,
    name: "Left 4 Dead 2",
    igdb: {
      id: 124,
      cover: {
        id: 90807,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1y2f.jpg",
        game: 124,
      },
      aggregated_rating: 88.6,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e87eecde3233403467ac",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e87eecde3233403467ad",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e87eecde3233403467ae",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e87eecde3233403467af",
          },
        },
      ],
      developers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694e87eecde3233403467b0",
          },
        },
        {
          id: 55,
          name: "Turtle Rock Studios",
          _id: {
            $oid: "6694e87eecde3233403467b1",
          },
        },
      ],
      publishers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694e87eecde3233403467b2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e87eecde3233403467b3",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e87eecde3233403467b4",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e87eecde3233403467b5",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e87eecde3233403467b6",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "left-4-dead-2",
    updatedAt: {
      $date: "2024-07-15T09:14:38.562Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a21",
    },
    name: "Dishonored: Death of the Outsider",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5pd2.jpg",
    screenshotSize: 0,
    status: "completed",
    platform: "xboxPc",
    rating: 7.4,
    review: "",
    playTime: 12,
    createdAt: "2024-03-04T11:15:42.517Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2017-06-17",
    igdb: {
      id: 37030,
      cover: {
        id: 266150,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5pd2.jpg",
        game: 37030,
      },
      aggregated_rating: 81.9090909090909,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e88eecde323340346fdc",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e88eecde323340346fdd",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e88eecde323340346fde",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e88eecde323340346fdf",
          },
        },
      ],
      developers: [
        {
          id: 19,
          name: "Arkane Studios",
          _id: {
            $oid: "6694e88eecde323340346fe0",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694e88eecde323340346fe1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e88eecde323340346fe2",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e88eecde323340346fe3",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e88eecde323340346fe4",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e88eecde323340346fe5",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "dishonored-death-of-the-outsider",
    updatedAt: {
      $date: "2024-07-15T09:14:54.630Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a22",
    },
    lastPlay: "2017-06-08",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    status: "completed",
    screenshotSize: 0,
    name: "Conarium",
    createdAt: "2024-04-11T13:40:18.440Z",
    rating: 7.1,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1iwu.jpg",
    playTime: 6,
    igdb: {
      id: 24856,
      cover: {
        id: 71166,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1iwu.jpg",
        game: 24856,
      },
      aggregated_rating: 72,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e897ecde323340347815",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e897ecde323340347816",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e897ecde323340347817",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e897ecde323340347818",
          },
        },
      ],
      developers: [
        {
          id: 8665,
          name: "Zoetrope Interactive",
          _id: {
            $oid: "6694e897ecde323340347819",
          },
        },
      ],
      publishers: [
        {
          id: 2776,
          name: "Iceberg Interactive",
          _id: {
            $oid: "6694e897ecde32334034781a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e897ecde32334034781b",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e897ecde32334034781c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "conarium",
    updatedAt: {
      $date: "2024-07-15T09:15:03.777Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a23",
    },
    platform: "steam",
    lastPlay: "2017-04-23",
    name: "Call of Juarez: Gunslinger",
    playTime: 6,
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1qqf.jpg",
    review: "",
    createdAt: "2024-04-15T15:25:33.093Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    rating: 7.6,
    igdb: {
      id: 1976,
      cover: {
        id: 81303,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1qqf.jpg",
        game: 1976,
      },
      aggregated_rating: 74.6,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e8a2ecde323340348054",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e8a2ecde323340348055",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e8a2ecde323340348056",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694e8a2ecde323340348057",
          },
        },
      ],
      developers: [
        {
          id: 108,
          name: "Techland",
          _id: {
            $oid: "6694e8a2ecde323340348058",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e8a2ecde323340348059",
          },
        },
        {
          id: 108,
          name: "Techland",
          _id: {
            $oid: "6694e8a2ecde32334034805a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e8a2ecde32334034805b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e8a2ecde32334034805c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e8a2ecde32334034805d",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e8a2ecde32334034805e",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e8a2ecde32334034805f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-juarez-gunslinger",
    updatedAt: {
      $date: "2024-07-15T09:15:14.293Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a24",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5esn.jpg",
    name: "Dead Space",
    playTime: 15,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    review: "",
    status: "completed",
    createdAt: "2024-04-15T15:28:08.686Z",
    rating: 7.7,
    platform: "steam",
    lastPlay: "2017-02-25",
    igdb: {
      id: 159119,
      cover: {
        id: 252455,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5esn.jpg",
        game: 159119,
      },
      aggregated_rating: 90.57142857142857,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e8adecde3233403488a3",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e8adecde3233403488a4",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e8adecde3233403488a5",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e8adecde3233403488a6",
          },
        },
      ],
      developers: [
        {
          id: 12478,
          name: "Motive Studios",
          _id: {
            $oid: "6694e8adecde3233403488a7",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694e8adecde3233403488a8",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e8adecde3233403488a9",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e8adecde3233403488aa",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e8adecde3233403488ab",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e8adecde3233403488ac",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e8adecde3233403488ad",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "dead-space",
    updatedAt: {
      $date: "2024-07-15T09:15:25.562Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a25",
    },
    lastPlay: "2017-02-24",
    review: "",
    platform: "steam",
    name: "Sniper Elite 4",
    playTime: 16,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co24t8.jpg",
    rating: 7.4,
    screenshotSize: 0,
    createdAt: "2024-03-04T11:36:00.288Z",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 18366,
      cover: {
        id: 99548,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co24t8.jpg",
        game: 18366,
      },
      aggregated_rating: 76.21052631578948,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e8b7ecde3233403490fc",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e8b7ecde3233403490fd",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e8b7ecde3233403490fe",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e8b7ecde3233403490ff",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e8b7ecde323340349100",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e8b7ecde323340349101",
          },
        },
      ],
      developers: [
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694e8b7ecde323340349102",
          },
        },
      ],
      publishers: [
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694e8b7ecde323340349103",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e8b7ecde323340349104",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e8b7ecde323340349105",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e8b7ecde323340349106",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e8b7ecde323340349107",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e8b7ecde323340349108",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e8b7ecde323340349109",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "sniper-elite-4",
    updatedAt: {
      $date: "2024-07-15T09:15:35.318Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a26",
    },
    name: "Assassin's Creed Rogue",
    platform: "ubisoft",
    playTime: 12,
    lastPlay: "2017-02-17",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    createdAt: "2024-03-05T12:03:12.633Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xir.jpg",
    rating: 7.6,
    screenshotSize: 0,
    igdb: {
      id: 7570,
      cover: {
        id: 90099,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xir.jpg",
        game: 7570,
      },
      aggregated_rating: 70.91666666666667,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e8c4ecde323340349966",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e8c4ecde323340349967",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e8c4ecde323340349968",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e8c4ecde323340349969",
          },
        },
      ],
      developers: [
        {
          id: 840,
          name: "Ubisoft Sofia",
          _id: {
            $oid: "6694e8c4ecde32334034996a",
          },
        },
        {
          id: 2921,
          name: "Ubisoft Kyiv",
          _id: {
            $oid: "6694e8c4ecde32334034996b",
          },
        },
        {
          id: 822,
          name: "Ubisoft Singapore",
          _id: {
            $oid: "6694e8c4ecde32334034996c",
          },
        },
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e8c4ecde32334034996d",
          },
        },
        {
          id: 3928,
          name: "Ubisoft Chengdu",
          _id: {
            $oid: "6694e8c4ecde32334034996e",
          },
        },
        {
          id: 899,
          name: "Ubisoft Milan",
          _id: {
            $oid: "6694e8c4ecde32334034996f",
          },
        },
        {
          id: 697,
          name: "Ubisoft Bucharest",
          _id: {
            $oid: "6694e8c4ecde323340349970",
          },
        },
        {
          id: 15790,
          name: "Ubisoft Québec",
          _id: {
            $oid: "6694e8c4ecde323340349971",
          },
        },
      ],
      publishers: [],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e8c4ecde323340349972",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e8c4ecde323340349973",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e8c4ecde323340349974",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e8c4ecde323340349975",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e8c4ecde323340349976",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e8c4ecde323340349977",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-rogue",
    updatedAt: {
      $date: "2024-07-15T09:15:48.805Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a27",
    },
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2irc.jpg",
    playTime: 4,
    lastPlay: "2017-02-16",
    name: "Kholat",
    review: "",
    rating: 8,
    platform: "steam",
    createdAt: "2024-04-15T15:35:06.569Z",
    screenshotSize: 0,
    igdb: {
      id: 7965,
      cover: {
        id: 117624,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2irc.jpg",
        game: 7965,
      },
      aggregated_rating: 66,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e8cfecde32334034a1e6",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e8cfecde32334034a1e7",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e8cfecde32334034a1e8",
          },
        },
      ],
      developers: [
        {
          id: 5966,
          name: "IMGN.PRO",
          _id: {
            $oid: "6694e8cfecde32334034a1e9",
          },
        },
      ],
      publishers: [
        {
          id: 5966,
          name: "IMGN.PRO",
          _id: {
            $oid: "6694e8cfecde32334034a1ea",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e8cfecde32334034a1eb",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e8cfecde32334034a1ec",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e8cfecde32334034a1ed",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e8cfecde32334034a1ee",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e8cfecde32334034a1ef",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "kholat",
    updatedAt: {
      $date: "2024-07-15T09:15:59.567Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a28",
    },
    status: "completed",
    rating: 8,
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1r7q.jpg",
    platform: "steam",
    screenshotSize: 0,
    playTime: 4,
    createdAt: "2024-04-13T21:05:46.219Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2017-02-08",
    name: "The Vanishing of Ethan Carter",
    igdb: {
      id: 2939,
      cover: {
        id: 81926,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1r7q.jpg",
        game: 2939,
      },
      aggregated_rating: 82.375,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e8d9ecde32334034aa68",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e8d9ecde32334034aa69",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e8d9ecde32334034aa6a",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e8d9ecde32334034aa6b",
          },
        },
      ],
      developers: [
        {
          id: 2518,
          name: "The Astronauts",
          _id: {
            $oid: "6694e8d9ecde32334034aa6c",
          },
        },
      ],
      publishers: [
        {
          id: 2518,
          name: "The Astronauts",
          _id: {
            $oid: "6694e8d9ecde32334034aa6d",
          },
        },
        {
          id: 753,
          name: "Nordic Games Publishing",
          _id: {
            $oid: "6694e8d9ecde32334034aa6e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e8d9ecde32334034aa6f",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e8d9ecde32334034aa70",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e8d9ecde32334034aa71",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e8d9ecde32334034aa72",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-vanishing-of-ethan-carter",
    updatedAt: {
      $date: "2024-07-15T09:16:09.950Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a29",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2iqn.jpg",
    rating: 6.8,
    name: "Lucius",
    review: "",
    playTime: 4,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    status: "completed",
    createdAt: "2024-04-15T15:29:54.467Z",
    lastPlay: "2017-01-01",
    platform: "steam",
    igdb: {
      id: 5778,
      cover: {
        id: 117599,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2iqn.jpg",
        game: 5778,
      },
      aggregated_rating: 45,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e8e5ecde32334034b2f6",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e8e5ecde32334034b2f7",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e8e5ecde32334034b2f8",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e8e5ecde32334034b2f9",
          },
        },
      ],
      developers: [
        {
          id: 2546,
          name: "Shiver Games",
          _id: {
            $oid: "6694e8e5ecde32334034b2fa",
          },
        },
      ],
      publishers: [
        {
          id: 1117,
          name: "Lace Mamba Global",
          _id: {
            $oid: "6694e8e5ecde32334034b2fb",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e8e5ecde32334034b2fc",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e8e5ecde32334034b2fd",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e8e5ecde32334034b2fe",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694e8e5ecde32334034b2ff",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e8e5ecde32334034b300",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "lucius",
    updatedAt: {
      $date: "2024-07-15T09:16:21.865Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a2a",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co206v.jpg",
    status: "completed",
    name: "FIFA 16",
    playTime: 74,
    screenshotSize: 0,
    rating: 8.2,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2016-12-22",
    createdAt: "2024-04-13T20:44:43.837Z",
    platform: "playstation",
    review: "",
    igdb: {
      id: 11071,
      cover: {
        id: 93559,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co206v.jpg",
        game: 11071,
      },
      aggregated_rating: 83.23076923076923,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e8eeecde32334034bb8f",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e8eeecde32334034bb90",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e8eeecde32334034bb91",
          },
        },
      ],
      genres: [
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694e8eeecde32334034bb92",
          },
        },
      ],
      developers: [
        {
          id: 277,
          name: "EA Canada",
          _id: {
            $oid: "6694e8eeecde32334034bb93",
          },
        },
      ],
      publishers: [
        {
          id: 454,
          name: "EA Sports",
          _id: {
            $oid: "6694e8eeecde32334034bb94",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e8eeecde32334034bb95",
          },
        },
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694e8eeecde32334034bb96",
          },
        },
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e8eeecde32334034bb97",
          },
        },
      ],
      themes: [
        {
          id: 32,
          name: "Non-fiction",
          _id: {
            $oid: "6694e8eeecde32334034bb98",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "fifa-16",
    updatedAt: {
      $date: "2024-07-15T09:16:30.080Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a2b",
    },
    review: "",
    screenshotSize: 0,
    rating: 7.4,
    createdAt: "2024-03-05T12:06:07.782Z",
    platform: "ubisoft",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xis.jpg",
    lastPlay: "2016-12-16",
    name: "Assassin's Creed Syndicate",
    playTime: 20,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 8263,
      cover: {
        id: 90100,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xis.jpg",
        game: 8263,
      },
      aggregated_rating: 72.15789473684211,
      aggregated_rating_count: 22,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e8f9ecde32334034c431",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e8f9ecde32334034c432",
          },
        },
      ],
      developers: [
        {
          id: 15790,
          name: "Ubisoft Québec",
          _id: {
            $oid: "6694e8f9ecde32334034c433",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e8f9ecde32334034c434",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e8f9ecde32334034c435",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e8f9ecde32334034c436",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e8f9ecde32334034c437",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e8f9ecde32334034c438",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e8f9ecde32334034c439",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e8f9ecde32334034c43a",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e8f9ecde32334034c43b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-syndicate",
    updatedAt: {
      $date: "2024-07-15T09:16:41.143Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a2c",
    },
    platform: "steam",
    status: "abandoned",
    name: "S.T.A.L.K.E.R.: Shadow of Chernobyl",
    playTime: 11,
    rating: 7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5pz6.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-04T14:10:12.559Z",
    screenshotSize: 0,
    review: "",
    lastPlay: "2016-12-11",
    igdb: {
      id: 320,
      cover: {
        id: 266946,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5pz6.jpg",
        game: 320,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e902ecde32334034ccdf",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e902ecde32334034cce0",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e902ecde32334034cce1",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e902ecde32334034cce2",
          },
        },
      ],
      developers: [
        {
          id: 144,
          name: "GSC Game World",
          _id: {
            $oid: "6694e902ecde32334034cce3",
          },
        },
      ],
      publishers: [
        {
          id: 197,
          name: "THQ",
          _id: {
            $oid: "6694e902ecde32334034cce4",
          },
        },
        {
          id: 372,
          name: "GSC World Publishing",
          _id: {
            $oid: "6694e902ecde32334034cce5",
          },
        },
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694e902ecde32334034cce6",
          },
        },
        {
          id: 3119,
          name: "cdp.pl",
          _id: {
            $oid: "6694e902ecde32334034cce7",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e902ecde32334034cce8",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e902ecde32334034cce9",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e902ecde32334034ccea",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e902ecde32334034cceb",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e902ecde32334034ccec",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e902ecde32334034cced",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e902ecde32334034ccee",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e902ecde32334034ccef",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "stalker-shadow-of-chernobyl",
    updatedAt: {
      $date: "2024-07-15T09:16:50.528Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a2d",
    },
    platform: "steam",
    name: "Batman: Arkham City",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    createdAt: "2024-03-05T12:28:57.364Z",
    screenshotSize: 0,
    rating: 8.5,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1voh.jpg",
    review: "",
    playTime: 20,
    lastPlay: "2016-11-30",
    igdb: {
      id: 501,
      cover: {
        id: 87713,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1voh.jpg",
        game: 501,
      },
      aggregated_rating: 91.2,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e90cecde32334034d5a4",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e90cecde32334034d5a5",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e90cecde32334034d5a6",
          },
        },
      ],
      developers: [
        {
          id: 164,
          name: "Rocksteady Studios",
          _id: {
            $oid: "6694e90cecde32334034d5a7",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e90cecde32334034d5a8",
          },
        },
        {
          id: 165,
          name: "DC Entertainment",
          _id: {
            $oid: "6694e90cecde32334034d5a9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e90cecde32334034d5aa",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e90cecde32334034d5ab",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e90cecde32334034d5ac",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e90cecde32334034d5ad",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "batman-arkham-city",
    updatedAt: {
      $date: "2024-07-15T09:17:00.288Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a2e",
    },
    createdAt: "2024-03-04T14:12:24.647Z",
    name: "Blur",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4azn.jpg",
    rating: 7.8,
    platform: "playstation",
    status: "activePlaying",
    lastPlay: "2016-11-18",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 11,
    igdb: {
      id: 3235,
      cover: {
        id: 200867,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4azn.jpg",
        game: 3235,
      },
      aggregated_rating: 79.4,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e916ecde32334034de6c",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e916ecde32334034de6d",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e916ecde32334034de6e",
          },
        },
      ],
      genres: [
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694e916ecde32334034de6f",
          },
        },
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694e916ecde32334034de70",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694e916ecde32334034de71",
          },
        },
      ],
      developers: [
        {
          id: 1208,
          name: "Bizarre Creations",
          _id: {
            $oid: "6694e916ecde32334034de72",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694e916ecde32334034de73",
          },
        },
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694e916ecde32334034de74",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e916ecde32334034de75",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e916ecde32334034de76",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e916ecde32334034de77",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e916ecde32334034de78",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "blur",
    updatedAt: {
      $date: "2024-07-15T09:17:10.011Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a2f",
    },
    platform: "steam",
    createdAt: "2024-04-13T21:16:00.809Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3wi2.jpg",
    playTime: 26,
    rating: 7.5,
    review: "",
    name: "NBA 2K15",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2016-11-10",
    status: "completed",
    screenshotSize: 0,
    igdb: {
      id: 7614,
      cover: {
        id: 182090,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3wi2.jpg",
        game: 7614,
      },
      aggregated_rating: 81.14285714285714,
      aggregated_rating_count: 8,
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694e91eecde32334034e744",
          },
        },
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694e91eecde32334034e745",
          },
        },
      ],
      developers: [
        {
          id: 694,
          name: "Visual Concepts",
          _id: {
            $oid: "6694e91eecde32334034e746",
          },
        },
      ],
      publishers: [
        {
          id: 1975,
          name: "2K Sports",
          _id: {
            $oid: "6694e91eecde32334034e747",
          },
        },
      ],
      themes: [
        {
          id: 32,
          name: "Non-fiction",
          _id: {
            $oid: "6694e91eecde32334034e748",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "nba-2k15",
    updatedAt: {
      $date: "2024-07-15T09:17:18.990Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a30",
    },
    review: "",
    status: "completed",
    lastPlay: "2016-10-14",
    screenshotSize: 0,
    name: "Assassin's Creed Unity",
    rating: 6.6,
    createdAt: "2024-03-05T12:04:56.391Z",
    platform: "ubisoft",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xiq.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 17,
    igdb: {
      id: 5606,
      cover: {
        id: 90098,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xiq.jpg",
        game: 5606,
      },
      aggregated_rating: 70.93333333333334,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e929ecde32334034f019",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e929ecde32334034f01a",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e929ecde32334034f01b",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e929ecde32334034f01c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e929ecde32334034f01d",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e929ecde32334034f01e",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e929ecde32334034f01f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e929ecde32334034f020",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e929ecde32334034f021",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e929ecde32334034f022",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e929ecde32334034f023",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e929ecde32334034f024",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e929ecde32334034f025",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-unity",
    updatedAt: {
      $date: "2024-07-15T09:17:29.886Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a31",
    },
    review: "",
    rating: 7.6,
    lastPlay: "2016-08-13",
    status: "completed",
    playTime: 10,
    screenshotSize: 0,
    createdAt: "2024-03-05T11:41:18.480Z",
    name: "Call of Duty: Advanced Warfare",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wky.jpg",
    igdb: {
      id: 6632,
      cover: {
        id: 88882,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wky.jpg",
        game: 6632,
      },
      aggregated_rating: 80.2,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e935ecde32334034f903",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e935ecde32334034f904",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e935ecde32334034f905",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e935ecde32334034f906",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e935ecde32334034f907",
          },
        },
      ],
      developers: [
        {
          id: 659,
          name: "Sledgehammer Games",
          _id: {
            $oid: "6694e935ecde32334034f908",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694e935ecde32334034f909",
          },
        },
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694e935ecde32334034f90a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e935ecde32334034f90b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e935ecde32334034f90c",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e935ecde32334034f90d",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e935ecde32334034f90e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-advanced-warfare",
    updatedAt: {
      $date: "2024-07-15T09:17:41.294Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a32",
    },
    review: "",
    createdAt: "2024-03-04T12:37:08.556Z",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2p3j.jpg",
    name: "Watch Dogs 2",
    rating: 7.5,
    platform: "ubisoft",
    screenshotSize: 0,
    lastPlay: "2016-07-22",
    playTime: 20,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 19441,
      cover: {
        id: 125839,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2p3j.jpg",
        game: 19441,
      },
      aggregated_rating: 81.33333333333333,
      aggregated_rating_count: 25,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e942ecde3233403501f8",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e942ecde3233403501f9",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e942ecde3233403501fa",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e942ecde3233403501fb",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e942ecde3233403501fc",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e942ecde3233403501fd",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e942ecde3233403501fe",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e942ecde3233403501ff",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e942ecde323340350200",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e942ecde323340350201",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e942ecde323340350202",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e942ecde323340350203",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e942ecde323340350204",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "watch-dogs-2",
    updatedAt: {
      $date: "2024-07-15T09:17:54.124Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a33",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "playstation",
    lastPlay: "2016-07-14",
    createdAt: "2024-04-13T20:41:57.411Z",
    rating: 8.2,
    review: "",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2s5q.jpg",
    playTime: 10,
    name: "Until Dawn",
    screenshotSize: 0,
    igdb: {
      id: 7609,
      cover: {
        id: 129806,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2s5q.jpg",
        game: 7609,
      },
      aggregated_rating: 79.5,
      aggregated_rating_count: 18,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e951ecde323340350afb",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e951ecde323340350afc",
          },
        },
      ],
      developers: [
        {
          id: 4895,
          name: "Supermassive Games",
          _id: {
            $oid: "6694e951ecde323340350afd",
          },
        },
      ],
      publishers: [
        {
          id: 13634,
          name: "Sony Computer Entertainment",
          _id: {
            $oid: "6694e951ecde323340350afe",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e951ecde323340350aff",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694e951ecde323340350b00",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694e951ecde323340350b01",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "until-dawn",
    updatedAt: {
      $date: "2024-07-15T09:18:09.854Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a34",
    },
    screenshotSize: 0,
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2016-06-21",
    rating: 8.4,
    status: "completed",
    playTime: 16,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1r8e.jpg",
    name: "Life is Strange",
    createdAt: "2024-01-21T08:51:17.048Z",
    review: "",
    igdb: {
      id: 7599,
      cover: {
        id: 81950,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1r8e.jpg",
        game: 7599,
      },
      aggregated_rating: 78.83783783783784,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e95becde3233403513ff",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e95becde323340351400",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e95becde323340351401",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e95becde323340351402",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694e95becde323340351403",
          },
        },
      ],
      developers: [
        {
          id: 894,
          name: "DON'T NOD",
          _id: {
            $oid: "6694e95becde323340351404",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694e95becde323340351405",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694e95becde323340351406",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e95becde323340351407",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e95becde323340351408",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e95becde323340351409",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e95becde32334035140a",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694e95becde32334035140b",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694e95becde32334035140c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "life-is-strange",
    updatedAt: {
      $date: "2024-07-15T09:18:19.384Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a35",
    },
    platform: "steam",
    createdAt: "2024-03-05T12:01:44.927Z",
    lastPlay: "2016-06-18",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2gjy.jpg",
    name: "Assassin's Creed: Freedom Cry",
    rating: 3.2,
    screenshotSize: 0,
    playTime: 4,
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 3775,
      cover: {
        id: 114766,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2gjy.jpg",
        game: 3775,
      },
      aggregated_rating: 75,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e96eecde323340351d18",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e96eecde323340351d19",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e96eecde323340351d1a",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e96eecde323340351d1b",
          },
        },
        {
          id: 15790,
          name: "Ubisoft Québec",
          _id: {
            $oid: "6694e96eecde323340351d1c",
          },
        },
      ],
      publishers: [],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e96eecde323340351d1d",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e96eecde323340351d1e",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e96eecde323340351d1f",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e96eecde323340351d20",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e96eecde323340351d21",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e96eecde323340351d22",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-freedom-cry",
    updatedAt: {
      $date: "2024-07-15T09:18:38.423Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a36",
    },
    createdAt: "2024-03-05T11:31:02.865Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1qro.jpg",
    playTime: 12,
    rating: 7.2,
    lastPlay: "2016-06-17",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    name: "LEGO Harry Potter: Years 5-7",
    review: "",
    platform: "steam",
    igdb: {
      id: 3150,
      cover: {
        id: 81348,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1qro.jpg",
        game: 3150,
      },
      aggregated_rating: 76.14285714285714,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e97cecde323340352639",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e97cecde32334035263a",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e97cecde32334035263b",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e97cecde32334035263c",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e97cecde32334035263d",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e97cecde32334035263e",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e97cecde32334035263f",
          },
        },
      ],
      developers: [
        {
          id: 292,
          name: "Traveller's Tales",
          _id: {
            $oid: "6694e97cecde323340352640",
          },
        },
      ],
      publishers: [
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694e97cecde323340352641",
          },
        },
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e97cecde323340352642",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e97cecde323340352643",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e97cecde323340352644",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e97cecde323340352645",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e97cecde323340352646",
          },
        },
        {
          id: 40,
          name: "Party",
          _id: {
            $oid: "6694e97cecde323340352647",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "lego-harry-potter-years-5-7",
    updatedAt: {
      $date: "2024-07-15T09:18:52.862Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a37",
    },
    name: "LEGO The Hobbit",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.1,
    createdAt: "2024-04-15T15:43:22.855Z",
    status: "completed",
    lastPlay: "2016-06-16",
    screenshotSize: 0,
    platform: "steam",
    playTime: 9,
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20po.jpg",
    igdb: {
      id: 4844,
      cover: {
        id: 94236,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20po.jpg",
        game: 4844,
      },
      aggregated_rating: 72.36363636363636,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e985ecde323340352f6d",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e985ecde323340352f6e",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e985ecde323340352f6f",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e985ecde323340352f70",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e985ecde323340352f71",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e985ecde323340352f72",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e985ecde323340352f73",
          },
        },
      ],
      developers: [
        {
          id: 292,
          name: "Traveller's Tales",
          _id: {
            $oid: "6694e985ecde323340352f74",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e985ecde323340352f75",
          },
        },
        {
          id: 2013,
          name: "MGM Interactive",
          _id: {
            $oid: "6694e985ecde323340352f76",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e985ecde323340352f77",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e985ecde323340352f78",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e985ecde323340352f79",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e985ecde323340352f7a",
          },
        },
        {
          id: 35,
          name: "Kids",
          _id: {
            $oid: "6694e985ecde323340352f7b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "lego-the-hobbit",
    updatedAt: {
      $date: "2024-07-15T09:19:01.634Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a38",
    },
    playTime: 14,
    createdAt: "2024-04-11T09:06:26.333Z",
    rating: 7.7,
    screenshotSize: 0,
    lastPlay: "2016-06-10",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2fgr.jpg",
    platform: "steam",
    review: "",
    name: "Hitman",
    igdb: {
      id: 11157,
      cover: {
        id: 113355,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2fgr.jpg",
        game: 11157,
      },
      aggregated_rating: 78.58974358974359,
      aggregated_rating_count: 36,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e98eecde3233403538b0",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e98eecde3233403538b1",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e98eecde3233403538b2",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e98eecde3233403538b3",
          },
        },
      ],
      developers: [
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694e98eecde3233403538b4",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694e98eecde3233403538b5",
          },
        },
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694e98eecde3233403538b6",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e98eecde3233403538b7",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e98eecde3233403538b8",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e98eecde3233403538b9",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e98eecde3233403538ba",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hitman",
    updatedAt: {
      $date: "2024-07-15T09:19:10.160Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a39",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2npa.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-05T12:21:42.782Z",
    lastPlay: "2015-10-17",
    status: "completed",
    rating: 8,
    review: "",
    playTime: 18,
    screenshotSize: 0,
    platform: "ubisoft",
    name: "Far Cry 4",
    igdb: {
      id: 6801,
      cover: {
        id: 124030,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2npa.jpg",
        game: 6801,
      },
      aggregated_rating: 86.42105263157895,
      aggregated_rating_count: 22,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e99cecde3233403541fa",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e99cecde3233403541fb",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e99cecde3233403541fc",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e99cecde3233403541fd",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694e99cecde3233403541fe",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e99cecde3233403541ff",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694e99cecde323340354200",
          },
        },
      ],
      publishers: [],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e99cecde323340354201",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e99cecde323340354202",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e99cecde323340354203",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e99cecde323340354204",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e99cecde323340354205",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e99cecde323340354206",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e99cecde323340354207",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "far-cry-4",
    updatedAt: {
      $date: "2024-07-15T09:19:24.112Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a3a",
    },
    lastPlay: "2015-07-18",
    status: "completed",
    rating: 7.8,
    playTime: 8,
    screenshotSize: 0,
    name: "Crysis 3",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    createdAt: "2024-03-04T12:55:13.092Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2on3.jpg",
    review: "",
    igdb: {
      id: 1268,
      cover: {
        id: 125247,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2on3.jpg",
        game: 1268,
      },
      aggregated_rating: 74,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e9aaecde323340354b55",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e9aaecde323340354b56",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e9aaecde323340354b57",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e9aaecde323340354b58",
          },
        },
      ],
      developers: [
        {
          id: 122,
          name: "Crytek Frankfurt",
          _id: {
            $oid: "6694e9aaecde323340354b59",
          },
        },
        {
          id: 158,
          name: "Crytek UK",
          _id: {
            $oid: "6694e9aaecde323340354b5a",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694e9aaecde323340354b5b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e9aaecde323340354b5c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e9aaecde323340354b5d",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e9aaecde323340354b5e",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e9aaecde323340354b5f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "crysis-3",
    updatedAt: {
      $date: "2024-07-15T09:19:38.172Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a3b",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xim.jpg",
    screenshotSize: 0,
    lastPlay: "2015-07-18",
    review: "",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "ubisoft",
    playTime: 8,
    createdAt: "2024-03-05T11:58:43.607Z",
    rating: 4.8,
    name: "Assassin's Creed III: Liberation",
    igdb: {
      id: 3195,
      cover: {
        id: 90094,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xim.jpg",
        game: 3195,
      },
      aggregated_rating: 69.16666666666667,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e9bdecde3233403554b8",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e9bdecde3233403554b9",
          },
        },
      ],
      genres: [
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694e9bdecde3233403554ba",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e9bdecde3233403554bb",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e9bdecde3233403554bc",
          },
        },
      ],
      developers: [
        {
          id: 840,
          name: "Ubisoft Sofia",
          _id: {
            $oid: "6694e9bdecde3233403554bd",
          },
        },
        {
          id: 899,
          name: "Ubisoft Milan",
          _id: {
            $oid: "6694e9bdecde3233403554be",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e9bdecde3233403554bf",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e9bdecde3233403554c0",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e9bdecde3233403554c1",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e9bdecde3233403554c2",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694e9bdecde3233403554c3",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e9bdecde3233403554c4",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e9bdecde3233403554c5",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694e9bdecde3233403554c6",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e9bdecde3233403554c7",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-iii-liberation",
    updatedAt: {
      $date: "2024-07-15T09:19:57.994Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a3c",
    },
    name: "LEGO Harry Potter: Years 1-4",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1qrp.jpg",
    platform: "steam",
    screenshotSize: 0,
    lastPlay: "2015-07-17",
    review: "",
    rating: 7.9,
    playTime: 15,
    status: "completed",
    createdAt: "2024-03-05T11:30:19.530Z",
    igdb: {
      id: 3149,
      cover: {
        id: 81349,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1qrp.jpg",
        game: 3149,
      },
      aggregated_rating: 80.66666666666667,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e9cdecde323340355e30",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e9cdecde323340355e31",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694e9cdecde323340355e32",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694e9cdecde323340355e33",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e9cdecde323340355e34",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e9cdecde323340355e35",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e9cdecde323340355e36",
          },
        },
      ],
      developers: [
        {
          id: 292,
          name: "Traveller's Tales",
          _id: {
            $oid: "6694e9cdecde323340355e37",
          },
        },
      ],
      publishers: [
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694e9cdecde323340355e38",
          },
        },
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e9cdecde323340355e39",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e9cdecde323340355e3a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e9cdecde323340355e3b",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e9cdecde323340355e3c",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694e9cdecde323340355e3d",
          },
        },
        {
          id: 40,
          name: "Party",
          _id: {
            $oid: "6694e9cdecde323340355e3e",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "lego-harry-potter-years-1-4",
    updatedAt: {
      $date: "2024-07-15T09:20:13.544Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a3d",
    },
    platform: "eaGames",
    rating: 7.1,
    screenshotSize: 0,
    createdAt: "2024-03-05T11:51:20.589Z",
    review: "",
    name: "Battlefield 4",
    playTime: 7,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    lastPlay: "2015-06-19",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1nmf.jpg",
    igdb: {
      id: 1979,
      cover: {
        id: 77271,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1nmf.jpg",
        game: 1979,
      },
      aggregated_rating: 80.27777777777777,
      aggregated_rating_count: 21,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e9d7ecde3233403567b6",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e9d7ecde3233403567b7",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e9d7ecde3233403567b8",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "6694e9d7ecde3233403567b9",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694e9d7ecde3233403567ba",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694e9d7ecde3233403567bb",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e9d7ecde3233403567bc",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e9d7ecde3233403567bd",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e9d7ecde3233403567be",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "battlefield-4",
    updatedAt: {
      $date: "2024-07-15T09:20:23.940Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a3e",
    },
    rating: 7.7,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2015-06-11",
    name: "Valiant Hearts: The Great War",
    createdAt: "2024-04-13T21:07:54.907Z",
    status: "completed",
    screenshotSize: 0,
    review: "",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co25zo.jpg",
    playTime: 8,
    igdb: {
      id: 7327,
      cover: {
        id: 101076,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co25zo.jpg",
        game: 7327,
      },
      aggregated_rating: 76.11111111111111,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e9e3ecde32334035713f",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694e9e3ecde323340357140",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694e9e3ecde323340357141",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e9e3ecde323340357142",
          },
        },
      ],
      developers: [
        {
          id: 702,
          name: "Ubisoft Montpellier",
          _id: {
            $oid: "6694e9e3ecde323340357143",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694e9e3ecde323340357144",
          },
        },
      ],
      player_perspectives: [
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694e9e3ecde323340357145",
          },
        },
      ],
      themes: [
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694e9e3ecde323340357146",
          },
        },
        {
          id: 34,
          name: "Educational",
          _id: {
            $oid: "6694e9e3ecde323340357147",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694e9e3ecde323340357148",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "valiant-hearts-the-great-war",
    updatedAt: {
      $date: "2024-07-15T09:20:35.123Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a3f",
    },
    playTime: 34,
    createdAt: "2024-03-05T12:33:58.793Z",
    status: "completed",
    screenshotSize: 0,
    name: "Grand Theft Auto IV",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2lbv.jpg",
    review: "",
    lastPlay: "2015-06-10",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 8.5,
    igdb: {
      id: 731,
      cover: {
        id: 120955,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2lbv.jpg",
        game: 731,
      },
      aggregated_rating: 88.125,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e9edecde323340357ad3",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694e9edecde323340357ad4",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694e9edecde323340357ad5",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694e9edecde323340357ad6",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e9edecde323340357ad7",
          },
        },
      ],
      developers: [
        {
          id: 365,
          name: "Rockstar North",
          _id: {
            $oid: "6694e9edecde323340357ad8",
          },
        },
        {
          id: 306,
          name: "Rockstar Toronto",
          _id: {
            $oid: "6694e9edecde323340357ad9",
          },
        },
      ],
      publishers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694e9edecde323340357ada",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694e9edecde323340357adb",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e9edecde323340357adc",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e9edecde323340357add",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e9edecde323340357ade",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "grand-theft-auto-iv",
    updatedAt: {
      $date: "2024-07-15T09:20:45.441Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a41",
    },
    rating: 7.6,
    lastPlay: "2014-11-05",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    status: "completed",
    playTime: 22,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20pd.jpg",
    name: "Middle-earth: Shadow of Mordor",
    createdAt: "2024-04-13T21:13:59.799Z",
    platform: "steam",
    screenshotSize: 0,
    igdb: {
      id: 3025,
      cover: {
        id: 94225,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20pd.jpg",
        game: 3025,
      },
      aggregated_rating: 83.88888888888889,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694e9faecde323340358475",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694e9faecde323340358476",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694e9faecde323340358477",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694e9faecde323340358478",
          },
        },
      ],
      developers: [
        {
          id: 407,
          name: "Monolith Productions",
          _id: {
            $oid: "6694e9faecde323340358479",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694e9faecde32334035847a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694e9faecde32334035847b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694e9faecde32334035847c",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694e9faecde32334035847d",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694e9faecde32334035847e",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694e9faecde32334035847f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "middle-earth-shadow-of-mordor",
    updatedAt: {
      $date: "2024-07-15T09:20:58.744Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a42",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5pcs.jpg",
    lastPlay: "2014-10-21",
    review: "",
    playTime: 17,
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 8.5,
    screenshotSize: 0,
    name: "Dishonored",
    createdAt: "2024-01-21T08:49:20.772Z",
    status: "completed",
    igdb: {
      id: 533,
      cover: {
        id: 266140,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5pcs.jpg",
        game: 533,
      },
      aggregated_rating: 90.35714285714286,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ea09ecde323340358e21",
          },
        },
      ],
      genres: [
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694ea09ecde323340358e22",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694ea09ecde323340358e23",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ea09ecde323340358e24",
          },
        },
      ],
      developers: [
        {
          id: 19,
          name: "Arkane Studios",
          _id: {
            $oid: "6694ea09ecde323340358e25",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694ea09ecde323340358e26",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ea09ecde323340358e27",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ea09ecde323340358e28",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ea09ecde323340358e29",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "dishonored",
    updatedAt: {
      $date: "2024-07-15T09:21:13.866Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a43",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-05T12:00:09.418Z",
    status: "completed",
    name: "Assassin's Creed IV Black Flag",
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4qfn.jpg",
    lastPlay: "2014-10-09",
    platform: "ubisoft",
    screenshotSize: 0,
    rating: 8.4,
    playTime: 27,
    igdb: {
      id: 1970,
      cover: {
        id: 220883,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4qfn.jpg",
        game: 1970,
      },
      aggregated_rating: 84.57142857142857,
      aggregated_rating_count: 23,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ea15ecde3233403597d4",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ea15ecde3233403597d5",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ea15ecde3233403597d6",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694ea15ecde3233403597d7",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ea15ecde3233403597d8",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694ea15ecde3233403597d9",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694ea15ecde3233403597da",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ea15ecde3233403597db",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ea15ecde3233403597dc",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694ea15ecde3233403597dd",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694ea15ecde3233403597de",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694ea15ecde3233403597df",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ea15ecde3233403597e0",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694ea15ecde3233403597e1",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694ea15ecde3233403597e2",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-iv-black-flag",
    updatedAt: {
      $date: "2024-07-15T09:21:25.523Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a44",
    },
    rating: 8.3,
    createdAt: "2024-03-05T11:39:12.292Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Call of Duty: Black Ops II",
    lastPlay: "2014-06-21",
    status: "completed",
    screenshotSize: 0,
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wkv.jpg",
    playTime: 8,
    review: "",
    igdb: {
      id: 1122,
      cover: {
        id: 88879,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wkv.jpg",
        game: 1122,
      },
      aggregated_rating: 78.47058823529412,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ea1fecde32334035a19c",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ea1fecde32334035a19d",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ea1fecde32334035a19e",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694ea1fecde32334035a19f",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ea1fecde32334035a1a0",
          },
        },
      ],
      developers: [
        {
          id: 428,
          name: "Treyarch",
          _id: {
            $oid: "6694ea1fecde32334035a1a1",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694ea1fecde32334035a1a2",
          },
        },
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694ea1fecde32334035a1a3",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ea1fecde32334035a1a4",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ea1fecde32334035a1a5",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694ea1fecde32334035a1a6",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694ea1fecde32334035a1a7",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-black-ops-ii",
    updatedAt: {
      $date: "2024-07-15T09:21:35.389Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a45",
    },
    status: "completed",
    photo:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcST7XQDh6zFt4GD9YMsTVcWCbrgjwZBe9dYVaMEQXlnY9OT0viXtW6uU28Oak6xufv1AArmXSULtjRBmuNR4RqtV0gHgafDcwh70x5Bv6s",
    lastPlay: "2014-06-14",
    name: "Grand Theft Auto: Episodes from Liberty City",
    platform: "steam",
    playTime: 20,
    rating: 7.7,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-04-15T15:59:30.593Z",
    screenshotSize: 0,
    review: "",
    igdb: {
      id: 731,
      cover: {
        id: 120955,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2lbv.jpg",
        game: 731,
      },
      aggregated_rating: 88.125,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694fc72f48dabac018599ca",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694fc72f48dabac018599cb",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694fc72f48dabac018599cc",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694fc72f48dabac018599cd",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694fc72f48dabac018599ce",
          },
        },
      ],
      developers: [
        {
          id: 365,
          name: "Rockstar North",
          _id: {
            $oid: "6694fc72f48dabac018599cf",
          },
        },
        {
          id: 306,
          name: "Rockstar Toronto",
          _id: {
            $oid: "6694fc72f48dabac018599d0",
          },
        },
      ],
      publishers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694fc72f48dabac018599d1",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694fc72f48dabac018599d2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694fc72f48dabac018599d3",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694fc72f48dabac018599d4",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694fc72f48dabac018599d5",
          },
        },
      ],
      release_date: null,
    },
    isFavorite: false,
    slug: "grand-theft-auto-episodes-from-liberty-city",
    updatedAt: {
      $date: "2024-07-15T10:40:57.406Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a46",
    },
    playTime: 7,
    createdAt: "2024-04-15T15:37:27.829Z",
    name: "Sniper Elite V2",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2014-06-11",
    rating: 7.5,
    platform: "steam",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2e41.jpg",
    review: "",
    igdb: {
      id: 3078,
      cover: {
        id: 111601,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2e41.jpg",
        game: 3078,
      },
      aggregated_rating: 66.9090909090909,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ea87ecde32334035bf47",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ea87ecde32334035bf48",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ea87ecde32334035bf49",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ea87ecde32334035bf4a",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694ea87ecde32334035bf4b",
          },
        },
      ],
      developers: [
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694ea87ecde32334035bf4c",
          },
        },
      ],
      publishers: [
        {
          id: 318,
          name: "Rebellion Developments",
          _id: {
            $oid: "6694ea87ecde32334035bf4d",
          },
        },
        {
          id: 445,
          name: "505 Games",
          _id: {
            $oid: "6694ea87ecde32334035bf4e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ea87ecde32334035bf4f",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ea87ecde32334035bf50",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694ea87ecde32334035bf51",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ea87ecde32334035bf52",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694ea87ecde32334035bf53",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "sniper-elite-v2",
    updatedAt: {
      $date: "2024-07-15T09:23:19.024Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a47",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1r7f.jpg",
    createdAt: "2024-01-21T07:34:19.676Z",
    lastPlay: "2014-05-21",
    screenshotSize: 0,
    playTime: 16,
    platform: "steam",
    status: "completed",
    rating: 8.9,
    review: "",
    name: "The Last of Us",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 1009,
      cover: {
        id: 81915,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1r7f.jpg",
        game: 1009,
      },
      aggregated_rating: 91.53846153846153,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ea9fecde32334035c926",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ea9fecde32334035c927",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ea9fecde32334035c928",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ea9fecde32334035c929",
          },
        },
      ],
      developers: [
        {
          id: 401,
          name: "Naughty Dog",
          _id: {
            $oid: "6694ea9fecde32334035c92a",
          },
        },
      ],
      publishers: [
        {
          id: 13634,
          name: "Sony Computer Entertainment",
          _id: {
            $oid: "6694ea9fecde32334035c92b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ea9fecde32334035c92c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ea9fecde32334035c92d",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694ea9fecde32334035c92e",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694ea9fecde32334035c92f",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ea9fecde32334035c930",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-last-of-us",
    updatedAt: {
      $date: "2024-07-15T09:23:43.900Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a48",
    },
    createdAt: "2024-01-21T08:54:05.324Z",
    lastPlay: "2013-12-10",
    playTime: 13,
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1yat.jpg",
    platform: "steam",
    name: "Outlast",
    screenshotSize: 0,
    rating: 8.4,
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 1910,
      cover: {
        id: 91109,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1yat.jpg",
        game: 1910,
      },
      aggregated_rating: 77.18181818181819,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eaacecde32334035d30e",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eaacecde32334035d30f",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694eaacecde32334035d310",
          },
        },
      ],
      developers: [
        {
          id: 1380,
          name: "Red Barrels",
          _id: {
            $oid: "6694eaacecde32334035d311",
          },
        },
      ],
      publishers: [
        {
          id: 1380,
          name: "Red Barrels",
          _id: {
            $oid: "6694eaacecde32334035d312",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eaacecde32334035d313",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eaacecde32334035d314",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694eaacecde32334035d315",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694eaacecde32334035d316",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eaacecde32334035d317",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694eaacecde32334035d318",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "outlast",
    updatedAt: {
      $date: "2024-07-15T09:23:56.587Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a49",
    },
    playTime: 7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xbu.jpg",
    createdAt: "2024-03-05T11:50:01.928Z",
    lastPlay: "2013-11-15",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 8.2,
    status: "completed",
    name: "Battlefield 3",
    platform: "eaGames",
    screenshotSize: 0,
    review: "",
    igdb: {
      id: 343,
      cover: {
        id: 89850,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xbu.jpg",
        game: 343,
      },
      aggregated_rating: 85,
      aggregated_rating_count: 14,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eab6ecde32334035dd01",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eab6ecde32334035dd02",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694eab6ecde32334035dd03",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eab6ecde32334035dd04",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "6694eab6ecde32334035dd05",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694eab6ecde32334035dd06",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eab6ecde32334035dd07",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eab6ecde32334035dd08",
          },
        },
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694eab6ecde32334035dd09",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eab6ecde32334035dd0a",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eab6ecde32334035dd0b",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694eab6ecde32334035dd0c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "battlefield-3",
    updatedAt: {
      $date: "2024-07-15T09:24:06.252Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a4a",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1tnw.jpg",
    status: "completed",
    screenshotSize: 0,
    lastPlay: "2013-11-15",
    review: "",
    createdAt: "2024-04-14T13:00:48.779Z",
    name: "The Elder Scrolls V: Skyrim",
    platform: "steam",
    rating: 8.6,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    playTime: 70,
    igdb: {
      id: 472,
      cover: {
        id: 85100,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1tnw.jpg",
        game: 472,
      },
      aggregated_rating: 79.91666666666667,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eac0ecde32334035e701",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694eac0ecde32334035e702",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eac0ecde32334035e703",
          },
        },
      ],
      developers: [
        {
          id: 126,
          name: "Bethesda Game Studios",
          _id: {
            $oid: "6694eac0ecde32334035e704",
          },
        },
      ],
      publishers: [
        {
          id: 16565,
          name: "Bethesda Softworks",
          _id: {
            $oid: "6694eac0ecde32334035e705",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eac0ecde32334035e706",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eac0ecde32334035e707",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eac0ecde32334035e708",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694eac0ecde32334035e709",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eac0ecde32334035e70a",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eac0ecde32334035e70b",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eac0ecde32334035e70c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-elder-scrolls-v-skyrim",
    updatedAt: {
      $date: "2024-07-15T09:24:16.197Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a4b",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xii.jpg",
    rating: 7.7,
    platform: "ubisoft",
    review: "",
    status: "completed",
    name: "Assassin's Creed III",
    screenshotSize: 0,
    playTime: 17,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-05T11:57:46.424Z",
    lastPlay: "2013-11-14",
    igdb: {
      id: 1266,
      cover: {
        id: 90090,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xii.jpg",
        game: 1266,
      },
      aggregated_rating: 81.17647058823529,
      aggregated_rating_count: 20,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eacaecde32334035f10d",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eacaecde32334035f10e",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eacaecde32334035f10f",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694eacaecde32334035f110",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694eacaecde32334035f111",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eacaecde32334035f112",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eacaecde32334035f113",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694eacaecde32334035f114",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694eacaecde32334035f115",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694eacaecde32334035f116",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eacaecde32334035f117",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eacaecde32334035f118",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eacaecde32334035f119",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-iii",
    updatedAt: {
      $date: "2024-07-15T09:24:26.561Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a4c",
    },
    playTime: 6,
    lastPlay: "2013-10-26",
    name: "Call of Duty: Modern Warfare 3",
    status: "completed",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wkn.jpg",
    screenshotSize: 0,
    rating: 8,
    createdAt: "2024-03-05T11:37:24.751Z",
    platform: "steam",
    igdb: {
      id: 979,
      cover: {
        id: 88871,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wkn.jpg",
        game: 979,
      },
      aggregated_rating: 81.07692307692308,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ead7ecde32334035fb27",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ead7ecde32334035fb28",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ead7ecde32334035fb29",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694ead7ecde32334035fb2a",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ead7ecde32334035fb2b",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694ead7ecde32334035fb2c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ead7ecde32334035fb2d",
          },
        },
      ],
      developers: [
        {
          id: 659,
          name: "Sledgehammer Games",
          _id: {
            $oid: "6694ead7ecde32334035fb2e",
          },
        },
        {
          id: 438,
          name: "Infinity Ward",
          _id: {
            $oid: "6694ead7ecde32334035fb2f",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694ead7ecde32334035fb30",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ead7ecde32334035fb31",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ead7ecde32334035fb32",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694ead7ecde32334035fb33",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-modern-warfare-3",
    updatedAt: {
      $date: "2024-07-15T09:24:39.323Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a4d",
    },
    createdAt: "2024-04-13T21:28:56.316Z",
    platform: "steam",
    name: "Tomb Raider",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rbu.jpg",
    review: "",
    rating: 7.9,
    screenshotSize: 0,
    lastPlay: "2013-10-10",
    playTime: 12,
    igdb: {
      id: 1164,
      cover: {
        id: 82074,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rbu.jpg",
        game: 1164,
      },
      aggregated_rating: 84.64285714285714,
      aggregated_rating_count: 15,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eae7ecde32334036054e",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eae7ecde32334036054f",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eae7ecde323340360550",
          },
        },
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694eae7ecde323340360551",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694eae7ecde323340360552",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eae7ecde323340360553",
          },
        },
      ],
      developers: [
        {
          id: 552,
          name: "Crystal Dynamics",
          _id: {
            $oid: "6694eae7ecde323340360554",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694eae7ecde323340360555",
          },
        },
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694eae7ecde323340360556",
          },
        },
        {
          id: 552,
          name: "Crystal Dynamics",
          _id: {
            $oid: "6694eae7ecde323340360557",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eae7ecde323340360558",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eae7ecde323340360559",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694eae7ecde32334036055a",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eae7ecde32334036055b",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "tomb-raider",
    updatedAt: {
      $date: "2024-07-15T09:24:55.070Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a4e",
    },
    review: "",
    platform: "xboxPc",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2634.jpg",
    rating: 6.7,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Saints Row: The Third",
    playTime: 17,
    status: "completed",
    lastPlay: "2013-06-22",
    screenshotSize: 0,
    createdAt: "2024-04-15T15:51:30.214Z",
    igdb: {
      id: 873,
      cover: {
        id: 101200,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2634.jpg",
        game: 873,
      },
      aggregated_rating: 84.5,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eaf3ecde323340360f84",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eaf3ecde323340360f85",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694eaf3ecde323340360f86",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eaf3ecde323340360f87",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694eaf3ecde323340360f88",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eaf3ecde323340360f89",
          },
        },
      ],
      developers: [
        {
          id: 7462,
          name: "Volition",
          _id: {
            $oid: "6694eaf3ecde323340360f8a",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694eaf3ecde323340360f8b",
          },
        },
        {
          id: 74,
          name: "CyberFront",
          _id: {
            $oid: "6694eaf3ecde323340360f8c",
          },
        },
        {
          id: 197,
          name: "THQ",
          _id: {
            $oid: "6694eaf3ecde323340360f8d",
          },
        },
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694eaf3ecde323340360f8e",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eaf3ecde323340360f8f",
          },
        },
        {
          id: 4,
          name: "Side view",
          _id: {
            $oid: "6694eaf3ecde323340360f90",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eaf3ecde323340360f91",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694eaf3ecde323340360f92",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eaf3ecde323340360f93",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eaf3ecde323340360f94",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "saints-row-the-third",
    updatedAt: {
      $date: "2024-07-15T09:25:07.129Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a4f",
    },
    createdAt: "2024-01-21T07:52:24.749Z",
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1vpd.jpg",
    playTime: 18,
    rating: 8.6,
    name: "Far Cry 3",
    lastPlay: "2013-06-21",
    screenshotSize: 0,
    platform: "ubisoft",
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 529,
      cover: {
        id: 87745,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1vpd.jpg",
        game: 529,
      },
      aggregated_rating: 89.53333333333333,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eafbecde3233403619ce",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eafbecde3233403619cf",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694eafbecde3233403619d0",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eafbecde3233403619d1",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eafbecde3233403619d2",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694eafbecde3233403619d3",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694eafbecde3233403619d4",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eafbecde3233403619d5",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eafbecde3233403619d6",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694eafbecde3233403619d7",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eafbecde3233403619d8",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eafbecde3233403619d9",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eafbecde3233403619da",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "far-cry-3",
    updatedAt: {
      $date: "2024-07-15T09:25:15.976Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a50",
    },
    name: "Payday: The Heist",
    platform: "steam",
    lastPlay: "2013-06-15",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co68m7.jpg",
    playTime: 10,
    rating: 6.4,
    review: "",
    createdAt: "2024-04-15T16:07:14.948Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    igdb: {
      id: 1381,
      cover: {
        id: 291103,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co68m7.jpg",
        game: 1381,
      },
      aggregated_rating: 72.5,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb05ecde323340362421",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eb05ecde323340362422",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694eb05ecde323340362423",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eb05ecde323340362424",
          },
        },
      ],
      developers: [
        {
          id: 905,
          name: "Overkill Software",
          _id: {
            $oid: "6694eb05ecde323340362425",
          },
        },
      ],
      publishers: [
        {
          id: 243,
          name: "Sony Online Entertainment",
          _id: {
            $oid: "6694eb05ecde323340362426",
          },
        },
        {
          id: 6997,
          name: "Daybreak Game Company",
          _id: {
            $oid: "6694eb05ecde323340362427",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eb05ecde323340362428",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb05ecde323340362429",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "payday-the-heist",
    updatedAt: {
      $date: "2024-07-15T09:25:25.573Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a51",
    },
    status: "completed",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    lastPlay: "2013-06-14",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xbi.jpg",
    createdAt: "2024-03-05T11:48:53.617Z",
    playTime: 7,
    platform: "eaGames",
    name: "Battlefield: Bad Company 2",
    rating: 7,
    igdb: {
      id: 352,
      cover: {
        id: 89838,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xbi.jpg",
        game: 352,
      },
      aggregated_rating: 89.5,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb10ecde323340362e79",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eb10ecde323340362e7a",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eb10ecde323340362e7b",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694eb10ecde323340362e7c",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694eb10ecde323340362e7d",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eb10ecde323340362e7e",
          },
        },
      ],
      developers: [
        {
          id: 94,
          name: "EA Digital Illusions CE",
          _id: {
            $oid: "6694eb10ecde323340362e7f",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694eb10ecde323340362e80",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eb10ecde323340362e81",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb10ecde323340362e82",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694eb10ecde323340362e83",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "battlefield-bad-company-2",
    updatedAt: {
      $date: "2024-07-15T09:25:36.419Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a52",
    },
    platform: "playstation",
    status: "completed",
    rating: 7.7,
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2013-06-14",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co206y.jpg",
    playTime: 55,
    screenshotSize: 0,
    createdAt: "2024-04-14T12:54:57.281Z",
    name: "FIFA Soccer 13",
    igdb: {
      id: 2153,
      cover: {
        id: 93562,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co206y.jpg",
        game: 2153,
      },
      aggregated_rating: 85.06666666666666,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb1becde3233403638de",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eb1becde3233403638df",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694eb1becde3233403638e0",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694eb1becde3233403638e1",
          },
        },
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694eb1becde3233403638e2",
          },
        },
      ],
      developers: [
        {
          id: 277,
          name: "EA Canada",
          _id: {
            $oid: "6694eb1becde3233403638e3",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694eb1becde3233403638e4",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb1becde3233403638e5",
          },
        },
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694eb1becde3233403638e6",
          },
        },
      ],
      themes: [
        {
          id: 32,
          name: "Non-fiction",
          _id: {
            $oid: "6694eb1becde3233403638e7",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "fifa-soccer-13",
    updatedAt: {
      $date: "2024-07-15T09:25:47.841Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a53",
    },
    name: "Prototype 2",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20jt.jpg",
    rating: 7.2,
    review: "",
    playTime: 13,
    platform: "xboxPc",
    lastPlay: "2013-02-14",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    createdAt: "2024-04-15T15:45:22.355Z",
    igdb: {
      id: 2988,
      cover: {
        id: 94025,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20jt.jpg",
        game: 2988,
      },
      aggregated_rating: 77.1,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb26ecde32334036434c",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694eb26ecde32334036434d",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694eb26ecde32334036434e",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eb26ecde32334036434f",
          },
        },
      ],
      developers: [
        {
          id: 444,
          name: "Radical Entertainment",
          _id: {
            $oid: "6694eb26ecde323340364350",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694eb26ecde323340364351",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb26ecde323340364352",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb26ecde323340364353",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694eb26ecde323340364354",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694eb26ecde323340364355",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694eb26ecde323340364356",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eb26ecde323340364357",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eb26ecde323340364358",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "prototype-2",
    updatedAt: {
      $date: "2024-07-15T09:25:58.005Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a54",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2mjo.jpg",
    review: "",
    screenshotSize: 0,
    name: "Max Payne 3",
    platform: "steam",
    createdAt: "2024-04-14T12:56:43.256Z",
    playTime: 10,
    lastPlay: "2012-12-14",
    rating: 7.8,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    igdb: {
      id: 960,
      cover: {
        id: 122532,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2mjo.jpg",
        game: 960,
      },
      aggregated_rating: 89.33333333333333,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb2eecde323340364dca",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eb2eecde323340364dcb",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eb2eecde323340364dcc",
          },
        },
      ],
      developers: [
        {
          id: 636,
          name: "Rockstar Vancouver",
          _id: {
            $oid: "6694eb2eecde323340364dcd",
          },
        },
        {
          id: 637,
          name: "Rockstar New England",
          _id: {
            $oid: "6694eb2eecde323340364dce",
          },
        },
        {
          id: 638,
          name: "Rockstar London",
          _id: {
            $oid: "6694eb2eecde323340364dcf",
          },
        },
        {
          id: 306,
          name: "Rockstar Toronto",
          _id: {
            $oid: "6694eb2eecde323340364dd0",
          },
        },
      ],
      publishers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694eb2eecde323340364dd1",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694eb2eecde323340364dd2",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb2eecde323340364dd3",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb2eecde323340364dd4",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694eb2eecde323340364dd5",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eb2eecde323340364dd6",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "max-payne-3",
    updatedAt: {
      $date: "2024-07-15T09:26:06.871Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a55",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-01-21T08:36:57.482Z",
    platform: "epicGames",
    lastPlay: "2012-11-21",
    status: "completed",
    screenshotSize: 0,
    playTime: 15,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2n13.jpg",
    rating: 8.4,
    name: "Mafia II",
    review: "",
    igdb: {
      id: 40,
      cover: {
        id: 123159,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2n13.jpg",
        game: 40,
      },
      aggregated_rating: 72.625,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb3aecde323340365855",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eb3aecde323340365856",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694eb3aecde323340365857",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eb3aecde323340365858",
          },
        },
      ],
      developers: [
        {
          id: 301,
          name: "2K Czech",
          _id: {
            $oid: "6694eb3aecde323340365859",
          },
        },
        {
          id: 302,
          name: "Massive Bear Studios",
          _id: {
            $oid: "6694eb3aecde32334036585a",
          },
        },
      ],
      publishers: [
        {
          id: 8,
          name: "2K Games",
          _id: {
            $oid: "6694eb3aecde32334036585b",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694eb3aecde32334036585c",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb3aecde32334036585d",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb3aecde32334036585e",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694eb3aecde32334036585f",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694eb3aecde323340365860",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eb3aecde323340365861",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eb3aecde323340365862",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eb3aecde323340365863",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "mafia-ii",
    updatedAt: {
      $date: "2024-07-15T09:26:18.544Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a56",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    createdAt: "2024-04-15T15:39:13.006Z",
    playTime: 8,
    status: "completed",
    rating: 6.3,
    platform: "xboxPc",
    name: "Deadpool",
    lastPlay: "2012-11-15",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co4xsf.jpg",
    review: "",
    igdb: {
      id: 1919,
      cover: {
        id: 230415,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co4xsf.jpg",
        game: 1919,
      },
      aggregated_rating: 70.23076923076923,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb44ecde3233403662f1",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eb44ecde3233403662f2",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694eb44ecde3233403662f3",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eb44ecde3233403662f4",
          },
        },
      ],
      developers: [
        {
          id: 434,
          name: "High Moon Studios",
          _id: {
            $oid: "6694eb44ecde3233403662f5",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694eb44ecde3233403662f6",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb44ecde3233403662f7",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb44ecde3233403662f8",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694eb44ecde3233403662f9",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "deadpool",
    updatedAt: {
      $date: "2024-07-15T09:26:28.236Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a57",
    },
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wkl.jpg",
    review: "",
    rating: 8.5,
    playTime: 7,
    lastPlay: "2012-11-15",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-05T11:36:21.368Z",
    screenshotSize: 0,
    status: "completed",
    name: "Call of Duty: Black Ops",
    igdb: {
      id: 545,
      cover: {
        id: 88869,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wkl.jpg",
        game: 545,
      },
      aggregated_rating: 81.41666666666667,
      aggregated_rating_count: 17,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb4decde323340366d90",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eb4decde323340366d91",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694eb4decde323340366d92",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694eb4decde323340366d93",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eb4decde323340366d94",
          },
        },
      ],
      developers: [
        {
          id: 428,
          name: "Treyarch",
          _id: {
            $oid: "6694eb4decde323340366d95",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694eb4decde323340366d96",
          },
        },
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694eb4decde323340366d97",
          },
        },
        {
          id: 73,
          name: "Aspyr Media",
          _id: {
            $oid: "6694eb4decde323340366d98",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eb4decde323340366d99",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb4decde323340366d9a",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694eb4decde323340366d9b",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694eb4decde323340366d9c",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694eb4decde323340366d9d",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eb4decde323340366d9e",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694eb4decde323340366d9f",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-black-ops",
    updatedAt: {
      $date: "2024-07-15T09:26:37.443Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a58",
    },
    status: "completed",
    createdAt: "2024-04-14T13:07:19.402Z",
    lastPlay: "2012-11-14",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    playTime: 22,
    name: "L.A. Noire",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2ldn.jpg",
    rating: 8.3,
    review: "",
    igdb: {
      id: 109,
      cover: {
        id: 121019,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2ldn.jpg",
        game: 109,
      },
      aggregated_rating: 89.375,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb56ecde323340367846",
          },
        },
      ],
      genres: [
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694eb56ecde323340367847",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eb56ecde323340367848",
          },
        },
      ],
      developers: [
        {
          id: 30,
          name: "Team Bondi",
          _id: {
            $oid: "6694eb56ecde323340367849",
          },
        },
        {
          id: 365,
          name: "Rockstar North",
          _id: {
            $oid: "6694eb56ecde32334036784a",
          },
        },
        {
          id: 308,
          name: "Rockstar Leeds",
          _id: {
            $oid: "6694eb56ecde32334036784b",
          },
        },
      ],
      publishers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694eb56ecde32334036784c",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694eb56ecde32334036784d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb56ecde32334036784e",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb56ecde32334036784f",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694eb56ecde323340367850",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694eb56ecde323340367851",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eb56ecde323340367852",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eb56ecde323340367853",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "la-noire",
    updatedAt: {
      $date: "2024-07-15T09:26:46.485Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a59",
    },
    name: "Crysis 2",
    screenshotSize: 0,
    playTime: 12,
    platform: "steam",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 8.3,
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2on2.jpg",
    createdAt: "2024-04-14T13:05:57.229Z",
    lastPlay: "2012-10-18",
    review: "",
    igdb: {
      id: 471,
      cover: {
        id: 125246,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2on2.jpg",
        game: 471,
      },
      aggregated_rating: 86.5,
      aggregated_rating_count: 12,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb61ecde323340368308",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eb61ecde323340368309",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eb61ecde32334036830a",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eb61ecde32334036830b",
          },
        },
      ],
      developers: [
        {
          id: 122,
          name: "Crytek Frankfurt",
          _id: {
            $oid: "6694eb61ecde32334036830c",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694eb61ecde32334036830d",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eb61ecde32334036830e",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb61ecde32334036830f",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694eb61ecde323340368310",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eb61ecde323340368311",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "crysis-2",
    updatedAt: {
      $date: "2024-07-15T09:26:57.138Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a5a",
    },
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 8.8,
    platform: "steam",
    screenshotSize: 0,
    review: "",
    name: "Call of Duty: Modern Warfare 2",
    lastPlay: "2012-06-21",
    playTime: 7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3cwt.jpg",
    status: "completed",
    createdAt: "2024-01-21T08:27:28.352Z",
    igdb: {
      id: 559,
      cover: {
        id: 156701,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3cwt.jpg",
        game: 559,
      },
      aggregated_rating: 85.27272727272727,
      aggregated_rating_count: 13,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb6decde323340368dd0",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694eb6decde323340368dd1",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694eb6decde323340368dd2",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694eb6decde323340368dd3",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eb6decde323340368dd4",
          },
        },
      ],
      developers: [
        {
          id: 438,
          name: "Infinity Ward",
          _id: {
            $oid: "6694eb6decde323340368dd5",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694eb6decde323340368dd6",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eb6decde323340368dd7",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb6decde323340368dd8",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eb6decde323340368dd9",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694eb6decde323340368dda",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-modern-warfare-2",
    updatedAt: {
      $date: "2024-07-15T09:27:09.937Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a5b",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1ql2.jpg",
    lastPlay: "2012-06-16",
    createdAt: "2024-04-15T15:47:36.959Z",
    platform: "xboxPc",
    screenshotSize: 0,
    status: "completed",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 8.2,
    review: "",
    playTime: 13,
    name: "Prototype",
    igdb: {
      id: 570,
      cover: {
        id: 81110,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1ql2.jpg",
        game: 570,
      },
      aggregated_rating: 78.375,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb78ecde3233403698a4",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694eb78ecde3233403698a5",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694eb78ecde3233403698a6",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eb78ecde3233403698a7",
          },
        },
      ],
      developers: [
        {
          id: 444,
          name: "Radical Entertainment",
          _id: {
            $oid: "6694eb78ecde3233403698a8",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694eb78ecde3233403698a9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb78ecde3233403698aa",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb78ecde3233403698ab",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694eb78ecde3233403698ac",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694eb78ecde3233403698ad",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eb78ecde3233403698ae",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eb78ecde3233403698af",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eb78ecde3233403698b0",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "prototype",
    updatedAt: {
      $date: "2024-07-15T09:27:20.935Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a5c",
    },
    lastPlay: "2012-04-07",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5j90.jpg",
    createdAt: "2024-03-05T11:56:23.653Z",
    playTime: 13,
    rating: 7.9,
    review: "",
    platform: "ubisoft",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Assassin's Creed Revelations",
    status: "completed",
    igdb: {
      id: 221824,
      cover: {
        id: 258228,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5j90.jpg",
        game: 221824,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb86ecde32334036a387",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eb86ecde32334036a388",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694eb86ecde32334036a389",
          },
        },
        {
          id: 794,
          name: "Virtuos",
          _id: {
            $oid: "6694eb86ecde32334036a38a",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694eb86ecde32334036a38b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb86ecde32334036a38c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb86ecde32334036a38d",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694eb86ecde32334036a38e",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694eb86ecde32334036a38f",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eb86ecde32334036a390",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eb86ecde32334036a391",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eb86ecde32334036a392",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-revelations",
    updatedAt: {
      $date: "2024-07-15T09:27:34.475Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a5d",
    },
    status: "completed",
    screenshotSize: 0,
    createdAt: "2024-04-11T13:07:21.732Z",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    name: "Hitman: Contracts",
    rating: 7.2,
    review: "",
    playTime: 10,
    lastPlay: "2012-02-17",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1ovw.jpg",
    platform: "steam",
    igdb: {
      id: 1049,
      cover: {
        id: 78908,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1ovw.jpg",
        game: 1049,
      },
      aggregated_rating: 70,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb90ecde32334036ae75",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eb90ecde32334036ae76",
          },
        },
      ],
      developers: [
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694eb90ecde32334036ae77",
          },
        },
      ],
      publishers: [
        {
          id: 4,
          name: "Eidos Interactive",
          _id: {
            $oid: "6694eb90ecde32334036ae78",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694eb90ecde32334036ae79",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb90ecde32334036ae7a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb90ecde32334036ae7b",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eb90ecde32334036ae7c",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hitman-contracts",
    updatedAt: {
      $date: "2024-07-15T09:27:44.351Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a5e",
    },
    name: "Assassin's Creed II",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rcf.jpg",
    playTime: 20,
    createdAt: "2024-03-05T11:55:16.863Z",
    lastPlay: "2012-02-01",
    platform: "ubisoft",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    status: "completed",
    rating: 8.3,
    screenshotSize: 0,
    igdb: {
      id: 127,
      cover: {
        id: 82095,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rcf.jpg",
        game: 127,
      },
      aggregated_rating: 90.25,
      aggregated_rating_count: 11,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eb9fecde32334036b967",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694eb9fecde32334036b968",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eb9fecde32334036b969",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694eb9fecde32334036b96a",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694eb9fecde32334036b96b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eb9fecde32334036b96c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eb9fecde32334036b96d",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694eb9fecde32334036b96e",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694eb9fecde32334036b96f",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694eb9fecde32334036b970",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694eb9fecde32334036b971",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eb9fecde32334036b972",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eb9fecde32334036b973",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-ii",
    updatedAt: {
      $date: "2024-07-15T09:27:59.851Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a5f",
    },
    playTime: 11,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2426.jpg",
    status: "completed",
    screenshotSize: 0,
    name: "X-Men Origins: Wolverine",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-04-15T16:09:53.606Z",
    platform: "steam",
    rating: 8,
    review: "",
    lastPlay: "2012-01-22",
    igdb: {
      id: 573,
      cover: {
        id: 98574,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2426.jpg",
        game: 573,
      },
      aggregated_rating: 71.66666666666667,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ebabecde32334036c46b",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694ebabecde32334036c46c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ebabecde32334036c46d",
          },
        },
      ],
      developers: [
        {
          id: 1326,
          name: "Amaze Entertainment",
          _id: {
            $oid: "6694ebabecde32334036c46e",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694ebabecde32334036c46f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ebabecde32334036c470",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ebabecde32334036c471",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694ebabecde32334036c472",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "x-men-origins-wolverine",
    updatedAt: {
      $date: "2024-07-15T09:28:11.327Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a60",
    },
    review: "",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    lastPlay: "2011-10-12",
    playTime: 14,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1pdt.jpg",
    name: "Hitman 2: Silent Assassin",
    rating: 8.2,
    createdAt: "2024-04-11T13:06:08.416Z",
    status: "completed",
    platform: "xboxPc",
    igdb: {
      id: 748,
      cover: {
        id: 79553,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1pdt.jpg",
        game: 748,
      },
      aggregated_rating: 77,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ebbbecde32334036cf72",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ebbbecde32334036cf73",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694ebbbecde32334036cf74",
          },
        },
      ],
      developers: [
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694ebbbecde32334036cf75",
          },
        },
      ],
      publishers: [
        {
          id: 4,
          name: "Eidos Interactive",
          _id: {
            $oid: "6694ebbbecde32334036cf76",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ebbbecde32334036cf77",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ebbbecde32334036cf78",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694ebbbecde32334036cf79",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ebbbecde32334036cf7a",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hitman-2-silent-assassin",
    updatedAt: {
      $date: "2024-07-15T09:28:27.502Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a61",
    },
    rating: 8.4,
    screenshotSize: 0,
    createdAt: "2024-01-21T08:57:14.106Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co25yv.jpg",
    playTime: 5,
    name: "To the Moon",
    lastPlay: "2011-08-24",
    status: "completed",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    platform: "steam",
    igdb: {
      id: 5025,
      cover: {
        id: 101047,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co25yv.jpg",
        game: 5025,
      },
      aggregated_rating: 82.71428571428571,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ebdaecde32334036da83",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Point-and-click",
          _id: {
            $oid: "6694ebdaecde32334036da84",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694ebdaecde32334036da85",
          },
        },
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694ebdaecde32334036da86",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ebdaecde32334036da87",
          },
        },
        {
          id: 32,
          name: "Indie",
          _id: {
            $oid: "6694ebdaecde32334036da88",
          },
        },
      ],
      developers: [
        {
          id: 2236,
          name: "Freebird Games",
          _id: {
            $oid: "6694ebdaecde32334036da89",
          },
        },
        {
          id: 2236,
          name: "Freebird Games",
          _id: {
            $oid: "6694ebdaecde32334036da8a",
          },
        },
      ],
      publishers: [
        {
          id: 2236,
          name: "Freebird Games",
          _id: {
            $oid: "6694ebdaecde32334036da8b",
          },
        },
        {
          id: 11608,
          name: "X.D. Network Inc.",
          _id: {
            $oid: "6694ebdaecde32334036da8c",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694ebdaecde32334036da8d",
          },
        },
      ],
      themes: [
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694ebdaecde32334036da8e",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694ebdaecde32334036da8f",
          },
        },
        {
          id: 44,
          name: "Romance",
          _id: {
            $oid: "6694ebdaecde32334036da90",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "to-the-moon",
    updatedAt: {
      $date: "2024-07-15T09:28:58.078Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a62",
    },
    platform: "steam",
    name: "Bully: Anniversary Edition",
    status: "completed",
    lastPlay: "2011-07-13",
    rating: 8.6,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    screenshotSize: 0,
    playTime: 20,
    photo:
      "//images.igdb.com/igdb/image/upload/t_1080p/lajno40ujt9uv2zz5rqs.jpg",
    createdAt: "2024-04-15T15:53:20.508Z",
    igdb: {
      id: 88952,
      cover: {
        id: 64516,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/lajno40ujt9uv2zz5rqs.jpg",
        game: 88952,
      },
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ec11ecde32334036e5a7",
          },
        },
      ],
      developers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694ec11ecde32334036e5a8",
          },
        },
      ],
      publishers: [],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec11ecde32334036e5a9",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "bully-anniversary-edition",
    updatedAt: {
      $date: "2024-07-15T09:29:53.647Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a63",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2fgr.jpg",
    review: "",
    lastPlay: "2011-06-17",
    platform: "xboxPc",
    playTime: 11,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    createdAt: "2024-04-11T13:04:54.211Z",
    screenshotSize: 0,
    rating: 7.1,
    name: "Hitman",
    igdb: {
      id: 11157,
      cover: {
        id: 113355,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2fgr.jpg",
        game: 11157,
      },
      aggregated_rating: 78.58974358974359,
      aggregated_rating_count: 36,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec1becde32334036f0c3",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ec1becde32334036f0c4",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "6694ec1becde32334036f0c5",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ec1becde32334036f0c6",
          },
        },
      ],
      developers: [
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694ec1becde32334036f0c7",
          },
        },
      ],
      publishers: [
        {
          id: 26,
          name: "Square Enix",
          _id: {
            $oid: "6694ec1becde32334036f0c8",
          },
        },
        {
          id: 290,
          name: "IO Interactive",
          _id: {
            $oid: "6694ec1becde32334036f0c9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ec1becde32334036f0ca",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec1becde32334036f0cb",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ec1becde32334036f0cc",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694ec1becde32334036f0cd",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "hitman",
    updatedAt: {
      $date: "2024-07-15T09:30:03.658Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a64",
    },
    playTime: 16,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    name: "Assassin's Creed",
    review: "",
    createdAt: "2024-03-05T11:53:46.602Z",
    screenshotSize: 0,
    platform: "ubisoft",
    rating: 6,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1rrw.jpg",
    lastPlay: "2011-06-11",
    igdb: {
      id: 128,
      cover: {
        id: 82652,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rrw.jpg",
        game: 128,
      },
      aggregated_rating: 80.75,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec27ecde32334036fbf2",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694ec27ecde32334036fbf3",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ec27ecde32334036fbf4",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694ec27ecde32334036fbf5",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694ec27ecde32334036fbf6",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ec27ecde32334036fbf7",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec27ecde32334036fbf8",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694ec27ecde32334036fbf9",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694ec27ecde32334036fbfa",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694ec27ecde32334036fbfb",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ec27ecde32334036fbfc",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694ec27ecde32334036fbfd",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694ec27ecde32334036fbfe",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed",
    updatedAt: {
      $date: "2024-07-15T09:30:15.449Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a65",
    },
    status: "completed",
    screenshotSize: 0,
    lastPlay: "2011-06-10",
    rating: 7.7,
    review: "",
    platform: "steam",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3z3j.jpg",
    playTime: 33,
    createdAt: "2024-04-14T13:18:26.545Z",
    name: "Pro Evolution Soccer 2011",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 4650,
      cover: {
        id: 185455,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3z3j.jpg",
        game: 4650,
      },
      aggregated_rating: 74.66666666666667,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec30ecde323340370730",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ec30ecde323340370731",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ec30ecde323340370732",
          },
        },
      ],
      genres: [
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694ec30ecde323340370733",
          },
        },
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694ec30ecde323340370734",
          },
        },
      ],
      developers: [
        {
          id: 159,
          name: "Konami Computer Entertainment Tokyo",
          _id: {
            $oid: "6694ec30ecde323340370735",
          },
        },
      ],
      publishers: [
        {
          id: 129,
          name: "Konami",
          _id: {
            $oid: "6694ec30ecde323340370736",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694ec30ecde323340370737",
          },
        },
      ],
      themes: [
        {
          id: 32,
          name: "Non-fiction",
          _id: {
            $oid: "6694ec30ecde323340370738",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "pro-evolution-soccer-2011",
    updatedAt: {
      $date: "2024-07-15T09:30:24.581Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a66",
    },
    screenshotSize: 0,
    playTime: 7,
    name: "Call of Duty: World at War",
    createdAt: "2024-03-05T11:35:02.732Z",
    platform: "steam",
    rating: 7.7,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wl8.jpg",
    review: "",
    status: "completed",
    lastPlay: "2011-06-09",
    igdb: {
      id: 625,
      cover: {
        id: 88892,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wl8.jpg",
        game: 625,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec3aecde323340371273",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ec3aecde323340371274",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ec3aecde323340371275",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694ec3aecde323340371276",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ec3aecde323340371277",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ec3aecde323340371278",
          },
        },
      ],
      developers: [
        {
          id: 428,
          name: "Treyarch",
          _id: {
            $oid: "6694ec3aecde323340371279",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694ec3aecde32334037127a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ec3aecde32334037127b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec3aecde32334037127c",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694ec3aecde32334037127d",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694ec3aecde32334037127e",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694ec3aecde32334037127f",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ec3aecde323340371280",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694ec3aecde323340371281",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-world-at-war",
    updatedAt: {
      $date: "2024-07-15T09:30:34.420Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a67",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co5j8z.jpg",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "completed",
    platform: "ubisoft",
    lastPlay: "2010-12-24",
    createdAt: "2024-01-21T08:25:16.501Z",
    screenshotSize: 0,
    rating: 8.6,
    name: "Assassin's Creed Brotherhood",
    playTime: 16,
    igdb: {
      id: 221823,
      cover: {
        id: 258227,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co5j8z.jpg",
        game: 221823,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec43ecde323340371dcb",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ec43ecde323340371dcc",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694ec43ecde323340371dcd",
          },
        },
        {
          id: 794,
          name: "Virtuos",
          _id: {
            $oid: "6694ec43ecde323340371dce",
          },
        },
      ],
      publishers: [],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ec43ecde323340371dcf",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec43ecde323340371dd0",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694ec43ecde323340371dd1",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694ec43ecde323340371dd2",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694ec43ecde323340371dd3",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ec43ecde323340371dd4",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694ec43ecde323340371dd5",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694ec43ecde323340371dd6",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "assassins-creed-brotherhood",
    updatedAt: {
      $date: "2024-07-15T09:30:43.914Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a68",
    },
    rating: 7.2,
    screenshotSize: 0,
    status: "completed",
    playTime: 8,
    lastPlay: "2010-11-26",
    name: "Prince of Persia: The Forgotten Sands",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2i0q.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-04-14T13:19:57.873Z",
    platform: "steam",
    review: "",
    igdb: {
      id: 2468,
      cover: {
        id: 116666,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2i0q.jpg",
        game: 2468,
      },
      aggregated_rating: 80.8,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec4cecde32334037292c",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694ec4cecde32334037292d",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694ec4cecde32334037292e",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ec4cecde32334037292f",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694ec4cecde323340372930",
          },
        },
        {
          id: 822,
          name: "Ubisoft Singapore",
          _id: {
            $oid: "6694ec4cecde323340372931",
          },
        },
      ],
      publishers: [
        {
          id: 104,
          name: "Ubisoft Entertainment",
          _id: {
            $oid: "6694ec4cecde323340372932",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ec4cecde323340372933",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec4cecde323340372934",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694ec4cecde323340372935",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694ec4cecde323340372936",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "prince-of-persia-the-forgotten-sands",
    updatedAt: {
      $date: "2024-07-15T09:30:52.612Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a69",
    },
    playTime: 5,
    name: "Far Cry 2",
    platform: "ubisoft",
    rating: 4.5,
    screenshotSize: 0,
    lastPlay: "2010-11-12",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    status: "abandoned",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1vpo.jpg",
    createdAt: "2024-03-05T12:19:32.142Z",
    review: "",
    igdb: {
      id: 361,
      cover: {
        id: 87756,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1vpo.jpg",
        game: 361,
      },
      aggregated_rating: 85,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec56ecde323340373497",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ec56ecde323340373498",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ec56ecde323340373499",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ec56ecde32334037349a",
          },
        },
      ],
      developers: [
        {
          id: 38,
          name: "Ubisoft Montreal",
          _id: {
            $oid: "6694ec56ecde32334037349b",
          },
        },
      ],
      publishers: [],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ec56ecde32334037349c",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec56ecde32334037349d",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ec56ecde32334037349e",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694ec56ecde32334037349f",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694ec56ecde3233403734a0",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "far-cry-2",
    updatedAt: {
      $date: "2024-07-15T09:31:02.191Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a6a",
    },
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1wko.jpg",
    lastPlay: "2010-07-15",
    playTime: 7,
    name: "Call of Duty 4: Modern Warfare",
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    platform: "steam",
    createdAt: "2024-03-05T11:34:00.516Z",
    rating: 8.5,
    status: "completed",
    igdb: {
      id: 623,
      cover: {
        id: 88872,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1wko.jpg",
        game: 623,
      },
      aggregated_rating: 87.85714285714286,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec6fecde32334037400b",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ec6fecde32334037400c",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ec6fecde32334037400d",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694ec6fecde32334037400e",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ec6fecde32334037400f",
          },
        },
        {
          id: 13,
          name: "Simulator",
          _id: {
            $oid: "6694ec6fecde323340374010",
          },
        },
      ],
      developers: [
        {
          id: 438,
          name: "Infinity Ward",
          _id: {
            $oid: "6694ec6fecde323340374011",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694ec6fecde323340374012",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ec6fecde323340374013",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec6fecde323340374014",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ec6fecde323340374015",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694ec6fecde323340374016",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-4-modern-warfare",
    updatedAt: {
      $date: "2024-07-15T09:31:27.305Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a6b",
    },
    screenshotSize: 0,
    name: "The Punisher",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    review: "",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1p2u.jpg",
    playTime: 16,
    lastPlay: "2009-06-20",
    platform: "xboxPc",
    createdAt: "2024-03-05T12:57:34.498Z",
    rating: 8.4,
    igdb: {
      id: 18294,
      cover: {
        id: 79158,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1p2u.jpg",
        game: 18294,
      },
      aggregated_rating: 78.66666666666667,
      aggregated_rating_count: 3,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec7cecde323340374b8d",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ec7cecde323340374b8e",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ec7cecde323340374b8f",
          },
        },
      ],
      developers: [
        {
          id: 7462,
          name: "Volition",
          _id: {
            $oid: "6694ec7cecde323340374b90",
          },
        },
      ],
      publishers: [
        {
          id: 197,
          name: "THQ",
          _id: {
            $oid: "6694ec7cecde323340374b91",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ec7cecde323340374b92",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec7cecde323340374b93",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-punisher",
    updatedAt: {
      $date: "2024-07-15T09:31:40.694Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a6c",
    },
    createdAt: "2024-01-21T07:37:28.605Z",
    screenshotSize: 0,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co3acf.jpg",
    status: "completed",
    name: "Call of Duty 2",
    platform: "steam",
    lastPlay: "2008-11-21",
    playTime: 10,
    review: "",
    rating: 8.7,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 622,
      cover: {
        id: 153375,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co3acf.jpg",
        game: 622,
      },
      aggregated_rating: 84.4,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec84ecde323340375711",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ec84ecde323340375712",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ec84ecde323340375713",
          },
        },
      ],
      developers: [
        {
          id: 438,
          name: "Infinity Ward",
          _id: {
            $oid: "6694ec84ecde323340375714",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694ec84ecde323340375715",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ec84ecde323340375716",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec84ecde323340375717",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694ec84ecde323340375718",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694ec84ecde323340375719",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "call-of-duty-2",
    updatedAt: {
      $date: "2024-07-15T09:31:48.982Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a6d",
    },
    rating: 8.7,
    lastPlay: "2008-10-16",
    platform: "steam",
    status: "completed",
    playTime: 50,
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: "2024-03-05T12:32:46.214Z",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2lb9.jpg",
    name: "Grand Theft Auto: San Andreas",
    screenshotSize: 0,
    igdb: {
      id: 732,
      cover: {
        id: 120933,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2lb9.jpg",
        game: 732,
      },
      aggregated_rating: 93.14285714285714,
      aggregated_rating_count: 7,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec8decde3233403762a0",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ec8decde3233403762a1",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ec8decde3233403762a2",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694ec8decde3233403762a3",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ec8decde3233403762a4",
          },
        },
      ],
      developers: [
        {
          id: 365,
          name: "Rockstar North",
          _id: {
            $oid: "6694ec8decde3233403762a5",
          },
        },
        {
          id: 1967,
          name: "TransGaming Inc.",
          _id: {
            $oid: "6694ec8decde3233403762a6",
          },
        },
      ],
      publishers: [
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694ec8decde3233403762a7",
          },
        },
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694ec8decde3233403762a8",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ec8decde3233403762a9",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ec8decde3233403762aa",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec8decde3233403762ab",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ec8decde3233403762ac",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694ec8decde3233403762ad",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "grand-theft-auto-san-andreas",
    updatedAt: {
      $date: "2024-07-15T09:31:57.363Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a6e",
    },
    createdAt: "2024-03-05T11:31:57.793Z",
    lastPlay: "2008-06-21",
    review: "",
    platform: "steam",
    playTime: 8,
    status: "completed",
    rating: 7,
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2n19.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    screenshotSize: 0,
    name: "Call of Duty",
    slug: "call-of-duty",
    updatedAt: {
      $date: "2024-07-15T09:32:11.165Z",
    },
    igdb: {
      id: 621,
      cover: {
        id: 123165,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2n19.jpg",
        game: 621,
      },
      aggregated_rating: 86.66666666666667,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ec9becde323340376e42",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ec9becde323340376e43",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ec9becde323340376e44",
          },
        },
      ],
      developers: [
        {
          id: 438,
          name: "Infinity Ward",
          _id: {
            $oid: "6694ec9becde323340376e45",
          },
        },
      ],
      publishers: [
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694ec9becde323340376e46",
          },
        },
        {
          id: 73,
          name: "Aspyr Media",
          _id: {
            $oid: "6694ec9becde323340376e47",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ec9becde323340376e48",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ec9becde323340376e49",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694ec9becde323340376e4a",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694ec9becde323340376e4b",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a6f",
    },
    review: "",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2lbb.jpg",
    rating: 8.8,
    playTime: 26,
    name: "Grand Theft Auto: Vice City",
    lastPlay: "2006-03-21",
    status: "completed",
    platform: "steam",
    createdAt: "2024-01-21T08:31:16.249Z",
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 733,
      cover: {
        id: 120935,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2lbb.jpg",
        game: 733,
      },
      aggregated_rating: 94,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694eca5ecde3233403779ea",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694eca5ecde3233403779eb",
          },
        },
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694eca5ecde3233403779ec",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694eca5ecde3233403779ed",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694eca5ecde3233403779ee",
          },
        },
      ],
      developers: [
        {
          id: 365,
          name: "Rockstar North",
          _id: {
            $oid: "6694eca5ecde3233403779ef",
          },
        },
      ],
      publishers: [
        {
          id: 29,
          name: "Rockstar Games",
          _id: {
            $oid: "6694eca5ecde3233403779f0",
          },
        },
        {
          id: 139,
          name: "Take-Two Interactive",
          _id: {
            $oid: "6694eca5ecde3233403779f1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694eca5ecde3233403779f2",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694eca5ecde3233403779f3",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694eca5ecde3233403779f4",
          },
        },
        {
          id: 33,
          name: "Sandbox",
          _id: {
            $oid: "6694eca5ecde3233403779f5",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694eca5ecde3233403779f6",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "grand-theft-auto-vice-city",
    updatedAt: {
      $date: "2024-07-15T09:32:21.779Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a70",
    },
    name: "Return to Castle Wolfenstein",
    review: "",
    lastPlay: "2005-07-17",
    screenshotSize: 0,
    playTime: 10,
    platform: "otherPlatforms",
    status: "completed",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1xzr.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 7.2,
    createdAt: "2024-04-11T09:58:57.253Z",
    igdb: {
      id: 281,
      cover: {
        id: 90711,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xzr.jpg",
        game: 281,
      },
      aggregated_rating: 68.2,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ecaeecde3233403785a2",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ecaeecde3233403785a3",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ecaeecde3233403785a4",
          },
        },
      ],
      developers: [
        {
          id: 367,
          name: "Gray Matter Interactive",
          _id: {
            $oid: "6694ecaeecde3233403785a5",
          },
        },
        {
          id: 221,
          name: "Splash Damage",
          _id: {
            $oid: "6694ecaeecde3233403785a6",
          },
        },
        {
          id: 358,
          name: "Raster Productions",
          _id: {
            $oid: "6694ecaeecde3233403785a7",
          },
        },
        {
          id: 187,
          name: "Nerve Software, LLC",
          _id: {
            $oid: "6694ecaeecde3233403785a8",
          },
        },
        {
          id: 378,
          name: "Westlake Interactive",
          _id: {
            $oid: "6694ecaeecde3233403785a9",
          },
        },
      ],
      publishers: [
        {
          id: 73,
          name: "Aspyr Media",
          _id: {
            $oid: "6694ecaeecde3233403785aa",
          },
        },
        {
          id: 66,
          name: "Activision",
          _id: {
            $oid: "6694ecaeecde3233403785ab",
          },
        },
        {
          id: 184,
          name: "id Software",
          _id: {
            $oid: "6694ecaeecde3233403785ac",
          },
        },
        {
          id: 53,
          name: "Microsoft Game Studios",
          _id: {
            $oid: "6694ecaeecde3233403785ad",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ecaeecde3233403785ae",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ecaeecde3233403785af",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694ecaeecde3233403785b0",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694ecaeecde3233403785b1",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694ecaeecde3233403785b2",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694ecaeecde3233403785b3",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694ecaeecde3233403785b4",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "return-to-castle-wolfenstein",
    updatedAt: {
      $date: "2024-07-15T09:32:30.300Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a71",
    },
    lastPlay: "2005-02-18",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co7q89.jpg",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    rating: 8.6,
    review: "",
    playTime: 13,
    status: "completed",
    name: "Half-Life",
    platform: "steam",
    createdAt: "2024-03-05T12:38:49.218Z",
    screenshotSize: 0,
    igdb: {
      id: 231,
      cover: {
        id: 360585,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co7q89.jpg",
        game: 231,
      },
      aggregated_rating: 80,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ecbdecde323340379173",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ecbdecde323340379174",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694ecbdecde323340379175",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694ecbdecde323340379176",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ecbdecde323340379177",
          },
        },
      ],
      developers: [
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694ecbdecde323340379178",
          },
        },
      ],
      publishers: [
        {
          id: 24,
          name: "Sierra Entertainment",
          _id: {
            $oid: "6694ecbdecde323340379179",
          },
        },
        {
          id: 56,
          name: "Valve",
          _id: {
            $oid: "6694ecbdecde32334037917a",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ecbdecde32334037917b",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ecbdecde32334037917c",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694ecbdecde32334037917d",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694ecbdecde32334037917e",
          },
        },
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694ecbdecde32334037917f",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694ecbdecde323340379180",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "half-life",
    updatedAt: {
      $date: "2024-07-15T09:32:45.965Z",
    },
  },
  {
    _id: {
      $oid: "66744754cb66f1bc4b2a9a72",
    },
    name: "The Fast and The Furious",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2e82.jpg",
    platform: "xboxPc",
    playTime: 4,
    createdAt: "2024-04-15T15:41:46.348Z",
    status: "completed",
    lastPlay: {
      $date: "2005-01-01T00:00:00.000Z",
    },
    rating: 5.2,
    screenshotSize: 0,
    review: "",
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    igdb: {
      id: 21383,
      cover: {
        id: 111746,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2e82.jpg",
        game: 21383,
      },
      aggregated_rating: 60,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ed34ecde32334037cc6f",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694ed34ecde32334037cc70",
          },
        },
      ],
      genres: [
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694ed34ecde32334037cc71",
          },
        },
      ],
      developers: [
        {
          id: 1001,
          name: "Eutechnyx",
          _id: {
            $oid: "6694ed34ecde32334037cc72",
          },
        },
      ],
      publishers: [
        {
          id: 29930,
          name: "Bandai Namco Entertainment Inc.",
          _id: {
            $oid: "6694ed34ecde32334037cc73",
          },
        },
        {
          id: 423,
          name: "Deep Silver",
          _id: {
            $oid: "6694ed34ecde32334037cc74",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ed34ecde32334037cc75",
          },
        },
      ],
    },
    isFavorite: false,
    slug: "the-fast-and-the-furious",
    updatedAt: {
      $date: "2024-07-15T09:34:44.766Z",
    },
  },
  {
    _id: {
      $oid: "6675ae85ff7f84d4cf5c87a8",
    },
    name: "Darksiders III",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1qqk.jpg",
    lastPlay: {
      $date: "2024-06-21T00:00:00.000Z",
    },
    platform: "epicGames",
    status: "toBeCompleted",
    playTime: 7,
    screenshotSize: 0,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    createdAt: {
      $date: "2024-06-21T16:47:01.029Z",
    },
    updatedAt: {
      $date: "2024-07-14T21:17:00.129Z",
    },
    slug: "darksiders-iii",
    __v: 1,
    igdb: {
      id: 28380,
      cover: {
        id: 81308,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1qqk.jpg",
        game: 28380,
      },
      aggregated_rating: 64.9375,
      aggregated_rating_count: 16,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694404c0ecc09533ae9f8fa",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694404c0ecc09533ae9f8fb",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694404c0ecc09533ae9f8fc",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694404c0ecc09533ae9f8fd",
          },
        },
      ],
      developers: [
        {
          id: 10809,
          name: "Gunfire Games",
          _id: {
            $oid: "6694404c0ecc09533ae9f8fe",
          },
        },
      ],
      publishers: [
        {
          id: 10075,
          name: "THQ Nordic",
          _id: {
            $oid: "6694404c0ecc09533ae9f8ff",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694404c0ecc09533ae9f900",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694404c0ecc09533ae9f901",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694404c0ecc09533ae9f902",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694404c0ecc09533ae9f903",
          },
        },
      ],
    },
    isFavorite: false,
    review: "",
  },
  {
    _id: {
      $oid: "6675c6e9bf61eb37d43e6438",
    },
    name: "Disco Elysium",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1sfj.jpg",
    lastPlay: {
      $date: "2024-06-01T00:00:00.000Z",
    },
    platform: "steam",
    rating: 8.5,
    status: "completed",
    playTime: 37,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-21T18:31:05.668Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:28:40.514Z",
    },
    slug: "disco-elysium",
    __v: 0,
    igdb: {
      id: 26472,
      cover: {
        id: 83503,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1sfj.jpg",
        game: 26472,
      },
      aggregated_rating: 89.125,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ddb8ecde323340315487",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694ddb8ecde323340315488",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ddb8ecde323340315489",
          },
        },
      ],
      developers: [
        {
          id: 15094,
          name: "ZA/UM",
          _id: {
            $oid: "6694ddb8ecde32334031548a",
          },
        },
      ],
      publishers: [
        {
          id: 15094,
          name: "ZA/UM",
          _id: {
            $oid: "6694ddb8ecde32334031548b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694ddb8ecde32334031548c",
          },
        },
      ],
      themes: [
        {
          id: 20,
          name: "Thriller",
          _id: {
            $oid: "6694ddb8ecde32334031548d",
          },
        },
        {
          id: 31,
          name: "Drama",
          _id: {
            $oid: "6694ddb8ecde32334031548e",
          },
        },
        {
          id: 43,
          name: "Mystery",
          _id: {
            $oid: "6694ddb8ecde32334031548f",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c08a010383bd902c79f5c",
    },
    name: "I Am Alive",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2sn0.jpg",
    lastPlay: {
      $date: "2012-11-29T00:00:00.000Z",
    },
    platform: "ubisoft",
    rating: 6.8,
    status: "completed",
    playTime: 6,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:25:04.722Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:30:40.996Z",
    },
    slug: "i-am-alive",
    __v: 0,
    igdb: {
      id: 507,
      cover: {
        id: 130428,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2sn0.jpg",
        game: 507,
      },
      aggregated_rating: 69.125,
      aggregated_rating_count: 8,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694de30ecde3233403155c0",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "6694de30ecde3233403155c1",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694de30ecde3233403155c2",
          },
        },
      ],
      developers: [
        {
          id: 397,
          name: "Darkworks",
          _id: {
            $oid: "6694de30ecde3233403155c3",
          },
        },
        {
          id: 398,
          name: "Ubisoft Shanghai",
          _id: {
            $oid: "6694de30ecde3233403155c4",
          },
        },
      ],
      publishers: [],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694de30ecde3233403155c5",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694de30ecde3233403155c6",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694de30ecde3233403155c7",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694de30ecde3233403155c8",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694de30ecde3233403155c9",
          },
        },
        {
          id: 22,
          name: "Historical",
          _id: {
            $oid: "6694de30ecde3233403155ca",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c091410383bd902c79f66",
    },
    name: "Crysis Warhead",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2on4.jpg",
    lastPlay: {
      $date: "2010-07-16T00:00:00.000Z",
    },
    platform: "steam",
    rating: 7.6,
    status: "completed",
    playTime: 6,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:27:00.605Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:32:54.169Z",
    },
    slug: "crysis-warhead",
    __v: 0,
    igdb: {
      id: 336,
      cover: {
        id: 125248,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2on4.jpg",
        game: 336,
      },
      aggregated_rating: 76.66666666666667,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694deb6ecde32334031577b",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694deb6ecde32334031577c",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694deb6ecde32334031577d",
          },
        },
      ],
      developers: [
        {
          id: 125,
          name: "Crytek Budapest",
          _id: {
            $oid: "6694deb6ecde32334031577e",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694deb6ecde32334031577f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694deb6ecde323340315780",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694deb6ecde323340315781",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694deb6ecde323340315782",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694deb6ecde323340315783",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694deb6ecde323340315784",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694deb6ecde323340315785",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c0ab410383bd902c7a841",
    },
    name: "FlatOut 2",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co1x52.jpg",
    lastPlay: {
      $date: "2009-06-19T00:00:00.000Z",
    },
    platform: "steam",
    rating: 8.1,
    status: "completed",
    playTime: 11,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:33:56.042Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:33:23.585Z",
    },
    slug: "flatout-2",
    __v: 0,
    igdb: {
      id: 2668,
      cover: {
        id: 89606,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co1x52.jpg",
        game: 2668,
      },
      aggregated_rating: 82.5,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ded3ecde323340315805",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ded3ecde323340315806",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694ded3ecde323340315807",
          },
        },
      ],
      genres: [
        {
          id: 10,
          name: "Racing",
          _id: {
            $oid: "6694ded3ecde323340315808",
          },
        },
        {
          id: 14,
          name: "Sport",
          _id: {
            $oid: "6694ded3ecde323340315809",
          },
        },
        {
          id: 33,
          name: "Arcade",
          _id: {
            $oid: "6694ded3ecde32334031580a",
          },
        },
      ],
      developers: [
        {
          id: 427,
          name: "Bugbear Entertainment",
          _id: {
            $oid: "6694ded3ecde32334031580b",
          },
        },
      ],
      publishers: [
        {
          id: 129,
          name: "Konami",
          _id: {
            $oid: "6694ded3ecde32334031580c",
          },
        },
        {
          id: 340,
          name: "Empire Interactive",
          _id: {
            $oid: "6694ded3ecde32334031580d",
          },
        },
        {
          id: 80,
          name: "Vivendi Games",
          _id: {
            $oid: "6694ded3ecde32334031580e",
          },
        },
        {
          id: 146,
          name: "Strategy First",
          _id: {
            $oid: "6694ded3ecde32334031580f",
          },
        },
        {
          id: 3023,
          name: "Virtual Programming",
          _id: {
            $oid: "6694ded3ecde323340315810",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694ded3ecde323340315811",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ded3ecde323340315812",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ded3ecde323340315813",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c0b5610383bd902c7a85a",
    },
    name: "Medal of Honor: Warfighter",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2so4.jpg",
    lastPlay: {
      $date: "2014-10-17T00:00:00.000Z",
    },
    platform: "eaGames",
    rating: 7.1,
    status: "completed",
    playTime: 12,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:36:38.354Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:29:23.459Z",
    },
    slug: "medal-of-honor-warfighter",
    __v: 0,
    igdb: {
      id: 1306,
      cover: {
        id: 130468,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2so4.jpg",
        game: 1306,
      },
      aggregated_rating: 48.88888888888889,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694dde3ecde3233403154e6",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694dde3ecde3233403154e7",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "6694dde3ecde3233403154e8",
          },
        },
      ],
      developers: [
        {
          id: 435,
          name: "Danger Close",
          _id: {
            $oid: "6694dde3ecde3233403154e9",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694dde3ecde3233403154ea",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694dde3ecde3233403154eb",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694dde3ecde3233403154ec",
          },
        },
        {
          id: 23,
          name: "Stealth",
          _id: {
            $oid: "6694dde3ecde3233403154ed",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694dde3ecde3233403154ee",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c0c5110383bd902c7a96e",
    },
    name: "The Lord of the Rings: The Return of the King",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20of.jpg",
    lastPlay: {
      $date: "2011-10-15T00:00:00.000Z",
    },
    platform: "otherPlatforms",
    rating: 7.7,
    status: "completed",
    playTime: 9,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:40:49.963Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:32:43.366Z",
    },
    slug: "the-lord-of-the-rings-the-return-of-the-king",
    __v: 0,
    igdb: {
      id: 2973,
      cover: {
        id: 94191,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20of.jpg",
        game: 2973,
      },
      aggregated_rating: 75,
      aggregated_rating_count: 2,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694deabecde3233403156fc",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694deabecde3233403156fd",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694deabecde3233403156fe",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694deabecde3233403156ff",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694deabecde323340315700",
          },
        },
      ],
      developers: [
        {
          id: 11,
          name: "EA Redwood Shores",
          _id: {
            $oid: "6694deabecde323340315701",
          },
        },
      ],
      publishers: [
        {
          id: 73,
          name: "Aspyr Media",
          _id: {
            $oid: "6694deabecde323340315702",
          },
        },
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694deabecde323340315703",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694deabecde323340315704",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694deabecde323340315705",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694deabecde323340315706",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c0ca310383bd902c7ab4f",
    },
    name: "LEGO The Lord of the Rings",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20pp.jpg",
    lastPlay: {
      $date: "2018-10-19T00:00:00.000Z",
    },
    platform: "steam",
    rating: 7,
    status: "completed",
    playTime: 11,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:42:11.930Z",
    },
    updatedAt: {
      $date: "2024-07-15T10:24:37.441Z",
    },
    slug: "lego-the-lord-of-the-rings",
    __v: 0,
    igdb: {
      id: 4969,
      cover: {
        id: 94237,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20pp.jpg",
        game: 4969,
      },
      aggregated_rating: 77.44444444444444,
      aggregated_rating_count: 10,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694f8e5c482105965b55f24",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694f8e5c482105965b55f25",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694f8e5c482105965b55f26",
          },
        },
      ],
      developers: [
        {
          id: 292,
          name: "Traveller's Tales",
          _id: {
            $oid: "6694f8e5c482105965b55f27",
          },
        },
      ],
      publishers: [
        {
          id: 23,
          name: "Feral Interactive",
          _id: {
            $oid: "6694f8e5c482105965b55f28",
          },
        },
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694f8e5c482105965b55f29",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694f8e5c482105965b55f2a",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694f8e5c482105965b55f2b",
          },
        },
        {
          id: 27,
          name: "Comedy",
          _id: {
            $oid: "6694f8e5c482105965b55f2c",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694f8e5c482105965b55f2d",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c0cfc10383bd902c7ab54",
    },
    name: "The Lord of the Rings: Conquest",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co7lup.jpg",
    lastPlay: {
      $date: "2014-06-20T00:00:00.000Z",
    },
    platform: "eaGames",
    rating: 7.4,
    status: "completed",
    playTime: 7,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:43:40.297Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:29:33.752Z",
    },
    slug: "the-lord-of-the-rings-conquest",
    __v: 0,
    igdb: {
      id: 200817,
      cover: {
        id: 354913,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co7lup.jpg",
        game: 200817,
      },
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ddedecde323340315523",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ddedecde323340315524",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ddedecde323340315525",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "6694ddedecde323340315526",
          },
        },
      ],
      genres: [
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694ddedecde323340315527",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ddedecde323340315528",
          },
        },
      ],
      developers: [],
      publishers: [],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ddedecde323340315529",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ddedecde32334031552a",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694ddedecde32334031552b",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c0d7f10383bd902c7ab6b",
    },
    name: "The Lord of the Rings: War in the North",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20p9.jpg",
    lastPlay: {
      $date: "2013-06-16T00:00:00.000Z",
    },
    platform: "otherPlatforms",
    rating: 7.1,
    status: "completed",
    playTime: 13,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:45:51.332Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:29:43.993Z",
    },
    slug: "the-lord-of-the-rings-war-in-the-north",
    __v: 0,
    igdb: {
      id: 1052,
      cover: {
        id: 94221,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20p9.jpg",
        game: 1052,
      },
      aggregated_rating: 66.125,
      aggregated_rating_count: 9,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694ddf7ecde323340315569",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694ddf7ecde32334031556a",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694ddf7ecde32334031556b",
          },
        },
      ],
      genres: [
        {
          id: 12,
          name: "Role-playing (RPG)",
          _id: {
            $oid: "6694ddf7ecde32334031556c",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694ddf7ecde32334031556d",
          },
        },
        {
          id: 25,
          name: "Hack and slash/Beat 'em up",
          _id: {
            $oid: "6694ddf7ecde32334031556e",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694ddf7ecde32334031556f",
          },
        },
      ],
      developers: [
        {
          id: 78,
          name: "Snowblind Studios",
          _id: {
            $oid: "6694ddf7ecde323340315570",
          },
        },
      ],
      publishers: [
        {
          id: 50,
          name: "WB Games",
          _id: {
            $oid: "6694ddf7ecde323340315571",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "6694ddf7ecde323340315572",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694ddf7ecde323340315573",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694ddf7ecde323340315574",
          },
        },
        {
          id: 38,
          name: "Open world",
          _id: {
            $oid: "6694ddf7ecde323340315575",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c0deb10383bd902c7ab7a",
    },
    name: "The Lord of the Rings: The Battle for Middle-earth",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20og.jpg",
    lastPlay: {
      $date: "2011-11-11T00:00:00.000Z",
    },
    platform: "eaGames",
    rating: 8.2,
    status: "completed",
    playTime: 24,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:47:39.830Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:31:34.467Z",
    },
    slug: "the-lord-of-the-rings-the-battle-for-middle-earth",
    __v: 0,
    igdb: {
      id: 3154,
      cover: {
        id: 94192,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20og.jpg",
        game: 3154,
      },
      aggregated_rating: 83.75,
      aggregated_rating_count: 5,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694de66ecde323340315689",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694de66ecde32334031568a",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694de66ecde32334031568b",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694de66ecde32334031568c",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694de66ecde32334031568d",
          },
        },
      ],
      developers: [
        {
          id: 140,
          name: "EA Los Angeles",
          _id: {
            $oid: "6694de66ecde32334031568e",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694de66ecde32334031568f",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694de66ecde323340315690",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694de66ecde323340315691",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694de66ecde323340315692",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "667c0e2d10383bd902c7ab7f",
    },
    name: "The Lord of the Rings: The Battle for Middle-earth II",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co20oh.jpg",
    lastPlay: {
      $date: "2012-06-15T00:00:00.000Z",
    },
    platform: "eaGames",
    rating: 8.4,
    status: "completed",
    playTime: 38,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-06-26T12:48:45.760Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:31:23.924Z",
    },
    slug: "the-lord-of-the-rings-the-battle-for-middle-earth-ii",
    __v: 0,
    igdb: {
      id: 3155,
      cover: {
        id: 94193,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co20oh.jpg",
        game: 3155,
      },
      aggregated_rating: 80.83333333333333,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694de5becde323340315620",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "6694de5becde323340315621",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "6694de5becde323340315622",
          },
        },
      ],
      genres: [
        {
          id: 11,
          name: "Real Time Strategy (RTS)",
          _id: {
            $oid: "6694de5becde323340315623",
          },
        },
        {
          id: 15,
          name: "Strategy",
          _id: {
            $oid: "6694de5becde323340315624",
          },
        },
      ],
      developers: [
        {
          id: 140,
          name: "EA Los Angeles",
          _id: {
            $oid: "6694de5becde323340315625",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "6694de5becde323340315626",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694de5becde323340315627",
          },
        },
      ],
      themes: [
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694de5becde323340315628",
          },
        },
        {
          id: 39,
          name: "Warfare",
          _id: {
            $oid: "6694de5becde323340315629",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "668bba315b3181f697c01ca2",
    },
    name: "Sanitarium",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2890.jpg",
    lastPlay: {
      $date: "2024-07-10T00:00:00.000Z",
    },
    platform: "steam",
    rating: 8.7,
    status: "completed",
    playTime: 10,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-07-08T10:06:41.978Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:28:24.151Z",
    },
    slug: "sanitarium",
    __v: 0,
    igdb: {
      id: 8072,
      cover: {
        id: 104004,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2890.jpg",
        game: 8072,
      },
      aggregated_rating: 92,
      aggregated_rating_count: 1,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694dda8ecde323340315465",
          },
        },
      ],
      genres: [
        {
          id: 2,
          name: "Point-and-click",
          _id: {
            $oid: "6694dda8ecde323340315466",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "6694dda8ecde323340315467",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694dda8ecde323340315468",
          },
        },
      ],
      developers: [
        {
          id: 606,
          name: "DreamForge Intertainment",
          _id: {
            $oid: "6694dda8ecde323340315469",
          },
        },
      ],
      publishers: [
        {
          id: 704,
          name: "ASC Games",
          _id: {
            $oid: "6694dda8ecde32334031546a",
          },
        },
        {
          id: 4501,
          name: "DotEmu",
          _id: {
            $oid: "6694dda8ecde32334031546b",
          },
        },
      ],
      player_perspectives: [
        {
          id: 3,
          name: "Bird view / Isometric",
          _id: {
            $oid: "6694dda8ecde32334031546c",
          },
        },
      ],
      themes: [
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694dda8ecde32334031546d",
          },
        },
        {
          id: 21,
          name: "Survival",
          _id: {
            $oid: "6694dda8ecde32334031546e",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "668c2244e9f04fbd0cb3970b",
    },
    name: "It Takes Two",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co2t97.jpg",
    lastPlay: {
      $date: "2024-07-04T00:00:00.000Z",
    },
    platform: "steam",
    review:
      "Başlangıçta ön yargı ile baktım. Yılın oyunu nasıl böyle bir oyun olur diye. Başka oyun mu kalmışta bu tarz oyun yılın oyunu kazanmış dedim ve çok büyük yanıldığımı oynadığımda fark ettim...\n\nOyun görebileceğiniz en iyi oyun dizaynına sahip. O kadar güzel akıyor ki 10-11 saatlik oyunda tekrara düştüğünüz bir parça yok. Yaptığınız her kısım eşsiz ve mükemmel. En güzel kısım ise oyun içinde oyun oynuyorsunuz. Bir bölüm Mortal Combat, Bir bölüm Battlefield, Bir bölüm Dota 2, bir bölüm satranç ve daha bir çok oyun konseptleri. Hepsi ile oynamak oldukça keyifliydi. Bu oyun için tek gerekli şey sizinle aynı kafada bu oyunu oynayacak biri. Friend's Pass'ten ötürü oyunu ikinizden biri almanız yetiyor.",
    rating: 9,
    status: "completed",
    playTime: 11.8,
    screenshotSize: 10,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    createdAt: {
      $date: "2024-07-08T17:30:44.338Z",
    },
    updatedAt: {
      $date: "2024-07-14T21:16:40.721Z",
    },
    slug: "it-takes-two",
    __v: 1,
    igdb: {
      id: 135243,
      cover: {
        id: 131227,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co2t97.jpg",
        game: 135243,
      },
      aggregated_rating: 90.26666666666667,
      aggregated_rating_count: 19,
      game_modes: [
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "669440380ecc09533ae9f8ca",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "669440380ecc09533ae9f8cb",
          },
        },
        {
          id: 4,
          name: "Split screen",
          _id: {
            $oid: "669440380ecc09533ae9f8cc",
          },
        },
      ],
      genres: [
        {
          id: 8,
          name: "Platform",
          _id: {
            $oid: "669440380ecc09533ae9f8cd",
          },
        },
        {
          id: 9,
          name: "Puzzle",
          _id: {
            $oid: "669440380ecc09533ae9f8ce",
          },
        },
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "669440380ecc09533ae9f8cf",
          },
        },
      ],
      developers: [
        {
          id: 12901,
          name: "Hazelight Studios",
          _id: {
            $oid: "669440380ecc09533ae9f8d0",
          },
        },
      ],
      publishers: [
        {
          id: 1,
          name: "Electronic Arts",
          _id: {
            $oid: "669440380ecc09533ae9f8d1",
          },
        },
      ],
      player_perspectives: [
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "669440380ecc09533ae9f8d2",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "669440380ecc09533ae9f8d3",
          },
        },
      ],
    },
    isFavorite: false,
  },
  {
    _id: {
      $oid: "668c2340e9f04fbd0cb3971d",
    },
    name: "Helldivers 2",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co741o.jpg",
    lastPlay: {
      $date: "2024-07-08T00:00:00.000Z",
    },
    platform: "steam",
    status: "activePlaying",
    playTime: 4,
    screenshotSize: 0,
    userId: {
      $oid: "661400f4b4ade3d661e4d847",
    },
    createdAt: {
      $date: "2024-07-08T17:34:56.546Z",
    },
    updatedAt: {
      $date: "2024-07-14T21:14:14.064Z",
    },
    slug: "helldivers-2",
    __v: 1,
    igdb: {
      id: 250616,
      cover: {
        id: 331836,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co741o.jpg",
        game: 250616,
      },
      aggregated_rating: 86.8,
      aggregated_rating_count: 6,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "66943fa60ecc09533ae9f8a3",
          },
        },
        {
          id: 2,
          name: "Multiplayer",
          _id: {
            $oid: "66943fa60ecc09533ae9f8a4",
          },
        },
        {
          id: 3,
          name: "Co-operative",
          _id: {
            $oid: "66943fa60ecc09533ae9f8a5",
          },
        },
      ],
      genres: [
        {
          id: 5,
          name: "Shooter",
          _id: {
            $oid: "66943fa60ecc09533ae9f8a6",
          },
        },
        {
          id: 24,
          name: "Tactical",
          _id: {
            $oid: "66943fa60ecc09533ae9f8a7",
          },
        },
      ],
      developers: [
        {
          id: 953,
          name: "Arrowhead Game Studios",
          _id: {
            $oid: "66943fa60ecc09533ae9f8a8",
          },
        },
      ],
      publishers: [
        {
          id: 10100,
          name: "Sony Interactive Entertainment",
          _id: {
            $oid: "66943fa60ecc09533ae9f8a9",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "66943fa60ecc09533ae9f8aa",
          },
        },
        {
          id: 2,
          name: "Third person",
          _id: {
            $oid: "66943fa60ecc09533ae9f8ab",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "66943fa60ecc09533ae9f8ac",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "66943fa60ecc09533ae9f8ad",
          },
        },
      ],
    },
    isFavorite: false,
    rating: 8.3,
  },
  {
    _id: {
      $oid: "668e986e4f7c9acc3dcf24db",
    },
    name: "Still Wakes the Deep",
    photo: "//images.igdb.com/igdb/image/upload/t_1080p/co8dbd.jpg",
    lastPlay: {
      $date: "2024-07-12T00:00:00.000Z",
    },
    platform: "steam",
    rating: 7.6,
    status: "completed",
    playTime: 6,
    screenshotSize: 0,
    userId: {
      $oid: "6674453d2e8083e6cf1e7353",
    },
    createdAt: {
      $date: "2024-07-10T14:19:26.120Z",
    },
    updatedAt: {
      $date: "2024-07-15T08:26:50.328Z",
    },
    slug: "still-wakes-the-deep",
    __v: 0,
    igdb: {
      id: 252837,
      cover: {
        id: 390505,
        url: "//images.igdb.com/igdb/image/upload/t_thumb/co8dbd.jpg",
        game: 252837,
      },
      aggregated_rating: 82,
      aggregated_rating_count: 4,
      game_modes: [
        {
          id: 1,
          name: "Single player",
          _id: {
            $oid: "6694dd4aecde323340315441",
          },
        },
      ],
      genres: [
        {
          id: 31,
          name: "Adventure",
          _id: {
            $oid: "6694dd4aecde323340315442",
          },
        },
      ],
      developers: [
        {
          id: 1364,
          name: "The Chinese Room",
          _id: {
            $oid: "6694dd4aecde323340315443",
          },
        },
      ],
      publishers: [
        {
          id: 36610,
          name: "Secret Mode",
          _id: {
            $oid: "6694dd4aecde323340315444",
          },
        },
      ],
      player_perspectives: [
        {
          id: 1,
          name: "First person",
          _id: {
            $oid: "6694dd4aecde323340315445",
          },
        },
      ],
      themes: [
        {
          id: 1,
          name: "Action",
          _id: {
            $oid: "6694dd4aecde323340315446",
          },
        },
        {
          id: 17,
          name: "Fantasy",
          _id: {
            $oid: "6694dd4aecde323340315447",
          },
        },
        {
          id: 18,
          name: "Science fiction",
          _id: {
            $oid: "6694dd4aecde323340315448",
          },
        },
        {
          id: 19,
          name: "Horror",
          _id: {
            $oid: "6694dd4aecde323340315449",
          },
        },
      ],
    },
    isFavorite: false,
  },
];

json.forEach((item) => {
  item.lastPlay = convertDate(item.lastPlay);
});
fs.writeFile("output.json", JSON.stringify(json, null, 2), (err) => {
  if (err) {
    console.error("Hata oluştu:", err);
    return;
  }
  console.log(json);
  console.log("JSON verisi başarıyla output.json dosyasına yazıldı.");
});
