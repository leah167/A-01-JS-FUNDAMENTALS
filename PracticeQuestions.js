////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function sum(num1, num2) {
  return num1 + num2 + x;
}
console.log("Q1: ", sum(3, 4));

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const sum2 = (num1, num2) => {
  return num1 + num2 + x;
};
console.log("Q2: ", sum2(5, 6));
// 3. Write a function that returns another function. (use arrow functions please)

const sum3 = () => {
  const a = 3;
  const returnedFunction = (b) => a + b + x;
  return returnedFunction;
};
console.log("Q3: ", sum3()(7));

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log("Q4: ", getFunction()(2));
console.log(
  "Q4 answer: The returned function (insideFunc) still has access to the (y) variable in the outer function (getFunction) because (insideFunc) is a closure. A closure is a function that references variables in the outer scope from its inner scope."
);

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const errorHandler = () => {
  try {
    let message = couldThrowError();
    console.log("Result: ", message);
  } catch (error) {
    console.log("Result: ", error.message);
    console.log("Sorry, there was an error");
  }
};
console.log("Q5: ");
errorHandler();

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const arrayOfObjects = userData.map((user) => {
  const newObject = {};
  newObject.id = user.id;
  newObject.favoriteFoods = user.favorites.food;
  return newObject;
});

console.log("Q5(2): ", arrayOfObjects);

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizzaLovers = userData.reduce((acc, curr) => {
  if (curr.favorites.food.includes("pizza")) {
    acc.push(curr.name);
  }
  return acc;
}, []);

console.log("Q6: ", pizzaLovers);

// 7. Show an an example of a switch statement being used

const example = "Coffee Order";

switch (example) {
  case "Americano":
    console.log("Q7: Americano");
    break;
  case "Cappuccino":
    console.log("Q7: Cappuccino");
    break;
  case "Macchiato":
    console.log("Q7: Macchiato");
    break;

  default:
    console.log("Q7: Black Coffee");
    break;
}

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const combinedUserData = { ...userPersonalData, ...userGameData };
console.log("Q8: ", combinedUserData);

// 9. Make a copy of your new user object but override the birthday to december 31st

combinedUserData.birthday = "december 31st";
console.log("Q9: ", combinedUserData);

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const accomplishments = { ...combinedUserData.accomplishments };
console.log("Q10: ", accomplishments);

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const { food } = user.favoriteThings;
console.log("Q11: ", food);

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [first, second] = food;
console.log("Q12: ", first, ",", second);

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

const [name, age, ...food2] = data;
console.log("Q13: ");
console.log(name);
console.log(age);
console.log(food2);

// 14. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const {
  name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: {
      things: [favoriteThing, secondfavoriteThing],
    },
  },
} = userInfo;
console.log("Q14: ", {
  userName,
  favoriteFood,
  favoriteThing,
  secondfavoriteThing,
});

// var fetchData = () =>
//   new Promise((resolve, reject) => {
//     console.log("fetchingData from imaginary database");
//     setTimeout(() => {
//       try {
//         // fetchingData from imaginary database
//         if (Math.ceil(Math.random() * 2) < 2) {
//           throw new Error("Error!");
//         }
//         resolve({ name: "john", age: 42 });
//       } catch (error) {
//         reject(error);
//       }
//     }, 5000);
//   });

// module.exports = fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Q15: ");
fetchData().then(
  (value) => {
    console.log("Q15: ", value);
  },
  (error) => {
    console.log("Q15: ", error.message);
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Q16: ");
const newMethod = async () => {
  try {
    const awaitVar = await fetchData();
    console.log("Q16: ", awaitVar);
  } catch (error) {
    console.log("Q16: ", error.message);
  }
};
newMethod();
