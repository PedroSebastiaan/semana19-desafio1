document.addEventListener("DOMContentLoaded", function(event){  
    structureWords()
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

// Pick up the text 
pickTheText = () => {return document.getElementById("texto-entrada").textContent};

//Clean the array
cleanTheArray = (array) => {return array.filter((element) => element !== '')};

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

structureWords = () => {
    ary = countDuplicates(pickTheText());
    let words = document.getElementById("words");
    for (let i = 0; i < ary.length; i++){
        words.innerHTML += ary[i];
    };
};

