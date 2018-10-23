function fizzBuzz(value){
    for(i=1; i<=value; i++){
        if (i%15 === 0) {
            console.log('fizbuzz');
        }
        else if (i%3 === 0) console.log('fizz');
        else if (i%5 === 0) console.log('buz');
        else console.log(i);

    }
}

// fizzBuzz(30);

function harmlessRansomNote(noteText, magazineText){
    var noteARR = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(word => {
        if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var notIsPossible = true;
    noteARR.forEach(word => {
        if(magazineObj[word]) {
            magazineObj[word]--;
            if(magazineObj[word] < 0) notIsPossible = false; 
        }
        else notIsPossible = false;
    });
    return notIsPossible;
}

// console.log(harmlessRansomNote('moje be nalii', 'nalii be ah hahadf moje '));

function isPalindrome(string) {
    string = string.toLowerCase();
    let charArr = string.split('');
    let validChars = 'qwertyuiopasdfghjklzxcvbnm'
    let lettersArr = [];

    charArr.forEach(char => {
        if(validChars.indexOf(char) > -1) lettersArr.push(char);
    });

    if(lettersArr.join('') === lettersArr.reverse().join(''))
        return true;
    else return false;
}

// console.log(isPalindrome('Madam Im Ad`am'));

function reverseWords(string){
    let wordsArr = string.split(' ');
    let reverseWordsArr = [];

    wordsArr.forEach(word =>{
        let reverseWord = '';
        for(var i = word.length - 1; i >= 0; i--){
            reverseWord +=word[i];
         //   console.log(reverseWord);
        }
        reverseWordsArr.push(reverseWord);
    });
    return reverseWordsArr.join(' ');
}

console.log(reverseWords('Mitko dali stana h? ? j'));

