function countdown(callback){
  window.setTimeout(()=>{
    callback();

  }, 2000);

}

function createMultiplier(multiplerValue){
  return function(value){
    return multiplerValue * value;
  };
}

function multiplier (a,b){
  return a * b;
}
var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null,doubler)
var triplerWithBind = multiplier.bind(null,tripler)
