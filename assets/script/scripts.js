/*Characters*/
let avatarSelection = {
    avatarOne: {
        profilePic: 'assets/images/avatars/avatar-1/hero-avatar-1-profile-picture.webp',
        idle: 'assets/images/avatars/avatar-1/hero-avatar-1-idle.gif',
        attack: 'assets/images/avatars/avatar-1/hero-avatar-1-attack.gif',
        killed: '',
    },

    avatarTwo: {
        profilePic: 'assets/images/avatars/avatar-2/hero-avatar-2-profile-picture.webp',
        idle: 'assets/images/avatars/avatar-2/hero-avatar-2-idle.gif',
        attack: 'assets/images/avatars/avatar-2/hero-avatar-2-attack.gif',
        killed: '',
    },
};

/*Hero*/

/***
* hero variable that stores stats
*/
let hero = {
    name: '',
    avatar: "",
    inventory: {
        itemOne: {
            name: 'some magic metal',
            hasItem: false,
            itemImg: 'assets/images/items/itemOne.webp',
        },
        itemTwo: {
            name: 'some mysterious liquid',
            hasItem: false,
            itemImg: 'assets/images/items/itemTwo.webp',
        },
        itemThree: {
            name: 'item3',
            hasItem: false,
            itemImg: '',
            multiplierApplied: false,
        },

    },
    stats: {
        damage: {
            damageLow: 10,
            damageHigh: 50,
        },
        lifePoints: 50,
        reputation: 100,
    },
    status: {
        idle: '',
        attack: '',

    },
    Xposition: '210',
    Yposition: '120',
};

let initialHeroLifePoints = hero.stats.lifePoints;

/*NPCs*/

let npcOne = {
    name: 'The Ugly Gremlin',
    avatar: {
        avatarMap: 'assets/images/avatars/npc-1/npc-1.gif',
        avatarProfile: 'assets/images/avatars/npc-1/npc-1.gif'
    },
    Xposition: '65',
    Yposition: '130',
    radius: 40,
    conversation: {
        sentenceOne: 'Hello',
        sentenceTwo: `Are you looking for ${hero.inventory.itemOne.name}?`,
        sentenceThree: 'It is yours now. Farewell!',
        sentenceFour: 'Farewell then!',
        sentenceFive: 'I already gave you everything I had.',
    },
    stats: {
        damage: {
            damageLow: 1,
            damageHigh: 5,
        },
        lifePoints: 50,
        reputation: 50,
        alive: true,
    },
    hasItem: true,
};

let npcTwo = {
    name: 'The Pirate',
    avatar: {
        avatarMap: 'assets/images/avatars/npc-2/npc-2-idle.gif',
        avatarProfile: 'assets/images/avatars/npc-2/npc-2-idle.gif'
    },
    Xposition: '90',
    Yposition: '210',
    radius: 40,
    conversation: {
        sentenceOne: 'Hi',
        sentenceTwo: `Are you looking for ${hero.inventory.itemTwo.name}?`,
        sentenceThree: 'It is yours now. Farewell!',
        sentenceFour: 'Farewell then!',
        sentenceFive: 'I already gave you everything I had.',
    },
    stats: {
        damage: {
            damageLow: 1,
            damageHigh: 5,
        },
        lifePoints: 50,
        reputation: 50,
        alive: true,
    },
    hasItem: true,
};

let npcThree = {
    name: 'The Mage',
    avatar: {
        avatarMap: 'assets/images/avatars/npc-3/npc-3-idle.gif',
        avatarProfile: 'assets/images/avatars/npc-3/npc-3-idle.gif',
        avatarAttack: 'assets/images/avatars/npc-3/npc-3-attack.gif',
    },
    Xposition: '250',
    Yposition: '120',
    radius: 40,
    conversation: {
        sentenceOne: 'I see you have what I asked.',
        sentenceTwo: 'Give these to me, and I will make you stronger',
        sentenceThree: 'You are now ready for battle. Farewell',
        sentenceFour: 'Come back, if you change your mind.',
        sentenceFive: `Go on ${hero.name}, time to face your enemy.`,
        sentenceSix: `Bring me ${hero.inventory.itemOne.name} and ${hero.inventory.itemTwo.name}, I will make you strong.`,
    },
    stats: {
        damage: {
            damageLow: 100,
            damageHigh: 500,
        },
        lifePoints: 500,
        reputation: 250,
        alive: true,
    },
    hasItem: true,


};

