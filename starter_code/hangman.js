let hangman;

 class Hangman {
   constructor() {
  this.words=['jorge','ironhack','ajedrez','pokemon','gargola'];//maximo 8 letras
  this.secretWord = '';
  this.letters=[];
  this.guessedLetter='';
  this.errorsLeft=10;
   }

 getWord() {
   return this.words[Math.floor(Math.random() *this.words.length)];
   }

  checkIfLetter(keyCode) {
    //65 corresponde al menor número que puede generar una letra que equivale a "a"
    //90 corresponde al mayor numero que puede generar una letra que equivale a "z"
   if(keyCode>=65&&keyCode<=90)  
    return true;
    return false;
  }

   checkClickedLetters(key) {
   if(this.letters.includes(key))
     return false;
     return true;


   }

  addCorrectLetter(key) {
  //  this.guessedLetter += this.secretWord[i].toUpperCase(); 
    this.guessedLetter+=key;
    this.checkWinner();

   }

  addWrongLetter(letter) {
   this.errorsLeft--;
   this.checkGameOver();

   }

   checkGameOver() {
   if(this.errorsLeft===0)
   return true;
   return false;
   }

   checkWinner() {

    let arrSec=this.secretWord.split('');
    let arrGue=this.guessedLetter.split('');
    let test = "";

    for(let i=0;i<arrSec.length;i++){
      for(let j=0;j<arrGue.length;j++){
        if(arrSec[i] === arrGue[j]){
          test += this.secretWord[i];
          arrGue.splice(j,1);
          break;
        }
      }
    }
    if(test === this.secretWord)
      return true;
      return false;
    

  }

 }


document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangman.secretWord=hangman.getWord();
  hangmanCanvas=new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawHangman();
  hangmanCanvas.drawLines();
};


document.onkeydown = (e) => {
  const key = e.key.toUpperCase();
  const keyCode = e.keyCode;

  if(hangman.checkIfLetter(keyCode)){
    hangman.letters.push(key); 
    if(hangman.checkClickedLetters(key)){
      hangman.addCorrectLetter(key);
    }else{
      hangman.addWrongLetter(key);
    }
  
}
  
};



/*
checkWiner 
Codigo de Prueba para Repl:

let secretWord="jorge"
let guessedLetter="efjersog"
let arrSec=secretWord.split('')
let arrGue=guessedLetter.split('')
let test = "";

  for(let i=0;i<arrSec.length;i++){
    for(let j=0;j<arrGue.length;j++){
      if(arrSec[i] === arrGue[j]){
        test += secretWord[i];
        arrGue.splice(j,1)
        break;
      }
    }
  }
  console.log(test)
   console.log(arrGue)
   
    if(test === secretWord){
    console.log(true)
  } else{
    console.log(false)
  }


*/