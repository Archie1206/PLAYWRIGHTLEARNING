function orderFood(func1, func2, func3){
    console.log("User Order food");
    func1(func2,func3);
}

function prepareFood(func1, func2){
    setTimeout(()=>{
        console.log("Restaurant prepare food");
        func1(func2);
    },10000);
    
}

function delivery(func1){
    setTimeout(()=>{
        console.log("Order is delievered to the customer");
        func1();
    },10000);
    
}

function rating(){
    console.log("User gives 5 star rating");
}

orderFood(prepareFood,delivery,rating);
/*javascript execution is asyncronous
example of callback hell
*/
