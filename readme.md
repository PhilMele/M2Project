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
   - [Hero Customisation](#hero-customisaion)
   - [Interactions with Non Playing Characters (NPC)](#interactions-with-npc)
   - [NPC interaction: talk or nothing](#talk)
   - [NPC interaction: fight](#fight)
   - [Alternative Endings](#alternative-endings)
   - [Clicks disabled outside of div element](#clicks-disabled)
   - [Cap max screen resolution & responsivness](#max-screen)
   - [Hero Movements](#hero-movements)

4. [Technologies](#tech)

5. [Testing](#testing)
   - [Validator Testing](#val-testing)
     * [HTML](#html)
     * [CSS](#css)
   - [Lighthouse Testing](#lighthouse-testing)
   - [User Testing](#user-testing)

6. [Bugs](#bugs)

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

As a user I want to create a hero with a certain level of customisation by giving my hero a name of my choice and attribute it an avatar.
As the site owner I want to let the hero enter a name of their choice and offer a selection of 2 avatars to choose from

As a user I want to recieve an end goal and have total freedom in how I achieve this end goal
As the site owner I want to set an overall mission without any validation checkpoints in between to unlock the next stage and leave the hero to possibility to make bad choices

As a user I want to recieve guidance, or hints, on what I should do next just in case I get lost in my quest
As the site owner I want to set an overall quest divided into seperate mission
These missions can be completed in any order, however the hero can decide to follow the order of missions provided through the guidance

As a user I want to be able to talk the NPCs and make decision during the conversation process to collect the items needed for the next mission
As the site owner I want to be able to provide validation before and during conversation to leave the hero the choice to finish the conversation with the NPC, or leave it to decide to acquire the mission item in a different way

As a user I want to be able to fight the NPC to collect the item
As the site owner I want to be able to provide the hero an option to fight the NPC

As a the user I want to know how much life points I have and how many damages I inflict to the NPC
As the site owner I want to provide the hero visibility over their stats so they know when to attack or heal
As the site owner I want to provide the hero visibility over the NPC stats so they know when to attack or heal

As the site owner I want to incentive the user to replay the game more than once
As the site owner I want to implement a reputation system that takes into account the hero's actions
As the site owner I want to trigger different ending based on the score attached to the hero reputation


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
   ... (attack, healing, npc defeated, hero defeated, animations)

   ### 3.5 Quest System <a name="quest-system"></a>
   ..

   ### 3.6 Alternative Endings <a name="alternative-endings"></a>
   ...

   ### 3.7 Clicks disabled outside of div element <a name="clicks-disabled"></a>
   .. 

   ### 3.8 Cap max screen resolution & responsivness <a name="max-screen"></a>
   .. 

   ### 3.9 Hero Movements <a name="hero-movements"></a>
   .. 

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



## 7. Deployment <a name="deployment"></a>

**Project Creation**
The project starts started by creating a folder from VS Code name `M2Project`. 

Once the folder is created, click on folder to start from sratch.

**Local Deployment**
To copy this project, you can use git clone from your terminal.

Go to the terminal and input: `git clone https://github.com/PhilMele/M2Project.git` in the directory you wish to have the project folder in.

Using your code editor, such as VS Code, click on `open folder` and click on the newly created folder.

## 8. Credits <a name="credits"></a>






