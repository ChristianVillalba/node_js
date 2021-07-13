// Documentation: https://www.npmjs.com/package/superheroes

// Usage
const superheroes = require('superheroes');

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

var mySuperHeroName = superheroes.random();
//=> 'Spider-Ham'

console.log(mySuperHeroName);
