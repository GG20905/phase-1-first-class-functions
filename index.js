function receivesAFunction(toBeCalled){
 toBeCalled();
}
function returnsANamedFunction(){
    return function toBeCalled(){};
}
function returnsAnAnonymousFunction(){
    return function(){};
}