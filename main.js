$(document).ready(function () {

    // Hard coded fruit repository
    var quotes = ["green apple",
        "blood orange",
        "banana split",
        "grape jelly",
        "mango nada"];
    
    var oldRandom = -1;

    // Generates random index without repeating
    function randomize(){
        var newRandom = Math.floor(Math.random() * quotes.length);

        while (oldRandom === newRandom){
            newRandom = Math.floor(Math.random() * quotes.length);
            console.log("There was a collision");
            if (oldRandom !== newRandom){
                console.log("Quote: " + quotes[newRandom]);
            };
        };

        oldRandom = newRandom;
        return quotes[newRandom];
    };

    // Displays random fruit on button click, option to tweet 
    $("#random").click(function () {
        var randomQuote = randomize();
        document.getElementById("quote").innerHTML = randomQuote;

        // Tweet button only active when random button has been clicked
        var strSplit = randomQuote.split(" ");
        var quoteNoSpace = strSplit.join("%20");    // URL encoding spaces to populate tweet composer
        var strElement = "<a class=\"twitter-share-button\" href=\"https://twitter.com/intent/tweet?text=" + quoteNoSpace + "\">Tweet<\/a>";
        
        // Populate empty div with html string
        $("#tweet").html(strElement);
    });
});