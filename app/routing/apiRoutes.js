const friends = require("../data/friends.js");

module.exports = (app) => {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        var totalDifference = 0;
    
        var bestMatch = {
          name: "",
          photo: "",
          friendDifference: 1000
        };
    
        var userData = req.body;
        console.log("userData(api 19):"+ userData);
        var userName = userData.name;
        console.log("userName(api 21):"+ userName);
        var userScores = userData.scores;
        console.log("userScores(api 23):"+ userScores);
    
        var b = userScores.map((item) => {
          return parseInt(item, 10);
        });
        userData = {
          name: req.body.name,
          photo: req.body.photo,
          scores: b
        };

        console.log("Name: " + userName);
        console.log("User score: " + userScores);

        var sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of user's score: " + sum);
        console.log("Best match friend diff: " + bestMatch.friendDifference);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Diff: " + totalDifference);
            console.log("Best match friend diff: " + bestMatch.friendDifference);

            var bestFriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score: " + bestFriendScore);
            totalDifference += Math.abs(sum - bestFriendScore);
            console.log("____________________________________>" + totalDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + " Total Difference");
        }
        console.log(bestMatch);
        friends.push(userData);
        console.log("New User Added");
        console.log(userData);
        res.json(bestMatch);
    });
};