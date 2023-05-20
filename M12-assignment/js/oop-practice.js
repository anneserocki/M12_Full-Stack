// STEP 1
// DEFINE A CLASS CAT WITH ES5 NAMED CLASS WAY
function cat(name, breed, color) {
    // CLASS PROPERTIES
    this.name = name;
    this.breed = breed;
    this.color = color;
     // CLASS METHODS
    this.meow = function() {
        console.log(`The cat ${this.name} is meowing! This is a ${this.breed}, ${this.color} cat.`)
    }
};

// DEFINE A CLASS DOG WITH ES5 ANOYMOUS WAY
const dog = function(name, breed, color) {
    // CLASS PROPERTIES    
    this.name = name;
    this.breed = breed;
    this.color = color;    
    // CLASS METHODS
    this.bark = function() {
        console.log(`The dog ${this.name} is barking! This is a ${this.breed}, ${this.color} dog.`)
    }
};


// STEP 2
// INSTANTIATED CAT CLASS
const cat1 = new cat('Tom', 'Bengal', 'black'); 
cat1.meow();
// INSTANTIATED DOG CLASS
const dog1 = new dog('Jerry', 'Chow chow', 'white')
dog1.bark()

// STEP 3
// CREATE ANIMAL CLASS
// class animal {
//     // DEFINE PROPERTIES
//     constructor(name){        
//         this.name = name;
//     };
//     // DEFINE METHODS
//     call = function(){
//         console.log('The Animal has been created.')
//     };    
// };
// const thisAnimal = new animal();
// thisAnimal.call();

// STEP 4
// class animal {
//     // DEFINE PROPERTIES
//     constructor(name){        
//         this.name = name;
//     };
//     // DEFINE METHODS
//     call = function(){
//         console.log(`The Animal ${this.name} has been created.`)
//     };    
// };
// const thisAnimal = new animal('cat');
// thisAnimal.call();

// STEP 5
// class animal {
//     // DEFINE PROPERTIES
//     constructor(type, breed, color, height, length){        
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     };
//     // DEFINE METHODS
//     call = function(){
//         console.log(`The Animal ${this.type} has been created, this is a ${this.breed}, ${this.color}, ${this.height}, ${this.length} cat.`)
//     };    
// };
// const thisAnimal = new animal('cat', 'Bengal', 'white', '9.1 in.', '18 in.');
// thisAnimal.call();
// STEP 6
for (const property in thisAnimal) {
    if (Object.hasOwn(thisAnimal, property)) {
        console.log(`thisAnimal.${property} = ${thisAnimal[property]}`);
      }
};
// STEP 7
// class animal {
//     // DEFINE PROPERTIES
//     constructor(type, breed, color, height, length){        
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     };
//     // DEFINE METHODS
//     speak = function() {
//         if (this.type === 'dog') {
//             console.log(`The ${this.color} dog is barking!`)}
//         else if (this.type === 'cat') {
//             console.log(`The ${this.color} cat is meowing!`)
//         } else {
//             console.log(`This animal is speaking!`)
//         };        
//     };    
// };
// const thisAnimal = new animal('cat', 'Bengal', 'white', '9.1 in.', '18 in.');
// thisAnimal.speak();

// STEP 8
function animal(animal_type) {
    // DEFINE PROPERTIES          
    let _type = animal_type;   
    
    // DEFINE METHODS
    let checkType = function () {
        if (_type === 'dog') {
            console.log("It's a dog!")
            return 'dog';
        } else {
            console.log("It's a cat!")
            return 'cat';
        };
    };
    this.speak = function() {        
        console.log(`The ${checkType()} has made a noise!`);        
    }    
};
const thisAnimal = new animal('dog');
thisAnimal.speak();

// STEP 9
// CREATE A METHOD
String.prototype.findWords = function(word) {
    const textParagraph = this.valueOf(); // GETTING THE TEXT PRAGRAPH    
    
    // FIND ALL THE SAME WORDS IN THE TEXT PARAGRAPH WITH REGEXP() METHOD
    const regexp = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = textParagraph.match(regexp);    
    
    // COUNTING THE NUMBER OF THE MATCH WORD
    const count = matches ? matches.length : 0;
    
    // DISPLAY HOW MANY TIME THE WORD APPEARS IN THIS TEXT PARAGRAPH
    alert(`The word "${word}" was found ${count} time${count === 1 ? '' : 's'} in the text paragraph.`);
  };
  
  // INSTANTIATED
  const textParagraph = "This lazy cat is in the living room and eating anothoer cat's food.";  
  textParagraph.findWords('cat'); // ALERTS: THE WORD 'CAT' APPEARS TWICE IN THIS TEXT PARAGRAPH