let npcFour = {
    name: 'The Boss',
    avatar: {
        avatarMap: 'assets/images/avatars/npc-4/npc-4-idle.gif',
        avatarProfile: 'assets/images/avatars/npc-4/npc-4-idle.gif',
        avatarAttack: 'assets/images/avatars/npc-4/npc-4-attack.gif',
    },
    Xposition: '130',
    Yposition: '75',
    radius: 40,
    conversation: {
        sentenceOne: 'My next victim, ',
        sentenceTwo: 'Are you here to avenge your friends?',
        sentenceThree: 'Show me what you have!',
        sentenceFour: 'Ha ha! Here goes the hero!',
        sentenceFive: ``,
        sentenceSix: ``,
    },
    stats: {
        damage: {
            damageLow: 25,
            damageHigh: 60,
        },
        lifePoints: 110,
        reputation: 0,
        alive: true,
    },
    hasItem: true,


};

/***
 * defines avatar img on map once dead
 */
let deadNPCAvatar = 'assets/images/avatars/dead-npc.jpg';

/**
*global variable used to identify current NPC involved in action
*/
let currentNPC;

/*Quest*/
let quest = {
    missionOne: {
        completed: false,
        mission: `Collect ${hero.inventory.itemOne.name}`,
    },
    missionTwo: {
        completed: false,
        mission: `Collect ${hero.inventory.itemTwo.name}`,
    },
    missionThree: {
        completed: false,
        mission: `Talk to ${npcThree.name}`,
    },
    missionFour: {
        completed: false,
        mission: `Eliminate the boss`,
    },
};

/*Intro Text & Images*/
let introSequences = {
    sequenceOne: {
        text: 'There is a new baddie in town.',
        image: npcFour.avatar.avatarProfile,
    },
    sequenceTwo: {
        text: 'He attacked the village, and you want to impress your mom.',
        image: npcFour.avatar.avatarProfile,
    },
    sequenceThree: {
        text: 'As a typical hero, you think this is your moment.',
        image: npcFour.avatar.avatarProfile,
    },
    sequenceFour: {
        text: 'However, you know you are not strong enough.',
        image: npcFour.avatar.avatarProfile,
    },
    sequenceFive: {
        text: 'Luckily, there is a mage in the village.',
        image: npcThree.avatar.avatarProfile,
    },
    sequenceSix: {
        text: `He promises to make your strong, if you bring him ${hero.inventory.itemOne.name} and ${hero.inventory.itemTwo.name}.`,
        image: npcThree.avatar.avatarProfile,
    },
    sequenceSeven: {
        text: 'You know what to do now. Go make your mom proud.',
        image: npcThree.avatar.avatarProfile,
    },

};

let sequenceIndex = 0;
let sequencesArray = Object.values(introSequences);

/*Event management*/

/**
*Manages events and screen display
*/
$(document).ready(function () {

    updateScreen(); // Update screen based on initial state

    // This section covers the submit button for #hero-decision
    //when the user clicks, the decision is validated:
    //if clicked No (2) then the div disapears
    // if clicked yes (1), the rest of the logic is dealt by other function
    $('#submit-answer-button').click(function () {
        // Get variable in #hero-decision 
        let decision = $('#hero-decision').val();

        // Check if the selected option is "No" (2)
        if (decision === '2') {
            // Hide the validation screen
            $('.validation-screen-div').hide();
            grayScaleOff();
            enableClickDiv();
        } else if (decision === '1') {
            // Value 1 has been selected and the conversation function can start

            $('.validation-screen-div').hide();
            enableClickDiv();

            npcConversation(hero, currentNPC);
        } else if (decision === '3') {
            // !!! this needs to be changed to handle which npc is conversation is redirected to:
            $('.validation-screen-div').hide();
            enableClickDiv();
            fight(hero, currentNPC);
        }
    });

    /**
    *This section cover the submit button for #submit-question-answer-button
    */
    $('#submit-question-answer-button').click(function () {
        let decision = $('input[name="hero-answer"]:checked').val();

        $('.hero-text-col').css('display', 'none');
        //npcOneConversation(hero, npcOne, decision)
        npcConversation(hero, currentNPC, decision);


    });

    /**
    *This section updates the sequences in .mission-intro-screen-div
    */
    updateSequence();

    $('.close-intro-button').click(function () {
        sequenceIndex++;
        if (sequenceIndex < sequencesArray.length) {
            updateSequence();
        } else {
            //close div and show second screen div
            $('.mission-intro-screen-div').css('display', 'none');
            $('.second-screen-div').css('display', 'flex').css('filter', 'grayscale(0)');
            enableClickDiv();
        }
    });


    $('#restart-game').click(function () {
        location.reload();
    });
    $('#restart-game-in-game-button').click(function () {
        location.reload();
    });
});

/*Game Ending Management*/

