function runFiveMiles() {
  console.log("Go for a five-mile run");
}

function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function monday() {
  exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function monday() {
  exerciseRoutine(liftWeights);
}

monday()
exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
  });

  function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      return "protein bar";
    } else if (exercise === swimFortyLaps) {
      return  "kale smoothie";
    } else {
      return  "granola";
    }
}
const afterExercise = morningRoutine(liftWeights);
console.log(afterExercise);

//Assignment starts here
function callBack(){
    return "I was called"
}

function receivesAFunction(callBack){
    return callBack()
}

const namedFun = function(){
    console.log("I was named")
}
function returnsANamedFunction(){
    return namedFun
} 

function returnsAnAnonymousFunction() {
    return function() {
      console.log("Anonymous function says, Play some Chess!")
    };
  }