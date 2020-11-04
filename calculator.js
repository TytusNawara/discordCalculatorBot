let eval = require('mathjs').evaluate;
const {performance} = require('perf_hooks');


let doSomething = function () {
    let wynik = '';
    try{
        wynik = eval('123124 dolars to euro')
    }
    catch (e) {

    }
    console.log(wynik);
};

var t0 = performance.now();

doSomething() ;  // <---- The function you're measuring time for

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