/**
*gameover function. user is presented a button to restart game from beginning.
*/
function gameOver(origin) {

    $('.fight-screen-div').hide();
    $('.restart-game-div').show();

    if (origin === 'npcDefeated') {

        let heroReputation = hero.stats.reputation;

        $('#ending-h2').append('Congratulations!');

        //if hero reputation is more than 75
        if (heroReputation === 100) {

            $('#game-ending-comment').append('You defeated the boss. Your mom is proud.');

        } else if (heroReputation >= 50) {

            $('#game-ending-comment').append('You defeated the boss. Your mom is proud... Care to explain why you killed that NPC???');

        } else {
            $('#game-ending-comment').append("You defeated the boss... that's a lot of tomstones in the village. Your mom is concerned.");
        }


    } else if (origin === 'heroDefeated') {
        $('#ending-h2').append('What a loser!');
        $('#game-ending-comment').append("Your mom says she doesn't know you. The village is not proud.");
    }
}


/**
* Function to update screen based on hero's progress
*/
function updateScreen() {
    if (hero.name === '' && hero.avatar === '') {
        $('.first-screen-div').css('display', 'flex');
        $('.second-screen-div').hide();
    } else {
        $('.first-screen-div').hide();

        $('.mission-intro-screen-div').css('display', 'flex');

        if ($('.mission-intro-screen-div').css('display') === 'flex') {
            disableClickDiv();
            $('.second-screen-div').css('display', 'flex').css('filter', 'grayscale(1)');
        }
    }
}

/*Credits - https://stackoverflow.com/questions/44152202/how-to-disable-click-outside-a-particular-div*/
/**
*Makes clicking outside pop up div impossible by adding a div between pop up and background screen.
*/
function disableClickDiv() {
    $('.clicks-disabled').show();
    $('#restart-game-in-game-button').hide();
}


/**
*Makes clicking outside pop up div impossible by adding a div between pop up and background screen.
*/
function enableClickDiv() {
    $('.clicks-disabled').hide();
    $('#restart-game-in-game-button').show();

}


/***
 * Validation function: when the hero is asked to do something (Yes Or No)
 * parameter `decisionOrigin` allows function to be called by other function
 *the if statement processes the call differently based on the function that call it
 */
function heroDecisionValidation(decisionOrigin, currentNPC) {
    //when user is in range of npc (if)
    //when user click on `let npcOnePositionClick`
    //first panel appears to ask user to confirm if they want to start conversation

    if (decisionOrigin === 'heroPosition') {

        disableClickDiv();
        grayScaleOn();
        $('.validation-screen-div').css('display', 'flex');
        $('#hero-decision').val();


    } else if (decisionOrigin === 'npcOneConversation') {
        $('.conv-validation-container').css('display', 'inline-grid');
        $('input[name="hero-answer"]:checked').val();
        $('.hero-text-col').css('display', 'none');

    }
}

/*Events*/

/*First Screen*/

//sets avatar1 as default choice.
$('#avatar1').prop('checked', true);

/**
* Creates hero name + avatar
*/
function createHero(event) {
    let heroName = $('#hero-name').val();
    let heroAvatar = $('input[name="hero-avatar"]:checked').val();

    hero.name = heroName;

    if (heroName === '') {
        $('#name-alert').text('Please enter a name for your hero.');

        return; // Exit the function if the hero name is not provided
    }

    if (heroAvatar === 'avatarOne') {
        hero.avatar = avatarSelection.avatarOne.profilePic;
        hero.status.idle = avatarSelection.avatarOne.idle;
        hero.status.attack = avatarSelection.avatarOne.attack;
    } else if (heroAvatar === 'avatarTwo') {
        hero.avatar = avatarSelection.avatarTwo.profilePic;
        hero.status.idle = avatarSelection.avatarTwo.idle;
        hero.status.attack = avatarSelection.avatarTwo.attack;
    }

    if (heroName !== '' && typeof heroAvatar !== 'undefined') {

        screenTwoGeneral(hero);
        updateScreen();
    }
}

/* Mission Introduction Screen */

/**
*Manages the display of messages and images during intro
*/
function updateSequence() {
    if (sequenceIndex < sequencesArray.length) {
        $('#mission-intro-text').text(sequencesArray[sequenceIndex].text);
        $('#mission-intro-img').attr('src', sequencesArray[sequenceIndex].image);
        if (sequenceIndex === 6) {
            $('#close-intro-button-text').text('Close');
        } else {
            $('#close-intro-button-text').text('Next');
        }
    }
}

/*Second Screen*/

/*General*/

