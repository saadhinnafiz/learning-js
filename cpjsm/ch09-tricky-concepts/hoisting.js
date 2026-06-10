//* Hoisting

// JavaScript mechanism where declarations are moved to the top of their scope before execution

// var - hoisted, but value is undefined until assigned
// let and const - hoisted but throw ReferenceError if accessed before declaration

// * Never use var
// * Always declare variables before using them
// * Declare at the top of their scope — global at top of file, local at top of function

// Function declarations are hoisted — but always declare before calling anyway
// Function expressions (const fn = () => {}) are NOT hoisted
