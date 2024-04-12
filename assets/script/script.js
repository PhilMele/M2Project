console.log("connected!")


/*credit classes - https://www.taniarascia.com/understanding-classes-in-javascript/*/
/* characters  */
    /* hero class */
    class hero {
        constructor(name, level) {
            this.name = name;
            this.level = level;
  }
}

let heroInstance = new hero("", "");
console.log(heroInstance)
    /* character 1 class */
    /* character 2 class */
     /* boss class */


/* Event manager  */
//starts at the moment the page is loaded
document.addEventListener("DOMContentLoaded", function(){

    if (heroInstance.name === ''){
        console.log("empty");
        heroInstance = createHero(heroInstance); // Capture the returned value
    } else {
        console.log(`we have a name! the name is ${heroInstance.name}`);
        console.log(heroInstance.name);
    }

});



/* Events - Functions  */

    /*Event 1 - Create user 1 + avatar*/
    function createHero(heroInstance) {
        let name = document.getElementById('heroName').value;
        console.log(name);
        heroInstance.name = name;
        console.log(heroInstance)
        return heroInstance; // Return the updated heroInstance
    }
 

    /*Event 2 - Start adventure*/
    /*Event 3 - Fight Bosss*/
    /*Event 4 - end*/