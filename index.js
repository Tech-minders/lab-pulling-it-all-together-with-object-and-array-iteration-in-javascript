function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// create a helper function to retrieve a player's stats object by name from the data source and check both teams

function getPlayerStats(playerName) {
  const gameData = gameObject();

  if (gameData.home.players[playerName]) {
    return gameData.home.players[playerName];
  }
  if (gameData.away.players[playerName]) {
    return gameData.away.players[playerName];
  }
  return undefined;
}

// create a function to retrieve team names

function getTeamByName(teamName) {
  const gameData = gameObject();
  if (gameData.home.teamName === teamName) {
    return gameData.home;
  }
  if (gameData.away.teamName === teamName) {
    return gameData.away;
  }
  return undefined;
}

//create a function to check number of points scored by each player

function numPointsScored(playerName) {
  const stats = getPlayerStats(playerName);

  if (stats) {
    return stats.points;
  } else {
    return undefined;
  }
}

//create a function that Returns the shoe size, or undefined if the player is not found.
function shoeSize(playerName) {
  const stats = getPlayerStats(playerName);

  if (stats) {
    return stats.shoe;
  } else {
    return undefined;
  }
}

//Returns the colors of a specific team.
function teamColors(teamName) {
  const team = getTeamByName(teamName);
  if (team) {
    return team.colors;
  } else {
    return undefined;
  }
}

//create a function that returns a list of all team names.
 
function teamNames() {
  const gameData = gameObject();
  return [gameData.home.teamName, gameData.away.teamName];
}

//create a function that returns a list of player numbers for a given team.
 
function playerNumbers(teamName) {
  const team = getTeamByName(teamName);
  if (!team) {
    return undefined;
  }

  return Object.values(team.players).map((playerStats) => playerStats.number);
}

// returns the full stats for a given player.
 
function playerStats(playerName) {
  return getPlayerStats(playerName);
}

//create a function that finds the player with the biggest shoe size across all teams

function bigShoeRebounds() {
  const gameData = gameObject();

  const allPlayers = [
    //use spread to creates an array of player objects , and avoid nested ones
    ...Object.values(gameData.home.players),
    ...Object.values(gameData.away.players),
  ];

  const playerWithBiggestShoe = allPlayers.sort((a, b) => b.shoe - a.shoe)[0];

  if (playerWithBiggestShoe) {
    return playerWithBiggestShoe.rebounds;
  } else {
    return 0;
  }
}
//export
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    gameObject,
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    getPlayerStats,
    getTeamByName,
  };
}
