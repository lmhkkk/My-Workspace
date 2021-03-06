import React, { Component } from "react";


const DEFAULT = 1;
const GPA_UP = 2;
const GPA_DOWN = 3;
const FULLNAME = 4;

class StudentTable extends Component {
	state = {
		sortType: DEFAULT,
		editStudents: {
			id: "",
			fullname: "",
			phoneNumber: "",
			email: "",
			math: "",
			phy: "",
			chem: "",
		},
		tempStudents:{},
	};

	onChangeSortType = (e) => {
		e.preventDefault();
		this.setState({
			sortType: +e.target.value,
		});
	};
	editStudents = (student) => {
		this.setState({
			editStudents: student,
			tempStudents: student,
		})

	}
	onEditHandler = e => {
		const { name, value } = e.target;
		this.setState({
			editStudents:{...this.state.editStudents,
				[name]:value,
			}
		});
	}
	onSaveHandler=e=>{
		e.preventDefault();
		this.props.onUpdateStudents(this.state.editStudents,this.state.tempStudents);
	}

	render() {
		const { students, onDeleteStudent } = this.props;
		const { sortType } = this.state;
		let newStudent = [];
		newStudent = students.map((student) => {
			const { id, fullname, phoneNumber, email, math, phy, chem } = student;
			const gpa = (parseFloat(math) + parseFloat(phy) + parseFloat(chem)) / 3;
			return {
				id,
				fullname,
				phoneNumber,
				email,
				math,
				phy,
				chem,
				gpa: parseFloat(gpa.toFixed(1)),
			};
		});
		switch (sortType) {
			case GPA_UP:
				newStudent.sort((student1, student2) => {
					return student1.gpa - student2.gpa;
				})
				break;
			case GPA_DOWN:
				newStudent.sort((student1, student2) => {
					return student2.gpa - student1.gpa;
				})
				break;
			case FULLNAME:
				newStudent.sort((student1, student2) => {
					return student1.fullname.localeCompare(student2.fullname);
				})
				break;
			default:
				break;
		}
		return (
			<div>
				<div className="my-2">
					<div className="form-group">
						<label htmlFor="filter"></label>
						<select
							className="form-control"
							name="sortType"
							id="filter"
							value={this.state.sortType}
							onChange={this.onChangeSortType}
						>
							<option value={DEFAULT}>Default</option>
							<option value={GPA_UP}>GPA Up</option>
							<option value={GPA_DOWN}>GPA Down</option>
							<option value={FULLNAME}>Fullname</option>
						</select>
					</div>
				</div>

				<table className="table">
					<thead>
						<tr className="text-center">
							<th>M?? SV</th>
							<th>H??? t??n</th>
							<th>S??T</th>
							<th>Email</th>
							<th>GPA</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{students.length > 0 ? (
							newStudent.map((studentItem, index) => {
								const { id, fullname, phoneNumber, email,gpa } = studentItem;

								return (
									<tr key={index}>
										<td className="pt-3 text-center">{id}</td>
										<td className="pt-3 text-center">{fullname}</td>
										<td className="pt-3 text-center">{phoneNumber}</td>
										<td className="pt-3 text-center">{email}</td>
										<td className="pt-3 text-center">{gpa}</td>
										<td>
											<div className="d-flex justify-content-center align-item-center">
												{/* <!-- Button trigger modal --> */}
												<div>
													<button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.editStudents(studentItem)} >
														S???a
													</button>
													{/* Modal */}
													<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
														<div className="modal-dialog modal-lg text-left">
															<div className="modal-content">
																<div className="modal-header">
																	<h5 className="modal-title text-success" id="exampleModalLabel">Ch???nh s???a th??ng tin sinh vi??n {fullname}</h5>
																	<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
																</div>
																<div className="modal-body fw-bold ">
																	<div>
																		<form onSubmit={this.onSaveHandler}>
																			<div className="row">
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="id">M?? SV</label>
																						<input
																							type="text"
																							name="id"
																							value={this.state.editStudents.id}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onEditHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="fullname">H??? t??n</label>
																						<input
																							type="text"
																							name="fullname"
																							value={this.state.editStudents.fullname}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onEditHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="phoneNumber">S??T</label>
																						<input
																							type="text"
																							name="phoneNumber"
																							value={this.state.editStudents.phoneNumber}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onEditHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="email">Email</label>
																						<input
																							type="text"
																							name="email"
																							value={this.state.editStudents.email}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onEditHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="math">??i???m To??n</label>
																						<input
																							type="text"
																							name="math"
																							value={this.state.editStudents.math}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onEditHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="phy">??i???m L??</label>
																						<input
																							type="text"
																							name="phy"
																							value={this.state.editStudents.phy}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onEditHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="chem">??i???m H??a</label>
																						<input
																							type="text"
																							name="chem"
																							value={this.state.editStudents.chem}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onEditHandler}
																						/>
																					</div>
																				</div>
																			</div>
																			<div className="modal-footer border-top-0">
																				<button type="submit" className="btn btn-primary my-3"  data-bs-dismiss="modal">L??u</button>
																				<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tho??t</button>
																			</div>
																		</form>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<button className="btn btn-danger" type="button" onClick={() => onDeleteStudent(studentItem)}>X??a</button>
											</div>
										</td>
									</tr>
								);
							})
						) : (
							<tr>
								<td colSpan="5" className="text-center">
									<p>Ch??a ??i???n th??ng tin sinh vi??n</p>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default StudentTable;
