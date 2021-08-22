/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';

class ResultComponent extends Component {
	render() {
		const{result} = this.props;
		let count = 0;
		for(let item in result){
			if(result[item].res){
				count +=1;
			}
		}
		return (
			<div>
				<h3 className="text-center text-success">Chúc mừng bạn đã hoàn thành toàn bộ câu hỏi.<br/>
					Dưới đây là kết quả của bạn</h3>
				<table className="table ">
					<thead>
						<tr >
							<th scope="col" >Câu hỏi</th>
							<th scope="col" >Đáp án của bạn</th>
							<th scope="col" >Kết quả</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{result.map((item)=>{
							const{id,answer,res} =item;
							return(
								<tr key={id} className="fw-bold" >
								<th scope="row" className="px-4">{id}</th>
								<td className="px-5">{answer}</td>
								<td className="px-3" className={res?"text-success":"text-warning"}>{res?"TRUE":"FALSE"}</td>
								<td></td>
							</tr>
							)
						})}
						<tr>
							<th colSpan="2" className="text-primary">Tổng số:</th>
							<td colSpan="2" className="fw-bold px-3">{`${count} / ${result.length}`}</td>
						</tr>
					</tbody>
				</table>

			</div>
		);
	}
}

export default ResultComponent;