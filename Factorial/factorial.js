const form = document.getElementById("form");
form.onsubmit = function ()
{
    const num = document.getElementById("number").value;
    const result = document.getElementById("result");
    var i;
    fact = 1;
    for (i = 1; i <= num; i++) 
    {
        fact = fact * i;
    }
    result.innerHTML = 'The factorial of ' + num + ' is ' + fact;
    return false;
}   