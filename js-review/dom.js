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