/**
* Sets elements on screen when hero starts
*/
function screenTwoGeneral(hero, currentNPC) {
    //activate questProgress()
    questProgress(hero);

    //Advise hero on next mission to complete quest
    questNextAction(quest);

    //positions h1
    $('#mission-title').text(`${hero.name}'s epic adventure`);

    //positions hero avatar image
    $('#hero-avatar-selected').attr('src', hero.avatar);

    //sets intial hero life points
    let heroLifePoints = hero.stats.lifePoints;


    //calculate hero life points
    $('#life-points').text(heroLifePoints);

    //sets initial hero reputation
    $('#reputation-points').text(hero.stats.reputation);

    //sets styling of items in inventory
    //itemOne
    $('#item-one-img').attr('src', `${hero.inventory.itemOne.itemImg}`);
    if (hero.inventory.itemOne.hasItem == false) {
        $('#item-one-img').css('filter', 'grayscale(1)');
    } else {
        $('#item-one-img').css('filter', 'grayscale(0)');
    }
    //itemTwo
    $('#item-two-img').attr('src', `${hero.inventory.itemTwo.itemImg}`);
    if (hero.inventory.itemTwo.hasItem == false) {
        $('#item-two-img').css('filter', 'grayscale(1)');
    } else {
        $('#item-two-img').css('filter', 'grayscale(0)');
    }

    //itemThree
    if (hero.inventory.itemThree.hasItem == true) {
        $('#has-item-three').css('display', 'flex');
    }

    //positions NPCs + clickable area
    //npcOne
    //npcOne - clickable area          
    npcOneClicked = false;
    $('#npcOne-position-avatar-image').click(function (event) {
        //checks if npc is dead or alive
        //if dead the functions are not triggered
        if (npcOne.stats.alive == true && !npcOneClicked) {

            npcOneClicked = true;
            heroPosition(event, npcOne);

        }
    }
    );


    //npcOne - avatar img position on map
    $('#npcOne-position-avatar-image').
        css({ left: npcOne.Xposition + "px", top: npcOne.Yposition + "px" });

    //npcTwo
    //npcTwo - clickable area          
    npcTwoClicked = false;
    $('#npcTwo-position-avatar-image').click(function (event) {
        //checks if npc is dead or alive
        //if dead the functions are not triggered
        if (npcTwo.stats.alive == true && !npcTwoClicked) {

            npcTwoClicked = true;
            heroPosition(event, npcTwo);

        }
    }
    );


    //npcTwo - avatar img position on map
    $('#npcTwo-position-avatar-image').
        css({ left: npcTwo.Xposition + "px", top: npcTwo.Yposition + "px" });


    //npcThree
    //npcThree - clickable area          
    npcThreeClicked = false;
    $('#npcThree-position-avatar-image').click(function (event) {
        //checks if npc is dead or alive
        //if dead the functions are not triggered
        if (npcThree.stats.alive == true && !npcThreeClicked) {

            npcThreeClicked = true;
            heroPosition(event, npcThree);

        }
    }
    );


    //npcThree - avatar img position on map
    $('#npcThree-position-avatar-image').
        css({ left: npcThree.Xposition + "px", top: npcThree.Yposition + "px" });


    //npcFour
    //npcFour - clickable area          
    npcFourClicked = false;
    $('#npcFour-position-avatar-image').click(function (event) {
        //checks if npc is dead or alive
        //if dead the functions are not triggered
        if (npcFour.stats.alive == true && !npcFourClicked) {

            npcFourClicked = true;
            heroPosition(event, npcFour);

        }
    }
    );

    //npcFour - avatar img position on map
    $('#npcFour-position-avatar-image').
        css({ left: npcFour.Xposition + "px", top: npcFour.Yposition + "px" });

    //positions hero
    //hero - avatar img position on map
    $('#hero-position-avatar-image').
        css({ left: hero.Xposition + "px", top: hero.Yposition + "px", }).attr('src', hero.avatar);

}

/**
*Sets grayscale to 100% when hero talks to npc
*/
function grayScaleOn() {
    $('.second-screen-div').css('filter', 'grayscale(100%)');
}


/**
*Sets grayscale to 0 when hero goes back to .second-screen-div
*/
function grayScaleOff() {
    $('.second-screen-div').css('filter', 'grayscale(0)');
}

/*Intro */

