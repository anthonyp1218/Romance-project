let text = "I I'm so in love with you, whatever you want to do is all right with me, because you make me feel so brand new, and I want to spend my life with you"

// takes an argument of the song lyrics and returns an array of all words in the song

const exampleMarkov = {
  I: [ "Im" ],
  Im: [ "so" ],
  so: [ "in" ],
  in: [ "love" ],
  with: [ "you" ],
  whatever: [ "you" ],
  you: [ "want" ],
  want: [ "to" ],
  to: [ "do" ],
  do: [ "is" ],
  is: [ "all" ],
  all: [ "right" ],
  right: [ "with" ],
  with: [ "me" ]
  }
// parseText
function parseText(exampleMarkov){
   return text.toLowerCase().split(' ');
}
function generateWordPairs(exampleMarkov){
  const newArray = exampleMarkov.split(' ')
  const newObject = {};
  for (let i = 0; i <= newArray.length; i++) {
    let currentWord = newArray[i];
    let nextWord = newArray[i+1];
    let markovObject = [nextWord]
    if (wordPairs[currentWord]) {
      wordPairs[currentWord].push(nextWord);
    }
    else {
      wordPairs[currentWord] = [nextWord];
    }
  }
  return wordPairs
 }

function writeLine(text, wordLength){
  let words = parseText(exampleMarkov)
}

    
 
  
  // removes punctuation from the lyrics of song

// // // splits our text in seperate items
// function generateWords(text){
//   let wordPairs = {};
// //   let words = parseText(text)
// //   
   
// //     

// // }
// // // generatePoem(songLyrics, numberOfLines, numberOfWords)
// // function generatePoem(songLyrics, numberOfLines, numberOfWords){
// //   let newArr = parseText(songLyrics);
// //   let wordPairs = generateWordPairs(newArr);
// // }
// takes arguments for song lyrics, desired number of lines of results, and desired number of words in each line
// returns a new poem




// // take an argument of the song lyrics array and returns an object with the markov relationship between words
// //generateWordPairs
// // writeText

// // takes an argument of the markov chain object and returns a randomly generated chain of words (aka string) from the object
// // writeLine





//   // to loop through our words
  
  




// function writeLine(markovObject){

// }

// // /* ->
// { I: [ "I'm" ]
//   I'm: [ "so" ]
//   so: [ "in" ]
//   in: [ "love" ]
//   love: [ "with" ]
//   with: [ "you" ]
//   you: [ "whatever" ]
//   whatever: [ "you" ]
//   you: [ "want" ]
//   want: [ "to" ]
//   to: [ "do" ]
//   do: [ "is" ]
//   is: [ "all" ]
//   all: [ "right" ]
//   right: [ "with" ]
//   with: [ "me" ]
// }
// */