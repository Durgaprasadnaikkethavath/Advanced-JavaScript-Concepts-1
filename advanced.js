// Prototype chain  in js

console.log(" ------------------------ Prototype chain --------------");

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, My Name is ${this.name}`);
};

const alice = new Person("Alice");

console.log(alice.name);
alice.greet();

// Modifying the Prototype Chain:
console.log(
  "------------------ Modifying the Prototype Chain ----------------"
);

const protoObj = {
  sayHellO() {
    console.log("Hello from protoObj");
  },
};

const newObj = Object.create(protoObj);
newObj.sayHellO();

/////////////////////////////////////////////////////////////////////////
// Asynchronous JavaScript:
// Callbacks, Promises, async/await.
// Event Loop and Microtask Queue.

console.log("------------- Asynchronous JavaScript ---------------");

// callbacks

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data retrieved");
//   }, 1000);
// }

// fetchData((data) => console.log(data));

//Promises

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data retrieved");
//     }, 1000);
//   });
// };

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Async/Await

// const fetchData = async () => {
//   try {
//     const data = await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Data Retrieved");
//       }, 1000);
//     });
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchData();/

// /////////////////////////////////////////////////////////
//  Event Loop and Microtask Queue
console.log(
  "  ------------------- Event Loop and Microtask Queue ---------------- "
);

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
