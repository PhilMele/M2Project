# Code_Institute_P2

![rendering]()

Title - Your Hero Journey

xxx

View the live site : https://philmele.github.io/M2Project/

# Table of Contents

1. [User Experience](#ux)
   - [Project Goals](#project-goals)
     * [User Goals](#user-goals)
     * [Site Owner Goals](#site-owner-goals)
   - [User Stories](#ux-subsection)
     * [Local Business](#local-business)
     * [Public Sector](#public-sector)
     * [Users](#user)

2. [Design](#ui)
   - [Colours](#colours)
   - [Typography](#typography)
   - [Icons & Images](#icons-images)
   - [Wireframes](#wireframes)

3. [Features](#features)
   - [Objects & HTML Layout](#objects)
   - [Hero Customisation](#hero-customisaion)
   - [Interactions with Non Playing Characters (NPC)](#interactions-with-npc)
   - [NPC interaction: talk or nothing](#talk)
   - [NPC interaction: fight](#fight)
   - [Alternative Endings](#alternative-endings)
   - [Clicks disabled outside of div element](#clicks-disabled)
   - [Cap max screen resolution & responsivness](#max-screen)
   - [Hero Movements](#hero-movements)
   - [Introduction](#intro)

4. [Technologies](#tech)

5. [Testing](#testing)
   - [Validator Testing](#val-testing)
     * [HTML](#html)
     * [CSS](#css)
     * [Javascript](#js)
   - [Lighthouse Testing](#lighthouse-testing)
   - [User Testing](#user-testing)

6. [Bugs](#bugs)
   - [Current bugs](#current-bugs)
   - [Design & User Experience improvements](#design-improvements)
   - [Logic improvements](#logic-improvements)
     
7. [Deployment](#deployment)

8. [Credits](#credits)

## 1. User Experience <a name="ux"></a>

There is two types of users for this product. The actual user of the product and the owner of the product.

### 1.1 Project Goals <a name="project-goals"></a>


#### 1.1.1 User Goals & Expectations <a name="user-goals"></a>

The goal of this product is to offer users to replicate the experience of playing old console video games, in particular japanese RPG (role playing games) like Secret of Mana on SNES.

As a result, the story is not linear and leave a number of choices to the user on how the game can be completed.

To complete the story, the final boss needs to be defeated. To defeat the boss, the user (hero) needs to collect 2 items from non playing characters (NPCs).

How these items are collected is down to the user: the item can be given by the NPC by asking, or collected from the NPC by killing it.

The hero can also decide to kill the NPC it has collected the item.

Depending on the decisions made during the collection of these items, the ending will differ.

### 1.2 User Stories <a name="user-goals"></a>

* As a user I want to create a hero with a certain level of customisation by giving my hero a name of my choice and attribute it an avatar.
* As the site owner I want to let the hero enter a name of their choice and offer a selection of 2 avatars to choose from

* As a user I want to recieve an end goal and have total freedom in how I achieve this end goal
* As the site owner I want to set an overall mission without any validation checkpoints in between to unlock the next stage and leave the hero to possibility to make bad choices

* As a user I want to recieve guidance, or hints, on what I should do next just in case I get lost in my quest
* As the site owner I want to set an overall quest divided into seperate mission. These missions can be completed in any order, however the hero can decide to follow the order of missions provided through the guidance

* As a user I want to be able to talk the NPCs and make decision during the conversation process to collect the items needed for the next mission
* As the site owner I want to be able to provide validation before and during conversation to leave the hero the choice to finish the conversation with the NPC, or leave it to decide to acquire the mission item in a different way

* As a user I want to be able to fight the NPC to collect the item
* As the site owner I want to be able to provide the hero an option to fight the NPC

* As a the user I want to know how much life points I have and how many damages I inflict to the NPC
* As the site owner I want to provide the hero visibility over their stats so they know when to attack or heal
* As the site owner I want to provide the hero visibility over the NPC stats so they know when to attack or heal

* As the site owner I want to incentive the user to replay the game more than once
* As the site owner I want to implement a reputation system that takes into account the hero's actions
* As the site owner I want to trigger different ending based on the score attached to the hero reputation


## 2. Design <a name="ui"></a>

### 2.1 Colours <a name="colours"></a>
The main product is aimed at bringing users back to memory lane when playing japanese role playing games on Nintenda and Sega consoles.

As a result, we have used a colour palette inspired from  old 16 bits video game consoles. 

![Colour Palette]([])

### 2.2 Typography <a name="typography"></a>
Typography will follow the theme taken by the colour pallette, uses fonts that remind users of old 16 bits video game consoles.

We have selected Google Fonts, instead of custom fonts, to benefit from better support.

The fonts selected are:

For Logo: xx

Text: xx

These fonts can be found on: https://fonts.google.com/

### 2.3 Icons & Images <a name="icons-images"></a>
(where are the images and icons stored)

   #### 2.3.1 Icons <a name="icons"></a>
    (where are the images and icons stored)

   #### 2.3.2 Imagees <a name="images"></a>


### 2.4 Wireframes <a name="wireframes"></a>
  ![index](..)


## 3. Features <a name="features"></a>

   ### 3.0 Objects & HTML Layout <a name="objects"></a>

   **From a rendering perspective**, the project is based on a single page and is organised across multiple `div`. This section presents an overview, and I presented into more details later on:
   * `body` element which defines the width of the game screen.
   * `.clicks-disabled`, when activated, allows the web site owner to only allow the user to click on certain elements on the screen, for certain event.
   * `.first-screen-div` displays the first part of the game: inviting the hero to select and name their avatar.
   * `.mission-intro-screen-div` is responsible for introducing the quest to the hero and the next steps.
   * `.second-screen-div` is arguably the most used class and displays the map and character location. It also shows the user inventory, life and reputation points.
   * `.fight-screen-div` this class is used extensively to render any fight between characters.
   * `.validation-screen-div` handles the validation of the hero decision when it comes to the interaction with the NPC (non playing character) that has been clicked on.
   * `.conversation-screen-div` handles the display of conversations between the hero and NPCs.
   * `restart-game-div` provide the user to restart the game.

   From a logic perspective, the game leverages a use of functions, which are covered in the next sections. At the roof of these functions, the following objects are used:
   * `avatarSelection` lists each avatar the user can choose from and their respective animations (attack, idle, profile pictures...)
   * `hero` contains all propreties that will be used during the hero journey (name, avatar, inventory, life points...)
   * `npcOne` to `npcFour` contains all properties relating to the NPCs characterstics (name, avatar, inventory, life points...)
   * `quest` lists all four missions, their name and their status (completed or not completed) the hero needs to accomplish to finish the game
   * `introSequences` contains a series of sequences that contain both a text and images. These sequences will be displayed during the introduction to give context to the story and the missions the next steps for the hero to progress in the game.
    
   ### 3.1 Hero Customisation <a name="hero-customisaion"></a>
 The customisation is handled in the front end through .first-screen-div.

 It contains an input field prompting the user to select the name of their hero, and 2 radio buttons for the user to select the avatar of their hero.

 Both input field and radio buttons are required.

 When both mandatory element are filled, the user can click on "Create Hero" which is triggered by `createHero()`

 This function checks if the hero has been given a name and an avatar has been selected.

 If it returns true, the game starts and `screenTwoGeneral()` is triggered. `.first-screen-div` is hidden and `.second-screen-div` is displayed.
 
 Note: the display management of the transition between `.first-screen-div` and `.second-screen-div` is handled through  `updateScreen()`.

 If  `createHero()` returns false, the user will be prompted with a message displayed through `#name-alert` asking the user to enter the name of their hero before progressing.

 Note: the use of `required` attribute is not possible as the hero creation section is not a form and therefore html5 would not ask the user to populate the missing field.

 The radio button has a default choice selected, so no error could be generated from this section.

   ### 3.2 Interactions with Non Playing Characters (NPC) <a name="interactions-with-npc"></a>
   Interactions with NPC can be of three different options: talk, fight and nothing. These interactions are triggered by clicking on the NPC the hero wants to interact with.

   By clicking on the NPC, `heroPosition()` is triggered which has for effect to move the hero avatar next to the NPC's position. This function is covered in <a name="hero-movements"></a>.

  Once the hero is postioned next to the desired NPC a first validator is activated and prompts the user to confirm if they want to talk, do nothing or fight. 
  
  The validation of the user's intention is handled through `heroDecisionValidation()`: captured through `#hero-decision` and validated by `#submit-answer-button`.

  Note: because this function is used for different validation, we use the parameter `decisionOrigin` to identify where the request is coming from. In the case of the case of this paragraph, we are looking to validate that the `decisionOrigin` is coming from `heroPosition`.

   Depending on the user intention, a different function will trigger.

   Talk (Option 1) covered through `npcConversation()` and fight (Option 3) is handled through `fight()`. 

   The selection of "nothing" (option 2) hides `.validation-screen-div` and the hero is back to `.second-screen-div`, handled by screenTwoGeneral().

   ### 3.3 NPC interaction: talk or nothing <a name="talk"></a>  

   This set of interactions is handled through `npcConversation()`.

   It passes parameter: `currentNPC` which is defined through the previous function heroPosition() and designate the NPC the hero is currently interacting with. This parameter allows to scale the function and avoid having to create a different function for each NPC.

   note: in this current structure, the function has the flaw to require the NPC conversation format to always be the same: first two sentences are an introduction, the third sentence is a a validation question and sentence four and 5 are displayed depending on the value of the hero answer to question 3. 

   This function starts by a number of front end management: it sets previous div from show() to hide(), and display the font end element that will render the conversation and the characters (hero and NPC) respective avatars).

   **Logic element:**

   The first element of logic of this function checks if `currentNPC` has the item the hero desire on their inventory (`currentNPC.hasItem == false`): if it doesnt, it means the hero has already acquired the item and this item cannot be given again. This will trigger `currentNPC.conversation.sentenceFive`.

   If `currentNPC.hasItem` is `true` the second part of the logic starts.

   This second part of the logic consists in a `for loop` which goes through the `currentNPC` object and return a sequence of sentences asigning a specific logic to each sequence:
  * Sentence 1 & 2 : this is the introduction of the NPC. At the end of this phase, the hero is presented with a choice presented through `.hero-text-col`, which is now displayed as `flex`. Upon making its choice, the user trigger `heroDecisionValidation()`, which we have covered previoulsy in section **Interactions with Non Playing Characters**.  This time we pass paramters 'npcConversation', which allows the `heroDecisionValidation()` to understand the call comes from `npcConversation()`. `#submit-question-answer-button` collects the decision and attach it to `decision` variable which we pass back to `npcConversation()` as a parameter.
 *  Sentence 3: This sentence is displayed if `decision` parameter is equal to `2`. The NPC says farewell and the hero is sent back to `.second-screen-div`.
* Sentence 4: This sentence is displayed if `decision` parameter is equal to `1`. The NPC says farewell and the hero is sent back to `.second-screen-div` and recieve a new item (`hero.inventory.item.hasItem = true`), and the NPC inventory (`currentNPC.hasItem = false`). This sentence has a a few sub if statement that handles what item is given based on `currentNPC` identity.


There is an exception to this. This exception covers the interaction with npcThree (the mage). This specific logic adds the use of sentenceSix (which is specific to this NPC) and checks that if the hero does not have both item. If the hero has one item, or is missing both, npcThree will ask the hero to come back when both items have been collected, for npcThree to give the hero something in exchange. This logic is container within the else if `else if ((hero.inventory.itemOne.hasItem === false || hero.inventory.itemTwo.hasItem === false) && currentNPC === npcThree)`

note: for future development the function could be divided into smaller functions to enhance readibility. Seperating in different functions could also increasing the scalability by creating more options of conversations. An Item object could have been created to handle the process of giving items to user more smooth. There is a few repeat with the multplier after talking to npcThree: this could have been better hanlded with better planning ahead of building the project, but considering the time constraint left to deliver the project I could only implement a workaround to deliver on time as it required to review a lot of logic with a lot of dependencies.

   ### 3.4 NPC interaction: Fight <a name="fight"></a>
   
   This function is at the junction of 5 different functions.

   **Fight Function (`fight()`)**
  
   This function is handled by `fight()` and passes `hero` (referring to the object) and `currentNPC` parameter (referring to the definition `npc` attached during `heroPosition()`).

   This function starts by managing the display of some front end element:
   *NPC related row: `currentNPC` avatar and a text column displaying a script of the fight (damages, healing points...).
   *hero related row: `hero` avatar and a text column giving the hero a choice between attack (triggering `attack()`) and healing (activating `healing()`).

   The function sets a multplier, which has a value of `1` by default, and switched to two if the hero collected itemThree which is granted by the mage in exchange of itemOne and itemTwo.

   The function also calculates hero and npc life points to be displayed on the life bar and returns this points as a percentage of the bar length.

   In terms of logic, through `fight()` the hero is essentially provided by 2 choices: healing and attack until one of the two characters runs out of `lifePoints`.

   The choice is captured from `hero-fight-action` by listening to a click for the user on either one of the two choices. Based on the choice's value (`1`) or (`2`) one of the two function is triggered.
   
   **Attack Function (`attack()`)**
   
   By selecting attack, a variable `heroDamage` returns the result from `attack(hero, currentNPC)`.

   `heroDamage` is calculated by taking a random number between `heroMaxDamage` and `heroLowDamage`: these two variables are through the minimum and the maximum damages the hero can afflict, which are both defined in `hero.stats.damage`

   `attack()` not only manages the damages inflicted by the hero to `currentNPC` by returning `attackDamage`, but also manages the display of the attack animation by changing the gif image contained in `#hero-avatar-fight` to `hero.status.attack`.

   Once `attack()` has returned `heroDamage` the function let the gif complete the attack animation by setting a `timeOut` of 1.5 seconds before moving on the the `npcTurn()` or if `currentNPC` has `0` life points or less activate `npcDefeated()`.  `currentNPC` life points are updated accordingly based on the returned value from `heroDamage`.

   **Healing Function (`healing()`)**
   
By selecting healing, a variable `heroHeal` returns the result from `healing(hero, currentNPC)`.

   The value of `healingPoints` is hard coded in the function which is 25. This could be improved in the future by taking into consideration the hero total life points.

   After returning `healingPoints`, `fight()` adds the returned value of `healingPoints` to the hero life points. It also checks if the new value of the hero life points does not exceed the maxmimum.

   Should this check result as true the total hero life points are set back to its the defined maximum.

      if (heroLifePoints > initialHeroLifePoints * lifeMultiplier) {
                   console.log('Thats too many HP for you my friend!')
                   heroLifePoints = initialHeroLifePoints * lifeMultiplier
               }  

   **NPC Turn (`npcTurn()`)**
   
   After the hero had their turn, it's not to `currentNPC` to do something. This phase is managed through `npcTurn()`

   The only action possible available to the NPC is attack.

   Similarly to attack(), the damages inflicted by the `currentNPC` to the hero are returned by taking a random number between the minimum and the maximum damages the `currentNPC` can inflict, which is defined in object `currentNPC.stats.damage`.

   Once the damages are defined they are substracted from the hero life points through the returned value of `heroLifePoints`.

   In the event `heroLifePoints` would be equal to `0` to less, gameOver() is triggered.

   Otherwise, the function reverts back to `fight()` leading to the hero's turn to attack or heal.

   Finally, this function has a special logic if `currentNPC` has an attack animation attached in its object (`if (currentNPC?.avatar?.avatarAttack)`). If this logic is true, `currentNPC` avatar will be changed to an attacking animation before reverting back to `idle` status. This is faciliated through `setTimeout`.
   
   **NPC Defeated Function (`npcDefeated()`)**

   If `currentNPC`'s lifepoints are equal to `0`, this function is triggered.

   It starts by resetting the 3 `#fight-comment` ids to empty and populate them with new information, informing:
   * `currentNPC has been defeated
   * hero has acquired the item attached to the death of `currentNPC`

   It sets `currentNPC` 's avatar as a tombstone by assigning the variable `deadNPCAvatar`.

   From a logic perspective, it also updates the herolife points together with its reputation (each NPC has a reputation attached, and if defeated the hero reputation is updated accordingly):
   
      hero.stats.reputation -= currentNPC.stats.reputation
      hero.stats.lifePoints = heroLifePoints

   The logic also sets `currentNPC` as dead (`currentNPC.stats.alive = false`). This logic prevents the user from clicking on the dead npc position and is handled in `screenTwoGeneral()`.

   Finally, if `currentNPC` is npcFour (the boss), `gameOver()` is activate and the user finish the game.

   If `currentNPC` is not npcFour the user is the user is sent back to `.second-screen-div` after 5 seconds by leveraging `setTimeout`.
   
**Fight comments (`commentFightAppend()`)**
   This function manages the display of messages during the fight.

   It uses 3 variables, each attach a specific id:
   
      let comment1 = $('#fight-comment-1')
      let comment2 = $('#fight-comment-2')
      let comment3 = $('#fight-comment-3')

In order to limit the number of messages displayed to a maximum of 3 at a given time, the logic is as follows:

* checks if `comment1` is empty: if empty populates `comment1`

* if `comment1` is not empty, populate `comment2`

* if `comment2` is not empty, populate `comment3`

* if `comment3` is not empty move content of `comment2` to `comment1` and `comment3` to `comment2`
* add new input to `comment3`

   ### 3.5 Quest System <a name="quest-system"></a>
   This feature is made up of two function and mainly serve a rendering purpose: `questProgress()` and `questNextAction()`.

 **questNextAction()`** provides information to the hero on the next potential mission they should accomplish. Although an alternative route could be taken.

  This function loops through `quest` object and checks if each mission has been completed. The function will `break` as soon as the mission it is looping through is set as `completed : false`.

  As soon as the loop breaks, `#next-action` is updated with the description of the `mission` for the user to know what to do next. This is displayed in `.second-screen-div`.

  **`questProgress()`** lists the number of mission the hero needs to complete before finishing the game.

  The number of mission is defined in variable `heroQuest`, which counts the number of keys included within the object:

     let heroQuest = Object.keys(quest).length

  Once this variable is defined, `questProgress()` looks to identify how many of these missions have been completed. A mission is considered completed if the item attached to the succesful complion of this mission is collected. For example:

     if (hero.inventory.itemOne.hasItem == true) {
           quest.missionOne.completed = true
       }

  Considering that the collection of `itemThree` requires the loss of `itemOne` and `itemTwo` a seperate logic addresses the completion of missionThree.

     if (hero.inventory.itemThree.hasItem == true) {
           quest.missionThree.completed = true
           quest.missionOne.completed = true
           quest.missionTwo.completed = true
           console.log(`quest.missionTwo.completed = ${quest.missionThree.completed}`)
       }


   Once the missions are set to completed or no, we create a variable `count` and set it to `0` initially. We then update the variable through a `for loop` which counts the number of mission set to completed = true.

      count = 0
      for (let key in quest) {
           if (quest.hasOwnProperty(key) && quest[key].completed) {
               count++
           }
   
      }

      credits: this solution was taken from GerryLon response to this post: https://stackoverflow.com/questions/52846805/count-the-number-of-trues-in-a-javascript-object

Once `count` is defined, we can compare to the total number of mission and return the a percentage value in `completion` variable which can be used to set the value of the progress bar in `##quest-progress`:

    //calculate how much these completed steps account has part of the quest Completion
    //convert number in %
    completion = (count / heroQuest) * 100
    
    //Update #quest-progress with completion variable result
    $('#quest-progress').css('width', completion + '%')

Future improvement: `questNextAction()` could be broken down into 2 seperate function for better readability: one setting up quests are compeleted, and another one dealing with the actual calulation of how many misions need completing before reaching 100%.

  

   ### 3.6 Alternative Endings <a name="alternative-endings"></a>

   The user can end the game in different ways. These different ways are handled with `gameOver()`.

   In this function with pass `origin` parameter. This origin parameter is linked to 2 different functions that lead to the game ending: `npcDefeated()` and `npcTurn()`.

   From a front end perspective, the display is managed through `.restart-game-div`

  **When `origin` = `npcDeFeated`** this parameter is passed when `calling gameOver()`:
   
       if (currentNPC === npcFour) {
        gameOver('npcDefeated')
         }

   The use of `npcDefeated` allows gameOver() to know the origin of the function call and handle the correct scenario.

   In the case of `npcDefeated` being the origin of the call, depending on the reputation score of the hero different endings are presented. Currently these different ending are represented by a different ending message.

   These messages are displayed through `#game-ending-comment` prompting to click the button `#restart-game`.

   Pressing this button activate the below function, which reloads the page and allows the user to restart from the hero creation screen.

      $('#restart-game').click(function () {
           location.reload();
       });

   For future developments: each of these ending message could be replaced by another function. We could imagine that if the hero had a very low reputation, the hero would have to face the mage as an ultimate challenge. This has not been implemented as the current way stats multplier work is not ideal. It would be preferrable to use an experience and level up system attached to stats multplier to scale this properly.

   **When `origin` = `npcturn`** this parameter is passed when `calling npcTurn()`:

   The use of `npcturn` allows gameOver() to know the origin of the function call and handle the correct scenario.

   In the case of `npcturn` being the origin of the call, the user recieves a message displaying within `#game-ending-comment` prompting to click the button `#restart-game` which triggers the reload of the page.
   

   ### 3.7 Clicks disabled outside of div element <a name="clicks-disabled"></a>
   
   During the events involving the use of `.mission-intro-screen-div` and `.validation-screen-div`, `.second-screen-div` is displayed in the background.

   To avoid the user clicking on another NPC whilst the hero is interacting with another NPC, `.clicks-disabled` is introduced.

      .clicks-disabled{
           display: none;
           position: fixed;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           z-index:1000;
          }

   `.clicks-disabled` takes full width and height of the body and is inserted in between `.second-screen-div` and the pop up window (`.mission-intro-screen-div` and `.validation-screen-div`) with the use of the `z-index` property.

   In order to to manage the display attribute of the div, two functions are used:
   *  `disableClickDiv()()` sets `.clicks-disabled` to `show`
   *  `enableClickDiv()` sets `.clicks-disabled` to `hide`

      function disableClickDiv() {
          $('.clicks-disabled').show()
      }
      
      function enableClickDiv() {
          $('.clicks-disabled').hide()
      }


   Credits: this solution is inspired from Bruno Lucena's answer to this stackoverflow post: https://stackoverflow.com/questions/44152202/how-to-disable-click-outside-a-particular-div.


   ### 3.8 Cap max screen resolution & responsivness <a name="max-screen"></a>
   .. 

   ### 3.9 Hero Movements <a name="hero-movements"></a>

   The hero's movement between NPCs is managed between `screenTwoGeneral()` and `heroPosition()`.

  **Starting from `screenTwoGeneral()`**
  
  The assignation of each npc's position is covered from the line marked as `//positions NPCs + clickable area`.

   If assignation is managed through an `if statement` which checks the npc is alive and if the npc is not clicked. 

   Example for npcOne: in this example below, we set a variable `npcOneClicked` to false, and list to a click on `#npcOne-position-avatar-image`. If clicked by the user, the function checks of the NPC is alive and that the NPC has not been clicked before. If these checks are `true`, `heroPosition()` is triggered and `npcOneClicked` is turned to true to avoid an infinite loop. (npcOneClicked is turned back to false as soon as the user clicked again on the NPC). Finally `npcOne` is passed as a parameter into heroPosition().

      //npcOne
       //npcOne - clickable area          
       npcOneClicked = false
       $('#npcOne-position-avatar-image').click(function (event) {
           //checks if npc is dead or alive
           //if dead the functions are not triggered
           if (npcOne.stats.alive == true && !npcOneClicked) {
   
               npcOneClicked = true
               heroPosition(event, npcOne)
   
              }
          }
       )

   **Progressing to `heroPosition()`**

   `heroPosition()` passes the click `event` parameter together with `npc` and defines:
   * the new hero position
   * its transition animation from its current position to the next position.

   The first action of this function is to define `currentNPC` as `npc` for scalability of the function, allowing it to be re-used for every npc. 

   note: `currentNPC` is defined globally.
   
   With reflection writing this readme, it could be question if the use of `currentNPC` was necessary of if `npc` could have been used throughout the function.

   **The new hero position** is defined through the use of variables `newHeroXPosition` and `newHeroYPosition`. 

   **The transition animation** is more complex: 
   * it, first, requires to define the current hero position (`heroXPositionCurrent` and `heroYPositionCurrent`)
   * second, it requires to calculate the distance between `currentNPC` and the hero, which are defined with `xDistance` and `yDistance`. Note that `xDistance` includes the use of variable `npcHeroDistance` to substract 50 pixel from the `newHeroXPosition` in order to avoid both character images being on top of each other.

      //define new position based on npc position
      let newHeroXPosition = currentNPC.Xposition;
      console.log(`npc.Xposition: ${newHeroXPosition}`)
      let newHeroYPosition = currentNPC.Yposition
      console.log(`npc.Yposition: ${newHeroYPosition}`)
      
      //caupture current hero position    
      heroXPositionCurrent = hero.Xposition
      console.log(`heroXPositionCurrent: ${heroXPositionCurrent}`)
      heroYPositionCurrent = hero.Yposition
      console.log(`heroYPositionCurrent: ${heroYPositionCurrent}`)
      
      //create variable to generate space between npc and hero
      let npcHeroDistance = 50
      
      //calculate distance between current to new position in pixels
      //and deduct {npcHeroDistance} left to avoid two images being on top of each other
      xDistance = newHeroXPosition - heroXPositionCurrent - npcHeroDistance
      yDistance = newHeroYPosition - heroYPositionCurrent

   Once these variables are defined, we can then use `animate()` (https://api.jquery.com/animate/) to create the transition of the `#hero-position-avatar-image` from its origin to its destination coordinates.

   Finally, in order to avoid the hero going back to its origin point as soon as the function ends, we need to update the hero object coordinates.

   Overall the animation function should look like this:

      //animation from old to new position
       $("#hero-position-avatar-image").animate({
           left: `+=${xDistance}px`,
           top: `+=${yDistance}px`,
       }, 1000, function () {
           //update hero position object position
           //and deduct {npcHeroDistance} left to avoid two images being on top of each other
           hero.Xposition = newHeroXPosition - npcHeroDistance
           hero.Yposition = newHeroYPosition
   
           console.log('the hero is in position')
           //console.log(hero)
   
           heroDecisionValidation('heroPosition', currentNPC);
   
           screenTwoGeneral(hero, currentNPC)
       });

   Future improvement: this readability of this section could be improved by beakdown this function into smaller function. It would make sense the handle the position of the NPC in a different function. Also, the creation of NPC could be made more scalable if all NPC where concatenated under a single object `npc`. The assignation of position of the NPC and its avatar could have been generated through a simple `for loop` and reduce the repetition of code. Also, with reflection writing this readme, it could be question if the use of `currentNPC` was necessary of if `npc` could have been used throughout the function.

  ### 3.10 Introduction <a name="intro"></a>
  
   The introduction is handled in `.mission-intro-screen-div`.

   From a logic perspective, we are using object `introSequences`, which contains a list of nested objects called `sequenceOne`, `SequenceTwo` ... Each of these nested objects contain an `image` and `text` property.
   
      let introSequences = {
          sequenceOne: {
              text: 'There is a new baddie in town.',
              image: npcFour.avatar.avatarProfile,
          },
          sequenceTwo: {
              text: 'He attacked the village, and you want to impress your mom.',
              image: npcFour.avatar.avatarProfile,
          },
          ...
      }

We declare two variables, which we will use to display the sequences in a loop during the introduction:

   let sequenceIndex = 0;
   let sequencesArray = Object.values(introSequences);

These two variables can now be used within `updatedSequence()`, which is used to display each nested object one after another every time the user clicks on button `#close-intro-button-text`.

For each sequence a sentence is displayed within #mission-intro-text and the associated image is displayed in #mission-intro-img.

Using the two variables mentioned above, we compare them through an if statement: to display a different message on `#close-intro-button-text` depending on what sentence the user is at.

When the user reaches the last sentence, which is sequenceSix `#close-intro-button-text` will display `close` instead of `next`.

   ```js
   function updateSequence() {
       if (sequenceIndex < sequencesArray.length) {
           $('#mission-intro-text').text(sequencesArray[sequenceIndex].text);
           $('#mission-intro-img').attr('src', sequencesArray[sequenceIndex].image);
           if (sequenceIndex === 6) {
               $('#close-intro-button-text').text('Close')
           } else {
               $('#close-intro-button-text').text('Next')
           }
       }
   }
```

Once this function is in place, we need to create a mechanism to loop over `introSequences` object eveyrtime the user click on `#close-intro-button-text`.

In our `$( document ).ready()` we add `updateSequence()` and create a `click()` that listens to the clicks made on button `.close-intro-button`.

For every click on the button, the button activates `updateSequence()` which displays the next sentence on the sequence. When the user is at the last sentence the if statement logic will close the window and allow the user to interact with `.mission-intro-screen-div`

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
               $('.mission-intro-screen-div').css('display', 'none')
               $('.second-screen-div').css('display', 'flex').css('filter', 'grayscale(0)')
               enableClickDiv()
           }
       });

## 4. Technologies <a name="tech"></a>

**HTML** - The main language use through is website is HTML.

**CSS** - CSS is the second most used language and is instrumental in styling and controlling screen width scenarios.

**Bootstrap** - The Bootstrap framework is used throughout this website for layouts and styling. 

**Javascript** - Javascript/JQuery has been used for logic implementation.

**Google Fonts** - Google fonts are used to render the fonts.

**Visual Studio Code** - VS Code is the Integrated Development Environment used to develop the Website.

**GitHub** - GithHub is the hosting site used to store the source code for the Website and Git Pages is used for the deployment of the live site.

**Git** - Git is used as version control software to commit and push code to the GitHub repository where the source code is stored.

**Convertio** - Used to convert .jpeg into webp images.

**TinyJPG** - Used to compress webp images to increase the performance of the site.

**Google Chrome Developer Tools** - Used to debug front end.

**Pixso** - Used to design wireframes. XXXX

**Stable Diffusion** - Used to generate images.

**Pinterest** - Used to search of GIF.

**Ezgif.com** - Used to split gif into smaller animations.

**Remove.bg** - Used to remove GIF backgrounds.

**ui.dev** - Used to generate first image in Readme file rendering site in different format.

**notion.so** - Used to generate tables for Readme file.

**Favicon.io** - Used to generate favicon

## 5. Testing <a name="testing"></a>

   ### 5.1 Validator Testing <a name="val-testing"></a>

   #### 5.1.1 HTML <a name="html"></a>
   <details>
      <summary>index.html</summary>
      <p>
         <img src="" alt="index.html" />
      </p>
   </details>

   #### 5.1.2 CSS <a name="css"></a>
   <details>
      <summary>CSS Testing</summary>
      <p>
         <img src="" alt="styles.css" />
      </p>
   </details>

      #### 5.1.3 Javascript <a name="js"></a>
   <details>
      <summary>CSS Testing</summary>
      <p>
         <img src="" alt="scripts.js" />
      </p>

      Note: 
      * `npcOneClicked` and other similar variables considered as `undefined` by JSHint, cannot be changed to `let npcOneClicked` as it creates a loop where the hero avatar keeps moving up and down. It was therefore decided to ignore JSHint recommendation and leave the variable as is.
      * `createHero` is considered a variable, even though it is a function. I am not sure why JSHint is returning this result
      * `Functions declared within loops referencing an outer scoped variable may lead to confusing semantics.`: this warning comes as the logic is updating a few global variables, which are not a problem for the scope of this project
      * `'Optional chaining' is only available in ES11 (use 'esversion: 11').`: I cannot seem to find a resolution to this message. A few posts I found on stackoverflow seem to advise, this is not an important message.

   </details>

   ### 5.2 Lighthouse Testing <a name="lighthouse-testing"></a>
   **INDEX**
   <details>
      <summary>INDEX</summary>
      <p>
         <h3>Mobile</h3>
         <img src="" alt="index mobile" />
      </p>
      <p>
         <h3>Desktop</h3>
         <img src="" alt="index desktop" />
      </p>
   </details>

   ### 5.3 User Testing <a name="user-testing"></a>

## 6. Bugs & Considerations for the future <a name="bugs"></a>

### 6.0 Current bugs <a name="current-bugs"></a>
The only known bug at this time is within `npcConversation()`: for some reason the logic loops over itself 3 times before moving on to the next function.

This bug can be seen in the console by adding a print statement with `npcConversation()`

This resulted in the the hero recieving the muplier value timed by 3.

**As a workaround** `hero.inventory.itemThree.multiplierApplied` was implemented. It it set to `false` when the hero starts the game.

When recieving the multuplier, the property is set to `true` so it cannot be added again, even if the logic loops.

```js
       if (hero.inventory.itemThree.multiplierApplied == false) {
        hero.stats.lifePoints = hero.stats.lifePoints * 2
        hero.inventory.itemThree.multiplierApplied = true
    }
```

 ### 6.1 Design & User Experience improvements <a name="design-improvements"></a>

To improve the user experience, we could **avoid the user having to scroll up and down** when on `.screen-two-div` by making the `.row` responsible for the Profile Section a collapsible panel.

This way, we could easily fit the the entire image of the map on the screen height without having the scroll up and down to check in information such as life points or quest progress.

This could be easily implemented with a nav bar system, either using boostrap or full javascript: inserting  the profile section row in collapse pannel to make it fit into a single single height.

Another area of work, which could not be implemented is to **switch from the use of .GIF animated images to spritesheets**, as the use of spritesheet appears to be more scalable and customisable. There is a number of youtube tutorial that could be used for testing and potentially implementing.

### 6.2 Logic improvements <a name="logic-improvements"></a>

As mentiond in the previous section about features, there is an number of imporements that could be implemented. With the final project now built, it is easy to see what could be done better in particular to improve the scalability and the readability of the code.
* **Objects** : Objects could have been consolidated. As an example, all NPCs could have been consolidated within the same object `npc` and each of them nested within the object. This would have helped the scalability of the NPC creation (from setting up the npc avatar, assigning a position to placing them on a map: these could have been generated through a loop instead of writting them seperately with `screenTwoGeneral()`.
* **Divide function into smaller functions for improved readability**: this is the case in particuar with function like `npConversation()` and `fight()`
* **Reduce repeat code**: with a better overview of the code, some repeats in particular when it comes to use of the multplier (when npcThree gives itemThree to the hero). Although these issues were spotted, they only became visibe at the end of the project when I started adding more NPCs and slight feature details. Changing the architecture of the logic at this time would have required to many changes, due to dependencies between function, for me to bring corrections on time.
* **Implement a "level up" and experience system**: the current system to increase the hero stats by adding a multiplier is good for the purpose of this mini game but has its limit. It would make more sense in the future, to simply attach the increase of stat point to an item itself (and add the stats within the item object property) and also increase stats based on the value of experience collected: this experience could be attach to as a property of a given npc (like the current reputation system).
* **Commits** : I struggled to exlain myself in simple terms, when doing some commits. This resulted in exceeding the best practice number of characters.
* **Use of forms**: should the game be extended, and the use of databases not being an option, the hero actions and decisions could be validated through forms to update a URL. This URL could then be copied by the user, if they wanted to pause the game and come back to the point where they left it.

## 7. Deployment <a name="deployment"></a>

**Project Creation**
The project starts started by creating a folder from VS Code name `M2Project`. 

Once the folder is created, click on folder to start from sratch.

**Local Deployment**
To copy this project, you can use git clone from your terminal.

Go to the terminal and input: `git clone https://github.com/PhilMele/M2Project.git` in the directory you wish to have the project folder in.

Using your code editor, such as VS Code, click on `open folder` and click on the newly created folder.

## 8. Credits <a name="credits"></a>

* Changing from grayscale(0) to (1): https://stackoverflow.com/questions/78355169/accessing-parent-div-from-child-element?noredirect=1#comment138138297_78355169*/
* Cannot use display `flex` with JQuery show(), and how to achieve it: https://stackoverflow.com/questions/38491653/jquery-show-a-flex-box
* Prevent user from clicking outside of pop up: https://stackoverflow.com/questions/44152202/how-to-disable-click-outside-a-particular-div*/
* Position character on screen: https://stackoverflow.com/questions/28598910/position-an-html-element-at-any-x-y-coordinate-in-a-page*/
* `content:url("image.jpg")`: https://stackoverflow.com/questions/2182716/is-it-possible-to-set-a-src-attribute-of-an-img-tag-in-css*/
* Use left & top in JQuery : https://stackoverflow.com/questions/12744928/in-jquery-how-can-i-set-top-left-properties-of-an-element-with-position-values*/
* Change `src` of `img` tag : https://stackoverflow.com/questions/11722400/programmatically-change-the-src-of-an-img-tag
* Count `true` keys in object : https://stackoverflow.com/questions/52846805/count-the-number-of-trues-in-a-javascript-object*/
* Use of `.hasOwnProperty` used to loop through sentences - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty*/
* Iterate through object properties : https://stackoverflow.com/questions/8312459/iterate-through-object-properties*/
* Dislay one sentence after another : https://stackoverflow.com/questions/37809591/jquery-how-can-showint-text-and-hide-then-showing-another */
* Use of `timeOut` : https://stackoverflow.com/questions/7407935/delay-and-settimeout#:~:text=The%20.,appropriate%20for%20certain%20use%20cases
* ui.dev for the renders in different formats: https://ui.dev/amiresponsive
* Stable Diffusion and Bing AI for the generation of Pixel Art Images
* Gareth Mc Girr who guided me through this project




