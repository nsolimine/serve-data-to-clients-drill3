const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const students = [{
  id: 1,
  firstName: "Alice",
  lastName: "Zephyr",
  homeTown: "Seattle"
},{
  id: 2,
  firstName: "Bob",
  lastName: "Yellow",
  homeTown: "Vancouver"
},{
  id: 3,
  firstName: "Claire",
  lastName: "Xylitol",
  homeTown: "Toledo"
},{
  id: 4,
  firstName: "Daniel",
  lastName: "Winston",
  homeTown: "Akron"
},{
  id: 5,
  firstName: "Edina",
  lastName: "Veritas",
  homeTown: "Wichita"
}];

app.get("/", cors(), function (request, response){
  response.json({
    students
  });
});

function getID(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id){
      return students[i];
    }
  }
  return null;
}

app.get("/:id", cors(), function (request, response){
  var idPull = getID(students, request.params.id);
  if (!idPull){
    response.status(404).json({
      error: {
        message: "No records found!"
      }
    });
  }
  response.json({
    students: idPull
  });
});

app.listen(process.env.PORT||4000);
