// require("franc")

// export function detectIso6393(text) {
//     // franc returns ISO 639-3 codes, including 'und' for undetermined
//     return franc(text);
//   }

// print process.argv
const franc = require('franc');
const langs = require('langs');
const args = process.argv[2];

const frase = franc(args);
try {
    const lang = langs.where('3', frase);
    console.log(lang.name);
} catch{
    console.log("We couldnt identify that language, please try again")
}