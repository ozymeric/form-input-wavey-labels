const labels = document.querySelectorAll('.form-control label')

// Instead of manually wrapping all the letters of labels in our html like this;
/*
<span>E</span>
<span>m</span>
<span>a</span>
<span>i</span>
<span>l</span>
*/

// we'll use javascript code to do that.

// but first we'll need to learn how split() and join() work ?
/*
let xxx = "ozan";

let yyy = xxx.split("");
yyy = ["o","z","a","n"];
As we see, split splits every single letter of a string and puts them into an array.

let zzz = yyy.join("");
zzz = "ozan";
And as we see, join joins every single element of an array and creates a single string from them .
*/

/*
And map() method works like forEach() method. It targets all the elemets one by
one within an array.

squares = [4, 9, 16, 25]
squares.map(Math.sqrt) will give us [2, 3, 4, 5].

and we can use the index numbers as the second argument of map() method.

let newSquares = squares.map((item, index) => console.log(`${item} : ${index}`))
will give us ['4 : 0', '9 : 1', '16 : 2', '25 : 3']
and newSquares.join("");
will give us
'4 : 09 : 116 : 225 : 3'
as a string.
*/


for (let label of labels) {
  // label.innerText.split("") does this:
  // ['E', 'm', 'a', 'i', 'l']

  label.innerHTML = label.innerText
  .split("")
  .map((letter, idx) => `<span>${letter}</span>`).join("");
}
/*
<span>E</span>
<span>m</span>
<span>a</span>
<span>i</span>
<span>l</span>

This is what we have now as html, after the code above:

But we want every single span element to move up at a different time.
So we need to add a delay to each of them coming just a little later then the
previous span element.

Let's implement this into our code by using the same code we've used above:
*/

for (let label of labels) {
  label.innerHTML = label.innerText.split("")
  // label.innerText.split("") does this:
  // ['E', 'm', 'a', 'i', 'l']
  .map((letter, index) => `<span style="transition-delay:${50*index}ms">${letter}</span>`).join("");
  //this code takes every sinle letter in ['E', 'm', 'a', 'i', 'l'] array, and puts them into a span element
  // like this "<span>E</span>" and gives all these span elements a style which is a transition-delay
  // like this "<span style="transition-delay:0ms">E</span>"; and this delay increases
  // according to every span element's index number like this "<span style="transition-delay:0.5ms">m</span>",
  // "<span style="transition-delay:1.5ms">a</span>"
}


/*
#########################################################################
#########################################################################
########################## UDEMY SOLUTION ###############################
#########################################################################
#########################################################################
*/
/*
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
*/
