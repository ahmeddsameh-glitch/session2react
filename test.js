const StudentManager = require("./StudentManager");
const manager = new StudentManager();
async function run() {
  await manager.loadStudents();
  await manager.createStudent({
    name: "mohamed",
    age: 18,
    gpa: 3.6,
    id: "1",
  });
  await manager.createStudent({
    name: "ahmed",
    age: 20,
    gpa: 3.8,
    id: "2",
  });
  await manager.createStudent({
    name: "adel",
    age: 19,
    gpa: 3.7,
    id: "3",
  });

  console.log(await manager.getStudents());

  await manager.deleteStudent("ahmed");
  console.log(await manager.getStudents());

  await manager.deleteAllStudents();
  console.log(await manager.getStudents());
}
run();
