const { executeCurryAndSay } = require('./evalCreateCurry.js')

const trimTheFat  = (evalString) => evalString.replace(/\((?:[()]{2})*\)/g, "")

async function sayName(evalString){
  evalString= await trimTheFat(evalString)
  return await executeCurryAndSay(evalString) 
}

const print = async () => {
    
console.log(`
the following commands work: 
"say('hello', 'bob')('my')('name')('is')('Arundhati')('have', 'a', 'nice', 'day')('jumbo', 'shrimp')"
output: ${await sayName("say('hello', 'bob')('my')('name')('is')('Arundhati')('have', 'a', 'nice', 'day')('jumbo', 'shrimp')")}

"say('frog', 'bob')()()()('my')('blah')"
output: ${await sayName("say('frog', 'bob')()()()('my')('blah')")}  

the following commands do not work:
sayName("('frog', 'bob')()()()('my')('blah')()()")
output: ${await sayName("say('frog', 'bob')()()()('my')('blah')()()")}
`)

};
print()

