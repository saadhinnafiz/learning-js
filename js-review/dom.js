//* DOM: Document Object Model

// Selecting by ID — returns a single element
const view1 = document.getElementById("view1");
console.log(view1);

// Query Selector — returns the FIRST matching element
const view2 = document.querySelector("#view2");
console.log(view2);

// Manipulating styles directly
view1.style.display = "flex";
view2.style.display = "none";

// Select by class name — returns an HTMLCollection (live, array-like but not an array)
const views = document.getElementsByClassName("view");
console.log(views);

// Query Selector All — returns a NodeList (all matching elements)
const sameViews = document.querySelectorAll(`.view`);
console.log(sameViews);

// * Best practice — use querySelector and querySelectorAll for everything
// * They accept any CSS selector (#id, .class, tag, [attribute])
// * getElementById and getElementsByClassName are older — still work but less flexible

// Selecting elements WITHIN a specific element (not the whole document)
const divs = view1.querySelectorAll("div"); // all divs inside view1
console.log(divs);

const sameDivs = view1.getElementsByTagName("div"); // older way, same result
console.log(sameDivs);

// CSS pseudo-selectors work with querySelectorAll too
// nth-of-type(2n) = every even element (2nd, 4th, 6th...)
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

// Looping through NodeList to apply styles to each element
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue"; // changes background of each even div
}

// * Key takeaway — querySelector/querySelectorAll can be called on any element
// * not just document — this scopes the search to inside that element only
// * Any CSS selector you know from stylesheets works here too

// querySelector returns a SINGLE element — first match only
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Boxes"; // changes the text content of the element

// innerHTML — lets you set or replace the entire HTML inside an element
// can include tags, not just text
const navBar = document.querySelector("nav");
navBar.innerHTML = "<h1>Hello</h1><p>This should align right</p>";
console.log(navBar);
navBar.style.justifyContent = "space-between";

// * textContent — sets plain text only, ignores HTML tags
// * innerHTML — sets HTML, tags are parsed and rendered
// * Be careful with innerHTML — never insert user input directly into innerHTML
// * it can lead to XSS (Cross-Site Scripting) attacks — a security vulnerability

//* Navigating the DOM Tree
// The DOM is a tree structure — every element has relationships with other elements

console.log(evenDivs[0]); // the element itself

// * Moving UP the tree
console.log(evenDivs[0].parentElement); // the direct parent element

// * Moving DOWN the tree
console.log(evenDivs[0].parentElement.children); // all child ELEMENTS (HTMLCollection)
console.log(evenDivs[0].parentElement.childNodes); // all child NODES including text nodes and comments
console.log(evenDivs[0].parentElement.hasChildNodes()); // true or false — does it have any children?
console.log(evenDivs[0].parentElement.lastChild); // last child NODE (could be a text node)
console.log(evenDivs[0].parentElement.lastElementChild); // last child ELEMENT only
console.log(evenDivs[0].parentElement.firstChild); // first child NODE (could be a text node)
console.log(evenDivs[0].parentElement.firstElementChild); // first child ELEMENT only

// * Moving SIDEWAYS (siblings)
console.log(evenDivs[0].nextSibling); // next NODE (could be a text node)
console.log(evenDivs[0].nextElementSibling); // next ELEMENT sibling
console.log(evenDivs[0].previousSibling); // previous NODE (could be a text node)
console.log(evenDivs[0].previousElementSibling); // previous ELEMENT sibling

// * Key difference — Node vs Element
// * Node includes everything — elements, text, comments, whitespace
// * Element is only actual HTML elements like div, p, h1 etc
// * In practice always use the Element versions to avoid getting whitespace text nodes

//* Adding and Removing Elements from the DOM

// Hiding view1, showing view2 with flex layout
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

// Removing all existing children from view2 before adding new ones
// while loop keeps removing the last child until there are no children left
while (view2.lastChild) {
  view2.lastChild.remove();
}

// Function that creates a styled div and appends it to a parent element
// parent = where to add the div, iter = the number displayed inside
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div"); // creates a new div element in memory
  newDiv.textContent = iter; // sets the text inside the div
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv); // adds the div to the DOM inside parent
};

// Calling createDivs 12 times — creates divs numbered 1 to 12
for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}

// * createElement — creates an element but does NOT add it to the page yet
// * append — adds the element to the end of the parent
// * prepend — adds to the beginning
// * remove — removes the element from the DOM entirely
