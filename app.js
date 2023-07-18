const person = {
  fname: "ahmed",
  lname: "hossam",
  age: 20,
  city: "alex",
};

const personjsn = JSON.stringify(person);
console.log(personjsn);

const fs = require("fs");
const { json } = require("stream/consumers");
fs.writeFileSync("file", personjsn);
console.log(fs.readFileSync("file"));
console.log(fs.readFileSync("file").toString());

const person_obj = JSON.parse(personjsn);

person_obj.fname = "adel";
person_obj.lname = "ahmed";
person_obj.age = 40;
person_obj.city = "cairo";

const turn_jsn = JSON.stringify(person_obj);

fs.writeFileSync("WriteFileSync", turn_jsn);
