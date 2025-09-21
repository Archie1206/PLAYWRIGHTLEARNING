//inner function method a.k.a closer

function multiplier(multiplierValue){
    return function(x){
        let value = 1;
        for(let i=0 ; i<multiplierValue ; i++){
            value = value * x;
        }
        return value;
    }
}

let square = multiplier(2);
let cube = multiplier(3);
let seventh = multiplier(7);

console.log(square(5));
console.log(cube(3));
console.log(seventh(2));