function orderTea(customer_name, tea_type, func){
    console.log(tea_type +" Tea for "+customer_name);

    setTimeout(function(){
        console.log(tea_type +" Tea is ready for "+customer_name);
        const dt = Date.now();
        while(Date.now() < dt+5000){ 
        }
        console.log(customer_name +" hope you like your order");
    },5000);

    setTimeout(function(){
        console.log(customer_name +" please share the feedback");
    },10000);

    func(customer_name);
}

function haveaseat(customer_name){
    console.log(customer_name+" please have a seat");
}

orderTea("Archit", "Ginger", haveaseat);
orderTea("John", "Black", haveaseat);