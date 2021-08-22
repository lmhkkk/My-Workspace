import React, { Component } from 'react';

class QuestionComponent extends Component {
	state={
		selectedAnswer:{},
	}

	onHandleChange=e=>{
		const{name,value,id} = e.target;
		this.setState({
			selectedAnswer:{
				id: +id,
				question: name,
				answer: value,
			},
		})
	}
	onSubmitHandler=e=>{
		const{id} = this.state.selectedAnswer;
		e.preventDefault();
		if(id){
			this.props.onChangeNewQuizz(id);
		}
		else{
			window.alert("Hãy chọn đáp án trước khi Submit");
		}
		this.props.onCheckUserAnswer(this.state.selectedAnswer);
	}
	render() {
		const {id,question,answer} = this.props.selectedQuiz;
		const {a,b,c,d} = answer;

		return (
			<div>
				<form key={id} onSubmit={this.onSubmitHandler}>
					<h2 className="fw-bold text-primary fs-3">{question}</h2>
					<ul>
						<li>
							<input type="radio" name={question} value="a" id={id} onChange={this.onHandleChange} />
							<label htmlFor="a" >{a}</label>
						</li>
						<li>
							<input type="radio" name={question} value="b" id={id} onChange={this.onHandleChange} />
							<label htmlFor="b">{b}</label>
						</li>
						<li>
							<input type="radio" name={question} value="c" id={id} onChange={this.onHandleChange} />
							<label htmlFor="c">{c}</label>
						</li>
						<li>
							<input type="radio" name={question} value="d" id={id} onChange={this.onHandleChange} />
							<label htmlFor="d">{d}</label>
						</li>
					</ul>
					<button type="submit" className="btn-submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default QuestionComponent;