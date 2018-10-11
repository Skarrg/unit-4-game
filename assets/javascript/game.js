

var characters = {
    "wizard": { name: "Wizard", health: 100, attack: 10, counterAttack: 10 },
    "paladin": { name: "Paladin", health: 100, attack: 10, counterAttack: 10 },
    "bard": { name: "Bard", health: 100, attack: 10, counterAttack: 10 },
    "warrior": { name: "Warrior", health: 100, attack: 10, counterAttack: 10 }
}

//global variables for refernerenenerece
var attack = 0;
var enemySet = false;
var playerSet = false;
var gameStart = false;


$(document).ready(function () {
    //start game

    //set up divs for game

    //character select
$('.character').click(function() {
    if (playerSet == false) {
        for (var i =0; i < characters.length; i++) {
            if (characters[i] == this) {
                $('#player').append(characters[i]);
                playerSet = true;
            }
        }
    }
})
    //enemy select

    //move enemy to combat

    //combat occurs

    //enemy dies

    //player dies

    //player defeats all characters

    //player character 1

    //player character 2

    //player character 3

    //player character 4
})