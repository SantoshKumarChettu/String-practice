const sentence = 'The quick brown fox jumps over the lazy dog.';

function isCheck(sentence){
    let lowerCased = sentence.toLowerCase();
    let letters = "abcdefghijklmnopqrstuvwxyz.";
   
    for (let char of letters){
        if (!lowerCased.includes(char)) return 0;
    }
    return 1;

}

console.log(isCheck('The quick brown fox jumps over the lazy dog.'));