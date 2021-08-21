import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

class StudentManagement extends Component {
  state = {
    students: [],
  };
  onAddStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };
	onDeleteStudent=(studentItem)=>{
		const {students} = this.state;
		const newStudents = students.filter((student)=>student.id !== studentItem.id);
		this.setState({
			students:newStudents,
		})

	}
	onModifyStudent=(studentItem)=>{
		console.log(studentItem)
	}
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary display-3">
          Quản lý sinh viên
        </h1>
        <StudentForm onAddStudent={this.onAddStudent} />
        <StudentTable
          students={this.state.students}
					onDeleteStudent = {this.onDeleteStudent}
					onModifyStudent = {this.onModifyStudent}
        />
      </div>
    );
  }
}

export default StudentManagement;