/**
*Hero's position on screen
*/
function heroPosition(event, npc) {
    //log npc argument
    currentNPC = npc;

    //define new position based on npc position
    let newHeroXPosition = currentNPC.Xposition;

    let newHeroYPosition = currentNPC.Yposition;

    //caupture current hero position    
    let heroXPositionCurrent = hero.Xposition;

    let heroYPositionCurrent = hero.Yposition;

    //create variable to generate space between npc and hero
    let npcHeroDistance = 50;

    //calculate distance between current to new position in pixels
    //and deduct {npcHeroDistance} left to avoid two images being on top of each other
    let xDistance = newHeroXPosition - heroXPositionCurrent - npcHeroDistance;
    let yDistance = newHeroYPosition - heroYPositionCurrent;

    //animation from old to new position
    $("#hero-position-avatar-image").animate({
        left: `+=${xDistance}px`,
        top: `+=${yDistance}px`,
    }, 1000, function () {
        //update hero position object position
        //and deduct {npcHeroDistance} left to avoid two images being on top of each other
        hero.Xposition = newHeroXPosition - npcHeroDistance;
        hero.Yposition = newHeroYPosition;

        heroDecisionValidation('heroPosition', currentNPC);

        screenTwoGeneral(hero, currentNPC);
    });
}

/*Quest*/

/**
*Manages Quest Completion Progress Bar
*/
function questProgress(hero) {

    //identify how many steps to complete the question

    let heroQuest = Object.keys(quest).length;

    //calculate how many have been completed

    //sets if mission is completed or not
    if (hero.inventory.itemOne.hasItem == true) {
        quest.missionOne.completed = true;
    }

    if (hero.inventory.itemTwo.hasItem == true) {
        quest.missionTwo.completed = true;
    }

    if (hero.inventory.itemThree.hasItem == true) {
        quest.missionThree.completed = true;
        quest.missionOne.completed = true;
        quest.missionTwo.completed = true;
    }

    /***
     * calculates how many missions are true
     */
    let count = 0;

    for (let key in quest) {
        if (quest.hasOwnProperty(key) && quest[key].completed) {
            count++;
        }

    }

    /***
    *calculate how much these completed steps account has part of the quest Completion
    *convert number in %
    */
    let completion = (count / heroQuest) * 100;

    //Update #quest-progress with completion variable result
    $('#quest-progress').css('width', completion + '%');
}


/**
*Manages display message of next mission to hero to complete quest
*/
function questNextAction(quest) {

    //loops through quest object to extract all mission
    for (const nextAction in quest) {

        //extract each mission with quest object
        if (quest.hasOwnProperty(nextAction)) {

            //logs mission list
            //extract first mission that is false ( still to be completed)
            if (quest[nextAction].completed == false) {

                //append first mission  that is not completed (false) in list to #next-action
                $('#next-action').text(`Next Mission: ${quest[nextAction].mission}`);

                break;

            }
        }
    }
}



