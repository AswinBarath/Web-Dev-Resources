var todos = [
	"clean room",
	"make the bed",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];
var todosImportant = [
	"clean room!",
	"make the bed!",
	"brush teeth!",
	"exercise!",
	"study javascript!",
	"eat healthy!"
];
// For loop
var todosLength = todos.length;
for(var i=0; i<todosLength; i++) {
	// console.log(todos[i]);
	todos[i] = todos[i] + "!"
	console.log(todos[i]);
	// todos.pop()
}

// While loop
var counterOne = 10;
while(counterOne > 0) {
	console.log("while loop", counterOne);
	counterOne--;
}

// Do while loop
var counterTwo = 10;
do {
	console.log("do while", counterTwo);
	counterTwo--;
} while(counterTwo > 0);

// ForEach - ES5
function logTodos(todo, i) {
	console.log("ForEach", todo, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);

