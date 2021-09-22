// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

 // Your code
//  thing about execution/ function structure
const playersData = data.getPlayers();

const printPlayersDetails = (data) => {
    let result = '';
    data.forEach((player, index) => {
        result += `PLAYER ${index + 1}\n`;
        for (const [key, value] of Object.entries(player)) {
            result += `${key.toUpperCase()}: ${value}\n`;
        };
    });
    return result;
}

console.log(printPlayersDetails(playersData));

/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
// REFACTOR data naming possible structure?
const getNamesArray = (playersData) => {
    return playersData.map((player) => player.name);
}

const getDescendingNamesArray = (namesArray) => {
    return namesArray.sort((a, b) => (a.length < b.length) ? 1 : -1)
}

const logPlayersNameDescending = () => {
    const namesArray = getNamesArray(playersData);
    const descendingNamesArray = getDescendingNamesArray(namesArray);
    console.log(descendingNamesArray);
}

logPlayersNameDescending();



/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals 
 * Output example -> Goals per match: 2.19
 */

// Your code

// REFACTOR data naming
const getArrayOfScoringChance = (playersData) => {
    return playersData.map((player) => parseInt(player.scoringChance))
}

const getAverageGoalsPerMatch = (playersData) => {
    const scoringChanceArray = getArrayOfScoringChance(playersData);
    return scoringChanceArray.reduce((a, b) => a + b, 0) / 100;
}

const logAverageGoalPerMatch = () => {
    const averageGoalPerMatch = getAverageGoalsPerMatch(playersData)
    console.log('Average goals per match: ' + averageGoalPerMatch)
}

logAverageGoalPerMatch();

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code
// REFACTOR to thing about multiple players with the same name 
// try to make it moduler/sinlge responsibility
const getPlayerPosition = (playersList, playerName) => {
    const player = playersList.filter(player => player.name === playerName)[0];
    if (player) {
        console.log(`${playerName}'s position is ${player.position}`);   
    } else {
        console.log('Players name doesn\'t exist in the given list')
    }
}

getPlayerPosition(playersData, 'Florin');
getPlayerPosition(playersData, 'Daniel');

/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance. 
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code

// get the number of players in the list to determine if they can be split equally
// create a random num generator between numbers
// taking rounds between team A and B using the random generator pick a random player
// using previous averageGoalPerMatch function to calculate each teams possible score rounded to the closest int
// log the final match score out 