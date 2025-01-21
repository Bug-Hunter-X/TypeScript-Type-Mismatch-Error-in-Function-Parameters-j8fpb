function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(people: string[]) {
  return people.map(person => "Hello, " + person);
}

let user = ["Jane User", "John User"];
console.log(greeter(user[0])); // Correct: Access the first element of the array
console.log(greeterArray(user)); //Correct: Iterate the array and call the greeter function for each element