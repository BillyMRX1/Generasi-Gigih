const students = [
    { name: "alice", age: 20 },
    { name: "bob", age: 21 },
    { name: "jane", age: 20 },
  ];

  const wait = time => new Promise(resolve => setTimeout(resolve,time));

  const table = document.getElementById("show");
  for (var i = 0; i < students.length; i++) {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = students[i].name;
    cell2.innerHTML = students[i].age;
  }

  buttonAvg.addEventListener("click", () => {
    console.log('calculation start')
    wait(5000).then(() => console.log(getAverage(ages)));
    console.log('second call started')
    wait(2000)
      .then(() => console.log('second call finish'))
      .then(() => console.log('third call started'))
    wait(5000).then(() => console.log('third call started'))
  });

  let ages = students.map(person => person.age);

  let getAverage = arr =>{
    let reducer = (total,currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length
  }
  