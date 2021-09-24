// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const answer = []
const newArray = array.forEach(element => {
  answer.push(element.username + '!');
})
console.log('forEach', answer)

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArr = array.map(ele => ele.username + '?')
console.log('map()', mapArr)

//Filter the array to only include users who are on team: red
const filterArr = array.filter(ele => ele.team === "red")
console.log('filter()', filterArr)


//Find out the total score of all users using reduce
const reduceArr = array.reduce((acc, ele) => {
  return acc + ele.score
}, 0)
console.log('reduce()', reduceArr)

// (1), what is the value of i? -> index of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) =>  num * 2)

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
