//Return true if the passed string looks like a valid US phone number.
function telephoneCheck(str) {
  let phoneReg =
    /^((1\s?)?(\d{3}|\(\d{3}\))(-|\s)\d{3}(-|\s)\d{4})|(^\d{10}$)/gi;
  if (str.match(phoneReg)) return true;
  else return false;
}

console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("2(757) 622-7382")); // false
