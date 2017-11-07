const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

var students = [{
  "id": 1,
  "First Name": "Alice",
  "Last Name": "Zephyr",
  "Home Town": "Seattle"
},
{
  "id": 2,
  "First Name": "Bob",
  "Last Name": "Yellow",
  "Home Town": "Vancouver"
},
{
  "id": 3,
  "First Name": "Claire",
  "Last Name": "Xylitol",
  "Home Town": "Toledo"
},
{
  "id": 4,
  "First Name": "Daniel",
  "Last Name": "Winston",
  "Home Town": "Akron"
},
{
  "id": 5,
  "First Name": "Edina",
  "Last Name": "Veritas",
  "Home Town": "Wichita"
},
];

app.get("/", function (request, response) {
  response.json(students);
}
)

app.get("/:id", function (request, response) {
  var record = findById(students, request.params.id)
  if (!record){
    response.status = 404;
    response.json({
      error: {
        message: "No record found!"
      }
    });
  }
  response.json({students: record});
}
)

app.listen(process.env.PORT || 3000);
