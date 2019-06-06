var balise = document.querySelector('#mydiv');

 let animals = ['🐔', '🐷', '🐑', '🐇','🐔', '🐷', '🐑', '🐇'];
// let humans = new Map(['👶','🕵','🙋','👪']);
 console.log(animals);

 let uniqueAnimals = [...new Set(animals)];
 console.log(uniqueAnimals);


 //Here is an example of new Map object being instantiated:

 let map = new Map([['name', 'CodingBlast'], ['points', 33], [true, 55], ['true', 44]])
 
 for (let [key, value] of map.entries()) {
   console.log('key is ' + key + ', value is ' + value);
 }

 //We can also go through the list of keys or values:
 for (let key of map.keys()) {
    console.log('key:' + key);
  }
  
  for (let value of map.values()) {
    console.log('value:' + value);
  }
