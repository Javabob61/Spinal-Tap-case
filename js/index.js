function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins  
  
  var res = str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
  
  console.log(res);
  
  return res;
}

spinalCase("AllThe-small Things");

/* 
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things". */