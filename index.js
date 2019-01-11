//Reverse the string, But there is a catch, We are modifying the "String" object itself with reverse() method.
String.prototype.reverse = function reverse ()
{
return Array.from(this).reverse().join("");
}


//Defines a Phrase object.
function Phrase(content)
{
  this.content = content;

//To eleminate the use of toLowerCase() method (which in your opinion is unnecessory).
this.processor = function processor(string)
{
return string.toLowerCase();
}

//Process the content by converting it to LowerCase.
this.processedContent = function processedContent()
{
return this.processor(this.content);
}

//Check for palindrome.
this.palindrome = function palindrome()
{
  return this.processedContent() === this.processedContent().reverse();
}

//Convert the supplied stirng to upper case.
this.louder = function louder()
{
  let convert = this.content.toUpperCase();
  return convert;
}
}


//Defines a TranslatedPhrese object.
function TranslatedPhrase(content, translation)
{
  this.content = content;
  this.translation = translation;

//Overriding the processedContent() method of Phrase object.
this.processedContent = function processedContent()
{
  return this.processor(this.translation);
}

}

TranslatedPhrase.prototype = new Phrase();
