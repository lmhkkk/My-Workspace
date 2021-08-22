import React, { Component } from "react";
import QuestionComponent from "./QuestionComponent";
import ResultComponent from "./ResultComponent";
import './QuizzApp.css'

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
				},
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
			correctAnswer: [
				{
					id:1,
					answer:"d",
				},
				{
					id:2,
					answer:"b",
				},
				{
					id:3,
					answer:"a",
				},
				{
					id:4,
					answer:"b",
				},
			],
			isFinish: false,
			result:[]
		};
	}
	onChangeNewQuizz = (id) => {
		const { quizData } = this.state;
		const idx = quizData.findIndex((quizz) => quizz.id === id);

		if (idx < quizData.length - 1) {
			this.setState({
				selectedQuiz: quizData[idx + 1],
			});
		}
		else {
			this.setState({
				isFinish: true,
			});
		}
	};
	onCheckUserAnswer = (selectedAnswer) => {
		const { id, answer } = selectedAnswer;
		const {correctAnswer} = this.state;
		let finalResult = false;
		for(const item in correctAnswer){
			if(correctAnswer[item].id===id){
				if(correctAnswer[item].answer===answer){
					finalResult=true;
				}
			}
		}
		let newUserAnswer = {
			id:id,
			answer:answer,
			res:finalResult,
		}
		this.setState({
			result: [
				...this.state.result,newUserAnswer
			]
		})
	}

	render() {
		const { quizData, selectedQuiz, isFinish,result } = this.state;
		return (
			<div className="quiz-body">
				<div className="quiz-container">
					{!isFinish ?
						<QuestionComponent
							quizData={quizData}
							selectedQuiz={selectedQuiz}
							onChangeNewQuizz={this.onChangeNewQuizz}
							onCheckUserAnswer={this.onCheckUserAnswer}
						/> :
						<ResultComponent
						result={result}
						/>
					}
				</div>
			</div>
		);
	}
}
export default QuizzAppComponents;
