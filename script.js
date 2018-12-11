// 1. All About Me

// In your JavaScript file, instantiate and assign the following variables with information about yourself:
// firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravle should hold a boolean representing whether or not you like to travel
// Log each variable to the console.

var firstName = "Kim";
var lastName = "Preece";
var age = 39; // not really
var likesTravel = true;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(likesTravel);


// 2. Favorite Movies
// In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console.

var movieArray = ["Elf", "Christmas Vacation", "Charlie Brown Christmas"];
var movie2 = movieArray[1];

console.log(movieArray[0]);
console.log(movie2);
console.log(movieArray[1]);
console.log(movieArray[2]);

// 3. Student Grades
// In your JavaScript file, copy and paste the following array:

// var williamGrades = [62, 97, 99, 85, 73, 97];
// Print the first grade in the array to the console.
// Print the last grade in the array to the console.
// Use JavaScript to find William's average grade.

var williamGrades = [62, 97, 99, 85, 73, 97];
var williamFirstGrade = williamGrades[0];

console.log(williamGrades[0]);
console.log(williamGrades[5]);
console.log(williamFirstGrade);

// 4. Movie Star
// In your JavaScript file, create an object that represents a famous movie star. Your object should have the following properties:

// firstName
// lastName
// age
// favoriteFood

// Log the movie star's favorite food to the console.
// Use string template literals to log their full name to the console.
// Use string template literals to log a sentence or two about your movie star to the console. (Example: "Dwayne The Rock Johnson is 46 years old. His favorite food is raw meat.")

var hughObject = {
    firstName: "Hugh",
    lastName: "Jackman",
    age: 50,
    favoriteFood: "steak",
    hobbies: ["singing", "dancing", "saving the world from bad guys" ]
}

console.log(`${hughObject.firstName} ${hughObject.lastName}`);
console.log(`What does ${hughObject.age} year old ${hughObject.firstName} eat?  ${hughObject.favoriteFood}!!`);
console.log(hughObject.hobbies[0]);
console.log(hughObject.hobbies[1]);
console.log(hughObject.hobbies[2]);
console.log(`${hughObject.firstName} has ${hughObject.hobbies.length} hobbies including: ${hughObject.hobbies[0]}, ${hughObject.hobbies[1]}, ${hughObject.hobbies[2]}.`)


// Challenge Refactor your movie star object to add their hobbies. Now your object should look something like this:

// var dwayneObject = {
//   firstName: "Dwayne",
//   lastName: "Johnson",
//   favoriteFood: "Eggs",
//   hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
// }
// Log each one of their hobbies individually to the console.
// Use string template literals to create a sentence about their hobbies. You should include how many hobbies they have in your sentence. (Hint: use the .length property.) Example output: "They have three main hobbies: jumping out of planes, personally holding the San Andreas fault together, and building muscle mass.") Store your new setnence in a variable called hobbiesSentence then log it to the console.
