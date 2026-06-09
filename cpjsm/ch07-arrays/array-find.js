//* Array.find()

// returns the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.

// Example: Finding a State
var states = ["tx", "ca", "nm"];

const statesFoundUsingFind = states.find((state) => state === "tx");
console.log(statesFoundUsingFind);

// Example: Finding an Item in a Store
var itemsInStore = ["fruits", "tvs", "ipods", "carpets"];
var customerRequestedItem = "tvs";

const targetItem = itemsInStore.find((item) => item === customerRequestedItem);
console.log(targetItem);

//Example: Finding a Tree in a Store

var treeStore = ["birch", "maple", "oak", "poplar"];
var targetTree = "birch";

const tree = treeStore.find((tree) => tree === targetTree); // note: both "tree" var is a seperate temp. variable
console.log("Tree: " + tree);
