// date utc
const date = new Date();
console.log("Date: ", date); // output: 2024/09/18T01 : 41 : 50.919z

// date local
const local = date.toLocaleDateString();
console.log(local); // output: 2024/09/18
