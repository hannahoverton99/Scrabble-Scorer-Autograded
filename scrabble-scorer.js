// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }
// console.log(oldScrabbleScorer(initialPrompt()));

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word to score:");
   return word; 
};

let simpleScorer= 
function simpleScore(word){
   let scores= {1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']};
   word= word.toUpperCase();
   let letterPoints= 0;
   for(let i=0; i<word.length; i++){
      for( const pointValue in scores){
         if (scores[pointValue].includes(word[i])){
            letterPoints += Number(pointValue);
         }
      }
   }
   return letterPoints;
}
//  console.log(simpleScorer(initialPrompt()));

let vowelBonusScorer= 
function vowelBonus(word){
   let scores= {1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
                         3: ['A', 'E', 'I', 'O', 'U']};
   word= word.toUpperCase();
   let letterPoints= 0;
   for(let i=0; i < word.length; i++){
   for(const pointValue in scores){
      if(scores[pointValue].includes(word[i])){
         letterPoints += Number(pointValue);
      }  
   } 
   }
   return letterPoints;
}
    

//  console.log(vowelBonusScorer(initialPrompt()));

let newPointStructure = transform(oldPointStructure);


let scrabbleScorer=
function newScrabble(word){
   let scores= newPointStructure;
   word= word.toLowerCase();
   let letterPoints= 0;
   for(let i=0; i < word.length; i++){
      let letter= word[i];
      if(letter in scores){
         letterPoints += scores[letter];
      }

   } 
   return letterPoints;
   }


const scoringAlgorithms = [
   {
      name:"Simple Scorer",
      description: "Each letter is worth 1 point",
      scorerFunction: simpleScorer},
      {
         name: "Bonus Vowels",
         description: "Vowels are 3 pts, consonants are 1 pt.",
         scorerFunction: vowelBonusScorer},
         {
            name: "New Scrabble",
            description: "The brand new scoring algorithm.",
            scorerFunction: scrabbleScorer},
         ];
         
         
         function scorerPrompt() {
            let word = initialPrompt();
            let numAlgorithms = scoringAlgorithms.length;
            let algorithmTypes ="";
            
            for (let i=0; i < numAlgorithms; i++) {
               algorithmTypes += `\n${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`;
            }
            
            console.log("\nChoose a scoring algorithm for your game. Enter the number for the corresponding Scorer:");
            console.log(algorithmTypes);
            let scorerIndex = input.question("\nYour algorithm choice is: ");
            
            
            console.log("Chosen algorithm name: ", scoringAlgorithms[scorerIndex].name);
            
            let chosenAlgorithm = scoringAlgorithms[scorerIndex];
            
            
            console.log("The total score for your word is: ", chosenAlgorithm.scorerFunction(word));
            return chosenAlgorithm;
            
         }
         
         
         //loop through oldPointStructure object key/value pairs change points to lower case letters add point value as value to letter keys. 
         function transform(oldPointStructure) {
            let newStructureObj= {};
            for (const pointValue in oldPointStructure){
               let letters=oldPointStructure[pointValue];
                  for(let i=0; i < letters.length; i++){
                     let letterpoints = letters[i];
                     newStructureObj[letterpoints.toLowerCase()] = Number(pointValue);
                  }
               }
               return newStructureObj;
            };

               // a = 1;
               // b= 3;
               // c= 3;
               // d= 2;
               // e= 1;
               // f= 4;
               // g= 2;
               // h= 4;
               // i= 1;
               // j= 8;
               // k= 5;
               // l= 1;
               // m= 3;
               // n= 1;
               // o= 1;
               // p= 3;
               // q= 10;
               // r= 1;
               // s= 1;
               // t= 1;
               // u= 1;
               // v= 4;
               // w= 4;
               // x= 8;
               // y= 4;
               // z= 10;  
                
               
         
      
   
   
   function runProgram() {
      
      
      
      scorerPrompt();
      
      
   }  
   
   
   // Don't write any code below this line //
   // And don't change these or your program will not run as expected //
   module.exports = {
      initialPrompt: initialPrompt,
      transform: transform,
      oldPointStructure: oldPointStructure,
      simpleScorer: simpleScorer,
      vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
}
