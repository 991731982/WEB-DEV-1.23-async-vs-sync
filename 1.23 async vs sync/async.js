/*Simulating async behaviour using a timeout*/
var promiseExample = new Promise(function(resolve, reject) {//(resolve, reject)function and action
    var controlVariable = false;
    setTimeout(timerDone, 8000); //5 seconds


function timerDone(){
    console.log("timeout triggered (simulates async response)");

  if(controlVariable){
      console.log("win");
      resolve("Timer ended successfully!");
  }else{
      console.log("lose");
      reject("Timer control variable failed");
  }
}
});

promiseExample.then(function(res) {//when execute, then other behaviour./can chain "then", allows us several process afterwards
  console.log("promiseExample: " + res);
}).catch(function(err){
  console.log(err);
});


//Promises can be chained
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
  