/*Mission 1 & 2*/
/**
*When user click on location, a conversation starts
*/
function npcConversation(hero, currentNPC, decision) {

    //set up conversation div
    $('.conversation-screen-div').css('display', 'flex');
    $('.second-screen-div').hide();
    $('.hero-text-col').css('display', 'none');

    //set up rows and cols content for hero and npc
    //hero
    $('#hero-img').attr('src', `${hero.avatar}`);


    //npc
    $('#npc-img').attr('src', `${currentNPC.avatar.avatarProfile}`);
    $('#npc-text').text(`${currentNPC.conversation.sentenceOne} ${hero.name}!`);

    //checks which npc the hero is talking to
    //if npc is npcOne or npcTwo 
    if (currentNPC.hasItem == false) {
        //note: could make code drying by placing this better, but cannot see where.
        $('.hero-text-col').css('display', 'none');

        $('#npc-text').text(`${currentNPC.conversation.sentenceFive}`);
        setTimeout(function () {
            $('.conversation-screen-div').hide();
            $('.second-screen-div').css('display', 'flex');
            $('.validation-screen-div').hide();
            grayScaleOff();
        }, 2500);

    }
    //if hero does not have itemOne and itemTwo and currentNPC is npcThree
    else if ((hero.inventory.itemOne.hasItem === false || hero.inventory.itemTwo.hasItem === false) &&
        currentNPC === npcThree) {
        $('.hero-text-col').css('display', 'none');
        $('#npc-text').text(`${currentNPC.conversation.sentenceSix}`);
        setTimeout(function () {
            $('.conversation-screen-div').hide();
            $('.second-screen-div').css('display', 'flex');
            $('.validation-screen-div').hide();
            grayScaleOff();
        }, 5000);
    }



    //handles conversation with npc for hero to recieve object
    //if hero talks to npcOne and npcTwo and npc has item
    //Or
    //if f hero talks to npcThree and npc has item and hero has itemOne and itemTwo
    else if (currentNPC.hasItem == true) {

        //displays loop of sentences from npc
        for (const sentence in currentNPC.conversation) {


            if (currentNPC.conversation.hasOwnProperty(sentence)) {

                //create sentence number variable: sentenceNum
                let sentenceNum = currentNPC.conversation[sentence];

                //if sentenceNum is 1
                if (sentenceNum == currentNPC.conversation.sentenceOne) {

                    //hero clicks next to progress to next part sentence 2
                    $('#npc-text').text(`${currentNPC.conversation.sentenceOne} ${hero.name}!`).delay(1500).hide(function () {
                        $('#npc-text').text(`${currentNPC.conversation.sentenceTwo}`).delay('fast').show(function () {
                            $('.hero-text-col').css('display', 'inline-grid');
                        });
                    });

                    // if sentenceNum is 2
                } else if (sentenceNum == currentNPC.conversation.sentenceTwo) {

                    // hero is presented a yes or no question
                    heroDecisionValidation('npcConversation', currentNPC);

                } else {
                    if (decision === '1') {
                        //sentenceThree appears
                        $('#npc-text').text(`${currentNPC.conversation.sentenceThree}`);
                        setTimeout(function () {
                            $('.conversation-screen-div').hide(function () {
                                if (currentNPC === npcFour) {
                                    fight(hero, currentNPC);
                                } else {
                                    $('.second-screen-div').css('display', 'flex');
                                }
                            });
                        }, 2000);


                        //add item to hero object logic
                        if (currentNPC === npcOne) {
                            hero.inventory.itemOne.hasItem = true;
                            currentNPC.hasItem = false;
                        } else if (currentNPC === npcTwo) {
                            hero.inventory.itemTwo.hasItem = true;
                            currentNPC.hasItem = false;
                        } else if (currentNPC === npcThree) {
                            hero.inventory.itemOne.hasItem = false;
                            hero.inventory.itemTwo.hasItem = false;
                            hero.inventory.itemThree.hasItem = true;
                            currentNPC.hasItem = false;

                            //applies multplier logic
                            //increase hero life point by *2 to fight boss
                            if (hero.inventory.itemThree.multiplierApplied == false) {
                                hero.stats.lifePoints = hero.stats.lifePoints * 2;
                                hero.inventory.itemThree.multiplierApplied = true;
                            }

                        }

                        $('.hero-text-col').css('display', 'none');
                        grayScaleOff();
                        screenTwoGeneral(hero, currentNPC);
                    }
                    else if (decision === '2') {

                        //sentenceThree appears
                        $('#npc-text').text(`${currentNPC.conversation.sentenceFour}`);
                        grayScaleOff();
                        setTimeout(function () {
                            $('.conversation-screen-div').hide(function () {
                                $('.second-screen-div').css('display', 'flex');
                            });
                        }, 2000);

                    }
                }

            }

        }

    }
}


/*Boss Fight*/

/**
*Add life points to hero
*/
function healing(hero, currentNPC) {

    //font-end management

    //hides submit button to give impression of turn based fight
    $('.action-validation-container').hide();
    let healingPoints = 25;
    return healingPoints;
}

/**
*Reduce life points to opponent
*/
function attack(hero, currentNPC) {

    //define new hero img to be displayed witing #hero-avatar-fight
    let heroAttackImg = hero.status.attack;

    //font-end management
    //set #hero-avatar-fight to attack status
    $('#hero-avatar-fight').attr('src', `${heroAttackImg}`);

    //hides submit button to give impression of turn based fight
    $('.action-validation-container').hide();

    //creates red layer on #npc-avatar-fight to show damage
    $('#npc-avatar-fight').css('background-color', 'red');

    //defines multiplier of damages if hero has itemThree or not
    let damageMultiplier = 1;

    if (hero.inventory.itemThree.hasItem == true) {
        damageMultiplier = 2;
    }

    let heroMaxDamage = hero.stats.damage.damageHigh * damageMultiplier;

    let heroLowDamage = hero.stats.damage.damageLow * damageMultiplier;

    let attackDamage = Math.floor(Math.random() * (heroMaxDamage - heroLowDamage + 1)) + heroLowDamage;


    return attackDamage;
}

