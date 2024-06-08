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
    //under 512 px
    Xposition: '210',
    Yposition: '120',
    //over xx px 
    // XpositionFullImage:'220',
    // YpositionFullImage:'200',
};
console.log(hero);

let initialHeroLifePoints = hero.stats.lifePoints;

/*NPCs*/

let npcOne = {
    name: 'The Ugly Gremlin',
    avatar: {
        avatarMap: 'assets/images/avatars/npc-1/npc-1.gif',
        avatarProfile: 'assets/images/avatars/npc-1/npc-1.gif'
    },

    //under 512px
    Xposition: '65',
    Yposition: '130',

    //over 512px
    // Xposition:'337',
    // Yposition:'300',
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
console.log(npcOne);

let npcTwo = {
    name: 'The Pirate',
    avatar: {
        avatarMap: 'assets/images/avatars/npc-2/npc-2-idle.gif',
        avatarProfile: 'assets/images/avatars/npc-2/npc-2-idle.gif'
    },

    //under 512px
    Xposition: '90',
    Yposition: '210',

    //over 512px
    // Xposition:'337',
    // Yposition:'300',
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
console.log(npcTwo);

let npcThree = {
    name: 'The Mage',
    avatar: {
        avatarMap: 'assets/images/avatars/npc-3/npc-3-idle.gif',
        avatarProfile: 'assets/images/avatars/npc-3/npc-3-idle.gif',
        avatarAttack: 'assets/images/avatars/npc-3/npc-3-attack.gif',
    },

    //under 512px
    Xposition: '250',
    Yposition: '120',

    //over 512px
    // Xposition:'337',
    // Yposition:'300',
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
console.log(npcThree);


let npcFour = {
    name: 'The Boss',
    avatar: {
        avatarMap: 'assets/images/avatars/npc-4/npc-4-idle.gif',
        avatarProfile: 'assets/images/avatars/npc-4/npc-4-idle.gif',
        avatarAttack: 'assets/images/avatars/npc-4/npc-4-attack.gif',
    },

    //under 512px
    Xposition: '130',
    Yposition: '75',

    //over 512px
    // Xposition:'337',
    // Yposition:'300',
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
console.log(npcFour);


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
console.log(quest);

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
            console.log('next line shows currentNPC');
            console.log(currentNPC);
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
        console.log(`hero decision is ${decision}`);
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
            console.log('arrays has ended');
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
    console.log(`origin is ${origin}`);

    if (origin === 'npcDefeated') {

        let heroReputation = hero.stats.reputation;
        console.log(`hero reputation is ${heroReputation}`);
        $('#ending-h2').append('Congratulations!');

        //if hero reputation is more than 75
        if (heroReputation === 100) {

            $('#game-ending-comment').append('You defeated the boss. Your mom is proud.');

        } else if (heroReputation >= 51) {

            $('#game-ending-comment').append('You defeated the boss. Your mom is proud... Care to explain why you killed that NPC???');

        } else {
            $('#game-ending-comment').append("You defeated the boss... that's a lot of tomstones in the village. Your mom is concerned.");
        }


    } else if (origin === 'heroDefeated') {
        $('#ending-h2').append('What a loser!');
        $('#game-ending-comment').append("Your mom says she doesn't know you. The village is not proud.");
    } else {
        console.log('Something is wrong with the ending logic');
    }
}


/*Credit - JQuery .show() renders in block instead of flex. 
* this link told me I couldnt achieve flex with show(). and revert back to .css('display', 'flex')
* https://stackoverflow.com/questions/38491653/jquery-show-a-flex-box
*/

/**
* Function to update screen based on hero's progress
* add screen 2 + 3 later
*/
function updateScreen() {
    if (hero.name === '' && hero.avatar === '') {
        $('.first-screen-div').css('display', 'flex');
        $('.second-screen-div').hide();
    } else {
        console.log(`we have a name! the name is ${hero.name}`);
        console.log(`the avatar is ${hero.avatar}`);
        $('.first-screen-div').hide();

        $('.mission-intro-screen-div').css('display', 'flex');
        //if .mission-intro-screen-div is display flex .second-screen-div is grayscale (1)
        //grayscale is turned to (0) in `$('.close-intro-button').click(function()`        
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

/*Comment - it feels like there should just be one function for decision validation.
*
*/
/*Initial bug - the decision validation process was included in the npcOneConversation()
this resulted in being unable validate anything. I seperated the validation (do you want ot start the conversation)
from the actual conversation. Allowing me to close the panel and leave the user to:
    if selected no, do anything else
    if selected Yes, to move on to conversation() */

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
        console.log('this call is coming from screenTwoGeneral()');
        disableClickDiv();
        grayScaleOn();
        $('.validation-screen-div').css('display', 'flex');
        let answer = $('#hero-decision').val();
        console.log(answer);

    } else if (decisionOrigin === 'npcOneConversation') {
        console.log('this call is coming from npcOneConversation()');
        $('.conv-validation-container').css('display', 'inline-grid');
        let answer = $('input[name="hero-answer"]:checked').val();
        $('.hero-text-col').css('display', 'none');
        console.log(answer);
    }
}

/*Events*/

/*First Screen*/

//sets avatar1 as default choice.
    $('#avatar1').prop('checked', true);

/*bug - started with a form, but I couldnt keep the data. 
I then took it to stackoverflow with this question: https://stackoverflow.com/questions/78315736/update-object-property-after-form-submission-for-use-in-a-seperate-function?noredirect=1#comment138072099_78315736
Which make me realise my understanding of how forms work was flawed.
I then tried to use javascript class, as a suggestion from this link: https://www.taniarascia.com/understanding-classes-in-javascript/
but I couldnt make this work.
The solution I found works, but feels clunky.*/
/**
* Creates hero name + avatar
*/
function createHero(event) {
    let heroName = $('#hero-name').val();
    let heroAvatar = $('input[name="hero-avatar"]:checked').val();

    

    console.log(`heroAvatar: ${heroAvatar}`);

    console.log(`heroName: ${heroName}`);

    hero.name = heroName;

    //Checks if hero name is provided
        //bug: `required` attribute does not display prompt of user to fill input
        //workaround: added javascript below to display message
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
    } else {
        console.log('something is wrong with createHero()');
    }

    console.log(`heroAvatar: ${heroAvatar}`);
    //bug : heroAvatar was considered '' if not img selected
    //but should be set as 'undefined' hence the use of `typeof` 
    if (heroName !== '' && typeof heroAvatar !== 'undefined') {

        // Call another function with the updated hero object
        //recurring problem - forget to pass argument in function
        screenTwoGeneral(hero);
        updateScreen(); // Update screen after hero name is updated 
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
/*credit - https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_map5*/
/*credit for .coords - https://www.w3schools.com/jsref/prop_area_coords.asp*/
/*credit call coordinates for image position - https://stackoverflow.com/questions/28598910/position-an-html-element-at-any-x-y-coordinate-in-a-page*/
/*credit img element src is 'content' css - https://stackoverflow.com/questions/2182716/is-it-possible-to-set-a-src-attribute-of-an-img-tag-in-css*/
/*Credit for conversion to jquery for left & top in css - https://stackoverflow.com/questions/12744928/in-jquery-how-can-i-set-top-left-properties-of-an-element-with-position-values*/
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

    //sets hero life bar
    console.log(currentNPC);

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
    if (hero.inventory.itemThree.hasItem == true){
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
/*Hero arrives on Screen 2*/
/*credit - https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag*/
/**
*Hero's position on screen
*/
function heroPosition(event, npc) {
    //BUG and issues: initial or current position when starts
    //position() gives me the position of the hero in relation to div, not document.
    //offset() gives me the position in relation to document. Opted for offset() as it migth be easier 
    //if the screen resolution changes.
    // let heroCurrentXPosition = $('#hero-position-avatar-image').offset().left;
    //     console.log(`offset left:${heroCurrentXPosition}`)
    // let heroCurrentYPosition = $('#hero-position-avatar-image').offset().top;
    //     console.log(`offset top: ${heroCurrentYPosition}`)

    //new position where the hero clicked
    // this is facilitated by the event parameter.
    //I need to the offset position (which is relative to the document and not the parent div
    // Get the offset of the parent element of the clicked area

    //log npc argument
    console.log(npc);
    currentNPC = npc;
    console.log(currentNPC);

    //define new position based on npc position
    //
    let newHeroXPosition = currentNPC.Xposition;
    console.log(`npc.Xposition: ${newHeroXPosition}`);
    let newHeroYPosition = currentNPC.Yposition;
    console.log(`npc.Yposition: ${newHeroYPosition}`);

    //caupture current hero position    
    let heroXPositionCurrent = hero.Xposition;
    console.log(`heroXPositionCurrent: ${heroXPositionCurrent}`);
    let heroYPositionCurrent = hero.Yposition;
    console.log(`heroYPositionCurrent: ${heroYPositionCurrent}`);

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

        console.log('the hero is in position');
        //console.log(hero)

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
    console.log(heroQuest);

    //calculate how many have been completed

    //sets if mission is completed or not
    if (hero.inventory.itemOne.hasItem == true) {
        quest.missionOne.completed = true;
        console.log(`quest.missionOne.completed = ${quest.missionOne.completed}`);
    } else {
        console.log(`dont forget to add the boss`);
    }

    if (hero.inventory.itemTwo.hasItem == true) {
        quest.missionTwo.completed = true;
        console.log(`quest.missionTwo.completed = ${quest.missionTwo.completed}`);
    } else {
        console.log(`dont forget to add the boss`);
    }

    if (hero.inventory.itemThree.hasItem == true) {
        quest.missionThree.completed = true;
        quest.missionOne.completed = true;
        quest.missionTwo.completed = true;
        console.log(`quest.missionTwo.completed = ${quest.missionThree.completed}`);
    } else {
        console.log(`dont forget to add the boss`);
    }

    //calculte how many missions are true
    /*credit for counting the counting loop of true keys : https://stackoverflow.com/questions/52846805/count-the-number-of-trues-in-a-javascript-object*/
    let count = 0;
    for (let key in quest) {
        if (quest.hasOwnProperty(key) && quest[key].completed) {
            count++;
        }

    }
    console.log(count);

    //calculate how much these completed steps account has part of the quest Completion
    //convert number in %
    let completion = (count / heroQuest) * 100;
    console.log(`quest completion: ${completion}% `);

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
            console.log(`Mission ${nextAction}: ${quest[nextAction].mission}`);

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
/*Credits - for .hasOwnProperty used to loop through sentences - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty*/
/*Credits - extra credits for sentence loops : https://stackoverflow.com/questions/8312459/iterate-through-object-properties*/
/*Credits - change one sentence to another : https://stackoverflow.com/questions/37809591/jquery-how-can-showint-text-and-hide-then-showing-another */
/**
*When user click on location, a conversation starts
*/
function npcConversation(hero, currentNPC, decision) {
    console.log('convo starts');
    console.log(currentNPC);
    //At this stage, the hero answered Yes (1)
    //alert("npcOneConversation()starts!")
    //logs npcOne.question. Currently doesnt return hero.name
    //console.log(`${npcOne.conversation.sentenceOne} ${hero.name}!`)
    //if yes conversation screen div opens

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
    console.log(`current NPC has item = ${currentNPC.hasItem}`);

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
            //console.log(sentence)

            if (currentNPC.conversation.hasOwnProperty(sentence)) {
                //console.log(npc.conversation[sentence])
                //create sentence number variable: sentenceNum
                let sentenceNum = currentNPC.conversation[sentence];

                //if sentenceNum is 1
                if (sentenceNum == currentNPC.conversation.sentenceOne) {
                    //console.log('this is sentenceOne')

                    //hero clicks next to progress to next part sentence 2
                    $('#npc-text').text(`${currentNPC.conversation.sentenceOne} ${hero.name}!`).delay(1500).hide(function () {
                        $('#npc-text').text(`${currentNPC.conversation.sentenceTwo}`).delay('fast').show(function () {
                            $('.hero-text-col').css('display', 'inline-grid');
                        });
                    });

                    // if sentenceNum is 2
                } else if (sentenceNum == currentNPC.conversation.sentenceTwo) {
                    //console.log('this is sentenceTwo')
                    // hero is presented a yes or no question
                    heroDecisionValidation('npcConversation', currentNPC);


                } else {
                    //console.log('this is sentenceThree')

                    //console.log(`This is the hero decision value ${decision}`)
                    // fix: if decision is not none show this.
                    // remove existing text. and Add sentence3
                    //BUG : After the end of sentenceThree or sentenceFour, the loop goes back to first if statement
                    //I tried `break` at the end of the function, but this is unresponsive
                    //also tried to add a boolean field at the end of sentenceThree and sentenceFour and turn it to true
                    //and add an if statement at the top of the for loop : if boolean is true then dont loop: but it didnt work.
                    //as a workaround I reduced the timeout so that the user doesnt see the loop starting again as the div is turns to `hide` before the loop restarts.
                    if (decision === '1') {
                        //console.log('The hero gets an item + farewell message')
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
                        //could improve logic in future to make it more dynamic
                        //would require a change in how items are handled and attach each item to an npc
                        if (currentNPC === npcOne) {
                            console.log('item is given by npcOne');
                            hero.inventory.itemOne.hasItem = true;
                            currentNPC.hasItem = false;
                        } else if (currentNPC === npcTwo) {
                            console.log('item is given by npcTwo');
                            hero.inventory.itemTwo.hasItem = true;
                            currentNPC.hasItem = false;
                        } else if (currentNPC === npcThree) {
                            console.log('item is given by npcThree');
                            hero.inventory.itemOne.hasItem = false;
                            hero.inventory.itemTwo.hasItem = false;
                            hero.inventory.itemThree.hasItem = true;
                            currentNPC.hasItem = false;

                            //applies multplier logic
                            //increase hero life point by *2 to fight boss
                            //note: this is a work around. For some reason npcConversation() loops over itself
                            //without this if statement and the use of multiplierApplied, lifepoints would be *2 three times.
                            console.log(`hero.stats.lifePoints before multplier : ${hero.stats.lifePoints}`);
                            if (hero.inventory.itemThree.multiplierApplied == false) {
                                hero.stats.lifePoints = hero.stats.lifePoints * 2;
                                hero.inventory.itemThree.multiplierApplied = true;
                            }
                            console.log(`hero.stats.lifePoints after multplier : ${hero.stats.lifePoints}`);

                        } else {
                            console.log('something is not right');
                        }

                        $('.hero-text-col').css('display', 'none');
                        grayScaleOff();

                        screenTwoGeneral(hero, currentNPC);


                        //conversation panel is moved to hidden.
                    }
                    else if (decision === '2') {
                        //console.log('The hero gets farewell message and no item');
                        //sentenceThree appears
                        //issue with delay: delay() didnt seem to have any effect in this context
                        //I used setTimeout() which worked.
                        //credit: https://stackoverflow.com/questions/7407935/delay-and-settimeout#:~:text=The%20.,appropriate%20for%20certain%20use%20cases.
                        $('#npc-text').text(`${currentNPC.conversation.sentenceFour}`);
                        grayScaleOff();
                        setTimeout(function () {
                            $('.conversation-screen-div').hide(function () {
                                $('.second-screen-div').css('display', 'flex');
                            });
                        }, 2000);

                    }
                    else {
                        console.log('something is wrong with conversation sentence three logic. Or the hero is not at the stage yet.');
                    }
                    //npc renders sentenceNum 3 
                    //hero returns to second screen div
                }

            }

        }

    } else {
        console.log('something is wrong with currentNPC.hasItem  logic');
    }

}


/*Mission 3*/


/*Third Screen*/

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

    //define current hero idle img displayed witing #hero-avatar-fight
    let heroIdleImg = hero.status.idle;
    console.log(`heroIdleImg: ${heroIdleImg}`);

    //define new hero img to be displayed witing #hero-avatar-fight
    let heroAttackImg = hero.status.attack;
    console.log(`heroAttackImg: ${heroAttackImg}`);

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
    console.log(`max damage: ${heroMaxDamage}`);
    let heroLowDamage = hero.stats.damage.damageLow * damageMultiplier;
    console.log(`min damage: ${heroLowDamage}`);
    let attackDamage = Math.floor(Math.random() * (heroMaxDamage - heroLowDamage + 1)) + heroLowDamage;
    console.log(`Actual Damage: ${attackDamage}`);

    return attackDamage;
}

function fight(hero, currentNPC) {
    console.log('fight kicks off!');
    console.log(currentNPC.avatar.avatarMap);
    console.log(currentNPC.name);
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

    //fill progress bar with lifepoints
    //Hero
    //note: a lot of repeat with the multplier. Worried it might take too long to redo the logic with a single variable.
    //this could really be improved.  
    //defines multiplier of damages if hero has itemThree or not

    let lifeMultiplier = 1;

    if (hero.inventory.itemThree.hasItem == true) {
        lifeMultiplier = 2;
    }



    /**
    *define hero life points left in % of full bar length
    */
    let heroLifePoints = hero.stats.lifePoints;
    console.log(`heroLifePoints: ${heroLifePoints}`);
    console.log(`initialHeroLifePoints: ${initialHeroLifePoints}`);
    console.log(`initialHeroLifePoints*lifeMultiplier: ${initialHeroLifePoints * lifeMultiplier}`);

    let heroLifePointsInPercentage = (heroLifePoints / (initialHeroLifePoints * lifeMultiplier)) * 100;
    console.log(heroLifePointsInPercentage);
    $('#hero-life-points').css('width', heroLifePointsInPercentage + '%');

    //NPC
    /**
    *define npc life points left in % of full bar length
    */
    let npcLifePoints = currentNPC.stats.lifePoints;
    console.log(npcLifePoints);
    let npcLifePointsInPercentage = (currentNPC.stats.lifePoints / currentNPC.stats.lifePoints) * 100;
    console.log(npcLifePointsInPercentage);
    $('#npc-life-points').css('width', npcLifePointsInPercentage + '%');

    //set avatar images in avatar boxes
    //Hero
    $('#hero-avatar-fight').attr('src', `${hero.status.idle}`);
    //NPC
    $('#npc-avatar-fight').attr('src', `${currentNPC.avatar.avatarMap}`);

    console.log('you are inside the loop');

    console.log(currentNPC.name);
    console.log(currentNPC.stats.lifePoints);
    console.log(npcLifePoints);

    //hero's turn
    //select value between attack and heal
    //show action panel:
    //BUG: boss was hitting 3 times in a row. This seems to be related to the same issue
    //I had when previous npc clicked was kept in "memory" of the submit button because of how jquery works.
    //adding `.off('click').on('click', function()` solved the problem
    $('#submit-hero-action-button').off('click').on('click', function () {
        console.log("Button clicked - Current NPC:", currentNPC ? currentNPC.name : 'None');
        let action = $('input[name="hero-fight-action"]:checked').val();
        console.log(action);

        if (action == '1') {
            console.log(currentNPC.name);
            console.log(currentNPC.stats.lifePoints);
            console.log(npcLifePoints);

            //if attack is selected
            console.log(`NPC has ${npcLifePoints} life points left`);
            console.log(`${action} is selected. Attack time!`);

            //play attack function
            const heroDamage = attack(hero, currentNPC);
            console.log(`Hero hits NPC with: ${heroDamage} damage`);

            //describe attack in #comment-fight
            commentFightAppend(`${hero.name} hits with ${heroDamage} damages.`);


            //sets background to red
            setTimeout(function () {
                $('#npc-avatar-fight').css('background-color', '');
            }, 500);

            setTimeout(function () {
                //reverts img back to idl status after 1 second
                $('#hero-avatar-fight').attr('src', `${hero.status.idle}`);
                console.log(`back to idle now after 1 second`);

                //shows submit button to give impression of turn based fight
                $('.action-validation-container').show();

                //reduce npc hp in actual points
                npcLifePoints = npcLifePoints - heroDamage;
                console.log(`NPC has ${npcLifePoints} life points left`);

                //reduce npc hps in %of initial bar length
                console.log(`currentNPC.stats.lifePoints: ${currentNPC.stats.lifePoints}`);
                npcLifePointsInPercentage = (npcLifePoints / currentNPC.stats.lifePoints) * 100;

                console.log(`NPC has ${npcLifePoints} left which represents ${npcLifePointsInPercentage}% of bar length`);
                $('#npc-life-points').css('width', npcLifePointsInPercentage + '%');

                console.log(`At this stage hero has ${heroLifePoints} life points left!`);

                if (npcLifePoints > 0) {
                    //updates heroLifePoints after the npcTurn
                    heroLifePoints = npcTurn(hero, currentNPC, heroLifePoints);
                    console.log('npc has more than 0 points');


                } else {
                    console.log(`${currentNPC.name} is kaboom!`);
                    console.log(` and hero has ${heroLifePoints} life points left!`);

                    //bug: after first fight currentNPC was getting reloaded as the first npc defeated
                    //this is because  $('#submit-hero-action-button').click(function()
                    //kept the memory of the first npc defeated and added it as soon as I triggered the event
                    //documentation: https://api.jquery.com/off/ (plus a lot of other sources including stackover flow posts)
                    //reset currentNPC for next fight
                    $('#submit-hero-action-button').off('click');

                    //npcOneDefeated(hero, heroLifePoints)
                    npcDefeated(hero, heroLifePoints);
                }
            }, 1500);

        } else if (action == '2') {
            //if heal is selected
            console.log(`${action} is selected. Heal time!`);

            //play heal function
            const heroHeal = healing(hero, currentNPC);

            //increase hero hp
            heroLifePoints = heroLifePoints + heroHeal;
            console.log(heroLifePoints);

            //describe heal points recieved in #comment-fight
            commentFightAppend(`${hero.name} gains ${heroHeal} life points.`);

            //limits HP increase to character's max life    
            if (heroLifePoints > initialHeroLifePoints * lifeMultiplier) {
                console.log('Thats too many HP for you my friend!');
                heroLifePoints = initialHeroLifePoints * lifeMultiplier;
            }
            console.log(`new lifepoints : ${heroLifePoints}`);

            //define remaing life points after attack in % of initial lifebar width
            let heroLifePointsInPercentage = (heroLifePoints / (initialHeroLifePoints * lifeMultiplier)) * 100;
            $('#hero-life-points').css('width', heroLifePointsInPercentage + '%');

            //sets delay between points being added and the NPC turn to show the life bar going up
            setTimeout(function () {
                $('#hero-life-points').css(('width', heroLifePointsInPercentage + '%'), function () {

                    //updates heroLifePoints after the npcTurn
                    heroLifePoints = npcTurn(hero, currentNPC, heroLifePoints);
                });
            }, 2500);
        }

        else {
            console.log('Something is wrong');
        }

    });

}

function npcTurn(hero, currentNPC, heroLifePoints) {
    console.log('Its the NPC turn now from function');
    let npcMaxDamage = currentNPC.stats.damage.damageHigh;
    let npcLowDamage = currentNPC.stats.damage.damageLow;
    //define NPC damages     
    let npcDamage = Math.floor(Math.random() * (npcMaxDamage - npcLowDamage + 1)) + npcLowDamage;
    console.log(`NPC attacks: ${npcDamage} damage`);
    console.log(`The hero has ${heroLifePoints} life points before the attack`);


    //define current npc idle img displayed witing #hero-avatar-fight
    let npcIdleImg = currentNPC.avatar.avatarProfile;
    console.log(`heroIdleImg: ${npcIdleImg}`);

    //define new npc img to be displayed witing #hero-avatar-fight
    let npcAttackImg = currentNPC.avatar.avatarAttack;
    console.log(`npcAttackImg: ${npcAttackImg}`);

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
            console.log(`back to idle now after 1 second`);
            $('.action-validation-container').show();

        }, 1500);
    } else {
        console.log(`currentNPC?.avatar?.avatarAttack does not exists`);
    }
    

    //update hero's life points
    //define multiplier
    let lifeMultiplier = 1;

    if (hero.inventory.itemThree.hasItem == true) {
        lifeMultiplier = 2;
    }


    //define remaining life points after attack
    heroLifePoints = heroLifePoints - npcDamage;
    console.log(`The hero has ${heroLifePoints} life points after the attack`);
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
        if (currentNPC.hasItem == true){
            hero.inventory.itemOne.hasItem = true;
            $('#fight-comment-2').append(`You just recieved ${hero.inventory.itemOne.name}`);
            currentNPC.hasItem = false;
        }
        
        $('#npcOne-position-avatar-image').css('content', `url(${deadNPCAvatar})`);
    }

    if (currentNPC === npcTwo) {
        // add item to inventory (turn item to true)
        if (currentNPC.hasItem == true){
            hero.inventory.itemTwo.hasItem = true;
            $('#fight-comment-2').append(`You just recieved ${hero.inventory.itemTwo.name}`);
            currentNPC.hasItem = false;
        }

        $('#npcTwo-position-avatar-image').css('content', `url(${deadNPCAvatar})`);
    }

    if (currentNPC === npcThree) {
        // add item to inventory (turn item to true)
        if (currentNPC.hasItem == true){
            hero.inventory.itemThree.hasItem = true;
            $('#fight-comment-2').append(`You just recieved ${hero.inventory.itemThree.name}`);
            currentNPC.hasItem = false;
        }

        $('#npcThree-position-avatar-image').css('content', `url(${deadNPCAvatar})`);
    }


    //reduce reputation points

    hero.stats.reputation -= currentNPC.stats.reputation;

    console.log(`this is how much heroLifePoints there is in npcOneDefeated() : ${heroLifePoints}`);

    hero.stats.lifePoints = heroLifePoints;

    //sets npc alive to false
    currentNPC.stats.alive = false;

    //change npc avatar to tombstone and hide life bar + label
    $('#npc-avatar-fight').attr('src', 'assets/images/avatars/dead-npc.jpg');
    $('.life-bar').hide();
    $('#npc-life-point-label').hide();
    $('.action-validation-container').css('display', 'none');
    console.log(`.action-validation-container is hidden`);


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
