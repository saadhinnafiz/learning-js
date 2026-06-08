//* Strings Exercise

// We have a string representing a list of guests:

const guestList = "Our guests are: emma, jacob, isabella, ethan";

//1. Get the Length of the String

const length = guestList.length;
console.log(length);

//2. Uppercase the Entire String

const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);

// 3. Check if 'ETHAN' is on the List

const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");
console.log(isEthanOnTheList);

// 4. Create a Substring of Guest Names

const guestListStart = uppercasedGuestList.indexOf("EMMA");
const substringGuests = uppercasedGuestList.slice(guestListStart);
console.log(substringGuests); // 'EMMA, JACOB, ISABELLA, ETHAN'

//5. Create an Array of Guest Names

const guests = substringGuests.split(", ");
console.log(guests);

//Solutions

/*
1. Get the Length of the String
const length = guestList.length;
console.log(length); // 44

2. Uppercase the Entire String
const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList); // OUR GUESTS ARE: EMMA, JACOB, ISABELLA, ETHAN

3. Check if 'ETHAN' is on the List
const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");
console.log(isEthanOnTheList); // true

4. Create a Substring of Guest Names
const substringGuests = uppercasedGuestList.slice(17);
console.log(substringGuests); // 'EMMA, JACOB, ISABELLA, ETHAN'

5. Create an Array of Guest Names
const guests = substringGuests.split(", ");
console.log(guests); // [ 'EMMA', 'JACOB', 'ISABELLA', 'ETHAN' ]
*/
