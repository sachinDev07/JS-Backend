var teacher = "Sanket"; // global
function fun() { // global
    console.log(teacher); // no error will be given
    // console.log(content); // throws an error
    var teacher = "Pulkit"; // scope of fun
    let content = "JS"; // content will be access only post declaration
    if(content == "JS") {
        let hours = "120+";
        console.log(content,hours);
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);
// console.log(content);


/**
 * 
 * {
 * 
 * }
 */