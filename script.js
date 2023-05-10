

function show(num){
    document.getElementById("output-bar").value += num;
    /* the += appends on the next number beside it*/
    
}

/* used to be clear() but that is a pre-made js method and can't be used, got error*/
function clearOutput(){
    document.getElementById("output-bar").value = "";
    /* retrieves the listed value in the output bar and sets it to empty string*/
}

function calc(){
    let num = document.getElementById("output-bar").value;
    let result = eval(num);
    document.getElementById("output-bar").value = result;
}