import React, { Component } from 'react';
import QuestionComponent from './QuestionComponent';

class QuizzAppComponents extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quizData: [
				{
					question: "Which language runs in a web browser?",
					answer: {
						a: "Java",
						b: "C",
						c: "Python",
						d: "JavaScript",
					},
					id: 1,
				},
				{
					question: "What does CSS stand for?",
					answer: {
						a: "Central Style Sheets",
						b: "Cascading Style Sheets",
						c: "Cascading Simple Sheets",
						d: "Cars SUVs Sailboats",
					},
					id: 2,
				},
				{
					question: "What does HTML stand for?",
					answer: {
						a: "Hypertext Markup Language",
						b: "Hypertext Markdown Language",
						c: "Hyperloop Machine Language",
						d: "Helicopters Terminals Motorboats Lamborginis",
					},
					id: 3,
				},
				{
					question: "What year was JavaScript launched?",
					answer: {
						a: "1996",
						b: "1995",
						c: "1994",
						d: "none of the above",
					},
					id: 4,
				}
			],
			selectedQuiz: {
				question: "Which language runs in a web browser?",
				answer: {
					a: "Java",
					b: "C",
					c: "Python",
					d: "JavaScript",
				},
				id: 1,
			},
			correct: { 1: "d", 2: "b", 3: "a", 4: "b" },
		}
	}
	onHandleChange =e=>{
		const { name, value } = e.target;
		console.log(name)
		this.setState({
		  [name]: value
		});
	}
	onSubmitHandler=e=>{
		e.preventDefault();
	}
render() {
	const { selectedQuiz } = this.state;
	return (
		<div className="quiz-body">
			<div className="quiz-container">
				<QuestionComponent selectedQuiz={selectedQuiz} onHandleChange={this.onHandleChange} onSubmitHandler = {this.onSubmitHandler} />
			</div>
		</div>

	);

}
}
export default QuizzAppComponents;