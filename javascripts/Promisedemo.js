function orderTea(customer_name, tea_type){
    //fulfilled, pending , rejected
    let success= true;
    return new Promise((resolve, reject) => {
        if(success){
            resolve(customer_name+" ! your "+tea_type+" tea is prepared");
        }else{
            reject(customer_name+" ! apologies we are unable to process your "+tea_type+" tea");
        }
    })
}


orderTea("Vaibhav", "Ginger")
.then(success => console.log(success)) // use to capture promise getting return in case it is success
.catch(failure => console.log(failure)) // use to capture promise getting return in case it is failure
.finally(() => console.log("finally")); 