const Person = function (firstAndLast) {
  // Only change code below this line
  let x = firstAndLast.split(" ");
  let firstName = x[0];
  let lastName = x[1];
  let fullName = `${firstName} ${lastName}`;

  this.getFirstName = (_) => firstName;
  this.getLastName = (_) => lastName;

  this.setFirstName = (fName) => {
    firstName = fName;
    fullName = `${firstName} ${lastName}`;
  };
  this.setLastName = (lName) => {
    lastName = lName;
    fullName = `${firstName} ${lastName}`;
  };
  this.setFullName = (fuName) => {
    let c = fuName.split(" ");
    firstName = c[0];
    lastName = c[1];
    fullName = fuName;
  };
  this.getFullName = (_) => fullName;
};

const bob = new Person("Bob Ross");

bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());
