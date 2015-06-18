var person = {
 firstName: "Penelope",
 lastName: "Barrymore",
 fullName: function () {

     console.log(this.firstName + " " + this.lastName);

     console.log(person.firstName + " " + person.lastName);
 }
}

person.fullName();
