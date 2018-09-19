const { curry } = require('./curry.js')

async function buildEvalCurryLetters(evalString) {
  let lettersAdd = 'a', lettersParams = 'a';
  const nextChar = (c) => { return String.fromCharCode(c.charCodeAt(0) + 1); }
  const addLetter = (letter) => (lettersAdd+=`+' '+${letter} `, lettersParams+=` ,${letter}`)

  const buildLetters = async (count, letter='a') => {
    for(var i = 1; i < count; i++){
      await addLetter(letter = await nextChar(letter) );
    }
    return {lettersAdd, lettersParams}
  }
  const count = ((evalString.match(/'/g) || []).length)/2;
  return await buildLetters(count)
}

async function executeCurryAndSay(evalString) {
  // curry((a, b, c, d, e) => { return a + b + c + d + e;});
  // requires a string that has say function preceeding the string.
  // example: evalString = "say('frog', 'bob')('my')('blah')"

  let { lettersAdd, lettersParams } = await buildEvalCurryLetters(evalString)
  say = await eval (`curry((${lettersParams}) => (${lettersAdd}) ) `)
  return await eval(evalString)
}

executeCurryAndSay("say('frog', 'bob')('my')('blah')")
.then(x => console.log("evalCreateCurryFile: ", x))
module.exports = { executeCurryAndSay }
