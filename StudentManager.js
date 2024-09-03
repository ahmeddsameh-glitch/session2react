const fs = require("fs").promises;
const path = require("path");
const dataFile = path.join(__dirname, "students.json");

class StudentManager {
  constructor() {
    this.students = [];
  }
  async createStudent(student) {
    this.students.push(student);
    await this.saveStudents();
  }
  async deleteStudent(name) {
    this.students = this.students.filter((student) => student.name !== name);
    await this.saveStudents();
  }
  async deleteAllStudents() {
    this.students = [];
    await this.saveStudents();
  }
  async updateStudent(student) {
    const index = this.students.findIndex((s) => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
      await this.saveStudents();
    } else {
      console.log("Student not found");
    }
  }
  async getStudents() {
    return this.students;
  }
  async saveStudents() {
    await fs.writeFile(dataFile, JSON.stringify(this.students, null, 2));
  }
  async loadStudents() {
    try {
      const jsonString = await fs.readFile(dataFile, "utf8");
      this.students = JSON.parse(jsonString);
    } catch (err) {
      this.students = [];
    } finally {
      console.log("This operation has completed");
    }
  }
  async getStudentbyId(id){
    await this.loadStudents();
    const student = await this.students.find((student) => student.id === id);
    return student;
  }
}
module.exports = StudentManager;

