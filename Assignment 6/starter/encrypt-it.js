
function shiftCipher(toCipher)
{
  //code gotten from the question - shift cipher
  toCipher = toCipher.toLowerCase();
  let result = "";
  for (let i = 0; i < toCipher.length; i++) {
    if (toCipher[i] < 'a' || toCipher[i] > 'z') {
      result += toCipher[i];
    } else if (toCipher[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = toCipher.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}

function encrypt()
{
  console.log("Window loaded!");
  //get original string from user
  var original = document.getElementById("input-text");
  //get it's value
  var toCipher = original.value;
  let result = shiftCipher(toCipher);

  //replace the text area with the cipher
  original.value = result;
}

//event listener when buttons clicked
window.addEventListener("load", function()
{

  //encrypt button click listener
  document.getElementById("encrypt-it").addEventListener("click", encrypt);
  encrypt();

  //reset button click listener
  document.getElementById("reset").addEventListener("click", handleReset);
  handleReset();
});

function handleReset()
{
  var original = document.getElementById("input-text");
  original.value = " "
}


/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();



