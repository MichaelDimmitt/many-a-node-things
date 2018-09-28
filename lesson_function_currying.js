const addNoCurry = (a, b) =>
  a + b

const addCurry = (a) => (b) =>
  a + b;

const addMore = (a) => (b) =>
    a + b;

const recurseCurry = (a) =>
    (b) =>
      ( (b < 10) ?
      (b=b+1, recurseCurry(a)(b)) :
      a + b )

const add3 = addCurry(3); // returns function that adds 3 that will take 1 parameter.

console.log(
  addNoCurry(3, 4), // returns 7
  addCurry(3)(4), // returns 7
  add3(4), // returns 7
  add3(addCurry(3)(2)),//return 8
  addCurry(3)(addCurry(3)(2)),
  add3(recurseCurry(3)(2))
)

