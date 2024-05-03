//increases the font size
function userAlert()
{
    document.getElementById("textArea").style.fontSize = "24pt";
}

//sets the font style to cursive
function fancy()
{
    document.getElementById("textArea").style.fontFamily = "cursive";
    document.getElementById("textArea").style.color = "blue";  
    document.getElementById("textArea").style.textDecoration = "underline";
}

//sets the font style back to default
function boring()
{
    document.getElementById("textArea").style.fontFamily = "sans serif"; 
    document.getElementById("textArea").style.fontWeight = "normal"; 
}

//pops and alert
function showAlert()
{
    alert("Styles changed");
    //change weight to bold
    document.getElementById("textArea").style.fontWeight = "Bold";
}


//uppercases the text
function caps()
{
    //get original user input
    var original = document.getElementById("textArea");
    //get it's content
    var toUpper = original.value;
    //change it to upper case
    var upper = toUpper.toUpperCase();
    //append -Moo to the end
    original.value = upper + "-Moo";
}
