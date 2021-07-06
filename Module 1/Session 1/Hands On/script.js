const students = [
    { name: "alice", age: 20 },
    { name: "bob", age: 21 },
    { name: "jane", age: 20 },
  ];

  var tampung = document.getElementById("show");
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < students.length; i++) {
    
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var sName = document.createTextNode(students[i].name);
    var sAge = document.createTextNode(students[i].age);
    cell1.appendChild(sName);
    cell2.appendChild(sAge);
    row.appendChild(cell1);
    row.appendChild(cell2);
    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  show.appendChild(tbl);

  buttonAvg.addEventListener("click", () => {
      console.log(getAverage(ages))
  });

  let ages = students.map(person => person.age);

  let getAverage = arr =>{
    let reducer = (total,currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length
  }