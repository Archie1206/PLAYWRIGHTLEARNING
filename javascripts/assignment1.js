var obj = {
    f1: function() { console.log("f1")},
    f2: function() { console.log("f2")},
};

var changeMapping = function(o){
    o.f1 = o.f2;
};

changeMapping(obj);
obj.f1();
obj.f2();