/**
*Main function managing fight phase
*/
function fight(hero, currentNPC) {

    $('.fight-screen-div').css('display', 'flex');
    $('.second-screen-div').hide();
    //the below section reset is needed for a second fight
    //it resets the message boxes to empty
    //and move all id and classes moved to hide by to show() from npcDefeated()
    $('.life-bar').show();
    $('#npc-life-point-label').show();
    $('.action-validation-container').show();
    $('#fight-comment-1').text('');
    $('#fight-comment-2').text('');
    $('#fight-comment-3').text('');

    let lifeMultiplier = 1;

    if (hero.inventory.itemThree.hasItem == true) {
        lifeMultiplier = 2;
    }

    /**
    *define hero life points left in % of full bar length
    */
    let heroLifePoints = hero.stats.lifePoints;

    let heroLifePointsInPercentage = (heroLifePoints / (initialHeroLifePoints * lifeMultiplier)) * 100;

    $('#hero-life-points').css('width', heroLifePointsInPercentage + '%');

    //NPC
    /**
    *define npc life points left in % of full bar length
    */
    let npcLifePoints = currentNPC.stats.lifePoints;

    let npcLifePointsInPercentage = (currentNPC.stats.lifePoints / currentNPC.stats.lifePoints) * 100;

    $('#npc-life-points').css('width', npcLifePointsInPercentage + '%');

    //set avatar images in avatar boxes
    //Hero
    $('#hero-avatar-fight').attr('src', `${hero.status.idle}`);
    //NPC
    $('#npc-avatar-fight').attr('src', `${currentNPC.avatar.avatarMap}`);

    //hero's turn
    //select value between attack and heal
    $('#submit-hero-action-button').off('click').on('click', function () {

        let action = $('input[name="hero-fight-action"]:checked').val();


        if (action == '1') {
            //if attack is selected
            //play attack function
            const heroDamage = attack(hero, currentNPC);

            //describe attack in #comment-fight
            commentFightAppend(`${hero.name} hits with ${heroDamage} damages.`);

            //sets background to red
            setTimeout(function () {
                $('#npc-avatar-fight').css('background-color', '');
            }, 500);

            setTimeout(function () {
                //reverts img back to idl status after 1 second
                $('#hero-avatar-fight').attr('src', `${hero.status.idle}`);

                //shows submit button to give impression of turn based fight
                $('.action-validation-container').show();

                //reduce npc hp in actual points
                npcLifePoints = npcLifePoints - heroDamage;

                //reduce npc hps in %of initial bar length
                npcLifePointsInPercentage = (npcLifePoints / currentNPC.stats.lifePoints) * 100;

                $('#npc-life-points').css('width', npcLifePointsInPercentage + '%');

                if (npcLifePoints > 0) {
                    //updates heroLifePoints after the npcTurn
                    heroLifePoints = npcTurn(hero, currentNPC, heroLifePoints);
                } else {
                    //documentation: https://api.jquery.com/off/
                    //reset currentNPC for next fight
                    $('#submit-hero-action-button').off('click');

                    //npcOneDefeated(hero, heroLifePoints)
                    npcDefeated(hero, heroLifePoints);
                }
            }, 1500);

        } else if (action == '2') {
            //if heal is selected
            //play heal function
            const heroHeal = healing(hero, currentNPC);

            //increase hero hp
            heroLifePoints = heroLifePoints + heroHeal;

            //describe heal points recieved in #comment-fight
            commentFightAppend(`${hero.name} gains ${heroHeal} life points.`);

            //limits HP increase to character's max life    
            if (heroLifePoints > initialHeroLifePoints * lifeMultiplier) {
                heroLifePoints = initialHeroLifePoints * lifeMultiplier;
            }

            //define remaing life points after attack in % of initial lifebar width
            let heroLifePointsInPercentage = (heroLifePoints / (initialHeroLifePoints * lifeMultiplier)) * 100;
            $('#hero-life-points').css('width', heroLifePointsInPercentage + '%');

            //sets delay between points being added and the NPC turn to show the life bar going up
            setTimeout(function () {
                $('#hero-life-points').css(('width', heroLifePointsInPercentage + '%'), function () {

                    //updates heroLifePoints after the npcTurn
                    heroLifePoints = npcTurn(hero, currentNPC, heroLifePoints);
                    $('.action-validation-container').show();
                });
            }, 1000);
        }

    });

}

