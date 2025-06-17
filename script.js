var isDate = function (input) {
  //   write your code here
	if (input instanceof Date) {
    // Check if Date object is valid
    return !isNaN(input.getTime());
  } else if (typeof input === "string") {
    // Try parsing the string as a date
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
