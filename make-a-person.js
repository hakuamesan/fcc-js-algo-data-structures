var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName, lastName;

  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.getFirstName = function(){
    return firstName;
  };
  this.getLastName = function(){
    return lastName;
  };


  this.setFirstName = function(a){
    firstName = a;
  };
  this.setLastName = function(a){
    lastName = a;
  };
  this.setFullName = function(a){
    let n = a.split(" ");
    firstName = n[0];
    lastName = n[1];
    return firstName + " " +lastName;
  };
  
  this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