/**
*Manages npc's turn during fight phase
*/
function npcTurn(hero, currentNPC, heroLifePoints) {

    let npcMaxDamage = currentNPC.stats.damage.damageHigh;
    let npcLowDamage = currentNPC.stats.damage.damageLow;
    //define NPC damages     
    let npcDamage = Math.floor(Math.random() * (npcMaxDamage - npcLowDamage + 1)) + npcLowDamage;

    //define current npc idle img displayed witing #hero-avatar-fight
    let npcIdleImg = currentNPC.avatar.avatarProfile;

    //define new npc img to be displayed witing #hero-avatar-fight
    let npcAttackImg = currentNPC.avatar.avatarAttack;

    //create specific rule: if current npc has `avatarAttack` (animated gif of npc attacking is available)
    if (currentNPC?.avatar?.avatarAttack) {
        //font-end management
        //set #npc-avatar-fight to attack status
        $('#npc-avatar-fight').attr('src', `${npcAttackImg}`);

        //hides submit button to give impression of turn based fight
        $('.action-validation-container').hide();



        //attack animation
        setTimeout(function () {
            //reverts img back to idl status after 1 second
            $('#npc-avatar-fight').attr('src', `${npcIdleImg}`);

            $('.action-validation-container').show();

        }, 1500);
    }


    //update hero's life points
    //define multiplier
    let lifeMultiplier = 1;

    if (hero.inventory.itemThree.hasItem == true) {
        lifeMultiplier = 2;
    }

    //define remaining life points after attack
    heroLifePoints = heroLifePoints - npcDamage;

    //define remaing life points after attack in % of initial lifebar width
    let heroLifePointsInPercentage = (heroLifePoints / (initialHeroLifePoints * lifeMultiplier)) * 100;
    $('#hero-life-points').css('width', heroLifePointsInPercentage + '%');

    //describe attack in #comment-fight
    commentFightAppend(`${currentNPC.name} hits with ${npcDamage} damage. You have ${heroLifePoints} life points left.`);

    if (heroLifePoints <= 0) {
        setTimeout(function () {
            //transforms hero img in tombstone before redirection to gameOver()
            $('#hero-avatar-fight').attr('src', deadNPCAvatar);
            $('.action-validation-container').hide();
            //creates delay after hero is defeated for user to see life bar going to 0
            setTimeout(function () {
                gameOver('heroDefeated');
            }, 1000);
        }, 1500);
    }


    return heroLifePoints;
}

/**
*Manages result of NPC being defeated after fight()
*/
function npcDefeated(hero, heroLifePoints) {


    //empty comment section
    $('#fight-comment-1').text('');
    $('#fight-comment-2').text('');
    $('#fight-comment-3').text('');

    // add item to inventory (turn item to true)
    $('#fight-comment-1').append(`${currentNPC.name} has been defeated!`);

    //changes avatar picture for tombstone
    if (currentNPC === npcOne) {
        // add item to inventory (turn item to true)
        if (currentNPC.hasItem == true) {
            hero.inventory.itemOne.hasItem = true;
            $('#fight-comment-2').append(`You just recieved ${hero.inventory.itemOne.name}`);
            currentNPC.hasItem = false;
        }

        $('#npcOne-position-avatar-image').css('content', `url(${deadNPCAvatar})`);
    }

    if (currentNPC === npcTwo) {
        // add item to inventory (turn item to true)
        if (currentNPC.hasItem == true) {
            hero.inventory.itemTwo.hasItem = true;
            $('#fight-comment-2').append(`You just recieved ${hero.inventory.itemTwo.name}`);
            currentNPC.hasItem = false;
        }

        $('#npcTwo-position-avatar-image').css('content', `url(${deadNPCAvatar})`);
    }

    if (currentNPC === npcThree) {
        // add item to inventory (turn item to true)
        if (currentNPC.hasItem == true) {
            hero.inventory.itemThree.hasItem = true;
            $('#fight-comment-2').append(`You just recieved ${hero.inventory.itemThree.name}`);
            currentNPC.hasItem = false;
        }

        $('#npcThree-position-avatar-image').css('content', `url(${deadNPCAvatar})`);
    }


    //reduce reputation points

    hero.stats.reputation -= currentNPC.stats.reputation;

    hero.stats.lifePoints = heroLifePoints;

    //sets npc alive to false
    currentNPC.stats.alive = false;

    //change npc avatar to tombstone and hide life bar + label
    $('#npc-avatar-fight').attr('src', 'assets/images/avatars/dead-npc.jpg');
    $('.life-bar').hide();
    $('#npc-life-point-label').hide();
    $('.action-validation-container').css('display', 'none');

    grayScaleOff();
    if (currentNPC === npcFour) {
        gameOver('npcDefeated');
        // gameEnding(hero)

    } else {
        //bring user back to screen two after 2 seconds
        setTimeout(function () {
            $('.fight-screen-div').hide(function () {
                $('.second-screen-div').css('display', 'flex');
            });
        }, 5000);

        screenTwoGeneral(hero, currentNPC);
    }


}

/**
*Caps the number of fight coments to 3.
*/
function commentFightAppend(message) {
    let comment1 = $('#fight-comment-1');
    let comment2 = $('#fight-comment-2');
    let comment3 = $('#fight-comment-3');

    if (comment1.text() === '') {
        comment1.text(message);
    } else if (comment2.text() === '') {
        comment2.text(message);

    } else if (comment3.text() === '') {
        comment3.text(message);
    } else {
        //move from fight-comment-2 to fight-comment-1
        comment1.text(comment2.text());

        //move from fight-comment-3 to fight-comment-2
        comment2.text(comment3.text());

        //add new comment
        comment3.text(message);
    }
}
