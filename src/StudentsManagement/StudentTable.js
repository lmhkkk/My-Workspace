import React, { Component } from "react";


const DEFAULT = 1;
const GPA_UP = 2;
const GPA_DOWN = 3;
const FULLNAME = 4;

class StudentTable extends Component {
	state = {
		sortType: DEFAULT,
		studentInfo:{},
	};

	onChangeSortType = (e) => {
		e.preventDefault();
		this.setState({
			sortType: +e.target.value,
		});
	};
	onChangleHandler =(e) =>{
		const{name,value} = e.target;
		const {students} = this.props;
		students.setState({
			[name]:value,
		})
	}
	onSaveHandler = (e) => {

	}


	render() {
		const { students, onDeleteStudent  } = this.props;
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
							<th>Mã SV</th>
							<th>Họ tên</th>
							<th>SĐT</th>
							<th>Email</th>
							<th>GPA</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{students.length > 0 ? (
							newStudent.map((studentItem, index) => {
								const { id, fullname, phoneNumber, email, math, phy, chem, gpa } = studentItem;

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
													<button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
														Sửa
													</button>
													{/* Modal */}
													<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
														<div className="modal-dialog modal-lg text-left">
															<div className="modal-content">
																<div className="modal-header">
																	<h5 className="modal-title text-success" id="exampleModalLabel">Chỉnh sửa thông tin sinh viên {fullname}</h5>
																	<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
																</div>
																<div className="modal-body fw-bold ">
																<div>
																		<form onSubmit={this.onSaveHandler}>
																			<div className="row">
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="id">Mã SV</label>
																						<input
																							type="text"
																							name="id"
																							value={id}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onChangleHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="fullname">Họ tên</label>
																						<input
																							type="text"
																							name="fullname"
																							value={fullname}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onChangleHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="phoneNumber">SĐT</label>
																						<input
																							type="text"
																							name="phoneNumber"
																							value={phoneNumber}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onChangleHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="email">Email</label>
																						<input
																							type="text"
																							name="email"
																							value={email}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onChangleHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="math">Điểm Toán</label>
																						<input
																							type="text"
																							name="math"
																							value={math}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onChangleHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="phy">Điểm Lý</label>
																						<input
																							type="text"
																							name="phy"
																							value={phy}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onChangleHandler}
																						/>
																					</div>
																				</div>
																				<div className="col-6">
																					<div className="form-group">
																						<label htmlFor="chem">Điểm Hóa</label>
																						<input
																							type="text"
																							name="chem"
																							value={chem}
																							className="form-control"
																							aria-describedby="helpId"
																							onChange={this.onChangleHandler}
																						/>
																					</div>
																				</div>
																			</div>
																			<div className="modal-footer border-top-0">
																				<button type="submit" className="btn btn-primary my-3">Lưu</button>
																				<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
																			</div>
																		</form>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<button className="btn btn-danger" type="button" onClick={() => onDeleteStudent(studentItem)}>Xóa</button>
											</div>
										</td>
									</tr>
								);
							})
						) : (
							<tr>
								<td colSpan="5" className="text-center">
									<p>Chưa điền thông tin sinh viên</p>
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
