const { executeCurryAndSay } = require('./evalCreateCurry.js')

const sayName = (evalString) => executeCurryAndSay(trimTheFat(evalString))
const trimTheFat  = (evalString) => evalString.replace(/\((?:[()]{2})*\)/g, "")

const print = async () => {
  console.log(`
  the following commands work:
  ${await sayName("say('hello', 'bob')('my')('name')('is')('Arundhati')('have', 'a', 'nice', 'day')('jumbo', 'shrimp')")}
  ${await sayName("say('frog', 'bob')()()()('my')('blah')")}

  the following commands do not work:
  ${await sayName("say('frog', 'bob')()()()('my')('blah')()()()()")}
  `)
};
print()
