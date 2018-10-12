

var characters = {
    "wizard": { name: "Wizard", image: '<img src="assets/images/hero_wizard.png">', health: 80, attack: 30, counterAttack: 10 },
    "paladin": { name: "Paladin", image: '<img src="assets/images/hero_paladin.png">', health: 200, attack: 10, counterAttack: 10 },
    "bard": { name: "Bard", image: '<img src="assets/images/hero_bard.png">', health: 150, attack: 15, counterAttack: 10 },
    "warrior": { name: "Warrior", image: '<img src="assets/images/hero_warrior.png">', health: 100, attack: 25, counterAttack: 10 }
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
    console.log($(this).attr('id') );
debugger;
    //if (playerSet == false) {
    //    for (var i =0; i < characters.length; i++) {
    //        if (characters[i] == this) {
    //            $('.playerarea').append(characters[i]);
    //            playerSet = true;
    //        }
    //    }
    //}
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