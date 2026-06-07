const superHero = "Superman";

switch (superHero) {
  case "Iron Man":
    console.log("I am Iron Man");
    break;
  case "Thor":
    console.log("I am Thor");
    break;
  case "Superman":
    console.log("I am Superman");
    break;

  default:
    console.log("Enter a valid Super Hero name.");
    break;
}

/* 
we pass the superHero variable to the switch statement. JS then takes that value
and compares it with a triple equal sign with the first case. 
So if superHero ===  Iron Man ;  only if that is true it will render it. If not
it will continue down below.
The break ends the switch statement when we get the correct case. otherwise it will 
continue through all of it.

the "else" in this case would be default.
*/
