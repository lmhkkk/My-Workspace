import React, { Component } from 'react';

class QuestionComponent extends Component {
	render() {
		const {onHandleChange,onSubmitHandler} = this.props;
		const {question, answer,id} = this.props.selectedQuiz;
		const{a, b, c, d} = answer;

		return (
			<div>
				<form key={id} onSubmit={onSubmitHandler}>
					<h2 className="fw-bold text-primary fs-3">{question}</h2>
					<ul>
						<li>
							<input type="radio" name="answer" value="a" onChange={onHandleChange}/>
							<label htmlFor="a" id={id} >{a}</label>
						</li>
						<li>
							<input type="radio" name="answer" value="b" onChange={onHandleChange}/>
							<label htmlFor="b" id={id}>{b}</label>
						</li>
						<li>
							<input type="radio" name="answer" value="c" onChange={onHandleChange}/>
							<label htmlFor="c"id={id} >{c}</label>
						</li>
						<li>
							<input type="radio" name="answer" value="d" onChange={onHandleChange}/>
							<label htmlFor="d" id={id}>{d}</label>
						</li>
					</ul>
					<button type="submit" className="btn-submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default QuestionComponent;