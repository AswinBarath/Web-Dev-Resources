// change all the HTML elements in the page
// change all the HTML attributes in the page
// change all the CSS styles in the page
// remove existing HTML elements and attributes
// add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByClassName("second"))
console.log(document.getElementsByClassName("second")[0])
console.log(document.getElementById("first"))

// Recommended Approach:
console.log(document.querySelector("h1"))
console.log(document.querySelector("li"))
console.log(document.querySelectorAll("h1"))
console.log(document.querySelectorAll("li, h1"))

console.log(document.querySelector("li").getAttribute("random"))
console.log(document.querySelector("li").setAttribute("random", "1000"))
console.log(document.querySelector("li"))

// Changing Styles
var h1 = document.querySelector("h1");
// h1.style.background="yellow";
// h1.className = "coolTitle";
document.querySelector("li").classList;
document.querySelector("li").classList.add("coolTitle");
document.querySelector("li").classList.remove("coolTitle");
document.querySelector("li").classList.add("done");
document.querySelector("li").classList.toggle("done");

// InnerHTML - Dangerous
// document.querySelector("h1").innerHTML = "<em>!?Q!?</em>";

var li = document.querySelectorAll("li")[1].parentElement;
console.log(li);
console.log(li.parentElement);
console.log(li.children);

// It is important to CACHE selectors in variables
