// Documentation: https://www.npmjs.com/package/superheroes

// Usage: superheroes
const superheroes = require('superheroes');

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

var mySuperHero = superheroes.random();
//=> 'Spider-Ham'

// Documentation: https://www.npmjs.com/package/supervillains

// Usage: supervillain?
const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

var mySuperVillain =supervillains.random();
//=> 'Mud Pack'

// My code: fight!
console.log(mySuperHero + " vs " +mySuperVillain);
