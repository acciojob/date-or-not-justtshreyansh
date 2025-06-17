var isDate = function (input) {
  if (input === null) return false; // Handle cancel button

  if (input instanceof Date) {
    return !isNaN(input.getTime());
  } else if (typeof input === "string") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));