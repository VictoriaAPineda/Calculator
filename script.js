

function show(num){
    document.getElementById("output").value += num;
    /* the += appends on the next number beside it*/
    
}

function clear(){
    document.getElementById("output").value ="";
    /* retrieves the listed value in the output bar and sets it to empty string*/
    

}

function calc(){
    let num = document.getElementById("output").value;
    let result = eval(num);
    document.getElementById("output").value = result;
}