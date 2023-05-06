
// 13-03

// var x ='global';

// function foo() {
//     var x = 'local';
//     console.log(x);
// }

// foo();

// console.log(x);


//13-06
function foo() {
    console.log('global function foo');
}

function bar() {

    function foo() {
        console.log('local function bar');
    }

    //foo();
}

bar();