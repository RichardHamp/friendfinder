//Requirements
const toons = require("../data/toons.js");

module.exports = (app) => {
  //JSON list of toons
    app.get("/api/toons", (req, res) => {
        res.json(toons);
    });

    app.post("/api/toons", (req, res) => {
        let totalDifference = 0;
    
        const bestMatch = {
          name: "",
          photo: "",
          toonDifference: 1000
        };
    
        let userData = req.body;
        let userName = userData.name;
        let userScores = userData.scores;
        let b = userScores.map((item) => {
          return parseInt(item, 10);
        });
        userData = {
          name: req.body.name,
          scores: b
        };

        //lists all toons in console with scores and difference
        console.log("----------------------------------");
        console.log("User Name: " + userName);
        console.log("User scores: " + userScores);
        console.log("----------------------------------");
        console.log("POSSIBLE CARTOON BESTIES:");
        console.log("**********************************");
        var sum = b.reduce((a, b) => a + b, 0);
        //loop through all potential cartoon friends and compare scores
        for (var i = 0; i < toons.length; i++) {
            console.log(toons[i].name);
            totalDifference = 0;
            var bestToonScore = toons[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total toon score: " + bestToonScore);
            totalDifference += Math.abs(sum - bestToonScore);
            console.log("Total Difference: " + totalDifference);
            console.log("************************************");
            if (totalDifference <= bestMatch.toonDifference) {
                bestMatch.name = toons[i].name;
                bestMatch.photo = toons[i].photo;
                bestMatch.toonDifference = totalDifference;
            }
        }
        console.log("************************************");
        console.log("BEST MATCH: " + bestMatch.name + "!!!");
        toons.push(userData);
        res.json(bestMatch);
    });
};