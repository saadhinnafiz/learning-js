//* Intervals and Timers

/* 

> Asynchronous JavaScript allows you to perform tasks like fetching data 
from a server or handling user interactions without blocking the execution of other code.

> JavaScript provides several built-in functions that enable you to execute code at 
specified intervals or after a delay, even while other code is running.

> This is particularly useful in scenarios like updating a game screen or 
tracking time on a website.

//* setInterval()

> setInterval is like an alarm clock that keeps ringing every X seconds, 
forever, until you turn it off.

> The setInterval function allows you to execute a block of code repeatedly at 
specified time intervals. For example, the following code logs "Hello World" every 
thousand milliseconds:

setInterval(() => {
  console.log('Hello World');
}, 1000);

1000 is milliseconds — 1000ms = 1 second
Every 1 second, it runs the code inside () => {}
It does this forever unless stopped


> To prevent an interval from running indefinitely, you can store it in a variable 
and clear it using the clearInterval() function:

> clearInterval is the "off switch."

const myInterval = setInterval(() => console.log("Hello World"), 1000);

> To stop the interval:
clearInterval(myInterval);

> If you run both lines together, the interval starts and is immediately stopped — 
so you'd see nothing log, or maybe one log if timing is close.

> The clearInterval function is useful when you want the interval to stop 
after a certain condition is met.

//* setTimeout()

> The setTimeout function allows you to execute a block of code after a s
pecified delay. 
> Unlike setInterval, it only runs once unless set up to repeat. 

*/

//* Practical example — stop after 5 seconds:

const myInterval = setInterval(() => {
  console.log("Hello World");
}, 1000);

setTimeout(() => {
  clearInterval(myInterval);
  console.log("Stopped!");
}, 10000);

// This logs "Hello World" every second for 10 seconds, then stops.

// Real world use case — a countdown timer, a clock that updates every second,
// polling a server for updates every few seconds, auto-saving a form every 30 seconds.
