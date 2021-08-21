import React, { Component } from 'react';
const initialState = {
	id: "",
	fullname: "",
	phoneNumber: "",
	email: "",
	math:"",
	phy:"",
	chem:"",
}
class StudentForm extends Component {
	state = initialState;

	onChangleHandler=e=>{
		const{name,value} = e.target;
		this.setState({
			[name]:value,
		})
	};
	onResetform=()=>{
		this.setState(initialState);
	}
	onSubmitHandler=e=>{
		e.preventDefault();
		this.props.onAddStudent(this.state);
		this.onResetform();
	}

	render() {
		const {id,fullname,phoneNumber,email,math,phy,chem} = this.state;
		return (
			<div>
				<form onSubmit={this.onSubmitHandler}>
				<div className="row fw-bold">
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
			<button type="submit" className="btn btn-primary my-3" disabled={this.state===initialState?true:false}>Thêm sinh viên</button>
				</form>
			</div>
		);
	}
}

export default StudentForm;