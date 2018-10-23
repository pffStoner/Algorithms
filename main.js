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

