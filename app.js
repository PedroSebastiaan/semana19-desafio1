document.addEventListener("DOMContentLoaded", function(event){  
    structureWords()
    structureLetters()
});

// FUNCTIONS
// Clean the text (symbols and spaces)
cleanText = (text) => {
    text = text.replaceAll(',', '');
    text = text.replaceAll('.', '');
    text = text.replaceAll('!', '');
    text = text.replaceAll('?', '');
    text = text.replaceAll('\n', '');
    text = text.replaceAll('\t', '');
    return text;    
};

// Turn the text into a array
turnInArray = (text) => {return text = text.split(' ')};
turnInArrayToLetters = (text) => {return text = text.split('')};

// Pick up the text 
pickTheText = () => {return document.getElementById("texto-entrada").textContent};

// Clean the array
cleanTheArray = (array) => {return array.filter((element) => element !== '')};

// Delete spaces
cleanTheSpaces = (text) => {return text = text = text.replaceAll(' ', '')};

// Test text
const TESTTEXT = 'hola, esto, hola, podria, no, no, funcionar';

// Save the test text formated into a variable
ary = turnInArray(cleanText(TESTTEXT));

// Find the duplicates words
FindDuplicates = (arry) => arry.filter((item, index) => arry.indexOf(item) !== index);

// Count the number of duplicates
countDuplicates = (text) => {
    let data = cleanTheArray(turnInArray(cleanText(text)));
    let duplicatedWords = FindDuplicates(data);
    let duplicatedValues = []
    let finalArray = []
    //First loop the array of duplicated words
    for (let i = 0; i < duplicatedWords.length; i++){
        // Second loop the array of all words
        var duplicates = 0;
        for (let j = 0; j < data.length; j++){
            if (duplicatedWords[i] === data[j]){
                duplicates ++;
            }
        };
        duplicatedValues.push({a: duplicatedWords[i], b: duplicates});
        finalArray.push(`<p><strong>${duplicatedWords[i]}</strong>: ${duplicates}</p>`);
    };
    return finalArray;
};

// Print into html
structureWords = () => {
    ary = countDuplicates(pickTheText());
    let words = document.getElementById("words");
    for (let i = 0; i < ary.length; i++){
        words.innerHTML += ary[i];
    };
};

// Count the letters
countDuplicatesLetters = (text) => {
    let data = cleanTheArray(turnInArrayToLetters(cleanTheSpaces(cleanText(text))));
    let letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'];
    let finalArray = []
    //First loop the array of duplicated words
    for (let i = 0; i < letters.length; i++){
        // Second loop the array of all words
        var duplicates = 0;
        for (let j = 0; j < data.length; j++){
            if (letters[i] === data[j]){
                duplicates ++;
            }
        };
        finalArray.push(`<p><strong>${letters[i]}</strong>: ${duplicates}</p>`);
    };
    return finalArray;
};

// Print into html
structureLetters = () => {
    ary = countDuplicatesLetters(pickTheText());
    let letters = document.getElementById("letters");
    for (let i = 0; i < ary.length; i++){
        letters.innerHTML += ary[i];
    };
};