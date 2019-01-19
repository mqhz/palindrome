
module.exports = Phrase;

//Reverse the string, But there is a catch, We are modifying the "String" object itself with reverse() method.
String.prototype.reverse = function reverse ()
{
return Array.from(this).reverse().join("");
}

//Defines a Phrase object.
function Phrase(content)
{
  this.content = content;

  //Provide an output of a String consist of only letters in that String.
  this.letters = function letters()
  {
  return (this.content.match(/[a-z]/gi) || []).join("");
  }

//Process the content by converting it to LowerCase.
this.processedContent = function processedContent()
{
return this.letters().toLowerCase();
}

//Return true if the phrase is a palindrome, false otherwise.
this.palindrome = function palindrome()
{
  if(this.processedContent())
  {
  return this.processedContent() === this.processedContent().reverse();
  }
  else {
      return false;
      }
    }
  }
