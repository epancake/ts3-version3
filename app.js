const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

var students = [{
  "id": 1,
  "FirstName": "Alice",
  "LastName": "Zephyr",
  "HomeTown": "Seattle"
},
{
  "id": 2,
  "FirstName": "Bob",
  "LastName": "Yellow",
  "HomeTown": "Vancouver"
},
{
  "id": 3,
  "FirstName": "Claire",
  "LastName": "Xylitol",
  "HomeTown": "Toledo"
},
{
  "id": 4,
  "FirstName": "Daniel",
  "LastName": "Winston",
  "HomeTown": "Akron"
},
{
  "id": 5,
  "FirstName": "Edina",
  "LastName": "Veritas",
  "HomeTown": "Wichita"
},
];

function findById(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i];
        }
    }
    return null;
}

app.get("/", function (request, response) {
  response.json({data: students});
}
)

app.get("/:id", function (request, response) {
  var record = findById(students, request.params.id)
  if (!record){
    response.status(404);
    response.json({
      error: {
        message: "No record found!"
      }
    });
  }
  response.json({data: record});
}
)

app.listen(process.env.PORT || 3000);
