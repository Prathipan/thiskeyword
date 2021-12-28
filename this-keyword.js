// --------using 'this' keyword-------------

var student = {
    fname : "ram",
    lname : "kumar",
    fullname : function() {
        return this.fname + ", " + this.lname
    }
}

console.log(student.fullname());

var student2 = {
    fname : "naresh",
    lname : "kumar",
    fullname : student.fullname,
}

console.log(student2.fullname());

var printfullname = function() {
    return this.fname + ", " + this.lname;
}

var student3 = {
    fname : "praveen",
    lname : "kumar",
    fullname : printfullname,
}

//console.log(printfullname()); is undefined because it doesn't refers any object
// console.log(student3.printfullname());    -----> is not valid.function should be refered inside the object
console.log(student3.fullname());


//------------call-------------------

var student4 = {
    fname : "sunil",
    lname : "naren",
    welcomemsg : function(hometown,state) {
        return "welcome " + this.fname + ", " + this.lname +  " from " + hometown + " " + state;
    }
}


console.log(printfullname.call(student4));
 /* explanation
      if we have a function but it doesn't refer any object we can push that function  using "call" method */ 

var student5 = {
    fname : "santhosh",
    lname : "kumar",
}

console.log(student4.welcomemsg.call(student5,"madurai","Tamilnadu"));
 // here we didn't have any function inside student5 but we call "student4 welcomemsg" function using call object to refer student5


  
 //---------------apply--------------
var student6 = {
    fname : "Imran",
    lname : "tahir",
}
 console.log(student4.welcomemsg.apply(student6,["chennai","tamilnadu"]))
//  only difference between call and apply is that we can pass arguement in call method as a String
//  but in apply method we pass arguement as an array


//---------------bind-----------------
// bind method creates the copy of the function, it will return the function only

// console.log(student4.welcomemsg.bind(student6));
var output = student4.welcomemsg.bind(student6);
console.log(output);
console.log(output());