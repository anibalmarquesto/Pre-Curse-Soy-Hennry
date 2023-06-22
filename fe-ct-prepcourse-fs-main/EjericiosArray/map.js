const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

// paso a paso

// METODO .map
const reuslt = students.map(function (student) {
  return student.name + " " + student.lastname;
});
console.log(reuslt);
//OTRA FORRMA DE USAR EL MAP
const names = students.map(student => student.name)
console.log(names);

const names2= students.map(student =>{
return {
    fullname: student.name +' ' + student.lasname
}
});
console.log(names2);


//hay otra forma de mapear y traer todos los datos de los array
// son con ...students,

const names3 = students.map(sutdent =>{
    return {
        ...sutdent,
        title:` ${sutdent.name} - ${sutdent.course}`
    }
})
console.log (names3);